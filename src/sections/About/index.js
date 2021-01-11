import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";
import SocialLinks from "../../components/SocialLinks";
import AboutSectionWrapper from "./about.style";
import collabMap from "./images/layer5-collaboration-map.svg";
import layer5BusCard from "./images/layer5-business-card-photo_med.jpg";
import layer5BusCard2 from "./images/layer5-bus-card.jpg";



const About = () => {
    return (
        <AboutSectionWrapper id="about">
            <Container fullWidthSM>
                <Row Vcenter={true}>
                    <Col xs={12} sm={6}>
                        <SectionTitle
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            {" "}
                            <h2>About Us</h2>
                        </SectionTitle>
                        <div className="about-text text-one">
                            <h3>Community First</h3>
                            <p className="indent">
                The Layer5 community represents the largest collection of
                service mesh projects and their maintainers in the world.
                            </p>
                        </div>
                        <div className="about-text text-two">
                            <h3>Open Source First</h3>
                            <p className="indent">
                Our projects establish industry standards and enable service
                developers, owners, and operators with repeatable patterns and
                best practices for managing all aspects of distributed services.
                Our shared commitment to the open source spirit push the Layer5
                community and its projects forward.
                            </p>
                        </div>

                    </Col>
                    <Col xs={12} sm={6}>
                        <img src={layer5BusCard} alt="Layer5 Business Cards" className="busCard" />
                        <div>
                            <Row>
                                <Col xs={12} sm={6}>
                                    
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
                            
                        </div>
                    </Col>           
                </Row>
                <Row className="contactButton">
                    <Col xs={12} sm={12}>
                        <SectionTitle
                            className="section-title"
                            leftAlign={false}
                            UniWidth="100%"
                        >
                            {" "}
                            <VintageBox right={true} vintageTwo={true} >
                                <Button
                                    primary
                                    className="about-button"
                                    url="/company/contact"
                                    title="Contact Us"
                                    external="false"
                                />
                            </VintageBox>
                        </SectionTitle>
                    </Col>
                </Row>
                <Row Vcenter={true}>
                    <Col xs={12} sm={12}>
                        <SectionTitle
                            className="section-title"
                            leftAlign={false}
                            UniWidth="100%"
                        >
                            {" "}
                            <h2>Collaborators from around the globe</h2>
                            <img height="100%" src={collabMap} alt="Layer5 Collaborators from around the globe" />
                            <h3>Join the community and collaborate on our projects</h3>
                            <Button
                                primary
                                className="about-button"
                                url="/community"
                                title="Start Contributing"
                                external="false"
                            />
                        </SectionTitle>
                    </Col>
                </Row>
            </Container>
        </AboutSectionWrapper>
    );
};

export default About;
