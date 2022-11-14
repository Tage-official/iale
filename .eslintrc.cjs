module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint-plugin-import", "eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-jsx-a11y",
        "airbnb", "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "jsx-a11y",
        "import",
        "react-hooks",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
