import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { convertFile, migrate, resolveGatsbyUrl, slugify } from '../migrate-mdx.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const fx = path.join(here, 'fixtures/collections');
const run = () => convertFile(fs.readFileSync(path.join(fx, 'blog/sample-post/index.mdx'), 'utf8'), { slug: 'sample-post' });

test('slugify matches Gatsby behavior', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
  assert.equal(slugify('Hello, World!'), 'hello-world');
  assert.equal(slugify('  Hello World  '), 'hello-world');
  assert.equal(slugify('A---B'), 'a-b');
  assert.equal(slugify('C++ & C#'), 'c-c');
  assert.equal(slugify('Multiple   Spaces'), 'multiple-spaces');
  assert.equal(slugify('Already-a-slug'), 'already-a-slug');
  assert.equal(slugify('café'), 'caf');
  assert.equal(slugify(123), '123');
});

test('Gatsby URL resolver: explicit permalink takes precedence', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'programs',
      frontmatter: {
        permalink: 'lfx/2025',
        published: true,
        title: 'Some other title',
      },
    }),
    '/programs/lfx/2025/',
  );
});

test('Gatsby URL resolver: collection-specific routes', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'blog',
      frontmatter: {
        published: true,
        category: 'Cloud Native',
        title: 'Hello, World!',
      },
    }),
    '/blog/cloud-native/hello-world/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'news',
      frontmatter: { published: true, title: 'Layer5 Joins CNCF' },
    }),
    '/company/news/layer5-joins-cncf/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'members',
      frontmatter: { published: true, name: 'Lee Calcote' },
    }),
    '/community/members/lee-calcote/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'members',
      frontmatter: {
        published: true,
        name: 'Yash Sharma',
        permalink: 'yash-sharma-2',
      },
    }),
    '/members/yash-sharma-2/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'resources',
      frontmatter: {
        published: true,
        category: 'Case Study',
        title: 'A Cloud Native Story',
      },
    }),
    '/resources/case-study/a-cloud-native-story/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'service-mesh-books',
      frontmatter: { published: true, title: 'Service Mesh Patterns' },
    }),
    '/learn/service-mesh-books/service-mesh-patterns/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'workshops',
      frontmatter: { title: 'Meshery Workshop', published: false },
    }),
    '/learn/workshops/meshery-workshop/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'kanvas-labs',
      frontmatter: { title: 'Kanvas Lab' },
    }),
    '/learn/kanvas-labs/kanvas-lab/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'handbook',
      frontmatter: { title: 'Contributing to Layer5' },
    }),
    '/community/handbook/contributing-to-layer5/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'events',
      frontmatter: { published: true, title: 'Community Call' },
    }),
    '/community/events/community-call/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'programs',
      frontmatter: { published: true, title: 'Summer of Code' },
    }),
    '/programs/summer-of-code/',
  );
});

test('Gatsby URL resolver: integration prefix is applied after slug resolution', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'integrations',
      frontmatter: { published: true, title: 'GitLab Runner Operator' },
    }),
    '/cloud-native-management/meshery/integrations/gitlab-runner-operator/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'integrations',
      frontmatter: { published: true, permalink: 'eks' },
    }),
    '/cloud-native-management/meshery/integrations/eks/',
  );
});

test('Gatsby URL resolver: explicit permalinks retain Gatsby paths, including dot segments', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'programs',
      frontmatter: {
        published: true,
        permalink: '../careers/internships/',
      },
    }),
    '/programs/../careers/internships/',
  );
});

test('Gatsby URL resolver: Sistent routes follow directory and filename', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'sistent',
      relativeDirectory: 'components/divider',
      fileName: 'index',
    }),
    '/projects/sistent/components/divider/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'sistent',
      relativeDirectory: 'components/navigation-navbar',
      fileName: 'guidance',
    }),
    '/projects/sistent/components/navigation-navbar/guidance/',
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'sistent',
      fileName: 'index',
    }),
    '/projects/sistent/components/',
  );
});

