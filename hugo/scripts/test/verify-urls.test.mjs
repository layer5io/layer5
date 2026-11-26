import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { compare, stubTarget, collectAliasStubs } from '../verify-urls.mjs';

const xml = (...urls) => `<urlset>${urls.map((u) => `<url><loc>${u}</loc></url>`).join('')}</urlset>`;

test('old URL preserved only by an alias stub is not missing', () => {
  const r = compare({
    oldXml: xml('https://layer5.io/legacy/a'),
    newXml: xml('https://layer5.io/blog/2026/a/'),
    aliasStubs: new Map([['/legacy/a/', '/blog/2026/a/']]),
  });
  assert.deepEqual(r.missing, []);
  assert.deepEqual(r.redirected, ['/legacy/a/']);
});

test('alias stub whose target is not in the Hugo sitemap stays missing', () => {
  const r = compare({
    oldXml: xml('https://layer5.io/legacy/a'),
    newXml: xml('https://layer5.io/blog/2026/other/'),
    aliasStubs: new Map([['/legacy/a/', '/blog/2026/a/']]),
  });
  assert.deepEqual(r.missing, ['/legacy/a/']);
  assert.deepEqual(r.brokenAliases, ['/legacy/a/ -> /blog/2026/a/']);
});

test('URL with no page and no alias stays missing', () => {
  const r = compare({
    oldXml: xml('https://layer5.io/gone'),
    newXml: xml('https://layer5.io/'),
  });
  assert.deepEqual(r.missing, ['/gone/']);
});

test('stubTarget parses the minified Hugo stub and strips the origin', () => {
  const html = '<!doctype html><html lang=en-us><head><title>x</title><meta http-equiv=refresh content="0; url=https://layer5.io/a/b/"></head></html>';
  assert.equal(stubTarget(html), '/a/b/');
  assert.equal(stubTarget('<html><body>normal page</body></html>'), null);
});

test('collectAliasStubs finds stubs in a build directory', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pub-'));
  fs.mkdirSync(path.join(dir, 'legacy', 'a'), { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'legacy', 'a', 'index.html'),
    '<meta http-equiv=refresh content="0; url=https://layer5.io/blog/2026/a/">',
  );
  const stubs = collectAliasStubs(dir);
  assert.equal(stubs.get('/legacy/a/'), '/blog/2026/a/');
  fs.rmSync(dir, { recursive: true });
});
