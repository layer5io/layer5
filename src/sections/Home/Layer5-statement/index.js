import React from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";
import ParticleComponent from "../../../reusecore/Particle";

import { FaMapMarkedAlt, FaPlay } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import imgHero from "./images/Lee-Calcote-Cloud-Native-Rejekts.jpg";
import Layer5Logo from "../../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";

import BannerSectionWrapper from "./statement.style";

const BannerDefault = () => {
    return (
        <BannerSectionWrapper>
            <h4 className="statement">Layer5 makes Cloud Native Manageable</h4>
            <div className="section">    
                <Container fullWidthSM>    
                    <Row>
                        <Col sm={7} md={6} lg={6}>
                            <SectionTitle
                                className="section-title"
                                leftAlign={true}
                                UniWidth="100%"
                            >

                                <h2 className="statement">
                                exploiting the unique position  service meshes   <span>have in changing how developers write applications and how operators run modern infrastructure.</span>
                                </h2>
                                <img className="Layer5Logo" src={Layer5Logo} />
                                <h3 className="statement">Enablers of Engineers. Enablers of Speed. Enablers of Business.</h3>
                            </SectionTitle>
                            
                        </Col>
                    </Row>
                </Container>
                <img className="hero" src={imgHero} />   
            </div>    
        </BannerSectionWrapper>        
    );
};

export default BannerDefault;
