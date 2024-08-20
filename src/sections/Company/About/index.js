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
import { Link } from "gatsby";
import Layer5Projects from "./images/layer5-projects.png";
import communityStat from "./images/layer5-community-stats.png";

const About = () => {
  const Community_meetup = "./images/Community_meetup.webp";

  return (
    <AboutSectionWrapper id="about">
      <Container $fullWidthSM>
        <Row $Vcenter={true} className="aboutus-title">
          <Col $xs={12} $sm={12}>
            <Row $Vcenter={true} className="row-img-cont-1">
              <Col $xs={12} $sm={6}>
                {/* <div className="head-images"> */}
                <img src={FiveIcon} alt="About Layer5" />
                {/* </div> */}
              </Col>
              <Col $xs={12} $sm={6}>
                <div className="about-text text-one">
                  <h1>About Us</h1>
                  <p>
                    At Layer5, we champion <i>developer-defined</i> infrastructure, giving engineers the power to reshape application delivery. We empower operators in reimagining how they manage modern infrastructure: collaboratively.
                  </p>
                  <div className="head-images-mobile">
                    <img src={FiveIcon} alt="About Layer5" />
                  </div>
                  <p className="section-title">We are enablers.</p>
                  <p>
                    We believe innovation is furthered by collaboration and that collaboration is enabled by infrastructure. Layer5 encourages organizations to view their infrastructure through a fresh lens, constantly asking, "What
                    have you done for me lately?" Our suite of multi-cluster, multi-cloud infrastructure management products, with open source projects at their core, form the bedrock of our offerings.

                    Our cloud native application and infrastructure management
                    software enables organizations to expect more from their
                    infrastructure.
                  </p>
                  {/* <p>As stewards of industry, we enable organizations of all sizes, from well-known brands to ambitious start-ups to rely on our solutions to provision, secure, connect, and run their business-critical applications.</p> */}
                </div>
              </Col>
            </Row>
            <img
              loading="lazy"
              src={Layer5Projects}
              alt="About Layer5 Projects"
              className="About-projects"
            />
            <Row $Vcenter={true} className="row-img-cont-2">
              <Col $xs={12} $sm={6}>
                <img
                  loading="lazy"
                  src={Layer5Projects}
                  alt="About Layer5 Projects"
                  className="About-projects-mobile"
                />
                <div className="about-text text-two">
                  <h1>Open Source First</h1>
                  <p className="indent">
                    Our projects establish industry standards and enable
                    developers, operators, and product owners with repeatable
                    patterns and best practices for managing all aspects of
                    distributed services.
                  </p>
                  <div className="head-images-2-mobile">
                    <img
                      src={communityStat}
                      alt="Layer5 Community Stat"
                      loading="lazy"
                    />
                  </div>
                  <p className="section-title">We are principled.</p>
                  <p>
                    We are proud of the inclusive and kind community and work environment we have built. We support each other as we work to solve important problems. We take our work seriously, and execute with integrity and in alignment with our core principles of paying it forward, challenging ourselves and those around to be and to do better.
                  </p>
                </div>
              </Col>
              <Col $xs={12} $sm={6}>
                <div className="head-images-2">
                  <img
                    src={communityStat}
                    alt="Layer5 Community Stat"
                    loading="lazy"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Statement />
      <Container >
        <Row $Vcenter={true} className="aboutus-title">
          <Col $xs={12} $sm={12}>
            <Row $Vcenter={true} className="row-img-cont-1">
              <Col $xs={12} $sm={6}>
                <div className="head-images-meet">
                  <StaticImage
                    src={Community_meetup}
                    alt="Community_meetup"
                    loading="lazy"
                  />
                  <figcaption className="caption">
                    Layer5 community members at Open Source Africa Community
                    conference, March 2022.
                  </figcaption>
                </div>
              </Col>
              <Col $xs={12} $sm={6}>
                <div className="about-text text-one">
                  <h1>Community First</h1>
                  <p className="indent">
                    Layer5 is powered by a growing community of collaborators
                    representing industry leading, cloud native, open source
                    software.
                  </p>
                  <p className="section-title">We are remote oriented.</p>
                  <p>
                    Our remote working model has been in our DNA since our
                    genesis in 2020, which allows us to maintain a flexible
                    working environment and gives us access to a global pool of
                    diverse talent.
                  </p>
                  <Link className="mute" to="/careers">
                    Learn how Layer5 works
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <WhoWeAre />
      <Container >
        <Row $Vcenter={true}>
          <Col $xs={12} $sm={12}>
            <SectionTitle
              className="section-title"
              $leftAlign={false}
              $UniWidth="100%"
            >
              <h1>Collaborate</h1>
              <p className="colab">
                Join the community and collaborate on our projects all around
                the world.
              </p>

              <img
                id="mapBack"
                height="100%"
                width="100%"
                src={collabMap}
                alt="Layer5 Collaborators from around the globe"
                loading="lazy"
              />
            </SectionTitle>
          </Col>
        </Row>
      </Container>

      <Container $fullWidthSM>
        <Row $Vcenter={true} className="aboutus-title">
          <Col $xs={12} $sm={12}>
            <h1 className="bottom-sect-head">Locations</h1>
            <div>
              <Row className="location-row">
                <Col $xs={12} $sm={6}>
                  <div className="footer-section">
                    <a href="https://goo.gl/maps/3oeuqrsMtHPQSTmQ8">
                      <img
                        src={location}
                        className="location"
                        alt="Layer5 locations"
                        loading="lazy"
                      />
                    </a>
                    <div className="loc">
                      <p className="country">USA</p>
                      <p className="address">
                        Layer5, Inc., Corporate Headquarters
                        <br />
                        701 Brazos Street, Suite 1600
                        <br />
                        Austin, TX 78701
                      </p>
                    </div>
                  </div>
                </Col>
                <Col $xs={12} $sm={6}>
                  <div className="footer-section">
                    <a href="https://goo.gl/maps/1nF7vNmVq5fm2GLS6">
                      <img
                        src={location}
                        className="location"
                        alt="Layer5 locations"
                        loading="lazy"
                      />
                    </a>
                    <div className="loc">
                      <p className="country">Scotland</p>
                      <p className="address">
                        Layer5, Inc., Engineering
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
          <Col $xs={12} $sm={12}>
            <SectionTitle
              className="section-title"
              $leftAlign={false}
              $UniWidth="100%"
            >
              {" "}
              <Button
                $primary                id="contact"
                className="about-button"
                $url="/company/contact"
                title="Contact Us"
                $external={false}
              />
            </SectionTitle>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
