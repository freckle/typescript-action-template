import * as glob from "@actions/glob";

import { findFiles } from "./find-files.js";

const { globFn } = vi.hoisted(() => {
  return { globFn: vi.fn() };
});

vi.mock(import("@actions/glob"), () => {
  return {
    create: vi.fn(async () => {
      return { glob: globFn };
    }),
  } as never;
});

describe("findFiles", () => {
  it("returns files matching the glob pattern", async () => {
    globFn.mockResolvedValue(["src/main.ts", "src/run.ts"]);

    const files = await findFiles("src/**/*.ts");

    expect(glob.create).toHaveBeenCalledWith("src/**/*.ts");
    expect(files).toEqual(["src/main.ts", "src/run.ts"]);
  });
});
