import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import BlogSingle from "../sections/Blog/Blog-single";
// import SimpleReactLightbox from "simple-react-lightbox";
export const query = graphql`query BlogsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
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
`;

const BlogSinglePage = ({ data, children }) => {

  return (
    <>
      <BlogSingle  data={data}>
        { children }
      </BlogSingle>
    </>
  );
};

export default BlogSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} />;
};