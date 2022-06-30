import React from "react";
// import {FaSearch } from "react-icons/fa";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import ParticleComponent from "../../../reusecore/Particle";

import BannerSectionWrapper from "./banner.style";
import imgHero1 from "../../../assets/images/hosting/hosting/banner/01.png";
import imgHero2 from "../../../assets/images/hosting/hosting/banner/02.png";

const BannerHosting= () => {
  return (
    <BannerSectionWrapper>
      <img src={imgHero1} alt="img" className="section-particle one"/>
      <ParticleComponent />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col lg={6}>
            <SectionTitle
              className="section-title"
              UniWidth="100%"
            >
              <h4>Save up to <span>99%</span> with our holiday Deals</h4>
              <h1>
                We provide the best web hosting
                 solution around the world
              </h1>
              <p>
              join with us by one click and build beautifull apps <br/>
                for your startsup, company
              </p>
            </SectionTitle>
            <div className="domain-search-block">
              <div className="search-box">
                <input type="text" placeholder="Search domain" />
                <Button className="src-btn">
                  {/* <FaSearch /> */}
                </Button>
              </div>
              <div className="domain-extention-block">
                <span className="com">
                  .com
                </span>
                <span className="org">
                  .org
                </span>
                <span className="net">
                  .net
                </span>
                <span className="dev">
                  .dev
                </span>
                <span className="xyz">
                  .xyz
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-img-block">
              <img src={imgHero2} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerHosting;
