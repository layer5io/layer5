import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";

import Backgroundsvg from "./assets/images/background.svg";
import Banner1SectionWrapper from "./banner4.style";

import meshmapVideo from "../../../assets/video/meshmap/meshmap-short-consul.mp4";

const Banner1 = () => {
  return (
    <Banner1SectionWrapper>
      <Container fullWidthSM>
        {/* <img src={Backgroundsvg} className="background-svg" /> */}
        <Row>
          <Col sm={4} lg={6} className="section-title-wrapper">

            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h1>Take the blinders off</h1>
              <h2>
                navigate in <span>style</span> with MeshMap
              </h2>
            </SectionTitle>
            {/* <p>
              an open source-first community of cloud native engineers
            </p> */}
            <span className="vintage-box-container">
              <VintageBox right={true} vintageOne={true}>
                <Button primary className="banner-btn one" title="Try MeshMap" url="/cloud-native-management/meshmap">
                  <FaMapMarkedAlt size={21} className="icon-left" />
                </Button>
                <Button primary className="banner-btn two" title="See Meshery" url="/service-mesh-management/meshery">
                  <FiDownloadCloud size={21} className="icon-left" />
                </Button>
              </VintageBox>
            </span>

          </Col>
          <Col sm={4} lg={6} className="section-title-wrapper">
            <video autoPlay muted loop preload="auto" className="meshmapVideo">
              <source src={meshmapVideo} type="video/mp4"></source>
            </video>
          </Col>
        </Row>
      </Container>
    </Banner1SectionWrapper>
  );
};

export default Banner1;
