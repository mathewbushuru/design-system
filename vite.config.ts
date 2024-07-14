import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/vitest-setup.ts",
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: "v8",
      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/{tailwind,prettier,postcss}.config.*",
      ],
    },
  },
});
