#!/usr/bin/env node
/**
 * verify-urls.mjs — SEO safety net for Workstream 4.
 * Every live Gatsby URL must still exist in the Hugo build: as a page, as an alias stub
 * (<path>/index.html with http-equiv="refresh") or in _redirects.
 *
 *   make url-inventory && make verify-urls
 *   node scripts/verify-urls.mjs --inventory .bench/url-inventory.json --public public --allow scripts/verify-urls.allow
 *
 * The older sitemap-to-sitemap mode still works:
 *   hugo --minify && node scripts/verify-urls.mjs --old .bench/gatsby-sitemap.xml --new public/sitemap.xml --redirects public/_redirects
 *
 * Exit code 1 when a URL is unaccounted for, so it can gate CI. With --allow, missing URLs in the
 * listed collections are reported but don't fail.
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

// Hugo aliases and gatsby-plugin-meta-redirect both write a meta refresh stub. Hugo's minifier drops the quotes.
export const isAliasStub = (html) => /<meta[^>]+http-equiv\s*=\s*["']?refresh/i.test(html);

// Files that can serve a URL: '/a/' → a/index.html, '/feed.xml' → feed.xml or feed.xml/index.html.
export const filesFor = (u) => (u.endsWith('/') ? [u.slice(1) + 'index.html'] : [u.slice(1), u.slice(1) + '/index.html']);

// Which of the URLs a built site serves as a page and which as an alias stub.
export function scanPublic(dir, urls) {
  const pages = new Set(), aliases = new Set();
  for (const u of urls) {
    const f = filesFor(u).map((p) => path.join(dir, p)).find((p) => fs.statSync(p, { throwIfNoEntry: false })?.isFile());
    if (!f) continue;
    (f.endsWith('.html') && isAliasStub(fs.readFileSync(f, 'utf8')) ? aliases : pages).add(u);
  }
  return { pages, aliases };
}

// Content collections from the Phase 3 issues (epic #8297). First match wins; everything else is a hand-written page.
export const COLLECTIONS = [
  ['blog', /^\/blog\//],
  ['news', /^\/company\/news\//],
  ['events', /^\/community\/events\//],
  ['members', /^\/community\/members\//],
  ['handbook', /^\/community\/handbook\//],
  ['integrations', /^\/cloud-native-management\/meshery\/integrations\//],
  ['resources', /^\/resources\//],
  ['programs', /^\/(programs|careers)\//],
  ['learn', /^\/learn\//],
  ['sistent', /^\/projects\/sistent\//],
  ['files', /\.[a-z0-9]{2,5}$/i],
];
export const collectionOf = (u) => (COLLECTIONS.find(([, re]) => re.test(u)) || ['pages'])[0];

export function compare({ oldXml = '', oldUrls = null, newXml = '', redirectsTxt = '', pages = new Set(), aliases = new Set(), ignore = null }) {
  const oldU = new Set(oldUrls ? oldUrls.map(norm) : locs(oldXml)), newU = new Set(locs(newXml));
  const redirected = new Set([...redirectSources(redirectsTxt), ...aliases]);
  const present = [], missing = [], redirectedOk = [];
  for (const u of oldU) {
    if (ignore && ignore.test(u)) continue;
    if (newU.has(u) || pages.has(u)) present.push(u);
    else (redirected.has(u) ? redirectedOk : missing).push(u);
  }
  const added = [...newU].filter((u) => !oldU.has(u));
  return { oldCount: oldU.size, newCount: newU.size, present: present.sort(), missing: missing.sort(), redirected: redirectedOk.sort(), added: added.sort() };
}

// One row per collection. A collection fails when it has missing URLs and is not on the allow-list.
export function perCollection(r, allow = new Set()) {
  const rows = new Map();
  for (const key of ['present', 'redirected', 'missing']) {
    for (const u of r[key]) {
      const c = collectionOf(u);
      if (!rows.has(c)) rows.set(c, { collection: c, urls: 0, present: 0, redirected: 0, missing: 0, allowed: allow.has(c) });
      const row = rows.get(c);
      row.urls++;
      row[key]++;
    }
  }
  return [...rows.values()].sort((a, b) => a.collection.localeCompare(b.collection)).map((x) => ({ ...x, fails: x.missing > 0 && !x.allowed }));
}

export const readAllowList = (txt) => new Set(txt.split('\n').map((l) => l.replace(/#.*/, '').trim()).filter(Boolean));

