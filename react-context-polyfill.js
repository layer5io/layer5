// React Context Registry polyfill for React 19 compatibility
const React = require('react');

// Check if ContextRegistry already exists
if (React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && 
    !React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry) {
  
  // Add a fallback ContextRegistry for packages that expect it
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry = {};
  
  console.warn('React ContextRegistry polyfill applied - this is needed for React 19 compatibility');
}

module.exports = React;