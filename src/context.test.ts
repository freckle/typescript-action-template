import { getContext } from "./context.js";

vi.mock(import("@actions/github"), () => {
  return {
    context: {
      eventName: "pull_request",
      repo: { owner: "freckle", repo: "action-name" },
      payload: { number: 42 },
    },
  } as never;
});

describe("getContext", () => {
  it("extracts the relevant fields from github.context", () => {
    const context = getContext();

    expect(context).toEqual({
      eventName: "pull_request",
      owner: "freckle",
      repo: "action-name",
      pullRequestNumber: 42,
    });
  });
});
