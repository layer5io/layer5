import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";

import Icon1 from "../../assets/images/app/features/01.svg";
// import Icon2 from "../../assets/images/app/features/02.svg";
// import Icon3 from "../../assets/images/app/features/03.svg";
// import Icon4 from "../../assets/images/app/features/04.svg";
// import Icon5 from "../../assets/images/app/features/05.svg";
import mesheryOperatorDark from "./img/meshery-operator_dark.svg";
import policyEngineGreen from "./img/policy-engine_green.svg";
import distributedPerformance from "./img/distributed-performance_green.svg";
import visualToplogy from "./img/visual-topology.svg";
import performanceManagement from "./img/performance-management.svg";
import { Link } from "gatsby";

import FeaturesSectionWrapper from "./features.style";

const Features = () => {
  return (
    <FeaturesSectionWrapper id="features">
      <Container fullWidthSM>
        <SectionTitle UniWidth="65%" className="section-title">
          <h4>Cloud Native Management</h4>
          <h2>
            Manage your cloud native infra and apps with features<span> you won't find anywhere else</span>.
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="features-block v1">
              <div className="features-icon-block">
                <img src={Icon1} alt="img" />
              </div>
              <h3>Lifecycle Management</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="features-block v2">
              <div className="features-icon-block">
                <img src={performanceManagement} alt="img" />
              </div>
              <h3>Performance Management</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="features-block v1">
              <div className="features-icon-block">
                <img src={policyEngineGreen} alt="img" />
              </div>
              <h3>Configuration Management</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="features-block v2">
              <div className="features-icon-block">
                <img src={distributedPerformance} alt="img" />
              </div>
              <h3>Data Plane Intelligence</h3>
              <p>
                Harness the power of WebAssembly filters to implement application and offload your service development teams from lengthy engineering cycles. Expect and receive more from your infrastructure.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="features-block v1">
              <div className="features-icon-block">
                <img src={visualToplogy} alt="img" />
              </div>
              <h3>Visual Topology</h3>
              <p>
                Use <Link to="/meshmap" alt="Cloud Native Visual Map">MeshMap</Link> to quickly understand how your service mesh is functioning and to intuitively reconfigure and tune your mesh in accordance with the needs of your workloads.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="features-block v2">
              <div className="features-icon-block">
                <img src={mesheryOperatorDark} alt="Meshery Operator" />
              </div>
              <h3>Automated Operation</h3>
              <p>
                <a href="/meshery/service-mesh-operator" alt="Cloud Native and Service Mesh Operator">Meshery Operator</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FeaturesSectionWrapper>
  );
};

export default Features;
