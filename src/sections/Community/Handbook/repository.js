import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";
import github from "../../../assets/images/socialIcons/github.svg";
import layer5icon from "../../../assets/images/layer5/5 icon/svg/dark/5-dark-bg.svg";
import hawkIcon from "../../../assets/images/getnighthawk/icon-only/SVG/getnighthawk-logo.svg";
import meshmateicon from "../../../assets/images/meshmate/meshmate-icon.svg";
import servicemeshperformance from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import mesheryoperatoricon from "../../../assets/images/meshery-operator/meshery-operator.svg";
import mesherysyncicon from "../../../assets/images/meshsync/meshsync.svg";

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
            <h2>GitHub Organizations and Repositories</h2>
            <p>
              This overview serves as a resource to newcomers seeking a
              perspective of the collective community efforts (from the limited
              vantage point of a code-centric perspective).
              <br /> Note that the Layer5 community spans four GitHub
              organizations:
            </p>
            <p>
              <img
                margin-left="10%"
                width="2.5%"
                align="auto"
                src={layer5icon}
              />
              {"  "}
              emerging projects like GetNighthawk{" "}
              <img width="2.5%" src={hawkIcon} /> , community with MeshMates{" "}
              <img width="2.5%" src={meshmateicon} /> , catch-all org, “home
              base”, so to speak.
            </p>
            <p>
              <img className="channels-img" src={servicemeshperformance} />{" "}
              Service Mesh Performance specification <br />
              <img margin="10%" width="2%" src={meshery} alt="Meshery" />{" "}
              Meshery and its components Meshery Operator{" "}
              <img width="2%" src={mesheryoperatoricon} /> and MeshSync{" "}
              <img width="2%" src={mesherysyncicon} /> <br />{" "}
              <img
                margin="10%"
                width="2%"
                align="bottom"
                src="https://user-images.githubusercontent.com/85789734/134711787-5bf0aeaa-008c-4e2c-a81e-e05f3dcfb54c.png"
              />
              {"  "}a collection of curated patterns of service mesh use cases
              compatible with Meshery.
            </p>

            <h2>Frontend Projects</h2>
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

            <h2>Backend Projects</h2>

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
        </Container>
      </div>
    </HandbookWrapper>
  );
};

export default Repository;
