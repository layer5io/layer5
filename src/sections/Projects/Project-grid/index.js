import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import { ProjectWrapper } from "./projectGrid.style";
import DockerExtensionCTA from "../../Docker-Meshery/docker-extension-CTA";

import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import landscape from "../../../assets/images/landscape/layer5_landscape_green.svg";
import imagehub from "../../../assets/images/image-hub/layer5-image-hub.svg";
import smp from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import smi from "../../../assets/images/app/projects/smi.svg";
import patterns from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import L5gray from "../../../assets/images/layer5/5 icon/svg/gray/5-gray-60.svg";
import nighthawk from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";


const ProjectPage = () => {
  return (
    <ProjectWrapper>
      <PageHeader
        className="title"
        title="Cloud Native Management"
        path="/projects"
      />
      <h3>
        for the <img src={L5gray} alt="Layer 5 icon" />
        th layer of distributed systems
      </h3>
      <div className="project-page-wrapper">
        <Container>
          <div className="project__grid">
            <Link to="/service-mesh-landscape" className="project__card one">
              <div className="project__card-container project__card-container_one">
                <img src={landscape} alt="Landscape"/>
                <h5>Landscape</h5>
              </div>
            </Link>
            <Link to="/service-mesh-management/meshery" className="project__card two">
              <div className="project__card-container project__card-container_meshery">
                <img src={meshery} alt="Meshery" />
                <h5>Meshery</h5>
              </div>
            </Link>
            <Link to="/projects/image-hub" className="project__card three">
              <div className="project__card-container">
                <img src={imagehub} alt="Image Hub"/>
                <h5>Image Hub</h5>
              </div>
            </Link>
            <Link
              to="/projects/service-mesh-interface-conformance"
              className="project__card four"
            >
              <div className="project__card-container">
                <img src={smi} alt="Service Mesh Interface Conformance" />
                <h5>Service Mesh Interface Conformance</h5>
              </div>
            </Link>
            <Link
              to="/projects/service-mesh-performance"
              className="project__card five"
            >
              <div className="project__card-container">
                <img src={smp} alt="Service Mesh Performance"/>
                <h5>Service Mesh Performance</h5>
              </div>
            </Link>
            <Link to="/projects/nighthawk" className="project__card six">
              <div className="project__card-container">
                <img src={nighthawk} alt="Nighthawk"/>
                <h5>NightHawk</h5>
              </div>
            </Link>
            <Link
              to="/learn/service-mesh-books/service-mesh-patterns"
              className="project__card seven"
            >
              <div className="project__card-container-seven">
                <Row>
                  <Col lg={4} md={12} sm={12} className="image">
                    <img
                      src={patterns}
                      alt="Service Mesh Patterns"
                    />
                  </Col>
                  <Col lg={8} md={12} sm={12}>
                    <h5> Service Mesh Patterns</h5>
                  </Col>
                </Row>
              </div>
            </Link>
          </div>

          <DockerExtensionCTA />
        </Container>
      </div>
    </ProjectWrapper>
  );
};

export default ProjectPage;
