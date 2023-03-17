import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";


import BlogList from "../sections/Blog/Blog-list";
import Footer from "../sections/General/Footer";
import { graphql } from "gatsby";
export const query = graphql`query BlogsByTags($tag: String!) {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "blog"}}, frontmatter: {tags: {in: [$tag]}, published: {eq: true}}}
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

    <Layout>


      <BlogList data={data} pageContext={pageContext} />
      <Footer />
    </Layout>

  );
};
export default BlogListPage;

export const Head = () => {
  return  <SEO
    title="Blog"
    description="The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community."
    canonical="https://layer5.io/blog"
  />;
};