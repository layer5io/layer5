import React from 'react';
import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
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
            <div className="resource-grid-wrapper">
              <Row>
                {currentPosts?.map(({ id, frontmatter, fields }) => (
                  <Col key={id} xs={12} sm={6} xl={4}>
                    <Card frontmatter={frontmatter} fields={fields}/>
                  </Col>
                ))}
              </Row> 
            </div>
            <Pagination postsPerPage={props.postsPerPage} totalPosts={props.data.length} currentPage={props.currentPage} paginate={paginate} />
    </ResourcePageWrapper>
  );
};

export default ResourceGrid;
