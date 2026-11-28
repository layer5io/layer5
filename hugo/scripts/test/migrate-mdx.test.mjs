import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { convertFile, migrate, parseExcludeArg, isTemplatePath, sniffImageFormat, normalizeAssetFilename, rewriteAssetReferences, parseOpenTag } from '../migrate-mdx.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const fx = path.join(here, 'fixtures/collections');
const script = path.join(here, '../migrate-mdx.mjs');
const run = () => convertFile(fs.readFileSync(path.join(fx, 'blog/sample-post/index.mdx'), 'utf8'), { slug: 'sample-post' });

test('imports (single-line, multi-line, default) are removed', () => {
  const { output, stats } = run();
  assert.doesNotMatch(output, /^import /m);
  assert.equal(stats.counters.importsRemoved, 3);
});

test('Button children and aliases become shortcode params', () => {
  const { output } = run();
  assert.match(output, /\{\{< button url="\/join" style="primary" text="Join Us" >\}\}/);
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

test('front matter: dark and SVG thumbnail keys are checked like thumbnail', () => {
  const fm = 'title: T\ndarkthumbnail: ./dark.png\nthumbnail_svg: ../../shared.svg\ndarkthumbnail_svg: ../../shared-dark.svg';
  const { output, stats } = convertFile(`---\n${fm}\n---\nBody\n`, { slug: 't' });
  assert.match(output, /^darkthumbnail: dark\.png$/m);
  assert.ok(stats.warnings.some((w) => /^thumbnail_svg: .* outside the page bundle/.test(w)));
  assert.ok(stats.warnings.some((w) => /^darkthumbnail_svg: .* outside the page bundle/.test(w)));
});

test('front matter: ../ images are pulled into the bundle when the source folder is known', () => {
  const dir = path.join(fx, 'blog/sample-post');
  const { output, stats } = convertFile(fs.readFileSync(path.join(dir, 'index.mdx'), 'utf8'), { slug: 'sample-post', dir });
  assert.match(output, /^darkthumbnail: logo\.svg$/m);
  assert.deepEqual(stats.assets, [{ from: path.join(here, 'fixtures/assets/logo.svg'), name: 'logo.svg' }]);
  assert.ok(!stats.warnings.some((w) => /outside the page bundle/.test(w)));
});

test('front matter: missing or clashing ../ images keep the warning and the original path', () => {
  const dir = path.join(fx, 'blog/sample-post');
  // cover.png already lives in the bundle, so the shared cover.png must not replace it
  const fm = 'title: T\nimage: ../../../assets/cover.png\ncover: ../../../assets/nope.png';
  const { output, stats } = convertFile(`---\n${fm}\n---\nBody\n`, { slug: 't', dir });
  assert.match(output, /^image: \.\.\/\.\.\/\.\.\/assets\/cover\.png$/m);
  assert.match(output, /^cover: \.\.\/\.\.\/\.\.\/assets\/nope\.png$/m);
  assert.deepEqual(stats.assets, []);
  assert.equal(stats.warnings.filter((w) => /outside the page bundle/.test(w)).length, 2);
});

test('front matter: misnamed or already-taken ../ images keep the warning and the original path', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bundle-'));
  const dir = path.join(src, 'blog/post');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(src, 'blog/misnamed.jpg'), Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]));
  fs.writeFileSync(path.join(src, 'blog/logo.svg'), '<svg></svg>');
  const fm = 'title: T\nthumbnail: ../misnamed.jpg\ndarkthumbnail: ../logo.svg';
  const { output, stats } = convertFile(`---\n${fm}\n---\nBody\n`, { slug: 't', dir, taken: (n) => n === 'logo.svg' });
  assert.match(output, /^thumbnail: \.\.\/misnamed\.jpg$/m);
  assert.match(output, /^darkthumbnail: \.\.\/logo\.svg$/m);
  assert.deepEqual(stats.assets, []);
  assert.equal(stats.warnings.filter((w) => /outside the page bundle/.test(w)).length, 2);
});

test('migrate(): ../ images promote non-index pages to leaf bundles and never overwrite a renamed asset', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bundle-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bundle-dest-'));
  const png = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  fs.mkdirSync(path.join(src, 'blog/post'), { recursive: true });
  fs.mkdirSync(path.join(src, 'blog/shared'), { recursive: true });
  fs.writeFileSync(path.join(src, 'blog/post/photo.jpg'), png);
  fs.writeFileSync(path.join(src, 'blog/shared/photo.png'), Buffer.concat([png, Buffer.from('shared')]));
  fs.writeFileSync(path.join(src, 'blog/shared/leaf.svg'), '<svg></svg>');
  fs.writeFileSync(path.join(src, 'blog/post/index.mdx'), '---\ntitle: P\nthumbnail: ./photo.jpg\ndarkthumbnail: ../shared/photo.png\n---\nBody\n');
  fs.writeFileSync(path.join(src, 'blog/leaf.mdx'), '---\ntitle: L\nthumbnail: ../blog/shared/leaf.svg\n---\nBody\n');

  const r = migrate({ src, dest });
  assert.equal(r.assetsBundled, 1);
  assert.deepEqual(fs.readFileSync(path.join(dest, 'blog/post/photo.png')), png);
  assert.match(fs.readFileSync(path.join(dest, 'blog/post/index.md'), 'utf8'), /^darkthumbnail: \.\.\/shared\/photo\.png$/m);
  assert.ok(fs.existsSync(path.join(dest, 'blog/leaf/index.md')));
  assert.ok(fs.existsSync(path.join(dest, 'blog/leaf/leaf.svg')));
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
  assert.equal(r.assetsBundled, 1);
  assert.ok(fs.existsSync(path.join(dest, 'blog/sample-post/logo.svg')));
  assert.match(fs.readFileSync(path.join(dest, 'blog/sample-post/index.md'), 'utf8'), /^darkthumbnail: logo\.svg$/m);
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

test('published: malformed date suffix (2026-03-25-draft) is not converted, stays published, and warns', () => {
  const input = '---\ntitle: "Malformed Date Test"\npublished: 2026-03-25-draft\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-date-draft' });
  assert.doesNotMatch(output, /^publishDate:/m);
  assert.match(output, /^published: 2026-03-25-draft$/m);
  assert.ok(stats.warnings.some((w) => w.includes('published: invalid value')));
});

test('published: ISO datetime with T and seconds or space and minutes maps to publishDate', () => {
  const inputT = '---\ntitle: "DateTime T Test"\npublished: 2026-03-25T10:00:00\n---\nHello world\n';
  const resT = convertFile(inputT, { slug: 'test-datetime-t' });
  assert.match(resT.output, /^publishDate: 2026-03-25T10:00:00$/m);
  assert.doesNotMatch(resT.output, /^published:/m);
  assert.equal(resT.stats.warnings.length, 0);

  const inputSpace = '---\ntitle: "DateTime Space Test"\npublished: 2026-03-25 10:00\n---\nHello world\n';
  const resSpace = convertFile(inputSpace, { slug: 'test-datetime-space' });
  assert.match(resSpace.output, /^publishDate: 2026-03-25 10:00$/m);
  assert.doesNotMatch(resSpace.output, /^published:/m);
  assert.equal(resSpace.stats.warnings.length, 0);
});

test('published: valid ISO date with trailing YAML comment converts to publishDate', () => {
  const input = '---\ntitle: "Date Comment Test"\npublished: 2026-03-25 # scheduled release\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-date-comment' });
  assert.match(output, /^publishDate: 2026-03-25$/m);
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

test('published: false warns when meeting an existing draft: false', () => {
  const input = '---\ntitle: "Conflict Test"\ndraft: false\npublished: false\n---\nHello world\n';
  const { output, stats } = convertFile(input, { slug: 'test-conflict' });
  assert.match(output, /draft: false/);
  assert.doesNotMatch(output, /draft: true/);
  assert.ok(stats.warnings.some((w) => w.includes('published: false') && w.includes('draft: false')));
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

test('rewriteAssetReferences boundary-aware: thumb-image.png next to image.png, https URL, code fence', () => {
  const input = [
    'Here is image.png and thumb-image.png.',
    'Also https://example.com/assets/image.png and ./image.png.',
    '```markdown',
    'Code block with image.png and ./image.png untouched',
    '```',
    'Final text with ./image.png.'
  ].join('\n');

  const renames = { 'image.png': 'image.jpg' };
  const output = rewriteAssetReferences(input, renames);

  // 1. Bare name image.png replaced, but thumb-image.png preserved
  assert.match(output, /Here is image\.jpg and thumb-image\.png\./);
  // 2. HTTPS URL untouched, while ./image.png is replaced
  assert.match(output, /https:\/\/example\.com\/assets\/image\.png and \.\/image\.jpg\./);
  // 3. Inside code fence untouched
  assert.match(output, /```markdown\nCode block with image\.png and \.\/image\.png untouched\n```/);
  // 4. Outside code fence replaced
  assert.match(output, /Final text with \.\/image\.jpg\./);
});

test('migrate() handles zero-byte SVGs by warning and logging to emptyAssets without placeholder', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-dest-'));
  const colDir = path.join(tempSrc, 'integrations/test-crd/icons');
  fs.mkdirSync(colDir, { recursive: true });
  fs.writeFileSync(path.join(colDir, 'empty.svg'), Buffer.alloc(0));

  const report = migrate({ src: tempSrc, dest: tempDest, dryRun: false });
  assert.equal(report.emptyAssets.length, 1);
  assert.ok(report.warnings.some((w) => w.message.includes('zero-byte asset')));
  const targetSvg = path.join(tempDest, 'integrations/test-crd/icons/empty.svg');
  assert.ok(fs.existsSync(targetSvg));
  assert.equal(fs.statSync(targetSvg).size, 0); // Preserved as zero-byte, no placeholder written
});

test('transcodeAvifToWebp failure does not copy AVIF, records transcodeFailures and warning', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-avif-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-avif-dest-'));
  const colDir = path.join(tempSrc, 'news/test-post');
  fs.mkdirSync(colDir, { recursive: true });
  const avifHeader = Buffer.from('\x00\x00\x00\x1cftypavifdummydata', 'binary');
  fs.writeFileSync(path.join(colDir, 'sample.avif'), avifHeader);

  // Mock execFileFn that always fails (both magick, convert, and python fail)
  const mockFailingExec = () => {
    throw new Error('Command failed');
  };

  const report = migrate({
    src: tempSrc,
    dest: tempDest,
    dryRun: false,
    execFileFn: mockFailingExec,
  });

  assert.equal(report.transcodeFailures.length, 1);
  assert.equal(report.transcodeFailures[0].file, 'news/test-post/sample.avif');
  assert.deepEqual(report.transcodeFailures[0].referencedBy, []);
  assert.ok(report.warnings.some((w) => w.message.includes('AVIF transcoding to WebP failed')));
  // Verify destination file was NOT copied
  assert.equal(fs.existsSync(path.join(tempDest, 'news/test-post/sample.webp')), false);
  assert.equal(fs.existsSync(path.join(tempDest, 'news/test-post/sample.avif')), false);
  assert.equal(report.assetsCopied, 0);
});

test('transcodeFailures records referencing docs (boundary-aware, ignoring code fences and URLs)', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-avif-refs-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-avif-refs-dest-'));
  const postDir = path.join(tempSrc, 'news/test-post');
  const subDir = path.join(postDir, 'assets');
  fs.mkdirSync(subDir, { recursive: true });

  const avifHeader = Buffer.from('\x00\x00\x00\x1cftypavifdummydata', 'binary');
  fs.writeFileSync(path.join(subDir, 'news-hero.webp'), avifHeader);

  // Same-folder doc references ./news-hero.webp
  fs.writeFileSync(
    path.join(subDir, 'sub.mdx'),
    '---\ntitle: "Sub"\n---\n![Hero](./news-hero.webp)\n'
  );
  // Parent-folder doc references assets/news-hero.webp
  fs.writeFileSync(
    path.join(postDir, 'index.mdx'),
    '---\ntitle: "Parent"\nthumbnail: assets/news-hero.webp\n---\nHello\n'
  );
  // Unrelated doc in same folder only has a code fence, URL, and partial prefix match
  fs.writeFileSync(
    path.join(subDir, 'ignored.mdx'),
    [
      '---',
      'title: "Ignored"',
      '---',
      'See https://example.com/news-hero.webp and other-news-hero.webp.',
      '```md',
      '![Fence](./news-hero.webp)',
      '```',
    ].join('\n')
  );

  const report = migrate({
    src: tempSrc,
    dest: tempDest,
    dryRun: false,
    execFileFn: () => { throw new Error('Command failed'); },
  });

  assert.equal(report.transcodeFailures.length, 1);
  assert.equal(report.transcodeFailures[0].file, 'news/test-post/assets/news-hero.webp');
  assert.deepEqual(
    report.transcodeFailures[0].referencedBy.sort(),
    ['news/test-post/assets/sub.mdx', 'news/test-post/index.mdx']
  );
});

