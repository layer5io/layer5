import React, { useState, useCallback, useEffect, useRef } from "react";
import SEO from "../components/seo";

const BRAND_COLOR = "#00b39f";

const ALL_COLLECTIONS = [
  "blog",
  "events",
  "integrations",
  "members",
  "news",
  "resources",
];

// Which profile is the minimum required to enable each collection.
const COLLECTION_WEIGHT = {
  blog: "content",
  events: "content",
  news: "content",
  resources: "content",
  integrations: "full",
  members: "full",
};

// Quick-restore commands shown above the picker, keyed by enabledBy value.
const RESTORE_COMMANDS = {
  content: [
    {
      cmd: "make site-content",
      note: "includes blog, news, events, resources — skips members and integrations",
    },
    { cmd: "make site-full", note: "includes all collections" },
  ],
  full: [{ cmd: "make site-full", note: "includes all collections" }],
};

const CONTENT_EXCLUSIONS = new Set(["integrations", "members"]);

// Derive the right command from the set of collections the user wants to include.
function generateCommand(included) {
  const excluded = ALL_COLLECTIONS.filter((c) => !included.has(c)).sort();

  if (excluded.length === 0) return "make site-full";
  if (excluded.length === ALL_COLLECTIONS.length) return "make site";

  const isContentProfile =
    excluded.length === CONTENT_EXCLUSIONS.size &&
    excluded.every((c) => CONTENT_EXCLUSIONS.has(c));
  if (isContentProfile) return "make site-content";

  return `BUILD_COLLECTIONS_EXCLUDE=${excluded.join(",")} make site-custom`;
}

// ── Copy button ────────────────────────────────────────────────────────────────

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(() => {
    if (
      typeof navigator === "undefined" ||
      typeof window === "undefined" ||
      !window.isSecureContext ||
      !navigator.clipboard?.writeText
    ) {
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  }, [text]);

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied!" : `Copy command: ${text}`}
        style={{
          flexShrink: 0,
          padding: "0.2rem 0.6rem",
          background: copied ? BRAND_COLOR : "transparent",
          border: `1px solid ${BRAND_COLOR}`,
          borderRadius: "4px",
          color: copied ? "#fff" : BRAND_COLOR,
          cursor: "pointer",
          fontSize: "0.75rem",
          lineHeight: 1.4,
          transition: "background 0.15s, color 0.15s",
          whiteSpace: "nowrap",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <span
        aria-live="polite"
        role="status"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {copied ? "Copied!" : ""}
      </span>
    </>
  );
}

// ── Single command row with optional note ──────────────────────────────────────

function CommandLine({ cmd, note }) {
  return (
    <div style={{ marginBottom: note ? "0.9rem" : "0.5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <code
          style={{
            background: "rgba(128,128,128,0.15)",
            padding: "0.25rem 0.55rem",
            borderRadius: "4px",
            fontSize: "0.85rem",
            fontFamily: "monospace",
            wordBreak: "break-all",
          }}
        >
          {cmd}
        </code>
        <CopyButton text={cmd} />
      </div>
      {note && (
        <p
          style={{ margin: "0.25rem 0 0", fontSize: "0.75rem", opacity: 0.55 }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

// ── Main template ──────────────────────────────────────────────────────────────

const LitePlaceholder = ({ pageContext, location }) => {
  const {
    heading = "Content disabled in lite mode",
    description = "This route is intentionally skipped when BUILD_FULL_SITE=false.",
    enabledBy = "full",
    collection,
  } = pageContext;

  const restoreCommands = RESTORE_COMMANDS[enabledBy] ?? RESTORE_COMMANDS.full;

  // Pre-check the current route's collection so the generated command is immediately useful.
  const [included, setIncluded] = useState(() => {
    const initial = new Set();
    if (collection && ALL_COLLECTIONS.includes(collection))
      initial.add(collection);
    return initial;
  });

  const toggle = useCallback((name) => {
    setIncluded((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }, []);

  const customCommand = generateCommand(included);

  return (
    <main
      style={{
        padding: "4rem 1.5rem",
        textAlign: "center",
        maxWidth: "680px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontWeight: 600,
          textTransform: "capitalize",
          fontSize: "1.05rem",
        }}
      >
        {heading}
      </p>
      <p style={{ marginTop: "0.75rem", lineHeight: 1.6, opacity: 0.8 }}>
        {description}
      </p>

      {/* ── Quick restore ─────────────────────────────────────────────────── */}
      <div style={{ marginTop: "1.75rem" }}>
        <p
          style={{
            fontStyle: "italic",
            marginBottom: "0.8rem",
            opacity: 0.7,
          }}
        >
          Restart your dev server with one of these commands to restore this
          route:
        </p>
        {restoreCommands.map(({ cmd, note }) => (
          <CommandLine key={cmd} cmd={cmd} note={note} />
        ))}
      </div>

      {/* ── À la carte picker ─────────────────────────────────────────────── */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1.25rem 1.5rem",
          border: "1px solid rgba(128,128,128,0.25)",
          borderRadius: "8px",
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: "0.9rem" }}>
          Build collections à la carte
        </p>
        <p style={{ fontSize: "0.8rem", opacity: 0.6, marginBottom: "1rem" }}>
          Check the collections you want included, then copy the generated
          command.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, auto))",
            justifyContent: "center",
            gap: "0.55rem 1.5rem",
            textAlign: "left",
          }}
        >
          {ALL_COLLECTIONS.map((name) => (
            <label
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              <input
                type="checkbox"
                checked={included.has(name)}
                onChange={() => toggle(name)}
                style={{ accentColor: BRAND_COLOR, cursor: "pointer" }}
              />
              {name}
              {COLLECTION_WEIGHT[name] === "full" && (
                <span
                  title="Skipped in both core and content profiles — only make site-full includes this"
                  style={{
                    fontSize: "0.65rem",
                    opacity: 0.45,
                    fontStyle: "italic",
                  }}
                >
                  (heavy)
                </span>
              )}
            </label>
          ))}
        </div>

        <div style={{ marginTop: "1.25rem" }}>
          <CommandLine cmd={customCommand} />
          {customCommand.startsWith("BUILD_COLLECTIONS_EXCLUDE") && (
            <p
              style={{
                fontSize: "0.72rem",
                opacity: 0.5,
                marginTop: "0.25rem",
              }}
            >
              Uses <code>make site-custom</code> which starts with no preset
              exclusions, then applies only what you specify.
            </p>
          )}
        </div>
      </div>

      {/* ── Contributing guide link ───────────────────────────────────────── */}
      <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", opacity: 0.5 }}>
        All build profiles and environment variables are documented in the{" "}
        <a
          href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#environment-variables"
          style={{ color: BRAND_COLOR }}
          target="_blank"
          rel="noopener noreferrer"
        >
          contributing guide
        </a>
        .
      </p>

      {location?.pathname && (
        <p style={{ marginTop: "1.25rem", fontSize: "0.85rem", opacity: 0.45 }}>
          Requested path: <code>{location.pathname}</code>
        </p>
      )}
    </main>
  );
};

export default LitePlaceholder;

export const Head = ({ pageContext }) => {
  const {
    heading = "Content disabled in lite mode",
    description = "",
    enabledBy = "full",
  } = pageContext;
  const commands = RESTORE_COMMANDS[enabledBy] ?? RESTORE_COMMANDS.full;
  return (
    <SEO
      title={heading}
      description={`${description} ${commands[0].cmd}`.trim()}
    />
  );
};
