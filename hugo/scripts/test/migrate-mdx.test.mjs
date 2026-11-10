import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  convertFile,
  migrate,
  isTemplatePath,
  sniffImageFormat,
  normalizeAssetFilename,
  rewriteAssetReferences,
  parseFrontMatter,
  resolveGatsbyUrl,
  slugify,
} from '../migrate-mdx.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const fx = path.join(here, 'fixtures/collections');
const sourceCollections = path.resolve(here, '../../../src/collections');
const run = () => convertFile(fs.readFileSync(path.join(fx, 'blog/sample-post/index.mdx'), 'utf8'), { slug: 'sample-post' });
const writeDoc = (root, relativePath, frontmatter, body = 'Test content.\n') => {
  const file = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `---\n${frontmatter}\n---\n\n${body}`);
  return file;
};

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

test('frontmatter parser keeps unquoted dates as strings and parses multiline fields', () => {
  const parsed = parseFrontMatter([
    '---',
    'title: "A quoted: title"',
    'date: 2026-11-05',
    'description: >',
    '  A multiline',
    '  description.',
    'published: true',
    '---',
  ].join('\n'));

  assert.equal(parsed.title, 'A quoted: title');
  assert.equal(parsed.date, '2026-11-05');
  assert.equal(typeof parsed.date, 'string');
  assert.equal(parsed.description, 'A multiline description.\n');
  assert.equal(parsed.published, true);
});

test('slugify follows Gatsby punctuation and whitespace behavior', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
  assert.equal(slugify('  Multiple   Spaces  '), 'multiple-spaces');
  assert.equal(slugify('A---B'), 'a-b');
  assert.equal(slugify('C++ & C#'), 'c-c');
  assert.equal(slugify('café'), 'caf');
});

test('Gatsby URL resolution covers collection routes with Gatsby trailingSlash never', () => {
  const cases = [
    ['blog', { published: true, category: 'Cloud Native', title: 'Hello, World!' }, '/blog/cloud-native/hello-world'],
    ['news', { published: true, title: 'Layer5 Joins CNCF' }, '/company/news/layer5-joins-cncf'],
    ['events', { published: true, title: 'Community Call' }, '/community/events/community-call'],
    ['integrations', { published: true, title: 'GitLab Runner Operator' }, '/cloud-native-management/meshery/integrations/gitlab-runner-operator'],
    ['resources', { published: true, category: 'Case Study', title: 'A Cloud Native Story' }, '/resources/case-study/a-cloud-native-story'],
    ['members', { published: true, name: 'Lee Calcote' }, '/community/members/lee-calcote'],
    ['handbook', { title: 'Contributing to Layer5' }, '/community/handbook/contributing-to-layer5'],
    ['service-mesh-books', { published: true, title: 'Service Mesh Patterns' }, '/learn/service-mesh-books/service-mesh-patterns'],
    ['workshops', { published: false, title: 'Meshery Workshop' }, '/learn/workshops/meshery-workshop'],
    ['kanvas-labs', { title: 'Kanvas Lab' }, '/learn/kanvas-labs/kanvas-lab'],
    ['programs', { published: true, title: 'Summer of Code' }, '/programs/summer-of-code'],
    ['careers', { published: true, title: 'Software Engineer' }, '/careers/software-engineer'],
  ];

  for (const [collection, frontmatter, expected] of cases) {
    assert.equal(resolveGatsbyUrl({ collection, frontmatter }), expected, collection);
  }
});

test('explicit permalink wins, preserves dot segments, and follows Gatsby trailingSlash never', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'programs',
      frontmatter: { published: true, permalink: '../careers/internships/' },
    }),
    '/programs/../careers/internships',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'integrations',
      frontmatter: { published: true, permalink: 'eks' },
    }),
    '/cloud-native-management/meshery/integrations/eks',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'members',
      frontmatter: { published: true, name: 'Yash Sharma', permalink: 'yash-sharma-2' },
    }),
    '/members/yash-sharma-2',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'members',
      frontmatter: { published: true, name: 'Fallback Name', permalink: '' },
    }),
    '/community/members',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'members',
      frontmatter: { published: true, name: 'Fallback Name', permalink: 0 },
    }),
    '/community/members/0',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'members',
      frontmatter: { published: true, name: 'Fallback Name', permalink: false },
    }),
    '/community/members/false',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'programs',
      frontmatter: { published: true, permalink: 'custom/path/' },
    }),
    '/programs/custom/path',
  );
});

