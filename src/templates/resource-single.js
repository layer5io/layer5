import React from "react";
import { graphql } from "gatsby";



import Layout from "../components/layout";
import SEO from "../components/seo";


import ResourceSingle from "../sections/Resources/Resource-single";
import Footer from "../sections/General/Footer";


import SimpleReactLightbox from "simple-react-lightbox";




export const query = graphql`query ResourcesBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      subtitle
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
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
`;

const ResourceSinglePage = ({ data }) => {


  return (

    <Layout>


      <SimpleReactLightbox>
        <ResourceSingle data={data} />
      </SimpleReactLightbox>
      <Footer />
    </Layout>

  );
};

export default ResourceSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />;
};