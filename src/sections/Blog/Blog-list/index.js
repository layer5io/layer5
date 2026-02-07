import React from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";
import Card from "../../../components/Card";
import { BlogPageWrapper } from "./blogList.style";
import RssFeedIcon from "../../../assets/images/socialIcons/rss-sign.svg";
import Pagination from "../../Resources/Resources-grid/paginate";
import SearchBox from "../../../reusecore/Search";

const BlogList = ({
  isListView = false,
  setListView = () => {},
  setGridView = () => {},
  pageContext = {},
  currentPage = 1,
  searchQuery = "",
  searchData = [],
  setCurrentPage = () => {},
  queryResults = [],
  postsPerPage = 10,
  searchedPosts = [],
}) => {
  const category = pageContext?.category ?? null;
  const tag = pageContext?.tag ?? null;

  const totalCount = Array.isArray(queryResults) ? queryResults.length : 0;

  const header = tag
    ? `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`
    : category
      ? `${totalCount} post${totalCount === 1 ? "" : "s"} categorized as "${category}"`
      : "Blog";

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <BlogPageWrapper>
      <PageHeader
        title={header}
        path="Blog"
        img={RssFeedIcon}
        feedlink="/blog/feed.xml"
      />

      <div className="blog-page-wrapper">
        <Container>
          <Row style={{ flexWrap: "wrap" }}>
            <Col $xs={12} $lg={8}>
              {!tag && !category ? (
                <div className="tooltip-search">
                  <BlogViewToolTip
                    isListView={isListView}
                    setListView={setListView}
                    setGridView={setGridView}
                  />
                  <SearchBox
                    searchQuery={searchQuery}
                    searchData={searchData}
                    paginate={paginate}
                    currentPage={currentPage}
                    focusSearch={true}
                  />
                </div>
              ) : (
                <SearchBox
                  searchQuery={searchQuery}
                  searchData={searchData}
                  paginate={paginate}
                  currentPage={currentPage}
                  focusSearch={true}
                />
              )}

              <div className="blog-list-wrapper">
                <Row className="blog-lists" style={{ flexWrap: "wrap" }}>
                  {Array.isArray(searchedPosts) &&
                    searchedPosts.length > 0 &&
                    searchedPosts.map(({ id, frontmatter, fields }, index) => (
                      <Col $xs={12} key={id}>
                        <Card
                          frontmatter={frontmatter}
                          fields={fields}
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchpriority={index === 0 ? "high" : "auto"}
                        />
                      </Col>
                    ))}

                  <Col>
                    {Array.isArray(searchedPosts) &&
                      searchedPosts.length > 0 && (
                        <Pagination
                          postsPerPage={postsPerPage}
                          totalPosts={totalCount}
                          currentPage={currentPage}
                          paginate={paginate}
                        />
                      )}
                  </Col>
                </Row>
              </div>
            </Col>

            <Col $xs={12} $lg={4}>
              <Sidebar pageContext={pageContext} />
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogList;
