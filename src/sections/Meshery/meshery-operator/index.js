import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../../components/layout";

import MesheryOperatorWrapper from "./mesheryoperator.style";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Slider from "react-slick";

import SubscribeSection from "../../../sections/subscribe/subscribe";
import Deployment from "./deployment.svg";
import Initialization from "./initialization.svg";
import icon from "./icon.svg";

const OperatorLogo = "../../../assets/images/meshery-operator/meshery-operator.png";

const MesheryOperatorPage = () => {
  return (
    <Layout>
      <MesheryOperatorWrapper>
        <div className="banner-background">
          <Container>
            <div className="hero-section">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <StaticImage src={OperatorLogo} className="logo" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="hero-text">
                    <h1>Meshery Operator</h1>
                    <br />
                    <p>
                      Meshery Operator is the multi-service mesh operator (a Kubernetes custom controller) that manages MeshSync and it’s messaging broker.
                    </p>
                    <p>
                      Meshery Operator is a Kubernetes controller manager, otherwise known as a Kubernetes Operator. Meshery Operator manages the lifecycle of every Meshery component that is deployed or running inside of a Kubernetes cluster.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="explain-1">
              <h1>Controllers managed by Meshery Operator</h1>
              <div className="cards">
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <div className="card">
                      <h2>BROKER CONTROLLER</h2>
                      <br />
                      <p>Broker Controller manages the lifecycle of broker that meshery uses for data streaming across the cluster and the outside world.</p>
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <div className="card">
                      <h2>MESHSYNC CONTROLLER</h2>
                      <br />
                      <p>MeshSync Controller manages the lifecycle of MeshSync that is deployed for resource synchronization for the cluster.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="showcase">
              <h2>DEPLOYMENTS</h2>
              <br />
              <Slider
                className="slider"
                arrows={true}
                infinite={false}
                speed="500"
                slidesToScroll={1}
              >
                <div>
                  <a href={Deployment}>
                    <img className="logo" src={Deployment} />
                  </a>
                </div>
                <div>
                  <a href={Initialization}>
                    <img className="logo" src={Initialization} />
                  </a>
                </div>
              </Slider>
            </div>

            <div className="lists">
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="text">
                    <h2>When is Meshery Operator deployed and when is it deleted?</h2>
                    <br />
                    <p
                    >As a Kubernetes custom controller, Meshery Operator is provisioned and deprovisioned when Meshery Server is connected to or disconnected from Kubernetes cluster. Meshery Server connections to Kubernetes clusters are controlled using Meshery Server clients: mesheryctl or Meshery UI. This behavior described below is consistent whether your Meshery deployment is using Docker or Kubernetes as the platform to host the Meshery deployment.
                    </p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="listed">
                    <table className="table">
                      <tr>
                        <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                        <td className="service">
                          <h4>
                            Meshery CLI
                          </h4>
                          Initiates connection to Kubernetes cluster when <span className="command">mesheryctl</span> system start is executed and disconnects when <span className="command">mesheryctl system stop</span> is executed. This behavior is consistent whether your Meshery deployment is using Docker or Kubernetes as the platform to host the Meshery deployment.
                        </td>
                      </tr>
                      <tr>
                        <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                        <td className="service">
                          <h4>
                            Meshery UI
                          </h4>
                          Offers more granular control over the deployment of Meshery Operator. You can remove Meshery Operator from a Kubernetes cluster without disconnecting Meshery Server from the Kubernetes cluster. You can control the deployment of Meshery Operator using the on/off switch found in the Meshery Operator section of Settings.
                        </td>
                      </tr>

                    </table>
                  </div>
                </Col>
              </Row>
            </div>

          </Container>
        </div>
      </MesheryOperatorWrapper>
      <SubscribeSection />
    </Layout>
  );
};

export default MesheryOperatorPage;