import React, { useState } from "react";
import { graphql } from "gatsby";



import Layout from "../components/layout";
import SEO from "../components/seo";

import MemberBio from "../sections/Community/Member-single/executive_bio";
import Footer from "../sections/General/Footer";





export const query = graphql`query MemberBioBySlug($member: String!) {
  allMdx(
    filter: {
        fields: { collection: { eq: "members" } }
        frontmatter: { name: { eq: $member }, published: { eq: true } }
      }
  ) {
    nodes {
        id
        body
    frontmatter {
      name
      position
      github
      twitter
      email
      profile
      meshmate
      linkedin
      location
      badges
      bio
      executive_bio
      executive_position
      company
      executive_image {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        extension
        publicURL
      }
    }
}
  }
}
`;

const MemberBioSinglePage = ({ data }) => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (

    <Layout>


      <MemberBio
        frontmatter={data.allMdx.nodes[0].frontmatter}
        body={data.allMdx.nodes[0].body}
      />
      <Footer />
    </Layout>

  );
};

export default MemberBioSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.allMdx.nodes[0].frontmatter.name} image={data.allMdx.nodes[0].frontmatter.executive_image.publicURL} />;
};