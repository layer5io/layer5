import React from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import Card from "../../../components/Card";
import Pager from "../../../components/pager";
import { Container, Row, Col } from "../../../reusecore/Layout";

import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Resource-sidebar";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = ({data, isListView, setListView, setGridView, pageContext}) => {
  return (
    <ResourcePageWrapper>
      <PageHeader title="Cloud Native Resources" path="Resources"/>
      <div className="resource-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <BlogViewToolTip isListView={isListView} setListView={setListView}
                setGridView ={setGridView}
              />
              <div className="resource-grid-wrapper">
                <Row>
                  {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                    <Col key={id} xs={12} sm={6} >
                      <Card frontmatter={frontmatter} fields={fields}/>
                    </Col>
                  ))}
                  <Col>
                    <Pager pageContext={pageContext} text={"Resources"} isListView={isListView}/>
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
    </ResourcePageWrapper>
  );
};

export default ResourceGrid;