test('rename collision detection skips rename and never overwrites existing target', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-col-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-col-dest-'));
  const colDir = path.join(tempSrc, 'blog/post');
  fs.mkdirSync(colDir, { recursive: true });

  // hero.png contains JPEG magic bytes (would normalize to hero.jpg)
  const jpegBytes = Buffer.from([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10]);
  fs.writeFileSync(path.join(colDir, 'hero.png'), jpegBytes);
  // But hero.jpg already exists!
  const originalHeroJpg = Buffer.from('original hero.jpg content');
  fs.writeFileSync(path.join(colDir, 'hero.jpg'), originalHeroJpg);

  const report = migrate({ src: tempSrc, dest: tempDest, dryRun: false });

  assert.equal(report.renameCollisions.length, 1);
  assert.equal(report.renameCollisions[0].from, 'blog/post/hero.png');
  assert.equal(report.renameCollisions[0].target, 'hero.jpg');
  assert.ok(report.warnings.some((w) => w.message.includes('rename collision')));

  // hero.jpg in destination must have the original content (never overwritten)
  const destHeroJpg = fs.readFileSync(path.join(tempDest, 'blog/post/hero.jpg'), 'utf8');
  assert.equal(destHeroJpg, 'original hero.jpg content');
  // hero.png was copied under its original name without renaming
  assert.ok(fs.existsSync(path.join(tempDest, 'blog/post/hero.png')));
});

test('subfolder renames and .avif -> .webp renames are keyed and rewritten in documents', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-sub-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-sub-dest-'));
  const postDir = path.join(tempSrc, 'blog/subfolder-test');
  const iconsDir = path.join(postDir, 'icons');
  fs.mkdirSync(iconsDir, { recursive: true });

  // Subfolder asset: icons/icon.png has JPEG magic bytes -> normalizes to icons/icon.jpg
  const jpegBytes = Buffer.from([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10]);
  fs.writeFileSync(path.join(iconsDir, 'icon.png'), jpegBytes);

  // AVIF asset with .avif extension -> transcodes to banner.webp
  const avifBytes = Buffer.from('\x00\x00\x00\x1cftypavifdummy', 'binary');
  fs.writeFileSync(path.join(postDir, 'banner.avif'), avifBytes);

  // Document referencing subfolder asset and avif asset
  const docContent = [
    '---',
    'title: "Subfolder Test"',
    'thumbnail: ./banner.avif',
    '---',
    'Here is ![Icon](./icons/icon.png) and ![BareIcon](icons/icon.png).',
    'Banner: {{< responsive-image src="banner.avif" >}}'
  ].join('\n');
  fs.writeFileSync(path.join(postDir, 'index.mdx'), docContent);

  // Mock execFileFn that creates a dummy webp file on transcode
  const mockExec = (cmd, args) => {
    const destFile = args[1] || args[3]; // magick [src, dest] or python [-c, script, src, dest]
    fs.writeFileSync(destFile, Buffer.from('RIFF\x00\x00\x00\x00WEBPVP8 ', 'binary'));
  };

  const report = migrate({ src: tempSrc, dest: tempDest, dryRun: false, execFileFn: mockExec });

  // 1. .avif -> .webp is recorded in assetRenames and assetsTranscoded
  assert.ok(report.assetRenames.some((r) => r.from.endsWith('banner.avif') && r.to === 'banner.webp'));
  assert.ok(report.assetsTranscoded.some((t) => t.endsWith('banner.avif')));

  // 2. Subfolder rename is recorded in assetRenames
  assert.ok(report.assetRenames.some((r) => r.from.endsWith('icons/icon.png') && r.to === 'icon.jpg'));

  // 3. Document references are rewritten
  const convertedDoc = fs.readFileSync(path.join(tempDest, 'blog/subfolder-test/index.md'), 'utf8');
  assert.match(convertedDoc, /thumbnail: banner\.webp/);
  assert.match(convertedDoc, /!\[Icon\]\(\.\/icons\/icon\.jpg\)/);
  assert.match(convertedDoc, /!\[BareIcon\]\(icons\/icon\.jpg\)/);
  assert.match(convertedDoc, /src="banner\.webp"/);
});
test('CLI: repeated --src maps content-learn to learn/learning-paths and merges the report', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-multi-'));
  const learn = path.join(tmp, 'content-learn');
  const cols = path.join(tmp, 'collections');
  fs.mkdirSync(path.join(learn, 'mastering-x/course-a'), { recursive: true });
  fs.writeFileSync(path.join(learn, 'mastering-x/course-a/index.mdx'), '---\ntitle: "Course A"\n---\nHello\n');
  fs.mkdirSync(path.join(cols, 'blog/post'), { recursive: true });
  fs.writeFileSync(path.join(cols, 'blog/post/index.mdx'), '---\ntitle: "Post"\n---\nHello\n');
  const dest = path.join(tmp, 'out');
  const report = path.join(tmp, 'report.json');
  execFileSync(process.execPath, [script, '--src', cols, '--src', learn, '--dest', dest, '--report', report]);
  assert.ok(fs.existsSync(path.join(dest, 'blog/post/index.md')));
  assert.ok(fs.existsSync(path.join(dest, 'learn/learning-paths/mastering-x/course-a/index.md')));
  const r = JSON.parse(fs.readFileSync(report, 'utf8'));
  assert.equal(r.files, 2);
  assert.deepEqual(Object.keys(r.byCollection).sort(), ['blog', 'content-learn']);
});

test('ChapterStyle converts to paired shortcode and cardImage is bundled', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-learn-'));
  const sharedImg = path.join(tmp, 'assets/academy-layer5.svg');
  fs.mkdirSync(path.dirname(sharedImg), { recursive: true });
  fs.writeFileSync(sharedImg, '<svg></svg>');
  const learn = path.join(tmp, 'content-learn/course');
  fs.mkdirSync(learn, { recursive: true });
  const mdx = `---
title: "Course"
cardImage: "../../assets/academy-layer5.svg"
---
import { ChapterStyle } from "../chapters.style.js";

<ChapterStyle>

Hello Chapter

</ChapterStyle>
`;
  fs.writeFileSync(path.join(learn, 'index.mdx'), mdx);
  const chapterMdx = `---
title: "Chapter 1"
---
import img1 from "../../assets/academy-layer5.svg";

<ChapterStyle>

<img src={img1} />

</ChapterStyle>
`;
  fs.writeFileSync(path.join(learn, 'chapter.mdx'), chapterMdx);
  const dest = path.join(tmp, 'out');
  migrate({ src: path.join(tmp, 'content-learn'), dest, collection: 'content-learn' });
  const converted = fs.readFileSync(path.join(dest, 'course/_index.md'), 'utf8');
  assert.match(converted, /^cardImage: academy-layer5\.svg$/m);
  assert.match(converted, /\{\{< chapter-style >\}\}/);
  assert.match(converted, /\{\{< \/chapter-style >\}\}/);
  assert.ok(fs.existsSync(path.join(dest, 'course/academy-layer5.svg')));
  const convertedChapter = fs.readFileSync(path.join(dest, 'course/chapter/index.md'), 'utf8');
  assert.match(convertedChapter, /src="academy-layer5\.svg"/);
  assert.ok(fs.existsSync(path.join(dest, 'course/chapter/academy-layer5.svg')));
});

test('asset collision is tracked for normalized extension across sources', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-norm-col-'));
  const srcA = path.join(tmp, 'srcA');
  const srcB = path.join(tmp, 'srcB');
  fs.mkdirSync(path.join(srcA, 'images'), { recursive: true });
  fs.mkdirSync(path.join(srcB, 'images'), { recursive: true });
  const png = Buffer.from('89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000a49444154789c63000100000500010d0a2db40000000049454e44ae426082', 'hex');
  fs.writeFileSync(path.join(srcA, 'images/hero.jpg'), png);
  fs.writeFileSync(path.join(srcB, 'images/hero.png'), png);
  const dest = path.join(tmp, 'out');
  const writtenAssets = new Map();
  const writtenTargets = new Set();
  const reportA = migrate({ src: srcA, dest, writtenAssets, writtenTargets });
  const reportB = migrate({ src: srcB, dest, report: reportA, writtenAssets, writtenTargets });
  assert.equal(reportB.collisions.length, 1);
  assert.equal(reportB.assetsCopied, 1);
});

test('learning chapter resolving imported local asset with normalized extension', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-learn-norm-'));
  const learn = path.join(tmp, 'content-learn/course');
  fs.mkdirSync(learn, { recursive: true });
  fs.writeFileSync(path.join(learn, 'index.mdx'), '---\ntitle: "Course"\n---\n');
  const png = Buffer.from('89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000a49444154789c63000100000500010d0a2db40000000049454e44ae426082', 'hex');
  fs.writeFileSync(path.join(learn, 'photo.jpg'), png);
  const chapterMdx = `---
title: "Chapter"
---
import photo from "./photo.jpg";

<img src={photo} />
`;
  fs.writeFileSync(path.join(learn, 'chapter.mdx'), chapterMdx);
  const dest = path.join(tmp, 'out');
  migrate({ src: path.join(tmp, 'content-learn'), dest, collection: 'content-learn' });
  const converted = fs.readFileSync(path.join(dest, 'course/chapter/index.md'), 'utf8');
  assert.match(converted, /src="(?:\.\/)?photo\.png"/);
  assert.ok(fs.existsSync(path.join(dest, 'course/chapter/photo.png')));
});

test('shared bundledOwners allows same external asset reuse across migration roots', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-share-owners-'));
  const sharedImg = path.join(tmp, 'shared/logo.svg');
  fs.mkdirSync(path.dirname(sharedImg), { recursive: true });
  fs.writeFileSync(sharedImg, '<svg></svg>');
  const srcA = path.join(tmp, 'srcA/course');
  const srcB = path.join(tmp, 'srcB/course');
  fs.mkdirSync(srcA, { recursive: true });
  fs.mkdirSync(srcB, { recursive: true });
  fs.writeFileSync(path.join(srcA, 'chapA.mdx'), '---\ntitle: "A"\n---\nimport img from "../../shared/logo.svg";\n\n<img src={img} />\n');
  fs.writeFileSync(path.join(srcB, 'chapB.mdx'), '---\ntitle: "B"\n---\nimport img from "../../shared/logo.svg";\n\n<img src={img} />\n');
  const dest = path.join(tmp, 'out');
  const writtenTargets = new Set();
  const bundledOwners = new Map();
  const writtenAssets = new Map();
  const reportA = migrate({ src: path.join(tmp, 'srcA'), dest, collection: 'content-learn', writtenTargets, bundledOwners, writtenAssets });
  const reportB = migrate({ src: path.join(tmp, 'srcB'), dest, collection: 'content-learn', report: reportA, writtenTargets, bundledOwners, writtenAssets });
  const docB = fs.readFileSync(path.join(dest, 'course/chapB/index.md'), 'utf8');
  assert.match(docB, /src="logo\.svg"/);
  assert.equal(reportB.warnings.filter((w) => w.message.includes('outside the page bundle')).length, 0);
});

test('ordinary asset in subsequent source collides with earlier bundled asset', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bundled-col-'));
  const sharedImg = path.join(tmp, 'shared/logo.svg');
  fs.mkdirSync(path.dirname(sharedImg), { recursive: true });
  fs.writeFileSync(sharedImg, '<svg></svg>');
  const srcA = path.join(tmp, 'srcA/course');
  const srcB = path.join(tmp, 'srcB');
  fs.mkdirSync(srcA, { recursive: true });
  fs.mkdirSync(path.join(srcB, 'course/chap'), { recursive: true });
  fs.writeFileSync(path.join(srcA, 'chap.mdx'), '---\ntitle: "Chap"\n---\nimport img from "../../shared/logo.svg";\n\n<img src={img} />\n');
  fs.writeFileSync(path.join(srcB, 'course/chap/logo.svg'), '<svg>diff</svg>');
  const dest = path.join(tmp, 'out');
  const writtenTargets = new Set();
  const bundledOwners = new Map();
  const writtenAssets = new Map();
  const reportA = migrate({ src: path.join(tmp, 'srcA'), dest, collection: 'content-learn', writtenTargets, bundledOwners, writtenAssets });
  const reportB = migrate({ src: path.join(tmp, 'srcB'), dest, collection: 'content-learn', report: reportA, writtenTargets, bundledOwners, writtenAssets });
  assert.equal(reportB.collisions.length, 1);
});

