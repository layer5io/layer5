import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";
import SocialLinks from "../../components/SocialLinks";
import particle1 from "../../assets/images/app/particle/05.png";
import particle2 from "../../assets/images/app/particle/06.png";
import AboutSectionWrapper from "./about.style";

const About = () => {
    return (
        <AboutSectionWrapper id="about">
            {/* <img className="section__particle one" src={particle1} alt="img" />
            <img className="section__particle two" src={particle2} alt="img" /> */}
            <Container fullWidthSM>
                <Row Vcenter={true}>
                    <Col xs={12} sm={6}>
                        <SectionTitle
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            {" "}
                            <h2>About us</h2>
                        </SectionTitle>
                        <div className="about-text text-one">
                            <h4>Community First</h4>
                            <p className="indent">
                The Layer5 community represents the largest collection of
                service mesh projects and their maintainers in the world.
                            </p>
                        </div>
                        <div className="about-text text-two">
                            <h4>Open Source First</h4>
                            <p className="indent">
                Our projects establish industry standards and enable service
                developers, owners, and operators with repeatable patterns and
                best practices for managing all aspects of distributed services.
                Our shared commitment to the open source spirit push the Layer5
                community and its projects forward.
                            </p>
                        </div>
                        <div className="about-text text-two">
                            <h4>
                                <a href="http://slack.layer5.io">Collaborate</a>
                            </h4>
                            <p>
                                <a className="anchor" href="/community">
                  Join the community
                                </a>{" "}
                and collaborate on our projects.
                            </p>
                            <SocialLinks />
                        </div>
                    </Col>

                    <Col xs={12} sm={6}>
                        <div>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <h4>Locations</h4>
                                    <div className="section">
                                        <h4>USA</h4>
                                        <p>
                      Layer5, Inc.
                                            <br />
                      Corporate Headquarters
                                            <br />
                                            <a href="https://goo.gl/maps/3oeuqrsMtHPQSTmQ8">
                        701 Brazos Street, Suite 1600
                                                <br />
                        Austin, TX 78701
                                            </a>
                                        </p>
                                    </div>
                                </Col>

                                <Col xs={12} sm={6}>
                                    <br />
                                    <h4>Scotland, UK</h4>
                                    <p>
                    Layer5, Inc.
                                        <br />
                    Engineering
                                        <br />
                                        <a href="https://goo.gl/maps/1nF7vNmVq5fm2GLS6">
                      3 Queen Street Edinburgh, EH2 1JE
                                        </a>
                                    </p>
                                </Col>
                            </Row>
                            <VintageBox right={false} vintageTwo={true} position="relative">
                                <Button className="about-button" url="mailto:hello@layer5.io" title="Contact Us" external="true" />
                            </VintageBox>
                        </div>
                    </Col>
                </Row>
            </Container>
        </AboutSectionWrapper>
    );
};

export default About;
