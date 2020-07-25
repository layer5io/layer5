import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";

import Icon1 from "../../assets/images/classic/features/01.svg";
import Icon2 from "../../assets/images/classic/features/02.svg";
import Icon3 from "../../assets/images/classic/features/03.svg";
import Icon4 from "../../assets/images/classic/features/04.svg";
import Icon5 from "../../assets/images/classic/features/05.svg";
import Icon6 from "../../assets/images/classic/features/06.svg";

import FeturesSectionWrapper from "./fetures.style";

const FeaturesClassic = () => {
    return (
        <FeturesSectionWrapper id="features">
            <Container>
                <SectionTitle UniWidth="65%">
                    <h2>
                        <span>Some of the best features </span> you find in one application.
                    </h2>
                </SectionTitle>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="features-icon">
                                <img src={Icon1} alt="prime app features icon" />
                            </div>
                            <h3>Business Opurtunity</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="features-icon">
                                <img src={Icon2} alt="prime app features icon" />
                            </div>
                            <h3>Data Analysis</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="features-icon">
                                <img src={Icon3} alt="prime app features icon" />
                            </div>
                            <h3>Engaging Content</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="features-icon">
                                <img src={Icon4} alt="prime app features icon" />
                            </div>
                            <h3>Web Expertise</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="features-icon">
                                <img src={Icon5} alt="prime app features icon" />
                            </div>
                            <h3>App Development</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block">
                            <div className="features-icon">
                                <img src={Icon6} alt="prime app features icon" />
                            </div>
                            <h3>Easy Customized</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FeturesSectionWrapper>
    );
};

export default FeaturesClassic;
