import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
import Pagination from "./paginate";
import SearchBox from "../../../reusecore/Search";
import useDataList from "../../Blog/Blog-grid/usedataList";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {
  // Get current posts
  const indexOfLastPost = props.currentPage * props.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    props.data,
    setSearchQuery,
    searchQuery,
    ["frontmatter", "title"],
    "id"
  );
  const searchedResource = queryResults.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber) => props.setCurrentPage(pageNumber);

  return (
    <ResourcePageWrapper>
      <div className="resource-grid-wrapper">
        <div className="search">
          <div className="searchBox">
            <SearchBox searchQuery={searchQuery} searchData={searchData} />
          </div>
        </div>
        <Row>
          {queryResults.length < 1 && (
            <Col xs={12} sm={6}>
              No Resource found that matches the title "{searchQuery}" found.
            </Col>
          )}

          {searchedResource.length > 0 &&
            searchedResource.map(({ id, frontmatter, fields }) => (
              <Col key={id} xs={12} sm={6} xl={4}>
                <Card frontmatter={frontmatter} fields={fields} />
              </Col>
            ))}
        </Row>
      </div>
      {searchedResource.length > 0 && (
        <Pagination
          postsPerPage={props.postsPerPage}
          totalPosts={queryResults.length}
          currentPage={props.currentPage}
          paginate={paginate}
        />
      )}
    </ResourcePageWrapper>
  );
};

export default ResourceGrid;
