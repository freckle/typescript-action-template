import * as github from '@actions/github'
import {RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods'
import {OctokitResponse} from '@octokit/types'

// Derived from Octokit's own types so it stays correct as the API shape changes
export type PullRequest = RestEndpointMethodTypes['pulls']['get']['response']['data']

export interface GitHubClient {
  getPullRequest: (owner: string, repo: string, pull_number: number) => Promise<PullRequest>
}

export function realGitHubClient(token: string): GitHubClient {
  const client = github.getOctokit(token)

  return {
    getPullRequest: async (
      owner: string,
      repo: string,
      pull_number: number
    ): Promise<PullRequest> => {
      const response: OctokitResponse<PullRequest> = await client.rest.pulls.get({
        owner,
        repo,
        pull_number
      })
      return response.data
    }
  }
}
