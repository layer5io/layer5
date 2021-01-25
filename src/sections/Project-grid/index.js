import React from "react";
import { Link } from "gatsby";
import { Container } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { ProjectWrapper } from "./projectGrid.style";

import meshery from "../../assets/images/app/projects/meshery-logo-light.png";
import landscape from "../../assets/images/app/projects/landscape.png";
import smi from "../../assets/images/app/projects/smi.svg";
import imagehub from "../../assets/images/image-hub/layer5-image-hub.png";
import smp from "../../assets/images/smp/icon/smp-dark.svg";
import distributedPerformance from "../../collections/projects/distributed-performance-management-of-service-meshes/distributed-performance_green.svg";

const ProjectPage = () => {
  return (
    <ProjectWrapper>
      <PageHeader title="Projects" path="Projects" />
      <div className="project-page-wrapper">
        <Container>
          <div className="project__grid">
            <Link to="/landscape" className="project__card one">
              <div className="project__card-container">
                <img src={landscape} alt="Landscape" />
                <h5>Landscape</h5>
              </div>
            </Link>
            <Link to="/meshery" className="project__card two">
              <div className="project__card-container">
                <img src={meshery} alt="Meshery" />
                <h5>MESHERY</h5>
              </div>
            </Link>
            <Link to="/projects/image-hub" className="project__card three">
              <div className="project__card-container">
                <img src={imagehub} alt="Image Hub" />
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
            <Link to="/service-mesh-performance" className="project__card five">
              <div className="project__card-container">
                <img src={smp} alt="Service Mesh Performance" />
                <h5>Service Mesh Performance</h5>
              </div>
            </Link>
            <Link
              to="/projects/distributed-performance-management-of-service-meshes"
              className="project__card six"
            >
              <div className="project__card-container">
                <img
                  src={distributedPerformance}
                  alt="Distributed Performance Management of Service Meshes"
                />
                <h5>Distributed Performance Management of Service Meshes</h5>
              </div>
            </Link>
          </div>
        </Container>
      </div>
    </ProjectWrapper>
  );
};

export default ProjectPage;
