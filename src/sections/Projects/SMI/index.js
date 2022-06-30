import React from "react";

import Layout from "../../../components/layout";

import SMIWrapper from "./smi.style";
import { Row, Col, Container } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import MeshMapCTA from "../../meshmap-cta";

import data from "./data";
import c_icon from "./c-icon.svg";
import logo from "./logo.svg";
import smi from "./smi.svg";
import smiLogo from "./smi-logo.png";
import TestsTable from "./testsTable";

const SMIPage = () => {
  return (
    <Layout>
      <SMIWrapper>
        <Container>
          <img className="logo" src={logo} />
          <Row className="description">
            <Col lg={8} md={12} sm={12}>
              <h4> Conformance and Diagnostics</h4>
              <h1> Service Mesh Interface</h1>
              <p className="desc-p">
                Integrate and wrap your operational processes around a service mesh without fear of lock-in. SMI provides a standard interface for service meshes on Kubernetes and a basic feature set for the most common service mesh use cases.
              </p>
              <p>
                Meshery is <span>the official</span> SMI Conformance Validator. Use Meshery's diagnostic tool to verify that your service mesh's behavior in an accessible and non-destructive manner.
              </p>
              <Button primary title="Run SMI Conformance" url="/blog/programs/starting-smi-conformance-testing-with-meshery" />
            </Col>
            <Col lg={4} md={12} sm={12} className="hero_img_col">
              <div className="hero-img">
                <img src={smi} alt="SMI Table"></img>
              </div>
            </Col>
          </Row>
          <Row className="description feature">
            <div className="section-title">
              <h1>Purpose and Overview</h1>
              <p>The scope of this initiative includes all service mesh projects participating in the Service Mesh Interface specification. It’s important to acknowledge that conformance consists of both capabilities and compliance status.</p>
            </div>
            <div className="bg"></div>
            <Row className="feature-table">
              {data.features.map((feature, index) => (
                <Col xs={12} md={6} key={index}>
                  <div className="feature-block">
                    <div className="feature-title">
                      <h2>{feature.name}</h2>
                    </div>
                    <div className="details-block">
                      {feature.services.map((service, index) => (
                        <table className="table" key={index}>
                          <tr>
                            <td className="icon"><img src={c_icon} /></td>
                            <td><p>{service.content}</p></td>
                          </tr>
                        </table>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
        <div className="section-3">
          <div className="card">
            <h2> Validating Conformance</h2>
            <Row>
              <Col lg={8}>
                <p>
                  Conformance to SMI specifications will be done through
                  use of a service mesh’s workload. A sample application
                  is used as the workload to test. To facilitate a common
                  set of tests, a sample application has been developed
                  for purposes of providing a consistent workload to apply
                  SMI specs against. A deployment of the Learn Layer5
                  sample application being fitted to each service mesh.
                </p>
              </Col>
              <Col lg={4}>
                <Button primary title="Run SMI Conformance" url="/blog/programs/starting-smi-conformance-testing-with-meshery"></Button>
              </Col>
            </Row>
          </div>
        </div>
        <div id="tests" className="test-block">
          <h2>Conformance Tests</h2>
          <h3>for service mesh interoperability</h3>
          <p></p>
          <div className="table">
            <TestsTable/>
          </div>

          <div className="smiResults">
            <img src={smiLogo}
              alt="Service Mesh Landscape"
            />
            <div>
              <p>
                    Checkout the current status of the support for SMI Conformance Tests of all service meshes in our landscape page.
              </p>
              <Button primary url="/service-mesh-landscape#smi" external={false}>
                      Check it Out
              </Button>
            </div>
          </div>
        </div>
      </SMIWrapper>
      <MeshMapCTA />
    </Layout>
  );
};

export default SMIPage;