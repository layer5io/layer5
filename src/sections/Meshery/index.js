import React from "react";

import {ThemeProvider} from "styled-components";
import Layout from "../../components/layout"; 

import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { FiDownloadCloud } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";

import FeaturesTable from "../Features-Col";

import meshery from "./images/meshery-logo-light-text-side.png";
import meshery_multi_mesh from "./images/meshery_multi_mesh.png";

import MesheryWrapper from "./meshery.style";
import theme from "../../theme/app/themeStyles";

const MesheryPage = () => {
  return (
    <ThemeProvider theme={theme}> 
      <Layout>
        <MesheryWrapper>
          <Container> 
            <div className="info">
              {/* <div id="stripes" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div> */}
              <div className="meshery-img"><img src={meshery} alt="meshery" /></div>
              <Row className="description">
                <Col className="desc-text" lg={6} md={12} sm={12}>
                  <h1 className="heading-1"> The <span className="heading-2"> Service Mesh </span> </h1>
                  <h1 className="heading-1"> Management Plane</h1>
                  <p className="desc-p">
                    Meshery is the service mesh management plane. <br/>
                    Adopt and operate any service mesh with confidence using Meshery's management features. 
                  </p>
                  <Button primary className="banner-btn" title="Watch Now" url="./operating-service-meshes">
                    <AiFillPlayCircle size={21} className="button-icon" />
                  </Button> 
                  <Button secondary className="banner-btn" title="Run Meshery" url="./getting-started">
                    <FiDownloadCloud size={21} className="button-icon" />
                  </Button>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <div><img className="meshery-sup-img" src={meshery_multi_mesh} alt="meshery_multi_mesh" /></div>
                </Col>
              </Row>
            </div>
            <FeaturesTable />
            <div className="callout">
              <h3> Service Mesh Management </h3>
              <h1> Manage your service mesh with features you won't find anywhere else.</h1>
              <Button primary title="Get Started" url="./getting-started" />
            </div>
          </Container>
        </MesheryWrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default MesheryPage;
