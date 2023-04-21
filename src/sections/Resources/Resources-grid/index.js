import React from "react";
import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
import Pagination from "./paginate";
import SearchBox from "../../../reusecore/Search";
import EmptyResources from "../Resources-error/emptyStateTemplate";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {
  // Get current posts
  const indexOfLastPost = props.currentPage * props.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
  const searchedResource =
    props.postsPerPage > 0
      ? props.data.slice(indexOfFirstPost, indexOfLastPost)
      : props.data;

  const paginate = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    window.scrollTo({
      top: 200,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <ResourcePageWrapper>
      <div className="resource-grid-wrapper">
        <div className="search">
          <div className="searchBox">
            <SearchBox
              searchQuery={props.searchQuery}
              searchData={props.searchData}
              paginate={paginate}
              currentPage={props.currentPage}
            />
          </div>
        </div>
        <Row>
          {props.data.length < 1 && <EmptyResources errorMessage={"No matching resources"} errorSubtitle={"Try removing one or more filters to broaden your results."} />}

          {searchedResource.map(({ id, frontmatter, fields }) => (
            <Col key={id} xs={12} sm={6} xl={4}>
              <Card
                frontmatter={frontmatter}
                fields={fields}
              />
            </Col>
          ))}
        </Row>
      </div>
      {searchedResource.length > 0 && (
        <Pagination
          postsPerPage={props.postsPerPage}
          totalPosts={props.data.length}
          currentPage={props.currentPage}
          paginate={paginate}
        />
      )}
    </ResourcePageWrapper>
  );
};

export default ResourceGrid;
