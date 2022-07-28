import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";

import Banner1SectionWrapper from "./banner4.style";

import meshmapVideo from "../../../assets/video/meshery/meshmap/meshmap-short-consul.mp4";
import Posterimg from "./1x1.png";

const Banner1 = () => {
  return (
    <Banner1SectionWrapper>
      <Row>
        <Col sm={4} lg={6} className="section-title-wrapper">
          <Container fullWidthSM>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h1>Take the blinders off</h1>
              <h2>
                cloud native management with <span>MeshMap</span>
              </h2>
            </SectionTitle>
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
          </Container>
        </Col>
        <Col sm={4} lg={6} className="section-title-wrapper">
          <Link to="/cloud-native-management/meshmap">
            <video autoPlay muted loop preload="metadata" className="meshmapVideo">
              <source src={meshmapVideo} type="video/mp4"></source>
            </video>
          </Link>
        </Col>
      </Row>
    </Banner1SectionWrapper>
  );
};

export default Banner1;
