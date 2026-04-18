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
import { useStyledDarkMode } from "../theme/app/useStyledDarkMode";
import ThemeWrapper from "../sections/Projects/Sistent/theme-wrapper";

const shortcodes = { 
  SistentThemeProvider,
  ThemeWrapper,
  Button, 
  Col, 
  Row, 
  CodeBlock,
  FaArrowRight 
};

const SistentComponentTemplate = ({ data, children, pageContext }) => {
  const { frontmatter } = data.mdx;
  const location = useLocation();
  const { componentName, availablePages } = pageContext;
  const { isDark } = useStyledDarkMode();

  const baseUrl = `/projects/sistent/components/${componentName}`;

  // Format component name for display (e.g., "avatar-group" -> "Avatar Group")
  const displayName = componentName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

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
                className={location.pathname === `${baseUrl}/guidance` ? "active" : ""}
                onClick={() => navigate(`${baseUrl}/guidance`)}
                title="Guidance"
              />
            )}
            {availablePages.includes("code") && (
              <TabButton
                className={location.pathname === `${baseUrl}/code` ? "active" : ""}
                onClick={() => navigate(`${baseUrl}/code`)}
                title="Code"
              />
            )}
          </div>
          
          <div className="main-content">
            {children}
          </div>
        </MDXProvider>
      </div>
    </SistentLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
      }
    }
  }
`;

export default SistentComponentTemplate;
