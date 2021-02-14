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
              className="section-title"
              leftAlign={false}
              UniWidth="100%"
            >
              <h2>We are collaborators</h2>
              <h1>from around the globe</h1>

              <h3>Join the community and collaborate on our projects</h3>
            </SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            Open standards creators.
            Industry stewards.
          </Col>
        </Row>
      </Container >

      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Docker Captains" />
            <h4>Docker Captains</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="GetNighthawk Creators" />
            <h4>GetNighthawk Creators</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Linkerd" />
            <h4>Cloud Native Ambassadors</h4>
          </div>
        </Col>

        <Col xs={3} sm={3} md={3} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Meshery" />
            <h4>CNCF TOC Contributors</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Interface Maintainers" />
            <h4>Service Mesh Interface Maintainers</h4>
          </div>
        </Col>
      {/* </Row>
      <Row className="row"> */}
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Creators of Meshery" />
            <h4>Creators of Meshery</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Authors" />
            <h4>Service Mesh Authors</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Service Mesh Performance Maintainers" />
            <h4>Service Mesh Performance Maintainers</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Cloud Native Leaders" />
            <h4>Cloud Native Leaders</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="SMI" />
            <h4>CNCF SIG Chairs</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Traefik" />
            <h4>Service Mesh Trainers</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Technologists" />
            <h4>Technologists</h4>
          </div>
        </Col>
      </Row>





    </WhoWeAreSectionWrapper >
  );
};

export default WhoWeAre;
