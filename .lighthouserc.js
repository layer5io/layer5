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

                 "http://localhost/learn/learning-paths/index.html",
                 "http://localhost/learn/service-mesh-books/index.html",
                 "http://localhost/learn/service-mesh-workshops/index.html",
                 "http://localhost/learn/index.html",

                 "http://localhost/blog/index.html",
                 "http://localhost/resources/index.html",
                 "http://localhost/careers/index.html",

                 "http://localhost/community/members/index.html",
                 "http://localhost/community/meshmates/index.html",
                 "http://localhost/community/events/index.html",
                 "http://localhost/community/newcomers/index.html",],
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