import test from 'node:test';
import assert from 'node:assert/strict';
import { urlForFile, yamlRedirects, redirectFrom, buildInventory } from '../url-inventory.mjs';

test('urlForFile: pages and HTML files of a Gatsby build, skipping previews, internals and 404', () => {
  assert.equal(urlForFile('index.html'), '/');
  assert.equal(urlForFile('blog/a/index.html'), '/blog/a/');
  assert.equal(urlForFile('mail/2026/lfx-2026.html'), '/mail/2026/lfx-2026.html');
  assert.equal(urlForFile('cloud-native-management/playground.html/index.html'), '/cloud-native-management/playground.html');
  for (const f of ['pr-preview/pr-1/index.html', 'hugo-preview/index.html', '_gatsby/slices/x.html', '404.html', '404/index.html', 'app.js', 'page-data/app-data.json']) {
    assert.equal(urlForFile(f), null, f);
  }
});

test('yamlRedirects: fromPath of each entry, quoted or not', () => {
  const yaml = 'redirects:\n  - fromPath: "/books"\n    toPath: "/learn/service-mesh-books"\n  - fromPath: /labs/\n    toPath: /learn/kanvas-labs\n';
  assert.deepEqual(yamlRedirects(yaml), ['/books/', '/labs/']);
});

test('redirectFrom: block list, flow list, single value, and none', () => {
  assert.deepEqual(redirectFrom('---\ntitle: A\nredirect_from:\n  - /blog/envoy/debug-envoy-proxy/\n- "/blog/old"\ntags:\n  - x\n---\nbody'),
    ['/blog/envoy/debug-envoy-proxy/', '/blog/old/']);
  assert.deepEqual(redirectFrom('---\nredirect_from: ["/a", \'/b\']\n---\n'), ['/a/', '/b/']);
  assert.deepEqual(redirectFrom('---\nredirect_from: /gsoc/2022\n---\n'), ['/gsoc/2022/']);
  assert.deepEqual(redirectFrom('---\ntitle: A\n---\nredirect_from:\n  - /not-front-matter\n'), []);
});

test('buildInventory: one row per URL with every source that lists it', () => {
  const inv = buildInventory({ 'gatsby-public': ['/', '/a/', null], sitemap: ['/a/'], 'redirects.yaml': ['/old/'] });
  assert.equal(inv.count, 3);
  assert.deepEqual(inv.urls, [
    { url: '/', sources: ['gatsby-public'] },
    { url: '/a/', sources: ['gatsby-public', 'sitemap'] },
    { url: '/old/', sources: ['redirects.yaml'] },
  ]);
  assert.deepEqual(inv.sources, { 'gatsby-public': 2, sitemap: 1, 'redirects.yaml': 1 });
});
