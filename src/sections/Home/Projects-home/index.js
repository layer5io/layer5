import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";

import projectImage1 from "../../../assets/images/app/projects/landscape.png";
import projectImage2 from "../../../assets/images/app/projects/smp.png";
import projectImage3 from "../../../assets/images/app/projects/meshery-logo-light.png";
import projectImage4 from "../../../assets/images/app/projects/image-hub/layer5-image-hub.png";

import ProjectItemWrapper from "./projectSection.style";

const Projects = () => {
  return (
    <ProjectItemWrapper id="projects">
      <Container>
        <Row>
          <div className="project-title">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="75%"
            >
              <h4>ENABLING YOU TO</h4>
              <h2>
                Operate any service mesh <span>with confidence</span>.
              </h2>
            </SectionTitle>
            {/* <p className="project-text">
                        Layer5 projects establish industry standards and enable service developers, owners, and operators with repeatable patterns and best practices for managing all aspects of distributed services.
            </p> */}
          </div>
        </Row>
        <Row>
          <div className="project__block__wrap">
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/landscape">
                <div className="project__block__inner">
                  <img src={projectImage1} alt="appion project" />
                  <h5>Landscape</h5>
                  <p>Service Mesh Ecosystem</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/meshery">
                <div className="project__block__inner">
                  <img src={projectImage3} alt="appion project" />
                  <h5>Meshery</h5>
                  <p>Service Mesh Management</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/projects/service-mesh-performance">
                <div className="project__block__inner">
                  <img src={projectImage2} alt="appion project" />
                  <h5>Service Mesh Performance</h5>
                  <p>The Standard Measurement</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/projects/image-hub">
                <div className="project__block__inner">
                  <img src={projectImage4} alt="Business logic in the service mesh data plane" />
                  <h5>Image Hub</h5>
                  <p>WebAssembly Filters</p>
                </div>
              </Link>
            </Col>
          </div>
        </Row>
        {/* <div className="button">
          <Button secondary url="/projects" title="Learn More" />
        </div> */}
        <Row>
          <Col xs={12}>
            <div className="description">
              <p>Layer5 projects establish industry standards and enable service developers,
                owners, and operators with repeatable patterns and best practices for managing
                all aspects of distributed services
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ProjectItemWrapper>
  );
};

export default Projects;
