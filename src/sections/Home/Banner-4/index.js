import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";

import Banner4SectionWrapper from "./banner4.style";

import meshmapVideo from "../../../assets/video/meshery/meshmap/meshmap-short-consul.mp4";

const Banner1 = () => {
  return (
    <Banner4SectionWrapper>
      <Row>
        <Col sm={4} lg={6} className="section-title-wrapper text-col">
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
              </VintageBox>
            </span>
          </Container>
        </Col>
        <Col sm={4} lg={6} className="section-title-wrapper video-col">
          <Link to="/cloud-native-management/meshmap">
            <video autoPlay muted loop width="100%" height="auto" className="meshmapVideo">
              <source src={meshmapVideo} type="video/mp4"></source>
            </video>
          </Link>
        </Col>
      </Row>
    </Banner4SectionWrapper>
  );
};

export default Banner1;
