// @sceneworks/ui — public JS entry.
//
// The shared SceneWorks design system, extracted from SceneWorks apps/web and
// consumed by SceneWorks, ChatWorks, and SoundWorks (Shortcut epic 7217).
//
// The theme + shell stylesheets are separate side-effect imports consumers load
// once at app startup:
//
//   import "@sceneworks/ui/theme.css";   // OKLCH tokens, dark mode, accents
//   import "@sceneworks/ui/shell.css";   // app-shell layout (.app/.sidebar/...)
//
// Keep in sync with package.json "version" on each release (see VERSIONING.md).
export const version = "0.1.0";

// Accent metadata (story sc-7219) — the swatch table, default accent, and id
// validator that pair with the [data-accent] palettes in theme.css.
export { ACCENTS, DEFAULT_ACCENT, isAccentId } from "./theme/accents.js";

// Core React primitives (story sc-7220), extracted from SceneWorks apps/web.
// Their class-based styling rides in shell.css (import "@sceneworks/ui/shell.css").
export { Icon } from "./components/Icons.jsx";
export { Modal } from "./components/Modal.jsx";
export { Logo } from "./components/Logo.jsx";
export { StatusDot } from "./components/StatusDot.jsx";
export { ErrorBoundary } from "./components/ErrorBoundary.jsx";
export { CompactSelector } from "./components/CompactSelector.jsx";
export { Markdown } from "./components/Markdown.jsx";
