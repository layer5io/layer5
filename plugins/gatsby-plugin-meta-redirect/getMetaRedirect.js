/*
 * Vendored from https://github.com/layer5labs/gatsby-plugin-meta-redirect
 * (a fork of getchalk/gatsby-plugin-meta-redirect), which itself is MIT
 * licensed. See LICENSE in this directory.
 *
 * The Layer5 fork differs from the published gatsby-plugin-meta-redirect on
 * npm in two ways, both of which the site depends on:
 *   1. it emits a <link rel="canonical"> alongside the meta refresh, and
 *   2. it omits the trailing slash on redirect targets when CI=true, which is
 *      what GitHub Pages expects.
 */

module.exports = function getMetaRedirect(toPath, pathPrefix, siteUrl) {
  const ci = process.env.CI;

  let url = toPath.replace(pathPrefix, "").trim();

  const hasProtocol = url.includes("://");
  if (!hasProtocol) {
    const hasLeadingSlash = url.startsWith("/");
    if (!hasLeadingSlash) {
      url = `/${url}`;
    }

    const resemblesFile = url.includes(".");
    if (!resemblesFile) {
      /* modified for GitHub Pages due to url handling, more info
      https://slorber.github.io/trailing-slash-guide/.
      original code:
      url = `${url}/`.replace(/\/\/+/g, "/");
      */
      url = ci === "true"
        ? `${url}`.replace(/\/\/+/g, "/")
        : `${url}/`.replace(/\/\/+/g, "/");
    }
  }

  const metaRefresh = `<meta http-equiv="refresh" content="0; URL='${pathPrefix}${url}'" />`;

  const metaCanonical = `<link rel="canonical" href="${siteUrl}${pathPrefix}${url}" />`;

  return metaRefresh + metaCanonical;
};
