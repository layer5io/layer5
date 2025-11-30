import React from "react";
import { graphql } from "gatsby";



import EventSingle from "../sections/Community/Event-single";

import LearnServiceMeshCTA from "../sections/Learn/Learn-Service-Mesh-CTA";
import Subscribe from "../sections/subscribe/subscribe";
import SEO from "../components/seo";

export const query = graphql`query EventsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {

    frontmatter {
      attribute {
        name
        url
      }
      eurl
      title
      description
      type
      speakers
      register
      date
      thumbnail {
        publicURL
        relativePath
        extension
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      thumbnail_svg {
        publicURL
        extension
      }
    }
  }
}
`;

const EventSinglePage = ({ data, children }) => {


  return (

    <>


      <EventSingle data={data} >
        {children}
      </EventSingle>
      <LearnServiceMeshCTA />
      <Subscribe />

    </>

  );
};

export default EventSinglePage;


export const Head = ({ data }) => {
  const image = data.mdx.frontmatter.thumbnail?.publicURL
    || (data.mdx.frontmatter.thumbnail_svg?.publicURL ? String(data.mdx.frontmatter.thumbnail_svg.publicURL) : null);
  return <SEO title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} image={image} />;
};
