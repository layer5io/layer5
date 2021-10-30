import React from "react";
import { Link} from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../Card";
import RelatedTopicsWrapper from "./relatedTopics.style";
import { Col } from "../../reusecore/Layout";
import Slider from "react-slick";



const RelatedTopics = props => {
  
  const {topicType , relatedTopics , mainHead , lastCardHead , linkToAllItems} = props;

  return (
    <RelatedTopicsWrapper>
      <div className="widgets-title">
        <h3>{mainHead}</h3>
      </div>
      {
        typeof window !== "undefined" &&
                <Slider
                  dots= { window.innerWidth < 992 }
                  arrows={ window.innerWidth >= 992 }
                  infinite= {false}
                  speed= "500"
                  slidesToShow= {window.innerWidth <= 720 ? 1 : window.innerWidth <= 991 ? 2 : 3}
                  slidesToScroll= {1}
                >
                  {
                    topicType === "topics" ? relatedTopics.map(({topic}) => {
                      return (
                        <Col className="cardCol" xs={12} key={topic.fields.slug}>
                          <Card frontmatter={topic.frontmatter} fields={topic.fields}/>
                        </Col>
                      );
                    }):relatedTopics.map((topic) => {
                      return (
                        <Col className="cardCol" xs={12} key={topic.fields.slug}>
                          <Card frontmatter={topic.frontmatter} fields={topic.fields}/>
                        </Col>
                      );
                    })
                  }
                  <Col xs={12} lg={12} className="allBlogs">
                    <div className="allBlogs_card">
                      <Link to={linkToAllItems}>
                        <h2>{lastCardHead}</h2>
                        <IoIosArrowRoundForward/>
                      </Link>
                    </div>
                  </Col>
                </Slider>
      }
    </RelatedTopicsWrapper>
  );
};

export default RelatedTopics;
