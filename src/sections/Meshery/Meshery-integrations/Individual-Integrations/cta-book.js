import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";

const LearnBook = "../../../../assets/images/learn/book-cover.webp";

const CTAWrapper = styled.section`
  .book_cover {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    background: #00b39f;
    align-items: center;
    width: 100%;

    .text {
      padding: 4rem 3rem 4rem 8rem;
      @media screen and (max-width: 1200px) {
        padding: 3rem 2rem 3rem 4rem;
      }
      @media screen and (max-width: 992px) {
        padding: 2.5rem 1.5rem;
      }
      @media screen and (max-width: 768px) {
        padding: 2rem 1.25rem;
      }
      @media screen and (max-width: 576px) {
        padding: 2rem 1rem 0.5rem;
        text-align: center;
      }

      .cover {
        border: 2px solid white;
        width: 240px;
        max-width: 100%;
        padding: 10px;
        text-align: center;
        box-sizing: border-box;
        @media screen and (max-width: 576px) {
          margin: 0 auto 1rem;
        }
      }

      h1 {
        color: white;
        font-size: 2.25rem;
        margin: 1rem 0;
        @media screen and (max-width: 1200px) {
          font-size: 2rem;
        }
        @media screen and (max-width: 768px) {
          font-size: 1.5rem;
        }
      }

      p {
        color: white;
        margin-bottom: 1.5rem;
        @media screen and (max-width: 768px) {
          font-size: 0.95rem;
        }
      }

      .learn {
        display: inline-block;
      }
    }
  }

  .book_img {
    text-align: center;
    align-self: center;
    padding: 2rem;
    @media screen and (max-width: 992px) {
      padding: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
    @media screen and (max-width: 576px) {
      padding: 0.5rem 1rem 2rem;
    }

    .bookLink {
      display: inline-block;
    }

    img {
      max-height: 34rem;
      width: auto;
      vertical-align: middle;
      @media screen and (max-width: 1200px) {
        max-height: 28rem;
      }
      @media screen and (max-width: 768px) {
        max-height: 20rem;
      }
      @media screen and (max-width: 576px) {
        max-height: 18rem;
        margin: 1rem auto 0;
      }
    }
  }
`;

const CTA_Book = () => {
  return (
    <CTAWrapper>
      <Row className="book_cover" $Vcenter>
        <Col $xs={12} $sm={6} className="book_col text">
          <p className="cover">Services-first Network</p>
          <h1>
            Learn about<br></br>cloud native architecture
          </h1>
          <p>
            Service meshes provide intent-based networking for microservices
            describing desired behavior of the network in the face of constantly
            changing conditions and network topology.
          </p>
          <Button
            $primary
            className="learn"
            title="Learn More"
            $url="/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"
          />
        </Col>
        <Col $xs={12} $sm={6} className="book_col book_img">
          <Link
            to={
              "/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"
            }
            className="bookLink"
          >
            <StaticImage
              src={LearnBook}
              alt="Book Image"
              layout="constrained"
            />
          </Link>
        </Col>
      </Row>
    </CTAWrapper>
  );
};

export default CTA_Book;
