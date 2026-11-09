const test = require("node:test");
const assert = require("node:assert/strict");
const {
  getFiltersFromSearch,
  getQueryFromSearch,
  buildSearch,
} = require("./resources-url");

test("reads repeated filter params", () => {
  assert.deepEqual(getFiltersFromSearch("?filter=Article&filter=Blog"), [
    "Article",
    "Blog",
  ]);
});

test("returns no filters when none are present", () => {
  assert.deepEqual(getFiltersFromSearch(""), []);
  assert.deepEqual(getFiltersFromSearch("?q=kanvas"), []);
});

test("reads the search query", () => {
  assert.equal(getQueryFromSearch("?q=kanvas"), "kanvas");
});

test("returns an empty query when q is missing", () => {
  assert.equal(getQueryFromSearch("?filter=Blog"), "");
});

test("restores filters and search together", () => {
  const search = "?filter=Article&filter=Blog&q=kanvas";
  assert.deepEqual(getFiltersFromSearch(search), ["Article", "Blog"]);
  assert.equal(getQueryFromSearch(search), "kanvas");
});

test("writing filters keeps q", () => {
  assert.equal(
    buildSearch("?q=kanvas", { filters: ["Article", "Blog"] }),
    "?q=kanvas&filter=Article&filter=Blog",
  );
});

test("writing q keeps filters", () => {
  assert.equal(
    buildSearch("?filter=Blog", { q: "kanvas" }),
    "?filter=Blog&q=kanvas",
  );
});

test("writing filters replaces the old ones", () => {
  assert.equal(
    buildSearch("?filter=Article&q=k", { filters: ["Blog"] }),
    "?q=k&filter=Blog",
  );
});

test("clearing filters keeps q and other params", () => {
  assert.equal(
    buildSearch("?filter=Article&q=kanvas&x=1", { filters: [] }),
    "?q=kanvas&x=1",
  );
});

test("clearing q keeps filters and other params", () => {
  assert.equal(
    buildSearch("?filter=Article&q=kanvas&x=1", { q: "" }),
    "?filter=Article&x=1",
  );
});

test("clearing everything returns an empty string", () => {
  assert.equal(
    buildSearch("?filter=Article&q=kanvas", { filters: [], q: "" }),
    "",
  );
});

test("leaves the search untouched when nothing is passed", () => {
  assert.equal(buildSearch("?filter=Article&x=1"), "?filter=Article&x=1");
});

test("round-trips a query with spaces", () => {
  const search = buildSearch("", { q: "service mesh" });
  assert.equal(getQueryFromSearch(search), "service mesh");
});
