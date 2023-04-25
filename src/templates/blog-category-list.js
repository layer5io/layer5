import React from "react";



import SEO from "../components/seo";


import BlogList from "../sections/Blog/Blog-list";



import { graphql } from "gatsby";
export const query = graphql`
  query BlogsByCategory($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "blog" } }
        frontmatter: { category: { eq: $category }, published: { eq: true } }
      }
    ) {
      totalCount
      nodes {
        id
        body
        frontmatter {
          title
          subtitle
          date(formatString: "MMMM Do, YYYY")
          author
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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

const BlogListPage = ({ pageContext, data }) => {


  return (

    <>


      <BlogList data={data} pageContext={pageContext} />

    </>

  );
};
export default BlogListPage;

export const Head = () => {
  return  <SEO
    title="Blog"
    description="Articles on how to develop and operatate cloud native infrastucture and microservices."
    canonical="https://layer5.io/blog"
  />;
};