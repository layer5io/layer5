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
            <img src={checkCircle} alt="CNCF" />
            <h4>Docker Captains</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="col">
          <div className="item">
            <img src={checkCircle} alt="Envoy" />
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
            <img src={checkCircle} alt="OAM" />
            <h4>Service Mesh Interface Maintainers</h4>
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Istio" />
            <h4>Istio</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="OSM" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="SMP" />
            <h4>Service Mesh Performance Maintainers</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="ImageHub" />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="SMI" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="col">
          <div className="item">
            <img src={checkCircle} alt="Traefik" />
            <h4>Traefik Mesh</h4>
          </div>
        </Col>
      </Row>





    </WhoWeAreSectionWrapper >
  );
};

export default WhoWeAre;
