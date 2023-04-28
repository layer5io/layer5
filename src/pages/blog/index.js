import React, { useState, useEffect } from "react";
import SEO from "../../components/seo";
import BlogGrid from "../../sections/Blog/Blog-grid";
import { graphql } from "gatsby";
import loadable from "@loadable/component";
const BlogList = loadable(() => import ("../../sections/Blog/Blog-list"));

export const query = graphql`
  query allBlogs {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "blog" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          date(formatString: "MMM Do, YYYY")
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

const Blog = (props) => {
  const [isListView, setIsListView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    props.data.allMdx.nodes,
    setSearchQuery,
    searchQuery,
    ["frontmatter", "title"],
    "id"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const searchedPosts = queryResults.slice(indexOfFirstPost, indexOfLastPost);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const setListView = () => {
    setIsListView(true);
  };
  const setGridView = () => {
    setIsListView(false);
  };
  useEffect(() => {
    if (props.location.state) {
      if (props.location.state.isListView) setListView();
    }
  }, []);
  let BlogView = (props) => {
    if (isListView) return <BlogList {...props} />;
    return <BlogGrid {...props} />;
  };
  return (
    <>
      <BlogView
        isListView={isListView}
        setListView={setListView}
        setGridView={setGridView}
        pageContext={props.pageContext}
        data={props.data}
		    searchedPosts={searchedPosts}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        indexOfLastPost={indexOfLastPost}
        indexOfFirstPost={indexOfFirstPost}
        searchData={searchData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
        queryResults={queryResults}
      />

    </>
  );
};
export default Blog;
export const Head = () => {
  return <SEO title="Blog" description="The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community." />;
};