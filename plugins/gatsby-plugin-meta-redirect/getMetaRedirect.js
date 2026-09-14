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
 *
 * Two hardening changes were made while vendoring, neither of which alters the
 * output for any redirect this site actually declares: pathPrefix is stripped
 * only when it is a leading prefix, and the interpolated URLs are escaped for
 * the HTML attribute contexts they land in.
 */

// The redirect targets come from repository-controlled data, but these values
// are interpolated into a single-quoted attribute and an href, so escape them
// rather than relying on that staying true.
function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// String.prototype.replace would strip the first occurrence anywhere in the
// path, so a target that merely contains pathPrefix mid-path would be mangled.
// The match also has to land on a path segment boundary: a pathPrefix of
// "/docs" must not be stripped from "/docs-old".
function stripLeadingPathPrefix(value, pathPrefix) {
  if (!pathPrefix || !value.startsWith(pathPrefix)) {
    return value;
  }

  const rest = value.slice(pathPrefix.length);
  if (rest === "" || rest.startsWith("/")) {
    return rest;
  }

  return value;
}

module.exports = function getMetaRedirect(toPath, pathPrefix, siteUrl) {
  const ci = process.env.CI;

  let url = stripLeadingPathPrefix(toPath.trim(), pathPrefix);

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

  const metaRefresh = `<meta http-equiv="refresh" content="0; URL='${escapeHtmlAttribute(`${pathPrefix}${url}`)}'" />`;

  const metaCanonical = `<link rel="canonical" href="${escapeHtmlAttribute(`${siteUrl}${pathPrefix}${url}`)}" />`;

  return metaRefresh + metaCanonical;
};
