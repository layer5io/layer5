import React from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import Card from "../../../components/Card";
import Pager from "../../../components/pager";
import { Container, Row, Col } from "../../../reusecore/Layout";

import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Topic-sidebar";

import { TopicPageWrapper } from "./topicGrid.style";

const TopicGrid = ({data, isListView, setListView, setGridView, pageContext}) => {
  return (
    <TopicPageWrapper>
      <PageHeader title="Cloud Native Resources" path="Topics"/>
      <div className="topic-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <BlogViewToolTip isListView={isListView} setListView={setListView}
                setGridView ={setGridView}
              />
              <div className="topic-grid-wrapper">
                <Row>
                  {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                    <Col key={id} xs={12} sm={6} >
                      <Card frontmatter={frontmatter} fields={fields}/>
                    </Col>
                  ))}
                  <Col>
                    <Pager pageContext={pageContext} text={"Topics"} isListView={isListView}/>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <Sidebar/>
            </Col>
          </Row>
        </Container>
      </div>
    </TopicPageWrapper>
  );
};

export default TopicGrid;
