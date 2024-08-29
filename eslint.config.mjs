import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,  // Add Jest globals like 'test' and 'expect'
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",  // Automatically detect the React version
      },
    },
    rules: {
      "prettier/prettier": "error",  // Ensure Prettier rules are correctly applied
      "react/react-in-jsx-scope": "off",  // Disable if using React 17+
    },
  },
  configPrettier,  // Place Prettier config last to override any conflicting rules
];
