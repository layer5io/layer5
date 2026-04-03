import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

import MemberSingle from "../sections/Community/Member-single";

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

export const query = graphql`query MemberBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      name
      position
      github
      twitter
      layer5
      meshmate
      linkedin
      location
      badges
      status
      bio
      executive_bio
      image_path {
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  }
}
`;

const MemberSinglePage = ({ data, children }) => {
  const frontmatter = data?.mdx?.frontmatter;
  if (!frontmatter) {
    return <LiteModeNotice entity="member" />;
  }

  return (

    <>


      <MemberSingle
        frontmatter={frontmatter}
      >
        {children}
      </MemberSingle>

    </>

  );
};

export default MemberSinglePage;

export const Head = ({ data }) => {
  const frontmatter = data?.mdx?.frontmatter;
  if (!frontmatter) {
    return (
      <SEO
        title="Members disabled in lite mode"
        description="Run make site-full or BUILD_FULL_SITE=true to source member content."
      />
    );
  }

  return <SEO title={frontmatter.name} image={frontmatter.image_path?.publicURL} description={frontmatter.bio} />;
};
