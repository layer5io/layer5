/* eslint-env node */

const fs = require("fs");
const path = require("path");

const REPO = "layer5io/layer5";
const IGNORED = new Set([".cache", "public", "node_modules", ".git"]);
const CONTENT_KEY = "__contentFilePath";

const decodePath = (raw) => {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
};

const parseQuery = (query) => {
  const params = new Map();
  for (const part of query.split("&")) {
    if (!part) continue;
    const eq = part.indexOf("=");
    const key = eq === -1 ? part : part.slice(0, eq);
    if (!params.has(key)) params.set(key, eq === -1 ? "" : part.slice(eq + 1));
  }
  return params;
};

const parseComponent = (component) => {
  if (typeof component !== "string") return { base: "", params: new Map() };
  const q = component.indexOf("?");
  if (q === -1) return { base: component, params: new Map() };
  return {
    base: component.slice(0, q),
    params: parseQuery(component.slice(q + 1)),
  };
};

const realpath = (target) => {
  try {
    return fs.realpathSync.native(target);
  } catch {
    return null;
  }
};

const sourceFromComponent = (component, root) => {
  const { base, params } = parseComponent(component);
  if (!params.has(CONTENT_KEY)) return base;

  const contentPath = params.get(CONTENT_KEY);
  if (!contentPath) return base;

  const decoded = decodePath(contentPath);
  if (decoded !== contentPath && root) {
    const resolve = (candidate) =>
      path.isAbsolute(candidate) ? candidate : path.resolve(root, candidate);
    if (fs.existsSync(resolve(contentPath))) return contentPath;
    if (fs.existsSync(resolve(decoded))) return decoded;
  }

  return decoded || base;
};

const toEditUrl = (component, root) => {
  const { params } = parseComponent(component || "");
  const hasContentPath = Boolean(params.get(CONTENT_KEY));
  const src = sourceFromComponent(component || "", root);
  if (!src) return null;

  const realRoot = realpath(root);
  if (!realRoot) return null;

  const abs = path.isAbsolute(src) ? src : path.resolve(root, src);
  const realAbs = realpath(abs);
  if (!realAbs) return null;

  const templatesRoot = path.join(realRoot, "src", "templates");
  if (
    !hasContentPath &&
    (realAbs === templatesRoot ||
      realAbs.startsWith(`${templatesRoot}${path.sep}`))
  ) {
    return null;
  }

  const rel = path.relative(realRoot, realAbs);
  if (!rel || rel === ".." || rel.startsWith(`..${path.sep}`)) return null;
  if (path.isAbsolute(rel)) return null;
  if (rel.split(path.sep).some((seg) => IGNORED.has(seg))) return null;

  const encoded = rel.split(path.sep).map(encodeURIComponent).join("/");
  return `https://github.com/${REPO}/blob/master/${encoded}`;
};

module.exports = { sourceFromComponent, toEditUrl };
