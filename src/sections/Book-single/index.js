import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";

import BookSinglePageWrapper from "./BookSingle.style.js";

const BookSingle = ({data}) => {
    const { frontmatter, body } = data.mdx;
    return (
        <BookSinglePageWrapper>
            <PageHeader
                title={frontmatter.title}
                author={{ name: frontmatter.author }}
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
        </BookSinglePageWrapper>
    );
};

export default BookSingle;
