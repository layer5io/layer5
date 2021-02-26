import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";
import AboutSectionWrapper from "./about.style";
import collabMap from "./images/layer5-collaboration-map.svg";
import layer5BusCard from "./images/layer5-business-card-photo_med.jpg";
import location from "./images/location.svg";
import WhoWeAre from "../WhoWeAre";
import Tshirts from "./images/free-tshirts.jpg";
import CNCFServiceMesh from "./images/CNCF-Service-Mesh-WG-1.png";

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <Container fullWidthSM>
        <Row Vcenter={true} className="aboutus-title">
          <Col xs={12} sm={12}>
            <Row Vcenter={true} className="row-img-cont-1">
              <Col xs={12} sm={6}>
                <div className="about-text text-one">
                  <h1>Community First</h1>
                  <p className="indent">
                    The Layer5 community represents the largest collection of
                    service mesh projects and their maintainers in the world.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="head-images">
                  <img src={Tshirts} alt="free-tshirts"/>
                </div>
              </Col>
            </Row>  
            <Row Vcenter={true} className="row-img-cont-2">
              <Col xs={12} sm={6}>
                <div className="head-images">
                  <img src={CNCFServiceMesh} alt="CNCF Service Mesh"/>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="about-text text-two">
                  <h1>Open Source First</h1>
                  <p className="indent">
                    Our projects establish industry standards and enable service
                    developers, owners, and operators with repeatable patterns and
                    best practices for managing all aspects of distributed services.
                    Our shared commitment to the open source spirit push the Layer5
                    community and its projects forward.
                  </p>
                </div>
              </Col>
              
            </Row>        
          </Col>
        </Row>
      </Container>
      <WhoWeAre />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={12}>
            <SectionTitle
              className="section-title"
              leftAlign={false}
              UniWidth="100%"
            >
              <h1>Collaborate</h1>
              <h4>Join the community and collaborate on our projects.</h4>

              <img height="100%" src={collabMap} alt="Layer5 Collaborators from around the globe" />
            </SectionTitle>
          </Col>
        </Row>
      </Container>
      
      <Container fullWidthSM>
        <Row Vcenter={true} className="aboutus-title">
          <Col xs={12} sm={12} >
            <h1 className="bottom-sect-head">Locations</h1>
            <div>
              <Row className="location-row">
                <Col xs={12} sm={6}>
                  <div className="footer-section">
                    <a href="https://goo.gl/maps/3oeuqrsMtHPQSTmQ8">
                      <img src={location} className="location" alt="Layer5 locations" />
                    </a>
                    <div className="loc">
                      <h4>USA</h4>
                      <p className="address">
                        Layer5, Inc.,
                        Corporate Headquarters
                        <br />

                          701 Brazos Street, Suite 1600
                        <br />
                          Austin, TX 78701
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="footer-section">
                    <a href="https://goo.gl/maps/1nF7vNmVq5fm2GLS6">
                      <img src={location} className="location" alt="Layer5 locations" />
                    </a>
                    <div className="loc">
                      <h4>Scotland</h4>
                      <p className="address">
                        Layer5, Inc.,
                        Engineering
                        <br />
                          3 Queen Street
                        <br />
                          Edinburgh, EH2 1JE
                        <br />
                          United Kingdom
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
        <Row className="contactButton section-bottom ">
          <Col xs={12} sm={12}>
            <SectionTitle
              className="section-title"
              leftAlign={false}
              UniWidth="100%"
            >
              {" "}
              <Button
                primary
                id="contact"
                className="about-button"
                url="/company/contact"
                title="Contact Us"
                external={false}
              />
            </SectionTitle>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
