import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/vitest-setup.ts"],
    coverage: {
      exclude: ["./src/mocks/browser.ts", "./src/mocks/handlers.ts"],
    },
  },
});
