/*
 * Vendored from https://github.com/layer5labs/gatsby-plugin-meta-redirect
 * (a fork of getchalk/gatsby-plugin-meta-redirect), which itself is MIT
 * licensed. See LICENSE in this directory.
 *
 * The only change made while vendoring is the swap of fs-extra for node's own
 * fs/promises, so that this plugin carries no dependencies of its own.
 */

const path = require("path");
const { access, mkdir, writeFile } = require("fs/promises");

const getMetaRedirect = require("./getMetaRedirect");

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function writeRedirectsFile(redirects, folder, pathPrefix, siteUrl) {
  if (!redirects.length) return;

  for (const redirect of redirects) {
    const { fromPath, toPath } = redirect;

    const FILE_PATH = path.join(
      folder,
      fromPath.replace(pathPrefix, ""),
      "index.html"
    );

    const fileExists = await exists(FILE_PATH);
    if (!fileExists) {
      try {
        await mkdir(path.dirname(FILE_PATH), { recursive: true });
      } catch {
        // ignore if the directory already exists;
      }

      const data = getMetaRedirect(toPath, pathPrefix, siteUrl);
      await writeFile(FILE_PATH, data);
    }
  }
}

exports.onPostBuild = ({ store }) => {
  const { redirects, program, config } = store.getState();

  let pathPrefix = "";
  if (program.prefixPaths) {
    pathPrefix = config.pathPrefix;
  }

  const siteUrl = config.siteMetadata.siteUrl;
  const folder = path.join(program.directory, "public");

  return writeRedirectsFile(redirects, folder, pathPrefix, siteUrl);
};
