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

function findSeoOpeningTags(source) {
  const tags = [];
  const startPattern = /<SEO(?=[\s/>])/g;

  for (const startMatch of source.matchAll(startPattern)) {
    const start = startMatch.index || 0;
    let quote = null;
    let escaped = false;
    let braceDepth = 0;

    for (let index = start + startMatch[0].length; index < source.length; index++) {
      const character = source[index];

      if (quote) {
        if (escaped) {
          escaped = false;
        } else if (character === "\\") {
          escaped = true;
        } else if (character === quote) {
          quote = null;
        }
        continue;
      }

      if (character === '"' || character === "'" || character === "`") {
        quote = character;
      } else if (character === "{") {
        braceDepth++;
      } else if (character === "}" && braceDepth > 0) {
        braceDepth--;
      } else if (character === ">" && braceDepth === 0) {
        tags.push({
          index: start,
          text: source.slice(start, index + 1),
        });
        break;
      }
    }
  }

  return tags;
}

function findLocalSeoImages(source) {
  const references = [];
  const imagePropPattern =
    /\bimage\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*["']([^"']+)["']\s*\})/;

  for (const tag of findSeoOpeningTags(source)) {
    const imageMatch = tag.text.match(imagePropPattern);
    if (!imageMatch) continue;

    const imagePath = imageMatch[1] || imageMatch[2] || imageMatch[3];
    if (!imagePath.startsWith("/") || imagePath.startsWith("//")) continue;

    references.push({
      imagePath,
      line: lineNumberAt(source, tag.index),
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
