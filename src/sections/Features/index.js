import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";

import Icon1 from "../../assets/images/app/features/01.svg";
import Icon2 from "../../assets/images/app/features/02.svg";
import Icon3 from "../../assets/images/app/features/03.svg";
import Icon4 from "../../assets/images/app/features/04.svg";
import Icon5 from "../../assets/images/app/features/05.svg";
import Icon6 from "../../assets/images/app/features/06.svg";

import FeturesSectionWrapper from "./fetures.style";

const Features = () => {
    return (
        <FeturesSectionWrapper id="features">
            <Container fullWidthSM>
                <SectionTitle UniWidth="65%">
                    <h4>Amazing Features</h4>
                    <h2>
                        <span>Some of the best features </span> you find in one application.
                    </h2>
                </SectionTitle>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block v1">
                            <div className="fetures-icon-block">
                                <img src={Icon1} alt="img" />
                            </div>
                            <h3>Business Opurtunity</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block v2">
                            <div className="fetures-icon-block">
                                <img src={Icon2} alt="img" />
                            </div>
                            <h3>Data Analysis</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block v1">
                            <div className="fetures-icon-block">
                                <img src={Icon3} alt="img" />
                            </div>
                            <h3>Engaging Content</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block v2">
                            <div className="fetures-icon-block">
                                <img src={Icon4} alt="img" />
                            </div>
                            <h3>Web Expertise</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block v1">
                            <div className="fetures-icon-block">
                                <img src={Icon5} alt="img" />
                            </div>
                            <h3>App Development</h3>
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="fetures-block v2">
                            <div className="fetures-icon-block">
                                <img src={Icon6} alt="img" />
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

export default Features;
