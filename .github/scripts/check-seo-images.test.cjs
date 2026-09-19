const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const {
  findLocalSeoImages,
  validateSeoImages,
} = require("./check-seo-images.cjs");

function createFixture() {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), "seo-images-"));
  const sourceRoot = path.join(repoRoot, "src");
  const staticRoot = path.join(repoRoot, "static");
  const publicRoot = path.join(repoRoot, "public");
  fs.mkdirSync(sourceRoot, { recursive: true });
  fs.mkdirSync(staticRoot, { recursive: true });
  fs.mkdirSync(publicRoot, { recursive: true });

  return {
    repoRoot,
    sourceRoot,
    assetRoots: [staticRoot, publicRoot],
  };
}

function writeFile(root, relativePath, contents = "") {
  const filePath = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

test("extracts literal image props from multiline SEO tags", () => {
  const source = `
export const Head = () => (
  <SEO
    title="Platform Engineering"
    image={"/images/platform.webp"}
  />
);`;

  assert.deepEqual(findLocalSeoImages(source), [
    { imagePath: "/images/platform.webp", line: 3 },
  ]);
});

test("ignores external and dynamic SEO image props", () => {
  const source = `
<SEO image="https://example.com/image.webp" />
<SEO image={dynamicImage} />`;

  assert.deepEqual(findLocalSeoImages(source), []);
});

test("accepts an existing root-relative asset", (context) => {
  const fixture = createFixture();
  context.after(() => fs.rmSync(fixture.repoRoot, { recursive: true, force: true }));
  writeFile(fixture.sourceRoot, "page.js", '<SEO image="/images/card.webp" />');
  writeFile(fixture.assetRoots[0], "images/card.webp", "image");

  assert.deepEqual(validateSeoImages(fixture), []);
});

test("reports a missing local asset with its source line", (context) => {
  const fixture = createFixture();
  context.after(() => fs.rmSync(fixture.repoRoot, { recursive: true, force: true }));
  writeFile(
    fixture.sourceRoot,
    "pages/missing.js",
    'const Head = () => (\n  <SEO image="/images/missing.webp" />\n);',
  );

  const failures = validateSeoImages(fixture);
  assert.equal(failures.length, 1);
  assert.match(failures[0], /src[\\/]pages[\\/]missing\.js:2/);
  assert.match(failures[0], /missing local SEO image \/images\/missing\.webp/);
});

test("rejects a relative local image path", (context) => {
  const fixture = createFixture();
  context.after(() => fs.rmSync(fixture.repoRoot, { recursive: true, force: true }));
  writeFile(fixture.sourceRoot, "page.jsx", '<SEO image="images/card.webp" />');

  const failures = validateSeoImages(fixture);
  assert.equal(failures.length, 1);
  assert.match(failures[0], /invalid local SEO image images\/card\.webp/);
});
