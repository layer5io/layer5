import React, { useState, useEffect } from 'react';
import Card from "../../../components/Card";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Pagination from './paginate';

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {
  // Get current posts
  const indexOfLastPost = props.currentPage * props.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
  const currentPosts = props.data.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = pageNumber => props.setCurrentPage(pageNumber);

  return (
    <ResourcePageWrapper>
      <div className="resource-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={12}>
              <div className="resource-grid-wrapper">
                <Row>
                  {currentPosts?.map(({ id, frontmatter, fields }) => (
                    <Col key={id} xs={12} sm={6} md={4}>
                      <Card frontmatter={frontmatter} fields={fields}/>
                    </Col>
                  ))}
                </Row> 
              </div>
            </Col>
            <div className="resource-pagination-wrapper">
            <Pagination
        postsPerPage={props.postsPerPage}
        totalPosts={props.data.length}
        currentPage={props.currentPage}
        paginate={paginate}
      /></div>
          </Row>
        </Container>
      </div>
    </ResourcePageWrapper>
  );
};

export default ResourceGrid;
