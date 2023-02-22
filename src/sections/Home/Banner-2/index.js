import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";

import Banner2SectionWrapper from "./banner2.style";

const Banner2 = (props) => {
  return (
    <Banner2SectionWrapper {...props}>
      <Container fullWidthSM>
        <Row>
          <Col sm={8} lg={8} className="section-title-wrapper">

            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Cloud Native Management</h4>
              <h1>
              expect <span>more</span> from your infrastructure
              </h1>
            </SectionTitle>
            <p>
            open source-first company and community of cloud native engineers
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button primary className="banner-btn one" title="Join in" url="/community">
                <FaMapMarkedAlt size={21} className="icon-left" />
              </Button>
              <Button primary className="banner-btn two" title="See Meshery" url="/cloud-native-management/meshery">
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </Banner2SectionWrapper>
  );
};

export default Banner2;
