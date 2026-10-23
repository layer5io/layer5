import React, { useState } from "react";
import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
import Pagination from "./paginate";
import SearchBox from "../../../reusecore/Search";
import EmptyResources from "../Resources-error/emptyStateTemplate";
import { sortResources, paginateResources } from "../../../utils/resource-sort";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {
  const query = props.searchQuery || "";
  const hasQuery = Boolean(query);
  const [choice, setChoice] = useState(null);
  const effectiveSort =
    choice && choice.query === query
      ? choice.value
      : hasQuery
        ? "relevance"
        : "latest";

  // Get current posts
  const sortedData = sortResources(props.data, effectiveSort);
  const searchedResource = paginateResources(
    sortedData,
    props.currentPage,
    props.postsPerPage
  );

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
          <div className="sortBox">
            <select
              className="sortDropdown"
              aria-label="Sort by"
              value={effectiveSort}
              onChange={(e) => {
                setChoice({ value: e.target.value, query });
                props.setCurrentPage(1);
              }}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="relevance" disabled={!hasQuery}>
                Relevance
              </option>
            </select>
          </div>
          <div className="searchBox">
            <SearchBox
              searchQuery={props.searchQuery}
              searchData={props.searchData}
              paginate={paginate}
              currentPage={props.currentPage}
              focusSearch={true}
            />
          </div>
        </div>
        <Row
          style={{
            flexWrap: "wrap",
          }}
        >
          {props.data.length < 1 && (
            <EmptyResources
              errorMessage={"No matching resources"}
              errorSubtitle={
                "Try removing one or more filters to broaden your results."
              }
            />
          )}

          {searchedResource.map(({ id, frontmatter, fields }) => (
            <Col key={id} $xs={12} $sm={6} $xl={4}>
              <Card
                frontmatter={frontmatter}
                fields={fields}
                fitContainer={
                  frontmatter.type === "Article" ||
                  frontmatter.type === "Comparison"
                }
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