import React, { useState } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";
import RssFeedIcon from "../../../assets/images/socialIcons/rss-sign.svg";
import { BlogPageWrapper} from "./blogGrid.style";
import Search from "./js-search";


const BlogGrid = ({
  data,
  isListView,
  setListView,
  setGridView,
  pageContext,
}) => {
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
              <Search
                data1={data.allMdx.nodes}
                setGridView={setGridView}
                setListView={setListView}
                pageContext={pageContext}
                isListView={isListView}
              />
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
