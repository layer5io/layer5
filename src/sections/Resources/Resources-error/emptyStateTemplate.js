import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import serviceMesh from "../../../assets/images/service-mesh-icons/service-mesh.svg";

import { ResourcePageWrapper } from "../Resources-grid/resourceGrid.style";

const NoResources = () => {
  return (
    <ResourcePageWrapper>
      <div className="no-resources-page">
        <Container>
          <Row>
            <Col sm={12} lg={4}>
              <img src={serviceMesh} alt="service meshes" className="mesh" />
            </Col>
            <Col sm={12} lg={8}>
              <div className="error-text">
                <h1 className="errorMessage"> No matching resources </h1>
                <h3 className="errorSubtitle">Try removing one or more filters to broaden your results.</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ResourcePageWrapper>
  );
};

export default NoResources;
