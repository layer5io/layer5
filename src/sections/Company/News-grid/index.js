import React, { useState } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Card from "../../../components/Card";
import PageHeader from "../../../reusecore/PageHeader";
import { NewsPageWrapper } from "./NewsGrid.style";
import rss_feed_icon from "../../../assets/images/socialIcons/rss-sign.svg";
import Button from "../../../reusecore/Button";
import SearchBox from "../../../reusecore/Search";
import { useEffect } from "react";
import useDataList from "../../../utils/usedataList";
import Press from "./press";

let coverageFiltered = false;
let pressReleaseFiltered = false;

function colorchange(id) {
  let element = document.getElementById(id);
  element.classList.toggle("mystyle");
}
const NewsGrid = ({ data, theme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    data.allMdx.nodes,
    setSearchQuery,
    searchQuery,
    ["frontmatter", "title"],
    "id"
  );
  const [news, setNews] = useState(queryResults);
  useEffect( () => {
    setNews(queryResults);
    if (coverageFiltered == true) {
      setNews(filteredCoverage);
    }
    if (pressReleaseFiltered == true) {
      setNews(filteredPressRelease);
    }
  }, [queryResults]

  );
  const filteredCoverage = queryResults.filter((obj) => {
    return obj.frontmatter.category.includes("Coverage");
  });
  const filteredPressRelease = queryResults.filter((obj) => {
    return obj.frontmatter.category.includes("Press Release");
  });

  const filterCoverage = () => {
    colorchange("coverage");
    if (coverageFiltered == false && pressReleaseFiltered == false){
      setNews(filteredCoverage);
      coverageFiltered = true;
    } else if (coverageFiltered == false && pressReleaseFiltered == true) {
      colorchange("press-release");
      setNews(filteredCoverage);
      coverageFiltered = true;
      pressReleaseFiltered = false;
    } else if (coverageFiltered == true && pressReleaseFiltered == false){
      setNews(queryResults);
      coverageFiltered = false;
    }
  };
  const filterPressRelease = () => {
    colorchange("press-release");
    if (pressReleaseFiltered == false && coverageFiltered == false){
      setNews(filteredPressRelease);
      pressReleaseFiltered = true;
    } else if (pressReleaseFiltered == false && coverageFiltered == true) {
      colorchange("coverage");
      setNews(filteredPressRelease);
      pressReleaseFiltered = true;
      coverageFiltered = false;
    } else if (pressReleaseFiltered == true && coverageFiltered == false){
      setNews(queryResults);
      pressReleaseFiltered = false;
    }
  };
  return (
    <NewsPageWrapper>
      <PageHeader title="Layer5 in the News" path="News" img={rss_feed_icon}  feedlink="/news/feed.xml" />

      <div>
        <Container>
          <div className="news-grid-wrapper">
            <div className="filter-buttons">
              <div className="button-container">
                <Button id="coverage" onClick={filterCoverage} className="coverage-button">Coverage</Button>
                <Button id="press-release" onClick={filterPressRelease} className="press-release-button">Press-Release</Button>
              </div>
              <div className="search">
                <div className="searchBox">
                  <SearchBox searchQuery={searchQuery} searchData={searchData} />
                </div>
              </div>
            </div>

            <Row>
              {news.length < 1 && (
                <Col xs={12} sm={6}>
                      No News post that matches the title "{searchQuery}" found.
                </Col>
              )}
              {news.map(({ id, frontmatter, fields }) => (
                <Col xs={12} sm={6} lg={4} key={id}>
                  <Card  frontmatter={frontmatter} fields={fields}/>
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
