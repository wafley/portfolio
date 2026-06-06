import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  ...tailwind.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
  {
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: {
          content: [], // Dummy config for Tailwind v4 to silence missing config warnings
        },
      },
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
