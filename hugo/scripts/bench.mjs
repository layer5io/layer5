import { spawnSync, execSync } from 'node:child_process';
import { rmSync, readdirSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function parseGnuTime(text) {
  const wallMatch = text.match(/Elapsed \(wall clock\).*?:\s*([\d:.]+)/i);
  const rssMatch = text.match(/Maximum resident set size \(kbytes\):\s*(\d+)/i);
  if (!wallMatch || !rssMatch) {
    throw new Error('Failed to parse GNU time output: missing elapsed time or max RSS');
  }
  const parts = wallMatch[1].trim().split(':').map(Number);
  let secs = 0;
  for (const p of parts) {
    secs = secs * 60 + p;
  }
  const rssKb = parseInt(rssMatch[1], 10);
  return {
    build_seconds: Number(secs.toFixed(2)),
    memory_mb: Math.round(rssKb / 1024)
  };
}

export function parseBsdTime(text) {
  const realMatch = text.match(/\b([\d.]+)\s+real\b/i);
  const rssMatch = text.match(/\b(\d+)\s+maximum resident set size\b/i);
  if (!realMatch || !rssMatch) {
    throw new Error('Failed to parse BSD time output: missing real time or max RSS');
  }
  const secs = parseFloat(realMatch[1]);
  const bytes = parseInt(rssMatch[1], 10);
  return {
    build_seconds: Number(secs.toFixed(2)),
    memory_mb: Math.round(bytes / (1024 * 1024))
  };
}

export function parseGoMemory(text) {
  const sysMatch = text.match(/Sys\s*=\s*([\d.]+)\s*MB/i);
  if (sysMatch) {
    return Math.round(parseFloat(sysMatch[1]));
  }
  return 0;
}

export function detectMethod() {
  if (process.platform === 'linux') {
    try {
      if (existsSync('/usr/bin/time')) {
        const check = spawnSync('/usr/bin/time', ['-v', 'true'], { stdio: 'ignore' });
        if (check.status === 0) {
          return 'gnu-time-max-rss';
        }
      }
    } catch {}
  } else if (process.platform === 'darwin') {
    try {
      if (existsSync('/usr/bin/time')) {
        const check = spawnSync('/usr/bin/time', ['-l', 'true'], { stdio: 'ignore' });
        if (check.status === 0) {
          return 'bsd-time-max-rss';
        }
      }
    } catch {}
  }
  return 'go-printMemoryUsage-approx';
}

export function countIndexHtml(dir) {
  let count = 0;
  if (!existsSync(dir)) return 0;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countIndexHtml(fullPath);
    } else if (entry.name === 'index.html') {
      count++;
    }
  }
  return count;
}

export function runBenchmark() {
  const pagesIn = process.env.PAGES || '1210';

  // 1. Generate synthetic content
  execSync(`node scripts/generate-synthetic-content.mjs --pages ${pagesIn} --out .bench/content`, { stdio: 'inherit' });

  // 2. Clean
  rmSync('.bench/public', { recursive: true, force: true });
  rmSync('resources/_gen', { recursive: true, force: true });

  // 3. Detect method and run
  const method = detectMethod();
  let build_seconds = 0;
  let memory_mb = 0;

  if (method === 'gnu-time-max-rss') {
    const res = spawnSync('/usr/bin/time', [
      '-v',
      'hugo',
      '--contentDir', '.bench/content',
      '--destination', '.bench/public',
      '--minify',
      '--logLevel', 'warn'
    ], { encoding: 'utf-8' });

    if (res.error) {
      console.error(res.error);
      process.exit(1);
    }
    if (res.status !== 0) {
      console.error(res.stderr || res.stdout);
      process.exit(res.status || 1);
    }
    const parsed = parseGnuTime(res.stderr);
    build_seconds = parsed.build_seconds;
    memory_mb = parsed.memory_mb;
  } else if (method === 'bsd-time-max-rss') {
    const res = spawnSync('/usr/bin/time', [
      '-l',
      'hugo',
      '--contentDir', '.bench/content',
      '--destination', '.bench/public',
      '--minify',
      '--logLevel', 'warn'
    ], { encoding: 'utf-8' });

    if (res.error) {
      console.error(res.error);
      process.exit(1);
    }
    if (res.status !== 0) {
      console.error(res.stderr || res.stdout);
      process.exit(res.status || 1);
    }
    const parsed = parseBsdTime(res.stderr);
    build_seconds = parsed.build_seconds;
    memory_mb = parsed.memory_mb;
  } else {
    // Fallback: Windows or where /usr/bin/time is not available
    const t0 = performance.now();
    const res = spawnSync('hugo', [
      '--contentDir', '.bench/content',
      '--destination', '.bench/public',
      '--minify',
      '--logLevel', 'warn',
      '--printMemoryUsage'
    ], { encoding: 'utf-8' });

    const elapsedMs = performance.now() - t0;
    build_seconds = Number((elapsedMs / 1000).toFixed(2));

    if (res.error) {
      console.error(res.error);
      process.exit(1);
    }
    if (res.status !== 0) {
      console.error(res.stderr || res.stdout);
      process.exit(res.status || 1);
    }
    memory_mb = parseGoMemory(res.stdout + '\n' + res.stderr);
  }

  const htmlPages = countIndexHtml('.bench/public');
  const hugoVer = execSync('hugo version', { encoding: 'utf-8' }).trim().split(' ').slice(0, 2).join(' ');

  const result = {
    pages_in: Number(pagesIn),
    html_out: htmlPages,
    build_seconds: build_seconds,
    memory_mb: memory_mb,
    memory_method: method,
    ...(method.endsWith('-max-rss')
      ? { peak_rss_mb: memory_mb }
      : { approx_go_memory_mb: memory_mb }),
    hugo: hugoVer,
    os: process.platform
  };

  writeFileSync('.bench/result.json', JSON.stringify(result) + '\n');

  const memLabel = method.endsWith('-max-rss')
    ? `peak RSS ${memory_mb} MB (${method})`
    : `approx Go memory ${memory_mb} MB (${method}, not peak RSS)`;

  console.log(`Built ${htmlPages} HTML pages in ${build_seconds}s, ${memLabel}   (plan target: < 6 s, < 250 MB; target, not a promise)`);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const summary = `### Hugo build benchmark\n| pages | build | memory |\n|---|---|---|\n| ${htmlPages} | ${build_seconds}s | ${memLabel} |\n`;
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  }
}

const isMain = process.argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(process.argv[1]);
if (isMain) {
  runBenchmark();
}
