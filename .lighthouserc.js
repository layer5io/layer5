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
                 "http://localhost/learn/**/*.html",
                 "http://localhost/landscape/index.html",
                 "http://localhost/projects/**/*.html",
                 "http://localhost/blog/**/*.html",
                 "http://localhost/resources/**/*.html",
                 "http://localhost/company/**/*.html",
                 "http://localhost/careers/**/*.html",
                 "http://localhost/partners/index.html",
                 "http://localhost/community/**/*.html",],
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