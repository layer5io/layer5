#!/usr/bin/env node
/* eslint-env node */
/**
 * Runs Gatsby with concurrency and heap limits sized to the current machine.
 *
 * Gatsby's default is to spawn one worker per CPU core and to let V8 grow the
 * heap until the OS runs out of memory. On a laptop (and especially under
 * WSL2, where the VM's memory ceiling is a fraction of the host's) that is how
 * a build takes the whole machine down. Every value here is a *ceiling*, and
 * anything already present in the environment wins, so CI can still opt into
 * more parallelism.
 *
 * Usage: node scripts/run-gatsby.js <develop|build|...> [gatsby args]
 */
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const GB = 1024 * 1024 * 1024;

// os.totalmem() reports the VM's RAM under WSL2, which is what we have to live
// within there. In a container it reports the host's, so prefer the cgroup
// ceiling when one is set lower.
const cgroupLimitBytes = () => {
  const fs = require("fs");
  const read = (file) => {
    try {
      const raw = fs.readFileSync(file, "utf8").trim();
      if (raw === "max") return null;
      const value = Number(raw);
      // cgroup v1 reports an absurd sentinel when unlimited.
      return Number.isFinite(value) && value > 0 && value < os.totalmem()
        ? value
        : null;
    } catch {
      return null;
    }
  };

  const candidates = [
    "/sys/fs/cgroup/memory.max", // v2, namespaced (containers)
    "/sys/fs/cgroup/memory/memory.limit_in_bytes", // v1, namespaced
  ];

  // Outside a container the mount is the cgroup root, so resolve this
  // process's own path (a systemd scope, a k8s pod slice, ...) as well.
  try {
    for (const line of fs
      .readFileSync("/proc/self/cgroup", "utf8")
      .split("\n")) {
      const [, controllers, cgPath] = line.split(":");
      if (!cgPath) continue;
      if (controllers === "")
        candidates.push(`/sys/fs/cgroup${cgPath}/memory.max`);
      if (controllers && controllers.split(",").includes("memory")) {
        candidates.push(`/sys/fs/cgroup/memory${cgPath}/memory.limit_in_bytes`);
      }
    }
  } catch {
    // /proc is not available (macOS, Windows); the plain paths still apply.
  }

  const limits = candidates.map(read).filter((v) => v != null);
  return limits.length ? Math.min(...limits) : null;
};

const totalGb = (cgroupLimitBytes() ?? os.totalmem()) / GB;
const cores = os.cpus()?.length || 2;

// Leave room for the OS, the editor, and a browser. Below ~6 GB of total RAM
// we assume nearly everything else is already competing for the machine.
const reservedGb = Math.min(3, Math.max(1.5, totalGb * 0.25));
const usableGb = Math.max(1.5, totalGb - reservedGb);

// Each Gatsby worker is a full Node process; budget ~1.6 GB apiece and never
// use more workers than we have cores.
const workers = Math.max(1, Math.min(cores, Math.floor(usableGb / 1.6), 4));

// V8's old-space ceiling. Capped so a runaway build fails fast instead of
// driving the machine into swap, and floored so small machines still get a
// workable heap.
const heapMb = Math.round(
  Math.min(8192, Math.max(2048, usableGb * 0.8 * 1024)),
);

// libvips allocates a decoded frame buffer per thread; more threads than this
// buys little and costs a lot of native memory.
const sharpConcurrency = Math.max(1, Math.min(workers, 3));

const defaults = {
  GATSBY_CPU_COUNT: String(workers),
  SHARP_CONCURRENCY: String(sharpConcurrency),
  UV_THREADPOOL_SIZE: String(Math.max(4, sharpConcurrency * 2)),
};

const env = { ...process.env };
for (const [key, value] of Object.entries(defaults)) {
  if (!env[key]) env[key] = value;
}

const heapFlag = `--max-old-space-size=${heapMb}`;
if (!/--max-old-space-size/.test(env.NODE_OPTIONS || "")) {
  env.NODE_OPTIONS = `${env.NODE_OPTIONS || ""} ${heapFlag}`.trim();
}

const args = process.argv.slice(2);
console.info(
  `[run-gatsby] ${totalGb.toFixed(1)} GB RAM / ${cores} cores -> ` +
    `workers=${env.GATSBY_CPU_COUNT} sharp=${env.SHARP_CONCURRENCY} heap=${heapMb}MB`,
);

const gatsbyBin = (() => {
  const binDir = path.join(__dirname, "..", "node_modules", ".bin");
  if (process.platform === "win32") {
    // npm creates gatsby.cmd, but pnpm/bun may only create gatsby.exe or gatsby.bunx
    for (const candidate of ["gatsby.cmd", "gatsby.exe", "gatsby.bunx"]) {
      const full = path.join(binDir, candidate);
      if (require("fs").existsSync(full)) return full;
    }
  }
  return path.join(binDir, "gatsby");
})();

const child = spawn(gatsbyBin, args, {
  env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

const forward = (signal) => () => child.kill(signal);
process.on("SIGINT", forward("SIGINT"));
process.on("SIGTERM", forward("SIGTERM"));

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
