import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";
import ParticleComponent from "../../reusecore/Particle";

import { FaPlay, FaDownload } from "react-icons/fa";

import BannerSectionWrapper from "./banner.style";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <ParticleComponent />
      <Container fullWidthSM>
        <Row>
          <Col sm={7} md={6} lg={7}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>30% off for new users for 1 month</h4>
              <h1>
                Drive Customers Passing Your Appslife With <span>Appion</span>
              </h1>
            </SectionTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam quis nostrud exercitation.
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button className="banner-btn one">
                <FaDownload className="icon-left" />
                Run Meshery
              </Button>
              <Button className="banner-btn two">
                <FaPlay className="icon-left" /> Watch Now
              </Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
