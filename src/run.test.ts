import * as core from "@actions/core";

import { run } from "./run.js";

vi.mock(import("@actions/core"), () => {
  return {
    info: vi.fn(),
  };
});

describe("run", () => {
  it("logs the given context and inputs", () => {
    const context = { eventName: "pull_request" };
    const inputs = { token: "_token_" };

    run(context, inputs);

    expect(core.info).toHaveBeenCalledWith('{"eventName":"pull_request"}');
    expect(core.info).toHaveBeenCalledWith('{"token":"_token_"}');
  });
});
