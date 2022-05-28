import React, { useState } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Card from "../../../components/Card";
import PageHeader from "../../../reusecore/PageHeader";
import { NewsPageWrapper } from "./NewsGrid.style";
import rss_feed_icon from "../../../assets/images/socialIcons/rss-sign.svg";
import Button from "../../../reusecore/Button";
import { useEffect } from "react";
import SearchBox from "../../../reusecore/Search";


let coverageFiltered= false;
let pressReleaseFiltered=false;

function colorchange(id) {
  var background = document.getElementById(id).style.backgroundColor;
  if (background == "rgb(30, 33, 23)") {
    document.getElementById(id).style.background = "#b3b3b3";
    document.getElementById(id).style.color = "black";
  } else {
    document.getElementById(id).style.background = "rgb(30, 33, 23)";
    document.getElementById(id).style.color = "white";
  }

}
const NewsGrid = ({data}) => {
  const [constNews, setConstNews] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [news, setNews] = useState([]);
  useEffect( () => {
    const filteredtopic = constNews.filter((newsitem) => {
      return newsitem.frontmatter.title.toLocaleLowerCase().includes(searchTopic);
    });
    setNews(filteredtopic);
  }, [searchTopic]
  );
  useEffect( () => {
    data.allMdx.nodes.map( (node) => (
      setNews(prevArray => [...prevArray, node]),
      setConstNews(prevArray => [...prevArray, node])
    ));
  }, []
  );
  const filterChange = (event) => {
    setSearchTopic(event.target.value);
    console.log(event.target.value);
  };

  const filteredCoverage = constNews.filter((obj) => {
    return obj.frontmatter.category.includes("Coverage");
  });
  const filteredPressRelease = constNews.filter((obj) => {
    return obj.frontmatter.category.includes("Press Release");
  });

  const filterCoverage = () => {
    colorchange("coverage");
    if(coverageFiltered==false&&pressReleaseFiltered==false){
      setNews(filteredCoverage);
      coverageFiltered=true;
    } else if(coverageFiltered==false&&pressReleaseFiltered==true) {
      colorchange("press-release");
      setNews(filteredCoverage);
      coverageFiltered=true;
      pressReleaseFiltered=false;
    } else if(coverageFiltered==true && pressReleaseFiltered==false){
      setNews(constNews);
      coverageFiltered=false;
    }
  }; 
  const filterPressRelease = () => {
    colorchange("press-release");
    if(pressReleaseFiltered==false&&coverageFiltered==false){
      setNews(filteredPressRelease);
      pressReleaseFiltered=true;
    }else if(pressReleaseFiltered==false&&coverageFiltered==true) {
      colorchange("coverage");
      setNews(filteredPressRelease);
      pressReleaseFiltered=true;
      coverageFiltered=false;
    } else if(pressReleaseFiltered==true&&coverageFiltered==false){
      setNews(constNews);
      pressReleaseFiltered=false;
    }
  }; 
  return (
    <NewsPageWrapper>
      <PageHeader title="Layer5 in the News" path="News" img={rss_feed_icon}  feedlink="/news/feed.xml" />
    
      <div>
        <Container>
          <div className="filter-buttons">
            <div className="button-container">
              <Button id="coverage" onClick={filterCoverage} className="coverage-button">Coverage</Button>
              <Button id="press-release" onClick={filterPressRelease} className="press-release-button">Press-Release</Button>
            </div>
            <div className="search-box-container">
              <SearchBox className="filter-topic-input" searchData={filterChange} searchQuery={searchTopic}/>
            </div>
          </div>
          
          <div className="news-grid-wrapper">
            <Row>
              {news.map(({id, frontmatter, fields }) => (
                <Col xs={12} sm={6} lg={4} key={id}>
                  <Card frontmatter={frontmatter} fields={fields}/>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </NewsPageWrapper>
  );
};

export default NewsGrid;
