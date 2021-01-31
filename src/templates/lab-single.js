import React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import LabSinglePage from "../sections/Learn/Lab-single/index";

export const query = graphql`
    query LabBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } } ) {
            body
            frontmatter {
                title
            }
            fields {
                slug
            }
        }
    }
`;

const LabSingle = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={`${data.mdx.frontmatter.title}`} />
        <Navigation />
        <LabSinglePage frontmatter={data.mdx.frontmatter} body={data.mdx.body} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default LabSingle;
