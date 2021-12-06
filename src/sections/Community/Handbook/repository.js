import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";
import github from "../../../assets/images/socialIcons/github.svg";
import layer5icon from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
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
                </a>
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
                </a>
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
                </a>
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
                </a>
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
                      <th>Project</th>
                      <th>Framework</th>
                      <th className="linkscol">Site</th>
                      <th className="linkscol">GitHub</th>
                    </tr>
                  </thead>
                  {frontendProjects.subdata.map((subdata) => {
                    const {
                      project,
                      language,
                      repository,
                      site,
                      image,
                    } = subdata;
                    return (
                      <tbody key={project}>
                        <tr>
                          <td>{project}</td>
                          <td>{language}</td>
                          <td>
                            <a href={site} target="_blank" rel="noreferrer">
                              <img className="site-icon" src={image} />
                            </a>
                          </td>
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
                      <th className="linkscol">GitHub</th>
                    </tr>
                  </thead>
                  {backendProjects.subdata.map((subdata) => {
                    const { project, language, repository } = subdata;
                    return (
                      <tbody key={project}>
                        <tr>
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
          </div>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default Repository;
