#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { migrate } from './migrate-mdx.mjs';

export function assignPrimaryOwner(file, msgs) {
  // 1. Out-of-bundle thumbnail images -> #8308
  if (msgs.some((m) => m.includes('outside the page bundle'))) {
    return '#8308';
  }

  // 2. Quote/callout-only files (all unknown components are Blockquote, BlockquoteAlt, Callout, or InlineQuotes, and no other warning types) -> #8385
  const unknownMsgs = msgs.filter((m) => m.startsWith('unknown components:'));
  const otherMsgs = msgs.filter((m) => !m.startsWith('unknown components:'));
  if (unknownMsgs.length > 0 && otherMsgs.length === 0) {
    const allQuotes = unknownMsgs
      .flatMap((m) => m.replace('unknown components: ', '').split(', '))
      .every((c) => ['Blockquote', 'BlockquoteAlt', 'Callout', 'InlineQuotes'].includes(c));
    if (allQuotes) return '#8385';
  }

  // 3. Files with bespoke/unmapped components -> #8298 (Phase 3 Collections)
  const hasBespokeComp = unknownMsgs.some((m) => {
    const comps = m.replace('unknown components: ', '').split(', ');
    return comps.some((c) => !['Blockquote', 'BlockquoteAlt', 'Callout', 'InlineQuotes'].includes(c));
  });

  if (hasBespokeComp) {
    if (file.startsWith('blog/')) return '#8298 (P3-01 Blog)';
    if (file.startsWith('resources/') || file.startsWith('service-mesh-books/')) return '#8298 (P3-02 Resources)';
    if (file.startsWith('news/')) return '#8298 (P3-03 News)';
    if (file.startsWith('events/')) return '#8298 (P3-04 Events)';
    if (file.startsWith('members/')) return '#8298 (P3-05 Members)';
    if (file.startsWith('handbook/')) return '#8298 (P3-07 Handbook)';
    if (file.startsWith('programs/') || file.startsWith('careers/')) return '#8298 (P3-08 Programs & Careers)';
    if (file.startsWith('projects/')) return '#8298 (P3-13 Projects)';
    return '#8298 (Phase 3 Collections)';
  }

  // 4. Imported assets variables (<img src={var}>, <CTA_FullWidth image={var}>, etc.) -> #8401
  const isImportedAsset = msgs.some((m) =>
    m.includes('non-literal expression for "image"') ||
    m.includes('non-literal expression for "src"') ||
    (m.includes('non-literal expression for "to"') && file.includes('devops-adoption'))
  );
  if (isImportedAsset) {
    return '#8401';
  }

  // 5. Content hand-fix backlog (wrapper indent, bare-relative link, non-literal button, missing front matter) -> #8402
  const isHandFix = msgs.some((m) =>
    m.includes('wrapper body has 4+ space') ||
    m.includes('bare-relative') ||
    m.includes('has external=') ||
    m.includes('no front matter') ||
    m.includes('non-literal expression')
  );
  if (isHandFix) {
    return '#8402';
  }

  return 'Unassigned';
}

function classifyWarning(msg) {
  if (msg.includes('is outside the page bundle')) return 'thumbnail outside page bundle';
  if (msg.startsWith('unknown components:')) return 'unknown components';
  if (msg.includes('wrapper body has 4+ space')) return 'wrapper indent hazard';
  if (msg.includes('non-literal expression')) return 'non-literal prop expression';
  if (msg.includes('bare-relative')) return 'bare-relative link';
  if (msg.includes('zero-byte asset')) return 'zero-byte asset';
  if (msg.includes('contains `export`')) return 'export statements';
  if (msg.includes('has external=')) return 'external prop warning';
  if (msg.includes('no front matter')) return 'missing front matter';
  return msg;
}

