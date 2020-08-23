import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { ProjectPageWrapper } from "./projectGrid.style";

import projectImage1 from "../../assets/images/app/projects/landscape.png";
import projectImage2 from "../../assets/images/app/projects/smp.png";
import projectImage3 from "../../assets/images/app/projects/meshery-logo-light.png";
import projectImage4 from "../../assets/images/app/projects/meshery-logo-light.png";
import Icon from "../../assets/images/app/projects/arrow.svg";

const ProjectPage = () => {
    return (
        <ProjectPageWrapper>
            <PageHeader title="Projects" />
            <div className="project-page-wrapper">
                <Container>
                    <div className="project__block__wrap">
                        <div className="project__block">
                            <div className="project__block__inner">
                                <img src={projectImage1} alt="appion project" />
                                <h3>Landscape</h3>
                                <p>Ecosystem</p>
                                <Link to="#">
                                    <img src={Icon} alt="appion app" />
                                </Link>
                            </div>
                            <div className="project__block__inner">
                                <img src={projectImage2} alt="appion project" />
                                <h3>Performance</h3>
                                <p>News Feed</p>
                                <Link to="#">
                                    <img src={Icon} alt="appion app" />
                                </Link>
                            </div>
                        </div>
                        <div className="project__block right">
                            <div className="project__block__inner">
                                <img src={projectImage3} alt="appion project" />
                                <h3>Meshery</h3>
                                <p>Management</p>
                                <Link to="#">
                                    <img src={Icon} alt="appion app" />
                                </Link>
                            </div>
                            <div className="project__block__inner">
                                <img src={projectImage4} alt="appion project" />
                                <h3>twitter</h3>
                                <p>News Feed</p>
                                <Link to="#">
                                    <img src={Icon} alt="appion app" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </ProjectPageWrapper>
    );
};

export default ProjectPage;