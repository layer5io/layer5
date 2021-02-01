import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import MeshSectionWrapper from "./ServiceMesh.style";
import ServiceMeshAnimate from "./ServiceMeshAnimation.style";
import SectionTitle from "../../../reusecore/SectionTitle";
import MesheryLogo from "../../../assets/images/meshery/full-logo/meshery-logo-light-text.svg";
import ServiceMesh from "./images/animated-service-mesh.svg";
import MeshMap from "./images/meshmap.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "gatsby";
import AnimatedMesh from "./AnimateSVG";

const ServiceMeshManagement = () => {
  return (
    <MeshSectionWrapper>
      <Container fullWidthSM>
        <Row>
          <SectionTitle
            className="section-title"
            leftAlign={false}
            UniWidth="65%"
          >
            <h4 className="title">Service Mesh Management</h4>
            <h2 className="big-title">
              Meshery is <span>the</span> service mesh management plane.
            </h2>
          </SectionTitle>
          {/* <ServiceMeshAnimate className="active" >
            <img className="active" src={ServiceMesh} />
            <svg className="active"><use xlink={ServiceMesh}></use></svg>
            <AnimatedMesh className="active" />
          </ServiceMeshAnimate> */}

          <Col xs={12} sm={12} md={6}>
            <Link to="/service-mesh-management/meshery">
              <img className="mesh-image" alt="Meshery - the multi-service mesh manager" src={MeshMap} />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="side">
              <div className="side-text">
                The <span>extensible</span> service mesh manager.
              </div>
              <div className="description">
                An extensible platform, Meshery, comes packed with integrations for Prometheus, Grafana, and support for WebAssembly filters for Envoy.
              </div>
              <div className="backBtn">
                <br />
                <Link to="/service-mesh-management/meshery">
                  <p>Learn More <span><IoIosArrowForward className="icon" /></span></p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MeshSectionWrapper>
  );
};

export default ServiceMeshManagement;
