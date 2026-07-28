import * as core from "@actions/core";

// `Context` / `getContext()` encapsulates accessing `github.context` data
import { Context } from "./context.js";

// `Inputs` / `getInputs()` encapsulates `core.getInput()` calls and parsing
import { Inputs } from "./inputs.js";

// `GitHub` encapsulates a mockable to GitHub. Use the same pattern for any
// 3rd-party APIs.
import { GitHub } from "./github-client.js";

// The results of both are passed to a `run()`, allowing it to be easily
// unit-tested by providing static values (see `run.test.ts`).
//
// `main()` wraps `run()`, providing real values and adding error-handling.
export async function run(
  context: Context,
  inputs: Inputs,
  client: GitHub,
): Promise<void> {
  // Your logic here
  core.info(JSON.stringify(context));
  core.info(JSON.stringify(inputs));

  const pr = await client.getPullRequest(
    context.owner,
    context.repo,
    context.pullRequestNumber,
  );

  core.info(JSON.stringify(pr));
}
