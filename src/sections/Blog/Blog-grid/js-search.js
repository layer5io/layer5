import React, { useState, useEffect } from "react";
import * as JsSearch from "js-search";
import Card from "../../../components/Card";
import Paginate from "../paginate";
import { Row, Col } from "../../../reusecore/Layout";
import { SearchBar } from "./blogGrid.style";
import BlogViewToolTip from "../../../components/blog-view-tooltip";

const Search = ({
  data1,
  pageContext,
  isListView,
  setGridView,
  setListView,
}) => {
  const [dataList, setDataList] = useState(data1);
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const queryResults =
    searchQuery === "" || searchResults.length < 1 ? dataList : searchResults;
  useEffect(() => {
    rebuildIndex();
  }, []);

  const rebuildIndex = () => {
    // const {dataList} = stateObj
    const dataToSearch = new JsSearch.Search("title");
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title");
    dataToSearch.addIndex(["frontmatter", "title"]);
    dataToSearch.addDocuments(dataList);
    setSearch(dataToSearch);
    setIsLoading(false);
  };

  const searchData = (e) => {
    const queryResult = search.search(e.target.value);
    setSearchQuery(e.target.value);
    setSearchResults(queryResult);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchBar>
      <div className="header">
        <BlogViewToolTip
          isListView={isListView}
          setListView={setListView}
          setGridView={setGridView}
        />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="Search"
              value={searchQuery}
              onChange={searchData}
              placeholder="Search here"
              style={{ width: "100%" }}
            />
          </div>
        </form>
      </div>
      <div className="blog-grid-wrapper">
        <Row>
          {queryResults.map(({ id, frontmatter, fields }) => (
            <Col key={id} xs={12} sm={6}>
              <Card frontmatter={frontmatter} fields={fields} />
            </Col>
          ))}
          <Col>
            <Paginate
              pageContext={pageContext}
              isListView={isListView}
            />
          </Col>
        </Row>
      </div>
    </SearchBar>
  );
};

export default Search;
