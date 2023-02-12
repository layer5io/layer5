import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import svgBackground from "../../../assets/images/homePage-images/background.svg";

import BannerSectionWrapper from "./statement.style";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const imgHero = "../../../assets/images/meshmap/MeshmapDesigner.png";
// const imgHero = "../service-mesh-management/images/service-mesh.svg";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <div className="section">
        <Row className="row">
          <Col sm={12} md={6} lg={6} className="left-col">
            <div className="left">
              <div className="left-child">
                <div className="svg-background">
                  <img src={svgBackground} alt="background" />
                </div>
                <SectionTitle
                  className="section-title"
                  leftAlign={true}
                  UniWidth="100%"
                >
                  <h4 className="statement">Meshery is</h4>
                  <div className="demo">
                    The <span>cloud native management platform</span>
                  </div>
                  <h3 className="statement">
                    <div className="side">
                      {/* <div className="side-text">
                        The <span>extensible</span> cloud native manager.
                      </div> */}
                      <div className="description">
                        <p>An extensible platform, Meshery comes packed with <Link to="/cloud-native-management/meshery/integrations">integrations</Link> for Prometheus, Grafana, Jaeger, CloudEvents, and support for WebAssembly filters for Envoy.</p>
                        <p>
                          Meshery is your microservices manager. With extension points throughout, Meshery offers users and integrators the ability to extend and customize platform functionality.
                        </p>
                      </div>
                    </div>
                  </h3>
                  <div className="join-community">
                    <Button primary className="join-community-button" title="Extend your control" url="/projects" />
                  </div>
                </SectionTitle>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="right-col">
            <StaticImage loading="lazy" className="hero" src={imgHero} alt="Layer5 MeshMap screenshot" />
          </Col>
        </Row>
      </div>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
