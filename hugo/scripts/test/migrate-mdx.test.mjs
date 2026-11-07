import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { convertFile, migrate, isTemplatePath, sniffImageFormat, normalizeAssetFilename, rewriteAssetReferences } from '../migrate-mdx.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const fx = path.join(here, 'fixtures/collections');
const run = () => convertFile(fs.readFileSync(path.join(fx, 'blog/sample-post/index.mdx'), 'utf8'), { slug: 'sample-post' });

test('imports (single-line, multi-line, default) are removed', () => {
  const { output, stats } = run();
  assert.doesNotMatch(output, /^import /m);
  assert.equal(stats.counters.importsRemoved, 3);
});

test('Button children and aliases become shortcode params', () => {
  const { output } = run();
  assert.match(output, /\{\{< button url="\/join" primary="true" text="Join Us" >\}\}/);
  assert.match(output, /\{\{< button url="\/docs" text="Read docs" >\}\}/);
});

test('CTA attrs: snake_case, expression literals, quotes escaped, className dropped', () => {
  const { output } = run();
  assert.match(output, /\{\{< cta-fullwidth title=`Say "hi"` description="Short pitch" button_text="Go" button_url="https:\/\/layer5.io" >\}\}/);
  assert.doesNotMatch(output, /className/);
});

test('Terminal: code attr and children both produce paired shortcode', () => {
  const { output } = run();
  assert.match(output, /\{\{< terminal >\}\}\nmesheryctl system start\n\{\{< \/terminal >\}\}/);
  assert.match(output, /\{\{< terminal >\}\}\nbrew install mesheryctl\n\{\{< \/terminal >\}\}/);
});

test('nested Accordion/AccordionItem convert recursively', () => {
  const { output } = run();
  assert.match(output, /\{\{< accordion >\}\}[\s\S]*\{\{< accordion-item title="Q1" >\}\}\nAnswer \*\*one\*\*\n\{\{< \/accordion-item >\}\}[\s\S]*\{\{< \/accordion >\}\}/);
});

test('code fences and inline code are untouched', () => {
  const { output } = run();
  assert.match(output, /```jsx\n<Button url="\/inside-fence">Untouched<\/Button>\n```/);
  assert.match(output, /`<Button>`/);
});

test('unknown components are flagged, not dropped', () => {
  const { output, stats } = run();
  assert.match(output, /<!-- TODO\(mdx\): unconverted component <FancyThing> -->/);
  assert.match(output, /<FancyThing foo="bar" \/>/);
  assert.deepEqual(stats.unknown, { FancyThing: 1 });
  assert.ok(stats.warnings.some((w) => /unknown components/.test(w)));
});

test('MDX comments become HTML comments', () => {
  assert.match(run().output, /<!-- an MDX comment -->/);
});

test('front matter: aliases, thumbnail, slug, published', () => {
  const { output } = run();
  const fm = output.split('---')[1];
  assert.match(fm, /aliases:\n {2}- \/blog\/old-sample\//);
  assert.doesNotMatch(fm, /redirect_from|published/);
  assert.match(fm, /thumbnail: cover\.png/);
  assert.match(fm, /slug: sample-post/);
});

test('published:false → draft:true; plain markdown passes through', () => {
  const { output } = convertFile(fs.readFileSync(path.join(fx, 'members/jane.md'), 'utf8'), { slug: 'jane' });
  assert.match(output, /draft: true/);
  assert.match(output, /Plain markdown, no components\./);
});

test('conversion is idempotent (running on output changes nothing)', () => {
  const once = run().output;
  const twice = convertFile(once, { slug: 'sample-post' }).output;
  assert.equal(twice, once);
});

test('migrate(): maps index.mdx → index.md, copies assets, reports per collection', () => {
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-'));
  const r = migrate({ src: fx, dest });
  assert.equal(r.files, 2);
  assert.equal(r.assetsCopied, 1);
  assert.ok(fs.existsSync(path.join(dest, 'blog/sample-post/index.md')));
  assert.ok(fs.existsSync(path.join(dest, 'blog/sample-post/cover.png')));
  assert.equal(r.byCollection.blog.converted, 1);
  assert.equal(r.byCollection.members.converted, 1);
  const dry = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-dry-'));
  migrate({ src: fx, dest: dry, dryRun: true });
  assert.deepEqual(fs.readdirSync(dry), []);
});

test('published: TRUE (uppercase boolean) is stripped without error', () => {
  const input = '---\ntitle: "Uppercase Test"\npublished: TRUE\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-true' });
  assert.doesNotMatch(output, /published/i);
  assert.doesNotMatch(output, /draft/i);
  assert.equal(stats.warnings.length, 0);
});

test('published: false with trailing comment converts to draft: true', () => {
  const input = '---\ntitle: "Comment Test"\npublished: false # Mandatory field for Gatsby\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-comment' });
  assert.match(output, /draft: true/);
  assert.doesNotMatch(output, /published/);
  assert.equal(stats.warnings.length, 0);
});

test('published: ISO date maps to publishDate and preserves date string', () => {
  const input = '---\ntitle: "Date Test"\npublished: 2026-03-25\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-date' });
  assert.match(output, /publishDate: 2026-03-25/);
  assert.doesNotMatch(output, /^published:/m);
  assert.equal(stats.warnings.length, 0);
});

