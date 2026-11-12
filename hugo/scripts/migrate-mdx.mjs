#!/usr/bin/env node
/**
 * migrate-mdx.mjs — Gatsby MDX → Hugo Markdown converter (Workstream 1).
 *
 * Zero dependencies (Node >= 18). Safe by default: use --dry-run first.
 * Optional dependencies: ImageMagick (`magick` or non-Windows `convert`) or Python 3
 * with Pillow (`PIL`) for AVIF -> WebP raster asset transcoding.
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
import { execFileSync } from 'node:child_process';

/* ---------------------------------------------------------------- component map */
export const COMPONENTS = {
  Button: {
    shortcode: 'button',
    text: true,
    alias: { to: 'url', href: 'url', link: 'url', title: 'text' },
    flagValues: { primary: ['style', 'primary'], secondary: ['style', 'secondary'] },
    drop: new Set(['external']),
  },
  CTA_FullWidth: { shortcode: 'cta-fullwidth' },
  Terminal:      { shortcode: 'terminal',       paired: true, bodyAttr: 'code' },
  Accordion:     { shortcode: 'accordion',      paired: true },
  AccordionItem: { shortcode: 'accordion-item', paired: true },
  Card:             { shortcode: 'card',           paired: true },
  Link:             { custom: 'link' },
  BlogWrapper:      { custom: 'unwrap' },
  CareerWrapper:    { custom: 'unwrap' },
  EventWrapper:     { custom: 'unwrap' },
  NewsWrapper:      { custom: 'unwrap' },
  ProgramsWrapper:  { custom: 'unwrap' },
  ProjectWrapper:   { custom: 'unwrap' },
  ResourcesWrapper: { custom: 'unwrap' },
  BookWrapper:      { custom: 'unwrap' },
};
const COLLECTION_EXCLUDED_COMPONENTS = {
  sistent: new Set([
    'Button', 'CTA_FullWidth', 'Terminal', 'Accordion', 'AccordionItem', 'Card', 'Link',
    'BlogWrapper', 'CareerWrapper', 'EventWrapper', 'NewsWrapper',
    'ProgramsWrapper', 'ProjectWrapper', 'ResourcesWrapper', 'BookWrapper',
  ]),
};
const DROP_ATTRS = new Set(['className', 'class', 'style', 'key', 'ref']);

/** Resolve a component mapping for the active collection. */
export function resolveComponentSpec(name, collection = '') {
  if (collection && COLLECTION_EXCLUDED_COMPONENTS[collection]?.has(name)) return null;
  return COMPONENTS[name] || null;
}

