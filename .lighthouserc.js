module.exports = {
    "ci": {
      "collect": {
        "url" : " http://localhost/404.html" ,
      },
      "assert": {
        "preset": "lighthouse:no-pwa",
        "assertions": {
          "csp-xss": "off",
        }
      }
    }
  };