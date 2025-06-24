import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import svgBackground from "../../../assets/images/homePage-images/background.svg";
import playIcon from "../../../assets/images/homePage-images/play-button.webp";

import ReactPlayer from "react-player/youtube";

import BannerSectionWrapper from "./statement.style";

import imgHero from "../../../assets/images/kanvas/KanvasDesigner.png";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <div className="section">
        <Row className="row">
          <Col $sm={12} $md={6} $lg={6} className="left-col">
            <div className="left">
              <div className="left-child">
                <div className="svg-background">
                  <img src={svgBackground} alt="background" loading="lazy" />
                </div>
                <SectionTitle
                  className="section-title"
                  $leftAlign={true}
                  $UniWidth="100%"
                >
                  <h4 className="statement">Meshery is</h4>
                  <div className="demo">
                    <span>a self-service engineering platform</span>
                  </div>
                  <h3 className="statement">
                    <div className="side">
                      {/* <div className="side-text">
                        The <span>extensible</span> cloud native manager.
                      </div> */}
                      <div className="description">
                        <p>
                          A cloud native manager that enables the design and management of all Kubernetes-based infrastructure and applications (multi-cloud).
                        </p>
                        <p>
                          Among other features, As an extensible platform, Meshery offers visual and collaborative GitOps, freeing you from the chains of YAML while managing Kubernetes multi-cluster deployments.
                        </p>
                      </div>
                    </div>
                  </h3>
                  <div className="join-community">
                    <Button
                      $primary                      className="join-community-button"
                      title="Extend your control"
                      $url="/cloud-native-management/meshery"
                    />
                  </div>
                </SectionTitle>
              </div>
            </div>
          </Col>
          <Col $sm={12} $md={6} $lg={6} className="right-col">
            <ReactPlayer
              url="https://youtu.be/qaoYRP3oLok"
              playing
              controls
              light={
                <img
                  className="imgHero"
                  src={imgHero}
                  loading="lazy"
                  alt="kanvas designer"
                  width="100%"
                  height="100%"
                />
              }
              playIcon={
                <img
                  src={playIcon}
                  className="playBtn"
                  loading="lazy"
                  alt="Play"
                  role="button"
                  aria-label="Play"
                  style={{ fontSize: "24px" }}
                />
              }
              width="auto"
              height="100%"
              style={{ margin: "auto" }}
              className="vidHero"
            ></ReactPlayer>
          </Col>
        </Row>
      </div>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
