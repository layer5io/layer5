import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { convertFile, migrate } from '../migrate-mdx.mjs';

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

test('InlineQuotes: converts quote and author attributes', () => {
  const source = '<InlineQuotes quote="A useful quote" person="Alex" title="Engineer" />';
  const { output, stats } = convertFile(source);
  assert.ok(output.includes('{{< inline-quotes quote="A useful quote" person="Alex" title="Engineer" >}}'));
  assert.equal(stats.components.InlineQuotes, 1);
  assert.deepEqual(stats.unknown, {});
});

test('Link: text-only children become Markdown links', () => {
  const { output } = convertFile('<Link to="/docs">Read documentation</Link>');
  assert.match(output, /\[Read documentation\]\(\/docs\)/);
  assert.doesNotMatch(output, /<a href=/);
});

test('Link: image children remain HTML anchors', () => {
  const { output } = convertFile('<Link to="/community"><img src="/logo.png" alt="Logo" /></Link>');
  assert.match(output, /<a href="\/community"><img src="\/logo.png"/);
});

test('Link: inline text formatting is preserved in Markdown links', () => {
  const { output } = convertFile('<Link to="/docs">Read <strong>important</strong> documentation</Link>');
  assert.match(output, /\[Read <strong>important<\/strong> documentation\]\(\/docs\)/);
});

test('Link: custom JSX children remain inside HTML anchors', () => {
  const { output } = convertFile('<Link to="/docs"><Icon /></Link>');
  assert.match(output, /<a href="\/docs">[\s\S]*<Icon \/>[\s\S]*<\/a>/);
});

test('layout wrappers are unwrapped and their children are preserved', () => {
  const wrappers = [
    'BlogWrapper',
    'ResourcesWrapper',
    'NewsWrapper',
    'ProgramsWrapper',
    'CareerWrapper',
    'BookWrapper',
    'EventWrapper',
    'ProjectWrapper'
  ];

  for (const wrapper of wrappers) {
    const { output, stats } = convertFile(
      '<' + wrapper + '>Preserved content</' + wrapper + '>'
    );

    assert.match(output, /Preserved content/);
    assert.doesNotMatch(output, new RegExp('<\\/?' + wrapper + '[\\s>]'));
    assert.equal(stats.components[wrapper], 1);
    assert.equal(stats.unknown[wrapper], undefined);
  }
});


test('MeshkitMesheryAdapterLib preserves its wrapper and fact styles', () => {
  const { output, stats } = convertFile('<MeshkitMesheryAdapterLib><div className="fact">Important fact</div></MeshkitMesheryAdapterLib>');

  assert.match(output, /<div class="meshkit-meshery-adapter-lib"><div class="fact">Important fact<\/div><\/div>/);
  assert.equal(stats.components.MeshkitMesheryAdapterLib, 1);
  assert.equal(stats.unknown.MeshkitMesheryAdapterLib, undefined);
});

test('MeetTheMaintainer preserves its wrapper and children', () => {
  const { output, stats } = convertFile('<MeetTheMaintainer><div className="interviewer">Question</div></MeetTheMaintainer>');

  assert.match(output, /<div class="meet-the-maintainer"><div class="interviewer">Question<\/div><\/div>/);
  assert.equal(stats.components.MeetTheMaintainer, 1);
  assert.equal(stats.unknown.MeetTheMaintainer, undefined);
});

test('Sistent ActionBox preserves its flex layout', () => {
  const { output, stats } = convertFile('<ActionBox><p>Save changes</p></ActionBox>');

  assert.match(output, /<div class="sistent-action-box"><p>Save changes<\/p><\/div>/);
  assert.equal(stats.components.ActionBox, 1);
  assert.equal(stats.unknown.ActionBox, undefined);
});

test('Code: collapsible blocks preserve code as fences', () => {
  const input = '<Code language="bash" collapsible codeString={`npm install`} />';
  const { output, stats } = convertFile(input);

  assert.match(output, /```bash\nnpm install\n```/);
  assert.ok(stats.warnings.some((warning) => warning.includes('collapsible behavior is not supported')));
});


test('Callout: all five types convert to paired Hugo shortcodes', () => {
  const types = ['note', 'tip', 'warning', 'caution', 'important'];

  for (const type of types) {
    const { output, stats } = convertFile(
      '<Callout type="' + type + '" title="Test title">Preserved content</Callout>'
    );

    assert.match(output, /\{\{< callout/);
    assert.match(output, /Test title/);
    assert.match(output, /Preserved content/);
    assert.match(output, /\{\{< \/callout >\}\}/);
    assert.equal(stats.components.Callout, 1);
    assert.equal(stats.unknown.Callout, undefined);
  }
});

test('Callout: default type and nested content are preserved', () => {
  const { output } = convertFile(
    '<Callout>Outer content <strong>important text</strong></Callout>'
  );

  assert.match(output, /\{\{< callout >\}\}/);
  assert.match(output, /Outer content/);
  assert.match(output, /important text/);
});


test('Blockquote and BlockquoteAlt preserve quote metadata', () => {
  for (const [component, shortcode] of [
    ['Blockquote', 'blockquote'],
    ['BlockquoteAlt', 'blockquote-alt']
  ]) {
    const { output, stats } = convertFile(
      '<' + component + ' quote="Great innovation" person="Rafi" title="Developer" />'
    );

    assert.match(output, new RegExp('\\{\\{< ' + shortcode + '\\b'));
    assert.match(output, /Great innovation/);
    assert.match(output, /Rafi/);
    assert.match(output, /Developer/);
    assert.equal(stats.components[component], 1);
    assert.equal(stats.unknown[component], undefined);
  }
});


test('img tags resolve imported image identifiers to quoted paths', () => {
  const input = [
    "---", "title: Buf Protocol", "---", "import Problems from './problems.webp';",
    '<BufProtocol><img className="problem-image" src={Problems} /></BufProtocol>',
  ].join('\n');

  const { output, stats } = convertFile(input, {
    slug: 'buf-protocol',
    file: 'collections/blog/buf-protocol/index.mdx',
    sourceRoot: process.cwd(),
  });

  assert.match(output, /<img class="problem-image" src="problems\.webp" \/>/);
  assert.doesNotMatch(output, /src=\\{Problems\\}/);
  assert.equal(stats.warnings.length, 0);
});

test('Button supports styled $ attributes', () => {
  const input = '<Button $secondary title="RSVP for office hours" $url="https://example.com" $external={true} />';
  const { output, stats } = convertFile(input, { slug: 'button-test' });

  assert.equal(stats.components.Button, 1);
  assert.equal(stats.warnings.some((w) => /Button/.test(w)), false);
  assert.doesNotMatch(output, /<Button/);
  assert.match(output, /button/);
});
