import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import serviceMesh from "../../../assets/images/service-mesh-icons/service-mesh.svg";

import { ResourcePageWrapper } from "../Resources-grid/resourceGrid.style";

const NoResources = ({ errorMessage,errorSubtitle }) => {
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
                <h1 className="errorMessage"> {errorMessage} </h1>
                <h3 className="errorSubtitle">{errorSubtitle}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ResourcePageWrapper>
  );
};

export default NoResources;
