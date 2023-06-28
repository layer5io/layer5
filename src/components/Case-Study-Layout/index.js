import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../reusecore/Layout";
import GlobeIcon from "./globe.svg";
const CaseStudyWrapper = styled.div`
.hero-text {
    text-align: center;
}
.facts {
    margin: 5% 0%;
    padding: 5% 5% 5% 15%;
    .facts-row {
        flex-wrap: nowrap;
    }
}
.about-the-company {
    display: flex;
    flex-direction: row;
    background-color: #00B39F;
    padding: 10%;
    img {
        padding: 3%;
    }
    p {
        padding: 3%;
    }
}
.challenges {
    display: flex;
    margin: 10% 0%;
    h2 {
        flex: 0 0 30%;
        text-align: left;
    }
}
.why-layer5 {
    display: flex;
    margin: 10% 0%;
    h2 {
        flex: 0 0 30%;
        text-align: left;
    }
}
.outcomes {
    display: flex;
    margin: 10% 0%;
    h2 {
        flex: 0 0 30%;
        text-align: left;
    }
}
`;
const CaseStudyLayout = (props) => {
  return (
    <CaseStudyWrapper>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="facts">
        <Row className="facts-row">
          <Col>
            <img src={GlobeIcon} />
            <p>HPE and meshery</p>
          </Col>
          <Col>
            <img src={GlobeIcon} />
            <p>HPE and meshery</p>
          </Col>
          <Col>
            <img src={GlobeIcon} />
            <p>HPE and meshery</p>
          </Col>
        </Row>
        <Row className="facts-row">
          <Col>
            <img src={GlobeIcon} />
            <p>HPE and meshery</p>
          </Col>
          <Col>
            <img src={GlobeIcon} />
            <p>HPE and meshery</p>
          </Col>
          <Col>
            <img src={GlobeIcon} />
            <p>HPE and meshery</p>
          </Col>
        </Row>
      </div>
      <div className="about-the-company">
        <img src={props.companyImage} />
        <p>{props.aboutCompany}</p>
      </div>
      <div className="challenges">
        <h2>Challenges</h2>
        <p>{props.challenges}</p>
      </div>
      <div className="why-layer5">
        <h2>Why Layer5</h2>
        <p>{props.whyLayer5}</p>
      </div>
      <div className="outcomes">
        <h2>Outcomes</h2>
        <p>{props.outcomes}</p>
      </div>
      <div className="partners">
      </div>
      <div className="tech-stack">
      </div>
      <div className="cta">
      </div>
    </CaseStudyWrapper>
  );
};
export default CaseStudyLayout;