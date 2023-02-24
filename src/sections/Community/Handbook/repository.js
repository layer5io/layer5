import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";
import github from "../../../assets/images/socialIcons/github.svg";
import layer5icon from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import MeshSync from "../../../assets/images/meshsync/meshsync.svg";
import servicemeshperformance from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import servicemeshpattern from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import { Link } from "gatsby";

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
            <a id="top">
              <h2>GitHub Organizations and Repositories</h2>
            </a>
    
            <p>
              A brief introduction to all of the Github repositories of Layer5 organization is offered below. This overview serves as a resource to newcomers seeking a perspective of the collective community efforts (from a code-centric perspective). See <a href="https://docs.google.com/document/u/0/d/1FzX-C_xy9hZ3Eu9dcCE0unhFV5LRUrb5YLn_MGYuG6Y/edit">Layer5 GitHub Process</a> for more related information.
            </p>

            <p>
              This overview serves as a resource to newcomers seeking a
              perspective of the collective community efforts (from the limited
              vantage point of a code-centric perspective).
              <br />
              Note that the Layer5 community spans four GitHub
              organizations:
            </p>

            <ul className="project-org-list">
              <li>
                <a href="https://github.com/layer5io">
                  <img
                    src={layer5icon}
                    alt="layer5 icon"
                  />
                  &nbsp; Layer5
                </a>
                  - emerging projects like GetNighthawk, community with  MeshMates, a catch-all org.
              </li>

              <li>
                <a href="https://github.com/meshery">
                  <img
                    src={meshery}
                    alt="meshery icon"
                  />
                  &nbsp; Meshery
                </a>
                  -  Meshery and its components Meshery Operator
                <img
                  src={MesheryOperator}
                  alt="meshery operator icon"
                  style={{ marginLeft: ".3rem" }}
                /> and MeshSync
                <img
                  src={MeshSync}
                  alt="mesh sync icon"
                  style={{ marginLeft: ".3rem" }}
                />.
              </li>

              <li>
                <a href="https://github.com/service-mesh-performance">
                  <img
                    src={servicemeshperformance}
                    alt="service mesh performance icon"
                  />
                  &nbsp; Service Mesh Performance
                </a>
                  - Service Mesh Performance specification and site.
              </li>

              <li>
                <a href="https://github.com/service-mesh-patterns">
                  <img
                    src={servicemeshpattern}
                    alt="service mesh patterns icon"
                  />
                  &nbsp; Service Mesh Patterns
                </a>
                  - a collection of curated patterns of service mesh use cases compatible with Meshery.
              </li>
            </ul>

            <a id="Frontend Projects">
              <h2>Frontend Projects</h2>
            </a>

            {frontendProjects.map((frontendProject, index) => {
              const { category } = frontendProject;
              return (
                <div className="table-container" key={index}>
                  <table className="frontendTable" key={category}>
                    <thead>
                      <tr>
                        <th className="linkscol">Site</th>
                        <th>Project</th>
                        <th>Framework</th>
                        <th>Maintainers</th>
                        <th className="linkscol">Repo</th>
                      </tr>
                    </thead>
                    {frontendProject.subdata.map((subdata) => {
                      const {
                        project,
                        language,
                        repository,
                        maintainers_name,
                        site,
                        image,
                        link,
                      } = subdata;
                      return (
                        <tbody key={project}>
                          <tr>
                            <td>
                              <a href={site} target="_blank" rel="noreferrer">
                                <img className="site-icon" src={image} alt="site-icon" />
                              </a>
                            </td>
                            <td>{project}</td>
                            <td>{language}</td>
                            <td>
                              {maintainers_name.map((mname, index) => {
                                return (
                                  <Link to={link[index]} key={index}>
                                    <span>{index > 0 ? ", " : ""}</span>{mname}
                                  </Link>
                                );
                              })}
                            </td>
                            <td>
                              <a
                                href={repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img className="github-icon" src={github} alt="github-icon" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              );
            })}
            <a id="Backend Projects">
              <h2>Backend Projects</h2>
            </a>

            {backendProjects.map((backendProject, index) => {
              const { category } = backendProject;
              return (
                <div className="table-container" key={index}>
                  <table key={category}>
                    <thead>
                      <tr>
                        <th>{category}</th>
                        <th>Language</th>
                        <th>Description</th>
                        <th className="linkscol">Repo</th>
                      </tr>
                    </thead>
                    {backendProject.subdata.map((subdata) => {
                      const { project, image, language, description, repository } = subdata;
                      return (
                        <tbody key={project}>
                          <tr>
                            <td>
                              <img className="site-icon inline" src={image} alt="project" />&nbsp;{project} </td>
                            <td>{language}</td>
                            <td>{description}</td>
                            <td>
                              <a
                                href={repository}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img className="github-icon" src={github} alt="github-icon" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              );
            })}
            <TocPagination />
          </div>
        </Container>
        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default Repository;
