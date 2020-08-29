import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import BlogViewToolTip from "../../components/blog-view-tooltip";

import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import Image from "../../components/image";

import { BlogPageWrapper } from "./blogList.style";

const BlogList = ({data, isListView, setListView, setGridView, pageContext}) => {
    const allTags = pageContext ? pageContext.allTags : data.allMdx.group;
    const tag = pageContext ? pageContext.tag : null;
    const {totalCount, nodes } = data.allMdx;
    const header = tag ? `${totalCount} blog${
        totalCount === 1 ? "" : "s"
    } tagged with "${tag}"` : "Blogs";

    return (
        <BlogPageWrapper>
            <PageHeader title={header} />
            <div className="blog-list-wrapper">
                <Container>
                    <Row>
                        <Col sm={12} md={8}>
                            { !pageContext && <BlogViewToolTip
                                isListView={isListView} setListView={setListView} setGridView ={setGridView}
                            />}
                            <Row>
                                {nodes.map(({id, frontmatter, fields}) => (
                                    <Col xs={12} key={id}>
                                        <div className="post-block list">
                                            <div className="post-thumb-block">
                                                <Image {...frontmatter.thumbnail} imgStyle={{ objectFit: "contain" }}/>
                                            </div>
                                            <h2 className="post-title">
                                                <Link to={fields.slug}>
                                                    {frontmatter.title}
                                                </Link>
                                            </h2>
                                            <p className="post-entry">
                                                <span>{frontmatter.date}</span>
                                                <span className="pull-right">By: {frontmatter.author}</span>
                                            </p>
                                            <Link to={fields.slug} className="readmore-btn">
                                                see more <IoIosArrowRoundForward />
                                            </Link>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col sm={12} md={4}>
                            <Sidebar tags={allTags}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BlogPageWrapper>
    );
};

export default BlogList;
