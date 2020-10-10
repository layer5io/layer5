import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, Row, Col } from "../../reusecore/Layout";

import WorkshopPageWrapper from "./WorkshopSingle.style.js";

const WorkshopSingle = ({data}) => {
    const { body } = data.mdx;

    return (
        <WorkshopPageWrapper>
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
        </WorkshopPageWrapper>
    );
};

export default WorkshopSingle;
