// Example: running a shell command from an Action, via @actions/exec.
// Not part of this template's demo flow (see run.ts) -- a reference for
// actions that need to shell out, e.g. to git or another CLI.

import * as exec from "@actions/exec";

export async function runCommand(
  command: string,
  args: string[],
): Promise<string> {
  let stdout = "";

  await exec.exec(command, args, {
    listeners: {
      stdout: (data: Buffer) => {
        stdout += data.toString();
      },
    },
  });

  return stdout.trim();
}
