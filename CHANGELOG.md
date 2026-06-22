# Changelog

All notable changes to `@sceneworks/ui`. This project adheres to
[semver](https://semver.org); see [VERSIONING.md](./VERSIONING.md).

## 0.2.0 — 2026-06-22

Adds the shared **button / action / card foundation** (sc-7366), completing
ErrorBoundary's fallback styling.

### Added

- Button/action primitives: `.primary-action`, `.secondary-action` (+ `.danger`
  modifier), `.danger-action`, `.file-upload-button`, `.segmented-control` /
  `.compact-segment`, `.toolbar`.
- Surface/typography primitives: `.empty-panel`, `.empty-state`, `.eyebrow`,
  `.view-copy`, `.app-fallback` / `.app-fallback-panel`.
- All in `@sceneworks/ui/shell.css`. These classes are **de-entangled** from
  SceneWorks' shared multi-selector rules — property blocks are byte-identical to
  the source; selector lists are reduced to the design-system primitives.

### Fixed

- `ErrorBoundary`'s fallback screen now renders fully styled (was the one gap from
  0.1.0 / sc-7220).

## 0.1.0 — 2026-06-22

First real release: the design-system **foundation**, extracted from SceneWorks
`apps/web` (epic 7217). Verbatim extraction — colors, layout, and primitives are
byte-identical to SceneWorks.

### Added

- **Theme** (`@sceneworks/ui/theme.css`) — OKLCH design tokens, dark mode
  (`[data-theme="dark"]`), and 7 user-selectable accent palettes
  (`[data-accent="…"]`). Accent metadata (`ACCENTS`, `DEFAULT_ACCENT`,
  `isAccentId`) is exported from the package entry.
- **App-shell layout** (`@sceneworks/ui/shell.css`) — `.app` / `.sidebar` /
  `.workspace` / `.topbar` / `.nav-item`, plus the class styling for the
  primitives below.
- **Core React primitives** — `Icon`, `Modal`, `Logo`, `StatusDot`,
  `ErrorBoundary`, `CompactSelector`, `Markdown`. `CompactSelector` takes an
  injected `renderThumbnail(asset)` prop (app-agnostic; no SceneWorks asset
  coupling).

### Known gaps

- `ErrorBoundary`'s fallback-screen styling (the shared button/action/card
  layer) is not yet extracted — tracked in epic 7217 (sc-7366).
- Webfonts referenced by the type tokens (Plus Jakarta Sans / JetBrains Mono)
  are a consumer-app responsibility to load.

## 0.0.0

Name-reservation placeholder (reserves the `@sceneworks` npm scope).
