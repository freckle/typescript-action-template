// Example: shelling out via @actions/exec; not part of the demo flow in run.ts

import * as exec from '@actions/exec'

export async function runCommand(command: string, args: string[]): Promise<string> {
  let stdout = ''

  await exec.exec(command, args, {
    listeners: {
      stdout: (data: Buffer) => {
        stdout += data.toString()
      }
    }
  })

  return stdout.trim()
}
