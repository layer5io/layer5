import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";


import ResourceSingle from "../sections/Resources/Resource-single";



import SimpleReactLightbox from "simple-react-lightbox";
export const query = graphql`query ResourcesBySlug($slug: String!) {
  allMdx(filter: { fields: { slug: { eq: $slug } } }) {
    nodes {
      body
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
        author
        category
        tags
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 500, layout: CONSTRAINED)
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
`;

const ResourceSinglePage = ({ data }) => {


  return (

    <>


      <SimpleReactLightbox>
        <ResourceSingle data={data} />
      </SimpleReactLightbox>

    </>

  );
};

export default ResourceSinglePage;

export const Head = ({ data }) => {
  const resource = data.allMdx.nodes[0];
  return (
    <SEO
      title={resource.frontmatter.title}
      image={resource.frontmatter.thumbnail?.publicURL}
      description={resource.frontmatter.description}
    />
  );
};