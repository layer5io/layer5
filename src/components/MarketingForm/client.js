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

const AUDIENCES = new Set(["layer5", "meshery-community", "smp"]);

const SCOPES = new Set([
  "Meshery",
  "SMP",
  "SMI",
  "GetNighthawk",
  "Landscape",
  "Community",
]);

const INTERESTS = new Set([
  "learn-service-mesh",
  "community-newsletter",
  "careers",
  "meshery",
  "smp",
  "service-mesh-patterns",
  "getnighthawk",
  "smi",
  "press-analysts",
  "press-journalists",
]);

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
  subject: "subject",
  message: "message",
  occupation: "occupation",
  organization: "organization",
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

function isOptIn(value) {
  if (typeof value === "boolean") {
    return value;
  }
  return CHECKED.has(String(value).trim().toLowerCase());
}

function addInterests(body, slugs) {
  const next = slugs.filter((slug) => INTERESTS.has(slug));
  if (!next.length) {
    return;
  }
  body.interests = (body.interests || []).concat(next);
}

const PRESERVED_ANSWERS = {
  newcomers: new Set([
    "projects",
    "tutorials",
    "meshMate",
    "interests",
    "profiency",
    "interestToShareContribution",
    "areaOfFocus",
    "expect",
    "highlighted",
    "paid",
    "affiliated",
    "help",
  ]),
  "open-source-pricing": new Set([
    "users",
    "sponsors",
    "commercialization",
    "license",
  ]),
};

function noteAnswer(notes, key, value) {
  if (Array.isArray(value)) {
    const parts = value
      .map((item) => (item == null ? "" : String(item).trim()))
      .filter(Boolean);
    if (parts.length) {
      notes.push(`${key}: ${parts.join(", ")}`);
    }
    return;
  }
  if (typeof value === "boolean") {
    notes.push(`${key}: ${value ? "yes" : "no"}`);
    return;
  }
  if (value == null) {
    return;
  }
  const text = String(value).trim();
  if (text) {
    notes.push(`${key}: ${text}`);
  }
}

function assignValue(body, notes, formType, key, value) {
  const preserved = PRESERVED_ANSWERS[formType];
  if (
    key &&
    preserved &&
    preserved.has(key) &&
    (Array.isArray(value) || typeof value !== "object")
  ) {
    noteAnswer(notes, key, value);
    return;
  }
  if (value == null || key === "form") {
    return;
  }
  if (Array.isArray(value)) {
    if (key === "interests") {
      addInterests(
        body,
        value
          .map((item) => (item == null ? "" : String(item).trim()))
          .filter(Boolean),
      );
    }
    return;
  }
  if (typeof value === "object") {
    Object.keys(value).forEach((child) => {
      assignValue(body, notes, formType, child, value[child]);
    });
    return;
  }
  if (key === "subscribed" || key === "newsletter") {
    body.subscribed = isOptIn(value);
    return;
  }
  if (typeof value !== "string") {
    return;
  }
  const text = value.trim();
  if (!text) {
    return;
  }
  if (key === "interests") {
    addInterests(body, [text]);
    return;
  }
  if (key === "org" || key === "organization") {
    if (!body.organization) {
      body.organization = text;
    }
    return;
  }
  if (key === "scope") {
    if (SCOPES.has(text)) {
      body.scope = text;
    }
    return;
  }
  if (key === "audience") {
    if (AUDIENCES.has(text)) {
      body.audience = text;
    }
    return;
  }
  const canonical = CANONICAL[key];
  if (!canonical) {
    return;
  }
  if (canonical === "company_website") {
    body.company_website = text;
    return;
  }
  if (!body[canonical]) {
    body[canonical] = text;
  }
}

function toMarketingBody(fields, spec) {
  const body = {};
  const notes = [];
  assignValue(body, notes, spec.formType, null, fields || {});
  if (notes.length) {
    const extra = notes.join("\n");
    body.message = body.message ? `${body.message}\n${extra}` : extra;
  }
  if (!Object.prototype.hasOwnProperty.call(body, "company_website")) {
    body.company_website = "";
  }
  if (spec.interests && spec.interests.length) {
    addInterests(body, spec.interests);
  }
  if (body.interests) {
    body.interests = Array.from(new Set(body.interests));
  }
  return body;
}

function marketingPreferencesUrl(token) {
  const url = `${mesheryCloudBase()}/api/marketing/preferences`;
  if (!token) {
    return url;
  }
  return `${url}?token=${encodeURIComponent(token)}`;
}

function fieldsFromFormData(formData) {
  const fields = {};
  formData.forEach((value, key) => {
    if (Object.prototype.hasOwnProperty.call(fields, key)) {
      fields[key] = [].concat(fields[key], value);
    } else {
      fields[key] = value;
    }
  });
  return fields;
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

async function meshkitMessage(response) {
  let data;
  try {
    data = await response.json();
  } catch (error) {
    return error && error.name ? "" : "";
  }
  const detail =
    data &&
    (data.long_description ||
      data.longDescription ||
      data.short_description ||
      data.shortDescription);
  if (typeof detail !== "string") {
    return "";
  }
  const cleaned = detail.replace(/[\r\n]+/g, " ").trim();
  if (!cleaned || cleaned.length > 300 || /[<>]/.test(cleaned)) {
    return "";
  }
  return cleaned;
}

async function errorMessageFrom(response) {
  if (response.status === 429) {
    const retryAfter =
      response.headers && response.headers.get
        ? response.headers.get("Retry-After")
        : "";
    const seconds = Number.parseInt(retryAfter, 10);
    if (Number.isFinite(seconds) && seconds > 0) {
      return `Too many submissions. Please wait ${seconds} seconds and try again.`;
    }
    return "Too many submissions. Please wait and try again.";
  }
  if (response.status === 400 || response.status === 500) {
    const detail = await meshkitMessage(response);
    if (detail) {
      return detail;
    }
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
    return {
      status: "accepted",
      notified: error ? false : false,
    };
  }
}

module.exports = {
  AUDIENCES,
  SCOPES,
  INTERESTS,
  FORM_CATALOG,
  mesheryCloudBase,
  marketingPreferencesUrl,
  resolveMarketingForm,
  fieldsFromFormData,
  buildMarketingRequest,
  submissionMessage,
  submitMarketingForm,
};
