import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

import NewsSingle from "../sections/Company/News-single";

export const query = graphql`
  query NewsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
        author
        eurl
        description
        presskit
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
        darkthumbnail {
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
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
`;

const NewsSinglePage = ({ data }) => {
  return (
    <>
      <NewsSingle data={data} />
    </>
  );
};

export default NewsSinglePage;

export const Head = ({ data }) => {
  return (
    <SEO
      title={data.mdx.frontmatter.title}
      image={data.mdx.frontmatter.thumbnail.publicURL}
      description={data.mdx.frontmatter.description}
    />
  );
};
