import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import { partners } from "./partners-home-data";

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
          {
            partners.map( (partner ,index) => (
              <Col sm={2} md={2} lg={2} key={index}>
                <Link className="partner-card" to={partner.imageRoute}>
                  <div className={partner.innerDivStyle}>
                    <img src={partner.imageLink} alt={partner.name} />
                  </div>
                </Link>
              </Col>
            ))
          }
        </Row>
      </Container>
    </PartnerItemWrapper>
  );
};

export default Projects;
