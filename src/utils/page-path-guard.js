/* eslint-env node */

// Returns a function that records each page and returns the component of an
// earlier page with the same path, so silent overwrites can fail the build.
const createPagePathGuard = () => {
  const componentsByPath = new Map();

  return ({ path, component }) => {
    const previous = componentsByPath.get(path);
    componentsByPath.set(path, component);
    return previous;
  };
};

module.exports = { createPagePathGuard };
