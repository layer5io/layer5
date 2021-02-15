import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import WhoWeAreSectionWrapper from "./whoweare.style.js";
import checkCircle from "./images/check-circle_lightgreen.svg";



const WhoWeAre = () => {
  return (
    <WhoWeAreSectionWrapper id="whoweare">
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={12} lg={12}>
            <SectionTitle
              className="section-title-2"
              leftAlign={false}
              UniWidth="100%"
            >
              <h3>Who Are We?</h3>
              <h1>Open standards creators.</h1>
              <h1>Industry stewards.</h1>
              <h4>Recognized as the Service Mesh Authority Service mesh leaders.</h4>
            </SectionTitle>
          </Col>
        </Row>
      </Container>

      <Row className="row">
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Cloud Native Leaders" />
            <h4>Cloud Native Leaders</h4>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Meshery" />
            <h4>CNCF TOC Contributor</h4>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Docker Captain" />
            <h4>Docker Captain</h4>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Linkerd" />
            <h4>Cloud Native Ambassador</h4>
          </div>
        </Col>
      </Row>
      <Row className="second-row">
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Interface Maintainers" />
            <h4>Service Mesh Interface Maintainers</h4>
          </div>
        </Col>
        {/* </Row>
      <Row className="row"> */}
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Performance Maintainers" />
            <h4>Service Mesh Performance Maintainers</h4>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Authors and Trainers" />
            <h4>Service Mesh Authors and Trainers</h4>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Meshery Creators" />
            <h4>Meshery Creators</h4>
          </div>
        </Col>
      </Row>
      <Row className="third-row">
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="CNCF Service Mesh Working Group" />
            <h4>CNCF Service Mesh Working Group</h4>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="CNCF Special Interest Group Network Chair" />
            <h4>CNCF Special Interest Group Network Chair</h4>
          </div>
        </Col>
      </Row>
    </WhoWeAreSectionWrapper>
  );
};

export default WhoWeAre;
