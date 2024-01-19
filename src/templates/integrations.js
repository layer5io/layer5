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
<<<<<<< HEAD
=======
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
>>>>>>> c9aeeb8575c0db0a08cdff22cdf08166c42ec8e6
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