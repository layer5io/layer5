/* eslint-env node */

const fs = require("fs");
const path = require("path");

const DEFAULT_LITE_BUILD_PROFILE = "core";

const LITE_BUILD_PROFILES = Object.freeze({
  blog: ["members", "integrations", "news", "events", "resources"],
  content: ["members", "integrations"],
  core: ["members", "integrations", "blog", "news", "events", "resources"],
});

const BLOG_COLLECTION = "blog";
const BLOG_COLLECTION_DIR = path.join(__dirname, "..", "collections", BLOG_COLLECTION);
const BLOG_YEAR_PATTERN = /^\d{4}$/;

const isFullSiteBuild = (buildFullSite = process.env.BUILD_FULL_SITE) =>
  buildFullSite === "true";

const parseCsv = (value = "") =>
  value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

const getExcludedCollections = ({
  isFullSiteBuild: shouldBuildFullSite = isFullSiteBuild(),
  liteBuildProfile = process.env.LITE_BUILD_PROFILE || DEFAULT_LITE_BUILD_PROFILE,
  buildCollectionsExclude = process.env.BUILD_COLLECTIONS_EXCLUDE,
} = {}) => {
  if (shouldBuildFullSite) {
    return [];
  }

  const presetCollections =
    LITE_BUILD_PROFILES[liteBuildProfile] ||
    LITE_BUILD_PROFILES[DEFAULT_LITE_BUILD_PROFILE];

  return Array.from(
    new Set([...presetCollections, ...parseCsv(buildCollectionsExclude)]),
  ).sort();
};

// Year directories (src/collections/blog/<YYYY>) that currently hold posts.
const listBlogYears = (blogDir = BLOG_COLLECTION_DIR) =>
  fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && BLOG_YEAR_PATTERN.test(entry.name))
    .map((entry) => entry.name)
    .sort();

const parseBlogYears = (value = "") => {
  const years = parseCsv(value);
  const invalid = years.filter((year) => !BLOG_YEAR_PATTERN.test(year));
  if (invalid.length > 0) {
    throw new Error(
      `BLOG_YEAR must be a comma-separated list of four-digit years (e.g. "2026" or "2025,2026"); invalid: ${invalid.join(", ")}`,
    );
  }
  return Array.from(new Set(years)).sort();
};

// Narrows a lightweight build that includes the blog collection to the posts
// of the years listed in BLOG_YEAR, by ignoring every other year directory.
// Returns the years kept, the ignore globs for the collections source, and,
// when BLOG_YEAR is set but cannot apply, why it was not applied.
const getBlogYearFilter = ({
  blogYear = process.env.BLOG_YEAR,
  isFullSiteBuild: shouldBuildFullSite = isFullSiteBuild(),
  excludedCollections = getExcludedCollections({
    isFullSiteBuild: shouldBuildFullSite,
  }),
  availableYears = listBlogYears(),
} = {}) => {
  const years = parseBlogYears(blogYear);
  const inactive = (reason) => ({ years: [], ignoreGlobs: [], inactiveReason: reason });

  if (years.length === 0) {
    return inactive(null);
  }
  if (shouldBuildFullSite) {
    return inactive("BUILD_FULL_SITE=true builds every blog year");
  }
  if (excludedCollections.includes(BLOG_COLLECTION)) {
    return inactive("the blog collection is excluded from this build");
  }

  const missing = years.filter((year) => !availableYears.includes(year));
  if (missing.length > 0) {
    throw new Error(
      `BLOG_YEAR ${missing.join(", ")} has no directory under src/collections/blog; available years: ${availableYears.join(", ")}`,
    );
  }

  return {
    years,
    ignoreGlobs: availableYears
      .filter((year) => !years.includes(year))
      .map((year) => `**/collections/${BLOG_COLLECTION}/${year}/**`),
    inactiveReason: null,
  };
};

module.exports = {
  DEFAULT_LITE_BUILD_PROFILE,
  LITE_BUILD_PROFILES,
  getBlogYearFilter,
  getExcludedCollections,
  isFullSiteBuild,
  listBlogYears,
};