export function generateReport(options = {}) {
  const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
  const src = options.src || path.join(rootDir, 'src/collections');
  const outPath = options.out || path.join(rootDir, 'hugo/docs/CONVERTER_REPORT.md');

  const report = migrate({ src, dest: 'content', dryRun: true, exclude: ['sistent'] });

  const warningCounts = {};
  const fileMap = {};

  for (const w of report.warnings) {
    const key = classifyWarning(w.message);
    warningCounts[key] = (warningCounts[key] || 0) + 1;

    // zero-byte assets are asset files, not documents
    if (w.message.includes('zero-byte asset')) continue;
    const normFile = w.file.replace(/\\/g, '/');
    if (!fileMap[normFile]) fileMap[normFile] = [];
    fileMap[normFile].push(w.message);
  }

  // Count files per primary owner
  const ownerCounts = {};
  const filePrimaryOwner = {};
  const sortedFiles = Object.keys(fileMap).sort();
  for (const file of sortedFiles) {
    const owner = assignPrimaryOwner(file, fileMap[file]);
    filePrimaryOwner[file] = owner;
    ownerCounts[owner] = (ownerCounts[owner] || 0) + 1;
  }

  const unownedFiles = ownerCounts['Unassigned'] || 0;

  const lines = [
    '# Hugo Migration: Converter Report',
    '',
    `> Generated automatically by \`scripts/generate-converter-report.mjs\` from a dry run with \`--exclude sistent\`.`,
    '',
    '## 1. Summary Totals',
    '',
    '| Metric | Value |',
    '|---|---|',
    `| **Documents Converted** | ${report.converted} / ${report.files} |`,
    `| **Excluded Collections** | \`${report.excluded.join(', ')}\` (${report.excludedFiles} files skipped) |`,
    `| **Skipped Templates** | ${report.templatesSkipped} |`,
    `| **Files with Warnings** | **${report.withWarnings}** |`,
    `| **Unowned Warning Files** | **${unownedFiles}** |`,
    `| **Zero-Byte Assets Logged** | ${report.emptyAssets?.length || 0} |`,
    `| **Asset Normalization Renames** | ${report.assetRenames?.length || 0} |`,
    '',
    '## 2. Primary Owner Breakdown',
    '',
    'Each warning file is assigned exactly one primary owner. The per-owner file counts sum exactly to the total files with warnings.',
    '',
    '| Primary Owner Issue | Files | Scope / Focus |',
    '|---|---|---|',
  ];

  const ownerDescriptions = {
    '#8308': 'Out-of-bundle thumbnails and asset layout',
    '#8402': 'Content hand-fix backlog (wrapper indents, bare links, button props)',
    '#8385': 'Quote/callout-only components (PR #8395)',
    '#8401': 'Imported assets backlog (`<img src={var}>`, `<CTA_FullWidth image={var}>`)',
    '#8298 (P3-01 Blog)': 'Blog bespoke components (`MeetTheMaintainer`, `MeetTheMeshMate`, diagrams)',
    '#8298 (P3-08 Programs & Careers)': 'Programs & Careers bespoke components (`PositionApply`, `LfxPageNav`, `Row`, `Col`)',
    '#8298 (P3-02 Resources)': 'Resources & Books bespoke components (`FAQ`, `CommonForm`, `Table`, case studies)',
    '#8298 (P3-07 Handbook)': 'Handbook bespoke components (`BadgeRow`, `Table`, `React.Fragment`, `Row/Col`)',
    '#8298 (P3-04 Events)': 'Events bespoke forms (`CommonForm`)',
    '#8298 (P3-13 Projects)': 'Projects page layout (`Row`, `Col`)',
    '#8298 (Phase 3 Collections)': 'Other bespoke collection components',
    'Unassigned': 'Files without an assigned owner issue',
  };

  const sortedOwners = Object.entries(ownerCounts).sort((a, b) => b[1] - a[1]);
  for (const [owner, count] of sortedOwners) {
    const desc = ownerDescriptions[owner] || 'Collection components';
    lines.push(`| \`${owner}\` | ${count} | ${desc} |`);
  }
  lines.push(`| **Total** | **${sortedFiles.length}** | **100% accounted for (sum equals files with warnings)** |`);

  lines.push(
    '',
    '## 3. Warnings Breakdown by Key',
    '',
    '| Warning Category | Occurrences | Primary Owner Issue | Description |',
    '|---|---|---|---|',
  );

  const keyDescriptions = {
    'thumbnail outside page bundle': ['#8308', 'Images in `thumbnail` or `darkthumbnail` pointing to `../../assets`'],
    'unknown components': ['#8385 / Phase 3', 'Components not yet mapped to Hugo shortcodes'],
    'wrapper indent hazard': ['#8402', 'Wrapper bodies with 4+ space indents that could trigger Markdown code blocks'],
    'non-literal prop expression': ['#8401 / #8402', 'JSX expression props (e.g. `image={var}`, `$url={link}`)'],
    'bare-relative link': ['#8402', 'Links with bare-relative paths (e.g. `<Link to="newcomer">`)'],
    'zero-byte asset': ['#8308', 'Zero-byte SVG files in source integrations'],
    'external prop warning': ['#8402', 'Non-http(s) link marked with external prop'],
    'missing front matter': ['#8402', 'Document missing YAML front matter; minimal front matter generated'],
    'export statements': ['#8402', 'MDX export statements requiring review'],
  };

  for (const [cat, count] of Object.entries(warningCounts).sort((a, b) => b[1] - a[1])) {
    const [owner, desc] = keyDescriptions[cat] || ['#8402', 'Manual review'];
    lines.push(`| \`${cat}\` | ${count} | ${owner} | ${desc} |`);
  }

  lines.push(
    '',
    '## 4. Unknown Components Inventory',
    '',
    '| Component | Occurrences | Owning Issue / Phase | Proposed Solution |',
    '|---|---|---|---|',
  );

  const componentOwners = {
    Blockquote: ['#8385 (P2-05)', '`{{< blockquote >}}` shortcode (PR #8395)'],
    BlockquoteAlt: ['#8385 (P2-05)', '`{{< blockquote-alt >}}` shortcode (PR #8395)'],
    Callout: ['#8385 (P2-05)', '`{{< callout >}}` shortcode (PR #8395)'],
    InlineQuotes: ['#8385 (P2-05)', '`{{< inline-quotes >}}` shortcode (PR #8395)'],
    Col: ['#8298 (P3-08 Programs / Careers)', 'Container grid column layout partial/shortcode'],
    Row: ['#8298 (P3-08 Programs / Careers)', 'Container grid row layout partial/shortcode'],
    Grid2: ['#8298 (P3-04 Events)', 'Event grid container'],
    MeetTheMaintainer: ['#8298 (P3-01 Blog)', 'Blog interview header component'],
    MeetTheMeshMate: ['#8298 (P3-01 Blog)', 'Blog MeshMate profile component'],
    Blog: ['#8298 (P3-01 Blog)', 'Bespoke blog listing component'],
    MeshkitMesheryAdapterLib: ['#8298 (P3-01 Blog)', 'Architecture diagram component in blog post'],
    BufProtocol: ['#8298 (P3-01 Blog)', 'Bespoke SVG diagram component in blog post'],
    PerfbytesPodcast: ['#8298 (P3-01 Blog)', 'Audio/podcast player embed in blog post'],
    PositionApply: ['#8298 (P3-08 Careers)', 'Job application CTA button/link'],
    LfxPageNav: ['#8298 (P3-08 Programs)', 'LFX program navigation pills'],
    NewcomersMap: ['#8298 (P3-12 Community)', 'Interactive/SVG newcomer roadmap component'],
    ContentForm: ['#8298 (P3-04 Events)', 'Event speaker registration form island'],
    CommonForm: ['#8298 (P3-04 Events)', 'Event signup form island'],
    BadgeRow: ['#8298 (P3-07 Handbook)', 'Handbook recognition badge row component'],
    HandbookFaqAccordion: ['#8298 (P3-07 Handbook)', 'FAQ accordion rendering `site.Data.handbook.faq`'],
    React_Fragment: ['#8298 (P3-07 Handbook)', 'React wrapper in repository overview maintainer loop'],
    Table: ['#8298 (P3-07 Handbook)', 'HTML table wrapper in handbook'],
    FAQ: ['#8298 (P3-02 Resources)', 'Resources FAQ accordion component'],
    PlaygroundCTA: ['#8298 (P3-02 Resources)', 'Meshery playground banner CTA'],
    DockerExtensionCTA: ['#8298 (P3-02 Resources)', 'Docker extension banner CTA'],
    HPEintro: ['#8298 (P3-02 Resources)', 'HPE case study intro block'],
    HPEfacts: ['#8298 (P3-02 Resources)', 'HPE case study facts sidebar'],
    HPEbenefits: ['#8298 (P3-02 Resources)', 'HPE case study benefits section'],
    INFORintro: ['#8298 (P3-02 Resources)', 'Infor case study intro block'],
    INFORfacts: ['#8298 (P3-02 Resources)', 'Infor case study facts sidebar'],
    INFORbenefits: ['#8298 (P3-02 Resources)', 'Infor case study benefits section'],
    TCSintro: ['#8298 (P3-02 Resources)', 'TCS case study intro block'],
    TCSfacts: ['#8298 (P3-02 Resources)', 'TCS case study facts sidebar'],
    TCSbenefits: ['#8298 (P3-02 Resources)', 'TCS case study benefits section'],
  };

  for (const [comp, count] of Object.entries(report.unknown).sort((a, b) => b[1] - a[1])) {
    const key = comp.replace(/\./g, '_');
    const [owner, sol] = componentOwners[key] || ['#8298 (Phase 3)', 'Bespoke component hand-port'];
    lines.push(`| \`<${comp}>\` | ${count} | ${owner} | ${sol} |`);
  }

  lines.push(
    '',
    '## 5. Warnings Inventory by File',
    '',
    'Every warning file outside Sistent is tracked below with its primary owning issue.',
    '',
    '| File | Warning Details | Primary Owner |',
    '|---|---|---|',
  );

  for (const file of sortedFiles) {
    const msgs = fileMap[file];
    const primaryOwner = filePrimaryOwner[file];
    const cleanMsgs = msgs.map((m) => m.replace(/\|/g, '\\|')).join('<br>');
    lines.push(`| \`${file}\` | ${cleanMsgs} | \`${primaryOwner}\` |`);
  }

  lines.push(
    '',
    '## 6. Owner Issues Reference',
    '',
    '- **#8308** — [Hugo] Phase 1 · Decision: images layout and thumbnail handling: Covers out-of-bundle thumbnails and zero-byte assets.',
    '- **#8385** — [Hugo] Phase 2 · Shortcodes & converter rules for Blockquote, BlockquoteAlt, Callout, and InlineQuotes: Addressed by PR #8395.',
    '- **#8401** — [Hugo] Imported assets backlog: Local images and PDFs referenced as imported JSX variables.',
    '- **#8402** — [Hugo] Content hand-fix backlog: Non-literal Button/Link expressions, bare-relative URLs, wrapper indentation hazards.',
    '- **#8298 (Phase 3: Content collections)**:',
    '  - **P3-01** (#8298): Blog (`MeetTheMaintainer`, `MeetTheMeshMate`, `Blog`, diagrams)',
    '  - **P3-02** (#8298): Resources (`FAQ`, `PlaygroundCTA`, `DockerExtensionCTA`, `CommonForm`, `Table`, case studies)',
    '  - **P3-04** (#8298): Events (`CommonForm`, `Grid2`)',
    '  - **P3-07** (#8298): Handbook (`HandbookFaqAccordion`, `BadgeRow`, `Table`, `React.Fragment`)',
    '  - **P3-08** (#8298): Programs & Careers (`PositionApply`, `LfxPageNav`, `Row`, `Col`)',
    '  - **P3-12** (#8298): Community pages (`NewcomersMap`)',
    '  - **P3-13** (#8298): Projects pages (`Row`, `Col`)',
    ''
  );

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n'));
  console.log(`Successfully generated ${outPath}`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  generateReport();
}
