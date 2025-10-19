// eslint.config.mjs

import globals from "globals";
import pluginJs from "@eslint/js"; // Correct import

export default [
  // This applies ESLint's recommended rules
  pluginJs.configs.recommended,

  // Your custom configurations go here
  {
    languageOptions: {
      ecmaVersion: 2022, // Or the version you use
      sourceType: "module",
      globals: {
        ...globals.browser, // for browser environments
        ...globals.node,    // for Node.js environments
        "myCustomGlobal": "readonly"
      }
    },
    rules: {
      // You can override or add rules here
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