test('Gatsby URL resolver: missing published event title fails like Gatsby page creation', () => {
  assert.throws(
    () => resolveGatsbyUrl({
      collection: 'events',
      frontmatter: { published: true },
    }),
    /Gatsby would create a page with an empty path/,
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'events',
      frontmatter: { published: true, permalink: 'community-call' },
    }),
    '/events/community-call/',
  );
});

test('Gatsby URL resolver: unpublished documents do not get individual page URLs', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'blog',
      frontmatter: { published: false, category: 'News', title: 'Draft' },
    }),
    null,
  );

  assert.equal(
    resolveGatsbyUrl({
      collection: 'events',
      frontmatter: { published: false, title: 'Draft event' },
    }),
    null,
  );
});

test('Gatsby URL resolver: collections without individual pages return null', () => {
  assert.equal(
    resolveGatsbyUrl({
      collection: 'projects',
      frontmatter: { published: true, title: 'Example project' },
    }),
    null,
  );
});

test('data-only collections are not rendered as individual Hugo pages', () => {
  const source = `---
title: Example Project
published: true
---

Project description.
`;

  const { output } = convertFile(source, {
    slug: 'example-project',
    collection: 'projects',
    file: 'projects/example-project.mdx',
    relativeDirectory: 'projects',
    fileName: 'example-project',
  });

  assert.match(output, /^build:\n  render: never$/m);
});

test('data-only collections without frontmatter are not rendered as individual Hugo pages', () => {
  const { output } = convertFile('Data-only content.', {
    slug: 'example-project',
    collection: 'projects',
    file: 'projects/example-project.mdx',
  });

  assert.match(output, /build:\n  render: never/);
  assert.doesNotMatch(output, /draft:\s*true/);
});

test('documents without the required published flag remain drafts', () => {
  const { output } = convertFile('Resource content.', {
    slug: 'academy-vs-moocit',
    collection: 'resources',
    file: 'resources/academy-vs-moocit/index.mdx',
  });

  assert.match(output, /draft: true/);
  assert.doesNotMatch(output, /url:/);
});

test('normal blog content does not get render: never', () => {
  const source = `---
title: Sample Blog
category: Cloud Native
published: true
---

Blog content.
`;

  const { output } = convertFile(source, {
    slug: 'sample-blog',
    collection: 'blog',
    file: 'blog/sample-blog.mdx',
    relativeDirectory: 'blog',
    fileName: 'sample-blog',
  });

  assert.doesNotMatch(output, /render:\s*never/);
  assert.match(output, /url: "\/blog\/cloud-native\/sample-blog\/"/);
});

test('published:false becomes a draft only for Gatsby-filtered collections', () => {
  const source = `---
title: Unpublished Workshop
published: false
---

Workshop content.
`;

  const { output } = convertFile(source, {
    slug: 'unpublished-workshop',
    collection: 'workshops',
    file: 'workshops/unpublished-workshop.mdx',
    relativeDirectory: 'workshops',
    fileName: 'unpublished-workshop',
  });

  assert.doesNotMatch(output, /draft:\s*true/);
  assert.match(output, /url: "\/learn\/workshops\/unpublished-workshop\/"/);
  assert.doesNotMatch(output, /published:/);
});

test('source url is replaced by Gatsby URL generation and removed when no page is created', () => {
  const source = `---
title: Unpublished Blog
category: Cloud Native
published: false
url: /not-a-gatsby-url/
---

Draft content.
`;

  const { output } = convertFile(source, {
    slug: 'unpublished-blog',
    collection: 'blog',
    file: 'blog/unpublished-blog.mdx',
  });

  assert.match(output, /draft: true/);
  assert.doesNotMatch(output, /url:/);
});

test('unpublished blog content becomes a draft without disabling rendering', () => {
  const source = `---
title: Draft Blog
category: Cloud Native
published: false
---

Draft content.
`;

  const { output } = convertFile(source, {
    slug: 'draft-blog',
    collection: 'blog',
    file: 'blog/draft-blog.mdx',
    relativeDirectory: 'blog',
    fileName: 'draft-blog',
  });

  assert.match(output, /draft: true/);
  assert.doesNotMatch(output, /render:\s*never/);
  assert.doesNotMatch(output, /url:/);
});

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

