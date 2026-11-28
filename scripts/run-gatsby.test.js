/* eslint-env node */
"use strict";

/**
 * Covers the Windows Gatsby binary fallback: gatsby.cmd -> gatsby.exe ->
 * Gatsby's Node CLI when only gatsby.bunx metadata exists -> plain gatsby.
 * Non-Windows behavior stays unchanged.
 *
 * Run with: node --test scripts/run-gatsby.test.js
 */
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
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

  it("falls back to plain gatsby when no Windows shim exists", () => {
    const bin = resolveGatsbyBin({
      platform: "win32",
      binDir,
      existsSync: stubExists([]),
    });
    assert.equal(bin, path.join(binDir, "gatsby"));
  });
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
