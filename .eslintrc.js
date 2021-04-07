module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "amd": true
  },
  "settings": {
    "react": {
      "version": "require('./package.json').dependencies.react"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": [
      "error",
      "1tbs"
    ],
    "no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "React"
      }
    ],
    "react/display-name": [0],
    "react/prop-types": [0],
    "react/no-unescaped-entities": [0],
    "react/jsx-no-duplicate-props": [0],
    "indent": [
      "error", 2, {
        "FunctionExpression": {"parameters": "first"},
        "FunctionDeclaration": {"parameters": "first"},
        "MemberExpression": 1,
        "SwitchCase": 1,
        "outerIIFEBody": 0,
        "VariableDeclarator": { "var": 2, "let": 2, "const": 3 },
        ignoredNodes: ["TemplateLiteral"]
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "strict": 0
  }
};

