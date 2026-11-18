const test = require("node:test");
const assert = require("node:assert/strict");
const { sortResources, paginateResources } = require("./resource-sort");

const node = (id, dateForSort) => ({ id, fields: { dateForSort } });

const mixed = [
  node("b", "2024-02-01T00:00:00.000Z"),
  node("missing", undefined),
  node("c", "2025-03-01T00:00:00.000Z"),
  node("invalid", "not-a-date"),
  node("a", "2023-01-01T00:00:00.000Z"),
];

const ids = (list) => list.map((n) => n.id);

test("latest sorts newest first", () => {
  assert.deepEqual(ids(sortResources(mixed, "latest")).slice(0, 3), ["c", "b", "a"]);
});

test("oldest sorts oldest first", () => {
  assert.deepEqual(ids(sortResources(mixed, "oldest")).slice(0, 3), ["a", "b", "c"]);
});

test("missing or invalid dates are always last", () => {
  for (const option of ["latest", "oldest"]) {
    const tail = ids(sortResources(mixed, option)).slice(3);
    assert.deepEqual(tail.sort(), ["invalid", "missing"]);
  }
});

test("relevance keeps the incoming order", () => {
  assert.deepEqual(ids(sortResources(mixed, "relevance")), ids(mixed));
});

test("sorting does not mutate the input", () => {
  const before = ids(mixed);
  sortResources(mixed, "latest");
  assert.deepEqual(ids(mixed), before);
});

const items = [1, 2, 3, 4, 5, 6, 7];

test("pagination returns the right slice for each page", () => {
  assert.deepEqual(paginateResources(items, 1, 3), [1, 2, 3]);
  assert.deepEqual(paginateResources(items, 2, 3), [4, 5, 6]);
  assert.deepEqual(paginateResources(items, 3, 3), [7]);
});

test("pagination returns everything when postsPerPage is 0", () => {
  assert.deepEqual(paginateResources(items, 1, 0), items);
});