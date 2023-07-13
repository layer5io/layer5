import React from "react";
import { useState } from "react";
import useDataList from "../utils/usedataList";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let { nodes } = data.allMdx;
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    nodes,
    setSearchQuery,
    searchQuery,
    ["frontmatter", "title"],
    "id"
  );
  const searchedPosts = queryResults.slice(indexOfFirstPost, indexOfLastPost);
  return (

    <>


      <BlogList
        data={data}
        pageContext={pageContext}
        searchedPosts={searchedPosts}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        searchData={searchData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
        queryResults={queryResults}
      />

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