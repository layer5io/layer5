import React from "react";
import { graphql, navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { MDXProvider } from "@mdx-js/react";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

import { SistentLayout } from "../sections/Projects/Sistent/sistent-layout";
import TabButton from "../reusecore/Button";
import { Col, Row } from "../reusecore/Layout";
import CodeBlock from "../components/CodeBlock";
import { SistentThemeProvider, Button } from "@sistent/sistent";
import ThemeWrapper from "../sections/Projects/Sistent/theme-wrapper";
import SEO from "../components/seo";

const formatComponentName = (componentName) =>
  componentName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const shortcodes = {
  SistentThemeProvider,
  ThemeWrapper,
  Button,
  Col,
  Row,
  CodeBlock,
  FaArrowRight,
};

const SistentComponentTemplate = ({ data, children, pageContext }) => {
  const { frontmatter } = data.mdx;
  const location = useLocation();
  const { componentName, availablePages } = pageContext;

  const baseUrl = `/projects/sistent/components/${componentName}`;

  // Format component name for display (e.g., "avatar-group" -> "Avatar Group")
  const displayName = formatComponentName(componentName);

  return (
    <SistentLayout title={displayName}>
      <div className="content">
        <div style={{ marginBottom: "1rem" }}>
          <h1>{displayName}</h1>
          {frontmatter.description && <p>{frontmatter.description}</p>}
        </div>
        <MDXProvider components={shortcodes}>
          <div className="filterBtns">
            {availablePages.includes("overview") && (
              <TabButton
                className={location.pathname === baseUrl ? "active" : ""}
                onClick={() => navigate(baseUrl)}
                title="Overview"
              />
            )}
            {availablePages.includes("guidance") && (
              <TabButton
                className={
                  location.pathname === `${baseUrl}/guidance` ? "active" : ""
                }
                onClick={() => navigate(`${baseUrl}/guidance`)}
                title="Guidance"
              />
            )}
            {availablePages.includes("code") && (
              <TabButton
                className={
                  location.pathname === `${baseUrl}/code` ? "active" : ""
                }
                onClick={() => navigate(`${baseUrl}/code`)}
                title="Code"
              />
            )}
          </div>

          <div className="main-content">{children}</div>
        </MDXProvider>
      </div>
    </SistentLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
      }
    }
  }
`;

export const Head = ({ data, pageContext }) => {
  const { frontmatter } = data.mdx;
  const { componentName } = pageContext;
  const displayName = formatComponentName(componentName);

  return (
    <SEO
      title={frontmatter.title || `${displayName} - Sistent Design System`}
      description={
        frontmatter.description ||
        `${displayName} component guidance, usage, and code reference from Sistent, Layer5's open source design system for cloud native applications.`
      }
    />
  );
};

export default SistentComponentTemplate;
