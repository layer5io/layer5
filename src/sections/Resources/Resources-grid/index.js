import React, { useState } from "react";
import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
import Pagination from "./paginate";
import SearchBox from "../../../reusecore/Search";
import EmptyResources from "../Resources-error/emptyStateTemplate";

import { ResourcePageWrapper } from "./resourceGrid.style";

const getTime = (node) => {
  const t = new Date(node.fields?.dateForSort).getTime();
  return Number.isNaN(t) || t <= 0 ? null : t;
};

const ResourceGrid = (props) => {
  const hasQuery = Boolean(props.searchQuery);
  const [choice, setChoice] = useState(null);
  const effectiveSort =
    choice && choice.hasQuery === hasQuery
      ? choice.value
      : hasQuery
        ? "relevance"
        : "latest";

  const sortResources = (nodes) => {
    if (effectiveSort === "relevance") return nodes;

    const direction = effectiveSort === "oldest" ? 1 : -1;
    return nodes.slice().sort((a, b) => {
      const ta = getTime(a);
      const tb = getTime(b);
      if (ta === null && tb === null) return 0;
      if (ta === null) return 1;
      if (tb === null) return -1;
      return direction * (ta - tb);
    });
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
                setChoice({ value: e.target.value, hasQuery });
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
