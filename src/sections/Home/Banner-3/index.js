import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";
// import ParticleComponent from "../../../reusecore/Particle";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import Banner3SectionWrapper from "./banner3.style";

const Banner3 = (props) => {
  return (
    <Banner3SectionWrapper {...props}>
      <Container fullWidthSM>
        <Row>
          <Col sm={8} lg={8} className="section-title-wrapper">

            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Industry-leading Cloud Native Management</h4>
              <h1>
              expect <span>more</span> from your infrastructure
              </h1>
            </SectionTitle>
            <p>
            an open source-first community of cloud native engineers
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button primary className="banner-btn one" title="Join in" url="/community">
                <FaMapMarkedAlt size={21} className="icon-left" />
              </Button>
              <Button primary className="banner-btn two" title="See our Projects" url="/projects">
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </Banner3SectionWrapper>
  );
};

export default Banner3;
