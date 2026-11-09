#!/usr/bin/env node
/* eslint-env node */
/**
 * Regenerates `src/shims/mui-icons-material.js`.
 *
 * Some of our dependencies ship pre-bundled code that imports the whole
 * `@mui/icons-material` barrel. That barrel re-exports ~10,800 icon modules,
 * and webpack has to resolve and parse every one of them before tree shaking
 * can drop them again — it is by far the largest single contributor to the
 * module graph, in both the browser and the SSR compilation.
 *
 * `gatsby-node.js` aliases the exact specifier `@mui/icons-material` to the
 * generated shim (deep imports such as `@mui/icons-material/Add` are left
 * alone). This script scans `node_modules` for the icons those bundles
 * actually touch so the shim is derived rather than guessed.
 *
 * Run it after upgrading any dependency that pulls in MUI icons:
 *   npm run generate:mui-icon-shim
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const NODE_MODULES = path.join(ROOT, "node_modules");
const OUTPUT = path.join(ROOT, "src", "shims", "mui-icons-material.js");
const BARREL = /["']@mui\/icons-material["']/;

const walk = function* (dir, depth = 0) {
  if (depth > 6) return;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full, depth + 1);
    else if (/\.(js|mjs|cjs)$/.test(entry.name)) yield full;
  }
};

const iconsUsedBy = (source) => {
  const used = new Set();

  // ESM: import { ChevronLeft as a, Public as b } from "@mui/icons-material"
  for (const match of source.matchAll(
    /import\s*\{([^}]*)\}\s*from\s*["']@mui\/icons-material["']/g,
  )) {
    for (const binding of match[1].split(",")) {
      const name = binding
        .trim()
        .split(/\s+as\s+/)[0]
        .trim();
      if (/^[A-Z][A-Za-z0-9_]*$/.test(name)) used.add(name);
    }
  }

  // CJS: var ns = require("@mui/icons-material"); ... ns.ChevronLeft
  const namespaces = new Set();
  for (const match of source.matchAll(
    /(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:[\w$]+\()?require\(["']@mui\/icons-material["']\)/g,
  )) {
    namespaces.add(match[1]);
  }
  for (const ns of namespaces) {
    for (const match of source.matchAll(
      new RegExp(`\\b${ns.replace(/\$/g, "\\$")}\\.([A-Z][A-Za-z0-9_]*)`, "g"),
    )) {
      used.add(match[1]);
    }
  }

  return used;
};

const icons = new Set();
const sources = [];
for (const file of walk(NODE_MODULES)) {
  let source;
  try {
    source = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (!BARREL.test(source)) continue;
  const used = iconsUsedBy(source);
  if (used.size === 0) continue;
  sources.push(`${path.relative(ROOT, file)} (${[...used].sort().join(", ")})`);
  for (const icon of used) icons.add(icon);
}

const sorted = [...icons].sort();
const missing = sorted.filter(
  (icon) =>
    !fs.existsSync(
      path.join(NODE_MODULES, "@mui", "icons-material", `${icon}.js`),
    ),
);
if (missing.length) {
  console.error(
    `Refusing to write shim: no such icon(s) ${missing.join(", ")}`,
  );
  process.exit(1);
}

const banner = [
  "// GENERATED FILE — do not edit by hand.",
  "// Run `npm run generate:mui-icon-shim` to regenerate.",
  "//",
  "// `gatsby-node.js` aliases the exact specifier `@mui/icons-material` here so",
  "// that pre-bundled dependencies importing the barrel do not drag ~10,800 icon",
  "// modules into every webpack compilation. Deep imports are unaffected.",
  "//",
  "// Re-exported because these bundles import them from the barrel:",
  ...sources.map((line) => `//   ${line}`),
  "",
];

const body = sorted.map(
  (icon) => `export { default as ${icon} } from "@mui/icons-material/${icon}";`,
);

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, `${banner.join("\n")}${body.join("\n")}\n`);
console.info(
  `Wrote ${path.relative(ROOT, OUTPUT)} with ${sorted.length} icons.`,
);
