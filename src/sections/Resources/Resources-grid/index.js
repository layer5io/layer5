import React, { useState } from "react";
import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
import Pagination from "./paginate";
import SearchBox from "../../../reusecore/Search";
import EmptyResources from "../Resources-error/emptyStateTemplate";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {
  const [sortOption, setSortOption] = useState("latest");

  const sortResources = (nodes) => {
    const getDate = (node) =>
      node.frontmatter.date
        ? new Date(node.frontmatter.date.replace(/(st|nd|rd|th),/g, ""))
        : new Date(0);

    if (sortOption === "relevance" && !props.searchQuery) {
      const sorted = nodes.slice();
      sorted.sort((first, second) => {
        const d1 = getDate(first);
        const d2 = getDate(second);
        return d2 - d1;
      });
      return sorted;
    }
    if (sortOption === "relevance") {
      return nodes;
    }
    const sorted = nodes.slice();
    sorted.sort((first, second) => {
      const d1 = getDate(first);
      const d2 = getDate(second);
      return sortOption === "oldest" ? d1 - d2 : d2 - d1;
    });
    return sorted;
  };

  // Get current posts
  const indexOfLastPost = props.currentPage * props.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
  const sortedData = sortResources(props.data);
  const searchedResource =
    props.postsPerPage > 0
      ? sortedData.slice(indexOfFirstPost, indexOfLastPost)
      : sortedData;

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
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                props.setCurrentPage(1);
              }}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="relevance">Relevance</option>
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
                fitContainer={frontmatter.type === "Article"}
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
