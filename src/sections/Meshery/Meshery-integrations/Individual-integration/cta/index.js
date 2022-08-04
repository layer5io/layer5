import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "../../../../../reusecore/Layout";
import Button from "../../../../../reusecore/Button";
import bookCover from "../../../../../assets/images/learn/book-cover.png";
import styled from "styled-components";

const CTA = styled.div`
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
      p,
      .learn {
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
const index = () => {
  return (
    <CTA>
      <Row className="book_cover">
        <Col xs={12} sm={6} className="book_col text">
          <p className="cover">Services-first Network</p>
          <h1>
            What is A <br></br> Service Mesh?
          </h1>
          <p>
            Service meshes provide intent-based networking for microservices
            describing desired behavior of the network in the face of constantly
            changing conditions and network topology.
          </p>
          <Button
            primary
            className="learn"
            type="button"
            title="Learn More"
            url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"
          />
        </Col>
        <Col xs={12} sm={6} className="book_col book_img">
          <Link
            to={
              "/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"
            }
            className="bookLink"
          >
            <img src={bookCover} alt="Book Image" />
          </Link>
        </Col>
      </Row>
    </CTA>
  );
};

export default index;
