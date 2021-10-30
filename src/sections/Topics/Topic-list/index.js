import React from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";

import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Topic-sidebar";
import Pager from "../../../components/pager";
import Card from "../../../components/Card";

import { TopicPageWrapper } from "./topicList.style";

const TopicList = ({
  data,
  isListView,
  setListView,
  setGridView,
  pageContext,
}) => {
  const category = pageContext.category ? pageContext.category : null;
  const tag = pageContext.tag ? pageContext.tag : null;
  const { totalCount, nodes } = data.allMdx;
  const header = tag
    ? `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`
    : category ? `${totalCount} post${totalCount === 1 ? "" : "s"} categorized as "${category}"`: "Topic";

  return (
    <TopicPageWrapper>
      <PageHeader title={header} path="Topics"/>
      <div className="topic-list-wrapper">
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
              <Row className="topic-lists">
                {nodes.map(({ id, frontmatter, fields }) => (
                  <Col xs={12} key={id}>
                    <Card frontmatter={frontmatter} fields={fields}/>
                  </Col>
                ))}
                <Col>
                  <Pager pageContext={pageContext} text={"Topics"} isListView={isListView}/>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </TopicPageWrapper>
  );
};

export default TopicList;
