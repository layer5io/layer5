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
              <p className="demo-2">Who Are We?</p>
              <h1>Industry stewards</h1>
              {/* <h2>Open standards creators</h2> */}
              <p className="demo">Recognized Cloud Native leaders. Service mesh authorities.</p>
            </SectionTitle>
          </Col>
        </Row>
      </Container>

      <Row className="row">
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Cloud Native Leaders" />
            <p>Cloud Native Leaders</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Meshery" />
            <p>CNCF TOC Contributors</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Docker Captain" />
            <p>Docker Captains</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Linkerd" />
            <p>Cloud Native Ambassadors</p>
          </div>
        </Col>
      </Row>
      <Row className="second-row">
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Interface Maintainers" />
            <p>Service Mesh Interface Maintainers</p>
          </div>
        </Col>
        {/* </Row>
      <Row className="row"> */}
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Performance Maintainers" />
            <p>Service Mesh Performance Maintainers</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Authors and Trainers" />
            <p>Service Mesh Authors</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Meshery Creators" />
            <p>Meshery Creators</p>
          </div>
        </Col>
      </Row>
      <Row className="third-row">
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="CNCF Service Mesh Working Group" />
            <p>CNCF Service Mesh Working Group Chairs</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Authors and Trainers" />
            <p>Service Mesh Trainers</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="CNCF Special Interest Group Network Chair" />
            <p>CNCF Special Interest Group Network Chairs</p>
          </div>
        </Col>
      </Row>
    </WhoWeAreSectionWrapper>
  );
};

export default WhoWeAre;
