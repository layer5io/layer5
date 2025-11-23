import React from "react";
import { graphql } from "gatsby";


import SEO from "../components/seo";

import IndividualIntegrations from "../sections/Meshery/Meshery-integrations/Individual-Integrations";


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


  return (

    <>


      <IndividualIntegrations  data={data} >
        {children}
      </IndividualIntegrations>

    </>

  );
};
export default Integrations;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.integrationIcon.publicURL} description={data.mdx.frontmatter.subtitle}/>;
};