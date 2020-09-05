import React from "react";
import { Link } from "gatsby";
import Image from "../../components/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";

import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";

import { NewsPageWrapper } from "./NewsGrid.style";

const NewsGrid = ({data}) => {
    return (
        <NewsPageWrapper>
            <PageHeader title="News" />
            <div className="news-page-wrapper">
                <Container>
                    <div className="news-grid-wrapper">
                        <Row>
                            {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                                <Col xs={12} sm={6} lg={4} key={id}>
                                    <div className="post-block">
                                        <div className="post-thumb-block">
                                            <Link className="anchor" to={fields.slug}>
                                                <Image {...frontmatter.thumbnail} imgStyle={{ objectFit: "contain" }}/>
                                            </Link>
                                        </div>
                                        <div className="post-content-block">
                                            <h2 className="post-title">
                                                <Link className="anchor" to={fields.slug}>
                                                    {frontmatter.title}
                                                </Link>
                                            </h2>
                                            <div className="post-meta-block">
                                                <span>By: {frontmatter.author}</span>
                                                <span className="divider">/</span>
                                                <span>{frontmatter.date}</span>
                                            </div>
                                            <Link className="readmore-btn" to={fields.slug}>
                                                see more <IoIosArrowRoundForward />
                                            </Link>
                                            {frontmatter.eurl && (
                                                <a className="readmore-btn" href={frontmatter.eurl}>
                                                     <BiLinkExternal />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </NewsPageWrapper>
    );
};

export default NewsGrid;