test('case-insensitive ownership check rejects conflicting bundled asset across sources', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-case-bundle-'));
  const img1 = path.join(tmp, 'shared/Logo.svg');
  const img2Path = path.join(tmp, 'other/logo.svg');
  fs.mkdirSync(path.dirname(img1), { recursive: true });
  fs.mkdirSync(path.dirname(img2Path), { recursive: true });
  fs.writeFileSync(img1, '<svg>1</svg>');
  fs.writeFileSync(img2Path, '<svg>2</svg>');
  const srcA = path.join(tmp, 'srcA/course');
  const srcB = path.join(tmp, 'srcB/course');
  fs.mkdirSync(srcA, { recursive: true });
  fs.mkdirSync(srcB, { recursive: true });
  fs.writeFileSync(path.join(srcA, 'chap.mdx'), '---\ntitle: "Chap A"\n---\nimport img from "../../shared/Logo.svg";\n\n<img src={img} />\n');
  fs.writeFileSync(path.join(srcB, 'chap.mdx'), '---\ntitle: "Chap B"\n---\nimport img from "../../other/logo.svg";\n\n<img src={img} />\n');
  const dest = path.join(tmp, 'out');
  const writtenTargets = new Set();
  const bundledOwners = new Map();
  const writtenAssets = new Map();
  const reportA = migrate({ src: path.join(tmp, 'srcA'), dest, collection: 'content-learn', writtenTargets, bundledOwners, writtenAssets });
  const reportB = migrate({ src: path.join(tmp, 'srcB'), dest, collection: 'content-learn', report: reportA, writtenTargets, bundledOwners, writtenAssets });
  assert.equal(reportB.warnings.some((w) => w.message.includes('outside the page bundle')), true);
});

test('Link with imported asset in learning chapter converts to markdown link', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-link-asset-'));
  const learn = path.join(tmp, 'content-learn/course');
  fs.mkdirSync(learn, { recursive: true });
  fs.writeFileSync(path.join(learn, 'index.mdx'), '---\ntitle: "Course"\n---\n');
  fs.writeFileSync(path.join(learn, 'notes.pdf'), '%PDF-dummy');
  const mdx = `---
title: "Chapter"
---
import notes from "./notes.pdf";

<Link to={notes}>Download Notes</Link>
`;
  fs.writeFileSync(path.join(learn, 'chapter.mdx'), mdx);
  const dest = path.join(tmp, 'out');
  migrate({ src: path.join(tmp, 'content-learn'), dest, collection: 'content-learn' });
  const converted = fs.readFileSync(path.join(dest, 'course/chapter/index.md'), 'utf8');
  assert.match(converted, /\[Download Notes\]\((?:\.\/)?notes\.pdf\)/);
});

test('bundled asset matching planned document output is rejected', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-doc-bundle-col-'));
  const learn = path.join(tmp, 'content-learn/course');
  const shared = path.join(tmp, 'shared');
  fs.mkdirSync(learn, { recursive: true });
  fs.mkdirSync(shared, { recursive: true });
  fs.writeFileSync(path.join(shared, 'index.md'), '# External Shared');
  const mdx = `---
title: "Original Chapter"
---
import doc from "../../shared/index.md";

<a href={doc}>External</a>
`;
  fs.writeFileSync(path.join(learn, 'chapter.mdx'), mdx);
  const dest = path.join(tmp, 'out');
  const report = migrate({ src: path.join(tmp, 'content-learn'), dest, collection: 'content-learn' });
  const doc = fs.readFileSync(path.join(dest, 'course/chapter/index.md'), 'utf8');
  assert.match(doc, /Original Chapter/);
  assert.equal(report.warnings.some((w) => w.message.includes('outside the page bundle')), true);
});

test('content-learn nested chapter promotes to leaf bundle and references bundled image by bare name', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-learn-nested-'));
  const assetDir = path.join(tmp, 'src/assets/images');
  fs.mkdirSync(assetDir, { recursive: true });
  fs.writeFileSync(path.join(assetDir, 'lifecycle.png'), '<png>');

  const chapterDir = path.join(tmp, 'content-learn/mastering-meshery/introduction-to-meshery/meshery');
  fs.mkdirSync(chapterDir, { recursive: true });
  fs.writeFileSync(
    path.join(tmp, 'content-learn/mastering-meshery/index.mdx'),
    '---\ntitle: "Mastering Meshery"\n---\n'
  );
  fs.writeFileSync(
    path.join(tmp, 'content-learn/mastering-meshery/introduction-to-meshery/index.mdx'),
    '---\ntitle: "Intro"\n---\n'
  );
  fs.writeFileSync(
    path.join(chapterDir, 'lifecycle.mdx'),
    `---
docType: "Chapter"
title: "Lifecycle"
---
import { ChapterStyle } from "../../../chapters.style.js";
import lifeImg from "../../../../src/assets/images/lifecycle.png";

<ChapterStyle>

<a href={lifeImg}>
  <img src={lifeImg} />
</a>

</ChapterStyle>
`
  );

  const dest = path.join(tmp, 'out');
  migrate({ src: path.join(tmp, 'content-learn'), dest, collection: 'content-learn' });

  const outDoc = path.join(dest, 'mastering-meshery/introduction-to-meshery/meshery/lifecycle/index.md');
  const outImg = path.join(dest, 'mastering-meshery/introduction-to-meshery/meshery/lifecycle/lifecycle.png');
  assert.ok(fs.existsSync(outDoc), 'leaf bundle index.md should exist');
  assert.ok(fs.existsSync(outImg), 'bundled image should exist in leaf bundle folder');

  const content = fs.readFileSync(outDoc, 'utf8');
  assert.match(content, /src="lifecycle\.png"/, 'image src should be bare name');
  assert.match(content, /href="lifecycle\.png"/, 'link href should be bare name');
  assert.match(content, /\{\{< chapter-style >\}\}/);
});

test('exclude collectionName skips content-learn source', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-learn-ex-'));
  const learn = path.join(tmp, 'content-learn/mastering-x');
  fs.mkdirSync(learn, { recursive: true });
  fs.writeFileSync(path.join(learn, 'index.mdx'), '---\ntitle: "Course"\n---\nHello');
  fs.writeFileSync(path.join(learn, 'photo.png'), 'fake');
  const dest = path.join(tmp, 'out');
  const report = migrate({ src: path.join(tmp, 'content-learn'), dest, collection: 'content-learn', exclude: ['content-learn'] });
  assert.equal(report.converted, 0);
  assert.equal(report.assetsCopied, 0);
  assert.equal(report.excludedFiles, 2);
});

test('two sources with identical relative asset paths in disjoint destinations do not collide', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-disjoint-'));
  const srcA = path.join(tmp, 'srcA');
  const srcB = path.join(tmp, 'srcB');
  fs.mkdirSync(path.join(srcA, 'images'), { recursive: true });
  fs.mkdirSync(path.join(srcB, 'images'), { recursive: true });
  const png = Buffer.from('89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000a49444154789c63000100000500010d0a2db40000000049454e44ae426082', 'hex');
  fs.writeFileSync(path.join(srcA, 'images/logo.png'), png);
  fs.writeFileSync(path.join(srcB, 'images/logo.png'), png);
  const dest = path.join(tmp, 'out');
  const written = new Map();
  const writtenAssets = new Map();
  let report = migrate({ src: srcA, dest: path.join(dest, 'a'), written, writtenAssets });
  report = migrate({ src: srcB, dest: path.join(dest, 'b'), written, writtenAssets, report });
  assert.equal(report.collisions.length, 0);
  assert.equal(report.assetsCopied, 2);
  assert.ok(fs.existsSync(path.join(dest, 'a/images/logo.png')));
  assert.ok(fs.existsSync(path.join(dest, 'b/images/logo.png')));
});

test('parseExcludeArg supports comma-separated, = syntax, and repeated --exclude flags', () => {
  assert.deepEqual(
    parseExcludeArg(['--exclude', 'sistent, members', '--exclude=workshops', '--exclude', '/sistent/']),
    ['sistent', 'members', 'workshops']
  );
  assert.deepEqual(parseExcludeArg(['--dry-run']), []);
});

test('migrate() with exclude skips excluded collections (docs and assets)', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-excl-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-excl-dest-'));
  try {
    fs.mkdirSync(path.join(tempSrc, 'blog/post'), { recursive: true });
    fs.mkdirSync(path.join(tempSrc, 'sistent/components/button'), { recursive: true });
    fs.writeFileSync(path.join(tempSrc, 'blog/post/index.mdx'), '---\ntitle: "Blog"\n---\nHello\n');
    fs.writeFileSync(path.join(tempSrc, 'sistent/components/button/index.mdx'), '---\ntitle: "Sistent Button"\n---\n<Button onClick={fn}>Click</Button>\n');
    fs.writeFileSync(path.join(tempSrc, 'sistent/components/button/preview.png'), Buffer.from('png'));

    const report = migrate({ src: tempSrc, dest: tempDest, dryRun: false, exclude: ['sistent'] });

    assert.equal(report.files, 1);
    assert.equal(report.converted, 1);
    assert.equal(report.excludedFiles, 2);
    assert.deepEqual(report.excluded, ['sistent']);
    assert.equal(report.byCollection.sistent, undefined);
    assert.equal(fs.existsSync(path.join(tempDest, 'sistent')), false);
    assert.equal(fs.existsSync(path.join(tempDest, 'blog/post/index.md')), true);
  } finally {
    fs.rmSync(tempSrc, { recursive: true, force: true });
    fs.rmSync(tempDest, { recursive: true, force: true });
  }
});

