import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

import Navigation from "../sections/Navigation";
import NewsPage from "../sections/News-grid";
import Footer from "../sections/Footer";

export const query = graphql`
  query allNews {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "news" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          author
          eurl
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
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
    <Layout>
        <SEO title="News" />
        <Navigation />
        <NewsPage data={data} />
        <Footer />
    </Layout>
);
export default NewsGridPage;
