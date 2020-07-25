import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";

import projectImage1 from "../../assets/images/app/projects/landscape.png";
import projectImage2 from "../../assets/images/app/projects/smps.png";
import projectImage3 from "../../assets/images/app/projects/meshery-logo-light.png";
import projectImage4 from "../../assets/images/app/projects/meshery-logo-light.png";
import Icon from "../../assets/images/app/projects/arrow.svg";

import ProjectItemWrapper from "./projectSection.style";

const Projects = () => {
    return (
        <ProjectItemWrapper id="projects">
            <Container>
                <Row Vcenter={true}>
                    <Col xs={12} sm={6}>
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
                    </Col>
                    <Col xs={12} sm={6} className="project-content-wrap">
                        <SectionTitle
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            <h4>Project</h4>

                            <h2>
                                <span>Uses for this app </span> In the perfect project.
                            </h2>
                        </SectionTitle>
                        <p className="project-text">
              One differences leaders, management-science so, best treat. Still
              problems upper and anger devoting out. With hiding their boss
              phase drops. A strenuous in ticket get write it by proposal.
                        </p>
                        <VintageBox
                            right={true}
                            vintageTwo={true}
                            position="relative"
                        >
                            <Button className="project-btn">Learn More</Button>
                        </VintageBox>
                    </Col>
                </Row>
            </Container>
        </ProjectItemWrapper>
    );
};

export default Projects;
