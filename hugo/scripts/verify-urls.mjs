#!/usr/bin/env node
/**
 * verify-urls.mjs — SEO safety net for Workstream 4.
 * Every URL in the live Gatsby sitemap must either exist in the Hugo sitemap or be redirected via _redirects.
 *
 *   curl -s https://layer5.io/sitemap-0.xml -o .bench/gatsby-sitemap.xml      # or sitemap-index.xml children
 *   hugo --minify && node scripts/verify-urls.mjs --old .bench/gatsby-sitemap.xml --new public/sitemap.xml --redirects public/_redirects
 *
 * Exit code 1 when anything is unaccounted for, so it can gate CI.
 */
import fs from 'node:fs';
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

export function compare({ oldXml, newXml, redirectsTxt = '', ignore = null }) {
  const oldU = new Set(locs(oldXml)), newU = new Set(locs(newXml)), redirected = new Set(redirectSources(redirectsTxt));
  const missing = [], redirectedOk = [];
  for (const u of oldU) {
    if (ignore && ignore.test(u)) continue;
    if (newU.has(u)) continue;
    (redirected.has(u) ? redirectedOk : missing).push(u);
  }
  const added = [...newU].filter((u) => !oldU.has(u));
  return { oldCount: oldU.size, newCount: newU.size, missing: missing.sort(), redirected: redirectedOk.sort(), added: added.sort() };
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
    console.error('Usage: verify-urls.mjs --old <gatsby sitemap.xml> --new <hugo sitemap.xml> [--redirects public/_redirects] [--ignore <regex>]');
    process.exit(2);
  }
  console.log(`Comparing Gatsby sitemap: ${oldPath}\nAgainst Hugo sitemap:   ${newPath}`);
  const r = compare({
    oldXml: fs.readFileSync(oldPath, 'utf8'), newXml: fs.readFileSync(newPath, 'utf8'),
    redirectsTxt: get('--redirects') && fs.existsSync(get('--redirects')) ? fs.readFileSync(get('--redirects'), 'utf8') : '',
    ignore: get('--ignore') ? new RegExp(get('--ignore')) : null,
  });
  console.log(`Gatsby URLs: ${r.oldCount}  Hugo URLs: ${r.newCount}  same-or-redirected: ${r.oldCount - r.missing.length}  MISSING: ${r.missing.length}  new in Hugo: ${r.added.length}`);
  if (r.redirected.length) console.log(`\n${r.redirected.length} URL(s) preserved via redirect (fine, but 301 hops cost a little SEO equity).`);
  if (r.missing.length) { console.log('\nMissing (would 404 after cutover):'); r.missing.slice(0, 200).forEach((u) => console.log('  ' + u)); if (r.missing.length > 200) console.log(`  … and ${r.missing.length - 200} more`); process.exit(1); }
  console.log('\nOK: no URL lost.');
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
