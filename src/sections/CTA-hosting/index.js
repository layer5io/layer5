import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";

import CTASectionWrapper from "./CTASection.style";

import image1 from "../../assets/images/hosting/hosting/CTA/01.png";

const CTAHosting = () => {
    return (
        <CTASectionWrapper>
            <Container>
                <Row Vcenter={true}>
                    <Col xs={12} sm={6} lg={5}>
                        <div className="CTA-content">
                            <h2>
                Grow Your Bussiness <br/>
                 With us
                            </h2>
                            <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                placeholder text commonly used to demonstrate the visual form 
                of a document or a typeface without replying out print, graphic
                or web designs. The passage is attributed to typesetter in the
                15th century.
                            </p>
                            <VintageBox
                                right={true}
                                vintageTwo={true}
                                position="relative"
                            >
                                <Button>Learn More</Button>
                            </VintageBox>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={7}>
                        <div className="CTA-img">
                            <img src={image1} alt="img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </CTASectionWrapper>
    );
};

export default CTAHosting;
