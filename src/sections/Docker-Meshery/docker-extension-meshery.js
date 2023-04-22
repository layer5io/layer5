import React from "react";
import { DockerMesheryWrapper } from "./dockerMeshery.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import CommonForm from "../../components/CommonForm";
import Button from "../../reusecore/Button";

const Kubernetes = "./kubernetes-logo.svg";
const mesheryworkdiagram =
  "../../assets/images/mesherywork-diagram/mesherywork-diagram.svg";
const dockercompose_logo =
  "../../assets/images/dockercompose-logo/dockercompose-logo.png";
const visual_topology =
  "../../assets/images/visual-topology/visual-topology.svg";
const dockerDesktop =
  "../../assets/images/docker-extension/docker-extension-meshery.png";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const DockerExtensionMeshery = () => {

  return (
    <DockerMesheryWrapper>
      <Container>
        <Row className="dockerMesherySection">
          <h2 className="sectionTitle">
            Wrangle cloud native apps using Docker Desktop and Meshery
          </h2>
          <p>
          From the convenience of your Docker Desktop interface, connect Meshery with your Kubernetes cluster. Watch as MeshSync discovers all of your Kuberentes clusters. Visually design your Docker-based infrastructure. Choose from hundreds of ready-made design patterns using Meshery Catalog. Use our no-code designer, MeshMap, to collaboratively design and operate your infra.
          </p>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <StaticImage
              src={dockerDesktop}
              alt="Meshery Docker Extension"
            />
            <p>Install Meshery Docker Extension from <a href="https://hub.docker.com/extensions/meshery/docker-extension-meshery">Docker Hub</a> and get:</p>

            <Row>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={dockercompose_logo}
                  alt="Docker Compose Logo"
                  width={250}
                  objectFit="contain"
                />
              </Col>
              <Col lg={10}>
                <div className="feature-title">Kubernetes support for your Docker Compose apps</div> {" "}
                <i>
                 Import your Docker Compose apps. Configure and deploy them to Kubernetes and integrate into your GitOps pipeline.
                </i>
              </Col>
            </Row>
            <Row className="extension-feature mobile-image-reverse">
              <Col lg={10}>
                <div className="feature-title">Visual designer for cloud native applications and infrastructure</div> {" "}
                <i>
                Using <Link to="/meshmap">MeshMap</Link> as a visual topology for designing Docker Compose applications, operating Kubernetes, service meshes, and their workloads.
                </i>
              </Col>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={visual_topology}
                  alt="Visual Topology"
                  width={150}
                  objectFit="contain"
                />
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={mesheryworkdiagram}
                  alt="Single-click Istio deployment"
                  width={150}
                  objectFit="contain"
                />
              </Col>
              <Col lg={10}>
                <div className="feature-title">Single-click deployment of any service mesh</div> {" "}
                <i>
                  Support of 10 different service meshes to the fingertips
                  of developers in connection with Docker Desktop’s ability
                  to deliver Kubernetes locally.
                </i>
              </Col>
            </Row>
            <Row className="extension-feature mobile-image-reverse">
              <Col lg={10}>
                <div className="feature-title">Detection of Kubernetes environments</div> {" "}
                <i>
                  Scan your kubeconfigs and select your current Kubernetes environment. Switch from one environment to another or manage all clusters concurrently.
                </i>
              </Col>
              <Col className="docker-extension-meshery" lg={2}>
                <StaticImage
                  src={Kubernetes}
                  alt="Kubernetes scan and MeshSync"
                  width={150}
                  objectFit="contain"
                />
              </Col>
            </Row>
            <Row className="extension-feature">
              <Col lg={10}>
                <div className="listed">
                  <strong>Resources</strong>
                  <p>
                    Layer5 presented two talks at DockerCon22 with HPE and HashiCorp, below are the links to the blog posts which covers the detailed overview of "Docker Extension for Meshery".
                  </p>
                  <ul>
                    <li>
                      <a href="https://layer5.io/blog/docker/extending-the-docker-compose-experience-to-service-mesh">Extending the Docker Compose Experience to Service Mesh</a>
                    </li>
                    <li>
                      <a href="https://layer5.io/blog/docker/extending-docker-with-meshery-spire-and-istio">Extending Docker with Meshery, SPIRE, and Istio</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <p className="installButton">
              <Button primary title="Install Meshery Docker Extension" url="https://hub.docker.com/extensions/meshery/docker-extension-meshery" external="true" /></p>
            <CommonForm
              title="Learn All Meshery Docker Extension Features"
              form="docker-extension"
              account_desc="Selected participants will receive a free Meshery Cloud account and have full access to the Meshery Docker extension for each of the following user accounts that you provide. Please provide at least one account."
              submit_title = "Thank you for your interest in Meshery Docker Extension!"
              submit_body = "You will soon receive detailed guidance on the all of the extension's features."
            />
          </Col>
        </Row >
      </Container >
    </DockerMesheryWrapper>
  );
};

export default DockerExtensionMeshery;
