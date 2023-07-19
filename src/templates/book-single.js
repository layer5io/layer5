import React from "react";
import { graphql } from "gatsby";



import BookSingle from "../sections/Learn/Book-single";
import DockerExtensionCTA from "../sections/Docker-Meshery/docker-extension-CTA";
// import LearnServiceMeshCTA from "../sections/Learn/Learn-Service-Mesh-CTA";



import SEO from "../components/seo";
export const query = graphql`query BookBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      abstract
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        extension
        publicURL
      }
    }
  }
}
`;

const BookSinglePage = ({ data }) => {


  return (

    <>


      <BookSingle data={data} />
      <DockerExtensionCTA />

    </>

  );
};

export default BookSinglePage;


export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />;
};