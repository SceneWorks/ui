import React from "react";
import { createRoot } from "react-dom/client";

// The playground consumes the package SOURCE (not the built dist) so stories
// 2-3 iterate with live HMR. Theme + shell are side-effect CSS imports, exactly
// how a real consumer loads them via "@sceneworks/ui/theme.css" / "/shell.css".
import "../src/theme/theme.css";
import "../src/shell/shell.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
