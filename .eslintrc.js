module.exports = {

  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "amd": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "@babel/eslint-parser",
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
    "array-bracket-spacing": ["error", "never"],
    "comma-style": ["error"],
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
    "jsx-quotes": ["error", "prefer-double"],
    "keyword-spacing": "error",
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
    }],
    "no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "React"
      }
    ],
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": [0],
    "react/jsx-no-duplicate-props": [0],
    "indent": [
      "error", 2, {
        "FunctionExpression": { "parameters": "first" },
        "FunctionDeclaration": { "parameters": "first" },
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
    "strict": 0,
    "valid-typeof": 0,
    "space-unary-ops": [
      1, {
        "words": true,
        "nonwords": false
      }
    ],
    "space-infix-ops": [
      "error"
    ]
  },
  "overrides": [
    {
      "files": ["*.mdx", "*.md"],
      "extends": ["plugin:mdx/recommended"],
      "settings": {
        "mdx/code-blocks": true,
        "mdx/language-mapper": {},
      },
      "rules": {
        //these eslint rule exceptions allow for checklint to run and lint mdx files are compatible with MDXv2, and not error out due to react/eslint rules
        "semi": 0,
        "indent": 0,
        "no-trailing-spaces": 0,
        "object-curly-spacing": 0,
        "space-infix-ops": 0,
        "no-irregular-whitespace": 0,
        "no-unused-expressions": 0,
        "linebreak-style": 0,
        "react/jsx-no-undef": 0,
        "no-unused-vars": 0,
      }
    }
  ],
};
