module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "url" : ["http://localhost/404.html",
                 "http://localhost/index.html",
                 "http://localhost/404/index.html",
                 "http://localhost/about/index.html" ,
                 "http://localhost/cloud-native-management/meshery/index.html",
                 "http://localhost/cloud-native-management/meshmap/index.html",
                 "http://localhost/learn/index.html",
                 "http://localhost/community/index.html"],
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