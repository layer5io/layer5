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

/* ---------------------------------------------------------------- component map */
export const COMPONENTS = {
  Button:        { shortcode: 'button',         text: true, alias: { to: 'url', href: 'url', link: 'url' } },
  CTA_FullWidth: { shortcode: 'cta-fullwidth' },
  Terminal:      { shortcode: 'terminal',       paired: true, bodyAttr: 'code' },
  Accordion:     { shortcode: 'accordion',      paired: true },
  AccordionItem: { shortcode: 'accordion-item', paired: true },
  Card:          { shortcode: 'card',           paired: true },
  Callout: { shortcode: 'callout', paired: true },
  BlockquoteAlt: { shortcode: 'blockquote-alt', paired: false },
  Blockquote: { shortcode: 'blockquote', paired: false },
  InlineQuotes: { shortcode: 'inline-quotes', paired: false },
};
export const UNWRAP = new Set([
  'BlogWrapper',
  'ResourcesWrapper',
  'NewsWrapper',
  'ProgramsWrapper',
  'CareerWrapper',
  'BookWrapper',
  'EventWrapper',
  'ProjectWrapper',
]);

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
    const an = /^\$?[\w:.-]+/.exec(text.slice(i));
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
    if (tag.name === 'InlineQuotes' && a.key === 'image' && !a.literal) {
      const imported = ctx.imports?.get(a.value);
      if (imported) {
        attrs.set('image', imported.image);
        if (imported.imagePage) attrs.set('image_page', imported.imagePage);
      } else {
        ctx.warn(`<InlineQuotes> image import "${a.value}" could not be resolved`);
      }
      continue;
    }
    const attrName = a.key.replace(/^\$/ , '');
    const key = spec.alias?.[attrName] ?? snake(attrName);
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
  const re = /<(?:([A-Z][\w.]*)(?![\w.])|(img)(?![\w.]))/g;
  while (true) {
    re.lastIndex = i;
    const m = re.exec(text);
    if (!m) { out += text.slice(i); break; }
    out += text.slice(i, m.index);
    const name = m[1] || m[2];
    const tag = parseOpenTag(text, m.index);
    const spec = COMPONENTS[name];
    if (!tag) { ctx.warn(`could not parse <${name}> tag; left as-is`); out += '<'; i = m.index + 1; continue; }

    if (name === 'img') {
      const attrs = tag.attrs.map((attr) => {
        let value = attr.value;

        if (attr.key === 'className') return 'class="' + value + '"';

        if (attr.key === 'src' && !attr.literal) {
          const imported = ctx.imports?.get(value);
          if (imported) {
            value = imported.image;
          attr.literal = true;
          } else {
            ctx.warn('<img> source import "' + value + '" could not be resolved');
            return attr.key + '={' + value + '}';
          }
        }

        return attr.literal
          ? attr.key + '="' + value.replace(/&/g, '&amp;').replace(/"/g, '&quot;') + '"'
          : attr.key + '={' + value + '}';
      });

      ctx.component('img');
      out += '<img ' + attrs.join(' ') + (tag.selfClosing ? ' />' : '>');
      i = tag.end;
      continue;
    }
    if (name === 'Code' || name === 'CodeBlock') {
      const codeAttr = tag.attrs.find((attr) =>
        attr.key === 'codeString' || attr.key === 'code'
      );
      const languageAttr = tag.attrs.find((attr) => attr.key === 'language');
      const collapsibleAttr = tag.attrs.find((attr) => attr.key === 'collapsible');

      const unsupported =
        !tag.selfClosing ||
        tag.problems.length > 0 ||
        !codeAttr ||
        !codeAttr.literal;

      if (unsupported) {
        ctx.warn(`<${name}> has unsupported or dynamic code props; left unchanged`);
        out += text.slice(m.index, tag.end);
        i = tag.end;
        continue;
      }

      const code = codeAttr.value.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/\n+$/, '');
      const language = languageAttr?.literal ? languageAttr.value : 'jsx';
      const longestFence = Math.max(0, ...(code.match(/\x60+/g) || []).map((f) => f.length));
      const fence = '\x60'.repeat(Math.max(3, longestFence + 1));

      if (collapsibleAttr?.value === 'true') {
        ctx.warn(`<${name}> collapsible behavior is not supported in Markdown; code preserved as a fence`);
      }
      ctx.component(name);
      out += fence + language + '\n' + code + '\n' + fence;
      i = tag.end;
      continue;
    }

    if (name === 'Link') {
      if (tag.selfClosing) {
        ctx.warn('<Link> is self-closing; left unchanged');
        out += text.slice(m.index, tag.end);
        i = tag.end;
        continue;
      }

      const closing = findClose(text, tag.end, name);

      if (!closing) {
        ctx.warn('<Link> has no closing tag; left unchanged');
        out += text.slice(m.index, tag.end);
        i = tag.end;
        continue;
      }

      const target = tag.attrs.find(
        (attr) => attr.key === 'to' || attr.key === 'href'
      );

      if (!target || !target.literal) {
        ctx.warn('<Link> has a missing or dynamic URL; left unchanged');
        out += text.slice(m.index, closing.end);
        i = closing.end;
        continue;
      }

      const children = convertSegment(
        text.slice(tag.end, closing.start),
        ctx
      );

      const url = target.value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;');

      ctx.component('Link');
      const hasNonTextChildren =
        /<(?:img|picture|video|audio|iframe|svg|canvas|object|embed)\b/i.test(children) ||
        /<[A-Z][\w.]*(?=\s|\/?>)/.test(children) ||
        /!\[[^\]]*\]\([^)]*\)/.test(children);

      out += hasNonTextChildren
        ? '<a href="' + url + '">' + children + '</a>'
        : '[' + children + '](' + target.value + ')';
      i = closing.end;
      continue;
    }

    if (name === 'ActionBox') {
      const closing = tag.selfClosing ? null : findClose(text, tag.end, name);
      if (!tag.selfClosing && !closing) {
        ctx.warn('<ActionBox> has no closing tag; left as-is');
        out += text.slice(m.index, tag.end);
        i = tag.end;
        continue;
      }
      const children = tag.selfClosing ? '' : convertSegment(text.slice(tag.end, closing.start), ctx);
      ctx.component(name);
      out += '<div class="sistent-action-box">' + children + '</div>';
      i = tag.selfClosing ? tag.end : closing.end;
      continue;
    }
    if (name === 'MeetTheMaintainer') {
    const closing = tag.selfClosing ? null : findClose(text, tag.end, name);

    if (!tag.selfClosing && !closing) {
      ctx.warn('<MeetTheMaintainer> has no closing tag; left as-is');
      out += text.slice(m.index, tag.end);
      i = tag.end;
      continue;
    }

    const children = tag.selfClosing
      ? ''
      : convertSegment(text.slice(tag.end, closing.start), ctx)
          .replace(/\bclassName=/g, 'class=');

    ctx.component(name);
    out += '<div class="meet-the-maintainer">' + children + '</div>';
    i = tag.selfClosing ? tag.end : closing.end;
    continue;
  }

  if (name === 'MeshkitMesheryAdapterLib') {
    const closing = tag.selfClosing ? null : findClose(text, tag.end, name);

    if (!tag.selfClosing && !closing) {
      ctx.warn('<MeshkitMesheryAdapterLib> has no closing tag; left as-is');
      out += text.slice(m.index, tag.end);
      i = tag.end;
      continue;
    }

    const children = tag.selfClosing
      ? ''
      : convertSegment(text.slice(tag.end, closing.start), ctx)
          .replace(/\bclassName=/g, 'class=');

    ctx.component(name);
    out += '<div class="meshkit-meshery-adapter-lib">' + children + '</div>';
    i = tag.selfClosing ? tag.end : closing.end;
    continue;
  }

  if (name === 'BufProtocol') {
    const closing = tag.selfClosing ? null : findClose(text, tag.end, name);

    if (!tag.selfClosing && !closing) {
      ctx.warn('<BufProtocol> has no closing tag; left as-is');
      out += text.slice(m.index, tag.end);
      i = tag.end;
      continue;
    }

    const children = tag.selfClosing
      ? ''
      : convertSegment(text.slice(tag.end, closing.start), ctx)
          .replace(/\bclassName=/g, 'class=');

    ctx.component(name);
    out += '<div class="buf-protocol">' + children + '</div>';
    i = tag.selfClosing ? tag.end : closing.end;
    continue;
  }

  if (UNWRAP.has(name)) {
      if (tag.selfClosing) {
        ctx.component(name);
        i = tag.end;
        continue;
      }

      const closing = findClose(text, tag.end, name);
      if (!closing) {
        ctx.warn(`<${name}> has no closing tag; left as-is`);
        out += text.slice(m.index, tag.end);
        i = tag.end;
        continue;
      }

      const children = convertSegment(text.slice(tag.end, closing.start), ctx);
      ctx.component(name);
      out += children;
      i = closing.end;
      continue;
    }

    if (!spec) {
      ctx.unknown(name);
      const marker = `<!-- TODO(mdx): unconverted component <${name}> -->\n`;
      const prev = /\u0000(\d+)\u0000\n$/.exec(out); // marker already there from an earlier run?
      if (!(prev && ctx.masked?.[+prev[1]] === marker.trim())) out += marker;
      out += text.slice(m.index, tag.end); i = tag.end; continue;
    }
    const resolvedInlineQuoteImage =
      name === 'InlineQuotes' &&
      tag.attrs.some((a) =>
        a.key === 'image' && !a.literal && ctx.imports?.has(a.value)
      );

    tag.problems
      .filter((p) => !(
        resolvedInlineQuoteImage &&
        p === 'non-literal expression for "image"'
      ))
      .forEach((p) => ctx.warn(`<${name}>: ${p}`));
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
  const masked = [];

  // Protect fenced code blocks across the entire body.
  let t = body.replace(
    /(^|\n)([ \t]*)([\x60]{3,}|~{3,})[^\n]*\n[\s\S]*?(?:\n[ \t]*\3[ \t]*(?=\n|$)|$)/g,
    (block) => '\u0000' + (masked.push(block) - 1) + '\u0000'
  );

  // Protect inline code, but leave template literals in JSX attributes readable.
  t = t.replace(/\{\s*\x60[^\x60]*\x60\s*\}|\x60[^\x60]*\x60|\x60[^\n]+/g, (s) =>
    s.startsWith('{') ? s : '\u0000' + (masked.push(s) - 1) + '\u0000'
  );

  t = t.replace(
    /^import\s+(?:[\w$]+\s*,?\s*)?(?:\{[^}]*\}|\*\s+as\s+[\w$]+)?\s*from\s+["'][^"']+["'];?[ \t]*\r?\n/gm,
    () => { ctx.count('importsRemoved'); return ''; }
  );
  t = t.replace(
    /^import\s+["'][^"']+["'];?[ \t]*\r?\n/gm,
    () => { ctx.count('importsRemoved'); return ''; }
  );

  if (/^export\s/m.test(t)) {
    ctx.warn('contains export statements (MDX exports are not supported in Hugo)');
  }

  t = t.replace(/\{\s*\/\*([\s\S]*?)\*\/\s*\}/g, '<!--$1-->');
  t = t.replace(/<!--[\s\S]*?-->/g, (s) =>
    '\u0000' + (masked.push(s) - 1) + '\u0000'
  );

  ctx.masked = masked;
  t = convertSegment(t, ctx);

  while (/\u0000\d+\u0000/.test(t)) {
    t = t.replace(/\u0000(\d+)\u0000/g, (_, n) => masked[+n]);
  }

  return t.replace(/\n{3,}/g, '\n\n');
}
/* ---------------------------------------------------------------- front matter */
export function convertFrontMatter(fm, slug, ctx) {
  const lines = fm.replace(/\r\n/g, '\n').split('\n'); const out = []; let hasSlug = false;
  for (const line of lines) {
    let m;
    if ((m = /^redirect_from\s*:(.*)$/.exec(line))) { out.push(`aliases:${m[1]}`); ctx.count('redirectFrom'); continue; }
    if ((m = /^published\s*:\s*(true|false)\s*$/.exec(line))) { if (m[1] === 'false') out.push('draft: true'); continue; }
    if ((m = /^(thumbnail|image|cover)\s*:\s*(.*)$/.exec(line))) {
      const v = m[2].trim().replace(/^['"]|['"]$/g, '');
      if (/^\.\.\//.test(v) || /^\/?(static|assets|src)\//.test(v)) { ctx.warn(`${m[1]}: "${v}" is outside the page bundle — move it next to index.md`); out.push(line); }
      else out.push(`${m[1]}: ${v.replace(/^\.\//, '')}`);
      continue;
    }
    if (/^slug\s*:/.test(line)) hasSlug = true;
    out.push(line);
  }
  if (!hasSlug && slug) { out.push(`slug: ${slug}`); ctx.count('slugAdded'); }
  return out.join('\n');
}

function collectImageImports(body, file, sourceRoot) {
  const imports = new Map();
  if (!sourceRoot || !file) return imports;

  const sourceFile = path.resolve(sourceRoot, file);
  const importRe = /^\s*import\s+([A-Za-z_$][\w$]*)\s+from\s+(['"])([^'"]+)\2;?\s*$/gm;
  let match;

  while ((match = importRe.exec(body))) {
    const [, identifier, , importPath] = match;
    if (!/\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(importPath)) continue;

    const absolute = path.resolve(path.dirname(sourceFile), importPath);
    const relative = path.relative(sourceRoot, absolute);
    if (relative.startsWith('..') || path.isAbsolute(relative)) continue;

    const parts = relative.split(path.sep);
    const imported = { image: path.basename(relative) };

    if (parts[0] === 'members' && parts.length > 1) {
      imported.imagePage = `/members/${parts.slice(1, -1).join('/')}`;
    }

    imports.set(identifier, imported);
  }

  return imports;
}

export function convertFile(source, { slug, file = '', sourceRoot = undefined } = {}) {
  const stats = { components: {}, unknown: {}, counters: {}, warnings: [] };
  const ctx = {
    imports: collectImageImports(source, file, sourceRoot),
    warn: (m) => stats.warnings.push(m),
    unknown: (n) => { stats.unknown[n] = (stats.unknown[n] || 0) + 1; },
    component: (n) => { stats.components[n] = (stats.components[n] || 0) + 1; },
    count: (k) => { stats.counters[k] = (stats.counters[k] || 0) + 1; },
  };
  const fmMatch = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source);
  let fm = '', body = source;
  if (fmMatch) { fm = fmMatch[1]; body = source.slice(fmMatch[0].length); }
  else ctx.warn('no front matter found; generated a minimal one');
  const newFm = fmMatch ? convertFrontMatter(fm, slug, ctx) : `title: ${slug ?? path.basename(file)}${slug ? `\nslug: ${slug}` : ''}`;
  const newBody = convertBody(body.replace(/\r\n/g, '\n'), ctx).replace(/^\n+/, '');
  if (stats.unknown && Object.keys(stats.unknown).length) ctx.warn(`unknown components: ${Object.keys(stats.unknown).join(', ')}`);
  return { output: `---\n${newFm}\n---\n\n${newBody.trimEnd()}\n`, stats };
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
  const report = { generated: new Date().toISOString(), dryRun, files: 0, converted: 0, withWarnings: 0, assetsCopied: 0,
    components: {}, unknown: {}, byCollection: {}, warnings: [] };
  const bump = (o, k, n = 1) => { o[k] = (o[k] || 0) + n; };
  for (const file of walk(src)) {
    const rel = path.relative(src, file);
    const collection = rel.split(path.sep)[0];
    const ext = path.extname(file);
    const isDoc = ext === '.mdx' || ext === '.md';
    const target = path.join(dest, isDoc ? rel.replace(/\.mdx?$/, '.md') : rel);
    const col = (report.byCollection[collection] ||= { files: 0, converted: 0, withWarnings: 0 });
    if (!isDoc) { if (!dryRun) { fs.mkdirSync(path.dirname(target), { recursive: true }); fs.copyFileSync(file, target); } report.assetsCopied++; continue; }
    report.files++; col.files++;
    const base = path.basename(file, ext);
    const slug = base === 'index' ? path.basename(path.dirname(file)) : base;
    const { output, stats } = convertFile(fs.readFileSync(file, 'utf8'), { slug, file: rel, sourceRoot: src });
    for (const [k, v] of Object.entries(stats.components)) bump(report.components, k, v);
    for (const [k, v] of Object.entries(stats.unknown)) bump(report.unknown, k, v);
    if (stats.warnings.length) { report.withWarnings++; col.withWarnings++; stats.warnings.forEach((w) => report.warnings.push({ file: rel, message: w })); }
    if (!dryRun) { fs.mkdirSync(path.dirname(target), { recursive: true }); fs.writeFileSync(target, output); }
    report.converted++; col.converted++;
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
