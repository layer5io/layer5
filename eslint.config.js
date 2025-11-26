const globals = require("globals");
const babelParser = require("@babel/eslint-parser");
const react = require("eslint-plugin-react");
const js = require("@eslint/js");
const mdxParser = require("eslint-mdx");
const mdxPlugin = require("eslint-plugin-mdx");

const {
  FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = [
  ...compat.extends("eslint:recommended", "plugin:react/recommended"),
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}", "gatsby-*.js", "*.config.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
      },

      parser: babelParser,
      "ecmaVersion": 2018,
      "sourceType": "module",

      parserOptions: {
        "ecmaFeatures": {
          "jsx": true,
        },
      },
    },

    "settings": {
      "react": {
        "version": "detect",
      },
    },

    plugins: {
      react,
    },

    "rules": {
      "array-bracket-spacing": ["error", "never"],
      "comma-style": ["error"],

      "arrow-spacing": ["error", {
        "after": true,
        "before": true,
      }],

      "block-scoped-var": "error",
      "block-spacing": "error",
      "brace-style": ["error", "1tbs"],
      "jsx-quotes": ["error", "prefer-double"],
      "keyword-spacing": "error",

      "key-spacing": ["error", {
        "beforeColon": false,
        "afterColon": true,
      }],

      "no-unused-vars": ["warn", {
        "varsIgnorePattern": "React",
      }],

      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "react/display-name": 0,
      "react/prop-types": 0,
      "react/no-unescaped-entities": [0],
      "react/jsx-no-duplicate-props": [0],
      "react/style-prop-object": "error",
      "react/jsx-closing-tag-location": ["error", "line-aligned"],
      "react/jsx-closing-bracket-location": ["error", {
        "nonEmpty": "line-aligned",
        "selfClosing": "line-aligned",
      }],

      "indent": ["error", 2, {
        "FunctionExpression": {
          "parameters": "first",
        },

        "FunctionDeclaration": {
          "parameters": "first",
        },

        "MemberExpression": 1,
        "SwitchCase": 1,
        "outerIIFEBody": 0,

        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 3,
        },

        ignoredNodes: ["TemplateLiteral"],
      }],

      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "strict": 0,
      "valid-typeof": 0,

      "space-unary-ops": [1, {
        "words": true,
        "nonwords": false,
      }],

      "space-infix-ops": ["error"],
    },
  },
  {
    files: ["content-learn/**/*.mdx", "src/pages/**/*.mdx"],
    languageOptions: {
      parser: mdxParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      mdx: mdxPlugin,
    },
    processor: mdxPlugin.createRemarkProcessor(),
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
      "react/prop-types": "off",
    },
  },
  {
    ignores: [
      "**/node_modules/",
      "**/*.test.js",
      "src/utils/",
      "**/.cache/",
      "**/.github/",
      "**/assets/",
      "**/public/",
      "**/.babelrc",
      "**/.env.development",
      "**/CNAME",
      "**/CODE_OF_CONDUCT.md",
      "**/CODEOWNERS",
      "**/font-preload-cache.json",
      "**/LICENSE",
      "**/Makefile",
      "**/README.md",
      "**/package.json",
      "**/package-lock.json",
      "**/static/",
      "content-learn/**/index.mdx",
    ]
  }
];
