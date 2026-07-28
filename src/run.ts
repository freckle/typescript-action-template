import * as core from "@actions/core";

// `Context` / `getContext()` encapsulates accessing `github.context` data
import { Context } from "./context.js";

// `Inputs` / `getInputs()` encapsulates `core.getInput()` calls and parsing
import { Inputs } from "./inputs.js";

// The results of both are passed to a `run()`, allowing it to be easily
// unit-tested by providing static values (see `run.test.ts`).
//
// `main()` wraps `run()`, providing real values and adding error-handling.
//
// NOTE: If 3rd-party APIs (including GitHub) are accessed within `run()`, then
// a client should be created and passed to it in `main()`, and that client
// should be mockable (up to you how, there are various options we like).
export async function run(context: Context, inputs: Inputs): Promise<void> {
  // Your logic here
  core.info(JSON.stringify(context));
  core.info(JSON.stringify(inputs));
}
