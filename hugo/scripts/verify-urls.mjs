#!/usr/bin/env node
/**
 * verify-urls.mjs — SEO safety net for Workstream 4.
 * Every URL in the live Gatsby sitemap must either exist in the Hugo sitemap or be preserved by a
 * Hugo `aliases` HTML stub (meta refresh) in the build output whose target is in the Hugo sitemap.
 * Production is GitHub Pages, which ignores `_redirects`, so that file is not used (see hugo/README.md).
 *
 *   curl -s https://layer5.io/sitemap-0.xml -o .bench/gatsby-sitemap.xml      # or sitemap-index.xml children
 *   hugo --minify && node scripts/verify-urls.mjs --old .bench/gatsby-sitemap.xml --new public/sitemap.xml [--public public]
 *
 * Exit code 1 when anything is unaccounted for, so it can gate CI.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const norm = (u) => {
  let p = u.trim();
  try { p = new URL(p, 'https://x.invalid').pathname; } catch { /* already a path */ }
  p = decodeURI(p);
  return p.endsWith('/') || /\.[a-z0-9]{2,5}$/i.test(p) ? p : p + '/';
};
export const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => norm(m[1]));
export const redirectSources = (txt) =>
  txt.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')).map((l) => norm(l.split(/\s+/)[0]));

const REFRESH_RE = /<meta[^>]+http-equiv=["']?refresh["']?[^>]*content=["']?\s*\d+\s*;\s*url=['"]?([^'">\s]+)/i;

/** Parse an alias stub. Returns the normalized redirect target path, or null if not a stub. */
export const stubTarget = (html) => {
  const m = html.match(REFRESH_RE);
  return m ? norm(m[1]) : null; // norm() strips the origin
};

/** Walk the build output and return Map<sourcePath, targetPath> for every alias stub. */
export function collectAliasStubs(publicDir) {
  const stubs = new Map();
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) { walk(full); continue; }
      if (!e.name.endsWith('.html') || fs.statSync(full).size > 2048) continue; // stubs are tiny
      const target = stubTarget(fs.readFileSync(full, 'utf8'));
      if (!target) continue;
      const rel = path.relative(publicDir, full).split(path.sep).join('/');
      const src = e.name === 'index.html' ? '/' + rel.slice(0, -'index.html'.length) : '/' + rel;
      stubs.set(norm(src), target);
    }
  };
  walk(publicDir);
  return stubs;
}

export function compare({ oldXml, newXml, redirectsTxt = '', aliasStubs = new Map(), ignore = null }) {
  const oldU = new Set(locs(oldXml)), newU = new Set(locs(newXml)), redirected = new Set(redirectSources(redirectsTxt));
  const missing = [], redirectedOk = [], brokenAliases = [];
  for (const u of oldU) {
    if (ignore && ignore.test(u)) continue;
    if (newU.has(u)) continue;
    if (aliasStubs.has(u)) {
      const target = aliasStubs.get(u);
      if (newU.has(target)) redirectedOk.push(u);
      else { missing.push(u); brokenAliases.push(`${u} -> ${target}`); }
    } else if (redirected.has(u)) redirectedOk.push(u);
    else missing.push(u);
  }
  const added = [...newU].filter((u) => !oldU.has(u));
  return { oldCount: oldU.size, newCount: newU.size, missing: missing.sort(), redirected: redirectedOk.sort(), brokenAliases: brokenAliases.sort(), added: added.sort() };
}

function main() {
  const a = process.argv.slice(2); const get = (f) => { const i = a.indexOf(f); return i < 0 ? undefined : a[i + 1]; };
  let oldPath = get('--old');
  const newPath = get('--new');
  if (!oldPath && fs.existsSync('.bench/gatsby-sitemap.xml')) {
    console.warn('Warning: --old not specified. Falling back to cached benchmark sitemap (.bench/gatsby-sitemap.xml).');
    oldPath = '.bench/gatsby-sitemap.xml';
  }
  if (!oldPath || !newPath) {
    console.error('Usage: verify-urls.mjs --old <gatsby sitemap.xml> --new <hugo sitemap.xml> [--public public] [--ignore <regex>]');
    process.exit(2);
  }
  const publicDir = get('--public') || path.dirname(newPath);
  if (!fs.existsSync(publicDir)) { console.error(`Build output not found: ${publicDir}`); process.exit(2); }
  console.log(`Comparing Gatsby sitemap: ${oldPath}\nAgainst Hugo sitemap:   ${newPath}`);
  const r = compare({
    oldXml: fs.readFileSync(oldPath, 'utf8'), newXml: fs.readFileSync(newPath, 'utf8'),
    aliasStubs: collectAliasStubs(publicDir),
    ignore: get('--ignore') ? new RegExp(get('--ignore')) : null,
  });
  console.log(`Gatsby URLs: ${r.oldCount}  Hugo URLs: ${r.newCount}  same-or-redirected: ${r.oldCount - r.missing.length}  MISSING: ${r.missing.length}  new in Hugo: ${r.added.length}`);
  if (r.redirected.length) console.log(`\n${r.redirected.length} URL(s) preserved via alias stub (fine, but redirect hops cost a little SEO equity).`);
  if (r.brokenAliases.length) { console.log('\nAlias stubs whose target is not in the Hugo sitemap:'); r.brokenAliases.forEach((u) => console.log('  ' + u)); }
  if (r.missing.length) { console.log('\nMissing (would 404 after cutover):'); r.missing.slice(0, 200).forEach((u) => console.log('  ' + u)); if (r.missing.length > 200) console.log(`  … and ${r.missing.length - 200} more`); process.exit(1); }
  console.log('\nOK: no URL lost.');
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
