// Example: finding files by glob pattern from an Action, via @actions/glob.
// Not part of this template's demo flow (see run.ts) -- a reference for
// actions that need to enumerate files in the checked-out repo.

import * as glob from '@actions/glob'

export async function findFiles(pattern: string): Promise<string[]> {
  const globber = await glob.create(pattern)
  return globber.glob()
}
