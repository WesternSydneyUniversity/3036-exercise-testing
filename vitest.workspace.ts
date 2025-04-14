import react from "@vitejs/plugin-react";
import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vitest.config.ts",
    plugins: [react()],

    test: {
      // an example of file based convention,
      // you don't have to follow it
      include: ["src/**/*.unit.test.{js,ts,jsx,tsx}"],
      name: "unit",
      environment: "jsdom",
      globals: true,
      setupFiles: "./tests/setup.js", // assuming the test folder is in the root of our project
    },
  },
  {
    plugins: [react()],
    test: {
      include: ["src/**/*.browser.{test,spec}.{js,ts,jsx,tsx}"],
      browser: {
        enabled: true,
        provider: "playwright",
        // https://vitest.dev/guide/browser/playwright
        instances: [{ browser: "chromium" }],
      },
    },
  },
]);
