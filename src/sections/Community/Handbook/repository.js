import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";
import github from "../../../assets/images/socialIcons/github.svg";
import layer5icon from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator.svg";
import MeshSync from "../../../assets/images/meshsync/meshsync.svg";
import servicemeshperformance from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import { Link } from "gatsby";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [
  {
    id: 0,
    link: "#top",
    text: "GitHub Organizations and Repositories",
  },
  { id: 1, link: "#Frontend Projects", text: "Frontend Projects" },
  { id: 2, link: "#Backend Projects", text: "Backend Projects" },
];

const Repository = () => {
  const data = React.useMemo(() => repo_data);
  let frontendProjects = data.filter((data) => data.category === "Frontend");
  let backendProjects = data.filter((data) => data.category !== "Frontend");

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Repository Overview</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <p>A brief introduction to all of the Github repositories of Layer5 organization is offered below. This overview serves as a resource to newcomers seeking a perspective of the collective community efforts (from a code-centric perspective). See <a href="https://docs.google.com/document/u/0/d/1FzX-C_xy9hZ3Eu9dcCE0unhFV5LRUrb5YLn_MGYuG6Y/edit">Layer5 GitHub Process</a> for more related information.</p>
            <a id="top">
              {" "}
              <h2>GitHub Organizations and Repositories</h2>{" "}
            </a>
            <p>
              This overview serves as a resource to newcomers seeking a
              perspective of the collective community efforts (from the limited
              vantage point of a code-centric perspective).
              <br /> Note that the Layer5 community spans four GitHub
              organizations:
            </p>
            <ul>
              <li>
                {" "}
                <a href="https://github.com/layer5io">
                  <img
                    margin-left="10%"
                    width="2.5%"
                    align="left"
                    src={layer5icon}
                  />
                  &nbsp; Layer5
                </a> - emerging projects like GetNighthawk, community with  MeshMates, a catch-all org.
              </li>
              <li>
                <a href="http://github.com/meshery">
                  {" "}
                  <img
                    margin="10%"
                    width="2%"
                    align="left"
                    align="bottom"
                    src={meshery}
                    alt="Meshery"
                  />
                  {"   "}
                  &nbsp; Meshery
                </a> -  Meshery and its components Meshery Operator <img src={MesheryOperator} className="project-description-icon" /> and MeshSync <img src={MeshSync} className="project-description-icon" />.
              </li>
              <li>
                {" "}
                <a href="http://github.com/service-mesh-performance">
                  <img
                    margin="10%"
                    width="2.5%"
                    align="left"
                    align="bottom"
                    src={servicemeshperformance}
                  />
                  &nbsp; Service Mesh Performance
                </a> - Service Mesh Performance specification and site.
              </li>

              <li>
                <a href="http://github.com/service-mesh-patterns">
                  <img
                    margin="10%"
                    width="2%"
                    align="left"
                    align="bottom"
                    src="https://user-images.githubusercontent.com/85789734/134711787-5bf0aeaa-008c-4e2c-a81e-e05f3dcfb54c.png"
                  />{" "}
                  &nbsp; Service Mesh Patterns
                </a> - a collection of curated patterns of service mesh use cases compatible with Meshery.
              </li>
            </ul>

            <a id="Frontend Projects">
              {" "}
              <h2>Frontend Projects</h2>{" "}
            </a>
            {frontendProjects.map((frontendProjects) => {
              const { category } = frontendProjects;
              return (
                <table className="frontendTable" key={category}>
                  <thead>
                    <tr>
                      <th className="linkscol">Site</th>
                      <th>Project</th>
                      <th>Framework</th>
                      <th className="linkscol">Repo</th>
                    </tr>
                  </thead>
                  {frontendProjects.subdata.map((subdata) => {
                    const {
                      project,
                      language,
                      repository,
                      site,
                      image,
                      description,
                    } = subdata;
                    return (
                      <tbody key={project}>
                        <tr>
                          <td>
                            <a href={site} target="_blank" rel="noreferrer">
                              <img className="site-icon" src={image} />
                            </a>
                          </td>
                          <td>{project}</td>
                          <td>{language}</td>
                          <td>
                            <a
                              href={repository}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img className="github-icon" src={github} />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              );
            })}

            <a id="Backend Projects">
              {" "}
              <h2>Backend Projects</h2>{" "}
            </a>

            {backendProjects.map((backendProjects) => {
              const { category } = backendProjects;
              return (
                <table key={category}>
                  <thead>
                    <tr>
                      <th>{category}</th>
                      <th>Language</th>
                      <th>Description</th>
                      <th className="linkscol">Repo</th>
                    </tr>
                  </thead>
                  {backendProjects.subdata.map((subdata) => {
                    const { project, image, language, description, repository } = subdata;
                    return (
                      <tbody key={project}>
                        <tr>
                          <td>
                            <img className="site-icon inline" src={image} />&nbsp;{project}</td>
                          <td>{language}</td>
                          <td>{description}</td>
                          <td>
                            <a
                              href={repository}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img className="github-icon" src={github} />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              );
            })}
          </div>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default Repository;
