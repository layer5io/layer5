import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";

import redhat from "../../../assets/images/partners/redhat_black.svg";
import uem from "../../../assets/images/partners/uem_black.svg";
import utaustin from "../../../assets/images/partners/ut-austin_black.svg";
import citrix from "../../../assets/images/partners/citrix.svg";
import hashicorp from "../../../assets/images/partners/hashicorp_vertical_black.svg";
import hpe from "../../../assets/images/partners/hpe_side_black.svg";
import nitk from "../../../assets/images/partners/nitk_black.png";
import rackspace from "../../../assets/images/partners/rackspace_black.svg";

import SectionTitle from "../../../reusecore/SectionTitle";

import PartnerItemWrapper from "./partnerSection.style";
import { Link } from "gatsby";

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
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to="/partners#redhat">
              <div className="partner__block__inner horizontal">
                <img src={redhat} alt="redhat" />
              </div>
            </Link>
          </Col>
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to="/partners#uem">
              <div className="partner__block__inner">
                <img src={uem} alt="uem" />
              </div>
            </Link>
          </Col>
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to="/partners#utaustin">
              <div className="partner__block__inner horizontal">
                <img src={utaustin} alt="University of Texas at Austin partnership with Layer5" />
              </div>
            </Link>
          </Col>
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to={"/partners#citrix"}>
              <div className="partner__block__inner">
                <img src={citrix} alt="Citrix" />
              </div>
            </Link>
          </Col>
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to="/news/layer5-and-hashicorp-launch-service-mesh-partnership">
              <div className="partner__block__inner">
                <img src={hashicorp} alt="Hashicorp partnership with Layer5" />
              </div>
            </Link>
          </Col>
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to="/partners#hpe">
              <div className="partner__block__inner horizontal">
                <img src={hpe} alt="Hewlett-Packard Enterprise" />
              </div>
            </Link>
          </Col>
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to="/partners#nitk">
              <div className="partner__block__inner">
                <img src={nitk} alt="National Institute of Technology Karnataka" />
              </div>
            </Link>
          </Col>
          <Col sm={2} md={4} lg={3}>
            <Link className="partner-card" to="/partners#rackspace">
              <div className="partner__block__inner">
                <img src={rackspace} alt="Rackspace Technology" />
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </PartnerItemWrapper>
  );
};

export default Projects;
