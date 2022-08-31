import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import AboutSectionWrapper from "./about.style";
import Statement from "../Layer5-statement";

import collabMap from "./images/layer5-collaboration-map.svg";
import location from "./images/location.svg";
import WhoWeAre from "../WhoWeAre";
import FiveIcon from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import CNCFstackedlogo from "./images/cncf-stacked-color.svg";
import CNCFLightstackedlogo from "./images/cncf-light-stacked-color.svg";

import { Link } from "gatsby";
const Community_meetup = "./images/Community_meetup.png";
const Layer5Projects = "./images/layer5-projects.png";
const About = ({ theme }) => {
  return (
    <AboutSectionWrapper id="about">

      <Container fullWidthSM>
        <Row Vcenter={true} className="aboutus-title">
          <Col xs={12} sm={12}>
            <Row Vcenter={true} className="row-img-cont-1">
              <Col xs={12} sm={6}>
                <div className="head-images">
                  <img src={FiveIcon} alt="About Layer5" />
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="about-text text-one">
                  <h1>About Us</h1>
                  <p>We embrace <i>developer</i>-defined infrastructure. We empower developers to change how they write applications, support <i>operators</i> in rethinking how they run modern infrastructure, and enable <i>product owners</i> to regain full-control over their product portfolio.</p>
                  <p>Our cloud native application and infrastructure management software enables organizations to expect more from their infrastructure.</p>

                  <h5 className="section-title">We are enablers.</h5>
                  <p>At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration. We help organizations look at their infrastructure differently, asking it "what have you done for me lately?". Our suite of multi-mesh, multi-cloud infrastructure management products — all with open source projects at their core — underpin each of our offerings. </p>
                  {/* <p>As stewards of industry, we enable organizations of all sizes, from well-known brands to ambitious start-ups to rely on our solutions to provision, secure, connect, and run their business-critical applications.</p> */}
                </div>
              </Col>
            </Row>
            <StaticImage src={Layer5Projects} alt="About Layer5 Projects" />
            <Row Vcenter={true} className="row-img-cont-2">
              <Col xs={12} sm={6}>
                <div className="about-text text-two">
                  <h1>Open Source First</h1>
                  <p className="indent">
                    Our projects establish industry standards and enable
                    developers, operators, and product owners with repeatable patterns and best practices for managing all aspects of distributed services.
                  </p>
                  <h5 className="section-title">We are principled.</h5>
                  <p>We are proud of the inclusive and kind work environment we have built. We support each other as we work to solve important problems. We take our work seriously, and we do it with integrity and in alignment with our core principles.</p>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="head-images">
                  <img src={theme === "dark" ? CNCFLightstackedlogo : CNCFstackedlogo} alt="About Layer5 Projects" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Statement />
      <Container fullWidthSM>
        <Row Vcenter={true} className="aboutus-title">
          <Col xs={12} sm={12}>
            <Row Vcenter={true} className="row-img-cont-1">
              <Col xs={12} sm={6}>
                <div className="head-images">
                  <StaticImage src={Community_meetup} alt="Community_meetup" />
                  <figcaption className="caption">
                    Layer5 community members at Open Source Africa Community
                    conference, March 2022.
                  </figcaption>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="about-text text-one">
                  <h1>Community First</h1>
                  <p className="indent">
                    Layer5 is powered by a growing community of collaborators representing industry leading, cloud native, open source software.
                  </p>
                  <h5 className="section-title">We are remote oriented.</h5>
                  <p>Our remote working model has been in our DNA since our genesis in 2020, which allows us to maintain a flexible working environment and gives us access to a global pool of diverse talent.</p>
                  <Link className="mute" to="/careers">Learn how Layer5 works</Link>
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
              <h4>Join the community and collaborate on our projects all around the world.</h4>

              <img id="mapBack" height="100%" src={collabMap} alt="Layer5 Collaborators from around the globe" />
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
