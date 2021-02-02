import React from "react";
import {Container, Col, Row} from "../../../../reusecore/Layout";
import MesheryImage1 from "../images/meshery-img.png";
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
      <Container>
        <Row className="cloud-native" Vcenter>
          <Col xs={12} lg={6}>
            <h3>Service meshes will be commonplace cloud native and edge infrastructure</h3>
            <p>Today: Over 40% of the enterprises run cloud native technologies in production; Over 80% od those enterprises running Kubernetes</p>
          </Col>
          <Col xs={12} lg={6}>
            <img src={MesheryImage1} alt="Meshery Img"/>
          </Col>
        </Row>
        <Row className="cloud-native"  Vcenter>
          <Col xs={12} lg={6}>
            <img src={MesheryImage1} alt="Meshery Img"/>
          </Col>
          <Col xs={12} lg={6}>
            <h3>Begin Your Cloud Native Journey</h3>
            <p>Tomorrow: 70% of cloud native environments running a service mesh in three years</p>
          </Col>
        </Row>
      </Container>
    </SpecsWrapper>
  );
};

export default HowitworksSpecs;
