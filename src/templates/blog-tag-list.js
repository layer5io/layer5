import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import BlogList from "../sections/Blog/Blog-list";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";

import { graphql } from "gatsby";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

export const query = graphql`query BlogsByTags($tag: String!) {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "blog"}}, frontmatter: {tags: {in: [$tag]}, published: {eq: true}}}
  ) {
    totalCount
    nodes {
      id
      body
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
}
`;

const BlogListPage = ({ pageContext, data }) => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <BlogList data={data} pageContext={pageContext} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default BlogListPage;

export const Head = () => {
  return  <SEO
    title="Blog"
    description="The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community."
    canonical="https://layer5.io/blog"
  />;
};