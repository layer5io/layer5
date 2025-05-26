const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const babelParser = require('@babel/eslint-parser');

module.exports = [ 
  {
    ignores: [
      'node_modules/',
      '**/*.test.js',
      'src/utils/',
      '.cache/',
      '.github/',
      'assets/',
      'public/',
      '.babelrc',
      '.env.development',
      'CNAME',
      'CODE_OF_CONDUCT.md',
      'CODEOWNERS',
      'font-preload-cache.json',
      'LICENSE',
      'Makefile',
      'README.md',
      'package.json',
      'package-lock.json',
      'static/'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      react
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.node,
        ...globals.amd
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.recommended.rules,

      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      
      'comma-style': ['error'],
      'arrow-spacing': [
        'error',
        {
          'after': true,
          'before': true
        }
      ],
      
      'block-scoped-var': 'error',
      'block-spacing': 'error',
      'brace-style': [
        'error',
        '1tbs'
      ],
      
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': [
        'error',
        'double'
      ],
      
      'keyword-spacing': 'error',
      'key-spacing': ['error', {
        'beforeColon': false,
        'afterColon': true
      }],
      'space-unary-ops': [
        1, {
          'words': true,
          'nonwords': false
        }
      ],
      'space-infix-ops': ['error'],
      'no-trailing-spaces': 'error',
      
      'no-unused-vars': [
        'warn',
        {
          'varsIgnorePattern': 'React'
        }
      ],
      
      'indent': [
        'error', 2, {
          'FunctionExpression': { 'parameters': 'first' },
          'FunctionDeclaration': { 'parameters': 'first' },
          'MemberExpression': 1,
          'SwitchCase': 1,
          'outerIIFEBody': 0,
          'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 },
          'ignoredNodes': ['TemplateLiteral']
        }
      ],
      
      'linebreak-style': [
        'error',
        'unix'
      ],
      'semi': [
        'error',
        'always'
      ],
      
      'strict': 0,
      'valid-typeof': 0,
      
      'react/display-name': 0,
      'react/prop-types': 0,
      'react/no-unescaped-entities': [0],
      'react/jsx-no-duplicate-props': [0]
    }
  }
];