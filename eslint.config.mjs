import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  // Include Next.js core rules and TypeScript rules
  ...nextCoreWebVitals,
  ...nextTypeScript,

  // Custom rules
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // Global ignores (like .next, build outputs, etc.)
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
]);
