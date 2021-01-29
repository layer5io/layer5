import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";

import partner1 from "../../assets/images/partners/redhat_lightgray.svg";
import partner2 from "../../assets/images/partners/uem_lightgray.svg";
import partner3 from "../../assets/images/partners/ut-austin_lightgray.svg";
import partner4 from "../../assets/images/partners/citrix_lightgray.svg";
import partner5 from "../../assets/images/partners/hashicorp_vertical_black.svg";
import partner6 from "../../assets/images/partners/hpe_side_lightgray.svg";

import SectionTitle from "../../reusecore/SectionTitle";


import PartnerItemWrapper from "./partnerSection.style";

const Projects = () => {
  return (
    <PartnerItemWrapper>
      <Container>
        <Row>
          <SectionTitle
            className="section-title"
            leftAlign={true}
            UniWidth="75%"
          >
            <h4>OUR PARTNERS</h4>
          </SectionTitle>
        </Row>
        <Row>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="https://www.redhat.com" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={partner1} alt="redhat" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="https://uem.edu.in/uem-jaipur/" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={partner2} alt="uem" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="https://www.utexas.edu/" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={partner3} alt="ut_austin" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="https://www.citrix.com/" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={partner4} alt="citrix" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="https://www.hashicorp.com/" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={partner5} alt="hashicorp" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="https://www.hpe.com/us/en/home.html" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={partner6} alt="hpe" />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </PartnerItemWrapper>
  );
};

export default Projects;
