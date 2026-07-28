import * as github from "@actions/github";

export type Context = {
  eventName: string;
};

export function getContext(): Context {
  return {
    eventName: github.context.eventName,
  };
}
