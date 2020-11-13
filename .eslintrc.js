module.exports = {
    "env": {
        "browser": true,
        "es6": true,
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
            "error",
            4
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

