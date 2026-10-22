import React from "react";
import { graphql } from "gatsby";


import SEO from "../components/seo";

import IndividualIntegrations from "../sections/Meshery/Meshery-integrations/Individual-Integrations";

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


export const query = graphql`
  query IntegrationsBySlug($slug: String!, $name: String!) {
    mdx(fields:{slug:{eq: $slug}}) {

      frontmatter {
        title
        subtitle
        howItWorks
        howItWorksDetails
        integrationIcon {
          extension
          publicURL
        }
        docURL
        category
        components {
          name
          colorIcon {
            extension
            publicURL
          }
          whiteIcon {
            extension
            publicURL
          }
          description
        }
        featureList
        workingSlides {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    screenshots_raster: allFile(
      filter: {relativeDirectory: {eq: $name}, sourceInstanceName: {eq: "integrations"}, extension: {ne: "svg"}}
    ) {
      nodes {
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    screenshots_svg: allFile(
      filter: {relativeDirectory: {eq: $name}, sourceInstanceName: {eq: "integrations"}, extension: {eq: "svg"}}
    ) {
      nodes {
        extension
        publicURL
      }
    }
  }
`;
const Integrations = ({ data, children }) => {
  const hasFrontmatter = Boolean(data?.mdx?.frontmatter);
  if (!hasFrontmatter) {
    return <LiteModeNotice entity="integration" />;
  }


  return (

    <>


      <IndividualIntegrations data={data}>
        {children}
      </IndividualIntegrations>

    </>

  );
};
export default Integrations;

export const Head = ({ data }) => {
  const frontmatter = data?.mdx?.frontmatter;
  if (!frontmatter) {
    return (
      <SEO
        title="Integrations disabled in lite mode"
        description="Run make site-full or BUILD_FULL_SITE=true to source integration content."
      />
    );
  }

  return <SEO title={frontmatter.title} image={frontmatter.integrationIcon?.publicURL} description={frontmatter.subtitle}/>;
};