/* ---------------------------------------------------------------- tag scanner */
const isWs = (c) => c === ' ' || c === '\n' || c === '\t' || c === '\r';
const isTagWs = (c) => isWs(c) || c === '\u200B';
const cleanAttrVal = (v) => v.replace(/\u200B/g, '');

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
    while (isTagWs(text[i])) i++;
    if (text.startsWith('/>', i)) return { name, attrs, problems, end: i + 2, selfClosing: true };
    if (text[i] === '>') return { name, attrs, problems, end: i + 1, selfClosing: false };
    if (text[i] === '{') { // {...spread}
      const [raw, next] = readBraces(text, i);
      problems.push(`spread/expression attribute ${raw.slice(0, 40)}`);
      i = next; continue;
    }
    const an = /^[\w$:.-]+/.exec(text.slice(i));
    if (!an) return null;
    const key = an[0]; i += key.length;
    while (isTagWs(text[i])) i++;
    if (text[i] !== '=') { attrs.push({ key, value: 'true', literal: true }); continue; }
    i++; while (isTagWs(text[i])) i++;
    if (text[i] === '"' || text[i] === "'") {
      const q = text[i]; const j = text.indexOf(q, i + 1);
      if (j === -1) return null;
      attrs.push({ key, value: cleanAttrVal(text.slice(i + 1, j)), literal: true }); i = j + 1;
    } else if (text[i] === '{') {
      const [raw, next] = readBraces(text, i);
      const inner = raw.slice(1, -1).trim();
      const str = /^(["'`])([\s\S]*)\1$/.exec(inner);
      if (str && !(str[1] === '`' && str[2].includes('${'))) attrs.push({ key, value: cleanAttrVal(str[2]), literal: true });
      else if (/^(-?\d+(\.\d+)?|true|false)$/.test(inner)) attrs.push({ key, value: inner, literal: true });
      else {
        attrs.push({ key, value: inner, literal: false });
        if (key !== 'key' && key !== 'ref') problems.push(`non-literal expression for "${key}"`);
      }
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

function buildShortcode(spec, tag, children, ctx, rawTag = '') {
  const attrs = new Map();
  let externalTrue = false;
  for (const a of tag.attrs) {
    const baseKey = a.key.startsWith('$') ? a.key.slice(1) : a.key;
    if (baseKey === 'external' && a.value === 'true') externalTrue = true;
    if (DROP_ATTRS.has(a.key) || DROP_ATTRS.has(baseKey) || spec.drop?.has(a.key) || spec.drop?.has(baseKey)) {
      ctx.count('droppedAttrs');
      continue;
    }
    const flagEntry = spec.flagValues?.[baseKey];
    if (flagEntry) {
      if (a.value !== 'false') attrs.set(flagEntry[0], flagEntry[1]);
      continue;
    }
    const key = spec.alias?.[a.key] ?? spec.alias?.[baseKey] ?? snake(baseKey);
    if (baseKey === 'title' && key === 'text' && attrs.has('text')) continue;
    attrs.set(key, a.value);
  }
  if (externalTrue) {
    const resolvedUrl = (attrs.get('url') ?? '').trim();
    if (resolvedUrl && !/^https?:\/\//i.test(resolvedUrl)) {
      const loc = ctx.file ? `${ctx.file}: ` : '';
      const tagSnippet = rawTag.replace(/\s+/g, ' ').trim() || `<${tag.name}>`;
      ctx.warn(`${loc}<${tag.name}> has external="true" on non-http(s) URL "${resolvedUrl}" (${tagSnippet}); review manually`);
    }
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

/** Normalize a <Link to="..."> URL or return null if bare-relative. */
function normalizeLinkUrl(raw) {
  const u = raw.trim();
  if (/^https?:\/\/layer5\.io(?=[/?#]|$)/i.test(u)) {
    const rest = u.replace(/^https?:\/\/layer5\.io/i, '');
    if (!rest) return '/';
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  if (
    u.startsWith('/') ||
    u.startsWith('#') ||
    /^(?:https?:|mailto:|tel:)/i.test(u)
  ) {
    return u;
  }
  return null;
}

function convertLink(tag, children, ctx, rawTag, rawFull) {
  const loc = ctx.file ? `${ctx.file}: ` : '';
  const tagSnippet = rawTag.replace(/\s+/g, ' ').trim() || '<Link>';
  const toAttr = tag.attrs.find((a) => a.key === 'to');
  if (!toAttr) {
    ctx.warn(`${loc}<Link> missing "to" attribute (${tagSnippet}); left as-is`);
    return rawFull;
  }
  if (!toAttr.literal) {
    return rawFull;
  }
  const url = normalizeLinkUrl(toAttr.value);
  if (url === null) {
    ctx.warn(`${loc}<Link> has bare-relative "to" value "${toAttr.value}" (${tagSnippet}); review manually`);
    return rawFull;
  }
  const classAttr = tag.attrs.find((a) => a.key === 'className' || a.key === 'class');
  const targetAttr = tag.attrs.find((a) => a.key === 'target');
  const relAttr = tag.attrs.find((a) => a.key === 'rel');
  const hasRichChild = /<[A-Za-z!/]|{{[<%]/.test(children);
  if (!classAttr && !targetAttr && !relAttr && !hasRichChild) {
    const label = children.replace(/\s+/g, ' ').trim();
    const mdUrl = /[\s()]/.test(url) ? `<${url}>` : url;
    return `[${label}](${mdUrl})`;
  }
  const parts = [`to=${fmtValue(url)}`];
  if (classAttr && classAttr.value.trim()) parts.push(`class=${fmtValue(classAttr.value)}`);
  if (targetAttr && targetAttr.value.trim()) parts.push(`target=${fmtValue(targetAttr.value)}`);
  if (relAttr && relAttr.value.trim()) parts.push(`rel=${fmtValue(relAttr.value)}`);
  return `{{< link ${parts.join(' ')} >}}${children.trim()}{{< /link >}}`;
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
    const spec = resolveComponentSpec(name, ctx.collection);
    if (!tag) { ctx.warn(`could not parse <${name}> tag; left as-is`); out += '<'; i = m.index + 1; continue; }
    if (!spec) {
      ctx.unknown(name);
      const marker = `<!-- TODO(mdx): unconverted component <${name}> -->\n`;
      const prev = /\u0000(\d+)\u0000\n$/.exec(out); // marker already there from an earlier run?
      if (!(prev && ctx.masked?.[+prev[1]] === marker.trim())) out += marker;
      out += text.slice(m.index, tag.end); i = tag.end; continue;
    }
    if (spec.custom === 'unwrap') { out += text.slice(m.index, tag.end); i = tag.end; continue; }
    tag.problems.forEach((p) => ctx.warn(`<${name}>: ${p}`));
    let children = '', end = tag.end;
    if (!tag.selfClosing) {
      const c = findClose(text, tag.end, name);
      if (!c) { ctx.warn(`<${name}> has no closing tag; left as-is`); out += text.slice(m.index, tag.end); i = tag.end; continue; }
      children = convertSegment(text.slice(tag.end, c.start), ctx);
      end = c.end;
    }
    ctx.component(name);
    if (spec.custom === 'link') {
      out += convertLink(tag, children, ctx, text.slice(m.index, tag.end), text.slice(m.index, end));
    } else if (spec.custom === 'unwrap') {
      out += text.slice(m.index, tag.end) + children + `</${name}>`;
    } else {
      out += buildShortcode(spec, tag, children, ctx, text.slice(m.index, tag.end));
    }
    i = end;
  }
  return out;
}

/** Dedent a wrapper body by its common non-empty indent, never modifying fenced code blocks. */
function dedentWrapperBody(inner) {
  const trimmed = inner.replace(/^(?:[ \t]*\n)+/, '').replace(/(?:\n[ \t]*)+$/, '');
  if (!trimmed) return { text: '', hasIndentHazard: false };
  const lines = trimmed.split('\n');
  const inFenceFlags = new Array(lines.length).fill(false);
  let fenceChar = null;
  for (let idx = 0; idx < lines.length; idx++) {
    const f = /^\s*(```+|~~~+)/.exec(lines[idx]);
    if (f && !fenceChar) { fenceChar = f[1][0]; inFenceFlags[idx] = true; }
    else if (f && fenceChar && f[1][0] === fenceChar) { inFenceFlags[idx] = true; fenceChar = null; }
    else if (fenceChar) { inFenceFlags[idx] = true; }
  }
  let minIndent = Infinity;
  for (let idx = 0; idx < lines.length; idx++) {
    if (inFenceFlags[idx] || !lines[idx].trim()) continue;
    const m = /^( +)/.exec(lines[idx]);
    const indent = m ? m[1].length : 0;
    if (indent < minIndent) minIndent = indent;
  }
  const dedentedLines = (!Number.isFinite(minIndent) || minIndent === 0)
    ? lines
    : lines.map((line, idx) => (inFenceFlags[idx] || !line.trim() ? line : line.slice(minIndent)));
  let prevBlank = true;
  let hasIndentHazard = false;
  for (let idx = 0; idx < dedentedLines.length; idx++) {
    if (inFenceFlags[idx]) { prevBlank = false; continue; }
    if (!dedentedLines[idx].trim()) { prevBlank = true; continue; }
    if (prevBlank && /^ {4,}/.test(dedentedLines[idx])) { hasIndentHazard = true; break; }
    prevBlank = false;
  }
  return { text: dedentedLines.join('\n'), hasIndentHazard };
}

/** Unwrap collection wrapper tags (e.g. <BlogWrapper>...</BlogWrapper>) outside fenced code blocks. */
function unwrapCollectionWrappers(body, ctx) {
  const chunks = splitCodeFenceChunks(body);
  const maskedFences = [];
  const joined = chunks.map((c) => (c.code ? `\u0000WRAP_FENCE_${maskedFences.push(c.text) - 1}\u0000` : c.text)).join('\n');
  let out = '', i = 0;
  const re = /<([A-Z][\w.]*)(?![\w.])/g;
  while (true) {
    re.lastIndex = i;
    const m = re.exec(joined);
    if (!m) { out += joined.slice(i); break; }
    const name = m[1];
    const spec = resolveComponentSpec(name, ctx.collection);
    if (spec?.custom !== 'unwrap') {
      out += joined.slice(i, m.index + 1);
      i = m.index + 1;
      continue;
    }
    const tag = parseOpenTag(joined, m.index);
    if (!tag || tag.selfClosing) {
      out += joined.slice(i, m.index + 1);
      i = m.index + 1;
      continue;
    }
    const c = findClose(joined, tag.end, name);
    if (!c) {
      ctx.warn(`<${name}> has no closing tag; left as-is`);
      out += joined.slice(i, tag.end);
      i = tag.end;
      continue;
    }
    const rawInner = joined.slice(tag.end, c.start).replace(/\u0000WRAP_FENCE_(\d+)\u0000/g, (_, n) => maskedFences[+n]);
    const { text: dedentedText, hasIndentHazard } = dedentWrapperBody(rawInner);
    if (hasIndentHazard) {
      ctx.warn(`<${name}>: wrapper body has 4+ space indented line after dedent; left as-is for manual review`);
      out += joined.slice(i, c.end);
    } else {
      ctx.component(name);
      out += joined.slice(i, m.index) + dedentedText;
    }
    i = c.end;
  }
  return out.replace(/\u0000WRAP_FENCE_(\d+)\u0000/g, (_, n) => maskedFences[+n]);
}

/** Convert an MDX body. Code fences and inline code are protected. */
export function convertBody(body, ctx) {
  const unwrapped = unwrapCollectionWrappers(body, ctx);
  const chunks = splitCodeFenceChunks(unwrapped);

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

/* ---------------------------------------------------------------- front matter */
export function convertFrontMatter(fm, slug, ctx) {
  const lines = fm.split('\n').map((l) => l.replace(/\r$/, ''));
  const out = [];
  let hasSlug = false;
  const hasDraft = lines.some((l) => /^\s*draft\s*:/i.test(l));
  const hasDraftFalse = lines.some((l) => /^\s*draft\s*:\s*false\b/i.test(l));

  for (const line of lines) {
    let m;
    if ((m = /^redirect_from\s*:(.*)$/.exec(line))) {
      out.push(`aliases:${m[1]}`);
      ctx.count('redirectFrom');
      continue;
    }

    if ((m = /^published\s*:\s*(.*)$/.exec(line))) {
      const rawVal = m[1].trim();
      const valWithoutComment = rawVal.replace(/\s*#.*$/, '').trim();
      const lower = valWithoutComment.toLowerCase();

      // 1. Only act on boolean values (case-insensitive)
      if (lower === 'true' || lower === 'false') {
        if (lower === 'false') {
          if (hasDraftFalse) {
            ctx.warn('published: false ignored because draft: false is already present');
          } else if (!hasDraft) {
            out.push('draft: true');
          }
        }
        continue;
      }

      // 2. Placeholder comment template line (e.g. published: # comment)
      if (rawVal.startsWith('#') || rawVal === '') {
        continue;
      }

      // 3. Restrict date branch strictly to ISO dates (YYYY-MM-DD...)
      if (/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2})?)?$/.test(valWithoutComment)) {
        out.push(`publishDate: ${valWithoutComment}`);
        continue;
      }

      // 4. Neither boolean nor ISO date: warn and preserve
      ctx.warn(`published: invalid value "${rawVal}" (expected boolean or ISO date)`);
      out.push(line);
      continue;
    }

    if ((m = /^(thumbnail|image|cover)\s*:\s*(.*)$/.exec(line))) {
      const v = m[2].trim().replace(/^['"]|['"]$/g, '');
      if (/^\.\.\//.test(v) || /^\/?(static|assets|src)\//.test(v)) {
        ctx.warn(`${m[1]}: "${v}" is outside the page bundle — move it next to index.md`);
        out.push(line);
      } else {
        out.push(`${m[1]}: ${v.replace(/^\.\//, '')}`);
      }
      continue;
    }

    if (/^slug\s*:/.test(line)) hasSlug = true;
    out.push(line);
  }
  if (!hasSlug && slug) {
    out.push(`slug: ${slug}`);
    ctx.count('slugAdded');
  }
  return out.join('\n');
}

export function convertFile(source, { slug, file = '', collection } = {}) {
  const normFile = file ? file.replace(/\\/g, '/').replace(/^\/+/, '') : '';
  const resolvedCollection = collection ?? (normFile.includes('/') ? normFile.split('/')[0] : '');
  const stats = { components: {}, unknown: {}, counters: {}, warnings: [] };
  const ctx = {
    file: normFile,
    collection: resolvedCollection,
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

/* ---------------------------------------------------------------- template filter */
export const TEMPLATE_ALLOWLIST = [
  'blog/blog-template',
  'blog/meetTheMaintainer-template',
  'events/Z_event-template',
  'members/_member-profile-template',
  'news/news-template',
  'resources/resources-template',
];

export function isTemplatePath(rel) {
  const norm = rel.replace(/\\/g, '/').replace(/^\/+/, '');
  return TEMPLATE_ALLOWLIST.some((prefix) => norm === prefix || norm.startsWith(prefix + '/'));
}

/* ---------------------------------------------------------------- asset format detection & normalization */
export function sniffImageFormat(buf) {
  if (!buf || buf.length === 0) return 'empty';
  if (buf.length >= 3 && buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF) return 'jpeg';
  if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47 &&
      buf[4] === 0x0D && buf[5] === 0x0A && buf[6] === 0x1A && buf[7] === 0x0A) return 'png';
  if (buf.length >= 12 && buf.subarray(0, 4).toString('ascii') === 'RIFF' &&
      buf.subarray(8, 12).toString('ascii') === 'WEBP') return 'webp';
  if (buf.length >= 12 && (buf.subarray(4, 12).toString('ascii') === 'ftypavif' ||
      (buf.subarray(4, 8).toString('ascii') === 'ftyp' && buf.subarray(8, 12).toString('ascii') === 'mif1'))) return 'avif';
  if (buf.length >= 4 && buf.subarray(0, 4).toString('ascii') === 'GIF8') return 'gif';
  const head = buf.subarray(0, Math.min(buf.length, 500)).toString('utf8');
  if (/<svg[\s>]/i.test(head) || /<\?xml[\s\S]*?<svg/i.test(head)) return 'svg';
  return 'unknown';
}

export function normalizeAssetFilename(filename, format) {
  const ext = path.extname(filename).toLowerCase();
  if (format === 'empty' || format === 'unknown' || format === 'svg' || format === 'gif') return filename;
  const base = path.basename(filename, ext);
  if (format === 'jpeg' && ext !== '.jpg' && ext !== '.jpeg') return `${base}.jpg`;
  if (format === 'png' && ext !== '.png') return `${base}.png`;
  if (format === 'webp' && ext !== '.webp') return `${base}.webp`;
  return filename;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function assetRefRegExp(relPath) {
  return new RegExp(`(?<![\\w.-]|/)(\\./)?${escapeRegExp(relPath)}(?![\\w/-]|\\.[a-zA-Z0-9_-])`, 'g');
}

function splitCodeFenceChunks(text) {
  const lines = text.split('\n');
  const chunks = [];
  let buf = [], inFence = null;
  for (const line of lines) {
    const f = /^\s*(```+|~~~+)/.exec(line);
    if (f && !inFence) {
      chunks.push({ code: false, text: buf.join('\n') });
      buf = [line];
      inFence = f[1][0];
    } else if (f && inFence && f[1][0] === inFence) {
      buf.push(line);
      chunks.push({ code: true, text: buf.join('\n') });
      buf = [];
      inFence = null;
    } else {
      buf.push(line);
    }
  }
  chunks.push({ code: !!inFence, text: buf.join('\n') });
  return chunks;
}

function withMaskedNonCodeChunks(text, fn) {
  return splitCodeFenceChunks(text).map((c) => {
    if (c.code) return c.text;
    const urls = [];
    let t = c.text.replace(/https?:\/\/[^\s)'"]+/g, (u) => `\u0000URL_${urls.push(u) - 1}\u0000`);
    t = fn(t);
    return t.replace(/\u0000URL_(\d+)\u0000/g, (_, i) => urls[+i]);
  }).join('\n');
}

export function rewriteAssetReferences(text, renames) {
  if (!renames || Object.keys(renames).length === 0 || !text) return text;

  // Filter and sort renames by old path length descending so longer subpaths match first
  const entries = Object.entries(renames)
    .filter(([oldPath, newPath]) => oldPath !== newPath)
    .sort((a, b) => b[0].length - a[0].length);

  if (entries.length === 0) return text;

  return withMaskedNonCodeChunks(text, (t) => {
    for (const [oldPath, newPath] of entries) {
      t = t.replace(assetRefRegExp(oldPath), (_, prefix) => (prefix ? './' : '') + newPath);
    }
    return t;
  });
}

export function findAssetReferences(text, assetPaths) {
  if (!assetPaths?.length || !text) return [];
  const found = new Set();
  withMaskedNonCodeChunks(text, (t) => {
    for (const p of assetPaths) {
      if (!found.has(p) && assetRefRegExp(p).test(t)) found.add(p);
    }
    return t;
  });
  return [...found];
}

export function transcodeAvifToWebp(srcFile, destFile, { execFileFn = execFileSync } = {}) {
  // 1. Try ImageMagick 7 (magick)
  try {
    execFileFn('magick', [srcFile, destFile], { stdio: 'ignore' });
    return true;
  } catch {}

  // 2. Fall back to ImageMagick 6 (convert) on non-Windows only
  if (process.platform !== 'win32') {
    try {
      execFileFn('convert', [srcFile, destFile], { stdio: 'ignore' });
      return true;
    } catch {}
  }

  // 3. Try Python with Pillow (PIL) via argv
  const pyCode = 'import sys; from PIL import Image; Image.open(sys.argv[1]).save(sys.argv[2], "WEBP")';
  try {
    execFileFn('python3', ['-c', pyCode, srcFile, destFile], { stdio: 'ignore' });
    return true;
  } catch {}
  try {
    execFileFn('python', ['-c', pyCode, srcFile, destFile], { stdio: 'ignore' });
    return true;
  } catch {}

  return false;
}

/* ---------------------------------------------------------------- filesystem driver */
function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

/** Parse --exclude CLI arguments (comma-separated and/or repeated flags). */
export function parseExcludeArg(args) {
  const out = new Set();
  for (let i = 0; i < args.length; i++) {
    let raw;
    if (args[i] === '--exclude' && i + 1 < args.length) raw = args[++i];
    else if (args[i].startsWith('--exclude=')) raw = args[i].slice('--exclude='.length);
    if (raw) {
      for (const item of raw.split(',')) {
        const norm = item.trim().replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
        if (norm) out.add(norm);
      }
    }
  }
  return [...out];
}

export function migrate({ src, dest, dryRun = false, exclude = [], execFileFn = execFileSync }) {
  const excludeList = Array.isArray(exclude) ? exclude : String(exclude).split(',');
  const excludeSet = new Set(
    excludeList.map((s) => String(s).trim().replace(/\\/g, '/').replace(/^\/+|\/+$/g, '')).filter(Boolean)
  );
  const report = {
    generated: new Date().toISOString(), dryRun, excluded: [...excludeSet], excludedFiles: 0,
    files: 0, converted: 0, withWarnings: 0, assetsCopied: 0,
    templatesSkipped: 0, skippedTemplates: [], assetsRenamed: 0, assetRenames: [],
    emptyAssets: [], transcodeFailures: [], renameCollisions: [], assetsTranscoded: [],
    components: {}, unknown: {}, byCollection: {}, warnings: []
  };
  const bump = (o, k, n = 1) => { o[k] = (o[k] || 0) + n; };
  const allFiles = [...walk(src)];
  const docFiles = [];
  const renamesByDir = new Map();
  const failedTranscodesByDir = new Map();
  const writtenTargets = new Set();

  function forEachAncestorDir(fileDir, fn) {
    let curDir = fileDir;
    while (true) {
      fn(curDir);
      if (curDir === src || path.relative(src, curDir) === '') break;
      const parent = path.dirname(curDir);
      if (parent === curDir || path.relative(src, parent).startsWith('..')) break;
      curDir = parent;
    }
  }

  function registerRename(fileDir, oldBaseName, newBaseName) {
    forEachAncestorDir(fileDir, (curDir) => {
      const oldRel = path.relative(curDir, path.join(fileDir, oldBaseName)).replace(/\\/g, '/');
      const newRel = path.relative(curDir, path.join(fileDir, newBaseName)).replace(/\\/g, '/');
      const map = renamesByDir.get(curDir) || {};
      map[oldRel] = newRel;
      renamesByDir.set(curDir, map);
    });
  }

  function recordTranscodeFailure(fileDir, baseName, relNorm) {
    const entry = { file: relNorm, referencedBy: [] };
    report.transcodeFailures.push(entry);
    report.warnings.push({ file: relNorm, message: 'AVIF transcoding to WebP failed' });
    forEachAncestorDir(fileDir, (curDir) => {
      const relToDocDir = path.relative(curDir, path.join(fileDir, baseName)).replace(/\\/g, '/');
      const map = failedTranscodesByDir.get(curDir) || new Map();
      map.set(relToDocDir, entry);
      failedTranscodesByDir.set(curDir, map);
    });
  }

  // Pass 1: assets
  for (const file of allFiles) {
    const rel = path.relative(src, file);
    const relNorm = rel.replace(/\\/g, '/');
    const topCollection = relNorm.split('/')[0];
    if (excludeSet.has(topCollection)) {
      report.excludedFiles++;
      continue;
    }
    if (isTemplatePath(rel)) {
      report.templatesSkipped++;
      report.skippedTemplates.push(relNorm);
      continue;
    }
    const ext = path.extname(file);
    const isDoc = ext === '.mdx' || ext === '.md';
    if (isDoc) {
      docFiles.push(file);
      continue;
    }

    const fileBuf = fs.readFileSync(file);
    const format = sniffImageFormat(fileBuf);
    const dir = path.dirname(file);
    const oldName = path.basename(file);

    if (format === 'empty') {
      report.emptyAssets.push(relNorm);
      report.warnings.push({ file: relNorm, message: 'zero-byte asset' });
      const targetDir = path.dirname(path.join(dest, rel));
      const target = path.join(targetDir, oldName);
      if (!dryRun) {
        fs.mkdirSync(targetDir, { recursive: true });
        fs.copyFileSync(file, target);
      }
      writtenTargets.add(target);
      report.assetsCopied++;
      continue;
    }

    if (format === 'avif') {
      const lowerExt = ext.toLowerCase();
      const newName = lowerExt === '.avif' ? `${path.basename(file, ext)}.webp` : oldName;
      const targetDir = path.dirname(path.join(dest, rel));
      const target = path.join(targetDir, newName);

      if (newName !== oldName) {
        if (fs.existsSync(path.join(dir, newName)) || writtenTargets.has(target)) {
          report.renameCollisions.push({ from: relNorm, target: newName });
          report.warnings.push({ file: relNorm, message: `rename collision: ${newName} already exists, skipping rename` });
          const fallbackTarget = path.join(targetDir, oldName);
          if (!dryRun) {
            fs.mkdirSync(targetDir, { recursive: true });
            const ok = transcodeAvifToWebp(file, fallbackTarget, { execFileFn });
            if (!ok) {
              recordTranscodeFailure(dir, oldName, relNorm);
              continue;
            }
          }
          writtenTargets.add(fallbackTarget);
          report.assetsTranscoded.push(relNorm);
          report.assetsCopied++;
          continue;
        }
      }

      if (!dryRun) {
        fs.mkdirSync(targetDir, { recursive: true });
        const ok = transcodeAvifToWebp(file, target, { execFileFn });
        if (!ok) {
          recordTranscodeFailure(dir, oldName, relNorm);
          continue;
        }
      }
      writtenTargets.add(target);
      report.assetsTranscoded.push(relNorm);
      report.assetsCopied++;

      if (newName !== oldName) {
        report.assetsRenamed++;
        report.assetRenames.push({ from: relNorm, to: newName });
        registerRename(dir, oldName, newName);
      }
      continue;
    }

    let newName = normalizeAssetFilename(oldName, format);
    const targetDir = path.dirname(path.join(dest, rel));
    let target = path.join(targetDir, newName);

    if (newName !== oldName) {
      if (fs.existsSync(path.join(dir, newName)) || writtenTargets.has(target)) {
        report.renameCollisions.push({ from: relNorm, target: newName });
        report.warnings.push({ file: relNorm, message: `rename collision: ${newName} already exists, skipping rename` });
        newName = oldName;
        target = path.join(targetDir, oldName);
      } else {
        report.assetsRenamed++;
        report.assetRenames.push({ from: relNorm, to: newName });
        registerRename(dir, oldName, newName);
      }
    }

    if (!dryRun) {
      fs.mkdirSync(targetDir, { recursive: true });
      fs.copyFileSync(file, target);
    }
    writtenTargets.add(target);
    report.assetsCopied++;
  }

  // Pass 2: docs
  for (const file of docFiles) {
    const rel = path.relative(src, file);
    const collection = rel.split(path.sep)[0];
    const ext = path.extname(file);
    const target = path.join(dest, rel.replace(/\.mdx?$/, '.md'));
    const col = (report.byCollection[collection] ||= { files: 0, converted: 0, withWarnings: 0 });

    report.files++; col.files++;
    const base = path.basename(file, ext);
    const slug = base === 'index' ? path.basename(path.dirname(file)) : base;

    let sourceText = fs.readFileSync(file, 'utf8');
    const dirFailures = failedTranscodesByDir.get(path.dirname(file));
    if (dirFailures) {
      const docRel = rel.replace(/\\/g, '/');
      for (const ref of findAssetReferences(sourceText, [...dirFailures.keys()])) {
        dirFailures.get(ref).referencedBy.push(docRel);
      }
    }
    const dirRenames = renamesByDir.get(path.dirname(file));
    if (dirRenames) {
      sourceText = rewriteAssetReferences(sourceText, dirRenames);
    }

    const { output, stats } = convertFile(sourceText, { slug, file: rel, collection });
    for (const [k, v] of Object.entries(stats.components)) bump(report.components, k, v);
    for (const [k, v] of Object.entries(stats.unknown)) bump(report.unknown, k, v);
    if (stats.warnings.length) {
      report.withWarnings++; col.withWarnings++;
      stats.warnings.forEach((w) => report.warnings.push({ file: rel, message: w }));
    }
    if (!dryRun) {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, output);
    }
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
    console.log('Usage: migrate-mdx.mjs [--src <collections dir>] [--dest content] [--exclude <col1,col2>] [--dry-run] [--report report.json] [--progress data/migration.json] [--strict]');
    process.exit(args.includes('--help') ? 0 : 1);
  }
  const dryRun = args.includes('--dry-run');
  const exclude = parseExcludeArg(args);
  const report = migrate({ src, dest: get('--dest') || 'content', dryRun, exclude });
  if (get('--report')) fs.writeFileSync(get('--report'), JSON.stringify(report, null, 2));
  if (get('--progress') && !dryRun) updateProgress(get('--progress'), report);
  const top = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}×${v}`).join(', ') || '—';
  console.log(`${dryRun ? '[dry-run] ' : ''}${report.converted}/${report.files} documents converted, ${report.assetsCopied} assets, ${report.templatesSkipped} templates skipped, ${report.withWarnings} with warnings`);
  if (report.excluded?.length) {
    console.log(`Excluded collections (${report.excluded.join(', ')}): ${report.excludedFiles} files skipped`);
  }
  if (report.skippedTemplates?.length) {
    console.log(`Skipped template items (${report.skippedTemplates.length}):`);
    report.skippedTemplates.forEach((t) => console.log(`  - ${t}`));
  }
  if (report.emptyAssets?.length) {
    console.log(`Zero-byte SVGs warning list (${report.emptyAssets.length}):`);
    report.emptyAssets.forEach((s) => console.log(`  - ${s}`));
  }
  if (report.assetRenames?.length) {
    console.log(`Normalized mismatched assets (${report.assetRenames.length}):`);
    report.assetRenames.forEach((r) => console.log(`  - ${r.from} -> ${r.to}`));
  }
  if (report.renameCollisions?.length) {
    console.log(`Rename collisions skipped (${report.renameCollisions.length}):`);
    report.renameCollisions.forEach((c) => console.log(`  - ${c.from} -> ${c.target} (target already exists)`));
  }
  if (report.transcodeFailures?.length) {
    console.log(`AVIF transcode failures (${report.transcodeFailures.length}):`);
    report.transcodeFailures.forEach((f) => {
      const refs = f.referencedBy?.length ? ` (referenced by: ${f.referencedBy.join(', ')})` : '';
      console.log(`  - ${f.file}${refs}`);
    });
  }
  console.log(`components → shortcodes: ${top(report.components)}`);
  console.log(`unknown components:      ${top(report.unknown)}`);

  if (report.transcodeFailures?.length) {
    process.exit(1);
  }
  if (args.includes('--strict') && (report.withWarnings || report.transcodeFailures?.length)) {
    process.exit(1);
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
