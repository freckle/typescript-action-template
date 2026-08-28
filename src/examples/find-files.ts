// Example: globbing files via @actions/glob; not part of the demo flow in run.ts

import * as glob from '@actions/glob'

export async function findFiles(pattern: string): Promise<string[]> {
  const globber = await glob.create(pattern)
  return globber.glob()
}
