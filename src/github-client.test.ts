import * as github from "@actions/github";

import { realGitHubClient } from "./github-client.js";

const { getPullRequest } = vi.hoisted(() => {
  return { getPullRequest: vi.fn() };
});

vi.mock(import("@actions/github"), () => {
  return {
    getOctokit: vi.fn(() => {
      return {
        rest: {
          pulls: { get: getPullRequest },
        },
      };
    }),
  } as never;
});

describe("realGitHubClient", () => {
  it("fetches a pull request via the Octokit client", async () => {
    getPullRequest.mockResolvedValue({
      data: { number: 42, title: "Awesome PR" },
    });

    const client = realGitHubClient("_token_");
    const pr = await client.getPullRequest("freckle", "action-name", 42);

    expect(github.getOctokit).toHaveBeenCalledWith("_token_");
    expect(getPullRequest).toHaveBeenCalledWith({
      owner: "freckle",
      repo: "action-name",
      pull_number: 42,
    });
    expect(pr).toEqual({ number: 42, title: "Awesome PR" });
  });
});
