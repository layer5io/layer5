import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
// import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "../../assets/images/services/service-icon-1.svg";
import Icon2 from "../../assets/images/services/service-icon-2.svg";
import Icon3 from "../../assets/images/services/service-icon-3.svg";
import Icon4 from "../../assets/images/services/service-icon-4.svg";

import ServiceSectionWrapper from "./service.style";

const Services = () => {
    return (
        <ServiceSectionWrapper>
            <Container> 
                <Row>
                    <Col sm={6} lg={3}>
                        <div className="service__single__item">
                            <img src={Icon1} alt="appion crypto landing" />
                            <h5>ICO Finance</h5>
                            <p>The highly the not having with lively Our up with.</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3}>
                        <div className="service__single__item">
                            <img src={Icon2} alt="appion crypto landing" />
                            <h5>Blockchain</h5>
                            <p>The highly the not having with lively Our up with.</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3}>
                        <div className="service__single__item">
                            <img src={Icon3} alt="appion crypto landing" />
                            <h5>Market News</h5>
                            <p>The highly the not having with lively Our up with.</p>
                        </div>
                    </Col>
                    <Col sm={6} lg={3}>
                        <div className="service__single__item">
                            <img src={Icon4} alt="appion crypto landing" />
                            <h5>Exchange Offer</h5>
                            <p>The highly the not having with lively Our up with.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ServiceSectionWrapper>
    );
};

export default Services;
