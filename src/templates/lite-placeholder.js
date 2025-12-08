import React from "react";
import SEO from "../components/seo";

const LitePlaceholder = ({ pageContext, location }) => {
  const {
    entity = "page",
    heading = "Content disabled in lite mode",
    description = "This route is intentionally skipped when BUILD_FULL_SITE=false.",
  } = pageContext;

  const instructions =
    "Run `make site-full` (or set BUILD_FULL_SITE=true) to source the full dataset, then reload this path.";

  return (
    <>
      <SEO title={heading} description={`${description} ${instructions}`} />
      <main
        style={{
          padding: "4rem 1.5rem",
          textAlign: "center",
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <p style={{ fontWeight: 600, textTransform: "capitalize" }}>{heading}</p>
        <p style={{ marginTop: "1rem", lineHeight: 1.5 }}>{description}</p>
        <p style={{ marginTop: "0.75rem", fontStyle: "italic" }}>{instructions}</p>
        {location?.pathname && (
          <p style={{ marginTop: "1.5rem", color: "#555" }}>
            Requested path: <code>{location.pathname}</code>
          </p>
        )}
      </main>
    </>
  );
};

export default LitePlaceholder;

export const Head = ({ pageContext }) => {
  const { heading = "Content disabled in lite mode", description = "" } = pageContext;
  const instructions =
    "Run make site-full or set BUILD_FULL_SITE=true to include heavy collections in development.";

  return (
    <SEO title={heading} description={`${description} ${instructions}`.trim()} />
  );
};
