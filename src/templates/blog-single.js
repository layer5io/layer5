import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";


import BlogSingle from "../sections/Blog/Blog-single";



import SimpleReactLightbox from "simple-react-lightbox";
export const query = graphql`
  query BlogsBySlug($slug: String!) {
    allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        body
        frontmatter {
          title
          subtitle
          description
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
          darkthumbnail {
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

const BlogSinglePage = ({ data }) => {


  return (

    <>


      <SimpleReactLightbox>
        <BlogSingle  data={data} />
      </SimpleReactLightbox>

    </>

  );
};

export default BlogSinglePage;


export const Head = ({ data }) => {
  const post = data.allMdx.nodes[0];
  const { frontmatter } = post;

  return (
    <SEO
      title={frontmatter.title}
      image={frontmatter.thumbnail.publicURL}
      description={frontmatter.description}
    />
  );
};