import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = import.meta.dirname;

// One config serves both roles:
//  - `vite build` → library mode, emits dist/sceneworks-ui.js (ESM).
//  - `vite` (dev) → ignores build.lib and serves the in-repo playground at
//    index.html (see example/). The playground imports package source directly
//    so stories 2-3 get live HMR while verifying parity, without a rebuild.
//
// theme.css / shell.css are NOT imported by the JS entry — they are plain,
// standalone stylesheets copied verbatim into dist by scripts/copy-assets.mjs
// and exposed as the "@sceneworks/ui/theme.css" / "/shell.css" subpath exports.
// Components are class-based (no per-component CSS imports), matching SceneWorks.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(root, "src/index.js"),
      formats: ["es"],
      fileName: () => "sceneworks-ui.js",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
  },
});
