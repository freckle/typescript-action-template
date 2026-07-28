import * as github from "@actions/github";

export type PullRequest = {
  number: number;
  title: string;
};

export interface GitHub {
  getPullRequest: (
    owner: string,
    repo: string,
    pull_number: number,
  ) => Promise<PullRequest>;
}

export function realGitHub(token: string): GitHub {
  const client = github.getOctokit(token);

  return {
    getPullRequest: async (
      owner: string,
      repo: string,
      pull_number: number,
    ): Promise<PullRequest> => {
      const response = await client.rest.pulls.get({
        owner,
        repo,
        pull_number,
      });
      return response.data;
    },
  };
}
