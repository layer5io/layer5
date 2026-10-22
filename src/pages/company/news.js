import React from "react";

import SEO from "../../components/seo";
import { graphql } from "gatsby";
import NewsPage from "../../sections/Company/News-grid";
import LitePlaceholder from "../../templates/lite-placeholder";

import SimpleReactLightbox from "simple-react-lightbox";
export const query = graphql`query allNews {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {fields: {collection: {eq: "news"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        category
        eurl
        thumbnail {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
        darkthumbnail {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
      }
      fields {
        slug
      }
    }
  }
}`;
const NewsGridPage = ({ data }) => {
  if (data.allMdx.nodes.length === 0) {
    return (
      <LitePlaceholder
        pageContext={{
          heading: "News posts disabled in lite mode",
          description:
            "The default lightweight build skips the news collection to reduce local memory consumption.",
        }}
      />
    );
  }

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
    Layer5 the company behind industry-leading, open source software."
  />;
};