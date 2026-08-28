import * as exec from '@actions/exec'

import {runCommand} from './run-command.js'

vi.mock(import('@actions/exec'), () => {
  return {
    exec: vi.fn(async (_command: string, _args: string[], options: exec.ExecOptions) => {
      options.listeners?.stdout?.(Buffer.from('hello\n'))
      return 0
    })
  } as never
})

describe('runCommand', () => {
  it('runs a command and returns its trimmed stdout', async () => {
    const output = await runCommand('echo', ['hello'])

    expect(exec.exec).toHaveBeenCalledWith(
      'echo',
      ['hello'],
      expect.objectContaining({listeners: expect.anything()})
    )
    expect(output).toBe('hello')
  })
})
