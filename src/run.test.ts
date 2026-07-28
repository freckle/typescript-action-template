import * as core from "@actions/core";

import { PullRequest, GitHub } from "./github-client.js";
import { run } from "./run.js";

vi.mock(import("@actions/core"), () => {
  return {
    info: vi.fn(),
  };
});

describe("run", () => {
  it("logs the given context and inputs", async () => {
    const context = {
      eventName: "pull_request",
      owner: "freckle",
      repo: "action-name",
      pullRequestNumber: 42,
    };

    const inputs = { token: "_token_" };

    const pullRequest = {
      number: 42,
      title: "Awesome PR",
    };

    const client = {
      getPullRequest: async (
        _owner: string,
        _repo: string,
        _pull_number: number,
      ): Promise<PullRequest> => {
        return pullRequest;
      },
    };

    await run(context, inputs, client);

    expect(core.info).toHaveBeenCalledWith(JSON.stringify(context));
    expect(core.info).toHaveBeenCalledWith(JSON.stringify(inputs));
    expect(core.info).toHaveBeenCalledWith(JSON.stringify(pullRequest));
  });
});
