import React, { useEffect, useState } from "react";
import {
  version,
  ACCENTS,
  DEFAULT_ACCENT,
  Icon,
  Logo,
  StatusDot,
  CompactSelector,
  Modal,
  Markdown,
  ErrorBoundary,
} from "../src/index.js";

// Story sc-7220 bench: composes the extracted app-shell (.app/.sidebar/.workspace
// /.topbar/.nav-item) and renders every core primitive, all styled by the
// extracted theme.css + shell.css. Drives [data-theme]/[data-accent] on <html>.
const NAV = [
  { id: "library", label: "Library", icon: Icon.Library },
  { id: "image", label: "Image Studio", icon: Icon.Image },
  { id: "video", label: "Video Studio", icon: Icon.Video },
  { id: "models", label: "Models", icon: Icon.Model },
];

const ITEMS = [
  { id: "a", name: "Ada" },
  { id: "b", name: "Grace" },
  { id: "c", name: "Lin" },
];

const MD = `# Markdown primitive
Renders **bold**, *italic*, \`code\`, and [links](https://example.com).

- dependency-free
- safe (no dangerouslySetInnerHTML)

> Block quotes too.`;

export default function App() {
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState(DEFAULT_ACCENT);
  const [active, setActive] = useState("image");
  const [selected, setSelected] = useState("a");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    html.setAttribute("data-accent", accent);
  }, [theme, accent]);

  return (
    <ErrorBoundary>
      <div className="app">
        <aside className="sidebar">
          <div className="brand">
            <span className="brand-mark">
              <Logo size={32} />
            </span>
            <h1>
              Scene<span className="light">Works</span>
            </h1>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-title">Active character</div>
            <CompactSelector
              items={ITEMS}
              selectedId={selected}
              onSelect={(item) => setSelected(item.id)}
              onCreate={() => {}}
              createLabel="New character"
              label="Character"
            />
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-title">Workspace</div>
            <div className="nav-list">
              {NAV.map((item) => {
                const IconCmp = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={item.id === active ? "nav-item active" : "nav-item"}
                    onClick={() => setActive(item.id)}
                  >
                    <IconCmp />
                    <span className="nav-label">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="workspace">
          <header className="topbar">
            <strong>{NAV.find((n) => n.id === active)?.label}</strong>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginLeft: 12 }}>
              <StatusDot ok />
              <span style={{ color: "var(--text-muted)", fontSize: 12 }}>worker online</span>
            </span>

            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              {ACCENTS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  title={a.name}
                  aria-label={a.name}
                  onClick={() => setAccent(a.id)}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: a.swatch,
                    border: accent === a.id ? "2px solid var(--text)" : "2px solid transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
              <button
                type="button"
                className="icon-btn"
                aria-label="Toggle theme"
                onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
              >
                {theme === "light" ? <Icon.Moon /> : <Icon.Sun />}
              </button>
            </div>
          </header>

          <section style={{ padding: 24, overflowY: "auto" }}>
            <p className="eyebrow">@sceneworks/ui v{version}</p>
            <div style={{ display: "flex", gap: 10, margin: "12px 0 24px" }}>
              <button type="button" className="icon-btn" onClick={() => setModalOpen(true)}>
                <Icon.Sparkle /> Open Modal
              </button>
            </div>
            <Markdown content={MD} />
          </section>
        </div>
      </div>

      {modalOpen ? (
        <Modal onClose={() => setModalOpen(false)} className="batch-ops-modal" label="Demo modal">
          <h2 style={{ marginTop: 0 }}>Modal primitive</h2>
          <Markdown content={"Closes on **Escape** or backdrop click. Focus moves into the dialog on mount."} />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="button" className="icon-btn" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </div>
        </Modal>
      ) : null}
    </ErrorBoundary>
  );
}
