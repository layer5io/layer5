import React, { useState} from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";
import RssFeedIcon from "../../../assets/images/socialIcons/rss-sign.svg";
import { BlogPageWrapper } from "./blogGrid.style";
import Card from "../../../components/Card";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import useDataList from "./usedataList";
import SearchBox from "../../../reusecore/Search";
import Pagination from "../../Resources/Resources-grid/paginate";

const paramsIndex = ["frontmatter", "title"];
const BlogGrid = ({
  data,
  isListView,
  setListView,
  setGridView,
  pageContext,
  currentPage,
  paginate,
  postsPerPage,
  indexOfLastPost,
  indexOfFirstPost,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResults, searchData] = useDataList(
    data,
    setSearchQuery,
    searchQuery,
    paramsIndex,
    "id"
  );
  const currentPosts = searchQuery
    ? queryResults
    : data.allMdx.nodes.slice(indexOfFirstPost, indexOfLastPost);

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
                <SearchBox searchQuery={searchQuery} searchData={searchData} />
              </div>
              <div className="blog-grid-wrapper">
                <Row>
                  {queryResults.length < 1 && (
                    <div>
                      No blog post that matches the title "{searchQuery}" found.
                    </div>
                  )}
                  {currentPosts?.map(({ id, frontmatter, fields }) => (
                    <Col key={id} xs={12} sm={6}>
                      <Card frontmatter={frontmatter} fields={fields} />
                    </Col>
                  ))}
                  <Col>
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={queryResults.length}
                      currentPage={currentPage}
                      paginate={paginate}
                    />
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