test('sistent collection does not map Sistent React components to marketing shortcodes', () => {
  const input = '---\ntitle: "Sistent Button"\n---\n<Button onClick={() => {}} disabled>Submit</Button>\n';
  const sistentRes = convertFile(input, { slug: 'button', file: 'sistent/components/button/index.mdx' });
  assert.doesNotMatch(sistentRes.output, /\{\{< button/);
  assert.match(sistentRes.output, /<!-- TODO\(mdx\): unconverted component <Button> -->/);
  assert.equal(sistentRes.stats.unknown.Button, 1);
  assert.equal(sistentRes.stats.components.Button, undefined);

  const blogRes = convertFile('---\ntitle: "Blog Button"\n---\n<Button url="/join">Join</Button>\n', {
    slug: 'post',
    file: 'blog/post/index.mdx',
  });
  assert.match(blogRes.output, /\{\{< button url="\/join" text="Join" >\}\}/);
});

test('parseOpenTag parses styled-components $-prefixed props and $Button maps cleanly', () => {
  const input = [
    '---',
    'title: "Transient Button Test"',
    '---',
    '<Button $secondary title="RSVP" $url="\u200bhttps://sched.co/1BZJl" $external={ true } />',
    '',
    '<Button className="image-right-no-shadow"secondary title="See All Projects" $url="/projects" $external={ false } />',
    '',
    '<Button $primary $url="/join">Join Us</Button>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'transient-test', file: 'blog/transient-test/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.equal(stats.components.Button, 3);
  assert.match(output, /\{\{< button style="secondary" text="RSVP" url="https:\/\/sched\.co\/1BZJl" >\}\}/);
  assert.match(output, /\{\{< button style="secondary" text="See All Projects" url="\/projects" >\}\}/);
  assert.match(output, /\{\{< button style="primary" url="\/join" text="Join Us" >\}\}/);
  assert.doesNotMatch(output, /\$/);
  assert.doesNotMatch(output, /\u200b/);
  assert.doesNotMatch(output, /external=/);
  assert.equal(convertFile(output, { slug: 'transient-test', file: 'blog/transient-test/index.mdx' }).output, output);
});

test('parseOpenTag parses $-prefixed props on unmapped tags without syntax parse failure', () => {
  const input = '---\ntitle: "Unmapped Test"\n---\n<UnmappedGrid $xs={12} $lg={6}>Body</UnmappedGrid>\n';
  const { output, stats } = convertFile(input, { slug: 'unmapped-test', file: 'careers/unmapped-test/index.mdx' });
  assert.equal(stats.unknown.UnmappedGrid, 1);
  assert.ok(!stats.warnings.some((w) => w.includes('could not parse')));
  assert.match(output, /<!-- TODO\(mdx\): unconverted component <UnmappedGrid> -->/);
});

test('Button preserves explicit text over title attribute when both are provided', () => {
  const input = '---\ntitle: "Text Priority"\n---\n<Button title="Tooltip" text="Explicit Text" $url="/docs" />\n';
  const { output } = convertFile(input, { slug: 'text-prio', file: 'blog/text-prio/index.mdx' });
  assert.match(output, /\{\{< button text="Explicit Text" url="\/docs" >\}\}/);
});

test('zero-width stripping targets U+200B only and preserves ZWJ emoji, U+200C, and U+FEFF', () => {
  const input = [
    '---',
    'title: "ZWSP Only"',
    '---',
    '<Button\u200B $primary $url="https://example.com/\u200Bpath" $title="Dev👨\u200D💻\u200C\uFEFFx" />',
  ].join('\n');
  const { output } = convertFile(input, { slug: 'zwsp', file: 'blog/zwsp/index.mdx' });
  assert.doesNotMatch(output, /\u200B/);
  assert.match(output, /url="https:\/\/example\.com\/path"/);
  assert.match(output, /text="Dev👨\u200D💻\u200C\uFEFFx"/);
});

test('migrate() without exclude leaves sistent Button and Card unconverted while converting blog', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-noexcl-src-'));
  const tempDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-noexcl-dest-'));
  try {
    fs.mkdirSync(path.join(tempSrc, 'blog/post'), { recursive: true });
    fs.mkdirSync(path.join(tempSrc, 'sistent/components/button'), { recursive: true });
    fs.writeFileSync(
      path.join(tempSrc, 'blog/post/index.mdx'),
      '---\ntitle: "Blog"\n---\n<Button url="/join">Join</Button>\n<Card title="C" text="T" link="/x" />\n'
    );
    fs.writeFileSync(
      path.join(tempSrc, 'sistent/components/button/index.mdx'),
      '---\ntitle: "Sistent"\n---\n<Button variant="contained">Click</Button>\n<Card elevation={2}>Box</Card>\n'
    );

    const report = migrate({ src: tempSrc, dest: tempDest, dryRun: false });

    assert.equal(report.files, 2);
    assert.equal(report.excludedFiles, 0);
    assert.equal(report.components.Button, 1);
    assert.equal(report.components.Card, 1);
    assert.equal(report.unknown.Button, 1);
    assert.equal(report.unknown.Card, 1);
    const sistentOut = fs.readFileSync(path.join(tempDest, 'sistent/components/button/index.md'), 'utf8');
    assert.doesNotMatch(sistentOut, /\{\{<\s*(button|card)\b/);
    assert.match(sistentOut, /<!-- TODO\(mdx\): unconverted component <Button> -->/);
    assert.match(sistentOut, /<!-- TODO\(mdx\): unconverted component <Card> -->/);
    const blogOut = fs.readFileSync(path.join(tempDest, 'blog/post/index.md'), 'utf8');
    assert.match(blogOut, /\{\{< button url="\/join" text="Join" >\}\}/);
    assert.match(blogOut, /\{\{< card title="C" text="T" link="\/x" >\}\}/);
  } finally {
    fs.rmSync(tempSrc, { recursive: true, force: true });
    fs.rmSync(tempDest, { recursive: true, force: true });
  }
});

test('migrate() with exclude is idempotent when run sequentially on its own output', () => {
  const tempSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-idemp-src-'));
  const tempDest1 = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-idemp-d1-'));
  const tempDest2 = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-idemp-d2-'));
  try {
    fs.mkdirSync(path.join(tempSrc, 'blog/post'), { recursive: true });
    fs.mkdirSync(path.join(tempSrc, 'sistent/comp'), { recursive: true });
    fs.writeFileSync(
      path.join(tempSrc, 'blog/post/index.mdx'),
      '---\ntitle: "Idemp"\n---\n<Button $secondary $url="https://example.com/\u200Ba" $external={true}>Go</Button>\n'
    );
    fs.writeFileSync(path.join(tempSrc, 'sistent/comp/index.mdx'), '---\ntitle: "S"\n---\n<Button>S</Button>\n');

    migrate({ src: tempSrc, dest: tempDest1, dryRun: false, exclude: ['sistent'] });
    migrate({ src: tempDest1, dest: tempDest2, dryRun: false, exclude: ['sistent'] });

    const out1 = fs.readFileSync(path.join(tempDest1, 'blog/post/index.md'), 'utf8');
    const out2 = fs.readFileSync(path.join(tempDest2, 'blog/post/index.md'), 'utf8');
    assert.match(out1, /\{\{< button style="secondary" url="https:\/\/example\.com\/a" text="Go" >\}\}/);
    assert.equal(out2, out1);
  } finally {
    fs.rmSync(tempSrc, { recursive: true, force: true });
    fs.rmSync(tempDest1, { recursive: true, force: true });
    fs.rmSync(tempDest2, { recursive: true, force: true });
  }
});

test('Button external={true} warns with file and tag on non-http(s) URL while dropping redundant http(s) external', () => {
  const rel = 'events/2024/kubecon-EU-2024/index.mdx';
  const input = [
    '---',
    'title: "PDF Button Test"',
    '---',
    '<Button secondary title="Slides" url="/cncf-tag-network/slides.pdf" external={ true } />',
    '<Button $secondary title="External" $url="https://example.com" $external={ true } />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'kubecon-eu-2024', file: rel });
  assert.match(output, /\{\{< button style="secondary" text="Slides" url="\/cncf-tag-network\/slides\.pdf" >\}\}/);
  assert.match(output, /\{\{< button style="secondary" text="External" url="https:\/\/example\.com" >\}\}/);
  assert.doesNotMatch(output, /external=/);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /events\/2024\/kubecon-EU-2024\/index\.mdx/);
  assert.match(stats.warnings[0], /<Button secondary title="Slides" url="\/cncf-tag-network\/slides\.pdf" external=\{ true \} \/>/);
});


test('Link converts site-relative, layer5.io (with query/anchor), external, mailto, tel, anchor, and // URLs', () => {
  const input = [
    '---',
    'title: "Links"',
    '---',
    '- <Link to="/community/meshmates">MeshMates</Link>',
    '- <Link to="https://layer5.io/projects/meshery?tab=overview#install">Meshery</Link>',
    '- <Link to="https://layer5.io">Home</Link>',
    '- <Link to="https://github.com/layer5io/layer5">GitHub</Link>',
    '- <Link to="mailto:community@layer5.io">Email</Link>',
    '- <Link to="tel:+1234567890">Phone</Link>',
    '- <Link to="#section">Jump</Link>',
    '- <Link to="//example.com/path">ProtoRel</Link>',
    '- <Link to="/blog">\n    Multiline\n    Label\n  </Link>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'links', file: 'blog/post/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.match(output, /- \[MeshMates\]\(\/community\/meshmates\)/);
  assert.match(output, /- \[Meshery\]\(\/projects\/meshery\?tab=overview#install\)/);
  assert.match(output, /- \[Home\]\(\/\)/);
  assert.match(output, /- \[GitHub\]\(https:\/\/github\.com\/layer5io\/layer5\)/);
  assert.match(output, /- \[Email\]\(mailto:community@layer5\.io\)/);
  assert.match(output, /- \[Phone\]\(tel:\+1234567890\)/);
  assert.match(output, /- \[Jump\]\(#section\)/);
  assert.match(output, /- \[ProtoRel\]\(\/\/example\.com\/path\)/);
  assert.match(output, /- \[Multiline Label\]\(\/blog\)/);
});

test('Link emits {{< link >}} shortcode for className, target/rel, or HTML/JSX children', () => {
  const input = [
    '---',
    'title: "Rich Links"',
    '---',
    '<Link className="highlight" to="/community/meshmates">MeshMates</Link>',
    '<Link className="mute" to="https://layer5.io/projects/cloud-native-performance">CNP</Link>',
    '<Link to="/blog" className="project-card" key="1"><div className="content_type"><h5>Blog</h5></div></Link>',
    '<Link to="https://example.com" target="_blank" rel="noopener">Ext</Link>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'rich-links', file: 'handbook/writing-program/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.match(output, /\{\{< link to="\/community\/meshmates" class="highlight" >\}\}MeshMates\{\{< \/link >\}\}/);
  assert.match(output, /\{\{< link to="\/projects\/cloud-native-performance" class="mute" >\}\}CNP\{\{< \/link >\}\}/);
  assert.match(output, /\{\{< link to="\/blog" class="project-card" >\}\}<div class="content_type"><h5>Blog<\/h5><\/div>\{\{< \/link >\}\}/);
  assert.match(output, /\{\{< link to="https:\/\/example\.com" target="_blank" rel="noopener" >\}\}Ext\{\{< \/link >\}\}/);
});

test('Link warns and preserves tag for bare-relative and non-literal `to` values', () => {
  const rel = 'programs/lfx-2025/lfx-2025.mdx';
  const input = [
    '---',
    'title: "Bad Links"',
    '---',
    '<Link to="newcomer">Newcomer</Link>',
    '<Link to="community/members/mia-grenell">Mia</Link>',
    '<Link to="">Empty</Link>',
    '<Link to="../../articles/kubernetes/management-of-kubernetes">K8s</Link>',
    '<Link to={link[index]} key={index}>Dynamic</Link>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'lfx-2025', file: rel });
  assert.equal(stats.warnings.length, 5);
  assert.ok(!stats.warnings.some((w) => w.includes('non-literal expression for "key"')));
  assert.ok(stats.warnings.some((w) => w.includes(rel) && w.includes('bare-relative "to" value "newcomer"')));
  assert.ok(stats.warnings.some((w) => w.includes(rel) && w.includes('bare-relative "to" value "community/members/mia-grenell"')));
  assert.ok(stats.warnings.some((w) => w.includes(rel) && w.includes('bare-relative "to" value ""')));
  assert.ok(stats.warnings.some((w) => w.includes(rel) && w.includes('bare-relative "to" value "../../articles/kubernetes/management-of-kubernetes"')));
  assert.ok(stats.warnings.some((w) => w.includes('non-literal expression for "to"')));
  assert.match(output, /<Link to="newcomer">Newcomer<\/Link>/);
  assert.match(output, /<Link to=\{link\[index\]\} key=\{index\}>Dynamic<\/Link>/);
});


test('Wrappers unwrap all 8 collection wrappers, dedent common indent, and preserve fenced code blocks', () => {
  const input = [
    '---',
    'title: "Wrapper Test"',
    '---',
    '<CareerWrapper>',
    '    <div className="body-sections">',
    '      <h3>Responsibilities</h3>',
    '      <Link to="/careers/programs">Programs</Link>',
    '    </div>',
    '</CareerWrapper>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'swe', file: 'careers/software-engineer/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.doesNotMatch(output, /CareerWrapper/);
  assert.match(output, /\n<div class="body-sections">\n  <h3>Responsibilities<\/h3>\n  \[Programs\]\(\/careers\/programs\)\n<\/div>\n/);

  const withFence = [
    '---',
    'title: "Fence Wrapper"',
    '---',
    '<BlogWrapper>',
    '    Intro text.',
    '```bash',
    '    indented_inside_fence',
    '```',
    '    Outro text.',
    '</BlogWrapper>',
  ].join('\n');
  const res = convertFile(withFence, { slug: 'fence', file: 'blog/post/index.mdx' });
  assert.equal(res.stats.warnings.length, 0);
  assert.doesNotMatch(res.output, /BlogWrapper/);
  assert.match(res.output, /\nIntro text\.\n```bash\n    indented_inside_fence\n```\nOutro text\.\n/);
});


test('Wrappers do not let a shorter fence run close a longer fenced block when dedenting', () => {
  const input = [
    '---',
    'title: "Long Fence Wrapper"',
    '---',
    '<BlogWrapper>',
    '    Intro text.',
    '````md',
    '    ```nested',
    '        deeply indented',
    '````',
    '    Outro text.',
    '</BlogWrapper>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'long-fence', file: 'blog/post/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.doesNotMatch(output, /BlogWrapper/);
  assert.match(output, /\nIntro text\.\n````md\n    ```nested\n        deeply indented\n````\nOutro text\.\n/);
});


test('Code converts self-closing template-literal codeString to fenced code block with dynamic fence and text fallback', () => {
  const input = [
    '---',
    'title: "Code Test"',
    '---',
    '<Code language="bash" codeString={`npm install\nnpm test`} />',
    '<Code codeString={`git status`} />',
    '<Code language="md" codeString={`here is \\`\\`\\`nested\\`\\`\\` fence`} />',
    '<Code language="bash" codeString={`echo ${userVar}`} />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'code-test', file: 'handbook/contribution/index.mdx' });
  assert.match(output, /```bash\nnpm install\nnpm test\n```/);
  assert.match(output, /```text\ngit status\n```/);
  assert.match(output, /````md\nhere is ```nested``` fence\n````/);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /non-literal expression for "codeString"/);
  assert.match(output, /<Code language="bash" codeString=\{`echo \$\{userVar\}`\} \/>/);
});


test('Wrappers warn and leave tag as-is when body has mixed 0-space and 4+ space lines after dedent', () => {
  const input = [
    '---',
    'title: "Mixed Indent Wrapper"',
    '---',
    '<BlogWrapper>',
    '    <h4 className="date">October 04 to 09, 2021</h4>',
    'Regular 0-space line with <Link to="/blog">link</Link>.',
    '</BlogWrapper>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'ccoss', file: 'blog/2021/ccoss/index.mdx' });
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /4\+ space indented line after dedent/);
  assert.match(output, /<BlogWrapper>/);
  assert.match(output, /\[link\]\(\/blog\)/);
});

test('CodeBlock converts self-closing code or codeString attribute to fenced code block with jsx default fallback', () => {
  const input = [
    '---',
    'title: "CodeBlock Test"',
    '---',
    '<CodeBlock name="basic-accordion" collapsible code={`<Accordion>',
    '  <Typography>Panel 1</Typography>',
    '</Accordion>`} />',
    '<CodeBlock language="bash" code={`mesheryctl system start`} />',
    '<CodeBlock name="nested" code={`const x = \\`\\`\\`fence\\`\\`\\`;`} />',
    '<CodeBlock name="dynamic" code={basicCode} />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'codeblock-test', file: 'sistent/components/accordion/code.mdx' });
  assert.match(output, /```jsx\n<Accordion>\n  <Typography>Panel 1<\/Typography>\n<\/Accordion>\n```/);
  assert.match(output, /```bash\nmesheryctl system start\n```/);
  assert.match(output, /````jsx\nconst x = ```fence```;\n````/);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /non-literal expression for "code"/);
  assert.match(output, /<CodeBlock name="dynamic" code=\{basicCode\} \/>/);
});

test('stripExportConst removes export const statements deterministically while preserving code fences and flagging other exports', () => {
  const input = [
    '---',
    'title: "Export Strip Test"',
    '---',
    'export const data = programs_data;',
    'export const tableWrap = { overflowX: "auto" };',
    'export const faqData = [',
    '  {',
    '    question: "Is this open source?",',
    '    answer: "Yes, Apache V2."',
    '  }',
    '];',
    'export const JourneySection = () => {',
    '  const [hover, setHover] = useState(false);',
    '  return <div className="journey">Hello</div>;',
    '};',
    '```javascript',
    'export const preservedInFence = true;',
    '```',
    'export default function Page() { return null; }',
    'Content continues after exports.',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'export-test', file: 'handbook/about/index.mdx' });
  assert.doesNotMatch(output, /export const data/);
  assert.doesNotMatch(output, /export const tableWrap/);
  assert.doesNotMatch(output, /export const faqData/);
  assert.doesNotMatch(output, /export const JourneySection/);
  assert.match(output, /export const preservedInFence = true;/);
  assert.match(output, /Content continues after exports\./);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /contains `export` statements/);
});

test('stripExportConst leaves unterminated export const untouched and warns', () => {
  const input = [
    '---',
    'title: "Unterminated Export"',
    '---',
    'export const data = programs_data',
    '',
    'Content continues.',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'unterminated-test', file: 'programs/test/index.mdx' });
  assert.match(output, /export const data = programs_data/);
  assert.match(output, /Content continues\./);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /contains `export` statements/);
});

test('LfxLogoImage, ThemedScaLogo, and JourneySection convert to shortcodes', () => {
  const input = [
    '---',
    'title: "Shortcode Components"',
    '---',
    '<LfxLogoImage />',
    '<ThemedScaLogo />',
    '<JourneySection />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'shortcodes', file: 'programs/lfx-2021/lfx-2021.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.match(output, /\{\{< lfx-logo >\}\}/);
  assert.match(output, /\{\{< themed-sca-logo >\}\}/);
  assert.match(output, /\{\{< journey-section >\}\}/);
});

test('Blockquote, BlockquoteAlt, Callout, and InlineQuotes convert to Hugo shortcodes and respect sistent exclusion', () => {
  const input = [
    '---',
    'title: "Quote and Callout Test"',
    '---',
    '<Blockquote quote="Meshery is great." person="Prateek Tripathy" title="Maintainer" />',
    '<BlockquoteAlt quote="Community first." person="Michael Gfeller" />',
    '<Callout type="tip" title="No Cluster Required">Install mesheryctl to get started.</Callout>',
    '<InlineQuotes quote="Decisive for productivity." person="Mohd Hamza Shaikh" title="Platform Engineer" />',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'quote-test', file: 'blog/2026/quote-test/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.match(output, /\{\{< blockquote quote="Meshery is great\." person="Prateek Tripathy" title="Maintainer" >\}\}/);
  assert.match(output, /\{\{< blockquote-alt quote="Community first\." person="Michael Gfeller" >\}\}/);
  assert.match(output, /\{\{< callout type="tip" title="No Cluster Required" >\}\}\nInstall mesheryctl to get started\.\n\{\{< \/callout >\}\}/);
  assert.match(output, /\{\{< inline-quotes quote="Decisive for productivity\." person="Mohd Hamza Shaikh" title="Platform Engineer" >\}\}/);

  // Sistent collection guard
  const sistentRes = convertFile(input, { slug: 'quote-sistent', file: 'sistent/quote-test/index.mdx' });
  assert.match(sistentRes.output, /<!-- TODO\(mdx\): unconverted component <Blockquote> -->/);
  assert.match(sistentRes.output, /<!-- TODO\(mdx\): unconverted component <Callout> -->/);
  assert.equal(sistentRes.stats.unknown.Blockquote, 1);
  assert.equal(sistentRes.stats.unknown.Callout, 1);
});

test('img with imported identifier rewrites to literal src and normalizes className to class', () => {
  const input = [
    '---',
    'title: "Image Import Test"',
    '---',
    'import SmiLogo from "./smi-logo.webp";',
    '<img className="image-left" src={SmiLogo} alt="SMI Logo" />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'img-test', file: 'blog/img-test/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.doesNotMatch(output, /import\s+SmiLogo/);
  assert.match(output, /<img class="image-left" src="\.\/smi-logo\.webp" alt="SMI Logo" \/>/);
});

test('Link to={ImportedPdf} resolves imported PDF to literal link', () => {
  const input = [
    '---',
    'title: "PDF Import Test"',
    '---',
    'import DevOps from "./devops-adoption.pdf";',
    'In this <Link to={DevOps}>infographic</Link>, we highlight metrics.',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'pdf-test', file: 'resources/pdf-test/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.doesNotMatch(output, /import\s+DevOps/);
  assert.match(output, /\[infographic\]\(\.\/devops-adoption\.pdf\)/);
});

test('CTA_FullWidth image={var} resolves imported asset and warns if outside page bundle', () => {
  const input = [
    '---',
    'title: "CTA Image Test"',
    '---',
    'import banner from "../../../../assets/images/banner.png";',
    '<CTA_FullWidth title="Get Started" image={banner} />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'cta-test', file: 'resources/cta-test/index.mdx' });
  assert.match(output, /\{\{< cta-fullwidth title="Get Started" image="\.\.\/\.\.\/\.\.\/\.\.\/assets\/images\/banner\.png" >\}\}/);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /outside the page bundle/);
});

test('multiple imports per file are all resolved across HTML and Component tags', () => {
  const input = [
    '---',
    'title: "Multi Import Test"',
    '---',
    'import icon1 from "./icon1.svg";',
    'import icon2 from "./icon2.svg";',
    'import pdfDoc from "./doc.pdf";',
    '<img src={icon1} alt="Icon 1" />',
    '<img src={icon2} alt="Icon 2" />',
    '<Link to={pdfDoc}>Download</Link>',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'multi-test', file: 'blog/multi-test/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.match(output, /<img src="\.\/icon1\.svg" alt="Icon 1" \/>/);
  assert.match(output, /<img src="\.\/icon2\.svg" alt="Icon 2" \/>/);
  assert.match(output, /\[Download\]\(\.\/doc\.pdf\)/);
});

test('unresolved identifier leaves tag intact and emits non-literal expression warning', () => {
  const input = [
    '---',
    'title: "Unresolved Test"',
    '---',
    '<img src={missingBadge} alt="Badge" />',
    '<CTA_FullWidth image={missingCta} />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'unresolved-test', file: 'events/unresolved-test/index.mdx' });
  assert.match(output, /<img src=\{missingBadge\} alt="Badge" \/>/);
  assert.match(output, /<CTA_FullWidth image=\{missingCta\} \/>/);
  assert.equal(stats.warnings.length, 2);
  assert.match(stats.warnings[0], /non-literal expression for "src" on <img>/);
  assert.match(stats.warnings[1], /<CTA_FullWidth>: non-literal expression for "image"/);
});

test('imported assets conversion is idempotent', () => {
  const input = [
    '---',
    'title: "Idempotency Test"',
    '---',
    'import logo from "./logo.png";',
    '<img className="test" src={logo} alt="Logo" />',
  ].join('\n');
  const once = convertFile(input, { slug: 'idemp-test', file: 'blog/idemp-test/index.mdx' }).output;
  const twice = convertFile(once, { slug: 'idemp-test', file: 'blog/idemp-test/index.mdx' }).output;
  assert.equal(twice, once);
});

test('lowercase HTML tag with spread attribute and imported identifier preserves tag and props with warning', () => {
  const input = [
    '---',
    'title: "Spread Guard Test"',
    '---',
    'import logo from "./logo.png";',
    '<img {...props} src={logo} alt="Logo" />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'spread-guard-test', file: 'blog/spread-guard-test/index.mdx' });
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /<img>: spread\/expression attribute \{\.\.\.props\}/);
  assert.match(output, /<img \{\.\.\.props\} src=\{logo\} alt="Logo" \/>/);
  const rerun = convertFile(output, { slug: 'spread-guard-test', file: 'blog/spread-guard-test/index.mdx' });
  assert.equal(rerun.output, output);
});

test('jsxStyleToCss converts string and numeric literal style props to CSS strings and preserves non-literal expressions with warning', () => {
  const input = [
    '---',
    'title: "Style Test"',
    '---',
    '<img src="./img.png" style={{color: "red", width: someVar}} />',
    '<img src="./valid.png" style={{color: "blue", display: "block"}} />',
    '<img src="./numeric.png" style={{width: 100, zIndex: 10, marginTop: 8, opacity: 0.5}} />',
  ].join('\n');
  const { output, stats } = convertFile(input, { slug: 'style-test', file: 'blog/style-test/index.mdx' });
  assert.match(output, /<img src="\.\/img\.png" style=\{\{color: "red", width: someVar\}\} \/>/);
  assert.match(output, /<img src="\.\/valid\.png" style="color: blue; display: block" \/>/);
  assert.match(output, /<img src="\.\/numeric\.png" style="width: 100px; z-index: 10; margin-top: 8px; opacity: 0.5" \/>/);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /non-literal expression for "style" on <img>/);
});

test('Grid2 converts to grid and grid-item shortcodes with spacing and breakpoint sizes', () => {
  const input = [
    '---',
    'title: "Grid Test"',
    '---',
    '<Grid2 container spacing={2} style={{ margin: "30px 0" }}>',
    '  <Grid2 size={{ xs: 12, md: 6 }}>',
    '    <h3>Event Details</h3>',
    '    <p>October 3rd</p>',
    '  </Grid2>',
    '  <Grid2 size={4}>',
    '    Earn a badge',
    '  </Grid2>',
    '</Grid2>',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'grid-test', file: 'events/2025/grid-test/index.mdx' });
  assert.deepEqual(stats.warnings, []);
  assert.match(output, /\{\{< grid spacing="2" >\}\}\n[\s\S]*\n\{\{< \/grid >\}\}/);
  assert.match(output, /\{\{< grid-item xs="12" md="6" >\}\}\n<h3>Event Details<\/h3>\n<p>October 3rd<\/p>\n\{\{< \/grid-item >\}\}/);
  assert.match(output, /\{\{< grid-item xs="4" >\}\}\nEarn a badge\n\{\{< \/grid-item >\}\}/);
  assert.doesNotMatch(output, /Grid2|margin/);
});

test('Grid2 with a size or prop it cannot map warns and stays as-is', () => {
  const input = [
    '---',
    'title: "Grid Test"',
    '---',
    '<Grid2 size="grow">Auto</Grid2>',
    '<Grid2 size={{ xs: 12, md: "auto" }}>Mixed</Grid2>',
    '<Grid2 container direction="row">Row</Grid2>',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'grid-test', file: 'events/2025/grid-test/index.mdx' });
  assert.equal(stats.warnings.length, 3);
  assert.match(stats.warnings[0], /<Grid2>: unsupported size="grow"; left as-is/);
  assert.match(stats.warnings[1], /<Grid2>: unsupported size=\{\{ xs: 12, md: "auto" \}\}; left as-is/);
  assert.match(stats.warnings[2], /<Grid2>: unsupported direction="row"; left as-is/);
  assert.match(output, /<Grid2 size="grow">Auto<\/Grid2>/);
  assert.doesNotMatch(output, /grid-item|\{\{< grid/);
  assert.equal(stats.components.Grid2, undefined);
});

test('only the Grid2 tags that convert are counted in the report', () => {
  const input = '---\ntitle: "x"\n---\n<Grid2 size={6}>A</Grid2>\n<Grid2 size="grow">B</Grid2>';
  const { stats } = convertFile(input, { slug: 'grid-count', file: 'events/2025/grid-count/index.mdx' });
  assert.equal(stats.components.Grid2, 1);
});

test('a Grid2 left as-is does not count the Grid2 tags converted inside it', () => {
  const input = '---\ntitle: "x"\n---\n<Grid2 container direction="row"><Grid2 size={6}>A</Grid2></Grid2>';
  const { output, stats } = convertFile(input, { slug: 'grid-nested', file: 'events/2025/grid-nested/index.mdx' });
  assert.match(output, /<Grid2 container direction="row"><Grid2 size=\{6\}>A<\/Grid2><\/Grid2>/);
  assert.equal(stats.components.Grid2, undefined);
});

test('CommonForm and ContentForm convert to form shortcodes and respect sistent exclusion', () => {
  const input = [
    '---',
    'title: "Form Test"',
    '---',
    '<CommonForm',
    '  title="Get the Free eBook"',
    '  form="epsma-book"',
    '  submit_title="Your copy will arrive shortly."',
    '  submit_body={',
    '    <>',
    '      While waiting, take a free{" "}',
    '      <a href="https://layer5.io/learn/learning-paths">learning path</a>.',
    '    </>',
    '  }',
    '/>',
    '<ContentForm />',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'form-test', file: 'service-mesh-books/form-test/index.mdx' });
  assert.deepEqual(stats.warnings, []);
  assert.match(output, /\{\{< common-form title="Get the Free eBook" form="epsma-book" submit_title="Your copy will arrive shortly\." >\}\}\nWhile waiting, take a free <a href="https:\/\/layer5\.io\/learn\/learning-paths">learning path<\/a>\.\n\{\{< \/common-form >\}\}/);
  assert.match(output, /\{\{< content-form >\}\}/);
  assert.equal(stats.components.CommonForm, 1);
  assert.equal(stats.components.ContentForm, 1);

  const sistentRes = convertFile('---\ntitle: "x"\n---\n<Grid2 container><Grid2 size={6}>A</Grid2></Grid2>\n<ContentForm />', { slug: 'form-sistent', file: 'sistent/form-test/index.mdx' });
  assert.equal(sistentRes.stats.unknown.Grid2, 2);
  assert.equal(sistentRes.stats.unknown.ContentForm, 1);
});

test('CommonForm whose submit_body is not text or a fragment warns and stays as-is', () => {
  const input = '---\ntitle: "x"\n---\n<CommonForm form="epsma-book" submit_body={<span>{name}</span>} />';
  const { output, stats } = convertFile(input, { slug: 'form-test', file: 'service-mesh-books/form-test/index.mdx' });
  assert.deepEqual(stats.warnings, ['<CommonForm>: submit_body is not text or a <>…</> fragment; left as-is']);
  assert.match(output, /<CommonForm form="epsma-book" submit_body=\{<span>\{name\}<\/span>\} \/>/);
  assert.equal(stats.components.CommonForm, undefined);
});

test('convertBody masks code fences so paired tags enclosing code blocks match their closing tag', () => {
  const input = [
    '---',
    'title: "Fence Masking Test"',
    '---',
    '<Card>',
    'Here is some code:',
    '```go',
    'package main',
    'import "fmt"',
    'func main() {',
    '    fmt.Println("hello world")',
    '}',
    '```',
    'End of card.',
    '</Card>',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'fence-test', file: 'blog/fence-test/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.match(output, /\{\{< card >\}\}/);
  assert.match(output, /```go\npackage main\nimport "fmt"\nfunc main\(\) \{\n    fmt\.Println\("hello world"\)\n\}\n```/);
  assert.match(output, /\{\{< \/card >\}\}/);

  // Idempotency check
  const second = convertFile(output, { slug: 'fence-test', file: 'blog/fence-test/index.mdx' }).output;
  assert.equal(second, output);
});

test('parseOpenTag parses static object and array literals as literal: true while flagging dynamic expressions', () => {
  const snippet = '<CustomTag staticObj={{ key: "val", count: 42, active: true }} staticArr={[{ href: "#1", label: "One" }]} dynamicObj={{ key: someVar }} dynamicCall={getValues()} />';
  const tag = parseOpenTag(snippet, 0);

  const staticObjAttr = tag.attrs.find((a) => a.key === 'staticObj');
  const staticArrAttr = tag.attrs.find((a) => a.key === 'staticArr');
  const dynamicObjAttr = tag.attrs.find((a) => a.key === 'dynamicObj');
  const dynamicCallAttr = tag.attrs.find((a) => a.key === 'dynamicCall');

  assert.equal(staticObjAttr.literal, true);
  assert.equal(staticArrAttr.literal, true);
  assert.equal(dynamicObjAttr.literal, false);
  assert.equal(dynamicCallAttr.literal, false);

  assert.ok(tag.problems.includes('non-literal expression for "dynamicObj"'));
  assert.ok(tag.problems.includes('non-literal expression for "dynamicCall"'));
  assert.ok(!tag.problems.some((p) => p.includes('staticObj')));
  assert.ok(!tag.problems.some((p) => p.includes('staticArr')));

  // End-to-end test with HTML tag & style props
  const input = [
    '---',
    'title: "Object Literal E2E Test"',
    '---',
    '<img src="./test.png" style={{ color: "red", marginTop: 12 }} />',
    '<img src="./dynamic.png" style={{ color: dynamicColor }} />',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'obj-e2e', file: 'blog/obj-e2e/index.mdx' });
  assert.match(output, /<img src="\.\/test\.png" style="color: red; margin-top: 12px" \/>/);
  assert.match(output, /<img src="\.\/dynamic\.png" style=\{\{ color: dynamicColor \}\} \/>/);
  assert.equal(stats.warnings.length, 1);
  assert.match(stats.warnings[0], /non-literal expression for "style" on <img>/);

  // Idempotency check
  const second = convertFile(output, { slug: 'obj-e2e', file: 'blog/obj-e2e/index.mdx' }).output;
  assert.equal(second, output);
});

test('Blog bespoke components convert to paired Hugo shortcodes and respect sistent exclusion (P3-01)', () => {
  const input = [
    '---',
    'title: "Blog Bespoke Test"',
    '---',
    '<MeetTheMaintainer>',
    '<div className="interviewer"><span>Lee:</span> Welcome!</div>',
    '</MeetTheMaintainer>',
    '<MeetTheMeshMate>',
    '<div className="intro">Introducing our MeshMate</div>',
    '</MeetTheMeshMate>',
    '<MeshkitMesheryAdapterLib>',
    '<div className="fact">MeshKit fact</div>',
    '</MeshkitMesheryAdapterLib>',
    '<BufProtocol>',
    '<div className="fact">Buf fact</div>',
    '</BufProtocol>',
    '<PerfbytesPodcast>',
    '<div className="answer">Podcast answer</div>',
    '</PerfbytesPodcast>',
    '<Blog>',
    '<div className="badge-grid"><div><span>Badge</span></div></div>',
    '</Blog>',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'bespoke-test', file: 'blog/2026/bespoke-test/index.mdx' });
  assert.deepEqual(stats.warnings, []);
  assert.match(output, /\{\{< meet-the-maintainer >\}\}\n[\s\S]*\{\{< \/meet-the-maintainer >\}\}/);
  assert.match(output, /\{\{< meet-the-meshmate >\}\}\n[\s\S]*\{\{< \/meet-the-meshmate >\}\}/);
  assert.match(output, /\{\{< meshkit-meshery-adapter-lib >\}\}\n[\s\S]*\{\{< \/meshkit-meshery-adapter-lib >\}\}/);
  assert.match(output, /\{\{< buf-protocol >\}\}\n[\s\S]*\{\{< \/buf-protocol >\}\}/);
  assert.match(output, /\{\{< perfbytes-podcast >\}\}\n[\s\S]*\{\{< \/perfbytes-podcast >\}\}/);
  assert.match(output, /\{\{< blog >\}\}\n[\s\S]*\{\{< \/blog >\}\}/);
  assert.equal(stats.components.MeetTheMaintainer, 1);
  assert.equal(stats.components.MeetTheMeshMate, 1);
  assert.equal(stats.components.MeshkitMesheryAdapterLib, 1);
  assert.equal(stats.components.BufProtocol, 1);
  assert.equal(stats.components.PerfbytesPodcast, 1);
  assert.equal(stats.components.Blog, 1);

  // Idempotency: re-running on output yields identical output
  const rerun = convertFile(output, { slug: 'bespoke-test', file: 'blog/2026/bespoke-test/index.mdx' });
  assert.equal(rerun.output, output);

  // Sistent guard: components are skipped for sistent docs
  const sistentRes = convertFile(input, { slug: 'bespoke-test', file: 'sistent/bespoke-test/index.mdx' });
  assert.equal(sistentRes.stats.unknown.MeetTheMaintainer, 1);
  assert.equal(sistentRes.stats.unknown.MeetTheMeshMate, 1);
  assert.equal(sistentRes.stats.unknown.MeshkitMesheryAdapterLib, 1);
  assert.equal(sistentRes.stats.unknown.BufProtocol, 1);
  assert.equal(sistentRes.stats.unknown.PerfbytesPodcast, 1);
  assert.equal(sistentRes.stats.unknown.Blog, 1);
});

test('Blog bespoke components preserve warnings on non-literal props and unclosed tags', () => {
  const unclosed = '---\ntitle: "Unclosed"\n---\n<MeetTheMaintainer>\nContent\n';
  const res1 = convertFile(unclosed, { slug: 'unclosed', file: 'blog/2026/unclosed/index.mdx' });
  assert.ok(res1.stats.warnings.some((w) => /<MeetTheMaintainer> has no closing tag/.test(w)));
  assert.match(res1.output, /<MeetTheMaintainer>/);

  const nonLiteral = '---\ntitle: "NonLiteral"\n---\n<Blog customProp={someVar}>Body</Blog>\n';
  const res2 = convertFile(nonLiteral, { slug: 'nonliteral', file: 'blog/2026/nonliteral/index.mdx' });
  assert.ok(res2.stats.warnings.some((w) => /non-literal expression for "customProp"/.test(w)));
});

/* ---- branch bundles (#8302) ---- */
function tree(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-src-'));
  for (const [rel, text] of Object.entries(files)) {
    const p = path.join(root, rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, text);
  }
  return root;
}
const doc = (t) => `---\ntitle: ${t}\n---\n\nBody of ${t}.\n`;
const outDir = () => fs.mkdtempSync(path.join(os.tmpdir(), 'l5-out-'));
const has = (d, r) => fs.existsSync(path.join(d, r));

test('branch bundle: index + code + guidance become _index.md + sibling pages; assets copied', () => {
  const src = tree({
    'sistent/button/index.mdx': doc('Button'), 'sistent/button/code.mdx': doc('Button code'),
    'sistent/button/guidance.mdx': doc('Button guidance'), 'sistent/button/diagram.svg': '<svg/>',
    'sistent/badge/index.mdx': doc('Badge'), // lone index stays a leaf bundle
  });
  const dest = outDir(); const r = migrate({ src, dest });
  assert.ok(has(dest, 'sistent/button/_index.md'));
  assert.ok(!has(dest, 'sistent/button/index.md'));
  assert.ok(has(dest, 'sistent/button/code.md') && has(dest, 'sistent/button/guidance.md'));
  assert.ok(has(dest, 'sistent/button/diagram.svg'));
  assert.ok(has(dest, 'sistent/badge/index.md') && !has(dest, 'sistent/badge/_index.md'));
  assert.deepEqual([r.byCollection.sistent.files, r.byCollection.sistent.pagesOut, r.byCollection.sistent.branchBundles], [4, 4, 1]);
});

test('branch bundle: nested course/chapter/section; only the deepest level stays a leaf', () => {
  const src = tree({
    'learn/course/index.mdx': doc('Course'), 'learn/course/chapter/index.mdx': doc('Chapter'),
    'learn/course/chapter/section/index.mdx': doc('Section'),
  });
  const dest = outDir(); const r = migrate({ src, dest });
  assert.ok(has(dest, 'learn/course/_index.md') && has(dest, 'learn/course/chapter/_index.md'));
  assert.ok(has(dest, 'learn/course/chapter/section/index.md'));
  assert.deepEqual([r.files, r.pagesOut, r.branchBundles], [3, 3, 2]);
});

test('branch bundle: folder names with spaces work; no _index.md is invented without an index', () => {
  const src = tree({
    'members/Jane Doe/index.mdx': doc('Jane'), 'members/Jane Doe/talks/index.mdx': doc('Talks'),
    'events/2026/summit.mdx': doc('Summit'), 'events/2026/call/index.mdx': doc('Call'),
  });
  const dest = outDir(); migrate({ src, dest });
  assert.ok(has(dest, 'members/Jane Doe/_index.md') && has(dest, 'members/Jane Doe/talks/index.md'));
  assert.ok(has(dest, 'events/2026/summit.md') && has(dest, 'events/2026/call/index.md'));
  assert.ok(!has(dest, 'events/2026/_index.md'));
});

test('documents in = pages out; two sources writing one page is reported, not overwritten', () => {
  const r = migrate({ src: tree({ 'blog/a.mdx': doc('one'), 'blog/a.md': doc('two') }), dest: outDir() });
  assert.deepEqual([r.files, r.pagesOut, r.collisions.length], [2, 1, 1]);
});

test('dry-run reports the same branch bundles and writes nothing', () => {
  const src = tree({ 'sistent/button/index.mdx': doc('B'), 'sistent/button/code.mdx': doc('C') });
  const real = migrate({ src, dest: outDir() });
  const dry = outDir(); const d = migrate({ src, dest: dry, dryRun: true });
  assert.deepEqual(fs.readdirSync(dry), []);
  assert.deepEqual([d.pagesOut, d.branchBundles], [real.pagesOut, real.branchBundles]);
});

test('assets: two files whose paths differ only by case are reported, not overwritten', (t) => {
  const src = tree({ 'blog/post/index.mdx': doc('Post'), 'blog/post/Cover.png': 'a', 'blog/post/cover.png': 'b' });
  if (fs.readdirSync(path.join(src, 'blog/post')).length < 3) return t.skip('case-insensitive filesystem');
  const r = migrate({ src, dest: outDir() });
  assert.deepEqual([r.collisions.length, r.assetsCopied], [1, 1]);
});

test('Resources bespoke components and case studies convert to Hugo shortcodes (P3-02)', () => {
  const input = [
    '---',
    'title: "Resources Bespoke Test"',
    '---',
    '<HPEintro>HPE intro paragraph</HPEintro>',
    '<HPEfacts><tr><td>HPE fact</td></tr></HPEfacts>',
    '<HPEbenefits>HPE benefit</HPEbenefits>',
    '<INFORintro>Infor intro</INFORintro>',
    '<INFORfacts><tr><td>Infor fact</td></tr></INFORfacts>',
    '<INFORbenefits>Infor benefit</INFORbenefits>',
    '<TCSintro>TCS intro</TCSintro>',
    '<TCSfacts><tr><td>TCS fact</td></tr></TCSfacts>',
    '<TCSbenefits>TCS benefit</TCSbenefits>',
    '<PlaygroundCTA />',
    '<DockerExtensionCTA />',
    '<FAQ category={["careers"]} />',
    '<FAQ category="Meshery" />',
    '<Table />',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'resources-test', file: 'resources/case-study/resources-test/index.mdx' });
  assert.deepEqual(stats.warnings, []);
  assert.match(output, /\{\{< case-study-intro >\}\}\nHPE intro paragraph\n\{\{< \/case-study-intro >\}\}/);
  assert.match(output, /\{\{< case-study-facts >\}\}\n<tr><td>HPE fact<\/td><\/tr>\n\{\{< \/case-study-facts >\}\}/);
  assert.match(output, /\{\{< case-study-benefits >\}\}\nHPE benefit\n\{\{< \/case-study-benefits >\}\}/);
  assert.match(output, /\{\{< case-study-intro >\}\}\nInfor intro\n\{\{< \/case-study-intro >\}\}/);
  assert.match(output, /\{\{< case-study-facts >\}\}\n<tr><td>Infor fact<\/td><\/tr>\n\{\{< \/case-study-facts >\}\}/);
  assert.match(output, /\{\{< case-study-benefits >\}\}\nInfor benefit\n\{\{< \/case-study-benefits >\}\}/);
  assert.match(output, /\{\{< case-study-intro >\}\}\nTCS intro\n\{\{< \/case-study-intro >\}\}/);
  assert.match(output, /\{\{< case-study-facts >\}\}\n<tr><td>TCS fact<\/td><\/tr>\n\{\{< \/case-study-facts >\}\}/);
  assert.match(output, /\{\{< case-study-benefits >\}\}\nTCS benefit\n\{\{< \/case-study-benefits >\}\}/);
  assert.match(output, /\{\{< playground-cta >\}\}/);
  assert.match(output, /\{\{< docker-extension-cta >\}\}/);
  assert.match(output, /\{\{< faq category="careers" >\}\}/);
  assert.match(output, /\{\{< faq category="Meshery" >\}\}/);
  assert.match(output, /\{\{< patterns-table >\}\}/);

  assert.equal(stats.components.HPEintro, 1);
  assert.equal(stats.components.HPEfacts, 1);
  assert.equal(stats.components.HPEbenefits, 1);
  assert.equal(stats.components.INFORintro, 1);
  assert.equal(stats.components.INFORfacts, 1);
  assert.equal(stats.components.INFORbenefits, 1);
  assert.equal(stats.components.TCSintro, 1);
  assert.equal(stats.components.TCSfacts, 1);
  assert.equal(stats.components.TCSbenefits, 1);
  assert.equal(stats.components.PlaygroundCTA, 1);
  assert.equal(stats.components.DockerExtensionCTA, 1);
  assert.equal(stats.components.FAQ, 2);
  assert.equal(stats.components.Table, 1);

  // Idempotency
  const rerun = convertFile(output, { slug: 'resources-test', file: 'resources/case-study/resources-test/index.mdx' });
  assert.equal(rerun.output, output);

  // Sistent guard
  const sistentRes = convertFile(input, { slug: 'resources-test', file: 'sistent/resources-test/index.mdx' });
  assert.equal(sistentRes.stats.unknown.Table, 1);
  assert.equal(sistentRes.stats.unknown.FAQ, 2);
  assert.equal(sistentRes.stats.unknown.PlaygroundCTA, 1);
  assert.equal(sistentRes.stats.unknown.DockerExtensionCTA, 1);
  assert.equal(sistentRes.stats.unknown.HPEintro, 1);
});

test('FAQ preserves warning on unsupported non-literal expression', () => {
  const input = '---\ntitle: "Bad FAQ"\n---\n<FAQ category={someFunction()} />\n';
  const { output, stats } = convertFile(input, { slug: 'bad-faq', file: 'resources/bad-faq/index.mdx' });
  assert.ok(stats.warnings.some((w) => /non-literal expression for "category"/.test(w)));
  assert.match(output, /<FAQ category=\{someFunction\(\)\} \/>/);
});

test('FAQ single-element array prop is extracted as literal, multi-element array falls through safely', () => {
  const single = '---\ntitle: "Single FAQ"\n---\n<FAQ category={["careers"]} />\n';
  const { output: singleOut, stats: singleStats } = convertFile(single, { slug: 'single-faq', file: 'resources/single-faq/index.mdx' });
  assert.equal(singleStats.warnings.length, 0);
  assert.match(singleOut, /\{\{< faq category="careers" >\}\}/);

  const multi = '---\ntitle: "Multi FAQ"\n---\n<FAQ category={["careers", "internships"]} />\n';
  const { output: multiOut, stats: multiStats } = convertFile(multi, { slug: 'multi-faq', file: 'resources/multi-faq/index.mdx' });
  assert.ok(multiStats.warnings.some((w) => /non-literal expression for "category"/.test(w)));
  assert.ok(multiOut.includes('<FAQ category={["careers", "internships"]} />'));
});

test('PositionApply, LfxPageNav, Col, and Row convert to shortcodes, handle prop-less tags, and respect sistent exclusion', () => {
  const input = [
    '---',
    'title: "Programs & Careers Bespoke Test"',
    '---',
    '<PositionApply />',
    '<LfxPageNav items={[',
    '  { href: "#spring-2026", label: "Spring 2026 Projects" },',
    '  { href: "#summer-2026", label: "Summer 2026 Projects" },',
    ']} />',
    '<Row className="qualification-row">',
    '  <Col $xs={12} $lg={6} className="qualification-col">',
    '    Desired qualifications',
    '  </Col>',
    '</Row>',
    '<Row>',
    '  <Col>',
    '    Propless content',
    '  </Col>',
    '</Row>',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'careers-test', file: 'careers/software-engineer/index.mdx' });
  assert.match(output, /\{\{< position-apply >\}\}/);
  assert.match(output, /\{\{< lfx-page-nav >\}\}\n- \[Spring 2026 Projects\]\(#spring-2026\)\n- \[Summer 2026 Projects\]\(#summer-2026\)\n\{\{< \/lfx-page-nav >\}\}/);
  assert.match(output, /\{\{< row class="qualification-row" >\}\}/);
  assert.match(output, /\{\{< col xs="12" lg="6" class="qualification-col" >\}\}\n\s*Desired qualifications\n\s*\{\{< \/col >\}\}/);
  assert.match(output, /\{\{< row >\}\}\n\s*\{\{< col >\}\}\n\s*Propless content\n\s*\{\{< \/col >\}\}\n\s*\{\{< \/row >\}\}/);
  assert.equal(stats.unknown.Row, undefined);
  assert.equal(stats.unknown.Col, undefined);
  assert.equal(stats.components.Row, 2);
  assert.equal(stats.components.Col, 2);

  // Sistent collection guard
  const sistentRes = convertFile(input, { slug: 'sistent-test', file: 'sistent/programs-test/index.mdx' });
  assert.match(sistentRes.output, /<!-- TODO\(mdx\): unconverted component <PositionApply> -->/);
  assert.match(sistentRes.output, /<!-- TODO\(mdx\): unconverted component <LfxPageNav> -->/);
  assert.match(sistentRes.output, /<!-- TODO\(mdx\): unconverted component <Row> -->/);
  assert.match(sistentRes.output, /<!-- TODO\(mdx\): unconverted component <Col> -->/);
  assert.equal(sistentRes.stats.unknown.PositionApply, 1);
  assert.equal(sistentRes.stats.unknown.LfxPageNav, 1);
  assert.equal(sistentRes.stats.unknown.Row, 2);
  assert.equal(sistentRes.stats.unknown.Col, 2);
});

test('Row/Col: nested Row inside Col, code fences untouched, indented content, non-literal props, and idempotency', () => {
  const input = [
    '---',
    'title: "Row Col Nested & Edge Cases"',
    '---',
    '<Col $lg={12}>',
    '  <Row>',
    '    <Col>',
    '      Nested content with indentation',
    '    </Col>',
    '  </Row>',
    '</Col>',
    '',
    '```jsx',
    '<Row>',
    '  <Col $sm={12}>Code fence Col</Col>',
    '</Row>',
    '```',
    '',
    '<Row className={dynamicClass}>',
    '  <Col $sm={computedWidth}>Non-literal</Col>',
    '</Row>',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'nested-test', file: 'projects/nested-test/index.mdx' });

  // Nested Row inside Col converts cleanly
  assert.match(output, /\{\{< col lg="12" >\}\}\n\s*\{\{< row >\}\}\n\s*\{\{< col >\}\}\n\s*Nested content with indentation\n\s*\{\{< \/col >\}\}\n\s*\{\{< \/row >\}\}\n\s*\{\{< \/col >\}\}/);

  // Code fence untouched byte-for-byte
  assert.match(output, /```jsx\n<Row>\n  <Col \$sm=\{12\}>Code fence Col<\/Col>\n<\/Row>\n```/);

  // Non-literal props on Row and Col are flagged and preserved as-is
  const nonLiteralInput = [
    '---',
    'title: "Non-literal test"',
    '---',
    '<Row className={dynamicClass}>Dynamic Row</Row>',
    '<Col $sm={computedWidth}>Non-literal Col</Col>',
  ].join('\n');
  const nonLitRes = convertFile(nonLiteralInput, { slug: 'non-lit', file: 'projects/non-lit/index.mdx' });
  assert.ok(nonLitRes.stats.warnings.some((w) => /<Row>: non-literal expression for "className"/.test(w)));
  assert.ok(nonLitRes.stats.warnings.some((w) => /<Col>: non-literal expression for "\$sm"/.test(w)));
  assert.match(nonLitRes.output, /<Row className=\{dynamicClass\}>Dynamic Row<\/Row>/);
  assert.match(nonLitRes.output, /<Col \$sm=\{computedWidth\}>Non-literal Col<\/Col>/);

  // Converted counts match top-level and nested converted elements
  assert.equal(stats.components.Row, 1);
  assert.equal(stats.components.Col, 2);

  // Idempotency: re-running on output produces identical bytes
  const rerun = convertFile(output, { slug: 'nested-test', file: 'projects/nested-test/index.mdx' });
  assert.equal(rerun.output, output);
});

test('lowercase HTML tags rewrite React camelCase attributes to standard HTML outside code fences and respect sistent exclusion', () => {
  const input = [
    '---',
    'title: "HTML Attrs Test"',
    '---',
    'import heroImg from "./hero.png";',
    '',
    '<div className="outer">',
    '  <p className="lead">Hello <a href="/about" className="cta-link">world</a></p>',
    '  <img src={heroImg} className="hero-pic" alt="Hero" />',
    '  <img src="./static.png" className="static-pic" alt="Static" />',
    '  <label htmlFor="email-input">Email</label>',
    '  <iframe src="https://example.com" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>',
    '  <table><tr><td colSpan="2">Cell</td></tr></table>',
    '</div>',
    '',
    '```jsx',
    '<div className="untouched-in-fence"><label htmlFor="f">F</label></div>',
    '```',
  ].join('\n');

  const { output, stats } = convertFile(input, { slug: 'html-attrs', file: 'blog/2026/html-attrs/index.mdx' });
  assert.equal(stats.warnings.length, 0);
  assert.match(output, /<div class="outer">/);
  assert.match(output, /<p class="lead">Hello <a href="\/about" class="cta-link">world<\/a><\/p>/);
  assert.match(output, /<img src="\.\/hero\.png" class="hero-pic" alt="Hero" \/>/);
  assert.match(output, /<img src="\.\/static\.png" class="static-pic" alt="Static" \/>/);
  assert.match(output, /<label for="email-input">Email<\/label>/);
  assert.match(output, /<iframe src="https:\/\/example\.com" frameborder="0" marginheight="0" marginwidth="0">/);
  assert.match(output, /<td colspan="2">Cell<\/td>/);
  assert.match(output, /<div className="untouched-in-fence"><label htmlFor="f">F<\/label><\/div>/);

  // Idempotency
  const rerun = convertFile(output, { slug: 'html-attrs', file: 'blog/2026/html-attrs/index.mdx' });
  assert.equal(rerun.output, output);

  // Sistent guard
  const sistentRes = convertFile(input, { slug: 'html-attrs', file: 'sistent/html-attrs/index.mdx' });
  assert.match(sistentRes.output, /<div className="outer">/);
  assert.match(sistentRes.output, /<label htmlFor="email-input">/);

  // Scoped .book .card check
  const book = '---\ntitle: "Book"\n---\n<BookWrapper><div className="book"><img className="card" src="./cover.webp" alt="Cover" /></div></BookWrapper>\n';
  const bookOut = convertFile(book, { slug: 'book', file: 'service-mesh-books/book/index.mdx' });
  assert.match(bookOut.output, /<div class="book"><img class="card" src="\.\/cover\.webp" alt="Cover" \/><\/div>/);
});

test('non-index docs with sibling assets promote to leaf bundles, remain idempotent, and respect sistent exclusion', () => {
  const src = tree({
    'programs/lfx-2023/lfx-2023.mdx': doc('LFX 2023') + '\n![Logo](./logo.svg)\n',
    'programs/lfx-2023/logo.svg': '<svg></svg>',
    'resources/articles/wasm/part-a.mdx': doc('Part A') + '\n![Fig](./fig.svg)\n',
    'resources/articles/wasm/part-b.mdx': doc('Part B') + '\n![Fig](./fig.svg)\n',
    'resources/articles/wasm/fig.svg': '<svg></svg>',
    'sistent/comp/comp.mdx': doc('Sistent Comp'),
    'sistent/comp/icon.svg': '<svg></svg>',
  });
  const dest = outDir();
  const r1 = migrate({ src, dest, exclude: ['sistent'] });
  assert.ok(fs.existsSync(path.join(dest, 'programs/lfx-2023/lfx-2023/index.md')));
  assert.ok(fs.existsSync(path.join(dest, 'programs/lfx-2023/lfx-2023/logo.svg')));
  assert.ok(fs.existsSync(path.join(dest, 'resources/articles/wasm/part-a/index.md')));
  assert.ok(fs.existsSync(path.join(dest, 'resources/articles/wasm/part-a/fig.svg')));
  assert.ok(fs.existsSync(path.join(dest, 'resources/articles/wasm/part-b/index.md')));
  assert.ok(fs.existsSync(path.join(dest, 'resources/articles/wasm/part-b/fig.svg')));
  assert.ok(!fs.existsSync(path.join(dest, 'sistent/comp/comp/index.md')));
  assert.equal(r1.pagesOut, 3);

  // Idempotency on promoted output
  const dest2 = outDir();
  migrate({ src: dest, dest: dest2, exclude: ['sistent'] });
  assert.equal(
    fs.readFileSync(path.join(dest, 'programs/lfx-2023/lfx-2023/index.md'), 'utf8'),
    fs.readFileSync(path.join(dest2, 'programs/lfx-2023/lfx-2023/index.md'), 'utf8')
  );
  assert.ok(fs.existsSync(path.join(dest2, 'programs/lfx-2023/lfx-2023/logo.svg')));
});

test('redirect_from canonicalizes trailing slashes, deduplicates within a file, and warns on cross-file duplicates', () => {
  const src = tree({
    'blog/a/index.mdx': '---\ntitle: "A"\nredirect_from:\n  - /old/path/\n  - /old/path\n---\nBody A\n',
    'blog/b/index.mdx': '---\ntitle: "B"\nredirect_from:\n  - /old/path/\n---\nBody B\n',
    'blog/c/index.mdx': '---\ntitle: "C"\nredirect_from: /old/path\n---\nBody C\n',
  });
  const dest = outDir();
  const r = migrate({ src, dest });
  const aOut = fs.readFileSync(path.join(dest, 'blog/a/index.md'), 'utf8');
  assert.match(aOut, /aliases:\n  - \/old\/path\/\n/);
  assert.equal(aOut.match(/\/old\/path/g).length, 1);
  const cOut = fs.readFileSync(path.join(dest, 'blog/c/index.md'), 'utf8');
  assert.match(cOut, /aliases:\n  - \/old\/path\/\n/);
  assert.ok(r.warnings.some((w) => w.file.replace(/\\/g, '/') === 'blog/b/index.mdx' && /duplicate alias "\/old\/path\/"/.test(w.message)));
  assert.ok(r.warnings.some((w) => w.file.replace(/\\/g, '/') === 'blog/c/index.mdx' && /duplicate alias "\/old\/path\/"/.test(w.message)));
});

test('Option 1 asset bundling copies out-of-bundle body images, shortcodes, and markdown images, handles collisions, stays idempotent, and respects sistent', () => {
  const pngBytes = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const src = tree({
    'assets/shared/hero.png': pngBytes,
    'assets/shared/dup.png': pngBytes,
    'blog/post1/index.mdx': [
      '---',
      'title: "Post 1"',
      'thumbnail: ../../assets/shared/hero.png',
      '---',
      'import Hero from "../../assets/shared/hero.png";',
      '',
      '<img src={Hero} alt="h" />',
      '<CTA_FullWidth image="../../assets/shared/hero.png" />',
      '![md](../../assets/shared/hero.png)',
      '![md-titled](../../assets/shared/hero.png "Hero Title")',
      '![md-single](../../assets/shared/hero.png \'Single Title\')',
      '<img src="../../assets/shared/dup.png" alt="d" />',
    ].join('\n'),
    'blog/post1/dup.png': pngBytes, // local file already owns dup.png -> collision!
    'sistent/comp/index.mdx': '---\ntitle: "S"\n---\n<img src="../../assets/shared/hero.png" alt="s" />\n',
  });
  const dest = outDir();
  const r = migrate({ src, dest, exclude: ['sistent'] });
  assert.ok(fs.existsSync(path.join(dest, 'blog/post1/hero.png')));
  const out = fs.readFileSync(path.join(dest, 'blog/post1/index.md'), 'utf8');
  assert.match(out, /thumbnail: hero\.png/);
  assert.match(out, /<img src="\.\/hero\.png" alt="h" \/>/);
  assert.match(out, /\{\{< cta-fullwidth image="\.\/hero\.png" >\}\}/);
  assert.match(out, /!\[md\]\(\.\/hero\.png\)/);
  assert.match(out, /!\[md-titled\]\(\.\/hero\.png "Hero Title"\)/);
  assert.match(out, /!\[md-single\]\(\.\/hero\.png 'Single Title'\)/);
  // dup.png collision keeps original path and warns
  assert.match(out, /<img src="\.\.\/\.\.\/assets\/shared\/dup\.png" alt="d" \/>/);
  assert.ok(r.warnings.some((w) => /dup\.png.*outside the page bundle/.test(w.message)));
  // Sistent excluded
  assert.ok(!fs.existsSync(path.join(dest, 'sistent/comp/hero.png')));

  // Idempotency
  const dest2 = outDir();
  migrate({ src: dest, dest: dest2, exclude: ['sistent'] });
  assert.equal(fs.readFileSync(path.join(dest2, 'blog/post1/index.md'), 'utf8'), out);
});

test('Option 1 asset bundling checks promoted bundle directory in taken() for non-index docs', () => {
  const pngA = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x01]);
  const pngB = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x02]);
  const src = tree({
    'shared/a/hero.png': pngA,
    'shared/b/hero.png': pngB,
    'blog/guide/hero.png': pngA,
    'blog/guide/index.mdx': '---\ntitle: "Guide"\n---\nGuide\n',
    'blog/guide.mdx': '---\ntitle: "Guide Doc"\n---\n![h](./shared/b/hero.png)\n![h2](../shared/b/hero.png)\n',
  });
  const dest = outDir();
  const r = migrate({ src, dest });
  assert.ok(fs.existsSync(path.join(dest, 'blog/guide/hero.png')));
  // blog/guide.mdx promotes to blog/guide/index.md only if it bundles; hero.png in blog/guide/ is already owned by blog/guide/hero.png (pngA)
  assert.equal(Buffer.compare(fs.readFileSync(path.join(dest, 'blog/guide/hero.png')), pngA), 0);
  assert.ok(r.warnings.some((w) => w.file.replace(/\\/g, '/') === 'blog/guide.mdx' && /outside the page bundle/.test(w.message)));
});

test('warns when own-bundle root-relative img src is missing from page bundle', () => {
  const src = tree({
    'blog/2024/post/index.mdx': '---\ntitle: "Post"\n---\n<img src="/blog/2024/post/missing.gif" alt="m" />\n',
  });
  const dest = outDir();
  const r = migrate({ src, dest });
  assert.ok(r.warnings.some((w) => w.file.replace(/\\/g, '/') === 'blog/2024/post/index.mdx' && /missing from the page bundle/.test(w.message)));
});

test('own-bundle root-relative img src rewrites to ./localName and respects sistent exclusion', () => {
  const src = tree({
    'blog/2024/post/index.mdx': '---\ntitle: "Post"\n---\n<img src="/blog/2024/post/pic.png" alt="ok" />\n<img src="/blog/2024/post/missing.png" alt="miss" />\n<img src="/blog/2024/post/" alt="dir" />\n',
    'blog/2024/post/pic.png': 'PNG',
    'sistent/comp/index.mdx': '---\ntitle: "Sistent"\n---\n<img src="/sistent/comp/pic.png" alt="sistent" />\n',
    'sistent/comp/pic.png': 'PNG',
  });
  const dest = outDir();
  migrate({ src, dest });
  const blogOut = fs.readFileSync(path.join(dest, 'blog/2024/post/index.md'), 'utf8');
  assert.match(blogOut, /<img src="\.\/pic\.png" alt="ok" \/>/);
  assert.match(blogOut, /<img src="\/blog\/2024\/post\/missing\.png" alt="miss" \/>/);
  assert.match(blogOut, /<img src="\/blog\/2024\/post\/" alt="dir" \/>/);
  const sistentOut = fs.readFileSync(path.join(dest, 'sistent/comp/index.md'), 'utf8');
  assert.match(sistentOut, /<img src="\/sistent\/comp\/pic\.png" alt="sistent" \/>/);
});
