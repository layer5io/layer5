import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import github from "../../../assets/images/socialIcons/github.svg";
import { Link } from "gatsby";

import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import layer5icon from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import hawkIcon from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import meshmateicon from "../../../assets/images/meshmate/meshmate-icon.svg";
import servicemeshperformance from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import mesheryoperatoricon from "../../../assets/images/meshery-operator/meshery-operator.svg";
import mesherysyncicon from "../../../assets/images/meshsync/meshsync.svg";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";

const Maintainer = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Projects</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <p>
              <h3>
                <a href="https://layer5.io/">
                  <img className="project-title-icon" src={layer5icon} alt="Layer5" />
									&nbsp; Layer5{" "}
                </a>
              </h3>
            </p>
            <p>

							Its service mesh community represents the largest collection of
							service Mesh projects.Emerging projects like Nighthawk{" "}
              <img className="project-description-icon" src={hawkIcon} /> , community with{" "}
              <Link to="/community/meshmates"><img className="project-description-icon" src={meshmateicon} /> MeshMates </Link>, catch-all org, “home base”. 
              <br />
              <ul>
                <li>
                  <h4>
                    <a href="https://layer5.io/">Layer5 :</a>
                  </h4>{" "}
                </li>
                <p>
									Layer5 is the official website of the Layer5 community showing
									an overview of the Layer5 projects. The different service mesh
									landscapes, resources to learn about service mesh, and
									communities. <br />
                </p>
                <li>
                  <h4>
                    <a href="https://layer5.io/projects/image-hub">
											Image-Hub :
                    </a>
                  </h4>{" "}
                </li>
                <p>
									Image Hub is a sample application written to run on Consul for
									exploring WebAssembly modules used as Envoy filters are
									written in Rust. These modules can be used to implement
									multi-tenancy or to implement per-user rate-limiting in your
									application's endpoints. This application was first
									demonstrated at DockerCon 2020. <br />
                </p>
                <li>
                  <h4>
                    <a href="https://layer5.io/projects/nighthawk">
											Nighthawk :
                    </a>
                  </h4>{" "}
                </li>
                <p>
									This Is a Layer 7 (HTTP/HTTPS/HTTP2) performance
									characterization tool. Nighthawk is Envoy’s load generator and
									is written in C++. Meshery integrates Nighthawk as one of
									(currently) three choices of load generators for
									characterizing and managing the performance of service meshes
									and their workloads. <br />
                </p>
              </ul>
            </p>
            <p>
              <h3>
                <a href="https://layer5.io/service-mesh-management/meshery">
                  <img className="project-title-icon" src={meshery} alt="Meshery" />
									&nbsp; Meshery
                </a>
              </h3>
            </p>
            <p>
							Meshery and its components Meshery Operator{" "}
              <img className="project-description-icon" src={mesheryoperatoricon} /> and MeshSync{" "}
              <img className="project-description-icon" src={mesherysyncicon} />
              <ul>
                <li>
                  <h4>
                    <a href="https://layer5.io/service-mesh-management/meshery">
											Meshery
                    </a>
                  </h4>{" "}
                </li>
                <p>
									It is a multi-service mesh management plane offering lifecycle
									management of more types of service meshes than any other tool
									available today. Meshery facilitates adopting, configuring,
									operating, and managing the performance of different service
									meshes and incorporates the collection and display of metrics
									from applications running on top of any service mesh.
                  <br />{" "}
                </p>
                <li>
                  <h4>
                    <a href="https://meshery.io/">Meshery.io :</a>
                  </h4>{" "}
                </li>
                <p>
									Website for Meshery, the multi-mesh manager. <br />
                </p>
                <li>
                  <h4>
                    <a href="https://layer5.io/service-mesh-management/meshery/meshery-operator">
											Meshery-operator :
                    </a>
                  </h4>{" "}
                </li>
                <p>
									Meshery Operator is the multi-service mesh operator and
									implementation of MeshSync. <br />
                </p>
              </ul>
            </p>

            <p>
              <h3 style = {{ margin : "2% 0%"}}>
                <a href="https://smp-spec.io/">
                  <img
                    className="project-title-icon"
                    alt="service mesh performance"
                    src={servicemeshperformance}    
                  />
                  &nbsp; Service Mesh Performance{" "}
                </a>
              </h3>
            </p>
            <p>
              <a href="https://layer5.io/projects/service-mesh-performance">
								The Service Mesh Performance (SMP)
              </a>{" "}
							is a vendor-neutral specification for capturing details of
							environment and infrastructure details, service mesh and it’s
							configuration, service/application details, and bundling of
							statistical analysis of the result. <br />
            </p>

            <p>
              <h3 style = {{ margin : "2% 0%"}} >
                <a href="https://github.com/service-mesh-patterns/service-mesh-patterns">
                  <img
                    className="project-title-icon"
                    alt="service mesh patterns"
                    src="https://user-images.githubusercontent.com/85789734/134711787-5bf0aeaa-008c-4e2c-a81e-e05f3dcfb54c.png"
                  />{" "}
									&nbsp; Service Mesh Patterns{" "}
                </a>
              </h3>
            </p>
            <p>
							A collection of curated patterns of service mesh use cases
							compatible with Meshery. <br />
            </p>
          </div>
        </Container>
        <TocPagination />
      </div>
    </HandbookWrapper>
  );
};

export default Maintainer;
