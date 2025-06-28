import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    languageOptions: { globals: globals.node },
    rules: {
      // Indentation rule: 2 spaces
      "indent": ["error", 2],
      // Space before function parenthesis
      "space-before-function-paren": ["error", "always"],
      // No space inside parenthesess
      "space-in-parens": ["error", "never"]
    }
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
]);
