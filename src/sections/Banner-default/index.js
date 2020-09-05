import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";
import ParticleComponent from "../../reusecore/Particle";

import { FaPlay, FaDownload } from "react-icons/fa";

import BannerSectionWrapper from "./banner.style";

const BannerDefault = () => {
    return (
        <BannerSectionWrapper>
            <ParticleComponent />
            <Container fullWidthSM>
                <Row>
                    <Col sm={7} md={6} lg={7}>
                        <SectionTitle
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            <h4>The Service Mesh Company</h4>
                            <h1>
                            representing every <span>every</span> service mesh
                            </h1>
                        </SectionTitle>
                        <p>
                        The Layer5 community represents the largest collection of service mesh projects and their maintainers in the world.
                        </p>
                        <VintageBox right={true} vintageOne={true}>
                            <Button className="banner-btn one">
                                <FaDownload className="icon-left" />
                Run Meshery
                            </Button>
                            <Button className="banner-btn two">
                                <FaPlay className="icon-left" /> Watch Now
                            </Button>
                        </VintageBox>
                    </Col>
                </Row>
            </Container>
        </BannerSectionWrapper>
    );
};

export default BannerDefault;
