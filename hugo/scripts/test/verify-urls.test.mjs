import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { compare, norm, isAliasStub, scanPublic, collectionOf, perCollection, readAllowList } from '../verify-urls.mjs';

const xml = (...u) => `<urlset>${u.map((x) => `<url><loc>${x}</loc></url>`).join('')}</urlset>`;

test('norm: strips origin/query, adds trailing slash, keeps file URLs', () => {
  assert.equal(norm('https://layer5.io/blog/a?x=1#y'), '/blog/a/');
  assert.equal(norm('/feed.xml'), '/feed.xml');
});

test('missing vs redirected vs added', () => {
  const r = compare({
    oldXml: xml('https://layer5.io/', 'https://layer5.io/blog/a', 'https://layer5.io/old', 'https://layer5.io/lost'),
    newXml: xml('https://layer5.io/', 'https://layer5.io/blog/a/', 'https://layer5.io/new/'),
    redirectsTxt: '# comment\n/old /new/ 301\n',
  });
  assert.deepEqual(r.missing, ['/lost/']);
  assert.deepEqual(r.redirected, ['/old/']);
  assert.deepEqual(r.added, ['/new/']);
});

test('ignore pattern skips matching URLs', () => {
  const r = compare({ oldXml: xml('https://layer5.io/404'), newXml: xml(), ignore: /^\/404/ });
  assert.equal(r.missing.length, 0);
});

test('isAliasStub: Hugo alias (minified and not) and Gatsby meta redirect, not a normal page', () => {
  assert.ok(isAliasStub('<!doctype html><html><head><meta charset=utf-8><meta http-equiv=refresh content="0; url=https://layer5.io/a/"></head></html>'));
  assert.ok(isAliasStub('<meta http-equiv="refresh" content="0; url=https://layer5.io/a/">'));
  assert.ok(isAliasStub(`<meta http-equiv="refresh" content="0; URL='/learn/service-mesh-books'" />`));
  assert.ok(!isAliasStub('<html><head><meta charset="utf-8"><title>Blog</title></head><body>refresh</body></html>'));
});

test('scanPublic: pages, alias stubs and file URLs in a built site', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-urls-'));
  const put = (p, s) => { fs.mkdirSync(path.dirname(path.join(dir, p)), { recursive: true }); fs.writeFileSync(path.join(dir, p), s); };
  put('index.html', '<title>Home</title>');
  put('blog/a/index.html', '<title>A</title>');
  put('old/index.html', '<meta http-equiv=refresh content="0; url=/blog/a/">');
  put('playground.html', '<meta http-equiv=refresh content="0; url=/">');
  put('sitemap.xml', '<urlset></urlset>');
  const { pages, aliases } = scanPublic(dir, ['/', '/blog/a/', '/old/', '/playground.html', '/sitemap.xml', '/lost/']);
  assert.deepEqual([...pages].sort(), ['/', '/blog/a/', '/sitemap.xml']);
  assert.deepEqual([...aliases].sort(), ['/old/', '/playground.html']);
  fs.rmSync(dir, { recursive: true });
});

test('compare: inventory URLs pass as a page or an alias stub, not only via sitemap or _redirects', () => {
  const r = compare({
    oldUrls: ['/', '/blog/a', '/old/', '/lost/'],
    pages: new Set(['/', '/blog/a/']),
    aliases: new Set(['/old/']),
  });
  assert.deepEqual(r.present, ['/', '/blog/a/']);
  assert.deepEqual(r.redirected, ['/old/']);
  assert.deepEqual(r.missing, ['/lost/']);
});

test('collectionOf: Phase 3 collections, with hand-written pages as the fallback', () => {
  assert.equal(collectionOf('/blog/category/meshery/'), 'blog');
  assert.equal(collectionOf('/company/news/x/'), 'news');
  assert.equal(collectionOf('/community/members/lee-calcote/'), 'members');
  assert.equal(collectionOf('/cloud-native-management/meshery/integrations/istio/'), 'integrations');
  assert.equal(collectionOf('/careers/'), 'programs');
  assert.equal(collectionOf('/mail/2026/lfx-2026.html'), 'files');
  assert.equal(collectionOf('/company/about/'), 'pages');
});

test('perCollection: missing URLs fail only outside the allow-list', () => {
  const r = { present: ['/blog/a/'], redirected: [], missing: ['/blog/b/', '/community/members/x/'] };
  const rows = perCollection(r, readAllowList('# comment\nmembers\n'));
  assert.deepEqual(rows.map((x) => [x.collection, x.urls, x.missing, x.fails]), [['blog', 2, 1, true], ['members', 1, 1, false]]);
});

test('CLI: --public reads the built sitemap for the Hugo URL count when --new is not given', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-urls-'));
  const put = (p, s) => { fs.mkdirSync(path.dirname(path.join(dir, p)), { recursive: true }); fs.writeFileSync(path.join(dir, p), s); };
  put('public/index.html', '<title>Home</title>');
  put('public/blog/a/index.html', '<title>A</title>');
  put('public/sitemap.xml', xml('https://layer5.io/', 'https://layer5.io/blog/a/', 'https://layer5.io/new/'));
  put('inventory.json', JSON.stringify({ urls: [{ url: '/' }, { url: '/blog/a/' }] }));
  const script = fileURLToPath(new URL('../verify-urls.mjs', import.meta.url));
  const out = execFileSync(process.execPath, [script, '--inventory', path.join(dir, 'inventory.json'), '--public', path.join(dir, 'public')], { encoding: 'utf8' });
  assert.match(out, /Gatsby URLs: 2 {2}Hugo URLs: 3 {2}same-or-redirected: 2 {2}MISSING: 0 {2}new in Hugo: 1/);
  fs.rmSync(dir, { recursive: true });
});
