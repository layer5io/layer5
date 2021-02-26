import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import logo from "./images/getnighthawk.svg";
import c_icon from "./images/c_icon.svg";

import explain1 from "./images/Rectangle 479.png";
import explain2 from "./images/Rectangle 487.png";
import explain3 from "./images/Rectangle 488.png";
import explain4 from "./images/Rectangle 494.png";
import icon from "./images/GETNIGHTHAWK.png";

import smpIcon from "./images/smp-dark-text.svg";
//import cli from "./images/cli_green.svg";
import cloud from "./images/cloud-network_green.svg";
import cpu from "./images/cpu_green.svg";
import cncf from "./images/cncf-white.svg";

import Gnhwrapper from "./gnh.style";

const Projects = () => {
  return (
    <Gnhwrapper id="projects">
      <Container>
        <div className="hero-section">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={logo} className="img1" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="hero-text">
                <img src={icon} />
                <p>The easiest way to get started with <br /> Nighthawk on any cloud or platform</p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="stats">
          <Row>
            <Col lg={3} md={3} sm={6}>
              <h3>12</h3>
              <p>Histogram Statistics</p>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h3>2,000+</h3>
              <p>Meshery Tests</p>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h3>2 modes</h3>
              <p>Closed and Open-loop</p>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h3>9</h3>
              <p>Percentiles calculated</p>
            </Col>
          </Row>
        </div>

        <div className="explain-1">
          <h1>What is Nighthawk?</h1>
          <p>Nighthawk is a Layer 7 (HTTP/HTTPS/HTTP2) performance characterization tool.<br /> Nighthawk is Envoy’s load generator and is written in C++. </p>
          <img src={explain1} />
        </div>

        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Nighthawk and<br /> Meshery</h2>
                <p>Meshery integrates Nighthawk as one of (currently) three choices of load generator for characterizing and managing the performance of service meshes and their workloads. </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={explain2} />
            </Col>
          </Row>
        </div>

        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={explain3} />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Easing Management of<br /> the Nighthawk <br /> Lifecycle</h2>
                <p>As with a lot of open source projects, there is a lack of consistent tooling. This makes it difficult to have easily repeatable tests in that the building, deploying, and maintaining of Nighthawk instances (potentially a fleet of Nighthawk instances) is a burden without additional tooling. </p>
                <Button primary id="learn" type="button" title="Learn More" url="https://getnighthawk.dev" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="explain-1">
          <h1>Why GetNighthawk?</h1>
          <p>Nighthawk is growing in popularity, but the core project only builds to one architecture / one Docker image. Recently, Nighthawk is being improved so that it can be horizontally scalable - such that multiple instances will be cognizant of one another and able to coordinate amongst each other. Nighthawk is a subproject of Envoy. Nighthawk is growing in popularity with Layer5, Google, Red Hat, and AWS are investing into it. </p>
          <div className="cards">
            <Row>
              <Col lg={4} md={4} sm={12}>
                <div className="card">
                  <div className="circle">
                    <img src={smpIcon} className="smp" />
                  </div>
                  <h2>SERVICE MESH PERFORMANCE COMPATIBILITY</h2>
                  <p>Enabling Standards-based, Distributed Performance Management - GetNighthawk integrates Meshery and Nighthawk. Through this integration Meshery facilitates <Link to="/projects/service-mesh-performance">Service Mesh Performance (SMP)</Link> compatibility for Nighthawk.</p>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="card">
                  <div className="circle">
                    <img src={cloud} />
                  </div>
                  <h2>Nighthawk Distribution</h2>
                  <p>Stable builds available for:
                    <ul>
                      <li>Debian</li>
                      <li>CentOS</li>
                      <li>Unbuntu</li>
                      <li>macOS</li>
                      <li>Docker</li>
                    </ul>
                  In these package managers:
                    <ul>
                      <li>Homebrew</li>
                      <li>Scoop</li>
                    </ul>
                  </p>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="card">
                  <div className="circle">
                    <img src={cpu} />
                  </div>
                  <h2>SCHEDULING AND ANALYSIS</h2>
                  <p>GetNighthawk integrates with <Link to="/meshery">Meshery</Link> and provides you with the ability to schedule performance tests or insert them into your CI pipeline.</p>
                  <p>Adapative analysis in which you may run multi-stage performance tests and persist their results in a historical archive is also enabled through integration with Meshery.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="list">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Standards-based, distributed performance management</h2>
                <p>GetNighthawk will provide generally-available distributions of Nighthawk under different architectures and platforms and easy-to-use tooling for installation and operation. This will include creating distributions of Nighthawk as well as augmenting existing tooling, Meshery, to retrieve these arch-specific packages and update their deployments.</p>
              </div>
              <img src={explain4} />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="listed">
                <table className="table">
                  <tr>
                    <td className="icon"><img src={c_icon} /></td>
                    <td className="service">
                      <h4>
                        Further the state of distributed <br />
                                        performance management.
                      </h4>
                                    Enable standards-based, distributed performance management through compatibility with the Service Mesh Performance (SMP) specification.
                    </td>
                  </tr>
                  <tr>
                    <td className="icon"><img src={c_icon} /></td>
                    <td className="service">
                      <h4>
                        Facilitate Nighthawk adoption.
                      </h4>
                                    Deliver trusted, certified builds, distributed via the most popular package managers: apt, yum, Homebrew, and platforms: Docker and Meshery.
                                    Bridge Nighthawk’s C++ with the lingua franca of Cloud Native: Golang.
                    </td>
                  </tr>
                  <tr>
                    <td className="icon"><img src={c_icon} /></td>
                    <td className="service">
                      <h4>
                        Deliver easy-to-use, repeatable <br />
                                        tooling.
                      </h4>
                                    To leverage Nighthawk as the performance characterization tool as used in the 30 patterns in the Service Mesh Patterns book.
                    </td>
                  </tr>
                  <tr>
                    <td className="icon"><img src={c_icon} /></td>
                    <td className="service">
                      <h4>
                        Educate the ecosystem
                      </h4>
                                    Educate the ecosystem through the CNCF Service Mesh Working Group.
                    </td>
                  </tr>
                </table>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="callout">
        <img src={cncf} />
        <p> Participate in the state of the art. <br />
        Join us in the Cloud Native Computing Foundation's Service Mesh Working Group.</p>
        <Button primary title="Join Us" url="/community/calendar#meetings" />
      </div>
    </Gnhwrapper>
  );
};

export default Projects;