test('Sistent index and non-index documents map to distinct routes', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'sistent',
      relativeDirectory: 'sistent/components/divider',
      fileName: 'index',
    }),
    '/projects/sistent/components/divider',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'sistent',
      relativeDirectory: 'sistent/components/navigation-navbar',
      fileName: 'guidance',
    }),
    '/projects/sistent/components/navigation-navbar/guidance',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'sistent',
      relativeDirectory: 'sistent/components/navigation-navbar',
      fileName: 'code',
    }),
    '/projects/sistent/components/navigation-navbar/code',
  );
});

test('Gatsby publication filtering applies only to filtered collections', () => {
  const filteredCollections = [
    ['blog', { category: 'News', title: 'Draft post' }],
    ['news', { title: 'Draft news' }],
    ['service-mesh-books', { title: 'Draft book' }],
    ['resources', { category: 'News', title: 'Draft resource' }],
    ['members', { name: 'Draft member' }],
    ['integrations', { title: 'Draft integration' }],
    ['events', { title: 'Draft event' }],
    ['programs', { title: 'Draft program' }],
    ['careers', { title: 'Draft career' }],
  ];

  for (const [collection, frontmatter] of filteredCollections) {
    assert.equal(
      resolveGatsbyUrl({ collection, frontmatter: { ...frontmatter, published: false } }),
      null,
      `${collection} published:false`,
    );
    assert.equal(
      resolveGatsbyUrl({ collection, frontmatter }),
      null,
      `${collection} missing published`,
    );
    assert.ok(
      resolveGatsbyUrl({ collection, frontmatter: { ...frontmatter, published: true } }),
      `${collection} published:true`,
    );
  }

  assert.equal(
    resolveGatsbyUrl({
      collection: 'blog',
      frontmatter: { published: true, category: 'News', title: 'Published post' },
    }),
    '/blog/news/published-post',
  );
  assert.throws(
    () => resolveGatsbyUrl({ collection: 'events', frontmatter: { published: true } }),
    /Gatsby would create a page with an empty path/,
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'workshops',
      frontmatter: { published: false, title: 'Still a Gatsby page' },
    }),
    '/learn/workshops/still-a-gatsby-page',
  );
  assert.equal(
    resolveGatsbyUrl({
      collection: 'projects',
      frontmatter: { title: 'Data', permalink: 'explicit-data-path' },
    }),
    null,
  );
});

test('content-learn routes follow Gatsby createFilePath depth and ignore frontmatter permalink', () => {
  const routeFor = (file) => resolveGatsbyUrl({
    collection: 'content-learn',
    file,
    frontmatter: { permalink: 'not-used' },
  });

  assert.equal(
    routeFor('mastering-service-meshes-for-developers/index.mdx'),
    '/learn/learning-paths/mastering-service-meshes-for-developers',
  );
  assert.equal(
    routeFor('mastering-service-meshes-for-developers/introduction/index.mdx'),
    '/learn/learning-paths/mastering-service-meshes-for-developers/introduction',
  );
  assert.equal(
    routeFor('path/course/section/chapter/index.mdx'),
    '/learn/learning-paths/path/course/section/chapter',
  );
  assert.equal(routeFor('path/course/section/chapter/lesson/index.mdx'), null);
});

test('migrate recognizes a content-learn source root and suppresses paths Gatsby does not create', () => {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-learn-src-'));
  const src = path.join(parent, 'content-learn');
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-learn-dest-'));
  writeDoc(
    src,
    'mastering-meshery/introduction-to-meshery/index.mdx',
    'title: Introduction to Meshery\npermalink: ignored-by-gatsby',
  );
  writeDoc(
    src,
    'mastering-meshery/section/chapter/lesson/too-deep.mdx',
    'title: Not a Gatsby page',
  );

  migrate({ src, dest });

  const chapter = fs.readFileSync(
    path.join(dest, 'mastering-meshery/introduction-to-meshery/index.md'),
    'utf8',
  );
  assert.match(chapter, /^url: "\/learn\/learning-paths\/mastering-meshery\/introduction-to-meshery"$/m);
  assert.match(chapter, /^permalink: ignored-by-gatsby$/m);

  const tooDeep = fs.readFileSync(
    path.join(dest, 'mastering-meshery/section/chapter/lesson/too-deep.md'),
    'utf8',
  );
  assert.match(tooDeep, /^build:\n  render: never$/m);
  assert.doesNotMatch(tooDeep, /^url:/m);
});

