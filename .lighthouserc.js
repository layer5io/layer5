module.exports = {
  "ci": {
    "collect": {
      "staticDistDir": "./public",
        "url" : ["http://localhost/404.html",
               "http://localhost/index.html",
               "http://localhost/404/index.html",
               "http://localhost/company/about.html" ,
               "http://localhost/cloud-native-management/meshery.html",
               "http://localhost/cloud-native-management/meshmap.html",
               "http://localhost/learn/learning-paths.html",
               "http://localhost/learn/service-mesh-books.html",
               "http://localhost/learn/service-mesh-workshops.html",
               "http://localhost/learn.html",
               "http://localhost/blog.html",
               "http://localhost/resources.html",
               "http://localhost/careers.html",
               "http://localhost/community/members.html",
               "http://localhost/community/meshmates.html",
               "http://localhost/community/events.html",
               "http://localhost/community/newcomers.html",],
    },
    "assert": {
      "assertions": {
        "categories:performance": "warn",
        "categories:accessibility": "warn",
        "categories:best-practices": "warn",
        "categories:seo": "warn",
      }
    },
  }
};