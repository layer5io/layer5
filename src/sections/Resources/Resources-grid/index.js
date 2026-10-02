import React, { useState } from "react";
import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
import Pagination from "./paginate";
import SearchBox from "../../../reusecore/Search";
import EmptyResources from "../Resources-error/emptyStateTemplate";

import { ResourcePageWrapper } from "./resourceGrid.style";

const toTimestamp = (raw) => {
  if (!raw) return 0;
  const str = String(raw).trim();
  const iso = str.replace(
    /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})\s*([+-])(\d{2}):?(\d{2})$/,
    "$1T$2$3$4:$5",
  );
  let t = new Date(iso).getTime();
  if (Number.isNaN(t)) {
    t = new Date(str.replace(/(\d)(st|nd|rd|th)\b/g, "$1")).getTime();
  }
  return Number.isNaN(t) ? 0 : t;
};

const ResourceGrid = (props) => {
  const hasQuery = Boolean(props.searchQuery);
  const [sortOption, setSortOption] = useState(null);
  const effectiveSort = sortOption ?? (hasQuery ? "relevance" : "latest");

  const sortResources = (nodes) => {
    if (effectiveSort === "relevance" && hasQuery) return nodes;

    const direction = effectiveSort === "oldest" ? 1 : -1;
    return nodes
      .slice()
      .sort(
        (a, b) =>
          direction *
          (toTimestamp(a.frontmatter.date) - toTimestamp(b.frontmatter.date)),
      );
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
              value={effectiveSort}
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
