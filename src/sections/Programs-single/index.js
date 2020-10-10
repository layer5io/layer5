import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";

import ProgramsPageWrapper from "./ProgramsSingle.style.js";

const ProgramsSingle = ({data}) => {
    const { frontmatter, body } = data.mdx;
    return (
        <ProgramsPageWrapper>
            <PageHeader
                title={frontmatter.title}
            />
            <div className="single-post-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} lg={12}>
                            <Row>
                                <Col xs={12}>
                                    <div className="single-post-block">
                                        <MDXRenderer>{body}</MDXRenderer>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </ProgramsPageWrapper>
    );
};

export default ProgramsSingle;
