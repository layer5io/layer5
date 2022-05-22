import React, { useState } from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Card from "../../../components/Card";
import PageHeader from "../../../reusecore/PageHeader";
import { NewsPageWrapper } from "./NewsGrid.style";
import rss_feed_icon from "../../../assets/images/socialIcons/rss-sign.svg";
import Button from "../../../reusecore/Button";
import { useEffect } from "react";

var CoverageFiltered= true;
var PressReleaseFiltered=true;

function colorchange(id) {

  var background = document.getElementById(id).style.backgroundColor;
  if (background == "rgb(240, 240, 240)") {
    document.getElementById(id).style.background = "#1E2117";
    document.getElementById(id).style.color = "white";
  } else {
    document.getElementById(id).style.background = "rgb(240, 240, 240)";
    document.getElementById(id).style.color = "black";
  }

}
const NewsGrid = ({data}) => {
  const [constnews, setconstNews] = useState([]);
  const [searchtopic, setsearchtopic] = useState("");
  const [news, setNews] = useState([]);
  const emptynews=[];
  useEffect( () => {
    const filteredtopic = constnews.filter((newsitem) => {
      return newsitem.frontmatter.title.toLocaleLowerCase().includes(searchtopic);
    });
    setNews(filteredtopic);
  }, [searchtopic]
  );
  useEffect( () => {
    data.allMdx.nodes.map( (node) => (
      setNews(prevArray => [...prevArray, node]),
      setconstNews(prevArray => [...prevArray, node])
    ));
  }, []
  );
  const filterChange = (event) => {
    setsearchtopic(event.target.value);
    console.log(event.target.value);
  };

  const FilteredCoverage = constnews.filter((obj) => {
    return obj.frontmatter.category.includes("Coverage");
  });
  const FilteredPressRelease = constnews.filter((obj) => {
    return obj.frontmatter.category.includes("Press Release");
  });

  const filtercoverage = () => {
    colorchange("coverage");
    if(CoverageFiltered==false&&PressReleaseFiltered==false){
      setNews(FilteredCoverage);
      CoverageFiltered=true;
    } else if(CoverageFiltered==false&&PressReleaseFiltered==true) {
      setNews(constnews);
      CoverageFiltered=true;
    } else 
    if(CoverageFiltered==true && PressReleaseFiltered==true){
      setNews(FilteredPressRelease);
      CoverageFiltered=false;
    } else if(CoverageFiltered==true && PressReleaseFiltered==false){
      setNews(emptynews);
      CoverageFiltered=false;
    }
  }; 
  const filterpressrelease = () => {
    colorchange("press-release");
    if(PressReleaseFiltered==false&&CoverageFiltered==false){
      setNews(FilteredPressRelease);
      PressReleaseFiltered=true;
    }else if(PressReleaseFiltered==false&&CoverageFiltered==true) {
      setNews(constnews);
      PressReleaseFiltered=true;
    } else if(PressReleaseFiltered==true&&CoverageFiltered==true){
      setNews(FilteredCoverage);
      PressReleaseFiltered=false;
    } else if(PressReleaseFiltered==true&&CoverageFiltered==false){
      setNews(emptynews);
      PressReleaseFiltered=false;
    }
  }; 
  return (
    <NewsPageWrapper>
      <PageHeader title="Layer5 in the News" path="News" img={rss_feed_icon}  feedlink="/news/feed.xml" />
    
      <div>
        <Container>
          <div className="button-container">
            <Button id="coverage" onClick={filtercoverage} className="coverage-button">Coverage</Button>
            <Button id="press-release" onClick={filterpressrelease} className="press-release-button">Press-Release</Button>
            <input onChange={filterChange} value={searchtopic} placeholder="Search here" className="filter-topic-input"/>
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
