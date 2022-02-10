import React from "react";

import {ThemeProvider} from "styled-components";
import Layout from "../../components/layout"; 

import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import { GiClockwork } from "@react-icons/all-files/gi/GiClockwork";

import FeaturesTable from "./Features-Col";

import mesheryFullStack from "./images/meshery-logo-light-text-tag.png";
import mesheryDemo from "../../assets/video/meshery-full-perf.mp4";


import MesheryWrapper from "./meshery.style";
import theme from "../../theme/app/themeStyles";
import FeaturesSection from "./Features-section";
import Features from "./Meshery-features";

const MesheryPage = () => {
  return (
    <ThemeProvider theme={theme}> 
      <Layout>
        <MesheryWrapper>
          <Container> 
            <div className="info">
              <Row className="description">
                <Col className="desc-text" lg={6} md={6} sm={8} xs={8}>
                  <h1 className="heading-1"> the service mesh</h1>
                  <h1 className="heading-2"> <span className="heading-2">management plane</span></h1>
                  <p className="desc-p">
                    Meshery is the service mesh management plane. <br/>
                    Adopt and operate any service mesh with confidence using Meshery's management features. 
                  </p>
                  <Button primary className="banner-btn" title="How Meshery Works" url="./operating-service-meshes">
                    <GiClockwork size={21} className="button-icon" />
                  </Button> 
                  <Button secondary className="banner-btn" title="Run Meshery" url="./getting-started">
                    <FiDownloadCloud size={21} className="button-icon" />
                  </Button>
                </Col>
                <Col lg={6} md={6} sm={4} xs={4}className="meshery-hero-img">
                  <video controls>
                    <source src={mesheryDemo} type="video/mp4" width="720" height="960" />
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
              <h1> Manage your service mesh with features you won't find anywhere else.</h1>
            </div>
          </Container>
          <Features />
        </MesheryWrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default MesheryPage;
