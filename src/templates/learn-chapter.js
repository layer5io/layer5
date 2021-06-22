import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import Chapters from "../sections/Learn-Layer5/Chapters";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

export const query = graphql`query chapters($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      chapterTitle
      description
    }
    fields {
      slug
      course
      learnpath
    }
  }
}
`;

const SingleChapter = ({data}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.chapterTitle} />
        <Navigation />
        <Chapters data={data}/>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default SingleChapter;

