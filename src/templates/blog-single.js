import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";


import BlogSingle from "../sections/Blog/Blog-single";



import SimpleReactLightbox from "simple-react-lightbox";
export const query = graphql`query BlogsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {

    frontmatter {
      title
      subtitle
      description
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
      thumbnail {
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      darkthumbnail {
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
      darkthumbnail_svg {
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

const BlogSinglePage = ({ data, children }) => {


  return (

    <>


      <SimpleReactLightbox>
        <BlogSingle data={data} >
          {children}
        </BlogSingle>
      </SimpleReactLightbox>

    </>

  );
};

export default BlogSinglePage;


export const Head = ({ data }) => {
  const { frontmatter } = data.mdx;
  const image = frontmatter.thumbnail?.publicURL
    || (frontmatter.thumbnail_svg?.publicURL ? String(frontmatter.thumbnail_svg.publicURL) : null)
    || frontmatter.darkthumbnail?.publicURL
    || (frontmatter.darkthumbnail_svg?.publicURL ? String(frontmatter.darkthumbnail_svg.publicURL) : null);

  return <SEO title={frontmatter.title} image={image} description={frontmatter.description} />;
};