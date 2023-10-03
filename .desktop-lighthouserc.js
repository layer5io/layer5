module.exports = {
  "ci": {
    "collect": {
      "settings": {
        "preset": "desktop"
        },
      "staticDistDir": "./public",
      "url": [
        "http://localhost/404/index.html?desktop",
        "http://localhost/?desktop",
        "http://localhost/company/about/index.html?desktop",
         "http://localhost/cloud-native-management/meshery/index.html?desktop",
         "http://localhost/cloud-native-management/meshmap/index.html?desktop",
         "http://localhost/learn/learning-paths/index.html?desktop",
         "http://localhost/learn/service-mesh-books/index.html?desktop",
         "http://localhost/learn/service-mesh-workshops/index.html?desktop",
         "http://localhost/learn/index.html?desktop",
         "http://localhost/blog/index.html?desktop",
         "http://localhost/resources/index.html?desktop",
         "http://localhost/careers/index.html?desktop",
         "http://localhost/community/members/index.html?desktop",
         "http://localhost/community/meshmates/index.html?desktop",
         "http://localhost/community/events/index.html?desktop",
         "http://localhost/community/newcomers/index.html?desktop",
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