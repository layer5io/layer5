import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { graphql } from "gatsby";

import Navigation from "../../sections/General/Navigation";
import NewsPage from "../../sections/Company/News-grid";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import SimpleReactLightbox from "simple-react-lightbox";

export const query = graphql`query allNews {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "news"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        category
        eurl
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

const NewsGridPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="News" description="News and press about Layer5, the cloud native management company.
    Layer5 the company behind industry-leading, open source software." />
      <Navigation />
      <SimpleReactLightbox>
        <NewsPage data={data} />
      </SimpleReactLightbox>
      <Footer />
    </Layout>
  </ThemeProvider>
);
export default NewsGridPage;
