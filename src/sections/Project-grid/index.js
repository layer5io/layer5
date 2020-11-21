import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { ProjectPageWrapper } from "./projectGrid.style";

import Image from "../../components/image";
import meshery from "../../assets/images/app/projects/meshery-logo-light.png";
import landscape from "../../assets/images/app/projects/landscape.png";

const ProjectPage = ({data}) => {
    return (
        <ProjectPageWrapper>
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
                                    <h1>Meshery</h1>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <Link to="/landscape">
                                <div className="project__block__inner">
                                    <img src={landscape}
                                        alt="Meshery" />
                                    <h1>Landscape</h1>
                                </div>
                            </Link>
                        </Col>
                        {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                            <Col xs={12} sm={6} lg={4} key={id}>
                                <Link to={fields.slug}>
                                    <div className="project__block__inner">
                                        <Image 
                                            {...frontmatter.thumbnail}
                                            imgStyle={{ objectFit: "contain" }}
                                            alt={frontmatter.title}
                                        />
                                        <h1>{frontmatter.title}</h1>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </ProjectPageWrapper>
    );
};

export default ProjectPage;
