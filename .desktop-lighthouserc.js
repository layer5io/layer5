module.exports = {
  "ci": {
    "collect": {
      "settings": {
        "preset": "desktop"
        },
      "staticDistDir": "./public",
      "url": [
        "http://localhost/index.html?desktop",
        "http://localhost/404/index.html?desktop",
        "http://localhost/company/about/index.html?desktop",
        //  "http://localhost/cloud-native-management/meshery.html",
        //  "http://localhost/cloud-native-management/meshmap.html",
        //  "http://localhost/learn/learning-paths.html",
        //  "http://localhost/learn/service-mesh-books.html",
        //  "http://localhost/learn/service-mesh-workshops.html",
        //  "http://localhost/learn.html",
        //  "http://localhost/blog.html",
        //  "http://localhost/resources.html",
        //  "http://localhost/careers.html",
        //  "http://localhost/community/members.html",
        //  "http://localhost/community/meshmates.html",
        //  "http://localhost/community/events.html",
        //  "http://localhost/community/newcomers.html",
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