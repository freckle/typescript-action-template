import * as core from '@actions/core'

import {getInputs} from './inputs.js'

vi.mock(import('@actions/core'), () => {
  return {
    getInput: vi.fn(() => '_token_')
  }
})

describe('getInputs', () => {
  it('reads the github-token input', () => {
    const inputs = getInputs()

    expect(core.getInput).toHaveBeenCalledWith('github-token', {
      required: true
    })
    expect(inputs).toEqual({token: '_token_'})
  })
})
