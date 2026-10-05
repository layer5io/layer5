import React, { useState } from "react";
import { HiOutlineChevronUp } from "@react-icons/all-files/hi/HiOutlineChevronUp";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { FiFilter } from "@react-icons/all-files/fi/FiFilter";
import { options } from "./options";
import { graphql, useStaticQuery } from "gatsby";

import ResourceNavigationWrapper from "./filters.style";

const createCountMap = (group) =>
  (group || []).reduce((acc, { fieldValue, totalCount }) => {
    acc[fieldValue] = totalCount;
    return acc;
  }, {});

const Navigation = (props) => {
  const counting = useStaticQuery(graphql`
    query allFilters {
      type: allMdx(
        filter: {
          fields: {
            collection: { in: ["blog", "resources", "news", "events"] }
          }
          frontmatter: { published: { eq: true }, resource: { eq: true } }
        }
      ) {
        group(field: { frontmatter: { type: SELECT } }) {
          fieldValue
          totalCount
        }
      }
      product: allMdx(
        filter: {
          fields: {
            collection: { in: ["blog", "resources", "news", "events"] }
          }
          frontmatter: { published: { eq: true }, resource: { eq: true } }
        }
      ) {
        group(field: { frontmatter: { product: SELECT } }) {
          fieldValue
          totalCount
        }
      }
      technology: allMdx(
        filter: {
          fields: {
            collection: { in: ["blog", "resources", "news", "events"] }
          }
          frontmatter: { published: { eq: true }, resource: { eq: true } }
        }
      ) {
        group(field: { frontmatter: { technology: SELECT } }) {
          fieldValue
          totalCount
        }
      }
      mesh: allMdx(
        filter: {
          fields: {
            collection: { in: ["blog", "resources", "news", "events"] }
          }
          frontmatter: { published: { eq: true }, resource: { eq: true } }
        }
      ) {
        group(field: { frontmatter: { mesh: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const [expandFilter, setExpandFilter] = useState(false);
  const [expandType, setExpandType] = useState(true);
  const [expandProduct, setExpandProduct] = useState(true);
  const [expandTech, setExpandTech] = useState(true);
  const [expandMesh, setExpandMesh] = useState(true);

  const data = React.useMemo(() => options, []);
  let typeOptions = data.filter((data) => data.category === "Type");
  let productOptions = data.filter((data) => data.category === "Product");
  let techOptions = data.filter((data) => data.category === "Technology");
  let meshOptions = data.filter((data) => data.category === "Service Mesh");

  const typeMap = React.useMemo(
    () => createCountMap(counting.type?.group),
    [counting],
  );
  const productMap = React.useMemo(
    () => createCountMap(counting.product?.group),
    [counting],
  );
  const techMap = React.useMemo(
    () => createCountMap(counting.technology?.group),
    [counting],
  );
  const meshMap = React.useMemo(
    () => createCountMap(counting.mesh?.group),
    [counting],
  );

  return (
    <ResourceNavigationWrapper>
      <div className="filter">
        <div className="heading">
          <div
            onClick={() => {
              setExpandFilter(!expandFilter);
            }}
            className="filter-menu-icon"
          >
            {expandFilter ? (
              <button className="filter-btn">
                <IoClose className="filter-icon filter-close" />
                <span>Filters</span>
              </button>
            ) : (
              <button className="filter-btn">
                <FiFilter className="filter-icon filter-open" />
                <span>Filters</span>
              </button>
            )}
          </div>
          <p className="heading-name">
            <strong>Filters</strong>
            <button
              type="button"
              className={`${props.resources.length === 0 ? "clear-disabled" : "clear-enabled"} desk-view`}
              onClick={props.clear}
            >
              Clear Filters
            </button>
            {expandFilter ? (
              <button
                type="button"
                className={`${props.resources.length === 0 ? "clear-disabled" : "clear-enabled mob-view"}`}
                onClick={props.clear}
              >
                Clear Filters
              </button>
            ) : null}
          </p>
        </div>

        <div className="filters-boxes" id={expandFilter ? "filters-boxes" : ""}>
          <div
            className="toggle-btn"
            onClick={function () {
              setExpandType(!expandType);
            }}
          >
            <p>
              <strong>Type</strong>
            </p>
            {expandType ? (
              <HiOutlineChevronUp className="menu-icon" />
            ) : (
              <HiOutlineChevronDown className="menu-icon" />
            )}
          </div>
          <div className="list">
            <ul className={`ul ${expandType ? "ul-open" : ""}`}>
              {typeOptions[0].subdata.map((x) => {
                const totalCount = typeMap[x.value];
                const filterId = `type-${x.id}`;
                return totalCount !== undefined ? (
                  <li key={x.id}>
                    <label htmlFor={filterId}>
                      <input
                        type="checkbox"
                        id={filterId}
                        value={x.value}
                        onChange={props.handleChange}
                      />
                      <span> {x.label}</span>
                      <span className="total">({totalCount})</span>
                    </label>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          <div
            className="toggle-btn"
            onClick={function () {
              setExpandProduct(!expandProduct);
            }}
          >
            <p>
              <strong>Product</strong>
            </p>
            {expandProduct ? (
              <HiOutlineChevronUp className="menu-icon" />
            ) : (
              <HiOutlineChevronDown className="menu-icon" />
            )}
          </div>
          <div className="list">
            <ul className={`ul ${expandProduct ? "ul-open" : ""}`}>
              {productOptions[0].subdata.map((x) => {
                const totalCount = productMap[x.value];
                const filterId = `product-${x.id}`;
                return totalCount !== undefined ? (
                  <li key={x.id}>
                    <label htmlFor={filterId}>
                      <input
                        type="checkbox"
                        id={filterId}
                        value={x.value}
                        onChange={props.handleChange}
                      />
                      <span> {x.label}</span>
                      <span className="total">({totalCount})</span>
                    </label>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          <div
            className="toggle-btn"
            onClick={function () {
              setExpandTech(!expandTech);
            }}
          >
            <p>
              <strong>Technology</strong>
            </p>
            {expandTech ? (
              <HiOutlineChevronUp className="menu-icon" />
            ) : (
              <HiOutlineChevronDown className="menu-icon" />
            )}
          </div>
          <div className="list">
            <ul className={`ul ${expandTech ? "ul-open" : ""}`}>
              {techOptions[0].subdata.map((x) => {
                const totalCount = techMap[x.value];
                const filterId = `technology-${x.id}`;
                return totalCount !== undefined ? (
                  <li key={x.id}>
                    <label htmlFor={filterId}>
                      <input
                        type="checkbox"
                        id={filterId}
                        value={x.value}
                        onChange={props.handleChange}
                      />
                      <span> {x.label}</span>
                      <span className="total">({totalCount})</span>
                    </label>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          <div
            className="toggle-btn"
            onClick={function () {
              setExpandMesh(!expandMesh);
            }}
          >
            <p>
              <strong>Service Mesh</strong>
            </p>
            {expandMesh ? (
              <HiOutlineChevronUp className="menu-icon" />
            ) : (
              <HiOutlineChevronDown className="menu-icon" />
            )}
          </div>
          <div className="list">
            <ul className={`ul ${expandMesh ? "ul-open" : ""}`}>
              {meshOptions[0].subdata.map((x) => {
                const totalCount = meshMap[x.value];
                const filterId = `mesh-${x.id}`;
                return totalCount !== undefined ? (
                  <li key={x.id}>
                    <label htmlFor={filterId}>
                      <input
                        type="checkbox"
                        id={filterId}
                        value={x.value}
                        onChange={props.handleChange}
                      />
                      <span> {x.label}</span>
                      <span className="total">({totalCount})</span>
                    </label>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </ResourceNavigationWrapper>
  );
};

export default Navigation;
