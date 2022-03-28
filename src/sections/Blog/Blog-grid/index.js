import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";
import RssFeedIcon from "../../../assets/images/socialIcons/rss-sign.svg";
import { BlogPageWrapper } from "./blogGrid.style";
import Card from "../../../components/Card";
import * as JsSearch from "js-search";
import BlogViewToolTip from "../../../components/blog-view-tooltip";
import Paginate from "../paginate";


const BlogGrid = ({
  data,
  isListView,
  setListView,
  setGridView,
  pageContext,
}) => {
  const [dataList, setDataList] = useState(data.allMdx.nodes);
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
  return (
    <BlogPageWrapper>
      <PageHeader
        title="Blog"
        path="Blog"
        img={RssFeedIcon}
        feedlink="/blog/feed.xml"
      />
      <div className="blog-page-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <BlogViewToolTip
                isListView={isListView}
                setListView={setListView}
                setGridView={setGridView}
              />
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
            </Col>
            <Col xs={12} lg={4}>
              <Sidebar searchData={searchData} searchQuery={searchQuery} pageContext={pageContext} />
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogGrid;
