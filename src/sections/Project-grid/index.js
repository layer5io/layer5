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
                    <Row>
                        <Col xs={12} sm={4}>
                        <Link to="#">
                            <div className="project__block__inner">
                                <img src={projectImage1} alt="appion project" />
                                <h2>Landscape</h2>
                                <img src={Icon} className="arrow" alt="appion app" />
                            </div>
                        </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Link to="#">  
                            <div className="project__block__inner">
                                <div><img src={projectImage2} alt="appion project" /></div>
                                <div className="test">
                                <h2>Performance</h2>
                                <img src={Icon} className="arrow" alt="appion app" />
                                </div>
                            </div>
                        </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Link to="#">
                            <div className="project__block__inner">
                                <img src={projectImage3} alt="appion project" />
                                <h2>Meshery</h2>
                                <img src={Icon} className="arrow" alt="appion app" />
                            </div>
                        </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                        <Link to="#">
                            <div className="project__block__inner">
                                <img src={projectImage1} alt="appion project" />
                                <h2>Landscape</h2>
                                <img src={Icon} className="arrow" alt="appion app" />
                            </div>
                        </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Link to="#">  
                            <div className="project__block__inner">
                                <div><img src={projectImage2} alt="appion project" /></div>
                                <div className="test">
                                <h2>Performance</h2>
                                <img src={Icon} className="arrow" alt="appion app" />
                                </div>
                            </div>
                        </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Link to="#">
                            <div className="project__block__inner">
                                <img src={projectImage3} alt="appion project" />
                                <h2>Meshery</h2>
                                <img src={Icon} className="arrow" alt="appion app" />
                            </div>
                        </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </ProjectPageWrapper>
    );
};

export default ProjectPage;