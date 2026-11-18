/* eslint-env node */

// Client for the meshery-cloud public marketing form API
// (docs/plans/2026-11-18-mailchimp-forms-api.md).
//
// GATSBY_MESHERY_CLOUD_BASE overrides the host. Production is
// https://cloud.layer5.io. Tags below are applied by that API from the
// form type; this client chooses the form type and sends the fields.

const DEFAULT_BASE = "https://cloud.layer5.io";

const FORM_CATALOG = {
  "footer-subscribe": {
    path: "/api/marketing/subscribe",
    formType: "footer-subscribe",
    tags: ["interest-community-newsletter"],
    interests: ["community-newsletter"],
  },
  subscribe: {
    path: "/api/marketing/subscribe",
    formType: "footer-subscribe",
    tags: ["interest-community-newsletter"],
    interests: ["community-newsletter"],
  },
  "community-call": {
    path: "/api/marketing/forms/community-call",
    formType: "community-call",
    tags: ["event-registered"],
  },
  event: {
    path: "/api/marketing/forms/community-call",
    formType: "community-call",
    tags: ["event-registered"],
  },
  contact: {
    path: "/api/marketing/forms/contact",
    formType: "contact",
    tags: ["contact-form"],
  },
  content: {
    path: "/api/marketing/forms/contact",
    formType: "contact",
    tags: ["contact-form"],
  },
  questionnaire: {
    path: "/api/marketing/forms/questionnaire",
    formType: "questionnaire",
    tags: ["query"],
  },
  newcomers: {
    path: "/api/marketing/forms/newcomers",
    formType: "newcomers",
    tags: ["newcomer"],
  },
  "epsma-book": {
    path: "/api/marketing/forms/epsma-book",
    formType: "epsma-book",
    tags: ["epsma-book"],
  },
  "open-source-pricing": {
    path: "/api/marketing/forms/open-source-pricing",
    formType: "open-source-pricing",
    tags: ["open-source-pricing"],
  },
  "docker-extension": {
    path: "/api/marketing/forms/docker-extension",
    formType: "docker-extension",
    tags: ["docker-extension"],
  },
  kanvas: {
    path: "/api/marketing/forms/kanvas-beta",
    formType: "kanvas-beta",
    tags: ["meshmap-beta"],
  },
  "kanvas-beta": {
    path: "/api/marketing/forms/kanvas-beta",
    formType: "kanvas-beta",
    tags: ["meshmap-beta"],
  },
  "playground-beta": {
    path: "/api/marketing/forms/playground-beta",
    formType: "playground-beta",
    tags: ["playground-beta"],
  },
  unsubscribe: {
    path: "/api/marketing/forms/unsubscribe",
    formType: "unsubscribe",
    tags: [],
  },
};

const CANONICAL = {
  email: "email",
  EMAIL: "email",
  firstName: "firstName",
  firstname: "firstName",
  FNAME: "firstName",
  lastName: "lastName",
  lastname: "lastName",
  LNAME: "lastName",
  phone: "phone",
  PHONE: "phone",
  audience: "audience",
  subject: "subject",
  message: "message",
  scope: "scope",
  occupation: "occupation",
  organization: "organization",
  org: "org",
  role: "role",
  github: "github",
  twitter: "twitter",
  linkedin: "linkedin",
  tshirtSize: "tshirtSize",
  picture: "picture",
  projectname: "projectname",
  repository: "repository",
  website: "website",
  goal: "goal",
  company_website: "company_website",
};

const CHECKED = new Set(["true", "on", "1", "yes"]);

function marketingError(message, code, cause) {
  const error = new Error(message, cause ? { cause } : undefined);
  error.name = "MarketingFormError";
  error.code = code;
  return error;
}

function mesheryCloudBase() {
  const configured =
    process.env.GATSBY_MESHERY_CLOUD_BASE ||
    process.env.MESHERY_CLOUD_BASE ||
    "";
  const trimmed = String(configured).trim();
  return (trimmed || DEFAULT_BASE).replace(/\/$/, "");
}

function resolveMarketingForm(formType) {
  const spec = FORM_CATALOG[formType];
  if (!spec) {
    throw marketingError(
      "Please check the form and try again.",
      "unknown-form",
    );
  }
  return spec;
}

function appendExtra(extras, key, value) {
  extras.push(`${key}: ${value}`);
}

