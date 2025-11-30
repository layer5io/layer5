import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";


import ResourceSingle from "../sections/Resources/Resource-single";



import SimpleReactLightbox from "simple-react-lightbox";
export const query = graphql`query ResourcesBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {

    frontmatter {
      title
      subtitle
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
      description
      thumbnail {
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      thumbnail_svg {
        extension
        publicURL
      }
    }
    fields {
      slug
    }
  }
}
`;

const ResourceSinglePage = ({ data, children }) => {


  return (

    <>


      <SimpleReactLightbox>
        <ResourceSingle data={data} >
          {children}
        </ResourceSingle>
      </SimpleReactLightbox>

    </>

  );
};

export default ResourceSinglePage;

export const Head = ({ data }) => {
  const image = data.mdx.frontmatter.thumbnail?.publicURL
    || (data.mdx.frontmatter.thumbnail_svg?.publicURL ? String(data.mdx.frontmatter.thumbnail_svg.publicURL) : null);
  return <SEO title={data.mdx.frontmatter.title} image={image} description={data.mdx.frontmatter.description} />;
};