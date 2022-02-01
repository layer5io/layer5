import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
// import { partners } from "./partners-home-data";

import SectionTitle from "../../../reusecore/SectionTitle";

import PartnerItemWrapper from "./partnerSection.style";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const redhat = "../../../assets/images/partners/redhat_black.svg";
const uem  ="../../../assets/images/partners/uem_black.svg";
const utaustin  ="../../../assets/images/partners/ut-austin_black.svg";
const citrix  = "../../../assets/images/partners/citrix.svg";
const hashicorp  = "../../../assets/images/partners/hashicorp_vertical_black.svg";
const hpe  = "../../../assets/images/partners/hpe_side_black.svg";
const nitk  = "../../../assets/images/partners/nitk_black.png";
const rackspace  = "../../../assets/images/partners/rackspace_black.svg";
const intel  ="../../../assets/images/partners/intel-black.svg";

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
            <h4>ENGAGING AND COLLABORATING WITH</h4>
          </SectionTitle>
        </Row>
        <Row Hcenter className="row">
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/partners#redhat">
              <div className="partner__block__inner horizontal">
                <StaticImage src={redhat} alt= "Redhat" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="partners#intel">
              <div className="partner__block__inner">
                <StaticImage src={intel} alt= "intel" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/partners#utaustin">
              <div className="partner__block__inner horizontal">
                <StaticImage src={utaustin} alt= "University of Texas at Austin partnership with Layer5" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/partners#Citrix">
              <div className="partner__block__inner">
                <StaticImage src={citrix} alt= "Citrix" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/company/news/layer5-and-hashicorp-launch-service-mesh-partnership">
              <div className="partner__block__inner">
                <StaticImage src={hashicorp} alt= "Hashicorp partnership with Layer5" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/partners#hpe">
              <div className="partner__block__inner">
                <StaticImage src={hpe} alt= "Hewlett-Packard Enterprise" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/partners#nitk">
              <div className="partner__block__inner">
                <StaticImage src={nitk} alt= "National Institute of Technology Karnataka" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/partners#uem">
              <div className="partner__block__inner">
                <StaticImage src={rackspace} alt= "Rackspace Technology" objectFit="contain"/>
              </div>
            </Link>
          </Col>
          <Col sm={2} md={2} lg={2}>
            <Link className="partner-card" to="/partners#uem">
              <div className="partner__block__inner">
                <StaticImage src={uem} alt= "UEM" objectFit="contain"/>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </PartnerItemWrapper>
  );
};

export default Projects;
