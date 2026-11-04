#!/usr/bin/env node
/**
 * migrate-mdx.mjs — Gatsby MDX → Hugo Markdown converter (Workstream 1).
 *
 * Zero dependencies (Node >= 18). Safe by default: use --dry-run first.
 *
 *   node scripts/migrate-mdx.mjs --src ../src/collections --dest content --dry-run --report report.json
 *   node scripts/migrate-mdx.mjs --src ../src/collections --dest content --progress data/migration.json
 *
 * What it does
 *   1. Strips `import … from …` lines.
 *   2. Converts known JSX components to Hugo shortcodes (see COMPONENTS).
 *   3. Leaves code fences and inline code untouched.
 *   4. Rewrites front matter: redirect_from → aliases, published:false → draft:true,
 *      ./thumbnail → bundle-relative, and guarantees a `slug` (so permalinks are deterministic).
 *   5. Flags anything it cannot convert with a <!-- TODO(mdx) --> marker AND a report entry,
 *      instead of silently dropping it.
 *
 * ASSUMPTION: the COMPONENTS table is based on the names listed in the migration plan.
 * Run with --dry-run against the real repo and extend the table from the "unknown" section of the report.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import matter from 'gray-matter';

/* ---------------------------------------------------------------- component map */
export const COMPONENTS = {
  Button:        { shortcode: 'button',         text: true, alias: { to: 'url', href: 'url', link: 'url' } },
  CTA_FullWidth: { shortcode: 'cta-fullwidth' },
  Terminal:      { shortcode: 'terminal',       paired: true, bodyAttr: 'code' },
  Accordion:     { shortcode: 'accordion',      paired: true },
  AccordionItem: { shortcode: 'accordion-item', paired: true },
  Card:          { shortcode: 'card',           paired: true },
};
const DROP_ATTRS = new Set(['className', 'class', 'style', 'key', 'ref']);

/* ---------------------------------------------------------------- tag scanner */
const isWs = (c) => c === ' ' || c === '\n' || c === '\t' || c === '\r';

