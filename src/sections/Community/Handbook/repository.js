import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";
import github from "../../../assets/images/socialIcons/github.svg";

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
            <h2>Purpose</h2>
            <p>
              This overview serves as resources to newcomers seeking a
              perspective of the collective community efforts (from the limited
              vantage point of a code-centric perspective).
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
                            <a href={repository} target="_blank" rel="noreferrer">
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
                            <a href={repository} target="_blank" rel="noreferrer">
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