function main() {
  const a = process.argv.slice(2); const get = (f) => { const i = a.indexOf(f); return i < 0 ? undefined : a[i + 1]; };
  let oldPath = get('--old');
  const invPath = get('--inventory'), publicDir = get('--public');
  // Hugo writes a sitemap into public/. The Hugo URL and "new in Hugo" counts come from it.
  const builtSitemap = publicDir && path.join(publicDir, 'sitemap.xml');
  const newPath = get('--new') || (builtSitemap && fs.existsSync(builtSitemap) ? builtSitemap : undefined);
  const hasSitemap = Boolean(newPath && fs.existsSync(newPath));
  if (!oldPath && !invPath && fs.existsSync('.bench/gatsby-sitemap.xml')) {
    console.warn('Warning: --old not specified. Falling back to cached benchmark sitemap (.bench/gatsby-sitemap.xml).');
    oldPath = '.bench/gatsby-sitemap.xml';
  }
  if ((!oldPath && !invPath) || (!newPath && !publicDir)) {
    console.error('Usage: verify-urls.mjs (--inventory <url-inventory.json> | --old <gatsby sitemap.xml>) (--public <hugo public/> | --new <hugo sitemap.xml>)\n'
      + '                      [--redirects public/_redirects] [--allow <collections file>] [--ignore <regex>] [--report <json>]');
    process.exit(2);
  }
  const oldUrls = invPath ? JSON.parse(fs.readFileSync(invPath, 'utf8')).urls.map((x) => x.url) : null;
  const redirectsPath = get('--redirects') || (publicDir && path.join(publicDir, '_redirects'));
  console.log(`Comparing Gatsby URLs: ${invPath || oldPath}\nAgainst Hugo build:    ${[publicDir, newPath].filter(Boolean).join(' + ')}`);
  const r = compare({
    oldXml: oldPath ? fs.readFileSync(oldPath, 'utf8') : '', oldUrls,
    newXml: hasSitemap ? fs.readFileSync(newPath, 'utf8') : '',
    redirectsTxt: redirectsPath && fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, 'utf8') : '',
    ...(publicDir ? scanPublic(publicDir, oldUrls || locs(fs.readFileSync(oldPath, 'utf8'))) : {}),
    ignore: get('--ignore') ? new RegExp(get('--ignore')) : null,
  });
  const allow = get('--allow') ? readAllowList(fs.readFileSync(get('--allow'), 'utf8')) : new Set();
  const rows = perCollection(r, allow);

  console.log('\nPer collection:');
  for (const x of rows) {
    console.log(`  ${x.collection.padEnd(13)} MISSING: ${String(x.missing).padStart(4)} of ${String(x.urls).padStart(4)}   redirected: ${String(x.redirected).padStart(3)}${x.allowed ? '   (allow-listed, reported only)' : ''}`);
  }
  // Without a sitemap there is nothing to count, so print n/a rather than a misleading 0.
  const [hugoUrls, newInHugo] = hasSitemap ? [r.newCount, r.added.length] : ['n/a', 'n/a'];
  console.log(`\nGatsby URLs: ${r.oldCount}  Hugo URLs: ${hugoUrls}  same-or-redirected: ${r.present.length + r.redirected.length}  MISSING: ${r.missing.length}  new in Hugo: ${newInHugo}`);
  if (!hasSitemap) console.log('(No Hugo sitemap.xml found, so Hugo URLs and new in Hugo are not counted.)');
  if (get('--report')) {
    fs.mkdirSync(path.dirname(get('--report')), { recursive: true });
    fs.writeFileSync(get('--report'), JSON.stringify({ collections: rows, missing: r.missing, redirected: r.redirected, added: r.added }, null, 2) + '\n');
  }
  if (r.redirected.length) console.log(`\n${r.redirected.length} URL(s) preserved via redirect (fine, but 301 hops cost a little SEO equity).`);

  const failing = r.missing.filter((u) => !allow.has(collectionOf(u)));
  if (failing.length) {
    console.log('\nMissing (would 404 after cutover):'); failing.slice(0, 200).forEach((u) => console.log('  ' + u));
    if (failing.length > 200) console.log(`  … and ${failing.length - 200} more`);
    process.exit(1);
  }
  console.log(r.missing.length ? '\nOK: every missing URL is in an allow-listed collection.' : '\nOK: no URL lost.');
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
