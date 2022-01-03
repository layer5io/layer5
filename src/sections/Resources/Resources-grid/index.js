import React from "react";
import Card from "../../../components/Card";
import { Container, Row, Col } from "../../../reusecore/Layout";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {
  return (
    <ResourcePageWrapper>
      <div className="resource-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={12}>
              <div className="resource-grid-wrapper">
               <Row>
              {props?.data?.map(({ id, frontmatter, fields }) => (
                    <Col key={id} xs={12} sm={6} >
                      <Card frontmatter={frontmatter} fields={fields}/>
                    </Col>
                  ))}
                </Row> 
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ResourcePageWrapper>
  );
};

export default ResourceGrid;
