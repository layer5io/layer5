#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const sourceRoot = path.join(repoRoot, "src");
const assetRoots = [
  path.join(repoRoot, "static"),
  path.join(repoRoot, "public"),
];
const sourceExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".mdx"]);

function walk(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolutePath) : [absolutePath];
  });
}

function lineNumberAt(source, index) {
  return source.slice(0, index).split(/\r?\n/).length;
}

function findLocalSeoImages(source) {
  const references = [];
  const seoTagPattern = /<SEO\b[\s\S]*?>/g;
  const imagePropPattern =
    /\bimage\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*["']([^"']+)["']\s*\})/;

  for (const tagMatch of source.matchAll(seoTagPattern)) {
    const imageMatch = tagMatch[0].match(imagePropPattern);
    if (!imageMatch) continue;

    const imagePath = imageMatch[1] || imageMatch[2] || imageMatch[3];
    if (!imagePath.startsWith("/") || imagePath.startsWith("//")) continue;

    references.push({
      imagePath,
      line: lineNumberAt(source, tagMatch.index || 0),
    });
  }

  return references;
}

const failures = [];

for (const sourceFile of walk(sourceRoot)) {
  if (!sourceExtensions.has(path.extname(sourceFile))) continue;

  const source = fs.readFileSync(sourceFile, "utf8");
  const relativeSource = path.relative(repoRoot, sourceFile);

  for (const reference of findLocalSeoImages(source)) {
    const pathname = reference.imagePath.split(/[?#]/, 1)[0];
    const relativeAsset = path.posix
      .normalize(pathname)
      .replace(/^\/+/, "");

    if (relativeAsset.startsWith("../") || path.isAbsolute(relativeAsset)) {
      failures.push(
        `${relativeSource}:${reference.line} invalid local SEO image path ${reference.imagePath}`,
      );
      continue;
    }

    const candidates = assetRoots.map((root) => path.join(root, relativeAsset));
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      failures.push(
        `${relativeSource}:${reference.line} missing local SEO image ${reference.imagePath} (expected ${path.relative(repoRoot, candidates[0])} or ${path.relative(repoRoot, candidates[1])})`,
      );
    }
  }
}

if (failures.length > 0) {
  console.error("Local SEO image validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("All local SEO image references resolve.");
