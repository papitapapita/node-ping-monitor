import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
