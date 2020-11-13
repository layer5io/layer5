import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { ProjectPageWrapper } from "./projectGrid.style";

import Image from "../../components/image";

const ProjectPage = ({data}) => {
    return (
        <ProjectPageWrapper>
            <PageHeader title="Projects" path="Projects"/>
            <div className="project-page-wrapper">
                <Container>
                    <Row>
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
