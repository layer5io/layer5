import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { ProjectPageWrapper } from "./projectGrid.style";

import projectImage1 from "../../assets/images/app/projects/landscape.png";
import projectImage2 from "../../assets/images/app/projects/smp.png";
import projectImage3 from "../../assets/images/app/projects/meshery-logo-light.png";

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
                                    <h1>Landscape</h1>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Link to="/projects/service-mesh-performance">  
                                <div className="project__block__inner">
                                    <div><img src={projectImage2} alt="appion project" /></div>
                                    <h1>Performance</h1>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Link to="#">
                                <div className="project__block__inner">
                                    <img src={projectImage3} alt="appion project" />
                                    <h1>Meshery</h1>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <Link to="#">
                                <div className="project__block__inner">
                                    <img src={projectImage1} alt="appion project" />
                                    <h1>Landscape</h1>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Link to="/projects/service-mesh-performance">   
                                <div className="project__block__inner">
                                    <div><img src={projectImage2} alt="appion project" /></div>
                                    <div className="test">
                                        <h1>Performance</h1>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Link to="#">
                                <div className="project__block__inner">
                                    <img src={projectImage3} alt="appion project" />
                                    <h1>Meshery</h1>
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
