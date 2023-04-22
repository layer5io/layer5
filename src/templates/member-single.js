import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

import MemberSingle from "../sections/Community/Member-single";

export const query = graphql`query MemberBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      name
      position
      github
      twitter
      meshmate
      linkedin
      location
      badges
      bio
      executive_bio
      image_path {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        extension
        publicURL
      }
    }
  }
}
`;

const MemberSinglePage = ({ data }) => {


  return (

    <>


      <MemberSingle
        frontmatter={data.mdx.frontmatter}
      />

    </>

  );
};

export default MemberSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.name} image={data.mdx.frontmatter.image_path.publicURL} />;
};