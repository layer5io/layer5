import React, { useState, useEffect } from "react";
import useDataList from "../../utils/usedataList";
import SEO from "../../components/seo";
import BlogGrid from "../../sections/Blog/Blog-grid";
import { graphql } from "gatsby";
import loadable from "@loadable/component";
import LitePlaceholder from "../../templates/lite-placeholder";
const BlogList = loadable(() => import ("../../sections/Blog/Blog-list"));

export const query = graphql`query allBlogs {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {fields: {collection: {eq: "blog"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        author
        thumbnail {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
        darkthumbnail {
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(width: 480, layout: CONSTRAINED)
          }
        }
      }
      fields {
        slug
      }
    }
  }
}`;

const Blog = (props) => {
  if (props.data.allMdx.nodes.length === 0) {
    return (
      <LitePlaceholder
        pageContext={{
          heading: "Blog posts disabled in lite mode",
          description:
            "The default lightweight build skips the blog collection to keep local builds responsive.",
        }}
        location={props.location}
      />
    );
  }

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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const searchedPosts = queryResults.slice(indexOfFirstPost, indexOfLastPost);
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
export default Blog;
export const Head = () => {
  return <SEO title="Blog" description="The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community." />;
};