import test from 'node:test';
import assert from 'node:assert/strict';
import { compare, norm } from '../verify-urls.mjs';

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
