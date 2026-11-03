import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Card from "../../../components/Card";
import PageHeader from "../../../reusecore/PageHeader";
import { NewsPageWrapper } from "./NewsGrid.style";
import rss_feed_icon from "../../../assets/images/socialIcons/rss-sign.svg";
import Button from "../../../reusecore/Button";
import SearchBox from "../../../reusecore/Search";
import useDataList from "../../../utils/usedataList";
import Press from "./press";

const NewsGrid = ({ data }) => {
  const nodes = data?.allMdx?.nodes || [];
  const { coverageCount, releasesCount } = nodes.reduce(
    (acc, { frontmatter: { category } = {} }) => {
      if (category?.includes("Coverage")) acc.coverageCount++;
      if (category?.includes("Press Release")) acc.releasesCount++;
      return acc;
    },
    { coverageCount: 0, releasesCount: 0 },
  );

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    nodes,
    setSearchQuery,
    searchQuery,
    ["frontmatter", "title"],
    "id",
  );

  const news = useMemo(() => {
    if (selectedCategory === "Coverage") {
      return queryResults.filter((obj) =>
        obj.frontmatter?.category?.includes("Coverage"),
      );
    }
    if (selectedCategory === "Press Release") {
      return queryResults.filter((obj) =>
        obj.frontmatter?.category?.includes("Press Release"),
      );
    }
    return queryResults;
  }, [queryResults, selectedCategory]);

  const filterCoverage = () => {
    setSelectedCategory(selectedCategory === "Coverage" ? null : "Coverage");
  };

  const filterPressRelease = () => {
    setSelectedCategory(
      selectedCategory === "Press Release" ? null : "Press Release",
    );
  };
  return (
    <NewsPageWrapper>
      <PageHeader
        title="Layer5 in the News"
        path="News"
        img={rss_feed_icon}
        feedlink="/news/feed.xml"
      />

      <div>
        <Container>
          <div className="news-grid-wrapper">
            <div className="filter-buttons">
              <div className="button-container">
                <Button
                  id="coverage"
                  onClick={filterCoverage}
                  className={
                    selectedCategory === "Coverage"
                      ? "coverage-button mystyle"
                      : "coverage-button"
                  }
                >
                  Coverage ({coverageCount})
                </Button>
                <Button
                  id="press-release"
                  onClick={filterPressRelease}
                  className={
                    selectedCategory === "Press Release"
                      ? "press-release-button mystyle"
                      : "press-release-button"
                  }
                >
                  Releases ({releasesCount})
                </Button>
              </div>
              <div className="search">
                <div className="searchBox">
                  <SearchBox
                    searchQuery={searchQuery}
                    searchData={searchData}
                    focusSearch={true}
                  />
                </div>
              </div>
            </div>

            <Row
              style={{
                flexWrap: "wrap",
              }}
            >
              {news.length < 1 && (
                <Col $xs={12} $sm={6}>
                  No news matches the title "{searchQuery}" found.
                </Col>
              )}
              {news.map(({ id, frontmatter, fields }) => (
                <Col $xs={12} $sm={6} $lg={4} key={id}>
                  <Card frontmatter={frontmatter} fields={fields} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <Press />
    </NewsPageWrapper>
  );
};

export default NewsGrid;
