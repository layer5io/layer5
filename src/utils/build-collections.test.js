/* eslint-env node */

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  getBlogYearFilter,
  getExcludedCollections,
  listBlogYears,
} = require("./build-collections");

const availableYears = ["2024", "2025", "2026"];
const blogProfileExclusions = getExcludedCollections({
  isFullSiteBuild: false,
  liteBuildProfile: "blog",
  buildCollectionsExclude: "",
});

describe("getExcludedCollections", () => {
  it("excludes nothing for a full site build", () => {
    assert.deepEqual(getExcludedCollections({ isFullSiteBuild: true }), []);
  });

  it("keeps the blog collection in the blog profile", () => {
    assert.ok(!blogProfileExclusions.includes("blog"));
  });

  it("falls back to the core profile for an unknown profile", () => {
    assert.deepEqual(
      getExcludedCollections({
        isFullSiteBuild: false,
        liteBuildProfile: "nope",
        buildCollectionsExclude: "",
      }),
      getExcludedCollections({
        isFullSiteBuild: false,
        liteBuildProfile: "core",
        buildCollectionsExclude: "",
      }),
    );
  });

  it("adds BUILD_COLLECTIONS_EXCLUDE entries without duplicates", () => {
    assert.deepEqual(
      getExcludedCollections({
        isFullSiteBuild: false,
        liteBuildProfile: "content",
        buildCollectionsExclude: " workshops, members ",
      }),
      ["integrations", "members", "workshops"],
    );
  });
});

describe("getBlogYearFilter", () => {
  const filter = (overrides) =>
    getBlogYearFilter({
      isFullSiteBuild: false,
      excludedCollections: blogProfileExclusions,
      availableYears,
      ...overrides,
    });

  it("is inactive without BLOG_YEAR", () => {
    for (const blogYear of [undefined, "", " , "]) {
      assert.deepEqual(filter({ blogYear }), {
        years: [],
        ignoreGlobs: [],
        inactiveReason: null,
      });
    }
  });

  it("ignores every other year directory for a single year", () => {
    assert.deepEqual(filter({ blogYear: "2026" }), {
      years: ["2026"],
      ignoreGlobs: [
        "**/collections/blog/2024/**",
        "**/collections/blog/2025/**",
      ],
      inactiveReason: null,
    });
  });

  it("accepts a comma-separated list, trimmed, deduplicated, and sorted", () => {
    const result = filter({ blogYear: " 2026,2025 ,2026" });
    assert.deepEqual(result.years, ["2025", "2026"]);
    assert.deepEqual(result.ignoreGlobs, ["**/collections/blog/2024/**"]);
  });

  it("does not apply to a full site build, and says why", () => {
    const result = filter({ blogYear: "2026", isFullSiteBuild: true });
    assert.deepEqual(result.ignoreGlobs, []);
    assert.match(result.inactiveReason, /BUILD_FULL_SITE/);
  });

  it("does not apply when the blog collection is excluded, and says why", () => {
    const result = filter({
      blogYear: "2026",
      excludedCollections: ["blog", "news"],
    });
    assert.deepEqual(result.ignoreGlobs, []);
    assert.match(result.inactiveReason, /blog collection is excluded/);
  });

  it("rejects values that are not four-digit years", () => {
    assert.throws(() => filter({ blogYear: "2026,26" }), /invalid: 26/);
    assert.throws(() => filter({ blogYear: "latest" }), /invalid: latest/);
  });

  it("rejects years without a blog directory instead of building nothing", () => {
    assert.throws(
      () => filter({ blogYear: "2019" }),
      /BLOG_YEAR 2019 has no directory.*available years: 2024, 2025, 2026/,
    );
  });

  it("validates BLOG_YEAR even when the filter cannot apply", () => {
    assert.throws(
      () => filter({ blogYear: "abc", isFullSiteBuild: true }),
      /invalid: abc/,
    );
  });
});

describe("listBlogYears", () => {
  it("lists only four-digit year directories, sorted", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "blog-years-"));
    try {
      for (const name of ["2026", "2019", "blog-template"]) {
        fs.mkdirSync(path.join(dir, name));
      }
      fs.writeFileSync(path.join(dir, "Blog.style.js"), "");
      fs.writeFileSync(path.join(dir, "2020"), "");
      assert.deepEqual(listBlogYears(dir), ["2019", "2026"]);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("finds the repository's blog years", () => {
    const years = listBlogYears();
    assert.ok(years.length > 0);
    assert.ok(years.every((year) => /^\d{4}$/.test(year)));
  });
});
