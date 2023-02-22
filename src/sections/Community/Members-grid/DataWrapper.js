import React from "react";

// Libraries
import { useStaticQuery, graphql } from "gatsby";

/**
 * A Higher Order Component to populate the wrapped component
 * with data of all members. Check MemberList component
 * for implementation.
 */
const DataWrapper = (WrappedComponent) => {
  return (props) => {
    const data = useStaticQuery(
      graphql`
        query allMembers {
          allMdx(
            sort: { fields: [frontmatter___name], order: ASC }
            filter: {
              fields: { collection: { eq: "members" } }
              frontmatter: { published: { eq: true } }
            }
          ) {
            nodes {
              id
              frontmatter {
                name
                github
                twitter
                status
                meshmate
                maintainer
                linkedin
                location
                badges
                bio
                emeritus
                community_manager
                image_path {
                  childImageSharp {
                    gatsbyImageData(width: 200, layout: CONSTRAINED)
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

    return <WrappedComponent allMembers={data} {...props} />;
  };
};

export default DataWrapper;