/** Parse an opening tag starting at text[start] === '<'. Returns null if malformed. */
export function parseOpenTag(text, start) {
  let i = start + 1;
  const nm = /^[A-Za-z_][\w.]*/.exec(text.slice(i));
  if (!nm) return null;
  const name = nm[0];
  i += name.length;
  const attrs = [];
  const problems = [];
  while (i < text.length) {
    while (isWs(text[i])) i++;
    if (text.startsWith('/>', i)) return { name, attrs, problems, end: i + 2, selfClosing: true };
    if (text[i] === '>') return { name, attrs, problems, end: i + 1, selfClosing: false };
    if (text[i] === '{') { // {...spread}
      const [raw, next] = readBraces(text, i);
      problems.push(`spread/expression attribute ${raw.slice(0, 40)}`);
      i = next; continue;
    }
    const an = /^[\w:.-]+/.exec(text.slice(i));
    if (!an) return null;
    const key = an[0]; i += key.length;
    while (isWs(text[i])) i++;
    if (text[i] !== '=') { attrs.push({ key, value: 'true', literal: true }); continue; }
    i++; while (isWs(text[i])) i++;
    if (text[i] === '"' || text[i] === "'") {
      const q = text[i]; const j = text.indexOf(q, i + 1);
      if (j === -1) return null;
      attrs.push({ key, value: text.slice(i + 1, j), literal: true }); i = j + 1;
    } else if (text[i] === '{') {
      const [raw, next] = readBraces(text, i);
      const inner = raw.slice(1, -1).trim();
      const str = /^(["'`])([\s\S]*)\1$/.exec(inner);
      if (str && !(str[1] === '`' && str[2].includes('${'))) attrs.push({ key, value: str[2], literal: true });
      else if (/^(-?\d+(\.\d+)?|true|false)$/.test(inner)) attrs.push({ key, value: inner, literal: true });
      else { attrs.push({ key, value: inner, literal: false }); problems.push(`non-literal expression for "${key}"`); }
      i = next;
    } else return null;
  }
  return null;
}

/** Read a balanced {...} block (string-aware). Returns [rawIncludingBraces, indexAfter]. */
function readBraces(text, i) {
  let depth = 0, q = null;
  for (let j = i; j < text.length; j++) {
    const c = text[j];
    if (q) { if (c === '\\') j++; else if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === '`') q = c;
    else if (c === '{') depth++;
    else if (c === '}' && --depth === 0) return [text.slice(i, j + 1), j + 1];
  }
  return [text.slice(i), text.length];
}

/** Find the matching </Name> for an open tag whose body starts at `from`. */
function findClose(text, from, name) {
  let depth = 1, i = from;
  const open = new RegExp(`<${name}(?![\\w.])`, 'g');
  const close = `</${name}>`;
  while (i < text.length) {
    open.lastIndex = i;
    const o = open.exec(text);
    const c = text.indexOf(close, i);
    if (c === -1) return null;
    if (o && o.index < c) {
      const t = parseOpenTag(text, o.index);
      if (!t) return null;
      if (!t.selfClosing) depth++;
      i = t.end;
    } else {
      if (--depth === 0) return { start: c, end: c + close.length };
      i = c + close.length;
    }
  }
  return null;
}

/* ---------------------------------------------------------------- shortcode formatting */
const snake = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();

function fmtValue(v) {
  const flat = v.replace(/\s*\n\s*/g, ' ').trim();
  if (!flat.includes('"')) return `"${flat}"`;
  if (!flat.includes('`')) return `\`${flat}\``;
  return `"${flat.replace(/"/g, '&quot;')}"`;
}

function buildShortcode(spec, tag, children, ctx) {
  const attrs = new Map();
  for (const a of tag.attrs) {
    if (DROP_ATTRS.has(a.key)) { ctx.count('droppedAttrs'); continue; }
    const key = spec.alias?.[a.key] ?? snake(a.key);
    attrs.set(key, a.value);
  }
  let body = children?.trim() ?? '';
  if (spec.bodyAttr && attrs.has(spec.bodyAttr)) { body = attrs.get(spec.bodyAttr); attrs.delete(spec.bodyAttr); }
  if (spec.text && body && !attrs.has('text')) { attrs.set('text', body.replace(/\s+/g, ' ')); body = ''; }
  const attrStr = [...attrs].map(([k, v]) => `${k}=${fmtValue(v)}`).join(' ');
  const open = `{{< ${spec.shortcode}${attrStr ? ' ' + attrStr : ''} >}}`;
  if (spec.paired || body) {
    if (!spec.paired && body) ctx.warn(`<${tag.name}> had children; emitted paired shortcode — make sure layouts/shortcodes/${spec.shortcode}.html uses .Inner`);
    return `${open}\n${body}\n{{< /${spec.shortcode} >}}`;
  }
  return open;
}

/* ---------------------------------------------------------------- body conversion */
function convertSegment(text, ctx) {
  let out = '', i = 0;
  const re = /<([A-Z][\w.]*)(?![\w.])/g;
  while (true) {
    re.lastIndex = i;
    const m = re.exec(text);
    if (!m) { out += text.slice(i); break; }
    out += text.slice(i, m.index);
    const name = m[1];
    const tag = parseOpenTag(text, m.index);
    const spec = COMPONENTS[name];
    if (!tag) { ctx.warn(`could not parse <${name}> tag; left as-is`); out += '<'; i = m.index + 1; continue; }
    if (!spec) {
      ctx.unknown(name);
      const marker = `<!-- TODO(mdx): unconverted component <${name}> -->\n`;
      const prev = /\u0000(\d+)\u0000\n$/.exec(out); // marker already there from an earlier run?
      if (!(prev && ctx.masked?.[+prev[1]] === marker.trim())) out += marker;
      out += text.slice(m.index, tag.end); i = tag.end; continue;
    }
    tag.problems.forEach((p) => ctx.warn(`<${name}>: ${p}`));
    let children = '', end = tag.end;
    if (!tag.selfClosing) {
      const c = findClose(text, tag.end, name);
      if (!c) { ctx.warn(`<${name}> has no closing tag; left as-is`); out += text.slice(m.index, tag.end); i = tag.end; continue; }
      children = convertSegment(text.slice(tag.end, c.start), ctx);
      end = c.end;
    }
    ctx.component(name);
    out += buildShortcode(spec, tag, children, ctx);
    i = end;
  }
  return out;
}

/** Convert an MDX body. Code fences and inline code are protected. */
export function convertBody(body, ctx) {
  const lines = body.split('\n');
  const chunks = []; let buf = [], inFence = null;
  for (const line of lines) {
    const f = /^\s*(```+|~~~+)/.exec(line);
    if (f && !inFence) { chunks.push({ code: false, text: buf.join('\n') }); buf = [line]; inFence = f[1][0]; }
    else if (f && inFence && f[1][0] === inFence) { buf.push(line); chunks.push({ code: true, text: buf.join('\n') }); buf = []; inFence = null; }
    else buf.push(line);
  }
  chunks.push({ code: !!inFence, text: buf.join('\n') });

  return chunks.map((c) => {
    if (c.code) return c.text;
    const masked = []; // protect inline code
    // `{`template literal`}` attribute values are left alone so the tag parser can read them
    let t = c.text.replace(/\{\s*`[^`]*`\s*\}|`[^`\n]+`/g, (s) => (s[0] === '{' ? s : `\u0000${masked.push(s) - 1}\u0000`));
    t = t.replace(/^import\s+(?:[\w$]+\s*,?\s*)?(?:\{[^}]*\}|\*\s+as\s+[\w$]+)?\s*from\s+['"][^'"]+['"];?[ \t]*\r?\n?/gm, () => { ctx.count('importsRemoved'); return ''; });
    t = t.replace(/^import\s+['"][^'"]+['"];?[ \t]*\r?\n?/gm, () => { ctx.count('importsRemoved'); return ''; });
    if (/^export\s/m.test(t)) ctx.warn('contains `export` statements (MDX exports are not supported in Hugo)');
    t = t.replace(/\{\/\*([\s\S]*?)\*\/\}/g, '<!--$1-->');
    t = t.replace(/<!--[\s\S]*?-->/g, (s) => `\u0000${masked.push(s) - 1}\u0000`); // never scan inside comments
    ctx.masked = masked;
    t = convertSegment(t, ctx);
    while (/\u0000\d+\u0000/.test(t)) t = t.replace(/\u0000(\d+)\u0000/g, (_, n) => masked[+n]);
    return t;
  }).join('\n').replace(/\n{3,}/g, '\n\n');
}

/* ---------------------------------------------------------------- Gatsby slugify */

/**
 * Port of src/utils/slugify.js from Gatsby.
 * Keep this implementation identical to preserve existing URL behavior.
 */
export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, "-")       // Replace spaces with -
    .replace(/[^\w\-]+/g, "")   // Remove all non-word chars
    .replace(/\-\-+/g, "-")     // Replace multiple - with single -
    .replace(/^-+/, "")         // Trim - from start of text
    .replace(/-+$/, "");        // Trim - from end of text
}

/* ---------------------------------------------------------------- Gatsby URL resolution */

const PAGE_COLLECTIONS = new Set([
  'blog',
  'news',
  'service-mesh-books',
  'workshops',
  'kanvas-labs',
  'resources',
  'members',
  'handbook',
  'events',
  'programs',
  'careers',
  'integrations',
  'sistent',
]);

const NON_PAGE_COLLECTIONS = new Set([
  'projects',
  'use-cases',
  'service-mesh-workshops',
]);

const PUBLISHED_COLLECTIONS = new Set([
  'blog',
  'news',
  'service-mesh-books',
  'resources',
  'members',
  'integrations',
  'events',
  'programs',
  'careers',
]);

/**
 * Resolve the individual page URL using Gatsby's onCreateNode and createPages
 * rules. Returns null when Gatsby does not create an individual page.
 */
export function resolveGatsbyUrl({
  collection,
  frontmatter = {},
  relativeDirectory = '',
  fileName = '',
}) {
  if (!PAGE_COLLECTIONS.has(collection)) return null;

  // These collections are queried with published: true in createPages.
  if (
    PUBLISHED_COLLECTIONS.has(collection) &&
    frontmatter.published !== true
  ) {
    return null;
  }

  let route;

  // Gatsby checks permalink before its collection-specific switch.
  if (frontmatter.permalink) {
    route = `/${collection}/${frontmatter.permalink}`;
  } else {
    if (collection === 'events' && !frontmatter.title) {
      throw new Error(
        'Published Gatsby event has no title or permalink; Gatsby would create a page with an empty path',
      );
    }

    switch (collection) {
      case 'blog':
      case 'resources':
        route = `/${collection}/${slugify(frontmatter.category)}/${slugify(frontmatter.title)}`;
        break;

      case 'news':
        route = `/company/news/${slugify(frontmatter.title)}`;
        break;

      case 'service-mesh-books':
      case 'workshops':
      case 'kanvas-labs':
        route = `/learn/${collection}/${slugify(frontmatter.title)}`;
        break;

      case 'members':
        route = `/community/members/${slugify(frontmatter.name)}`;
        break;

      case 'handbook':
        route = `/community/handbook/${slugify(frontmatter.title)}`;
        break;

      case 'events':
        route = `/community/events/${slugify(frontmatter.title)}`;
        break;

      case 'sistent': {
        const componentSlug = relativeDirectory.split('/').pop();
        const suffix = fileName === 'index' ? '' : `/${fileName}`;
        route = `/projects/sistent/components/${componentSlug}${suffix}`;
        break;
      }

      default:
        // Gatsby's default collection route.
        route = `/${collection}/${slugify(frontmatter.title)}`;
    }
  }

  // Gatsby's createPages adds this prefix to integration page paths.
  if (collection === 'integrations') {
    route = `/cloud-native-management/meshery${route}`;
  }

  // The migration plan uses trailing-slash URLs.
  return route.endsWith('/') ? route : `${route}/`;
}

/* ---------------------------------------------------------------- front matter */
export function convertFrontMatter(
  fm,
  slug,
  ctx,
  url = null,
  renderNever = false,
  draft = false,
) {
  const lines = fm.split('\n'); const out = []; let hasSlug = false; let hasDraft = false;
  for (const line of lines) {
    let m;
    if ((m = /^redirect_from\s*:(.*)$/.exec(line))) { out.push(`aliases:${m[1]}`); ctx.count('redirectFrom'); continue; }
    if (/^published\s*:/i.test(line)) {
      if (draft && !hasDraft) { out.push('draft: true'); hasDraft = true; }
      continue;
    }
    if (/^draft\s*:/.test(line)) {
      if (draft) {
        if (!hasDraft) out.push('draft: true');
      } else {
        out.push(line);
      }
      hasDraft = true;
      continue;
    }
    if ((m = /^(thumbnail|image|cover)\s*:\s*(.*)$/.exec(line))) {
      const v = m[2].trim().replace(/^['"]|['"]$/g, '');
      if (/^\.\.\//.test(v) || /^\/?(static|assets|src)\//.test(v)) { ctx.warn(`${m[1]}: "${v}" is outside the page bundle — move it next to index.md`); out.push(line); }
      else out.push(`${m[1]}: ${v.replace(/^\.\//, '')}`);
      continue;
    }
    if (/^slug\s*:/.test(line)) hasSlug = true;
    if (/^url\s*:/.test(line)) continue;
    out.push(line);
  }
  if (!hasSlug && slug) { out.push(`slug: ${slug}`); ctx.count('slugAdded'); }
  if (draft && !hasDraft) out.push('draft: true');
  if (url) out.push(`url: ${JSON.stringify(url)}`);
  if (renderNever) {
    out.push('build:');
    out.push('  render: never');
  }
  return out.join('\n');
}

export function convertFile(source, {
  slug,
  file = '',
  collection,
  relativeDirectory = '',
  fileName = '',
} = {}) {
  const stats = { components: {}, unknown: {}, counters: {}, warnings: [] };

  const ctx = {
    warn: (m) => stats.warnings.push(m),
    unknown: (n) => { stats.unknown[n] = (stats.unknown[n] || 0) + 1; },
    component: (n) => { stats.components[n] = (stats.components[n] || 0) + 1; },
    count: (k) => { stats.counters[k] = (stats.counters[k] || 0) + 1; },
  };

  const fmMatch = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source);

  let fm = '', body = source;

  if (fmMatch) {
    fm = fmMatch[1];
    body = source.slice(fmMatch[0].length);
  } else {
    ctx.warn('no front matter found; generated a minimal one');
  }

  const frontmatter = fmMatch ? matter(source).data : {};

  const url = resolveGatsbyUrl({
    collection,
    frontmatter,
    relativeDirectory,
    fileName,
  });

  const renderNever = NON_PAGE_COLLECTIONS.has(collection);
  const draft = PUBLISHED_COLLECTIONS.has(collection) &&
    frontmatter.published !== true;

  const newFm = fmMatch
    ? convertFrontMatter(fm, slug, ctx, url, renderNever, draft)
    : [
      `title: ${slug ?? path.basename(file)}`,
      ...(slug ? [`slug: ${slug}`] : []),
      ...(draft ? ['draft: true'] : []),
      ...(url ? [`url: ${JSON.stringify(url)}`] : []),
      ...(renderNever ? ['build:', '  render: never'] : []),
    ].join('\n');

  const newBody = convertBody(body.replace(/\r\n/g, '\n'), ctx).replace(/^\n+/, '');

  if (Object.keys(stats.unknown).length) {
    ctx.warn(`unknown components: ${Object.keys(stats.unknown).join(', ')}`);
  }

  return {
    output: `---\n${newFm}\n---\n\n${newBody.trimEnd()}\n`,
    stats,
  };
}

function createExecutiveBioPage(output, {
  bioUrl,
  memberPagePath,
}) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(output);

  if (!match) {
    throw new Error('Cannot generate executive bio page without frontmatter');
  }

  const frontmatter = match[1]
    .split('\n')
    .filter((line) => !/^url\s*:/.test(line));

  frontmatter.push(`url: ${JSON.stringify(bioUrl)}`);
  frontmatter.push('type: members');
  frontmatter.push('layout: executive-bio');
  frontmatter.push(`member_page_path: ${JSON.stringify(memberPagePath)}`);

  const body = output.slice(match[0].length);

  return `---\n${frontmatter.join('\n')}\n---\n\n${body}`;
}

/* ---------------------------------------------------------------- filesystem driver */
function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

export function migrate({ src, dest, dryRun = false }) {
  const report = {
    generated: new Date().toISOString(),
    dryRun,
    files: 0,
    converted: 0,
    withWarnings: 0,
    assetsCopied: 0,
    components: {},
    unknown: {},
    byCollection: {},
    warnings: [],
  };

  const urlRegistry = new Map();

  const registerUrl = (url, file) => {
    if (!url) return;

    const existingFile = urlRegistry.get(url);

    if (existingFile) {
      throw new Error(
        `Duplicate URL detected: "${url}"\n` +
        `  First:  ${existingFile}\n` +
        `  Second: ${file}`,
      );
    }

    urlRegistry.set(url, file);
  };

  const bump = (o, k, n = 1) => {
    o[k] = (o[k] || 0) + n;
  };

  for (const file of walk(src)) {
    const rel = path.relative(src, file);
    const collection = rel.split(path.sep)[0];
    const ext = path.extname(file);
    const isDoc = ext === '.mdx' || ext === '.md';

    const target = path.join(
      dest,
      isDoc ? rel.replace(/\.mdx?$/, '.md') : rel,
    );

    const col = (report.byCollection[collection] ||= {
      files: 0,
      converted: 0,
      withWarnings: 0,
    });

    // Copy assets without attempting MDX conversion.
    if (!isDoc) {
      if (!dryRun) {
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(file, target);
      }

      report.assetsCopied++;
      continue;
    }

    report.files++;
    col.files++;

    const source = fs.readFileSync(file, 'utf8');
    const frontmatter = matter(source).data;

    const base = path.basename(file, ext);
    const slug = base === 'index'
      ? path.basename(path.dirname(file))
      : base;

    const relativeDirectory = path.dirname(rel)
      .split(path.sep)
      .join('/');

    const fileName = path.basename(file, ext);

    // Convert the original document.
    const { output, stats } = convertFile(source, {
      slug,
      file: rel,
      collection,
      relativeDirectory,
      fileName,
    });

    const resolvedUrl = resolveGatsbyUrl({
      collection,
      frontmatter,
      relativeDirectory,
      fileName,
    });

    registerUrl(resolvedUrl, rel);

    for (const [k, v] of Object.entries(stats.components)) {
      bump(report.components, k, v);
    }

    for (const [k, v] of Object.entries(stats.unknown)) {
      bump(report.unknown, k, v);
    }

    if (stats.warnings.length) {
      report.withWarnings++;
      col.withWarnings++;

      stats.warnings.forEach((w) => {
        report.warnings.push({
          file: rel,
          message: w,
        });
      });
    }

    // Write the converted original document.
    if (!dryRun) {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, output);
    }

    // Generate an additional page for eligible executive members.
    if (
      collection === 'members' &&
      fileName === 'index' &&
      frontmatter.published === true &&
      frontmatter.executive_bio === true
    ) {
      const memberUrl = resolveGatsbyUrl({
        collection,
        frontmatter,
        relativeDirectory,
        fileName,
      });

      if (memberUrl) {
        const bioUrl = `${memberUrl}bio/`;
        registerUrl(bioUrl, `${rel} (executive bio)`);
        const bioOutput = createExecutiveBioPage(output, {
          bioUrl,
          memberPagePath: memberUrl,
        });

        const bioTarget = path.join(
          dest,
          'member-bios',
          `${slug}.md`,
        );

        if (!dryRun) {
          fs.mkdirSync(path.dirname(bioTarget), {
            recursive: true,
          });

          fs.writeFileSync(bioTarget, bioOutput);
        }
      }
    }

    report.converted++;
    col.converted++;
  }

  return report;
}

