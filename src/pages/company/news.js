import React from "react";

import SEO from "../../components/seo";
import { graphql } from "gatsby";
import NewsPage from "../../sections/Company/News-grid";

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
        darkthumbnail {
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
const NewsGridPage = ({ data }) => {
  return (
    <>
      <SimpleReactLightbox>
        <NewsPage  data={data} />
      </SimpleReactLightbox>

    </>
  );
};
export default NewsGridPage;
export const Head = () => {
  return <SEO title="News" description="News and press about Layer5, the cloud native management company.
    Layer5 the company behind industry-leading, open source software." />;
};