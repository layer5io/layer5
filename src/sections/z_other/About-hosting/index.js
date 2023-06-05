import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";

import imgAbout from "../../../assets/images/hosting/hosting/about.webp";
import particle1 from "../../../assets/images/app/particle/05.webp";
import particle2 from "../../../assets/images/app/particle/06.webp";

import AboutSectionWrapper from "./about.style";

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={imgAbout}
              alt="This is about UNI-Prime"
            />
          </Col>
          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4> About us </h4>
              <h2>
                <span>Starting with appion</span> is easier than anything.
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
              One differences leaders, management-science so, best treat. Still
              problems upper and anger devoting out. With hiding their boss
              phase drops. A strenuous in ticket get write it by proposal.
            </p>
            <p className="about-text text-two">
              Thought. Road, clearly, and software the shreds sisters contract,
              luxury and fully here
            </p>
            <VintageBox
              right={true}
              vintageTwo={true}
              position="relative"
            >
              <Button title="Learn More" />
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
