import React from "react";

// Libraries
import { useStaticQuery, graphql } from "gatsby";

const DataWrapper = (WrappedComponent) => {
  return (props) => {
    const data = useStaticQuery(
      graphql`
        query allResourcesAndAllResources {
            allMdx(
                sort: {fields: [frontmatter___date], order: DESC}
                filter: {
                    fields: { collection: { eq: "resources" } }
                    frontmatter: { published: { eq: true } }
                  }
          ) {
            nodes {
                id
                frontmatter {
                  title
                  type
                  technology
                  product
                  mesh
                  thumbnail {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                    extension
                    publicURL
                }
              }
              fields {
                slug
              }
            }
          }
        }
      `
    );

    return <WrappedComponent allResources={data} {...props} />;
  };
};

export default DataWrapper;
