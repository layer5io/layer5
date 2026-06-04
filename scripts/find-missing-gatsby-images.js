#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const defaultRoots = ["src", "content-learn"];
const allowedExtensions = new Set([".js", ".jsx", ".ts", ".tsx"]);
const ignoredDirectories = new Set([
  "node_modules",
  ".git",
  ".cache",
  "public",
  "static",
]);

const scanTargets = process.argv.slice(2);
const rootsToScan = scanTargets.length > 0 ? scanTargets : defaultRoots;
const issues = [];

function collectFiles(targets) {
  const files = [];

  for (const target of targets) {
    const absoluteTarget = path.resolve(process.cwd(), target);

    if (!fs.existsSync(absoluteTarget)) {
      console.warn(`Skipping missing path: ${target}`);
      continue;
    }

    const stat = fs.statSync(absoluteTarget);

    if (stat.isFile()) {
      if (allowedExtensions.has(path.extname(absoluteTarget))) {
        files.push(absoluteTarget);
      }
      continue;
    }

    walkDirectory(absoluteTarget, files);
  }

  return files;
}

function walkDirectory(directory, files) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        walkDirectory(fullPath, files);
      }
      continue;
    }

    if (entry.isFile() && allowedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
}

function getJsxElementName(node) {
  if (!node) {
    return "";
  }

  if (node.type === "JSXIdentifier") {
    return node.name;
  }

  if (node.type === "JSXMemberExpression") {
    return `${getJsxElementName(node.object)}.${getJsxElementName(node.property)}`;
  }

  return "";
}

function hasImageProp(attributes) {
  return attributes.some((attribute) => {
    return (
      attribute.type === "JSXAttribute" &&
      attribute.name &&
      attribute.name.name === "image"
    );
  });
}

function validateFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8");

  let ast;

  try {
    ast = parser.parse(code, {
      sourceType: "unambiguous",
      plugins: [
        "jsx",
        "typescript",
        "classProperties",
        "classPrivateProperties",
        "classPrivateMethods",
        "dynamicImport",
        "exportDefaultFrom",
        "exportNamespaceFrom",
      ],
    });
  } catch (error) {
    console.warn(
      `Skipping ${path.relative(process.cwd(), filePath)}: ${error.message}`,
    );
    return;
  }

  traverse(ast, {
    JSXOpeningElement(pathRef) {
      const componentName = getJsxElementName(pathRef.node.name);

      if (componentName !== "GatsbyImage") {
        return;
      }

      if (!hasImageProp(pathRef.node.attributes)) {
        const location = pathRef.node.loc
          ? `${pathRef.node.loc.start.line}:${pathRef.node.loc.start.column + 1}`
          : "unknown";

        issues.push({
          filePath,
          location,
        });
      }
    },
  });
}

const files = collectFiles(rootsToScan);

files.forEach(validateFile);

if (issues.length > 0) {
  console.error("\nGatsby image validation failed.\n");
  console.error(
    "The following <GatsbyImage /> components are missing an explicit `image` prop:\n",
  );

  for (const issue of issues) {
    console.error(
      `${path.relative(process.cwd(), issue.filePath)}:${issue.location}`,
    );
  }

  console.error(`\nTotal issues found: ${issues.length}`);
  process.exit(1);
}

console.log(`Gatsby image validation passed. Checked ${files.length} file(s).`);
