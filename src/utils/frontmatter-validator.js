/**
 * Frontmatter Validator
 * Validates MDX frontmatter metadata with sensible defaults for missing fields
 * Ensures consistency and completeness of content metadata
 */

// Define required and optional fields
const REQUIRED_FIELDS = ["title", "date"];
const OPTIONAL_FIELDS = {
  author: { default: "Layer5 Community", type: "string" },
  tags: { default: [], type: ["array", "string"] },
  description: { default: "", type: "string" },
};

/**
 * Default safe values for missing required fields
 */
const REQUIRED_FIELD_DEFAULTS = {
  title: "Untitled",
  date: new Date().toISOString().split("T")[0],
};

/**
 * Coerce a value to the expected type
 * @param {*} value - The value to coerce
 * @param {string|array} expectedType - Expected type(s)
 * @returns {*} Coerced value
 */
function coerceType(value, expectedType) {
  const types = Array.isArray(expectedType) ? expectedType : [expectedType];

  // If value is already the correct type, return it
  if (types.includes(Array.isArray(value) ? "array" : typeof value)) {
    return value;
  }

  // Handle string to array conversion for tags
  if (types.includes("array") && typeof value === "string") {
    return value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  // Handle array to string conversion
  if (types.includes("string") && Array.isArray(value)) {
    return value.join(", ");
  }

  // Default conversions
  if (typeof value === "string" && types.includes("string")) {
    return value;
  }

  return value;
}

/**
 * Validate a date string
 * @param {string} dateStr - Date string to validate
 * @returns {boolean} True if valid date format
 */
function isValidDate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") {
    return false;
  }

  // Accept ISO date format (YYYY-MM-DD or ISO 8601)
  const isoRegex = /^\d{4}-\d{2}-\d{2}/;
  if (!isoRegex.test(dateStr)) {
    return false;
  }

  // Check if it parses as a valid date
  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date);
}

/**
 * Validate an individual frontmatter field
 * @param {string} fieldName - Name of the field
 * @param {*} value - Field value
 * @param {boolean} isRequired - Whether field is required
 * @returns {object} Validation result
 */
function validateField(fieldName, value, isRequired) {
  const result = {
    fieldName,
    isValid: true,
    error: null,
    warning: null,
  };

  // Special validation for required fields
  if (isRequired) {
    if (value === undefined || value === null || value === "") {
      result.isValid = false;
      result.error = `Required field "${fieldName}" is missing or empty`;
      return result;
    }

    // Special date validation for 'date' field
    if (fieldName === "date" && !isValidDate(value)) {
      result.isValid = false;
      result.error = `Field "${fieldName}" must be a valid date (YYYY-MM-DD or ISO 8601 format)`;
      return result;
    }

    // Check title length
    if (fieldName === "title" && typeof value === "string" && value.length > 200) {
      result.warning = `Field "${fieldName}" is very long (${value.length} characters)`;
    }
  }

  // Validation for optional fields
  if (!isRequired && fieldName in OPTIONAL_FIELDS) {
    const fieldConfig = OPTIONAL_FIELDS[fieldName];

    if (value !== undefined && value !== null) {
      // Validate date fields
      if (fieldName === "date" && !isValidDate(value)) {
        result.warning = `Field "${fieldName}" should be a valid date (YYYY-MM-DD format)`;
      }

      // Validate type for arrays
      if (
        (fieldConfig.type === "array" || Array.isArray(fieldConfig.type)) &&
        !Array.isArray(value) &&
        typeof value !== "string"
      ) {
        result.warning = `Field "${fieldName}" should be an array or string, got ${typeof value}`;
      }
    }
  }

  return result;
}

/**
 * Validate complete frontmatter object
 * @param {object} frontmatter - The frontmatter object to validate
 * @returns {object} Comprehensive validation result
 */
function validateFrontmatter(frontmatter) {
  const result = {
    isValid: true,
    errors: [],
    warnings: [],
    validatedData: {},
    missingRequired: [],
  };

  if (!frontmatter || typeof frontmatter !== "object") {
    result.isValid = false;
    result.errors.push("Frontmatter must be a valid object");
    return result;
  }

  // Create a copy to avoid mutating the original
  const validated = { ...frontmatter };

  // Validate required fields
  REQUIRED_FIELDS.forEach((fieldName) => {
    const value = validated[fieldName];
    const validation = validateField(fieldName, value, true);

    if (!validation.isValid) {
      result.isValid = false;
      result.errors.push(validation.error);
      result.missingRequired.push(fieldName);

      // Use default value for missing required field
      validated[fieldName] = REQUIRED_FIELD_DEFAULTS[fieldName];
    } else if (validation.warning) {
      result.warnings.push(validation.warning);
    }
  });

  // Validate and coerce optional fields
  Object.entries(OPTIONAL_FIELDS).forEach(([fieldName, fieldConfig]) => {
    let value = validated[fieldName];

    if (value === undefined || value === null) {
      // Use default value for missing optional field
      value = fieldConfig.default;
    } else {
      // Coerce to correct type
      value = coerceType(value, fieldConfig.type);

      // Validate the field
      const validation = validateField(fieldName, value, false);
      if (validation.warning) {
        result.warnings.push(validation.warning);
      }
    }

    validated[fieldName] = value;
  });

  // Add any additional fields that aren't in our schema
  Object.keys(frontmatter).forEach((key) => {
    if (
      !REQUIRED_FIELDS.includes(key) &&
      !Object.keys(OPTIONAL_FIELDS).includes(key)
    ) {
      validated[key] = frontmatter[key];
    }
  });

  result.validatedData = validated;
  return result;
}

/**
 * Get the schema definition for frontmatter
 * @returns {object} Schema with required and optional field definitions
 */
function getFrontmatterSchema() {
  return {
    required: REQUIRED_FIELDS.map((field) => ({
      name: field,
      default: REQUIRED_FIELD_DEFAULTS[field],
    })),
    optional: Object.entries(OPTIONAL_FIELDS).map(([name, config]) => ({
      name,
      ...config,
    })),
  };
}

module.exports = {
  validateFrontmatter,
  validateField,
  isValidDate,
  coerceType,
  getFrontmatterSchema,
  REQUIRED_FIELDS,
  OPTIONAL_FIELDS,
};
