#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const packageJsonPath = path.join(repoRoot, "package.json");
const contributingPath = path.join(repoRoot, "CONTRIBUTING.md");

const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const contributing = fs.readFileSync(contributingPath, "utf8");
const lines = contributing.split(/\r?\n/);

function getPackageVersion(name) {
  const sections = [
    pkg.dependencies,
    pkg.devDependencies,
    pkg.peerDependencies,
    pkg.optionalDependencies,
  ];

  for (const section of sections) {
    if (section?.[name]) {
      return section[name];
    }
  }

  return undefined;
}

const reactVersion = getPackageVersion("react");
const gatsbyVersion = getPackageVersion("gatsby");

if (!reactVersion || !gatsbyVersion) {
  console.error("Missing react or gatsby version in package.json dependency sections.");
  process.exit(1);
}

const reactMajor = Number((reactVersion.match(/\d+/) || [])[0]);
const gatsbyMajor = Number((gatsbyVersion.match(/\d+/) || [])[0]);

const issues = [];

function addIssue(line, message) {
  issues.push(`CONTRIBUTING.md:${line} ${message}`);
}

function findLineFromIndex(index) {
  let offset = 0;
  for (let i = 0; i < lines.length; i++) {
    offset += lines[i].length + 1;
    if (offset > index) return i + 1;
  }
  return lines.length;
}

// Check explicit dependency snippets in docs.
for (const match of contributing.matchAll(/"react"\s*:\s*"([^"]+)"/g)) {
  const found = match[1];
  if (found !== reactVersion) {
    addIssue(
      findLineFromIndex(match.index || 0),
      `react version mismatch: found \"${found}\", expected \"${reactVersion}\"`,
    );
  }
}

for (const match of contributing.matchAll(/"gatsby"\s*:\s*"([^"]+)"/g)) {
  const found = match[1];
  if (found !== gatsbyVersion) {
    addIssue(
      findLineFromIndex(match.index || 0),
      `gatsby version mismatch: found \"${found}\", expected \"${gatsbyVersion}\"`,
    );
  }
}

// Check prose major-version references where they are explicitly mentioned.
for (const match of contributing.matchAll(/\bReact\s+(\d+)\b/g)) {
  const foundMajor = Number(match[1]);
  if (!Number.isNaN(foundMajor) && foundMajor !== reactMajor) {
    addIssue(
      findLineFromIndex(match.index || 0),
      `React major mismatch in prose: found ${foundMajor}, expected ${reactMajor}`,
    );
  }
}

for (const match of contributing.matchAll(/\bGatsby\s*\((\d+)(?:\.\d+)?(?:\.\d+)?\)/g)) {
  const foundMajor = Number(match[1]);
  if (!Number.isNaN(foundMajor) && foundMajor !== gatsbyMajor) {
    addIssue(
      findLineFromIndex(match.index || 0),
      `Gatsby major mismatch in prose: found ${foundMajor}, expected ${gatsbyMajor}`,
    );
  }
}

if (issues.length > 0) {
  console.error("Version reference guard failed. Update CONTRIBUTING.md to match package.json.");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("CONTRIBUTING.md version references match package.json.");
