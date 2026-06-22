# Versioning & consuming `@sceneworks/ui`

`@sceneworks/ui` is the shared design system for **three** apps — SceneWorks,
ChatWorks, and SoundWorks. They are expected to track it **in lockstep**, the
same way the Rust crates (`gen-core`, etc.) are pinned and bumped together.

## Semver

Standard [semver](https://semver.org). We are pre-1.0 (`0.x`), so **minor**
versions (`0.x.0`) may include breaking changes; **patch** versions (`0.x.y`)
are fixes only. Once the API settles across the three consumers, we cut `1.0.0`
and breaking changes move to **major** bumps.

## How the three apps pin it

### While iterating (pre-publish, or tracking unreleased work)

Git dependency — fastest feedback, no publish step:

```jsonc
"dependencies": {
  "@sceneworks/ui": "github:SceneWorks/ui"            // tip of main
  // or pin a branch / commit for reproducibility:
  // "@sceneworks/ui": "github:SceneWorks/ui#<branch>"
  // "@sceneworks/ui": "github:SceneWorks/ui#<sha>"
}
```

> A git dep builds `dist/` on install via the package's `prepare` script, so the
> consumer needs the dev toolchain available (npm installs the dep's
> devDependencies automatically for git deps).

### After publish (the steady state)

Pin an **exact** version and bump the three apps together — no `^`/`~` ranges,
so all three apps always resolve the identical build (mirrors the crate-pin
discipline):

```jsonc
"dependencies": {
  "@sceneworks/ui": "0.1.0"
}
```

When a new version ships, bump the pin in each consumer in the same change set
(or a coordinated set of PRs) and re-test.

## Scope & access

`@sceneworks` is a **public** npm scope (`publishConfig.access` = `public`).
The `0.0.0` name-reservation placeholder is already on npm; real releases start
at `0.1.0`.

## Cutting a release

1. Bump the version in **`package.json`** and the `version` constant in
   **`src/index.js`** (keep them in sync).
2. Add a dated entry to **`CHANGELOG.md`**.
3. Open a PR, get it merged to `main`.
4. From a clean `main` checkout:
   ```bash
   npm install          # ensure the build toolchain is present
   npm publish          # runs `prepare` (vite build + copy CSS) → publishes dist/
   git tag v<version> && git push --tags
   ```
   `npm publish` requires being logged in (`npm login`) with publish rights on
   the `@sceneworks` scope. Only `dist/` ships (see `files` in package.json);
   source, the playground, and configs are not published.
5. Bump the pin in the consuming apps (SceneWorks / ChatWorks / SoundWorks).
