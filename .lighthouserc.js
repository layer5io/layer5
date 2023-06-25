module.exports = {
    "ci": {
      "collect": {
        "staticDistDir": "./public",
        "url" : [
          "http://localhost/404.html",
          "http://localhost/404/index.html",
          "http://localhost",
          "http://localhost/company/about/index.html",
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
          "http://localhost/community/newcomers/index.html",
        ],
      },
      "assert": {
        "assertions": {
          "categories:performance": ["warn", {"minScore": .90}],
          "categories:accessibility": ["warn", {"minScore": .90}],
          "categories:best-practices": ["warn", {"minScore": .90}],
          "categories:seo": ["warn", {"minScore": .90}],
          }
        },
      "upload": {
        "target": "temporary-public-storage",
      },
    }
  };