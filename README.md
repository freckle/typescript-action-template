# TypeScript Action Template

Our custom template repository for GitHub Actions implemented in TypeScript.

[Creating a repository from a template][docs].

[docs]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template

**NOTE**: Be sure to look for strings like "TODO" or "Action name" and update
them accordingly.

## Usage

```yaml
- uses: freckle/TODO-action@v1
```

## Inputs and Outputs

See [action.yml](./action.yml) for a complete list of inputs and outputs.

## Permissions

This action requires the following permissions:

```yaml
permissions: {}
```

As the action uses the GitHub API, these should be updated to reflect the
minimal permissions required. These permissions may need to be manually set in
certain scenarios, such as workflows triggered by Dependabot PRs, which use a
read-only `GITHUB_TOKEN`.

## Versioning

Versioned tags will exist, such as `v1.0.0` and `v2.1.1`. Tags will also exist
for each major version, such as `v1` or `v2` and point to the newest version in
that series.

## Release

To trigger a release (and update the `@v{major}` tag), merge a commit to `main`
that follows [Conventional Commits][]. In short,

- `fix:` to trigger a patch release,
- `feat:` for minor, and
- `feat!:` and major

We don't enforce conventional commits generally (though you are free do so),
it's only required if you want to trigger release.

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/#summary

---

[LICENSE](./LICENSE)
