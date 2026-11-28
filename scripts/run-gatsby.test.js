/* eslint-env node */
"use strict";

/**
 * Covers the Windows Gatsby binary fallback: gatsby.cmd -> gatsby.exe ->
 * Gatsby's Node CLI when only gatsby.bunx metadata exists.
 * Non-Windows behavior stays unchanged.
 *
 * Run with: node --test scripts/run-gatsby.test.js
 */
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } = require("node:fs");
const path = require("node:path");

const { resolveGatsbyBin } = require("./run-gatsby");

const binDir = path.join("node_modules", ".bin");

const stubExists = (presentFiles) => {
  const present = new Set(presentFiles);
  return (file) => present.has(path.basename(file));
};

describe("resolveGatsbyBin (win32)", () => {
  it("prefers gatsby.cmd when all shims exist", () => {
    const bin = resolveGatsbyBin({
      platform: "win32",
      binDir,
      existsSync: stubExists(["gatsby.cmd", "gatsby.exe", "gatsby.bunx"]),
    });
    assert.equal(bin, path.join(binDir, "gatsby.cmd"));
  });

  it("falls back to gatsby.exe when gatsby.cmd is missing", () => {
    const bin = resolveGatsbyBin({
      platform: "win32",
      binDir,
      existsSync: stubExists(["gatsby.exe", "gatsby.bunx"]),
    });
    assert.equal(bin, path.join(binDir, "gatsby.exe"));
  });

  it("uses Gatsby's Node CLI when only the Bun metadata file is installed", () => {
    const bin = resolveGatsbyBin({
      platform: "win32",
      binDir,
      existsSync: stubExists(["gatsby.bunx"]),
    });
    assert.equal(bin, path.resolve(binDir, "..", "gatsby-cli", "cli.js"));
  });

  it("rejects an extensionless file when no Windows shim exists", () => {
    const bin = resolveGatsbyBin({
      platform: "win32",
      binDir,
      existsSync: stubExists(["gatsby"]),
    });
    assert.equal(bin, null);
  });
});

describe("Windows Gatsby wrapper", { skip: process.platform !== "win32" }, () => {
  for (const shim of ["gatsby.cmd", "gatsby.exe", "gatsby.bunx"]) {
    it(`forwards arguments through ${shim} from a literal checkout path`, (t) => {
      const root = mkdtempSync(path.join(__dirname, "gatsby fixture %GATSBY_FIXTURE_NAME% "));
      t.after(() => rmSync(root, { recursive: true, force: true }));
      const wrapper = path.join(root, "scripts", "run-gatsby.js");
      const bin = path.join(root, binDir);
      const launcher = path.join(bin, shim);
      mkdirSync(path.dirname(wrapper));
      mkdirSync(bin, { recursive: true });
      copyFileSync(path.join(__dirname, "run-gatsby.js"), wrapper);

      const args = ["develop", "--host", "local dev & test", "", 'a"b', "dir\\"];
      const cli = "console.log(JSON.stringify(process.argv.slice(2)));";
      const fixture = path.join(root, "fixture cli.js");
      writeFileSync(fixture, cli);
      let wrapperArgs = args;
      if (shim === "gatsby.exe") {
        copyFileSync(process.execPath, launcher);
        wrapperArgs = [fixture, ...args];
      } else if (shim === "gatsby.cmd") {
        writeFileSync(launcher, '@"%GATSBY_FIXTURE_NODE%" "%GATSBY_FIXTURE_CLI%" %*\r\n');
      } else {
        writeFileSync(launcher, "");
        const cliDir = path.resolve(bin, "..", "gatsby-cli");
        mkdirSync(cliDir);
        writeFileSync(path.join(cliDir, "cli.js"), cli);
      }

      const result = spawnSync(process.execPath, [wrapper, ...wrapperArgs], {
        encoding: "utf8",
        env: {
          ...process.env,
          GATSBY_FIXTURE_NAME: "expanded",
          GATSBY_FIXTURE_NODE: process.execPath,
          GATSBY_FIXTURE_CLI: fixture,
        },
      });
      assert.equal(result.status, 0, result.stderr);
      assert.deepEqual(JSON.parse(result.stdout.trim().split(/\r?\n/).pop()), args);
    });
  }
});

describe("resolveGatsbyBin (non-Windows)", () => {
  for (const platform of ["linux", "darwin"]) {
    it(`returns plain gatsby on ${platform} even when shims exist`, () => {
      const bin = resolveGatsbyBin({
        platform,
        binDir,
        existsSync: stubExists(["gatsby.cmd", "gatsby.exe", "gatsby.bunx"]),
      });
      assert.equal(bin, path.join(binDir, "gatsby"));
    });
  }
});
