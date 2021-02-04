import React from "react";

import { Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
// import VintageBox from "../../../reusecore/VintageBox";
// import ParticleComponent from "../../../reusecore/Particle";

// import { FaMapMarkedAlt, FaPlay } from "react-icons/fa";
// import { FiDownloadCloud } from "react-icons/fi";
import imgHero from "./images/Lee-Calcote-Cloud-Native-Rejekts.jpg";
// import Layer5Logo from "../../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";
import svgBackground from "./images/background.svg";

import BannerSectionWrapper from "./statement.style";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <div className="section">
        <Row className="row">
          <Col sm={12} md={6} lg={6} className="left-col">
            <div className="left">
              <div className="left-child">
                <div className="svg-background">
                  <img src={svgBackground} />
                </div>
                <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  <h4 className="statement">Layer5 makes Cloud Native Manageable</h4>
                  <h2 className="statement">
                    <span>
                      Exploiting the unique position  service meshes have in changing how developers write applications and how operators run modern infrastructure.
                    </span>
                  </h2>
                  {/* <img className="Layer5Logo" src={Layer5Logo} /> */}
                  <h3 className="statement">
                    {/* Enablers of Engineers. Enablers of Speed. Enablers of Business. */}
                    Layer5 is an empowerer of the developer, the operator, and the service owner
                  </h3>
                  <div className="join-community">
                    <Button primary className="join-community-button" title="Join our community" url="/community" />
                  </div>
                </SectionTitle>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="right-col">
            <img className="hero" src={imgHero} />
          </Col>
        </Row>
      </div>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
