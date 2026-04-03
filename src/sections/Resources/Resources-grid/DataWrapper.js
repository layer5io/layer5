import React from "react";

// Libraries
import { useStaticQuery, graphql } from "gatsby";
import LitePlaceholder from "../../../templates/lite-placeholder";

const DataWrapper = (WrappedComponent) => {
  return (props) => {
    const data = useStaticQuery(
      graphql`query allResourcesAndAllResources {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {fields: {collection: {in: ["blog", "resources", "news", "events"]}}, frontmatter: {published: {eq: true}, resource: {eq: true}}}
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
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
          extension
          publicURL
        }
        darkthumbnail {
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
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
}`
    );

    if (data.allMdx.nodes.length === 0) {
      return (
        <LitePlaceholder
          pageContext={{
            heading: "Resources disabled in lite mode",
            description:
              "The default lightweight build skips the resources collection to reduce local memory consumption.",
          }}
        />
      );
    }

    return <WrappedComponent allResources={data} {...props} />;
  };
};

export default DataWrapper;
