import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { ProjectWrapper } from "./projectGrid.style";

import Image from "../../components/image";
import meshery from "../../assets/images/app/projects/meshery-logo-light.png";
import landscape from "../../assets/images/app/projects/landscape.png";
import smi from "../../assets/images/app/projects/smi.svg";
import smp from "../../assets/images/smp/icon/smp-dark.svg";
import imagehub from "../../assets/images/image-hub/layer5-image-hub.png"; 

const ProjectPage = () => {
    return (
        <ProjectWrapper>
            <PageHeader title="Projects" path="Projects"/>
            <div className="project-page-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} sm={6} lg={4}>
                            <Link to="/meshery">
                                <div className="project__block__inner">
                                    <img src={meshery}
                                        alt="Meshery"
                                    />
                                    <h5>Meshery</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <Link to="/landscape">
                                <div className="project__block__inner">
                                    <img src={landscape}
                                        alt="Landscape"
                                    />
                                    <h5>Landscape</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <Link to="/projects/image-hub">
                                <div className="project__block__inner">
                                    <img src={imagehub}
                                        alt="Image Hub"
                                    />
                                    <h5>Image Hub</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <Link to="/projects/service-mesh-interface-conformance">
                                <div className="project__block__inner">
                                    <img src={smi}
                                        alt="Service Mesh Interface Conformance" 
                                    />
                                    <h5>Service Mesh Interface Conformance</h5>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <Link to="/projects/service-mesh-performance">
                                <div className="project__block__inner">
                                    <img src={smp}
                                        alt="Service Mesh Performance" 
                                    />
                                    <h5>Service Mesh Performance</h5>
                                </div>
                            </Link>
                        </Col>
                        {/* {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                            <Col xs={12} sm={6} lg={4} key={id}>
                                <Link to={fields.slug}>
                                    <div className="project__block__inner">
                                        <Image
                                            {...frontmatter.thumbnail}
                                            imgStyle={{ objectFit: "contain" }}
                                            alt={frontmatter.title}
                                        />
                                        <h5>{frontmatter.title}</h5>
                                    </div>
                                </Link>
                            </Col>
                        ))} */}
                    </Row>
                </Container>
            </div>
        </ProjectWrapper>
    );
};

export default ProjectPage;
