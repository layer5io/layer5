import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";

import projectImage1 from "../../assets/images/app/projects/landscape.png";
import projectImage2 from "../../assets/images/app/projects/smp.png";
import projectImage3 from "../../assets/images/app/projects/meshery-logo-light.png";
import projectImage4 from "../../assets/images/app/projects/meshery-logo-light.png";
import Icon from "../../assets/images/app/projects/arrow.svg";

import ProjectItemWrapper from "./projectSection.style";

const Projects = () => {
  return (
    <ProjectItemWrapper id="projects">
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="project__block__wrap">
              <div className="project__block">
                <div className="project__block__inner">
                  <img src={projectImage1} alt="service mesh comparison" />
                  <h3>Landscape</h3>
                  <p>Service Mesh Ecosystem</p>
                  <Link to="#">
                    <img src={Icon} alt="Compare service meshes" />
                  </Link>
                </div>
                <div className="project__block__inner">
                  <img src={projectImage2} alt="Service Mesh Performance" />
                  <h3>Service Mesh Performance</h3>
                  <p>The Standard Measurement</p>
                  <Link to="#">
                    <img src={Icon} alt="Service Mesh Overhead" />
                  </Link>
                </div>
              </div>
              <div className="project__block right">
                <div className="project__block__inner">
                  <img src={projectImage3} alt="Layer5 open source projects" />
                  <h3>Meshery</h3>
                  <p>Cloud Native Management</p>
                  <Link to="#">
                    <img src={Icon} alt="Meshery, the cloud native management plane" />
                  </Link>
                </div>
                <div className="project__block__inner">
                  <img src={projectImage4} alt="Business logic in the service mesh data plane" />
                  <h3>Image Hub</h3>
                  <p>WebAssembly Filters</p>
                  <Link to="/projects/image-hub">
                    <img src={Icon} alt="Layer5 Image Hub" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} className="project-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Projects</h4>

              <h2>
                Operate any service mesh <span>with confidence</span>.
              </h2>
            </SectionTitle>
            <p className="project-text">
              Layer5 projects establish industry standards and enable service developers, owners, and operators with repeatable patterns and best practices for managing all aspects of distributed services.
            </p>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button className="project-btn" title="Learn More" />
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </ProjectItemWrapper>
  );
};

export default Projects;
