#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const defaultRoots = ["src", "content-learn"];
const extensions = new Set([".js", ".jsx", ".ts", ".tsx"]);
const ignoreDirs = new Set([
  "node_modules",
  ".git",
  ".cache",
  "public",
  "static",
  "scripts",
  "__generated__"
]);

const targets = process.argv.slice(2);
const roots = targets.length ? targets : defaultRoots;
const issues = [];

const parserOptions = {
  sourceType: "unambiguous",
  errorRecovery: true,
  plugins: [
    "jsx",
    "typescript",
    "classProperties",
    "classPrivateProperties",
    "classPrivateMethods",
    ["decorators", { decoratorsBeforeExport: true }],
    "dynamicImport",
    "exportDefaultFrom",
    "exportNamespaceFrom",
    "importAssertions",
    "topLevelAwait"
  ]
};

function isSkippableDir(name) {
  return ignoreDirs.has(name) || name.startsWith(".");
}

function collectFiles(entry) {
  const files = [];
  for (const root of entry) {
    const absRoot = path.resolve(process.cwd(), root);
    if (!fs.existsSync(absRoot)) {
      continue;
    }
    traverseDir(absRoot, files);
  }
  return files;
}

function traverseDir(dir, bucket) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (isSkippableDir(entry.name)) {
        continue;
      }
      traverseDir(path.join(dir, entry.name), bucket);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (extensions.has(ext)) {
        bucket.push(path.join(dir, entry.name));
      }
    }
  }
}

function hasAttribute(attrs, attrName) {
  return attrs.some((attr) => {
    if (attr.type !== "JSXAttribute" || !attr.name) {
      return false;
    }
    return attr.name.name === attrName;
  });
}

function getJsxName(node) {
  if (!node) {
    return null;
  }
  if (node.type === "JSXIdentifier") {
    return node.name;
  }
  if (node.type === "JSXMemberExpression") {
    return getJsxName(node.object) + "." + getJsxName(node.property);
  }
  if (node.type === "JSXNamespacedName") {
    return `${node.namespace.name}:${node.name.name}`;
  }
  return null;
}

function report(file, node, message) {
  const location = node.loc ? `${node.loc.start.line}:${node.loc.start.column + 1}` : "unknown";
  issues.push({ file, location, message });
}

function analyzeFile(file) {
  const code = fs.readFileSync(file, "utf8");
  let ast;
  try {
    ast = parser.parse(code, { ...parserOptions, sourceFilename: file });
  } catch (err) {
    console.warn(`Skipping ${path.relative(process.cwd(), file)}: ${err.message}`);
    return;
  }

  traverse(ast, {
    JSXOpeningElement(pathRef) {
      const name = getJsxName(pathRef.node.name);
      if (!name) {
        return;
      }
      if (name === "GatsbyImage" && !hasAttribute(pathRef.node.attributes, "image")) {
        report(file, pathRef.node, "Missing required 'image' prop on <GatsbyImage />");
      }
    }
  });
}

const filesToInspect = collectFiles(roots);
filesToInspect.forEach(analyzeFile);

if (issues.length) {
  console.error("Found Gatsby image issues:\n");
  for (const issue of issues) {
    const relative = path.relative(process.cwd(), issue.file);
    console.error(`${relative}:${issue.location} - ${issue.message}`);
  }
  console.error(`\nTotal issues: ${issues.length}`);
  process.exitCode = 1;
} else {
  console.log("No missing 'image' props detected on GatsbyImage components.");
}
