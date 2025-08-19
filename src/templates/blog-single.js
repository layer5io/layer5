import React from "react";
import { graphql } from "gatsby";
import BlogSingle from "../sections/Blog/Blog-single";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../components/seo";

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
    <SimpleReactLightbox>
      <BlogSingle data={data}>
        {children}
      </BlogSingle>
    </SimpleReactLightbox>
  );
};

export default BlogSinglePage;

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL} description={data.mdx.frontmatter.description} />;
};