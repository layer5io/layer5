const DEFAULT_LITE_BUILD_PROFILE = "core";

const LITE_BUILD_PROFILES = Object.freeze({
  content: ["members", "integrations"],
  core: ["members", "integrations", "blog", "news", "events", "resources"],
});

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

module.exports = {
  DEFAULT_LITE_BUILD_PROFILE,
  LITE_BUILD_PROFILES,
  getExcludedCollections,
  isFullSiteBuild,
};