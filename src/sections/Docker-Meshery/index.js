import React from "react";
import { DockerMesheryWrapper } from "./dockerMeshery.style";
import { Row, Col } from "../../reusecore/Layout";
import docker from "../../assets/images/socialIcons/docker_white.svg";
import meshery from "../../assets/images/meshery/icon-only/meshery-logo-white.svg";
import DockerMesheryBeta from "./dockery-meshery-beta";

const MesheryDockerPage = () => {
  return (
    <DockerMesheryWrapper>
      <div className="page-header-section">
        <Row>
          <Col md={6} sm={12}>
            <h1>Docker and Meshery Private Beta <br />Program</h1>
          </Col>
          <Col md={3} sm={12}>
            <img src={meshery} alt="Meshery" className="mesheryIcon"/>
          </Col>
          <Col md={3} sm={12}>
            <img src={docker} alt="Docker" className="dockerIcon"/>
          </Col>
        </Row>
      </div>
      <DockerMesheryBeta />
    </DockerMesheryWrapper>
  );
};

export default MesheryDockerPage;