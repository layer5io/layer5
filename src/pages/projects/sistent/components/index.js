import React from "react";
import { graphql } from "gatsby";
import SistentComponents from "../../../../sections/Projects/Sistent/components";

const SistentComponentsPage = ({ data }) => {
  return <SistentComponents data={data} />;
};

export const query = graphql`
  query SistentComponentsList {
    allMdx(
      filter: { 
        fields: { collection: { eq: "sistent" } }
        frontmatter: { published: { eq: true } }
      }
      sort: { frontmatter: { name: ASC } }
    ) {
      nodes {
        id
        frontmatter {
          name
          description
          component
        }
      }
    }
  }
`;

export default SistentComponentsPage;
