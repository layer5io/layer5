import React, { useState } from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import lighttheme, { darktheme } from "../theme/app/themeStyles";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query IntegrationsBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
const IntegrationsList = ({ data }) => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // prevents ssr flash for mismatched dark mode

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Integrations" />
        <Navigation
          theme={data.mdx.frontmatter.title}
          themeSetter={themeSetter}
        />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default IntegrationsList;
