/* eslint-env node */

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const { sourceFromComponent, toEditUrl } = require("./edit-link");

const ROOT = path.resolve(__dirname, "..", "..");
const REPO_URL = "https://github.com/layer5io/layer5";
const src = (...parts) => path.join(ROOT, ...parts);

describe("sourceFromComponent", () => {
  it("returns a plain component path unchanged", () => {
    const component = src("src", "pages", "404.js");
    assert.equal(sourceFromComponent(component), component);
  });

  it("prefers __contentFilePath over the template path", () => {
    const mdx = src(
      "src",
      "collections",
      "members",
      "Ibrahim Mbaziira",
      "index.mdx",
    );
    const component = `${src("src", "templates", "member-single.js")}?__contentFilePath=${mdx}`;

    assert.equal(sourceFromComponent(component), mdx);
  });

  it("decodes an encoded content path", () => {
    const mdx = src(
      "src",
      "collections",
      "members",
      "Ibrahim Mbaziira",
      "index.mdx",
    );
    const component = `${src("src", "templates", "member-single.js")}?__contentFilePath=${encodeURIComponent(mdx)}`;

    assert.equal(sourceFromComponent(component, ROOT), mdx);
  });

  it("prefers the raw content path when a file with percent sequences exists on disk", () => {
    const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "edit-link-"));
    try {
      const literalFile = path.join(tmpRoot, "chapter%20one.mdx");
      fs.writeFileSync(literalFile, "# Chapter 1\n");
      const component = `${path.join(tmpRoot, "template.js")}?__contentFilePath=chapter%20one.mdx`;

      assert.equal(
        sourceFromComponent(component, tmpRoot),
        "chapter%20one.mdx",
      );
      assert.equal(
        toEditUrl(component, tmpRoot),
        `${REPO_URL}/blob/master/chapter%2520one.mdx`,
      );
    } finally {
      fs.rmSync(tmpRoot, { recursive: true, force: true });
    }
  });

  it("falls back to the decoded path when only it exists on disk", () => {
    const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "edit-link-"));
    try {
      const decodedFile = path.join(tmpRoot, "chapter one.mdx");
      fs.writeFileSync(decodedFile, "# Chapter 1\n");
      const component = `${path.join(tmpRoot, "template.js")}?__contentFilePath=chapter%20one.mdx`;

      assert.equal(sourceFromComponent(component, tmpRoot), "chapter one.mdx");
      assert.equal(
        toEditUrl(component, tmpRoot),
        `${REPO_URL}/blob/master/chapter%20one.mdx`,
      );
    } finally {
      fs.rmSync(tmpRoot, { recursive: true, force: true });
    }
  });

  it("preserves literal plus signs in file paths", () => {
    const mdx = src(
      "src",
      "collections",
      "news",
      "2020",
      "2020-12-02-kubecon+cloudnativecon-service-mesh-battle-stories-and-fixes",
      "index.mdx",
    );
    const component = `${src("src", "templates", "news-single.js")}?__contentFilePath=${mdx}`;

    assert.equal(sourceFromComponent(component), mdx);
  });

  it("ignores unrelated query params", () => {
    const mdx = src("src", "collections", "blog", "2026", "post", "index.mdx");
    const component = `${src("src", "templates", "blog-single.js")}?__contentFilePath=${mdx}&export=default`;

    assert.equal(sourceFromComponent(component), mdx);
  });

  it("falls back to the component path when no content path is present", () => {
    const component = `${src("src", "pages", "404.js")}?export=default`;

    assert.equal(sourceFromComponent(component), src("src", "pages", "404.js"));
  });

  it("returns an empty string for an empty component", () => {
    assert.equal(sourceFromComponent(""), "");
  });
});

describe("toEditUrl", () => {
  it("links a plain page file", () => {
    assert.equal(
      toEditUrl(src("src", "pages", "pricing", "index.js"), ROOT),
      `${REPO_URL}/blob/master/src/pages/pricing/index.js`,
    );
  });

  it("links a directory as a tree URL", () => {
    assert.equal(
      toEditUrl(src("src", "collections", "members"), ROOT),
      `${REPO_URL}/tree/master/src/collections/members`,
    );
  });

  it("links the MDX file for collection pages and encodes spaces", () => {
    const mdx = src(
      "src",
      "collections",
      "members",
      "Ibrahim Mbaziira",
      "index.mdx",
    );
    const component = `${src("src", "templates", "member-single.js")}?__contentFilePath=${mdx}`;

    assert.equal(
      toEditUrl(component, ROOT),
      `${REPO_URL}/blob/master/src/collections/members/Ibrahim%20Mbaziira/index.mdx`,
    );
  });

  it("encodes a plus sign in a real news path", () => {
    const mdx = src(
      "src",
      "collections",
      "news",
      "2020",
      "2020-12-02-kubecon+cloudnativecon-service-mesh-battle-stories-and-fixes",
      "index.mdx",
    );
    const component = `${src("src", "templates", "news-single.js")}?__contentFilePath=${mdx}`;

    assert.equal(
      toEditUrl(component, ROOT),
      `${REPO_URL}/blob/master/src/collections/news/2020/2020-12-02-kubecon%2Bcloudnativecon-service-mesh-battle-stories-and-fixes/index.mdx`,
    );
  });

  it("returns null for paths outside the repo", () => {
    assert.equal(toEditUrl(path.resolve(ROOT, "..", "outside.js"), ROOT), null);
  });

  it("returns null for ignored directories", () => {
    assert.equal(toEditUrl(src(".cache", "dev-404-page.js"), ROOT), null);
    assert.equal(toEditUrl(src("public", "index.html"), ROOT), null);
  });

  it("returns null when the source file does not exist", () => {
    assert.equal(
      toEditUrl(src("src", "pages", "does-not-exist.js"), ROOT),
      null,
    );
  });

  it("returns null for an empty component", () => {
    assert.equal(toEditUrl("", ROOT), null);
  });
});
