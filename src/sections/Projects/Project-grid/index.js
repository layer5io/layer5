import React from "react";
import { Link } from "gatsby";
import { Container } from "../../../reusecore/Layout";
import { Row, Col } from "../../../reusecore/Layout";

import PageHeader from "../../../reusecore/PageHeader";

import { ProjectWrapper } from "./projectGrid.style";

import meshery from "../../../assets/images/app/projects/meshery-logo-light.png";
import landscape from "../../../assets/images/app/projects/landscape.png";
import smi from "../../../assets/images/app/projects/smi.svg";
import imagehub from "../../../assets/images/image-hub/layer5-image-hub.png";
import smp from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import distributedPerformance from "../../../collections/projects/distributed-performance-management/distributed-performance_green.svg";
import L5gray from "../../../assets/images/layer5/5 icon/svg/gray/5-gray-60.svg";
import ContactFormModal from "../../../components/Contact-Modal";
import nighthawk from "../GetNighthawk/images/getnighthawk.svg";

const ProjectPage = () => {
  return (
    <ProjectWrapper>
      <PageHeader className="title" title="Cloud Native Management" path="/projects" />
      <h3>for the <img src={L5gray} alt="Layer 5 icon"/>th layer of distributed systems</h3>
      <div className="project-page-wrapper">
        <Container>
          <br/><br/>
          <Row >
            <Col sm={6} md={6} lg={3}>
              <Link to="/landscape" className="project__card one">
                <div className="project__card-container">
                  <img src={landscape} alt="Landscape" />
                  <h5>Landscape</h5>
                </div>
              </Link>
            </Col>
            <Col sm={6} md={6} lg={3}>
              <Link to="/meshery" className="project__card two">
                <div className="project__card-container">
                  <img src={meshery} alt="Meshery" />
                  <h5>Meshery</h5>
                </div>
              </Link>
            </Col>
            <Col sm={6} md={6} lg={3}>
              <Link to="/projects/image-hub" className="project__card three">
                <div className="project__card-container">
                  <img src={imagehub} alt="Image Hub" />
                  <h5>Image Hub</h5>
                </div>
              </Link>
            </Col>
            <Col sm={6} md={6} lg={3}>
              <Link
                to="/projects/service-mesh-interface-conformance"
                className="project__card four"
              >
                <div className="project__card-container">
                  <img src={smi} alt="Service Mesh Interface Conformance" />
                  <h5>Service Mesh Interface Conformance</h5>
                </div>
              </Link>
            </Col>
          </Row>
          <div className="bottom-grid">
            <Row >
              <Col sm={6} md={6} lg={4}>
                <Link to="/projects/service-mesh-performance" className="project__card five">
                  <div className="project__card-container">
                    <img src={smp} alt="Service Mesh Performance" />
                    <h5>Service Mesh Performance</h5>
                  </div>
                </Link>
              </Col>
              <Col sm={6} md={6} lg={4}>
                <Link to="/projects/distributed-performance-management" className="project__card six">
                  <div className="project__card-container">
                    <img src={distributedPerformance} alt="Distributed Performance Management of Service Meshes"/>
                    <h5>Distributed Performance Management of Service Meshes</h5>
                  </div>
                </Link>
              </Col>
              <Col sm={6} md={6} lg={4}>
                <Link to="/projects/getnighthawk" className="project__card seven">
                  <div className="project__card-container">
                    <img src={nighthawk} alt="getnighthawk" />
                    <h5>GetNightHawk</h5>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
          <br/><br/>
          <ContactFormModal callout_text="Contact Us" form_header="Get In Touch" />
        </Container>
      </div>
    </ProjectWrapper>
  );
};

export default ProjectPage;
