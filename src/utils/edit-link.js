/* eslint-env node */

const fs = require("fs");
const path = require("path");

const REPO = "layer5io/layer5";
const IGNORED = new Set([".cache", "public", "node_modules", ".git"]);
const CONTENT_PARAM = "__contentFilePath=";

const decodePath = (raw) => {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
};

const sourceFromComponent = (component) => {
  if (typeof component !== "string") return "";
  const q = component.indexOf("?");
  if (q === -1) return component;

  const query = component.slice(q + 1);
  const start = query.indexOf(CONTENT_PARAM);
  if (start === -1) return component.slice(0, q);

  const raw = query.slice(start + CONTENT_PARAM.length);
  const exportAt = raw.indexOf("&export=");
  const contentPath = exportAt === -1 ? raw : raw.slice(0, exportAt);

  return decodePath(contentPath) || component.slice(0, q);
};

const toEditUrl = (component, root) => {
  const src = sourceFromComponent(component || "");
  if (!src) return null;

  const abs = path.isAbsolute(src) ? src : path.resolve(root, src);
  const rel = path.relative(root, abs);
  if (!rel || rel === ".." || rel.startsWith(`..${path.sep}`)) return null;
  if (path.isAbsolute(rel)) return null;
  if (rel.split(path.sep).some((seg) => IGNORED.has(seg))) return null;
  if (!fs.existsSync(abs)) return null;

  const kind = fs.statSync(abs).isDirectory() ? "tree" : "blob";
  const encoded = rel.split(path.sep).map(encodeURIComponent).join("/");
  return `https://github.com/${REPO}/${kind}/master/${encoded}`;
};

module.exports = { sourceFromComponent, toEditUrl };
