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
import Kanvas from "../../../assets/images/kanvas/icon-only/kanvas-icon.svg";

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
              Note that the Layer5 community spans <strong>five</strong> GitHub
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
                  - established projects like GetNighthawk, community with  MeshMates, a catch-all org.
              </li>

              <li>
                <a href="https://github.com/meshery">
                  <img
                    src={meshery}
                    alt="meshery icon"
                  />
                  &nbsp; Meshery
                </a>
                  -  Meshery and its components
                <img
                  src={MesheryOperator}
                  alt="Meshery Operator logo"
                  style={{ marginLeft: ".25rem",height: "1.5rem" }}
                /> Meshery Operator
                <img
                  src={MeshSync}
                  alt="mesh sync icon"
                  style={{ marginLeft: ".25rem",height: "1.5rem" }}
                /> and MeshSync.
              </li>

              <li>
                <a href="https://github.com/service-mesh-performance">
                  <img
                    src={servicemeshperformance}
                    alt="cloud native performance logo"
                  />
                  &nbsp; Cloud Native Performance
                </a>
                  - Cloud Native Performance specification and site.
              </li>
              <li>
                <a href="https://github.com/service-mesh-patterns">
                  <img
                    src={servicemeshpattern}
                    alt="cloud native patterns logo"
                  />
                  &nbsp; Cloud Native Patterns
                </a>
                  - a collection of curated patterns of cloud native use cases compatible with Meshery.
              </li>
              <li>
                <a href="https://github.com/layer5labs">
                  <img
                    src={layer5icon}
                    alt="Layer5 logo"
                  />
                  &nbsp; Layer5 Labs
                </a>
                  - emerging projects and Meshery extensions, like
                <img
                  src={Kanvas}
                  alt="Kanvas logo"
                  style={{ height: "1.5rem" }}
                /> Kanvas.
              </li>
            </ul>

            <details className="invite-only">
              <summary><span>A note on *program participation / *invite-only projects</span></summary>
              <p>Some of our projects, particularly those dealing with sensitive user data or playing a key role in our managed services, require a slightly more structured approach to development. This means that we invite trusted contributors, core team members and maintainers to participate directly in these projects. This ensures the highest standards of security and reliability. We're always on the lookout for talented individuals who can contribute to these efforts, so if you're interested in getting involved, keep an eye out for announcements and opportunities to showcase your skills!</p>
              <p>Contributors are frequently invited to participation in the development of these projects extensions that contain either sensitive information (e.g. Meshery Remote Provider user accounts), contain privileged access to community environments (e.g. the hosted Meshery Playground) or grant administrative rights and control (e.g. assignment of recognition badges). Participation in these projects is by invitation only and requires a high level of trust and commitment to the Layer5 community.</p>
              <p>Hundreds of  contributors have participated in these projects, and many have gone on to become maintainers and core team members. We want you to be one of them! If you are interested in participating in these projects, please reach out to the project maintainers or the Layer5 community team.</p>
              <ul>Projects listed with *program participation required:
                <li>Kanvas</li>
                <li>Layer5 Cloud</li>
              </ul>
            </details>
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
                        accessRequired,
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
                              <div className="accessRequired"> { accessRequired != "" ? accessRequired : ""}</div>
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
                        <th>Maintainers</th>
                        <th className="linkscol">Repo</th>
                      </tr>
                    </thead>
                    {backendProject.subdata.map((subdata) => {
                      const { project,image,language,description,repository,link,maintainers_name,accessRequired } = subdata;
                      const smpClass = project === "SMP Action";
                      const siteIconClasses = smpClass ? "site-icon inline smp-action" : "site-icon inline";
                      return (
                        <tbody key={project}>
                          <tr className={accessRequired === "*archived" ? "archived-project" : ""}>
                            <td>
                              <img className={siteIconClasses} src={image} alt="project" />&nbsp;{project} </td>
                            <td>{language}</td>
                            <td>{description}</td>
                            <td>
                              {maintainers_name?.map((mname, index) => {
                                return (
                                  <Link to={link[index]} key={index}>
                                    <span>{index > 0 ? ", " : ""}</span>
                                    {mname}
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
                              <div className="accessRequired"> { accessRequired != "" ? accessRequired : ""}</div>
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
