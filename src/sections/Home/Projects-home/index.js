import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import ProjectItemWrapper from "./projectSection.style";
import { StaticImage } from "gatsby-plugin-image";

const projectImage1 = "../../../assets/images/app/projects/landscape.png";
const projectImage2 = "../../../assets/images/app/projects/smp.png";
const projectImage3 = "../../../assets/images/app/projects/meshery-logo-light.png";
const projectImage4 = "../../../assets/images/app/projects/nighthawk-logo.png";

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
                Operate cloud native infrastructure <span>with confidence</span>.
              </h2>
            </SectionTitle>
          </div>
        </Row>
        <Row>
          <div className="project__block__wrap">
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/service-mesh-landscape">
                <div className="project__block__inner">
                  <StaticImage src={projectImage1} alt="appion project" />
                  <h5>Landscape</h5>
                  <p>Service Mesh Ecosystem</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/service-mesh-management/meshery">
                <div className="project__block__inner">
                  <StaticImage src={projectImage3} alt="appion project" />
                  <h5>Meshery</h5>
                  <p>Cloud Native Management</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/projects/service-mesh-performance">
                <div className="project__block__inner">
                  <StaticImage src={projectImage2} alt="appion project" />
                  <h5>Service Mesh Performance</h5>
                  <p>The Measurement Standard</p>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/projects/nighthawk">
                <div className="project__block__inner">
                  <StaticImage src={projectImage4} alt="appion project" />
                  <h5>Nighthawk</h5>
                  <p>Distributed Performance Management</p>
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
