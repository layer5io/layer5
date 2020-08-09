import React from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { slugify } from "../../utils"
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import BlogPageWrapper from "./blogSingle.style";

const BlogSingle = ({data}) => {
    const { frontmatter, body } = data.mdx;
    return (
        <BlogPageWrapper>
            <PageHeader
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                categories={frontmatter.tags}
                author={{ name: frontmatter.author }}
            />
            <div className="single-post-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            <Row>
                                <Col xs={12}>
                                    <div className="single-post-block">
                                        <MDXRenderer>{body}</MDXRenderer>
                                        <div className="post-info-block">
                                            <div className="tags">
                                                <span>Tags:</span>
                                                {frontmatter.tags && frontmatter.tags.map(tag => (
                                                    <Link key={`${frontmatter.title}-${tag}`}
                                                          to={`/blogs/tag/${slugify(tag)}`}>{tag}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Sidebar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </BlogPageWrapper>
    );
};

export default BlogSingle;
