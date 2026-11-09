import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

import NewsSingle from "../sections/Company/News-single";

export const query = graphql`
  query NewsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {

      frontmatter {
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
        author
        eurl
        source_url
        description
        presskit
        thumbnail {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
        }
        thumbnail_svg {
          extension
          publicURL
        }
        darkthumbnail {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
        }
        darkthumbnail_svg {
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

const NewsSinglePage = ({ data, children }) => {
  return (
    <>
      <NewsSingle data={data} >
        {children}
      </NewsSingle>
    </>
  );
};

export default NewsSinglePage;

export const Head = ({ data }) => {
  return (
    <SEO
      title={data.mdx.frontmatter.title}
      image={data.mdx.frontmatter.thumbnail?.publicURL || data.mdx.frontmatter.thumbnail_svg?.publicURL}
      description={data.mdx.frontmatter.description}
    />
  );
};
