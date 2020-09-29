import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";

import CareerPageWrapper from "./CareerSingle.style";

const CareerSingle = ({data}) => {
    const { frontmatter, body } = data.mdx;

    return (
        <CareerPageWrapper>
            <PageHeader title={frontmatter.title} />
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
        </CareerPageWrapper>
    );
};

export default CareerSingle;
