#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { migrate } from './migrate-mdx.mjs';

function compareDirs(dirA, dirB, rel = '') {
  const currentRel = path.join(dirA, rel);
  if (!fs.existsSync(currentRel)) return [];
  const entriesA = fs.readdirSync(currentRel);
  const diffs = [];

  for (const entry of entriesA) {
    const pA = path.join(dirA, rel, entry);
    const pB = path.join(dirB, rel, entry);
    const relFile = path.join(rel, entry).replace(/\\/g, '/');

    if (!fs.existsSync(pB)) {
      diffs.push(`Missing in destination: ${relFile}`);
      continue;
    }

    const statA = fs.statSync(pA);
    const statB = fs.statSync(pB);

    if (statA.isDirectory()) {
      diffs.push(...compareDirs(dirA, dirB, path.join(rel, entry)));
    } else {
      const bA = fs.readFileSync(pA);
      const bB = fs.readFileSync(pB);
      if (!bA.equals(bB)) {
        diffs.push(`Byte diff in ${relFile}: run1=${bA.length}b, run2=${bB.length}b`);
      }
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

    console.log('[idempotency] Comparing output files byte-for-byte...');
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

