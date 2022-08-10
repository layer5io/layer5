import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";

const LearnBook = "../../../../assets/images/learn/book-cover.png";

const CTAWrapper = styled.section`
  .book_cover {
    display: flex;
    margin: auto;
    background: #00b39f;
    .book_col {
      max-height: 40rem;
    }
    .text {
      padding: 5rem 5rem 5rem 13rem;
      @media screen and (max-width: 1200px) {
        padding: 5rem 5rem 5rem 10rem;
      }
      @media screen and (max-width: 950px) {
        padding: 5rem;
      }
      @media screen and (max-width: 750px) {
        padding: 2rem;
      }
      .cover {
        border: 2px solid white;
        width: 240px;
        padding: 10px;
        text-align: center;
      }
      h1,
      p {
        color: white;
      }
    }
  }
  .book_img {
    text-align: center;
    align-self: center;
    .bookLink {
    }
    img {
      max-height: 38rem;
      vertical-align: middle;
      @media screen and (max-width: 576px) {
        max-height: 28rem;
        margin: 1rem auto;
      }
    }
  }


`;

const CTA_Book = () => {
  return (
    <CTAWrapper>
      <Row className="book_cover">
        <Col xs={12} sm={6} className="book_col text">
          <p className="cover">Services-first Network</p>
          <h1>
            What is a <br></br> Service Mesh?
          </h1>
          <p>
            Service meshes provide intent-based networking for microservices
            describing desired behavior of the network in the face of constantly
            changing conditions and network topology.
          </p>
          <Button
            primary
            className="learn"
            title="Learn More"
            url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"
          />
        </Col>
        <Col xs={12} sm={6} className="book_col book_img">
          <Link to={"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"}
            className="bookLink"
          >
            <StaticImage src={LearnBook} alt="Book Image" layout="constrained" />
          </Link>
        </Col>
      </Row>
    </CTAWrapper>
  );
};

export default CTA_Book;