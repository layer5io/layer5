import React, { useState } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";
import RssFeedIcon from "../../../assets/images/socialIcons/rss-sign.svg";
import { BlogPageWrapper } from "./blogGrid.style";
import Card from "../../../components/Card";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import SearchBox from "../../../reusecore/Search";
import Pagination from "../../Resources/Resources-grid/paginate";
import useDataList from "../../../utils/usedataList";

const BlogGrid = ({
  isListView,
  setListView,
  setGridView,
  pageContext,
  data,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    data.allMdx.nodes,
    setSearchQuery,
    searchQuery,
    ["frontmatter", "title"],
    "id"
  );
  const searchedPosts = queryResults.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <BlogPageWrapper>
      <PageHeader
        title="Blog"
        path="Blog"
        img={RssFeedIcon}
        feedlink="/blog/feed.xml"
      />
      <div className="blog-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <div className="tooltip-search">
                <BlogViewToolTip
                  isListView={isListView}
                  setListView={setListView}
                  setGridView={setGridView}
                />
                <SearchBox searchQuery={searchQuery} searchData={searchData} paginate={paginate} currentPage={currentPage} />
              </div>
              <div className="blog-grid-wrapper">
                <Row>
                  {queryResults.length < 1 && (
                    <Col xs={12} sm={6}>
                      No blog post that matches the title "{searchQuery}" found.
                    </Col>
                  )}

                  {searchedPosts.length > 0 && searchedPosts.map(({ id, frontmatter, fields }) => (
                    <Col key={id} xs={12} sm={6}>
                      <Card  frontmatter={frontmatter} fields={fields} />
                    </Col>
                  ))}
                  <Col>
                    {searchedPosts.length > 0 && (
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={queryResults.length}
                        paginate={paginate}
                        currentPage={currentPage}
                      />
                    )}
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <Sidebar pageContext={pageContext} />
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogGrid;
