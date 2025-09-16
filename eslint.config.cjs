const {
    defineConfig,
} = require("eslint/config");

const svelte3 = require("eslint-plugin-svelte3");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends("eslint:recommended", "prettier"),

    plugins: {
        svelte3,
    },

    languageOptions: {
        sourceType: "module",
        ecmaVersion: 2019,
        parserOptions: {},

        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },
}, {
    files: ["**/*.svelte"],
    processor: "svelte3/svelte3",
}]);