test('real Gatsby source documents reproduce their onCreateNode routes', () => {
  const sourceDocument = (relativePath) => {
    const source = fs.readFileSync(path.join(sourceCollections, relativePath), 'utf8');
    const collection = relativePath.split(path.sep)[0];
    const ext = path.extname(relativePath);
    const fileName = path.basename(relativePath, ext);
    return convertFile(source, {
      collection,
      file: relativePath,
      fileName,
      relativeDirectory: path.dirname(relativePath).replace(/\\/g, '/'),
      slug: fileName === 'index' ? path.basename(path.dirname(relativePath)) : fileName,
    });
  };

  assert.equal(
    sourceDocument('programs/layer5/index.mdx').url,
    '/programs/../careers/internships',
  );
  assert.equal(
    sourceDocument('members/yash-sharma-2/index.mdx').url,
    '/members/yash-sharma-2',
  );
  assert.equal(
    sourceDocument('integrations/eks/index.mdx').url,
    '/cloud-native-management/meshery/integrations/eks',
  );
  assert.equal(
    sourceDocument('resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas/index.mdx').url,
    '/resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas',
  );
  assert.equal(
    sourceDocument('members/lee-calcote/index.mdx').url,
    '/community/members/lee-calcote',
  );
});

test('generated Gatsby URL overrides source url; unpublished filtered pages do not retain it', () => {
  const published = convertFile(
    '---\ntitle: "Generated Route"\ncategory: "Cloud Native"\npublished: true\nurl: /source-route/\n---\nBody\n',
    { slug: 'generated-route', collection: 'blog' },
  );
  assert.equal(published.url, '/blog/cloud-native/generated-route');
  assert.match(published.output, /^url: "\/blog\/cloud-native\/generated-route"$/m);
  assert.doesNotMatch(published.output, /\/source-route\//);

  const unpublished = convertFile(
    '---\ntitle: Hidden\ncategory: News\npublished: false\nurl: /source-route/\n---\nBody\n',
    { slug: 'hidden', collection: 'blog' },
  );
  assert.equal(unpublished.url, null);
  assert.match(unpublished.output, /^draft: true$/m);
  assert.doesNotMatch(unpublished.output, /^url:/m);

  const hiddenWithDraftFalse = convertFile(
    '---\ntitle: Hidden\ncategory: News\npublished: false\ndraft: false\n---\nBody\n',
    { slug: 'hidden', collection: 'blog' },
  );
  assert.match(hiddenWithDraftFalse.output, /^draft: true$/m);
  assert.doesNotMatch(hiddenWithDraftFalse.output, /^draft: false$/m);
});

test('published:false does not hide Gatsby pages in unfiltered collections', () => {
  const converted = convertFile(
    '---\ntitle: "Workshop"\npublished: false\nurl: /source-route/\n---\nBody\n',
    { slug: 'workshop', collection: 'workshops' },
  );
  assert.equal(converted.url, '/learn/workshops/workshop');
  assert.match(converted.output, /^url: "\/learn\/workshops\/workshop"$/m);
  assert.doesNotMatch(converted.output, /^draft:/m);
  assert.doesNotMatch(converted.output, /\/source-route\//);
});

test('data-only content keeps source url and is not rendered as an individual page', () => {
  const converted = convertFile(
    '---\ntitle: Example Project\npublished: false\nurl: /project-data/\n---\nBody\n',
    { slug: 'example-project', collection: 'projects' },
  );
  assert.match(converted.output, /^url: \/project-data\/$/m);
  assert.match(converted.output, /^build:\n  render: never$/m);
  assert.doesNotMatch(converted.output, /^draft:/m);
  assert.equal(converted.url, null);

  const landscape = convertFile('---\ntitle: Landscape item\n---\nBody\n', {
    slug: 'landscape-item',
    collection: 'landscape',
  });
  assert.match(landscape.output, /^build:\n  render: never$/m);
  assert.equal(landscape.url, null);
});

test('migrate detects duplicate generated URLs and reports both documents', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-duplicate-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-duplicate-dest-'));
  const frontmatter = 'title: Duplicate Post\ncategory: Engineering\npublished: true';
  writeDoc(src, 'blog/first/index.mdx', frontmatter);
  writeDoc(src, 'blog/second/index.mdx', frontmatter);

  assert.throws(
    () => migrate({ src, dest }),
    (error) => {
      assert.match(error.message, /Duplicate URL detected/);
      assert.match(error.message, /blog\/first\/index\.mdx/);
      assert.match(error.message, /blog\/second\/index\.mdx/);
      assert.match(error.message, /\/blog\/engineering\/duplicate-post/);
      return true;
    },
  );
});

test('migrate detects duplicate generated URLs during dry-run', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-dry-duplicate-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-dry-duplicate-dest-'));
  const frontmatter = 'title: Same Post\ncategory: Engineering\npublished: true';
  writeDoc(src, 'blog/first/index.mdx', frontmatter);
  writeDoc(src, 'blog/second/index.mdx', frontmatter);

  assert.throws(() => migrate({ src, dest, dryRun: true }), /Duplicate URL detected/);
  assert.deepEqual(fs.readdirSync(dest), []);
});