test('published: false does not overwrite existing draft: false', () => {
  const input = '---\ntitle: "Existing Draft Test"\ndraft: false\npublished: false\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-draft' });
  assert.match(output, /draft: false/);
  const matches = output.match(/draft:/g);
  assert.equal(matches.length, 1);
});

test('published: invalid value triggers warning and preserves line', () => {
  const input = '---\ntitle: "Invalid Test"\npublished: not-a-date-or-bool\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-invalid' });
  assert.match(output, /published: not-a-date-or-bool/);
  assert.ok(stats.warnings.some((w) => w.includes('published: invalid value')));
});

test('template skip: skips exact allowlist authoring templates and preserves integration components', () => {
  // Exact 6 authoring template roots and their sample assets
  assert.equal(isTemplatePath('blog/blog-template/index.mdx'), true);
  assert.equal(isTemplatePath('blog/blog-template/gsoc.webp'), true);
  assert.equal(isTemplatePath('blog/meetTheMaintainer-template/index.mdx'), true);
  assert.equal(isTemplatePath('events/Z_event-template/index.mdx'), true);
  assert.equal(isTemplatePath('events/Z_event-template/servicemeshcon22.webp'), true);
  assert.equal(isTemplatePath('members/_member-profile-template/index.mdx'), true);
  assert.equal(isTemplatePath('members/_member-profile-template/display-picture.webp'), true);
  assert.equal(isTemplatePath('news/news-template/0000-00-00-news-title/index.mdx'), true);
  assert.equal(isTemplatePath('news/news-template/0000-00-00-news-title/sample.webp'), true);
  assert.equal(isTemplatePath('resources/resources-template/index.mdx'), true);

  // Integration component icons MUST NOT be skipped
  assert.equal(isTemplatePath('integrations/argo-workflows/icons/components/workflow-template/icons/color/workflow-template-color.svg'), false);
  assert.equal(isTemplatePath('integrations/aws-ec2-controller/icons/components/launch-template/icons/color/launch-template-color.svg'), false);
  assert.equal(isTemplatePath('integrations/gatekeeper/icons/components/constraint-template/icons/color/constraint-template-color.svg'), false);
  assert.equal(isTemplatePath('integrations/karpenter/icons/components/aws-node-template/icons/white/aws-node-template-white.svg'), false);
  assert.equal(isTemplatePath('integrations/clickhouse/icons/components/click-house-installation-template/icons/color/click-house-installation-template-color.svg'), false);
});

test('sniffImageFormat detects binary headers and empty files', () => {
  // JPEG
  assert.equal(sniffImageFormat(Buffer.from([0xFF, 0xD8, 0xFF, 0xE0])), 'jpeg');
  // PNG
  assert.equal(sniffImageFormat(Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])), 'png');
  // WebP
  assert.equal(sniffImageFormat(Buffer.from('RIFF\x00\x00\x00\x00WEBPVP8 ', 'binary')), 'webp');
  // AVIF
  assert.equal(sniffImageFormat(Buffer.from('\x00\x00\x00\x1cftypavif', 'binary')), 'avif');
  // Empty
  assert.equal(sniffImageFormat(Buffer.alloc(0)), 'empty');
  // SVG
  assert.equal(sniffImageFormat(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"></svg>')), 'svg');
});

test('normalizeAssetFilename calculates correct extension based on magic bytes', () => {
  assert.equal(normalizeAssetFilename('hero-image.png', 'jpeg'), 'hero-image.jpg');
  assert.equal(normalizeAssetFilename('gemini-cli-hero.png', 'webp'), 'gemini-cli-hero.webp');
  assert.equal(normalizeAssetFilename('kcd_chennai.webp', 'png'), 'kcd_chennai.png');
  assert.equal(normalizeAssetFilename('correct.png', 'png'), 'correct.png');
  assert.equal(normalizeAssetFilename('icon.svg', 'empty'), 'icon.svg');
});

test('rewriteAssetReferences updates bundled references in frontmatter and markdown body', () => {
  const input = '---\ntitle: "Test"\nthumbnail: ./hero-image.png\n---\nHere is ![Hero](./hero-image.png) and {{< responsive-image src="hero-image.png" >}}';
  const renames = { 'hero-image.png': 'hero-image.jpg' };
  const output = rewriteAssetReferences(input, renames);
  assert.match(output, /thumbnail: \.\/hero-image\.jpg/);
  assert.match(output, /!\[Hero\]\(\.\/hero-image\.jpg\)/);
  assert.match(output, /\{\{< responsive-image src="hero-image\.jpg" >\}\}/);
});

test('migrate() handles zero-byte SVGs by warning and logging to zeroByteSvgs without placeholder', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-dest-'));
  const colDir = path.join(tempSrc, 'integrations/test-crd/icons');
  fs.mkdirSync(colDir, { recursive: true });
  fs.writeFileSync(path.join(colDir, 'empty.svg'), Buffer.alloc(0));

  const report = migrate({ src: tempSrc, dest: tempDest, dryRun: false });
  assert.equal(report.zeroByteSvgs.length, 1);
  assert.ok(report.warnings.some((w) => w.message.includes('zero-byte asset')));
  const targetSvg = path.join(tempDest, 'integrations/test-crd/icons/empty.svg');
  assert.ok(fs.existsSync(targetSvg));
  assert.equal(fs.statSync(targetSvg).size, 0); // Preserved as zero-byte, no placeholder written
});
