import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow `any` (no more build errors)
      "@typescript-eslint/no-explicit-any": "warn",

      // Don’t block build on unused vars
      "@typescript-eslint/no-unused-vars": "warn",

      // Don’t block build on missing hook deps
      "react-hooks/exhaustive-deps": "warn",

      // Optional: allow <img>, Next.js still suggests <Image />
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;
