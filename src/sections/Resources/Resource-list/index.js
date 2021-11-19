import React from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";

import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Resource-sidebar";
import Pager from "../../../components/pager";
import Card from "../../../components/Card";

import { ResourcePageWrapper } from "./resourceList.style";

const ResourceList = ({
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
    ? `${totalCount} resource${totalCount === 1 ? "" : "s"} tagged with "${tag}"`
    : category ? `${totalCount} resource${totalCount === 1 ? "" : "s"} categorized as "${category}"`: "Resource";

  return (
    <ResourcePageWrapper>
      <PageHeader title={header} path="Resources"/>
      <div className="resource-list-wrapper">
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
              <Row className="resource-lists">
                {nodes.map(({ id, frontmatter, fields }) => (
                  <Col xs={12} key={id}>
                    <Card frontmatter={frontmatter} fields={fields}/>
                  </Col>
                ))}
                <Col>
                  <Pager pageContext={pageContext} text={"Resources"} isListView={isListView}/>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </ResourcePageWrapper>
  );
};

export default ResourceList;