function updateProgress(file, report) {
  const cur = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : { collections: [], budget: [], shortcodes: [] };
  for (const [name, c] of Object.entries(report.byCollection)) {
    const e = cur.collections.find((x) => x.name === name);
    if (e) { e.converted = c.converted; e.estimate = Math.max(e.estimate || 0, c.files); }
    else cur.collections.push({ name, estimate: c.files, converted: c.converted, owner: '' });
  }
  cur.generated = report.generated.slice(0, 10);
  cur.source = 'scripts/migrate-mdx.mjs';
  fs.writeFileSync(file, JSON.stringify(cur, null, 2) + '\n');
}

/* ---------------------------------------------------------------- CLI */
function main() {
  const args = process.argv.slice(2);
  const get = (f) => { const i = args.indexOf(f); return i === -1 ? undefined : args[i + 1]; };
  const defaultSrc = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../src/collections');
  const src = get('--src') || (fs.existsSync(defaultSrc) ? defaultSrc : undefined);
  if (args.includes('--help') || !src) {
    console.log('Usage: migrate-mdx.mjs [--src <collections dir>] [--dest content] [--dry-run] [--report report.json] [--progress data/migration.json] [--strict]');
    process.exit(args.includes('--help') ? 0 : 1);
  }
  const dryRun = args.includes('--dry-run');
  const report = migrate({ src, dest: get('--dest') || 'content', dryRun });
  if (get('--report')) fs.writeFileSync(get('--report'), JSON.stringify(report, null, 2));
  if (get('--progress') && !dryRun) updateProgress(get('--progress'), report);
  const top = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}×${v}`).join(', ') || '—';
  console.log(`${dryRun ? '[dry-run] ' : ''}${report.converted}/${report.files} documents converted, ${report.assetsCopied} assets, ${report.withWarnings} with warnings`);
  console.log(`components → shortcodes: ${top(report.components)}`);
  console.log(`unknown components:      ${top(report.unknown)}`);
  if (args.includes('--strict') && report.withWarnings) process.exit(1);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
