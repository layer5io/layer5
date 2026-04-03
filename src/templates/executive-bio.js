import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

import MemberBio from "../sections/Community/Member-single/executive_bio";

const LiteModeNotice = ({ entity }) => (
  <section
    style={{
      padding: "4rem 1.5rem",
      textAlign: "center",
      maxWidth: "560px",
      margin: "0 auto",
    }}
  >
    <p style={{ fontWeight: 600 }}>Lite mode placeholder</p>
    <p style={{ marginTop: "1rem" }}>
      {`This ${entity} page is skipped when BUILD_FULL_SITE=false to keep local builds fast.`}
    </p>
    <p style={{ marginTop: "0.75rem" }}>
      Run <code>make site-full</code> (or set <code>BUILD_FULL_SITE=true</code>) to render the full content.
    </p>
  </section>
);

export const query = graphql`query MemberBioBySlug($member: String!) {
  allMdx(
    filter: {
        fields: { collection: { eq: "members" } }
        frontmatter: { name: { eq: $member }, published: { eq: true } }
      }
  ) {
    nodes {
        id

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
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
}
  }
}
`;

const MemberBioSinglePage = ({ data, children }) => {
  const frontmatter = data?.allMdx?.nodes?.[0]?.frontmatter;
  if (!frontmatter) {
    return <LiteModeNotice entity="executive bio" />;
  }

  return (

    <>


      <MemberBio
        frontmatter={frontmatter}
      >
        {children}
      </MemberBio>

    </>

  );
};

export default MemberBioSinglePage;

export const Head = ({ data }) => {
  const frontmatter = data?.allMdx?.nodes?.[0]?.frontmatter;
  if (!frontmatter) {
    return (
      <SEO
        title="Member profiles disabled in lite mode"
        description="Run make site-full or BUILD_FULL_SITE=true to source member profiles."
      />
    );
  }

  return <SEO title={frontmatter.name} image={frontmatter.executive_image?.publicURL} />;
};