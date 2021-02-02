import React from "react";
import {Container, Col, Row} from "../../../../reusecore/Layout";
import DataCard from "./data-card";
import SpecsWrapper from "./specs.style";

const HowitworksSpecs = () => {
  return(
    <SpecsWrapper>
      <div className="management-plane">
        <Container>
          <Row Vcenter>
            <Col className="text" xs={12} lg={6}>
              <h2>Meshery is the service mesh management plane</h2>
              <p>Adopt and operate any service mesh with confidence using Meshery's management features</p>
            </Col>
            <Col className="card" xs={12} lg={6}>
              <DataCard/>
            </Col>
          </Row>
        </Container>
      </div>
    </SpecsWrapper>
  );
};

export default HowitworksSpecs;