function assignValue(body, extras, key, value) {
  if (value == null || key === "form") {
    return;
  }
  if (Array.isArray(value)) {
    const parts = value
      .map((item) => (item == null ? "" : String(item).trim()))
      .filter(Boolean);
    if (!parts.length) {
      return;
    }
    if (key === "interests") {
      body.interests = (body.interests || []).concat(parts);
      return;
    }
    appendExtra(extras, key, parts.join(", "));
    return;
  }
  if (typeof value === "object") {
    Object.keys(value).forEach((child) => {
      assignValue(body, extras, child, value[child]);
    });
    return;
  }
  if (typeof value === "boolean") {
    if (key === "subscribed" || key === "newsletter") {
      if (value) {
        body.subscribed = true;
      }
      return;
    }
    appendExtra(extras, key, value ? "yes" : "no");
    return;
  }
  if (typeof value === "number") {
    if (Number.isFinite(value)) {
      appendExtra(extras, key, value);
    }
    return;
  }
  const text = String(value).trim();
  if (!text) {
    return;
  }
  if (key === "subscribed" || key === "newsletter") {
    if (CHECKED.has(text.toLowerCase())) {
      body.subscribed = true;
    }
    return;
  }
  if (key === "interests") {
    appendExtra(extras, key, text);
    return;
  }
  const canonical = CANONICAL[key];
  if (!canonical) {
    appendExtra(extras, key, text);
    return;
  }
  if (canonical === "company_website") {
    body.company_website = text;
    return;
  }
  if (canonical === "org" || canonical === "organization") {
    if (!body.org && !body.organization) {
      body[canonical] = text;
    }
    return;
  }
  if (!body[canonical]) {
    body[canonical] = text;
  }
}

function toMarketingBody(fields, spec) {
  const body = {};
  const extras = [];
  assignValue(body, extras, null, fields || {});
  if (extras.length) {
    const extraText = extras.join("\n");
    body.message = body.message ? `${body.message}\n${extraText}` : extraText;
  }
  if (!Object.prototype.hasOwnProperty.call(body, "company_website")) {
    body.company_website = "";
  }
  if (spec.interests && spec.interests.length) {
    const selected = new Set(body.interests || []);
    spec.interests.forEach((interest) => selected.add(interest));
    body.interests = Array.from(selected);
  }
  return body;
}

function buildMarketingRequest(formType, fields) {
  const spec = resolveMarketingForm(formType);
  return {
    url: `${mesheryCloudBase()}${spec.path}`,
    body: toMarketingBody(fields, spec),
    formType: spec.formType,
    tags: spec.tags.slice(),
  };
}

function submissionMessage(formType, result) {
  const status = result && result.status;
  if (status === "unsubscribed") {
    return "You have been unsubscribed.";
  }
  if (status === "suppressed") {
    return "This address is not subscribed.";
  }
  let resolved = formType;
  if (FORM_CATALOG[formType]) {
    resolved = FORM_CATALOG[formType].formType;
  }
  if (resolved === "community-call") {
    return "Thanks. You are registered.";
  }
  if (resolved === "footer-subscribe") {
    return "Thanks for subscribing.";
  }
  return "Thanks. We received your submission.";
}

async function errorMessageFrom(response) {
  if (response.status === 429) {
    return "Too many submissions. Please wait a minute and try again.";
  }
  if (response.status === 400) {
    return "Please check the form and try again.";
  }
  return "We could not submit this form. Please try again.";
}

async function submitMarketingForm(formType, fields, options) {
  const request = buildMarketingRequest(formType, fields);
  const fetchImpl = (options && options.fetchImpl) || fetch;
  let response;
  try {
    response = await fetchImpl(request.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "omit",
      body: JSON.stringify(request.body),
    });
  } catch (error) {
    throw marketingError(
      "We could not reach the server. Please try again.",
      "network",
      error,
    );
  }
  if (!response.ok) {
    throw marketingError(
      await errorMessageFrom(response),
      `http-${response.status}`,
    );
  }
  try {
    return await response.json();
  } catch (error) {
    return { status: "accepted", notified: false, cause: error && error.name };
  }
}

module.exports = {
  FORM_CATALOG,
  mesheryCloudBase,
  resolveMarketingForm,
  buildMarketingRequest,
  submissionMessage,
  submitMarketingForm,
};
