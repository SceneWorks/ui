// Copies the standalone design-system stylesheets into dist/ after the Vite
// library build. theme.css / shell.css are plain CSS (no bundling) so a verbatim
// copy guarantees zero drift from the SceneWorks originals they were extracted
// from. They are exposed via the package's "./theme.css" / "./shell.css" exports.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");

const ASSETS = [
  ["src/theme/theme.css", "dist/theme.css"],
  ["src/shell/shell.css", "dist/shell.css"],
];

await mkdir(dist, { recursive: true });
for (const [from, to] of ASSETS) {
  await copyFile(resolve(root, from), resolve(root, to));
  console.log(`copied ${from} -> ${to}`);
}
