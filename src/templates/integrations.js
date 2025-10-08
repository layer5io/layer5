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
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
          }
        }
        docURL
        category
        components {
          name
          colorIcon {
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
          }
          whiteIcon {
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
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
    allFile(
      filter: {relativeDirectory: {eq: $name}, sourceInstanceName: {eq: "integrations"}}
    ) {
      nodes {
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
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