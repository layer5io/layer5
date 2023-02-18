module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "url" : ["http://localhost/404.html" ,"http://localhost/index.html","http://localhost/404/index.html","http://localhost/about/index.html"],
      },
      "assert": {
        "preset": "lighthouse:no-pwa",
        "assertions": {
          "csp-xss": "on",
        }
      }
    }
  };