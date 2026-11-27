/* eslint-env node */

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const { createPagePathGuard } = require("./page-path-guard");

describe("createPagePathGuard", () => {
  it("returns undefined for a new path", () => {
    const findDuplicate = createPagePathGuard();
    assert.equal(findDuplicate({ path: "/a", component: "a.js" }), undefined);
    assert.equal(findDuplicate({ path: "/b", component: "b.js" }), undefined);
  });

  it("returns the earlier component for a repeated path", () => {
    const findDuplicate = createPagePathGuard();
    findDuplicate({ path: "/a", component: "first.js" });
    assert.equal(
      findDuplicate({ path: "/a", component: "second.js" }),
      "first.js",
    );
  });

  it("keeps separate guards independent", () => {
    createPagePathGuard()({ path: "/a", component: "a.js" });
    assert.equal(
      createPagePathGuard()({ path: "/a", component: "a.js" }),
      undefined,
    );
  });
});
