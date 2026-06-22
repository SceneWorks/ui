# @sceneworks/ui

The **shared SceneWorks design system** — OKLCH design tokens + theme (dark mode, accent swatches), the app-shell layout, and core React primitives — extracted from SceneWorks and consumed by **SceneWorks, ChatWorks, and SoundWorks**.

> Status: `0.2.0` — the design-system **foundation** (tokens/theme + shell + core primitives + the button/action/card layer), extracted from `SceneWorks/apps/web` (Shortcut epic 7217). Pre-1.0: expect change. Being migrated incrementally.

## Install

Published to npm (public, `@sceneworks` scope). Pin an exact version — the three
consumers (SceneWorks, ChatWorks, SoundWorks) track it in lockstep:

```jsonc
// package.json
"dependencies": {
  "@sceneworks/ui": "0.2.0"
}
```

To track unreleased work, use a git dependency instead
(`"@sceneworks/ui": "github:SceneWorks/ui"`). See [VERSIONING.md](./VERSIONING.md)
for the full pinning + release convention.

## Usage

Load the theme + shell stylesheets once at app startup, then import primitives:

```js
import "@sceneworks/ui/theme.css"; // OKLCH tokens, dark mode, accents
import "@sceneworks/ui/shell.css"; // app-shell layout (.app/.sidebar/.workspace/.topbar)

import { /* Icons, Modal, Logo, StatusDot, ... */ version } from "@sceneworks/ui";
```

Dark mode + accent switching are driven by attributes on `<html>`, matching SceneWorks:

```js
document.documentElement.setAttribute("data-theme", "dark");
document.documentElement.setAttribute("data-accent", "teal");
```

## Develop

- `npm install` — install dev toolchain (Vite, React for the playground).
- `npm run dev` — run the in-repo playground (`index.html` + `example/`), which consumes the package source with live HMR.
- `npm run build` — Vite library build → `dist/sceneworks-ui.js` (ESM) plus the copied `dist/theme.css` / `dist/shell.css`.

Stack: React 18 (peer dependency), Vite library mode, **JS/JSX (no TS)** — matching SceneWorks.

## License

Apache-2.0.
