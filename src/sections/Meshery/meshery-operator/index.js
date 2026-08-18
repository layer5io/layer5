import React from "react";

import MesheryOperatorWrapper from "./mesheryoperator.style";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Slider from "react-slick";

import SubscribeSection from "../../../sections/subscribe/subscribe";
import Deployment from "./deployment.svg";
import Initialization from "./initialization.svg";
import OperatorLogo from "../../../assets/images/meshery-operator/meshery-operator.svg";

const MesheryOperatorPage = () => {
  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <MesheryOperatorWrapper>
        <div className="banner-background">
          <Container>
            <div className="hero-section">
              <Row $Vcenter>
                <Col $lg={6} $md={6} $sm={12}>
                  <img
                    src={OperatorLogo}
                    alt="Meshery Operator"
                    className="hero-logo"
                    loading="lazy"
                  />
                </Col>
                <Col $lg={6} $md={6} $sm={12}>
                  <div className="hero-text">
                    <h1>Meshery Operator</h1>
                    <p>
                      Meshery Operator is the multi-service mesh operator (a
                      Kubernetes custom controller) that manages MeshSync and
                      its messaging broker.
                    </p>
                    <p>
                      Meshery Operator is a Kubernetes controller manager,
                      otherwise known as a Kubernetes Operator. Meshery Operator
                      manages the lifecycle of every Meshery component that is
                      deployed or running inside of a Kubernetes cluster.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="explain-1">
              <h1>Controllers managed by Meshery Operator</h1>
              <div className="cards">
                <Row>
                  <Col $lg={6} $md={6} $sm={12} className="card-col">
                    <div className="card">
                      <h2>BROKER CONTROLLER</h2>
                      <p>
                        Broker Controller manages the lifecycle of broker that
                        meshery uses for data streaming across the cluster and
                        the outside world.
                      </p>
                    </div>
                  </Col>

                  <Col $lg={6} $md={6} $sm={12} className="card-col">
                    <div className="card">
                      <h2>MESHSYNC CONTROLLER</h2>
                      <p>
                        MeshSync Controller manages the lifecycle of MeshSync
                        that is deployed for resource synchronization for the
                        cluster.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="showcase">
              <h2>DEPLOYMENTS</h2>
              <Slider className="slider" {...sliderSettings}>
                <div className="slide-container">
                  <a
                    href={Deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="diagram-image"
                      src={Deployment}
                      alt="Meshery Operator and MeshSync Deployment"
                    />
                  </a>
                </div>
                <div className="slide-container">
                  <a
                    href={Initialization}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="diagram-image"
                      src={Initialization}
                      alt="Meshery Operator and MeshSync Initialization"
                    />
                  </a>
                </div>
              </Slider>
            </div>

            <div className="lists">
              <Row $Vcenter>
                <Col $lg={5} $md={12} $sm={12}>
                  <div className="deploy-overview">
                    <h2>
                      When is Meshery Operator deployed and when is it deleted?
                    </h2>
                    <p>
                      As a Kubernetes custom controller, Meshery Operator is
                      provisioned and deprovisioned when Meshery Server is
                      connected to or disconnected from a Kubernetes cluster.
                    </p>
                    <p>
                      Meshery Server connections to Kubernetes clusters are
                      controlled using Meshery Server clients:{" "}
                      <strong>mesheryctl</strong> or <strong>Meshery UI</strong>
                      . This behavior is consistent whether your Meshery
                      deployment is using Docker or Kubernetes as the platform
                      to host the Meshery deployment.
                    </p>
                  </div>
                </Col>
                <Col $lg={7} $md={12} $sm={12}>
                  <div className="deploy-cards">
                    <div className="deploy-card">
                      <div className="card-header">
                        <div className="icon-badge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#00B39F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M20 6L9 17l-5-5"
                            />
                          </svg>
                        </div>
                        <h4>Meshery CLI</h4>
                      </div>
                      <p>
                        Initiates connection to Kubernetes cluster when{" "}
                        <span className="command">mesheryctl system start</span>{" "}
                        is executed and disconnects when{" "}
                        <span className="command">mesheryctl system stop</span>{" "}
                        is executed. This behavior is consistent whether your
                        Meshery deployment is using Docker or Kubernetes as the
                        platform.
                      </p>
                    </div>

                    <div className="deploy-card">
                      <div className="card-header">
                        <div className="icon-badge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#00B39F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M20 6L9 17l-5-5"
                            />
                          </svg>
                        </div>
                        <h4>Meshery UI</h4>
                      </div>
                      <p>
                        Offers more granular control over the deployment of
                        Meshery Operator. You can remove Meshery Operator from a
                        Kubernetes cluster without disconnecting Meshery Server
                        from the Kubernetes cluster. You can control the
                        deployment of Meshery Operator using the on/off switch
                        found in the Meshery Operator section of Settings.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </MesheryOperatorWrapper>
      <SubscribeSection />
    </>
  );
};

export default MesheryOperatorPage;
