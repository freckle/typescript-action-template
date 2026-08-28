import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    mockReset: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      // Without `all`, v8 only reports files actually loaded by a test --
      // untouched files (like main.ts) silently don't appear, instead of
      // counting as 0%. `all` + `include` makes the report honest.
      all: true,
      include: ["src/**/*.ts"],
      // main.ts is a top-level side-effecting entry point with no
      // exports -- per ARCHITECTURE.md it's meant to be thin wiring
      // only, and it's already exercised by the `integration` job in
      // ci.yml (which runs the real bundled action), just not by Vitest.
      exclude: ["src/main.ts"],
      // Gates `pnpm coverage` (and CI) at 70% on all four metrics. Delete
      // this `thresholds` key -- or the whole `coverage` block, and switch
      // ci.yml back to `pnpm test` -- if you don't want coverage enforced.
      thresholds: {
        lines: 70,
        branches: 70,
        functions: 70,
        statements: 70,
      },
    },
  },
});
