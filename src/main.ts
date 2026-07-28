import * as core from "@actions/core";
import * as github from "@actions/github";

import { getContext } from "./context.js";
import { getInputs } from "./inputs.js";
import { run } from "./run.js";

async function main() {
  try {
    const context = getContext();
    const inputs = getInputs();
    run(context, inputs);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else if (typeof error === "string") {
      core.setFailed(error);
    } else {
      core.setFailed("Non-Error exception");
    }
  }
}

main();
