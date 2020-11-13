import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Image from "../../components/image";

import { ProgramsPageWrapper } from "./ProgramGrid.style";

const ProgramsGrid = ({hide_path}) => {
    const data = useStaticQuery(
        graphql`
            query allPrograms {
                allMdx(
                    sort: { fields: [frontmatter___title], order: ASC }
                    filter: { fields: { collection: { eq: "programs" } }, frontmatter: { published: { eq: true } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            thumbnail{
                                childImageSharp{
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                                extension
                                publicURL
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        `
    );

    let path = hide_path ? "" : "Programs";
    return (
        <ProgramsPageWrapper>
            <PageHeader title="Programs" path={path} />
            <div className="programs-page-wrapper">
                <Container>
                    <div className="program-grid-wrapper">
                        <Row>
                            {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={3} key={id}>
                                    <Link to={fields.slug}>
                                        <div className="program">
                                            <div className="icon">
                                                <Image
                                                    {...frontmatter.thumbnail}
                                                    imgStyle={{ objectFit: "contain" }}
                                                    alt={frontmatter.title}
                                                />
                                            </div>
                                            <h3>{frontmatter.title}</h3>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </ProgramsPageWrapper>
    );
};

export default ProgramsGrid;
