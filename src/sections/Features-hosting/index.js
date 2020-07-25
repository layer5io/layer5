import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";

import Icon1 from "../../assets/images/hosting/hosting/features/01.svg";
import Icon2 from "../../assets/images/hosting/hosting/features/02.svg";
import Icon3 from "../../assets/images/hosting/hosting/features/03.svg";

import FeturesSectionWrapper from "./fetures.style";

const Features = () => {
    return (
        <FeturesSectionWrapper id="features">
            <Container fullWidthSM>
                <SectionTitle className="section-title" UniWidth="100%">
                    <h4>service</h4>
                    <h2>
            The Service We Provide
                    </h2>
                </SectionTitle>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="fetures-icon-block">
                                <img src={Icon1} alt="img" />
                            </div>
                            <div className="fetures-content-block">
                                <h3>Mail server</h3>
                                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="fetures-icon-block">
                                <img src={Icon2} alt="img" />
                            </div>
                            <div className="fetures-content-block">
                                <h3>FTP server</h3>
                                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="fetures-icon-block">
                                <img src={Icon3} alt="img" />
                            </div>
                            <div className="fetures-content-block">
                                <h3>Cloud server</h3>
                                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FeturesSectionWrapper>
    );
};

export default Features;
