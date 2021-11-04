import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import layer5icon from "../../../assets/images/layer5/5 icon/svg/dark/5-dark-bg.svg";
import hawkIcon from "../../../assets/images/getnighthawk/icon-only/SVG/getnighthawk-logo.svg";
import meshmateicon from "../../../assets/images/meshmate/meshmate-icon.svg";
import servicemeshperformance from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import mesheryoperatoricon from "../../../assets/images/meshery-operator/meshery-operator.svg";
import mesherysyncicon from "../../../assets/images/meshsync/meshsync.svg";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import { Link } from "gatsby";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [
  {
    id: 0,
    link: "#Layer5",
    text: "Layer5",
  },
  { id: 1, link: "#Meshery", text: "Meshery" },
  { id: 2, link: "#Backend Projects", text: "Backend Projects" },
  {
    id: 3,
    link: "#Service Mesh Performance",
    text: "Service Mesh Performance",
  },
  {
    id: 4,
    link: "# Service Mesh Patterns",
    text: " Service Mesh Patterns",
  },
];

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
              <a id="Layer5">
                {" "}
                <h3>
                  <a href="https://layer5.io/">
                    <img
                      margin-left="10%"
                      width="3.5%"
                      align="left"
                      src={layer5icon}
                    />
                    &nbsp; Layer5{" "}
                  </a>
                </h3>{" "}
              </a>
            </p>
            <p>
              Its service mesh community represents the largest collection of
              service Mesh projects.Emerging projects like GetNighthawk{" "}
              <img width="2.5%" src={hawkIcon} /> , community with{" "}
              <img width="2.5%" src={meshmateicon} /> MeshMates, catch-all org,
              “home base”. <br />
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
                    <a href="https://layer5.io/projects/getnighthawk">
                      GetNightHawk :
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
              <a id="Meshery">
                {" "}
                <h3>
                  <a href="https://layer5.io/service-mesh-management/meshery">
                    <img
                      margin="10%"
                      width="3%"
                      align="left"
                      src={meshery}
                      alt="Meshery"
                    />
                    &nbsp; Meshery
                  </a>
                </h3>{" "}
              </a>
            </p>
            <p>
              Meshery and its components Meshery Operator{" "}
              <img width="2%" src={mesheryoperatoricon} /> and MeshSync{" "}
              <img width="2%" src={mesherysyncicon} />
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
            <a id="Service Mesh Performance">
              {" "}
              <h3>
                <a href="https://smp-spec.io/">
                  <img
                    className="channels-img"
                    align="left"
                    src={servicemeshperformance}
                  />
                  &nbsp; Service Mesh Performance{" "}
                </a>
              </h3>{" "}
            </a>
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
              <a id="Service Mesh Patterns">
                {" "}
                <h3>
                  <a href="https://github.com/service-mesh-patterns/service-mesh-patterns">
                    <img
                      margin="10%"
                      width="3%"
                      align="left"
                      src="https://user-images.githubusercontent.com/85789734/134711787-5bf0aeaa-008c-4e2c-a81e-e05f3dcfb54c.png"
                    />{" "}
                    &nbsp; Service Mesh Patterns{" "}
                  </a>
                </h3>{" "}
              </a>
            </p>
            <p>
              A collection of curated patterns of service mesh use cases
              compatible with Meshery. <br />
            </p>
          </div>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default Maintainer;
