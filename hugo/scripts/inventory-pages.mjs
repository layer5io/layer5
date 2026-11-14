#!/usr/bin/env node
/**
 *
 * Generates hugo/data/pages-inventory.yaml for the hand-written pages in src/pages (and the
 * src/sections and src/components they use). Nothing is typed by hand and nothing is fetched from production
 * to build it (--sitemap and --verify-live are optional checks).
 *
 * Per page the YAML keeps the flow page -> sections -> components, stops at component level,
 * and adds flat features/data lists (rolled up from everything below, including sub-components):
 *
 *   - url: /
 *     source: src/pages/index.js
 *     area: Products
 *     phase3: P3-11
 *     proposed_owner: "@someone"        # from git history since 2026-01-01, maintainers confirm
 *     owner_status: proposed
 *     status: not started
 *     special: error-page               # only on pages listed in SPECIAL (see CONFIG); with a "note"
 *     sections:
 *       - name: Home/Hero
 *         components: [Button, Carousel]
 *         features: [carousel]
 *         data: []
 *     page_components: []               # components imported directly by the page file
 *     features: [carousel, gsap]
 *     data: ["graphql: allMdx"]
 *
 * Owners: one per area, nobody proposed twice. Candidates come from git history; each one must be a
 * GitHub CONTRIBUTOR (author_association), so maintainers/members are never proposed. This needs the
 * GitHub CLI signed in (gh auth login), or run with --no-github to skip that check.
 *
 * Usage (script lives in hugo/scripts; run from anywhere):
 *   node hugo/scripts/inventory-pages.mjs                       # generate + self-check
 *   node hugo/scripts/inventory-pages.mjs --print=/             # show one page's entry
 *   node hugo/scripts/inventory-pages.mjs --sitemap=<sitemap url>     # URLs exist on the live site
 *   node hugo/scripts/inventory-pages.mjs --verify-live[=https://layer5.io]   # URL <-> source file vs production
 *   node hugo/scripts/inventory-pages.mjs --cross-check         # Babel imports vs an independent regex scan
 *   node hugo/scripts/inventory-pages.mjs --no-owners           # skip owner lookup entirely (fast)
 *   node hugo/scripts/inventory-pages.mjs --ref=upstream/master # owner history ref (default: upstream/master if it exists, else HEAD)
 *   node hugo/scripts/inventory-pages.mjs --exclude=a,b         # extra logins/names never proposed as owners
 *   node hugo/scripts/inventory-pages.mjs --no-github           # skip the GitHub "Contributor" check
 *   other: --since=2026-01-01 --min-commits=2 --min-months=1 --repo=layer5io/layer5 --no-trailing-slash --out=FILE --root=DIR
 *
 * Needs Node >= 18 and @babel/parser, @babel/traverse, js-yaml (normally already in node_modules via
 * Gatsby; otherwise: npm i -D @babel/parser @babel/traverse js-yaml).
 * Owners need history: git fetch upstream master --shallow-since=2026-01-01
 */
/* global process, console, fetch, URL, AbortSignal */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";
import * as yamlNs from "js-yaml";

