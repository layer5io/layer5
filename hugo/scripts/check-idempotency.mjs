#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { migrate } from './migrate-mdx.mjs';

function getAllFiles(dir, base = '') {
  const current = path.join(dir, base);
  if (!fs.existsSync(current)) return [];
  const entries = fs.readdirSync(current, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(dir, rel));
    } else {
      files.push(rel.replace(/\\/g, '/'));
    }
  }
  return files;
}

export function compareDirs(dirA, dirB) {
  const filesA = new Set(getAllFiles(dirA));
  const filesB = new Set(getAllFiles(dirB));
  const diffs = [];

  for (const file of filesA) {
    if (!filesB.has(file)) {
      diffs.push(`Missing in run 2 output: ${file}`);
      continue;
    }
    const bA = fs.readFileSync(path.join(dirA, file));
    const bB = fs.readFileSync(path.join(dirB, file));
    if (!bA.equals(bB)) {
      diffs.push(`Byte diff in ${file}: run1=${bA.length}b, run2=${bB.length}b`);
    }
  }

  for (const file of filesB) {
    if (!filesA.has(file)) {
      diffs.push(`Added in run 2 output: ${file}`);
    }
  }

  return diffs;
}

export function checkIdempotency(options = {}) {
  const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
  const src = options.src || path.join(rootDir, 'src/collections');
  const tmp1 = fs.mkdtempSync(path.join(os.tmpdir(), 'hugo-idemp-1-'));
  const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), 'hugo-idemp-2-'));

  try {
    console.log(`[idempotency] Run 1: converting ${src} -> ${tmp1}...`);
    migrate({ src, dest: tmp1, dryRun: false, exclude: ['sistent'] });

    console.log(`[idempotency] Run 2: converting ${tmp1} -> ${tmp2}...`);
    migrate({ src: tmp1, dest: tmp2, dryRun: false, exclude: ['sistent'] });

    console.log('[idempotency] Comparing output files byte-for-byte (bidirectional)...');
    const diffs = compareDirs(tmp1, tmp2);

    if (diffs.length > 0) {
      console.error(`[idempotency] FAIL: ${diffs.length} differences detected between runs:`);
      diffs.slice(0, 30).forEach((d) => console.error(`  - ${d}`));
      process.exit(1);
    }

    console.log('[idempotency] SUCCESS: Conversion is 100% idempotent (0 byte differences).');
  } finally {
    try {
      fs.rmSync(tmp1, { recursive: true, force: true });
      fs.rmSync(tmp2, { recursive: true, force: true });
    } catch {}
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  checkIdempotency();
}