test('migrate detects duplicate explicit permalinks', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-permalink-duplicate-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-permalink-duplicate-dest-'));
  writeDoc(
    src,
    'blog/first/index.mdx',
    'title: First Post\ncategory: Engineering\npublished: true\npermalink: shared/',
  );
  writeDoc(
    src,
    'blog/second/index.mdx',
    'title: Second Post\ncategory: Engineering\npublished: true\npermalink: shared/',
  );

  assert.throws(() => migrate({ src, dest }), /Duplicate URL detected/);
});

test('migrate ignores unpublished and data-only documents in duplicate URL detection', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-nonpage-duplicate-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-nonpage-duplicate-dest-'));
  writeDoc(src, 'blog/first/index.mdx', 'title: Hidden\ncategory: Engineering\npublished: false');
  writeDoc(src, 'blog/second/index.mdx', 'title: Hidden\ncategory: Engineering\npublished: false');
  writeDoc(src, 'projects/first.mdx', 'title: Shared data');
  writeDoc(src, 'projects/second.mdx', 'title: Shared data');

  assert.doesNotThrow(() => migrate({ src, dest, dryRun: true }));
});

test('migrate generates executive bio pages and includes their URLs in duplicate detection', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bio-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bio-dest-'));
  writeDoc(
    src,
    'members/lee/index.mdx',
    'name: Lee Calcote\npublished: true\nexecutive_bio: true',
    'Executive biography.\n',
  );
  migrate({ src, dest });

  const bioPath = path.join(dest, 'member-bios', 'lee.md');
  assert.ok(fs.existsSync(bioPath));
  const bio = fs.readFileSync(bioPath, 'utf8');
  assert.match(bio, /^url: "\/community\/members\/lee-calcote\/bio"$/m);
  assert.match(bio, /^member_page_path: "\/community\/members\/lee-calcote"$/m);

  writeDoc(
    src,
    'members/nina/profile.mdx',
    'name: Nina Member\npublished: true\nexecutive_bio: true',
    'Non-index executive biography.\n',
  );
  migrate({ src, dest });
  const nonIndexBio = fs.readFileSync(path.join(dest, 'member-bios', 'profile.md'), 'utf8');
  assert.match(nonIndexBio, /^url: "\/community\/members\/nina-member\/bio"$/m);

  const duplicateSrc = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bio-duplicate-src-'));
  const duplicateDest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bio-duplicate-dest-'));
  writeDoc(
    duplicateSrc,
    'members/lee/index.mdx',
    'name: Lee Calcote\npublished: true\nexecutive_bio: true\npermalink: shared',
  );
  writeDoc(
    duplicateSrc,
    'members/other/index.mdx',
    'name: Other Member\npublished: true\npermalink: shared/bio/',
  );

  assert.throws(
    () => migrate({ src: duplicateSrc, dest: duplicateDest }),
    (error) => {
      assert.match(error.message, /Duplicate URL detected/);
      assert.match(error.message, /executive bio/);
      assert.match(error.message, /members\/other\/index\.mdx/);
      return true;
    },
  );
});
