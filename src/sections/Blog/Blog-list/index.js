import React from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";
import Card from "../../../components/Card";
import { BlogPageWrapper } from "./blogList.style";
import RssFeedIcon from "../../../assets/images/socialIcons/rss-sign.svg";
import Pagination from "../../Resources/Resources-grid/paginate";

const BlogList = ({
  data,
  isListView,
  setListView,
  setGridView,
  pageContext,
  currentPage,
  paginate,
  postsPerPage,
  indexOfFirstPost,
  indexOfLastPost,
}) => {
  const category = pageContext.category ? pageContext.category : null;
  const tag = pageContext.tag ? pageContext.tag : null;
  const { totalCount, nodes } = data.allMdx;
  const currentPosts= nodes.slice(indexOfFirstPost, indexOfLastPost);
  const header = tag
    ? `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`
    : category
      ? `${totalCount} post${
        totalCount === 1 ? "" : "s"
      } categorized as "${category}"`
      : "Blog";

  return (
    <BlogPageWrapper>
      <PageHeader
        title={header}
        path="Blog"
        img={RssFeedIcon}
        feedlink="/blog/feed.xml"
      />
      <div className="blog-list-wrapper">
        <Container>
          <Row>
            <Col sm={12} md={8}>
              {!pageContext.tag && !pageContext.category && (
                <BlogViewToolTip
                  isListView={isListView}
                  setListView={setListView}
                  setGridView={setGridView}
                />
              )}
              <Row className="blog-lists">
                {currentPosts?.map(({ id, frontmatter, fields }) => (
                  <Col xs={12} key={id}>
                    <Card frontmatter={frontmatter} fields={fields} />
                  </Col>
                ))}
                <Col>
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={nodes.length}
                    currentPage={currentPage}
                    paginate={paginate}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Sidebar pageContext={pageContext} />
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogList;
