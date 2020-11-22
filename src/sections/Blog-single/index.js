import React from "react";
import { useStaticQuery, graphql ,Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import slugify from "../../utils/slugify";

import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import RelatedPosts from "../Related-Posts";

import BlogPageWrapper from "./blogSingle.style";

const BlogSingle = ({data}) => {
    const { frontmatter, body } = data.mdx;
    const allTags = useStaticQuery(graphql`
        query tagsQuery {
            allMdx(
                filter: { frontmatter: { published: { eq: true } } }
            ) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);

    return (
        <BlogPageWrapper>
            <PageHeader
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                categories={frontmatter.tags}
                author={{ name: frontmatter.author }}
                thumbnail={frontmatter.thumbnail}
            />
            <div className="single-post-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} lg={12}>
                            <Row>
                                <Col xs={12}>
                                    <div className="single-post-block">
                                        <MDXRenderer>{body}</MDXRenderer>
                                        <div className="post-info-block">
                                            <div className="tags">
                                                <span>Tags:</span>
                                                {frontmatter.tags && frontmatter.tags.map(tag => (
                                                    <Link key={`${frontmatter.title}-${tag}`}
                                                        to={`/blog/tag/${slugify(tag)}`}>{tag}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <RelatedPosts/>
                </Container> 
            </div>
        </BlogPageWrapper>
    );
};

export default BlogSingle;
