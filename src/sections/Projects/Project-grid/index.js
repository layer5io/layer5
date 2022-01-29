import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { StaticImage } from "gatsby-plugin-image";
import PageHeader from "../../../reusecore/PageHeader";

import { ProjectWrapper } from "./projectGrid.style";
import CommunityCallCard from "../../../components/CommunityCallCard/index";

const meshery = "../../../assets/images/app/projects/meshery-logo-light.png";
const landscape = "../../../assets/images/app/projects/landscape.png";
const smi = "../../../assets/images/app/projects/smi.svg";
const imagehub = "../../../assets/images/image-hub/layer5-image-hub.png";
const smp = "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
const patterns = "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
const L5gray = "../../../assets/images/layer5/5 icon/svg/gray/5-gray-60.svg";
const nighthawk = "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";


const ProjectPage = () => {
  return (
    <ProjectWrapper>
      <PageHeader
        className="title"
        title="Cloud Native Management"
        path="/projects"
      />
      <h3>
        for the <StaticImage src={L5gray} alt="Layer 5 icon" />
        th layer of distributed systems
      </h3>
      <div className="project-page-wrapper">
        <Container>
          <div className="project__grid">
            <Link to="/service-mesh-landscape" className="project__card one">
              <div className="project__card-container project__card-container_one">
                <StaticImage src={landscape} alt="Landscape" objectFit="contain"/>
                <h5>Landscape</h5>
              </div>
            </Link>
            <Link to="/service-mesh-management/meshery" className="project__card two">
              <div className="project__card-container project__card-container_meshery">
                <StaticImage src={meshery} alt="Meshery" objectFit="contain"  />
                <h5>Meshery</h5>
              </div>
            </Link>
            <Link to="/projects/image-hub" className="project__card three">
              <div className="project__card-container">
                <StaticImage src={imagehub} alt="Image Hub" objectFit="contain"/>
                <h5>Image Hub</h5>
              </div>
            </Link>
            <Link
              to="/projects/service-mesh-interface-conformance"
              className="project__card four"
            >
              <div className="project__card-container">
                <StaticImage src={smi} alt="Service Mesh Interface Conformance" objectFit="contain"/>
                <h5>Service Mesh Interface Conformance</h5>
              </div>
            </Link>
            <Link
              to="/projects/service-mesh-performance"
              className="project__card five"
            >
              <div className="project__card-container">
                <StaticImage src={smp} alt="Service Mesh Performance" objectFit="contain"/>
                <h5>Service Mesh Performance</h5>
              </div>
            </Link>
            <Link to="/projects/nighthawk" className="project__card six">
              <div className="project__card-container">
                <StaticImage src={nighthawk} alt="Nighthawk" objectFit="contain"/>
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
                    <StaticImage
                      src={patterns}
                      alt="Service Mesh Patterns"
                      objectFit="contain"
                    />
                  </Col>
                  <Col lg={8} md={12} sm={12}>
                    <h5> Service Mesh Patterns</h5>
                  </Col>
                </Row>
              </div>
            </Link>
          </div>

          <CommunityCallCard />
        </Container>
      </div>
    </ProjectWrapper>
  );
};

export default ProjectPage;