const traverse = traverseModule.default ?? traverseModule;
const yaml = yamlNs.default ?? yamlNs;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => args.find((a) => a.startsWith(`--${n}=`))?.split("=").slice(1).join("=");
const ROOT = opt("root") ? path.resolve(opt("root")) : path.resolve(__dirname, "../..");
const SRC = path.join(ROOT, "src");
const PAGES = path.join(SRC, "pages");
const OUT = opt("out") ?? path.join(ROOT, "hugo/data/pages-inventory.yaml");
const TRAILING = !flag("no-trailing-slash");
const SINCE = opt("since") ?? "2026-01-01";
const MIN_COMMITS = Number(opt("min-commits") ?? 2);
const MIN_MONTHS = Number(opt("min-months") ?? 1);
const REF = opt("ref") ?? ["upstream/master", "upstream/main"].find((r) => {
  try { execFileSync("git", ["rev-parse", "--verify", "--quiet", r], { cwd: ROOT, stdio: "ignore" }); return true; } catch { return false; }
});
const GITHUB_REPO = opt("repo") ?? "layer5io/layer5";
const USE_GITHUB = !flag("no-github");
const PHASE3_ISSUES = {
  "P3-10": "Pages: Company + legal",
  "P3-11": "Pages: home, products, solutions",
  "P3-12": "Pages: community + careers",
  "P3-13": "Pages: learn, projects, landscape",
};
const RULES = [
  [/^\/$/, "Products", "P3-11"],
  [/^\/company\/news(\/|$)/, "Blog/News/Resources", "P3-10"],
  [/^\/(blog|resources)(\/|$)/, "Blog/News/Resources", "P3-13"],
  [/^\/(cloud-native-management|meshery|kanvas|pricing|playground|products|embed|docker-extension-meshery|deploy-service-mesh)(\/|$)/, "Products", "P3-11"],
  [/^\/solutions(\/|$)/, "Solutions", "P3-11"],
  [/^\/(company|legal|privacy|terms|trademark|partners)(\/|$)/, "Company", "P3-10"],
  [/^\/(404|thank-you|subscribe|unsubscribe|unsubscribed)(\/|$)/, "Company", "P3-10"],
  [/^\/(community|careers|newcomers)(\/|$)/, "Community", "P3-12"],
  [/^\/(learn|landscape|service-mesh-landscape)(\/|$)/, "Learn", "P3-13"],
  [/^\/projects(\/|$)/, "Projects/Sistent", "P3-13"],
];
const SPECIAL = {
  "/404/": {
    kind: "error-page",
    note: "Production returns 200 both with and without the trailing slash (every other page 301s the slashless form). Hugo serves this from its 404 template, not a normal route.",
  },
};
// Helper-looking files in src/pages (styling helpers, stories, _private files) are not routes.
// They are excluded from pages, URLs, phase counts and owner history.
const HELPER_RE = /\.styles?\.[jt]sx?$|\.stories\.|(^|\/)_[^/]*$/;
const MAINTAINERS = ["leecalcote", "lee calcote", "maanvi212006"];
const EXCLUDE = new Set(
  [...MAINTAINERS, ...(opt("exclude") ?? "").split(",")]
    .map((s) => s.trim().replace(/^@/, "").toLowerCase())
    .filter(Boolean)
);
const NO_OWNER_AREAS = new Set(["Unassigned"]);
const COMPONENT_ROOTS = ["src/components"];
const FEATURE_MAP = [
  [/^(gsap|@gsap\/.*)$/, "gsap"],
  [/^(cytoscape.*|simple-react-cytoscape)$/, "cytoscape"],
  [/^@fullcalendar\//, "fullcalendar"],
  [/^(react-slick|slick-carousel|swiper|react-multi-carousel|react-responsive-carousel|embla-carousel.*|react-alice-carousel|keen-slider)$/, "carousel"],
  [/^(framer-motion|react-spring|@react-spring\/.*|react-reveal|aos|react-scroll-parallax|react-parallax)$/, "animation"],
  [/^react-countup$/, "counter-animation"],
  [/^react-accessible-accordion$/, "accordion"],
  [/^(lottie-react|lottie-web|react-lottie.*|@lottiefiles\/.*)$/, "lottie"],
  [/^(react-player|react-youtube|video\.js|plyr.*)$/, "video-player"],
  [/^(formik|react-hook-form|react-hubspot-form|@hubspot\/.*|@rjsf\/.*|react-mailchimp-subscribe|mailchimp.*)$/, "form-library"],
  [/^@layer5\/meshery-design-embed$/, "meshery-embed"],
  [/^(three|@react-three\/.*)$/, "webgl-3d"],
  [/^(d3.*|recharts|chart\.js|react-chartjs-2)$/, "charts"],
  [/^(algoliasearch|react-instantsearch.*|lunr|flexsearch|js-search|@docsearch\/.*)$/, "search"],
  [/^(react-typed|typed\.js|typewriter-effect)$/, "typing-animation"],
  [/^(@sistent\/.*|@layer5\/sistent.*)$/, "sistent-ui"],
  [/^(react-intersection-observer|react-visibility-sensor)$/, "scroll-observer"],
  [/^simple-react-lightbox$/, "lightbox"],
  [/^react-table$/, "data-table"],
  [/^react-tabs$/, "tabs"],
  [/^react-modal$/, "modal"],
  [/^react-select$/, "select-input"],
  [/^react-debounce-input$/, "debounced-input"],
  [/^prism-react-renderer$/, "code-highlighting"],
  [/^react-vertical-timeline-component$/, "timeline"],
  [/^axios$/, "live-fetch"],
  [/^react-share$/, "social-share"],
  [/^react-copy-to-clipboard$/, "copy-to-clipboard"],
  [/^react-countdown$/, "countdown"],
];
const IGNORE = /^(react|react-dom|gatsby|gatsby-.*|styled-components|prop-types|polished|@emotion\/.*|@babel\/.*|lodash.*|classnames|clsx|@mdx-js\/.*|@react-icons\/.*|@mui\/icons-material|react-icons|enzyme|@reach\/router|@loadable\/component|dedent|gbimage-bridge|regenerator-runtime)$/;
const DATA_FILE_RE = /(^|[/_.-])data([/_.-]|\.[jt]sx?$)/i;

const CODE_EXT = [".js", ".jsx", ".ts", ".tsx", ".mjs"];
const EXT_RE = /\.(jsx?|tsx?|mjs|mdx?)$/;
const ASSET_EXT = new Set([".svg", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".ico", ".css", ".scss", ".sass", ".less", ".woff", ".woff2", ".ttf", ".otf", ".pdf"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov"]);
const DATA_EXT = new Set([".json", ".yaml", ".yml", ".csv"]);
const JSX_FEATURES = { form: "form", video: "video", iframe: "iframe", canvas: "canvas", script: "inline-script" };
const rel = (abs) => path.relative(ROOT, abs).split(path.sep).join("/");
const isFile = (f) => { try { return fs.statSync(f).isFile(); } catch { return false; } };
const pkgName = (s) => (s.startsWith("@") ? s.split("/").slice(0, 2).join("/") : s.split("/")[0]);
const featureForPackage = (p) => FEATURE_MAP.find(([re]) => re.test(p))?.[1] ?? null;
const uniq = (list) => [...new Set(list)].sort();

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
}
const isPage = (f) => /\.(jsx?|tsx?|mdx?)$/.test(f) && !/\.(test|spec)\.|__tests__|\.d\.ts$/.test(f);

function urlFor(relFromPages) {
  const p = relFromPages.replace(EXT_RE, "").replace(/(^|\/)index$/, "");
  const u = "/" + p;
  return TRAILING && u !== "/" ? u + "/" : u;
}

function tryResolve(base) {
  if (isFile(base)) return base;
  for (const e of CODE_EXT) if (isFile(base + e)) return base + e;
  for (const e of CODE_EXT) if (isFile(path.join(base, "index" + e))) return path.join(base, "index" + e);
  return null;
}

function ownerOf(file) {
  const r = rel(file);
  if (r.startsWith("src/sections/")) {
    return { kind: "section", name: r.slice("src/sections/".length).replace(EXT_RE, "").replace(/\/index$/, "") };
  }
  for (const root of COMPONENT_ROOTS) {
    if (r.startsWith(root + "/")) {
      const top = r.slice(root.length + 1).split("/")[0].replace(EXT_RE, "");
      return { kind: "component", name: root === "src/components" ? top : `${root.replace(/^src\//, "")}/${top}` };
    }
  }
  return { kind: "module" };
}

function classify(from, spec) {
  const rooted = spec.startsWith(".") || spec.startsWith("src/");
  let base = null;
  if (spec.startsWith(".")) base = path.resolve(path.dirname(from), spec);
  else if (spec.startsWith("src/")) base = path.join(ROOT, spec);
  else if (!spec.startsWith("@")) base = path.join(SRC, spec); // gatsby root-import style
  const file = base && tryResolve(base);
  if (!file) return rooted ? { kind: "unresolved", spec } : { kind: "external", pkg: pkgName(spec) };
  const ext = path.extname(file).toLowerCase();
  if (VIDEO_EXT.has(ext)) return { kind: "video", file };
  if (ASSET_EXT.has(ext)) return { kind: "asset" };
  if (DATA_EXT.has(ext)) return { kind: "data", file, dataType: "static-file" };
  if (DATA_FILE_RE.test(rel(file))) return { kind: "data", file, dataType: "local-data" };
  if (rel(file).startsWith("src/collections/")) return { kind: "data", file, dataType: "collection-module" };
  return { kind: "local", file };
}

function gqlRootFields(text) {
  const start = text.indexOf("{");
  if (start < 0) return [];
  const fields = new Set();
  let depth = 0, paren = 0, tok = "";
  for (let k = start; k < text.length; k++) {
    const ch = text[k];
    if (/\w/.test(ch)) { tok += ch; continue; }
    if (tok) {
      const next = text.slice(k).trimStart()[0] ?? "";
      if (depth === 1 && paren === 0 && /[({:]/.test(next) && !/^\d/.test(tok)) fields.add(tok);
      tok = "";
    }
    if (ch === "{") depth++; else if (ch === "}") depth--;
    else if (ch === "(") paren++; else if (ch === ")") paren--;
  }
  return [...fields];
}

const analysisCache = new Map();

function analyze(abs) {
  if (analysisCache.has(abs)) return analysisCache.get(abs);
  const res = { imports: [], features: [], graphql: [], text: [], error: null };
  analysisCache.set(abs, res);
  const src = fs.readFileSync(abs, "utf8");
  const ext = path.extname(abs);
  if (ext === ".md" || ext === ".mdx") {
    for (const m of src.matchAll(/^import\s+(?:[^'"\n]*from\s+)?['"]([^'"]+)['"]/gm)) res.imports.push(m[1]);
    return res;
  }
  let ast;
  try {
    ast = parse(src, { sourceType: "unambiguous", plugins: ["jsx", ...(/\.tsx?$/.test(ext) ? ["typescript"] : [])] });
  } catch (e) { res.error = e.message; return res; }

  traverse(ast, {
    ImportDeclaration(p) { res.imports.push(p.node.source.value); },
    ExportAllDeclaration(p) { res.imports.push(p.node.source.value); },
    ExportNamedDeclaration(p) { if (p.node.source) res.imports.push(p.node.source.value); },
    CallExpression(p) {
      const c = p.node.callee, a0 = p.node.arguments[0];
      if (c.type === "Import" || c.name === "require") {
        if (a0?.type === "StringLiteral") res.imports.push(a0.value);
      } else if (c.name === "fetch" || c.name === "axios" || c.object?.name === "axios") res.features.push("live-fetch");
    },
    NewExpression(p) {
      const n = p.node.callee.name;
      if (n === "WebSocket" || n === "EventSource") res.features.push("websocket");
      if (n === "XMLHttpRequest") res.features.push("live-fetch");
    },
    MemberExpression(p) {
      const o = p.node.object?.name;
      if (o === "localStorage" || o === "sessionStorage") res.features.push("browser-storage");
    },
    JSXOpeningElement(p) {
      const n = p.node.name;
      if (n.type === "JSXIdentifier" && JSX_FEATURES[n.name]) res.features.push(JSX_FEATURES[n.name]);
    },
    TaggedTemplateExpression(p) {
      const tag = p.node.tag.name;
      if (tag === "graphql" || tag === "gql") {
        const fields = gqlRootFields(p.node.quasi.quasis.map((q) => q.value.cooked).join(" "));
        res.graphql.push(fields.length ? `graphql: ${fields.join(", ")}` : "graphql");
      }
    },
    StringLiteral(p) { res.text.push(p.node.value); if (p.node.value.includes("cloud.layer5.io")) res.features.push("cloud-layer5-api"); },
    TemplateElement(p) { const v = p.node.value.cooked ?? ""; res.text.push(v); if (v.includes("cloud.layer5.io")) res.features.push("cloud-layer5-api"); },
    JSXText(p) { res.text.push(p.node.value); },
  });
  return res;
}

const unmapped = new Map();
const unresolved = new Set();
const edgeCache = new Map();
function edges(file) {
  if (edgeCache.has(file)) return edgeCache.get(file);
  const out = [];
  for (const spec of analyze(file).imports) {
    const r = classify(file, spec);
    if (r.kind === "external" && !featureForPackage(r.pkg) && !IGNORE.test(r.pkg)) {
      unmapped.set(r.pkg, (unmapped.get(r.pkg) ?? new Set()).add(rel(file)));
    }
    if (r.kind === "unresolved") unresolved.add(`${rel(file)} -> ${r.spec}`);
    out.push(r);
  }
  edgeCache.set(file, out);
  return out;
}

const signalCache = new Map();
function signals(file) {
  if (signalCache.has(file)) return signalCache.get(file);
  const a = analyze(file);
  const features = [...a.features], data = [...a.graphql];
  for (const e of edges(file)) {
    if (e.kind === "external") { const t = featureForPackage(e.pkg); if (t) features.push(t); }
    else if (e.kind === "video") features.push("video-asset");
    else if (e.kind === "data") data.push(`${e.dataType}: ${rel(e.file)}`);
  }
  const s = { features, data };
  signalCache.set(file, s);
  return s;
}

function explore(entry, stopAtSections) {
  const out = { components: new Set(), sections: new Map(), features: [], data: [] };
  const seen = new Set(), queue = [[entry, false]];
  while (queue.length) {
    const [file, inComponent] = queue.shift();
    const key = `${file}|${inComponent}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const s = signals(file);
    out.features.push(...s.features);
    out.data.push(...s.data);
    for (const e of edges(file)) {
      if (e.kind !== "local") continue;
      const o = ownerOf(e.file);
      if (o.kind === "component") {
        if (!inComponent) out.components.add(o.name);
        queue.push([e.file, true]);
      } else if (o.kind === "section") {
        if (stopAtSections && !inComponent) { out.sections.set(o.name, e.file); continue; }
        queue.push([e.file, inComponent]);
      } else queue.push([e.file, inComponent]);
    }
  }
  return out;
}

function describeEntry(abs) {
  const pg = explore(abs, true);
  const allFeatures = [...pg.features], allData = [...pg.data];
  const ownerPaths = [rel(abs)];
  const sections = [];
  for (const [name, entry] of [...pg.sections].sort(([a], [b]) => (a < b ? -1 : 1))) {
    const s = explore(entry, false);
    allFeatures.push(...s.features); allData.push(...s.data);
    sections.push({ name, components: [...s.components].sort(), features: uniq(s.features), data: uniq(s.data) });
    ownerPaths.push(path.basename(entry).startsWith("index.") ? rel(path.dirname(entry)) : rel(entry));
  }
  return { sections, page_components: [...pg.components].sort(), features: uniq(allFeatures), data: uniq(allData), ownerPaths };
}

const ghCache = new Map();
const ownerSkipped = [];
class GhUnavailable extends Error {}
let ghFailStreak = 0, ghDown = false, ghUnverified = 0;
const sleepSync = (ms) => { const end = Date.now() + ms; while (Date.now() < end); };   // short pause between retries

function gh(apiPath) {
  if (ghDown) throw new GhUnavailable("GitHub was unreachable earlier in this run");
  let last = "";
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const out = JSON.parse(execFileSync("gh", ["api", apiPath], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 45000 }));
      ghFailStreak = 0;
      return out;
    } catch (e) {
      last = String(e.stderr || e.message).split("\n")[0].replace(/^Get "[^"]*": /, "");
      if (/auth login|not logged in|bad credentials|HTTP 401|GH_TOKEN/i.test(last)) {
        throw new Error(`GitHub login problem: ${last}. Run "gh auth login", or use --no-github.`);
      }
      if (attempt < 3) sleepSync(2000 * attempt);
    }
  }
  if (++ghFailStreak >= 2) ghDown = true;
  throw new GhUnavailable(last);
}
function loginFor(email) {
  const k = `login:${email}`;
  if (!ghCache.has(k)) ghCache.set(k, gh(`repos/${GITHUB_REPO}/commits?author=${encodeURIComponent(email)}&per_page=1`)[0]?.author?.login ?? null);
  return ghCache.get(k);
}
function associationFor(login) {
  const k = `assoc:${login}`;
  if (!ghCache.has(k)) {
    const q = encodeURIComponent(`repo:${GITHUB_REPO} is:pr is:merged author:${login}`);
    ghCache.set(k, gh(`search/issues?q=${q}&per_page=1&sort=created&order=desc`).items?.[0]?.author_association ?? "UNKNOWN");
  }
  return ghCache.get(k);
}

function rankCandidates(paths) {
  let log;
  try {
    log = execFileSync("git", ["log", "--no-merges", `--since=${SINCE}`, "--format=%aN%x09%aE%x09%ad", "--date=format:%Y-%m", ...(REF ? [REF] : []), "--", ...paths],
      { cwd: ROOT, encoding: "utf8", maxBuffer: 256 * 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] });
  } catch (e) {
    ownerSkipped.push(`git history unavailable (${e.message.split("\n")[0]})`);
    return [];
  }
  const by = new Map();
  for (const line of log.split("\n").filter(Boolean)) {
    const [name, email, month] = line.split("\t");
    if (/\[bot\]|dependabot|github-actions|renovate/i.test(`${name} ${email}`)) continue;
    const m = email.match(/^(?:\d+\+)?([^@]+)@users\.noreply\.github\.com$/);
    const login = m ? m[1] : null;
    if ([name, email, login].some((x) => x && EXCLUDE.has(x.toLowerCase()))) continue;
    const key = login ?? email.toLowerCase();
    const e = by.get(key) ?? { name, email, login, commits: 0, months: new Set() };
    e.commits++; e.months.add(month); by.set(key, e);
  }
  return [...by.values()]
    .filter((e) => e.commits >= MIN_COMMITS && e.months.size >= MIN_MONTHS)
    .map((e) => ({ ...e, months: e.months.size }));
}

function assignOwners(areaPaths) {
  const owners = {}, pairs = [];
  for (const [area, paths] of [...areaPaths].sort(([a], [b]) => (a < b ? -1 : 1))) {
    if (NO_OWNER_AREAS.has(area)) { owners[area] = { owner_status: "unassigned", evidence: "placeholder area, no owner proposed" }; continue; }
    owners[area] = { owner_status: "unassigned", evidence: `no eligible contributor with >= ${MIN_COMMITS} commits across >= ${MIN_MONTHS} months since ${SINCE}` };
    for (const c of rankCandidates([...paths].sort())) pairs.push({ area, ...c });
  }
  pairs.sort((a, b) => b.commits - a.commits || b.months - a.months || a.area.localeCompare(b.area));

  const used = new Set();
  for (const p of pairs) {
    if (owners[p.area].proposed_owner) continue;
    let login = p.login, assoc = null;
    try {
      if (USE_GITHUB && !login) login = loginFor(p.email);
      if (USE_GITHUB && !login) { ownerSkipped.push(`${p.area}: ${p.name} <${p.email}> has no linked GitHub account`); continue; }
      if (login && EXCLUDE.has(login.toLowerCase())) { ownerSkipped.push(`${p.area}: @${login} is excluded (maintainer)`); continue; }
      if (used.has((login ? `@${login}` : p.name).toLowerCase())) { ownerSkipped.push(`${p.area}: ${login ? `@${login}` : p.name} already owns another area`); continue; }
      if (USE_GITHUB) assoc = associationFor(login);
    } catch (e) {
      if (!(e instanceof GhUnavailable)) throw e;
      ghUnverified++;
      ownerSkipped.push(`${p.area}: ${p.login ? `@${p.login}` : p.name} could not be checked on GitHub (${e.message})`);
      continue;
    }
    const id = login ? `@${login}` : p.name;
    if (USE_GITHUB && assoc !== "CONTRIBUTOR") { ownerSkipped.push(`${p.area}: ${id} is ${assoc}, not CONTRIBUTOR`); continue; }
    used.add(id.toLowerCase());
    owners[p.area] = { proposed_owner: id, owner_status: "proposed", evidence: `${p.commits} commits across ${p.months} months since ${SINCE}${USE_GITHUB ? "; GitHub: CONTRIBUTOR" : ""}` };
  }
  return owners;
}

const exists = (p) => fs.existsSync(p) || Boolean(tryResolve(p));

function selfCheck(doc, files) {
  const problems = [];
  if (doc.pages.length !== files.length) problems.push(`rows (${doc.pages.length}) != page files (${files.length})`);
  const urls = new Set();
  for (const r of doc.pages) {
    if (!isFile(path.join(ROOT, r.source))) problems.push(`${r.url}: source file missing: ${r.source}`);
    if (!PHASE3_ISSUES[r.phase3]) problems.push(`${r.url}: no target issue (phase3 is "${r.phase3}")`);
    if (!r.duplicate_of) {
      if (urls.has(r.url)) problems.push(`duplicate URL not flagged: ${r.url}`);
      urls.add(r.url);
    }
    for (const s of r.sections) {
      if (!exists(path.join(SRC, "sections", s.name))) problems.push(`${r.url}: section not found: ${s.name}`);
      for (const c of s.components) if (!exists(c.includes("/") ? path.join(SRC, c) : path.join(SRC, "components", c))) problems.push(`${r.url}: component not found: ${c}`);
    }
    for (const c of r.page_components) if (!exists(c.includes("/") ? path.join(SRC, c) : path.join(SRC, "components", c))) problems.push(`${r.url}: component not found: ${c}`);
    const fromSections = new Set(r.sections.flatMap((s) => s.features));
    for (const f of fromSections) if (!r.features.includes(f)) problems.push(`${r.url}: page features missing "${f}" from a section`);
  }
  for (const u of Object.keys(SPECIAL)) if (!doc.pages.some((r) => r.url === u)) problems.push(`SPECIAL lists ${u} but no page has that URL`);
  return problems;
}

function regexImports(src) {
  const code = src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  const out = new Set();
  for (const m of code.matchAll(/(?:\bfrom\s*|\bimport\s*\(?\s*|\brequire\s*\(\s*)['"]([^'"\n]+)['"]/g)) out.add(m[1]);
  return out;
}

function crossCheck() {
  const diffs = [], notes = [];
  for (const [file, a] of analysisCache) {
    if (/\.mdx?$/.test(file) || a.error) continue;
    const babel = new Set(a.imports), rx = regexImports(fs.readFileSync(file, "utf8"));
    const onlyBabel = [...babel].filter((x) => !rx.has(x));
    const embedded = a.text.join("\n");
    const onlyRegexReal = [], onlyRegexText = [];
    for (const x of [...rx].filter((x) => !babel.has(x))) (embedded.includes(x) ? onlyRegexText : onlyRegexReal).push(x);
    if (onlyBabel.length || onlyRegexReal.length) diffs.push(`${rel(file)}: only Babel [${onlyBabel}] only regex [${onlyRegexReal}]`);
    if (onlyRegexText.length) notes.push(`${rel(file)}: regex matched [${onlyRegexText}] only inside string/template/JSX text (a code sample, not an import)`);
  }
  return { diffs, notes };
}

async function sitemapPaths(url) {
  const xml = await (await fetch(url)).text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (/<sitemapindex/.test(xml)) {
    const all = [];
    for (const l of locs) all.push(...(await sitemapPaths(l)));
    return all;
  }
  return locs.map((l) => new URL(l).pathname);
}
const normUrl = (u) => (u === "/" ? "/" : u.replace(/\/+$/, ""));

async function verifyLive(rows, base) {
  const squash = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const dataUrl = (u) => {
    const p = u.replace(/^\/|\/$/g, "");
    return `${base.replace(/\/$/, "")}/page-data/${p || "index"}${p === "404" ? ".html" : ""}/page-data.json`;
  };
  const targets = rows.filter((r) => !r.dynamic && !r.duplicate_of);
  const res = { ok: 0, mismatch: [], unreachable: [] };
  let i = 0;
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (i < targets.length) {
      const r = targets[i++];
      try {
        const resp = await fetch(dataUrl(r.url), { signal: AbortSignal.timeout(15000) });
        if (!resp.ok) { res.unreachable.push(`${r.url} (HTTP ${resp.status})`); continue; }
        const chunk = (await resp.json()).componentChunkName ?? "";
        if (squash(chunk.replace(/^component---/, "")) === squash(r.source)) res.ok++;
        else res.mismatch.push(`${r.url}: production serves ${chunk || "(none)"}, inventory says ${r.source}`);
      } catch (e) { res.unreachable.push(`${r.url} (${e.name})`); }
    }
  }));
  return res;
}

async function main() {
  if (!fs.existsSync(PAGES)) throw new Error(`No src/pages under ${ROOT}. Run on a branch that still has the Gatsby source.`);
  const allPageDirFiles = walk(PAGES);
  const pageCandidates = allPageDirFiles.filter(isPage).sort();
  const files = pageCandidates.filter((f) => !HELPER_RE.test(rel(f)));
  const helperFiles = pageCandidates.filter((f) => HELPER_RE.test(rel(f))).map(rel);
  const skippedFiles = allPageDirFiles.filter((f) => !isPage(f)).map(rel).sort();
  const rows = [], firstByUrl = new Map(), duplicates = [], unmatched = [];
  const areaPaths = new Map();

  for (const abs of files) {
    const relPage = path.relative(PAGES, abs).split(path.sep).join("/");
    const url = urlFor(relPage);
    const d = describeEntry(abs);

    const rule = RULES.find(([re]) => re.test(url));
    if (!rule) unmatched.push(url);
    const [, area, phase3] = rule ?? [null, "Unassigned", "needs decision"];
    const set = areaPaths.get(area) ?? new Set();
    d.ownerPaths.forEach((p) => set.add(p));
    areaPaths.set(area, set);

    const row = {
      url, source: rel(abs), area, phase3,
      owner_status: "unassigned", status: "not started",
      ...(SPECIAL[url] ? { special: SPECIAL[url].kind, note: SPECIAL[url].note } : {}),
      ...(/[[\]{}]/.test(relPage) ? { dynamic: true } : {}),
      sections: d.sections, page_components: d.page_components,
      features: d.features, data: d.data,
    };
    if (firstByUrl.has(url)) { row.duplicate_of = firstByUrl.get(url); duplicates.push(`${url}: ${row.source} vs ${row.duplicate_of}`); }
    else firstByUrl.set(url, row.source);
    rows.push(row);
  }

  const areaOwners = flag("no-owners")
    ? Object.fromEntries([...areaPaths.keys()].sort().map((a) => [a, { owner_status: "unassigned", evidence: "skipped (--no-owners)" }]))
    : assignOwners(areaPaths);
  for (const r of rows) {
    const o = areaOwners[r.area];
    if (o.proposed_owner) r.proposed_owner = o.proposed_owner;
    r.owner_status = o.owner_status;
  }

  const ordered = rows.map(({ url, source, area, phase3, proposed_owner, owner_status, status, ...rest }) =>
    ({ url, source, area, phase3, ...(proposed_owner ? { proposed_owner } : {}), owner_status, status, ...rest }));
  ordered.sort((a, b) => a.phase3.localeCompare(b.phase3) || a.area.localeCompare(b.area) || a.url.localeCompare(b.url));

  const owners = {};
  for (const [area, o] of Object.entries(areaOwners)) {
    if (!o.proposed_owner) continue;
    owners[o.proposed_owner] = {
      area, evidence: o.evidence,
      pages: ordered.filter((r) => r.area === area).length,
    };
  }

  const issues = {};
  for (const [id, title] of Object.entries(PHASE3_ISSUES)) {
    const inIssue = ordered.filter((r) => r.phase3 === id);
    issues[id] = { title, count: inIssue.length, urls: inIssue.map((r) => r.url) };
  }

  const byPhase = {};
  ordered.forEach((r) => { byPhase[r.phase3] = (byPhase[r.phase3] ?? 0) + 1; });
  const doc = {
    generated: new Date().toISOString().slice(0, 10),
    source: "generated by hugo/scripts/inventory-pages.mjs from src/pages (do not edit by hand)",
    url_convention: TRAILING ? "trailing-slash (matches hugo.yaml; final call is #8307)" : "no-trailing-slash",
    owner_window: `commits since ${SINCE}${REF ? ` on ${REF}` : ""}`,
    owner_rule: `one owner per area, no repeats; ${USE_GITHUB ? "GitHub author_association must be CONTRIBUTOR; " : ""}maintainers excluded`,
    totals: {
      page_files: files.length, unique_urls: firstByUrl.size, dynamic: ordered.filter((r) => r.dynamic).length,
      special: ordered.filter((r) => r.special).length, by_phase3: byPhase,
    },
    issues,
    area_owners: areaOwners,
    owners,
    helper_files: helperFiles,
    pages: ordered,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `# ${doc.source}\n` + yaml.dump(doc, { lineWidth: -1, noRefs: true }));

  // ---- report
  console.log(`Wrote ${rel(OUT)}: ${files.length} page files -> ${firstByUrl.size} unique URLs.`);
  console.log(`src/pages holds ${allPageDirFiles.length} files: ${files.length} counted as pages, ${skippedFiles.length} not.`);
  if (skippedFiles.length) console.log(`  not counted: ${skippedFiles.join(", ")}`);
  if (helperFiles.length) console.log(`  helper files excluded (listed under helper_files, not pages or routes): ${helperFiles.join(", ")}`);
  const special = ordered.filter((r) => r.special);
  if (special.length) console.log(`Special pages kept on purpose: ${special.map((r) => `${r.url} (${r.special})`).join(", ")}`);
  console.log(`Owner history: ${REF ?? "HEAD"} (commits since ${SINCE}; >= ${MIN_COMMITS} commits across >= ${MIN_MONTHS} months)`);
  try {
    if (!flag("no-owners") && execFileSync("git", ["rev-parse", "--is-shallow-repository"], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() === "true") {
      console.log(`Note: shallow clone, so owner evidence may be incomplete. Run: git fetch upstream master --shallow-since=${SINCE}`);
    }
  } catch { /* not a git repo */ }
  console.log("\nProposed owners:");
  for (const [a, o] of Object.entries(areaOwners)) console.log(`  ${a}: ${o.proposed_owner ?? "(unassigned)"}  [${o.evidence}]`);
  if (ownerSkipped.length) console.log(`\nOwner candidates skipped:\n  ${[...new Set(ownerSkipped)].join("\n  ")}`);
  if (ghUnverified) console.log(`\n${ghUnverified} owner candidate(s) could not be checked because GitHub did not answer, so they were NOT proposed. Check your connection (curl -sI https://api.github.com), then re-run. --no-github skips the Contributor check instead.`);
  if (duplicates.length) console.log(`\nDuplicate URLs (two files map to one route):\n  ${duplicates.join("\n  ")}`);
  if (unmatched.length) console.log(`\nNo area/phase3 rule matched (marked needs decision):\n  ${unmatched.join("\n  ")}`);
  if (unmapped.size) {
    console.log("\nUnmapped packages (add to FEATURE_MAP or IGNORE, then re-run):");
    [...unmapped].sort((a, b) => b[1].size - a[1].size).forEach(([p, f]) => console.log(`  ${p}  (${f.size} files)`));
  }
  const counts = new Map();
  ordered.forEach((r) => r.sections.forEach((s) => counts.set(s.name, (counts.get(s.name) ?? 0) + 1)));
  const common = [...counts].filter(([, n]) => n >= ordered.length * 0.4);
  if (common.length) console.log(`\nSections on >=40% of pages (probably layout rather than page content):\n  ${common.map(([n, c]) => `${n} (${c})`).join("\n  ")}`);
  if (unresolved.size) console.log(`\nUnresolved local imports (alias or missing file?):\n  ${[...unresolved].slice(0, 20).join("\n  ")}`);
  const parseErrors = [...analysisCache].filter(([, a]) => a.error).map(([f, a]) => `${rel(f)}: ${a.error}`);
  if (parseErrors.length) console.log(`\nParse errors (those files were skipped):\n  ${parseErrors.join("\n  ")}`);

  // ---- checks
  const problems = selfCheck(doc, files);
  console.log(problems.length ? `\nSelf-check FAILED:\n  ${problems.join("\n  ")}` : `\nSelf-check: OK (${ordered.length} rows, every file and folder listed exists)`);
  if (problems.length) process.exitCode = 1;

  if (flag("cross-check")) {
    const { diffs, notes } = crossCheck();
    if (notes.length) console.log(`\nCross-check notes (benign, Babel is right):\n  ${notes.join("\n  ")}`);
    console.log(diffs.length ? `\nCross-check FAILED (Babel vs regex import scan differ):\n  ${diffs.join("\n  ")}` : `\nCross-check: OK (Babel and regex agree on imports in ${analysisCache.size} files)`);
    if (diffs.length) process.exitCode = 1;
  }
  const sm = opt("sitemap");
  if (sm) {
    const live = new Set((await sitemapPaths(sm)).map(normUrl));
    const missing = ordered.filter((r) => !r.dynamic && !r.duplicate_of && !live.has(normUrl(r.url))).map((r) => r.url);
    console.log(`\nSitemap check (${live.size} live URLs): ${missing.length ? `${missing.length} inventory URLs not in the sitemap:\n  ${missing.join("\n  ")}` : "every inventory URL is in the sitemap"}`);
  }
  if (flag("verify-live") || opt("verify-live")) {
    const base = opt("verify-live") ?? "https://layer5.io";
    const r = await verifyLive(ordered, base);
    console.log(`\nProduction check (${base}): ${r.ok} verified, ${r.mismatch.length} mismatched, ${r.unreachable.length} unreachable`);
    if (r.mismatch.length) console.log(`  mismatch:\n    ${r.mismatch.join("\n    ")}`);
    if (r.unreachable.length) console.log(`  unreachable (not verified):\n    ${r.unreachable.join("\n    ")}`);
    if (r.mismatch.length) process.exitCode = 1;
  }
  const show = opt("print");
  if (show) {
    const r = ordered.find((x) => x.url === show);
    console.log(r ? `\n${yaml.dump([r], { lineWidth: -1 })}` : `\n--print: no page with url ${show}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });