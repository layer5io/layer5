import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import svgBackground from "../../../assets/images/homePage-images/background.svg";
import BannerSectionWrapper from "./statement.style";
import { StaticImage } from "gatsby-plugin-image";

const imgHero = "../../../assets/images/homePage-images/Lee-Calcote-Cloud-Native-Rejekts.jpg";
// const imgHero = "./images/layer5-projects.png";


const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <div className="section">
        <Row className="row">
          <Col sm={12} md={6} lg={6} className="left-col">
            <div className="left">
              <div className="left-child">
                <div className="svg-background">
                  <img src={svgBackground} alt="background" loading="lazy"/>
                </div>
                <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  <p className="statement">We make cloud native manageable by </p>
                  {/* <h4 className="statement">We make cloud native manageable by </h4> */}
                  <h2 className="statement">
                    <span className="span-text">
                      harnessing the power of a developer-friendly applications management system that supports visualization of the modern infrastructure leading to effective operation with best practices.
                    </span>
                  </h2>
                  {/* <img className="Layer5Logo" src={Layer5Logo} /> */}
                  <h3 className="statement">
                    {/* Enablers of Engineers. Enablers of Speed. Enablers of Business. */}
                    Layer5 is an empowerer of the developer, the operator, and the service owner
                  </h3>
                  <div className="join-community">
                    <Button primary className="join-community-button" title="our projects" url="/projects" />
                  </div>
                </SectionTitle>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="right-col">
            <StaticImage loading="lazy" className="hero" src={imgHero} alt="hero image" />
          </Col>
        </Row>
      </div>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
