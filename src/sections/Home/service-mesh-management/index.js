import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import MeshSectionWrapper from "./ServiceMesh.style";
import SectionTitle from "../../../reusecore/SectionTitle";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const MeshMap = "../../../assets/images/homePage-images/meshmap.png";

const ServiceMeshManagement = () => {
  return (
    <MeshSectionWrapper>
      <Container fullWidthSM>
        <Row>
          <SectionTitle
            className="section-title"
            leftAlign={false}
            UniWidth="75%"
          >
            <h4 className="title">Meshery is</h4>
            <h2 className="big-title">
              The <span>service mesh management <span className="strikethrough">plane</span> platform</span>
            </h2>
          </SectionTitle>

          <Col xs={12} sm={12} md={6}>
            <Link to="/service-mesh-management/meshery">
             <StaticImage className="mesh-image" alt="Meshery - the multi-service mesh manager" src={MeshMap} />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="side">
              <div className="side-text">
                The <span>extensible</span> service mesh manager.
              </div>
              <div className="description">
                <p>An extensible platform, Meshery, comes packed with integrations for Prometheus, Grafana, Jaeger, CloudEvents, and support for WebAssembly filters for Envoy.</p>
                <p>
                  Not just a service mesh manager, Meshery is your microservices manager. Meshery comprises a set of components each one fitted with extension points. Users and integrators may extend Meshery by taking advantage of designated extension points.
                </p>
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
