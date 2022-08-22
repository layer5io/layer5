import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";

import Backgroundsvg from "./assets/images/background.svg";
import Banner1SectionWrapper from "./banner1.style";

const Banner1 = () => {
  return (
    <Banner1SectionWrapper>
      <Container fullWidthSM>
        <img src={Backgroundsvg} className="background-svg" />
        <Row>
          <Col sm={8} lg={8} className="section-title-wrapper">

            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h1>Cloud Native Management</h1>
              <h2>
              of <span>developer</span>-defined infrastructure
              </h2>
            </SectionTitle>
            <p>
            an open source-first community of cloud native engineers
            </p>
            <span className="vintage-box-container">
              <VintageBox right={true} vintageOne={true}>
                <Button primary className="banner-btn one" title="Join in" url="/community">
                  <FaMapMarkedAlt size={21} className="icon-left" />
                </Button>
                <Button primary className="banner-btn two" title="See Meshery" url="/cloud-native-management/meshery">
                  <FiDownloadCloud size={21} className="icon-left" />
                </Button>
              </VintageBox>
            </span>
          </Col>
        </Row>
      </Container>
    </Banner1SectionWrapper>
  );
};

export default Banner1;
