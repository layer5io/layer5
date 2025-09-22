import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import MemberSingle from "../sections/Community/Member-single";

import SEO from "../components/seo";

export const query = graphql`
  query MemberBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        name
        position
        bio
        image_path {
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
        github
        twitter
        linkedin
        location
        badges
      }
    }
  }
`;

const MemberSinglePage = ({ data }) => {
  return (
    <>
      <MemberSingle data={data}><MDXRenderer>{data.mdx.body}</MDXRenderer></MemberSingle>
    </>
  );
};
export default MemberSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.name} description={data.mdx.frontmatter.bio} />;
};
