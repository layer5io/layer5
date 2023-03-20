import React from "react";

import Layout from "../../components/layout";

import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import { GiClockwork } from "@react-icons/all-files/gi/GiClockwork";

import FeaturesTable from "./Features-Col";

import mesheryDemo from "../../assets/video/meshery/meshery-demo.webm";
import DockerExtensionCTA from "../Docker-Meshery/docker-extension-CTA";

import MesheryWrapper from "./meshery.style";
import FeaturesSection from "./Features-section";
import Features from "./Meshery-features";

const MesheryPage = () => {
  return (
    <Layout>
      <MesheryWrapper>
        <Container>
          <div className="info">
            <Row className="description">
              <Col className="desc-text" lg={6} md={6} sm={10} xs={8}>
                <h1 className="heading-1"> Wrangle your infrastructure</h1>
                <h1 className="heading-2"> <span className="heading-2"> collaboratively</span></h1>
                <p className="desc-p">
                  {/* Meshery is the cloud native manager. <br /> */}
                  Confidently design, deploy, and operate your infrastructure and workloads with Meshery.
                </p>
                <Button primary className="banner-btn" title="How Meshery Works" url="./operating-service-meshes">
                  <GiClockwork size={21} className="button-icon" />
                </Button>
                <Button secondary className="banner-btn" title="Run Meshery" url="./getting-started">
                  <FiDownloadCloud size={21} className="button-icon" />
                </Button>
              </Col>
              <Col lg={6} md={6} className="meshery-hero-img">
                <video autoPlay muted loop controls className="meshery-video">
                  <source src={mesheryDemo} type="video/webm" />
                </video>
                {/* <img className="meshery-sup-img" src={mesheryFullStack} alt="Meshery the multi-mesh manager" /> */}
              </Col>
            </Row>
          </div>
          <FeaturesTable />
        </Container>
        <FeaturesSection />
        <Container>
          <div className="callout">
            <h1> Manage your clusters with features you won't find anywhere else.</h1>
          </div>
        </Container>
        <Features />
        <Container>
          <DockerExtensionCTA />
        </Container>
      </MesheryWrapper>
    </Layout>
  );
};

export default MesheryPage;
