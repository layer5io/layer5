/**
 * Glob Pattern Validator
 * Validates collection ignore patterns to prevent silent build failures
 * Checks for valid glob syntax and warns if patterns would exclude everything
 */

const minimatch = require("minimatch");
const fs = require("fs");
const path = require("path");

/**
 * Glob validation patterns - basic validation of glob syntax
 * These patterns identify common glob syntax elements
 */
const GLOB_SYNTAX_PATTERNS = {
  wildcards: /[\*\?\[\]]/,
  doubleAsterisk: /\*\*/,
  negation: /^!/,
  characterClass: /\[.*\]/,
  brace: /\{.*\}/,
};

/**
 * Validate a single glob pattern for syntax correctness
 * @param {string} pattern - The glob pattern to validate
 * @returns {object} Validation result with isValid boolean and error message if invalid
 */
function validateGlobPattern(pattern) {
  if (!pattern || typeof pattern !== "string") {
    return {
      isValid: false,
      error: "Pattern must be a non-empty string",
      pattern,
    };
  }

  const trimmedPattern = pattern.trim();

  if (trimmedPattern.length === 0) {
    return {
      isValid: false,
      error: "Pattern cannot be empty or whitespace only",
      pattern,
    };
  }

  // Check for invalid bracket patterns
  const openBrackets = (trimmedPattern.match(/\[/g) || []).length;
  const closeBrackets = (trimmedPattern.match(/\]/g) || []).length;
  if (openBrackets !== closeBrackets) {
    return {
      isValid: false,
      error: "Mismatched brackets in glob pattern",
      pattern: trimmedPattern,
    };
  }

  // Check for invalid brace patterns
  const openBraces = (trimmedPattern.match(/\{/g) || []).length;
  const closeBraces = (trimmedPattern.match(/\}/g) || []).length;
  if (openBraces !== closeBraces) {
    return {
      isValid: false,
      error: "Mismatched braces in glob pattern",
      pattern: trimmedPattern,
    };
  }

  // Check for invalid escape sequences
  if (/\\(?![\\*\?\[\]\{\}\(\)\-\.\+])/.test(trimmedPattern)) {
    return {
      isValid: false,
      error: "Invalid escape sequence in pattern",
      pattern: trimmedPattern,
    };
  }

  return {
    isValid: true,
    error: null,
    pattern: trimmedPattern,
  };
}

/**
 * Check if a glob pattern would match everything (potential error condition)
 * @param {string} pattern - The glob pattern to check
 * @returns {boolean} True if pattern matches all files
 */
function wouldMatchEverything(pattern) {
  const normPattern = pattern.trim();

  // These patterns would match everything
  const universalPatterns = [
    "**",
    "**/*",
    "*",
    ".*",
    "/*",
    "/**",
    "/**/*",
  ];

  return universalPatterns.includes(normPattern);
}

/**
 * Check if a glob pattern would exclude everything when used in ignore context
 * @param {string} pattern - The glob pattern to check
 * @returns {boolean} True if pattern is overly restrictive
 */
function wouldExcludeEverything(pattern) {
  const normPattern = pattern.trim();

  // These negation patterns would exclude everything
  if (normPattern.startsWith("!")) {
    const negatedPattern = normPattern.substring(1);
    return wouldMatchEverything(negatedPattern);
  }

  return false;
}

/**
 * Validate an array of glob patterns (can be strings or already normalized)
 * @param {array} patterns - Array of glob pattern strings
 * @param {object} options - Configuration options
 * @returns {object} Comprehensive validation result
 */
function validateGlobPatterns(patterns, options = {}) {
  const {
    throwOnError = false,
    logExcludedFiles = false,
    fileDirectory = null,
  } = options;

  const results = {
    isValid: true,
    errors: [],
    warnings: [],
    validPatterns: [],
    invalidPatterns: [],
    excludedFiles: [],
  };

  // Handle non-array input
  if (!Array.isArray(patterns)) {
    if (typeof patterns === "string") {
      // Convert single string to array
      patterns = [patterns];
    } else {
      results.isValid = false;
      results.errors.push("Patterns must be an array of strings or a single string");
      if (throwOnError) {
        throw new Error(results.errors[0]);
      }
      return results;
    }
  }

  // Empty array is valid (no exclusions)
  if (patterns.length === 0) {
    return results;
  }

  // Validate each pattern
  patterns.forEach((pattern, index) => {
    const validation = validateGlobPattern(pattern);

    if (!validation.isValid) {
      results.isValid = false;
      results.errors.push(
        `Pattern ${index}: ${validation.error} - "${pattern}"`,
      );
      results.invalidPatterns.push({
        pattern,
        index,
        error: validation.error,
      });
    } else {
      const normalizedPattern = validation.pattern;
      results.validPatterns.push(normalizedPattern);

      // Check for problematic patterns
      if (wouldMatchEverything(normalizedPattern)) {
        results.warnings.push(
          `Pattern ${index}: "${normalizedPattern}" matches all files - this may be too broad`,
        );
      }

      if (wouldExcludeEverything(normalizedPattern)) {
        results.warnings.push(
          `Pattern ${index}: "${normalizedPattern}" would exclude everything - review this pattern`,
        );
        results.isValid = false;
        results.errors.push(
          `Pattern ${index}: Would exclude all files - "${normalizedPattern}"`,
        );
      }
    }
  });

  // Log excluded files if directory is provided
  if (
    logExcludedFiles &&
    fileDirectory &&
    fs.existsSync(fileDirectory) &&
    results.validPatterns.length > 0
  ) {
    try {
      const allFiles = getAllFilesRecursive(fileDirectory);
      results.excludedFiles = allFiles.filter((file) =>
        results.validPatterns.some((pattern) =>
          minimatch(file, pattern, { dot: true }),
        ),
      );

      if (results.excludedFiles.length > 0) {
        console.log(
          `[Glob Validator] Excluded ${results.excludedFiles.length} files:`,
        );
        results.excludedFiles.slice(0, 10).forEach((file) => {
          console.log(`  - ${file}`);
        });
        if (results.excludedFiles.length > 10) {
          console.log(`  ... and ${results.excludedFiles.length - 10} more`);
        }
      }
    } catch (error) {
      console.error("[Glob Validator] Error logging excluded files:", error);
    }
  }

  if (!results.isValid && throwOnError) {
    const errorMessage = results.errors.join("; ");
    throw new Error(`[Glob Validator] ${errorMessage}`);
  }

  return results;
}

/**
 * Get all files in a directory recursively (utility function)
 * @private
 * @param {string} dirPath - Directory path
 * @returns {array} Array of file paths relative to dirPath
 */
function getAllFilesRecursive(dirPath, relativePath = "") {
  let files = [];

  try {
    const items = fs.readdirSync(dirPath);

    items.forEach((item) => {
      const fullPath = path.join(dirPath, item);
      const relativePath = path.join(relativePath, item);

      // Skip node_modules and hidden directories
      if (item === "node_modules" || item.startsWith(".")) {
        return;
      }

      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(getAllFilesRecursive(fullPath, relativePath));
        } else {
          files.push(relativePath.replace(/\\/g, "/"));
        }
      } catch (error) {
        // Skip files we can't stat
      }
    });
  } catch (error) {
    console.error(`[Glob Validator] Error reading directory ${dirPath}:`, error);
  }

  return files;
}

module.exports = {
  validateGlobPattern,
  validateGlobPatterns,
  wouldMatchEverything,
  wouldExcludeEverything,
};
