const test = require("node:test");
const assert = require("node:assert/strict");
const {
  buildMarketingRequest,
  submitMarketingForm,
  submissionMessage,
  mesheryCloudBase,
} = require("./client");

test("uses the production cloud host by default", () => {
  const previous = process.env.GATSBY_MESHERY_CLOUD_BASE;
  delete process.env.GATSBY_MESHERY_CLOUD_BASE;
  delete process.env.MESHERY_CLOUD_BASE;
  assert.equal(mesheryCloudBase(), "https://cloud.layer5.io");
  if (previous === undefined) {
    delete process.env.GATSBY_MESHERY_CLOUD_BASE;
  } else {
    process.env.GATSBY_MESHERY_CLOUD_BASE = previous;
  }
});

test("strips a trailing slash from the configured base", () => {
  const previous = process.env.GATSBY_MESHERY_CLOUD_BASE;
  process.env.GATSBY_MESHERY_CLOUD_BASE = "https://cloud.example.test/";
  try {
    const request = buildMarketingRequest("footer-subscribe", {
      EMAIL: "ada@example.com",
    });
    assert.equal(
      request.url,
      "https://cloud.example.test/api/marketing/subscribe",
    );
    assert.equal(request.formType, "footer-subscribe");
    assert.deepEqual(request.tags, ["interest-community-newsletter"]);
    assert.equal(request.body.email, "ada@example.com");
    assert.equal(request.body.company_website, "");
    assert.deepEqual(request.body.interests, ["community-newsletter"]);
  } finally {
    if (previous === undefined) {
      delete process.env.GATSBY_MESHERY_CLOUD_BASE;
    } else {
      process.env.GATSBY_MESHERY_CLOUD_BASE = previous;
    }
  }
});

test("keeps a filled honeypot", () => {
  const request = buildMarketingRequest("unsubscribe", {
    EMAIL: "ada@example.com",
    company_website: "https://spam.example",
  });
  assert.equal(request.url.endsWith("/api/marketing/forms/unsubscribe"), true);
  assert.equal(request.body.company_website, "https://spam.example");
  assert.equal(request.body.email, "ada@example.com");
});

test("maps site form names onto API form types and tags", () => {
  assert.equal(
    buildMarketingRequest("kanvas", { email: "a@example.com" }).url.endsWith(
      "/api/marketing/forms/kanvas-beta",
    ),
    true,
  );
  assert.deepEqual(
    buildMarketingRequest("kanvas", { email: "a@example.com" }).tags,
    ["meshmap-beta"],
  );
  assert.equal(
    buildMarketingRequest("event", { email: "a@example.com" }).formType,
    "community-call",
  );
  assert.deepEqual(
    buildMarketingRequest("event", { email: "a@example.com" }).tags,
    ["event-registered"],
  );
  assert.equal(
    buildMarketingRequest("content", { email: "a@example.com" }).formType,
    "contact",
  );
  assert.equal(
    buildMarketingRequest("docker-extension", { email: "a@example.com" })
      .formType,
    "docker-extension",
  );
});

test("flattens wrapped form payloads and keeps stored fields", () => {
  const request = buildMarketingRequest("newcomers", {
    memberFormOne: {
      firstname: "Ada",
      lastname: "Lovelace",
      email: "ada@example.com",
      org: "Analytical Engines",
      occupation: "Programmer",
      github: "https://github.com/ada",
    },
    role: "Contributor",
    projects: ["Meshery", "Kanvas"],
    interests: "Service mesh tutorials",
    subscribed: false,
  });
  assert.equal(request.body.firstName, "Ada");
  assert.equal(request.body.lastName, "Lovelace");
  assert.equal(request.body.email, "ada@example.com");
  assert.equal(request.body.org, "Analytical Engines");
  assert.equal(request.body.occupation, "Programmer");
  assert.equal(request.body.github, "https://github.com/ada");
  assert.equal(request.body.role, "Contributor");
  assert.equal(request.body.subscribed, undefined);
  assert.equal(request.body.interests, undefined);
  assert.match(request.body.message, /projects: Meshery, Kanvas/);
  assert.match(request.body.message, /interests: Service mesh tutorials/);
});

test("keeps interest slugs and folds other open-source answers into message", () => {
  const request = buildMarketingRequest("open-source-pricing", {
    email: "a@example.com",
    firstname: "A",
    lastname: "B",
    projectname: "Meshery",
    interests: ["meshery"],
    users: "Platform teams",
    license: "Apache 2.0",
  });
  assert.deepEqual(request.body.interests, ["meshery"]);
  assert.equal(request.body.projectname, "Meshery");
  assert.match(request.body.message, /users: Platform teams/);
  assert.match(request.body.message, /license: Apache 2.0/);
});

test("rejects an unknown form type", () => {
  assert.throws(
    () => buildMarketingRequest("not-a-form", {}),
    (error) => error.code === "unknown-form",
  );
});

test("posts JSON and reports success and error states", async () => {
  const seen = [];
  const ok = await submitMarketingForm(
    "footer-subscribe",
    { EMAIL: "ada@example.com" },
    {
      fetchImpl: async (url, init) => {
        seen.push({ url, init });
        return {
          ok: true,
          status: 200,
          json: async () => ({ status: "subscribed", notified: false }),
        };
      },
    },
  );
  assert.equal(ok.status, "subscribed");
  assert.equal(
    submissionMessage("footer-subscribe", ok),
    "Thanks for subscribing.",
  );
  assert.equal(seen[0].init.method, "POST");
  assert.equal(seen[0].init.credentials, "omit");
  assert.equal(seen[0].init.headers["Content-Type"], "application/json");
  assert.equal(JSON.parse(seen[0].init.body).email, "ada@example.com");
  assert.equal(JSON.parse(seen[0].init.body).company_website, "");

  await assert.rejects(
    () =>
      submitMarketingForm(
        "contact",
        { email: "a@example.com" },
        {
          fetchImpl: async () => ({
            ok: false,
            status: 429,
            text: async () => "too many requests",
          }),
        },
      ),
    (error) => error.code === "http-429" && /wait a minute/.test(error.message),
  );

  await assert.rejects(
    () =>
      submitMarketingForm(
        "contact",
        { email: "a@example.com" },
        {
          fetchImpl: async () => {
            throw new Error("offline");
          },
        },
      ),
    (error) => error.code === "network",
  );
});

test("describes community registration and unsubscribe", () => {
  assert.equal(
    submissionMessage("community-call", { status: "subscribed" }),
    "Thanks. You are registered.",
  );
  assert.equal(
    submissionMessage("unsubscribe", { status: "unsubscribed" }),
    "You have been unsubscribed.",
  );
  assert.equal(
    submissionMessage("footer-subscribe", { status: "suppressed" }),
    "This address is not subscribed.",
  );
});
