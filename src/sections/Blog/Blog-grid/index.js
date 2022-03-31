import React,{useState} from "react";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import Card from "../../../components/Card";
import Pager from "../../../components/pager";
import { Container, Row, Col } from "../../../reusecore/Layout";

import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";
import RssFeedIcon from "../../../assets/images/socialIcons/rss-sign.svg";

import { BlogPageWrapper } from "./blogGrid.style";

import Paginate from "../paginate";

const BlogGrid = ({data, isListView, setListView, setGridView, pageContext}) => {
  return (
    <BlogPageWrapper>
      <PageHeader title="Blog" path="Blog" img={RssFeedIcon} feedlink="/blog/feed.xml"/>
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
                  <Col>
                    <Paginate pageContext={pageContext} isListView={isListView}/>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <Sidebar pageContext={pageContext}/>
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogGrid;