test('member without published:true becomes a draft; plain markdown passes through', () => {
  const { output } = convertFile(
    fs.readFileSync(path.join(fx, 'members/jane.md'), 'utf8'),
    { slug: 'jane', collection: 'members' },
  );
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

test('migrate(): generates executive bio pages only for published executive members', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bio-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-bio-dest-'));

  const createMember = (directory, frontmatter, body) => {
    const memberDir = path.join(src, 'members', directory);
    fs.mkdirSync(memberDir, { recursive: true });

    fs.writeFileSync(
      path.join(memberDir, 'index.mdx'),
      `---\n${frontmatter}\n---\n\n${body}\n`,
    );
  };

  // Published executive: should generate a bio page.
  createMember(
    'lee',
    `name: Lee Calcote
published: true
executive_bio: true
executive_position: Founder and CEO
company: Layer5`,
    'Lee Calcote executive biography.',
  );

  // Unpublished executive: should not generate a bio page.
  createMember(
    'unpublished',
    `name: Unpublished Member
published: false
executive_bio: true`,
    'Unpublished biography.',
  );

  // Published regular member: should not generate a bio page.
  createMember(
    'regular',
    `name: Regular Member
published: true
executive_bio: false`,
    'Regular member biography.',
  );

  const report = migrate({ src, dest });

  const bioDir = path.join(dest, 'member-bios');
  const bioFile = path.join(bioDir, 'lee.md');

  assert.ok(fs.existsSync(bioFile));

  const bio = fs.readFileSync(bioFile, 'utf8');

  assert.match(bio, /url: "\/community\/members\/lee-calcote\/bio\/"/);
  assert.match(bio, /type: members/);
  assert.match(bio, /layout: executive-bio/);
  assert.match(bio, /member_page_path: "\/community\/members\/lee-calcote\/"/);
  assert.match(bio, /Lee Calcote executive biography\./);

  const generatedBios = fs.readdirSync(bioDir);

  assert.deepEqual(generatedBios, ['lee.md']);

  assert.equal(report.byCollection.members.converted, 3);
});

test('migrate(): throws when two documents resolve to the same URL', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-duplicate-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-duplicate-dest-'));

  const createBlog = (directory) => {
    const blogDir = path.join(src, 'blog', directory);
    fs.mkdirSync(blogDir, { recursive: true });

    fs.writeFileSync(
      path.join(blogDir, 'index.mdx'),
      `---
title: Duplicate Post
category: Engineering
published: true
---

Duplicate test.
`,
    );
  };

  createBlog('first');
  createBlog('second');

  assert.throws(
    () => migrate({ src, dest }),
    (error) => {
      assert.match(error.message, /Duplicate URL detected/);
      assert.match(error.message, /blog\/first\/index\.mdx/);
      assert.match(error.message, /blog\/second\/index\.mdx/);
      return true;
    },
  );
});

test('migrate(): detects duplicate explicit permalinks', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-permalink-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-permalink-dest-'));

  const createBlog = (directory) => {
    const blogDir = path.join(src, 'blog', directory);
    fs.mkdirSync(blogDir, { recursive: true });

    fs.writeFileSync(
      path.join(blogDir, 'index.mdx'),
      `---
title: ${directory}
category: Engineering
published: true
permalink: shared-url/
---

Permalink test.
`,
    );
  };

  createBlog('first');
  createBlog('second');

  assert.throws(
    () => migrate({ src, dest }),
    /Duplicate URL detected/,
  );
});

test('migrate(): detects duplicate URLs during dry-run', () => {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-dry-duplicate-src-'));
  const dest = fs.mkdtempSync(path.join(os.tmpdir(), 'l5-dry-duplicate-dest-'));

  const createBlog = (directory) => {
    const blogDir = path.join(src, 'blog', directory);
    fs.mkdirSync(blogDir, { recursive: true });

    fs.writeFileSync(
      path.join(blogDir, 'index.mdx'),
      `---
title: Same Post
category: Engineering
published: true
---

Dry-run duplicate test.
`,
    );
  };

  createBlog('first');
  createBlog('second');

  assert.throws(
    () => migrate({ src, dest, dryRun: true }),
    /Duplicate URL detected/,
  );
});