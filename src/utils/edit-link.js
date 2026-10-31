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

const sourceFromComponent = (component, root) => {
  if (typeof component !== "string") return "";
  const q = component.indexOf("?");
  if (q === -1) return component;

  const query = component.slice(q + 1);
  const start = query.indexOf(CONTENT_PARAM);
  if (start === -1) return component.slice(0, q);

  const raw = query.slice(start + CONTENT_PARAM.length);
  const exportAt = raw.indexOf("&export=");
  const contentPath = exportAt === -1 ? raw : raw.slice(0, exportAt);

  const decoded = decodePath(contentPath);
  if (decoded !== contentPath && root) {
    const resolve = (candidate) =>
      path.isAbsolute(candidate) ? candidate : path.resolve(root, candidate);
    if (fs.existsSync(resolve(contentPath))) return contentPath;
    if (fs.existsSync(resolve(decoded))) return decoded;
  }

  return decoded || component.slice(0, q);
};

const toEditUrl = (component, root) => {
  const src = sourceFromComponent(component || "", root);
  if (!src) return null;

  const abs = path.isAbsolute(src) ? src : path.resolve(root, src);
  const hasContentPath =
    typeof component === "string" && component.includes(CONTENT_PARAM);
  const templatesRoot = path.resolve(root, "src", "templates");
  if (
    !hasContentPath &&
    (abs === templatesRoot || abs.startsWith(`${templatesRoot}${path.sep}`))
  ) {
    return null;
  }

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
