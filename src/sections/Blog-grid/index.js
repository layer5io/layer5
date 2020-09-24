import React from "react";
import BlogViewToolTip from "../../components/blog-view-tooltip";
import Card from "../../components/Card";
import { Container, Row, Col } from "../../reusecore/Layout";

import PageHeader from "../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import { BlogPageWrapper } from "./blogGrid.style";

const BlogGrid = ({data, isListView, setListView, setGridView}) => {
    return (
        <BlogPageWrapper>
            <PageHeader title="Blogs" />
            <div className="blog-page-wrapper">
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            <BlogViewToolTip isListView={isListView} setListView={setListView}
                                setGridView ={setGridView}
                            />
                            <div className="blog-grid-wrapper">
                                <Row>
                                    {data.allMdx.nodes.map(({id, frontmatter, fields }) => (
                                        <Col key={id} xs={12} sm={6} >
                                            <Card frontmatter={frontmatter} fields={fields}/>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Sidebar tags={data.allMdx.group} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </BlogPageWrapper>
    );
};

export default BlogGrid;
