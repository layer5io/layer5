import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import HandbookSingle from "../sections/Community/Handbook/handbook-single";

export const query = graphql`
  query HandbookBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        contents {
          id
          link
          text
        }
      }
      fields {
        slug
      }
    }
    allHandbookPages: allMdx(
      filter: { fields: { collection: { eq: "handbook" } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;

const HandbookPage = ({ data, children }) => {
  return (
    <>
      <HandbookSingle data={data}>
        {children}
      </HandbookSingle>
    </>
  );
};

export default HandbookPage;

export const Head = ({ data }) => {
  const { frontmatter } = data.mdx;
  return (
    <SEO
      title={frontmatter.title}
      description={frontmatter.description}
    />
  );
};
