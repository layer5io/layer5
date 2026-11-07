#!/usr/bin/env node
/**
 * url-inventory.mjs: every URL the live Gatsby site serves, and where each one comes from.
 * verify-urls.mjs --inventory reads the result. The sitemap alone is not enough: redirect sources
 * and pages that gatsby-plugin-sitemap leaves out are not in it.
 *
 *   make url-inventory     # reads the deployed build on gh-pages, no Gatsby build needed
 *
 *   node scripts/url-inventory.mjs --out .bench/url-inventory.json \
 *     --gatsby-files .bench/gatsby-files.txt    # paths of a Gatsby build, one per line (git ls-tree of gh-pages)
 *     --gatsby-public ../public                 # or the public/ folder of a local `gatsby build`
 *     --sitemap .bench/gatsby-sitemap.xml       # live sitemap <urlset>
 *     --redirects ../src/utils/redirects.yaml   # createRedirect sources
 *     --collections ../src/collections          # MDX front matter with redirect_from
 *
 * Every source is optional and repeatable. Each row lists all the sources that have its URL.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { norm, locs } from './verify-urls.mjs';

// PR previews and Gatsby internals live on gh-pages too, but they are not site URLs.
// GitHub Pages serves 404.html for unknown paths, so the 404 page is not a URL to keep.
const SKIP = /^(pr-preview|hugo-preview|_gatsby)\/|^404(\.html|\/index\.html)$/;

// 'blog/a/index.html' → '/blog/a/', 'mail/x.html' → '/mail/x.html'. Not a page → null.
export function urlForFile(file) {
  const f = file.trim().replace(/^\.?\//, '');
  if (!f.endsWith('.html') || SKIP.test(f)) return null;
  return norm('/' + f.replace(/(^|\/)index\.html$/, ''));
}

// fromPath of every entry in src/utils/redirects.yaml.
export const yamlRedirects = (txt) =>
  [...txt.matchAll(/^\s*-?\s*fromPath:\s*["']?([^"'\n]+?)["']?\s*$/gm)].map((m) => norm(m[1]));

// redirect_from in front matter, as a block list, a flow list or a single value.
export function redirectFrom(md) {
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(md);
  if (!fm) return [];
  const lines = fm[1].split(/\r?\n/);
  const i = lines.findIndex((l) => l.startsWith('redirect_from:'));
  if (i < 0) return [];
  const inline = lines[i].slice('redirect_from:'.length).trim();
  const items = [];
  if (inline) items.push(...inline.replace(/^\[|\]$/g, '').split(','));
  else for (let j = i + 1; j < lines.length && /^\s*-\s/.test(lines[j]); j++) items.push(lines[j].replace(/^\s*-\s*/, ''));
  return items.map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean).map(norm);
}

// sources: { name: [url, ...] } → one row per URL, sorted, with every source that lists it.
export function buildInventory(sources) {
  const rows = new Map();
  for (const [name, urls] of Object.entries(sources)) {
    for (const u of urls) {
      if (!u) continue;
      if (!rows.has(u)) rows.set(u, new Set());
      rows.get(u).add(name);
    }
  }
  const urls = [...rows.keys()].sort().map((url) => ({ url, sources: [...rows.get(url)].sort() }));
  const counts = Object.fromEntries(Object.keys(sources).map((n) => [n, urls.filter((r) => r.sources.includes(n)).length]));
  return { count: urls.length, sources: counts, urls };
}

// Files only: some folders have names like `foo.md`.
const filesUnder = (dir) => fs.readdirSync(dir, { recursive: true, withFileTypes: true })
  .filter((d) => d.isFile()).map((d) => path.relative(dir, path.join(d.parentPath ?? d.path, d.name)));

function main() {
  const a = process.argv.slice(2);
  const all = (f) => a.flatMap((x, i) => (x === f && a[i + 1] ? [a[i + 1]] : []));
  const out = all('--out')[0] || '.bench/url-inventory.json';
  const read = (p) => fs.readFileSync(p, 'utf8');
  const sources = {};
  const add = (name, urls) => { (sources[name] ||= []).push(...urls); };

  for (const f of all('--gatsby-files')) add('gatsby-public', read(f).split('\n').map(urlForFile));
  for (const d of all('--gatsby-public')) add('gatsby-public', filesUnder(d).map(urlForFile));
  for (const f of all('--sitemap')) add('sitemap', locs(read(f)));
  for (const f of all('--redirects')) add('redirects.yaml', yamlRedirects(read(f)));
  for (const d of all('--collections')) {
    for (const f of filesUnder(d).filter((x) => /\.mdx?$/.test(x))) add('redirect_from', redirectFrom(read(path.join(d, f))));
  }
  if (!Object.keys(sources).length) {
    console.error('Usage: url-inventory.mjs [--gatsby-files <list>] [--gatsby-public <dir>] [--sitemap <xml>] [--redirects <yaml>] [--collections <dir>] [--out <json>]');
    process.exit(2);
  }

  const inv = buildInventory(sources);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(inv, null, 2) + '\n');
  console.log(`${inv.count} URLs → ${out}`);
  for (const [n, c] of Object.entries(inv.sources)) console.log(`  ${n.padEnd(15)} ${c}`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
