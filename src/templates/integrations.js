import React from "react";
import { graphql } from "gatsby";


import SEO from "../components/seo";

import IndividualIntegrations from "../sections/Meshery/Meshery-integrations/Individual-Integrations";


export const query = graphql`
  query IntegrationsBySlug($slug: String!, $name: String!) {
    mdx(fields:{slug:{eq: $slug}}) {
      body
      frontmatter {
        title
        subtitle
        howItWorks
        howItWorksDetails
        integrationIcon {
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
        docURL
        category
        components {
          name
          colorIcon {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
          whiteIcon {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
          description
        }
        featureList
        workingSlides {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
      }
    }
    allFile(
      filter: {relativeDirectory: {eq: $name}, sourceInstanceName: {eq: "integrations"}}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        extension
        publicURL
      }
    }
  }
`;
const Integrations = ({ data }) => {


  return (

    <>


      <IndividualIntegrations  data={data} />

    </>

  );
};
export default Integrations;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.integrationIcon.publicURL} description={data.mdx.frontmatter.subtitle}/>;
};