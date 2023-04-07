const urls = require('./urls.json');

module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "numberOfRuns": 1,
        "url": urls
      },
      "assert": {
        "preset": "lighthouse:no-pwa",
        "assertions": {
          "csp-xss": "off",
          "aria-hidden-focus": "off"
        }
      }
    }
  };