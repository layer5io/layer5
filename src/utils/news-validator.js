/**
 * News Validator
 * Validates news items with comprehensive error reporting and category validation
 */

// Define valid news categories
const VALID_CATEGORIES = [
  "announcement",
  "release",
  "blog",
  "event",
  "community",
];

/**
 * Validate a URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL format
 */
function isValidUrl(url) {
  if (!url || typeof url !== "string") {
    return false;
  }

  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
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
 * Validate a single news item
 * @param {object} newsItem - News item to validate
 * @param {string|number} itemId - Optional identifier for the item (for error messages)
 * @returns {object} Validation result with all errors collected
 */
function validateNewsItem(newsItem, itemId = null) {
  const result = {
    isValid: true,
    errors: [],
    warnings: [],
    itemId: itemId || "Unknown",
  };

  if (!newsItem || typeof newsItem !== "object") {
    result.isValid = false;
    result.errors.push(`News item must be a valid object`);
    return result;
  }

  // Validate category (required)
  if (!newsItem.category || typeof newsItem.category !== "string") {
    result.isValid = false;
    result.errors.push(
      `[Item: ${result.itemId}] Missing or invalid "category" field. Must be a string.`,
    );
  } else if (!VALID_CATEGORIES.includes(newsItem.category.toLowerCase())) {
    result.isValid = false;
    result.errors.push(
      `[Item: ${result.itemId}] Invalid category "${newsItem.category}". Valid categories are: ${VALID_CATEGORIES.join(", ")}`,
    );
  }

  // Validate title (required)
  if (!newsItem.title || typeof newsItem.title !== "string") {
    result.isValid = false;
    result.errors.push(
      `[Item: ${result.itemId}] Missing or invalid "title" field. Must be a string.`,
    );
  } else if (newsItem.title.trim().length === 0) {
    result.isValid = false;
    result.errors.push(
      `[Item: ${result.itemId}] Title cannot be empty or whitespace only.`,
    );
  } else if (newsItem.title.length > 200) {
    result.warnings.push(
      `[Item: ${result.itemId}] Title is very long (${newsItem.title.length} characters). Consider shortening it.`,
    );
  }

  // Validate date (optional but if present, must be valid)
  if (newsItem.date) {
    if (!isValidDate(newsItem.date)) {
      result.isValid = false;
      result.errors.push(
        `[Item: ${result.itemId}] Invalid date format "${newsItem.date}". Use YYYY-MM-DD or ISO 8601 format.`,
      );
    }
  }

  // Validate URL (optional but if present, must be valid)
  if (newsItem.url) {
    if (!isValidUrl(newsItem.url)) {
      result.isValid = false;
      result.errors.push(
        `[Item: ${result.itemId}] Invalid URL "${newsItem.url}". Must be a valid URL.`,
      );
    }
  }

  // Validate description (optional)
  if (newsItem.description && typeof newsItem.description !== "string") {
    result.isValid = false;
    result.errors.push(
      `[Item: ${result.itemId}] If provided, "description" must be a string.`,
    );
  }

  // Validate author (optional)
  if (newsItem.author && typeof newsItem.author !== "string") {
    result.isValid = false;
    result.errors.push(
      `[Item: ${result.itemId}] If provided, "author" must be a string.`,
    );
  }

  return result;
}

/**
 * Validate a collection of news items
 * @param {array} newsItems - Array of news items to validate
 * @returns {object} Comprehensive validation result
 */
function validateNewsCollection(newsItems) {
  const result = {
    isValid: true,
    totalItems: 0,
    validItems: 0,
    invalidItems: 0,
    errors: [],
    warnings: [],
    itemResults: [],
  };

  if (!Array.isArray(newsItems)) {
    result.isValid = false;
    result.errors.push("News items must be an array");
    return result;
  }

  if (newsItems.length === 0) {
    result.warnings.push("News collection is empty");
    return result;
  }

  result.totalItems = newsItems.length;

  newsItems.forEach((item, index) => {
    const itemId = item?.id || item?.title || `#${index + 1}`;
    const validation = validateNewsItem(item, itemId);

    result.itemResults.push(validation);

    if (validation.isValid) {
      result.validItems++;
    } else {
      result.invalidItems++;
      result.isValid = false;
      result.errors.push(...validation.errors);
    }

    if (validation.warnings.length > 0) {
      result.warnings.push(...validation.warnings);
    }
  });

  return result;
}

/**
 * Get news item template with all valid categories
 * @returns {object} Template object with all valid categories
 */
function getNewsItemTemplate() {
  return {
    title: "Example News Title",
    category: VALID_CATEGORIES[0],
    date: new Date().toISOString().split("T")[0],
    url: "https://example.com",
    description: "Optional description",
    author: "Optional author",
  };
}

/**
 * Get the list of valid categories
 * @returns {array} Array of valid category strings
 */
function getValidCategories() {
  return [...VALID_CATEGORIES];
}

module.exports = {
  validateNewsItem,
  validateNewsCollection,
  isValidUrl,
  isValidDate,
  getNewsItemTemplate,
  getValidCategories,
  VALID_CATEGORIES,
};
