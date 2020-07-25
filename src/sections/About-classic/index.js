import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";

import aboutIcon1 from "../../assets/images/classic/about/icon-1.svg";
import aboutIcon2 from "../../assets/images/classic/about/icon-2.svg";
import aboutIcon3 from "../../assets/images/classic/about/icon-3.svg";

import AboutSectionWrapper from "./about.style";

const AboutClassic = () => {
    return (
        <AboutSectionWrapper id="about">
            <Container>
                <SectionTitle UniWidth="65%">
                    <h2>
            Starting with <span>Appion</span> is easier than anything.
                    </h2>
                </SectionTitle>
                <Row>
                    <Col xs={12} sm={6} lg={4}>
                        <div className="single-item">
                            <div className="item-head">
                                <div className="item-icon">
                                    <img src={aboutIcon1} alt="appion app about icon" />
                                </div>
                                <h3>Be organised</h3>
                            </div>

                            <p>
                Lorem ipsum dolor sit amet consectetur sed do eiusmod tempor
                incididunt. ut labore et dolore magna aliqua enim
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <div className="single-item">
                            <div className="item-head">
                                <div className="item-icon">
                                    <img src={aboutIcon2} alt="appion app about icon" />
                                </div>
                                <h3>Stay focused</h3>
                            </div>

                            <p>
                Lorem ipsum dolor sit amet consectetur sed do eiusmod tempor
                incididunt. ut labore et dolore magna aliqua enim
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <div className="single-item">
                            <div className="item-head">
                                <div className="item-icon">
                                    <img src={aboutIcon3} alt="appion app about icon" />
                                </div>
                                <h3>Get in sync</h3>
                            </div>

                            <p>
                Lorem ipsum dolor sit amet consectetur sed do eiusmod tempor
                incididunt. ut labore et dolore magna aliqua enim
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </AboutSectionWrapper>
    );
};

export default AboutClassic;
