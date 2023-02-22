import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";

import { TiMessageTyping } from "@react-icons/all-files/ti/TiMessageTyping";
import { TiHeartOutline } from "@react-icons/all-files/ti/TiHeartOutline";

import imgNews1 from "../../../assets/images/app/news/news-thumb-1.png";
import imgNews2 from "../../../assets/images/app/news/news-thumb-2.png";
import imgNews3 from "../../../assets/images/app/news/news-thumb-3.png";
import particle1 from "../../../assets/images/app/particle/16.png";
import particle2 from "../../../assets/images/app/particle/09.png";

import NewsSectionWrapper from "./newsSection.style";

const News = () => {
  return (
    <NewsSectionWrapper>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container>
        <SectionTitle className="section-title" UniWidth="52%">
          <h4>Blog post</h4>
          <h2>
            <span>Check our latest blog post </span> for more update.
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={imgNews1} alt="img" />
                </Link>
              </div>
              <div className="post-meta-block">
                <Link to="#">Discussion</Link>
                <span className="divider">/</span>
                <span>15 Sep, 2020</span>
              </div>
              <h2 className="title">
                <Link to="#">
                  Rhetoric me avoid may lowest even quite first.
                </Link>
              </h2>
              <div className="post-reaction-block">
                <Link to="#">05 Comment</Link>
                <Link to="#">
                  <TiHeartOutline /> 152 Like
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={imgNews2} alt="img" />
                </Link>
              </div>
              <div className="post-meta-block">
                <Link to="#">Discussion</Link>
                <span className="divider">/</span>
                <span>15 Sep, 2020</span>
              </div>
              <h2 className="title">
                <Link to="#">
                  Rhetoric me avoid may lowest even quite first.
                </Link>
              </h2>
              <div className="post-reaction-block">
                <Link to="#">
                  <TiMessageTyping /> 05 Comment
                </Link>
                <Link to="#">
                  <TiHeartOutline /> 152 Like
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={imgNews3} alt="img" />
                </Link>
              </div>
              <div className="post-meta-block">
                <Link to="#">Discussion</Link>
                <span className="divider">/</span>
                <span>15 Sep, 2020</span>
              </div>
              <h2 className="title">
                <Link to="#">
                  Rhetoric me avoid may lowest even quite first.
                </Link>
              </h2>
              <div className="post-reaction-block">
                <Link to="#">
                  <TiMessageTyping /> 05 Comment
                </Link>
                <Link to="#">
                  <TiHeartOutline /> 152 Like
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </NewsSectionWrapper>
  );
};

export default News;
