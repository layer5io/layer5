const test = require("node:test");
const assert = require("node:assert/strict");
const {
  buildMarketingRequest,
  fieldsFromFormData,
  marketingPreferencesUrl,
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
  assert.equal(request.body.organization, "Analytical Engines");
  assert.equal(request.body.org, undefined);
  assert.equal(request.body.occupation, "Programmer");
  assert.equal(request.body.github, "https://github.com/ada");
  assert.equal(request.body.role, "Contributor");
  assert.equal(request.body.subscribed, false);
  assert.equal(request.body.interests, undefined);
  assert.match(request.body.message, /projects: Meshery, Kanvas/);
  assert.match(request.body.message, /interests: Service mesh tutorials/);
  assert.equal(request.body.projects, undefined);
});

test("sends only known interest slugs and accepted fields", () => {
  const request = buildMarketingRequest("open-source-pricing", {
    email: "a@example.com",
    firstname: "A",
    lastname: "B",
    projectname: "Meshery",
    interests: ["meshery", "not-a-real-interest"],
    scope: "Not a scope",
    audience: "not-an-audience",
    users: "Platform teams",
    license: "Apache 2.0",
  });
  assert.deepEqual(request.body.interests, ["meshery"]);
  assert.equal(request.body.projectname, "Meshery");
  assert.equal(request.body.scope, undefined);
  assert.equal(request.body.audience, undefined);
  assert.match(request.body.message, /users: Platform teams/);
  assert.match(request.body.message, /license: Apache 2.0/);
  assert.equal(request.body.users, undefined);
});

test("keeps every repeated form field", () => {
  const formData = new FormData();
  formData.append("email", "ada@example.com");
  formData.append("interests", "meshery");
  formData.append("interests", "smp");
  const request = buildMarketingRequest(
    "footer-subscribe",
    fieldsFromFormData(formData),
  );
  assert.deepEqual(request.body.interests, [
    "meshery",
    "smp",
    "community-newsletter",
  ]);
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
            headers: { get: (name) => (name === "Retry-After" ? "60" : "") },
            text: async () => "too many requests",
          }),
        },
      ),
    (error) => error.code === "http-429" && /60 seconds/.test(error.message),
  );

  await assert.rejects(
    () =>
      submitMarketingForm(
        "contact",
        { email: "a@example.com" },
        {
          fetchImpl: async () => ({
            ok: false,
            status: 400,
            json: async () => ({
              long_description: "scope is not a known choice",
              short_description: "The marketing request could not be accepted",
            }),
          }),
        },
      ),
    (error) =>
      error.code === "http-400" &&
      error.message === "scope is not a known choice",
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

test("builds the preference center URL from the cloud host", () => {
  const previous = process.env.GATSBY_MESHERY_CLOUD_BASE;
  process.env.GATSBY_MESHERY_CLOUD_BASE = "https://cloud.example.test/";
  try {
    assert.equal(
      marketingPreferencesUrl(),
      "https://cloud.example.test/api/marketing/preferences",
    );
    assert.equal(
      marketingPreferencesUrl("a b"),
      "https://cloud.example.test/api/marketing/preferences?token=a%20b",
    );
  } finally {
    if (previous === undefined) {
      delete process.env.GATSBY_MESHERY_CLOUD_BASE;
    } else {
      process.env.GATSBY_MESHERY_CLOUD_BASE = previous;
    }
  }
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
