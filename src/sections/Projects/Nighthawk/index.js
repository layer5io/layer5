import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import { ReactComponent as Logo } from "../../../assets/images/nighthawk/with-name/SVG/nighthawk-colorMode.svg";
import { ReactComponent as SmpIcon } from "./images/smp-colorMode.svg";
import cloud from "./images/cloud-network_green.svg";
import cpu from "./images/cpu_green.svg";
import distributedPerf from "./images/distributed-performance_green.svg";
import cncf from "./images/cncf-white.svg";

const explain1 = "./images/Rectangle 479.png";
const explain2 = "./images/optimizing-your-average-response-time.png";
const explain3 = "./images/Comparison-of-different-modes-of-delivery-of-service-mesh-network-functions.png";

import { Gnhwrapper, CardsContainer } from "./gnh.style";

import { URL } from "../../Counters/index";
import Counter from "../../../reusecore/Counter";

const Projects = () => {
  const [performanceCount, setPerformanceCount] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => setPerformanceCount(result.total_runs));
  }, []);

  return (
    <Gnhwrapper id="projects">
      <Container>
        <div className="hero-section">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Logo className="logo" alt="Nighthawk Logo"/>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="hero-text">
                {/* <StaticImage src={icon} alt="Nighthawk Text Logo" /> */}
                <h1>Unlock distributed systems behavioral performance analysis</h1>
                <p>Meshery is the easiest way to get started with Nighthawk on any cloud or platform.</p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="stats">
          <Row>
            <Col lg={3} md={3} sm={6}>
              <h3><Counter duration={3} end={12} /></h3>
              <p>Histogram Statistics</p>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h3><Counter duration={6} end={performanceCount} separator="," /></h3>
              <p>Meshery Tests</p>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h3><Counter duration={3} end={2} suffix=" modes" /></h3>
              <p>Closed and Open-loop</p>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h3><Counter duration={3} end={9} /></h3>
              <p>Percentiles calculated</p>
            </Col>
          </Row>
        </div>

        <div className="explain-1">
          <h1>What is Nighthawk?</h1>
          <p>Nighthawk is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate or with an adaptive request rate. Layer5 offers a custom distribution of Nighthawk with intelligent adaptive load controllers to automatically identify optimal configurations for your service mesh deployment.
          As a Layer 7 performance characterization tool supporting HTTP/HTTPS/HTTP2, Nighthawk is Meshery's (and Envoy's) load generator and is written in C++.</p>
          <StaticImage src={explain1} alt="explanation"/>
        </div>

        <div className="explain-2">
          <Row className="align">
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Nighthawk and Meshery</h2>
                <p>Meshery integrates Nighthawk as one of (currently) three choices of load generator for characterizing and managing the performance of service meshes and their workloads. </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <StaticImage src={explain2} alt="explanation" />
            </Col>
          </Row>
        </div>

        <div className="explain-2">
          <Row className="align">
            <Col lg={6} md={6} sm={12}>
              <StaticImage src={explain3} alt="explanation" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Easing Management of the Nighthawk Lifecycle</h2>
                <p>As with a lot of open source projects, there is a lack of consistent tooling. This makes it difficult to have easily repeatable tests in that the building, deploying, and maintaining of Nighthawk instances (potentially a fleet of Nighthawk instances) is a burden without additional tooling. </p>
                <Button primary id="learn" type="button" title="Learn More" url="https://getnighthawk.dev" external={true}/>
              </div>
            </Col>
          </Row>
        </div>

        <div className="explain-1">
          <h1>Distributed Performance Management</h1>
          <p>Distributed load testing offers insight into system behaviors that arguably more accurately represent real world behaviors of services under load as that load comes from any number of sources.</p>
          <p>Engineers need multi-variate load generation and analysis techniques offered through distributed performance analysis. Nighthawk is being improved so that it can be horizontally scalable - such that multiple instances will be cognizant of one another and able to coordinate amongst each other. Nighthawk is growing in popularity with Layer5, Google, Red Hat, and AWS investing into it.</p>
          <div className="cards">
            <Row>
              <CardsContainer>
                <div className="card">
                  <div className="circle">
                    <SmpIcon className="smp" alt="smp logo" />
                  </div>
                  <h2>SERVICE MESH PERFORMANCE COMPATIBILITY</h2>
                  <p>Enabling Standards-based, Distributed Performance Management - Nighthawk integrates Meshery and Nighthawk. Through this integration Meshery facilitates <Link to="/projects/service-mesh-performance">Service Mesh Performance (SMP)</Link> compatibility for Nighthawk.</p>
                </div>
                <div className="card">
                  <div className="circle">
                    <img src={cloud} alt="cloud image" />
                  </div>
                  <h2>Nighthawk Distribution</h2>
                  <p>Stable builds available for:</p>
                  <ul>
                    <li>Debian</li>
                    <li>CentOS</li>
                    <li>Unbuntu</li>
                    <li>macOS</li>
                    <li>Docker</li>
                  </ul>
                  <p>In these package managers:</p>
                  <ul>
                    <li>Homebrew</li>
                    <li>Scoop</li>
                  </ul>
                </div>
                <div className="card">
                  <div className="circle">
                    <img src={cpu} alt="cpu image" />
                  </div>
                  <h2>SCHEDULING AND ANALYSIS</h2>
                  <p>Nighthawk integrates with <Link to="/meshery">Meshery</Link> and provides you with the ability to schedule performance tests or insert them into your CI pipeline.</p>
                  <p>Adaptive analysis in which you may run multi-stage performance tests and persist their results in a historical archive is also enabled through integration with Meshery.</p>
                </div>
              </CardsContainer>
            </Row>
          </div>
        </div>

        <div className="list">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <img src={distributedPerf} className="distributedPerf" alt="Cloud Native Distributed Performance Management" />
                <h2>Standards-based, distributed performance management</h2>
                <p>Nighthawk will provide generally-available distributions of Nighthawk under different architectures and platforms and easy-to-use tooling for installation and operation. This will include creating distributions of Nighthawk as well as augmenting existing tooling, Meshery, to retrieve these arch-specific packages and update their deployments.</p>
              </div>

            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="listed">
                <table className="table">
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                    <td className="service">
                      <h4>
                        Further the state of distributed <br />
                        performance management.
                      </h4>
                      Enable standards-based, distributed performance management through compatibility with the Service Mesh Performance (SMP) specification.
                    </td>
                  </tr>
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                    <td className="service">
                      <h4>
                        Facilitate Nighthawk adoption.
                      </h4>
                      Deliver trusted, certified builds, distributed via the most popular package managers: apt, yum, Homebrew, and platforms: Docker and Meshery.
                      Bridge Nighthawk’s C++ with the lingua franca of Cloud Native: Golang.
                    </td>
                  </tr>
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                    <td className="service">
                      <h4>
                        Deliver easy-to-use, repeatable <br />
                        tooling.
                      </h4>
                      To leverage Nighthawk as the performance characterization tool as used in the 30 patterns in the Service Mesh Patterns book.
                    </td>
                  </tr>
                  <tr>
                    <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
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
        <img src={cncf} alt="cncf logo" />
        <p> Participate in the state of the art. <br />
          Join us in the Cloud Native Computing Foundation's Service Mesh Working Group.</p>
        <Button primary title="Join Us" url="/community/calendar#meetings" />
      </div>
    </Gnhwrapper>
  );
};

export default Projects;
