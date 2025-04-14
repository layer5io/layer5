import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";
import IntegrationsImage from "./images/integration-image-colorMode.svg";
const DevrelHeaderWrapper = styled.div`
  .devrel-platform.header {
    min-height: 40rem;
    background: ${({ theme }) => theme.linearToGreen};
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
    justify-content: center;
    .header__detail {
      display: flex;
      margin-top: 4rem;
      flex-direction: column;
    }
    .header__title {
      color: ${(props) => props.theme.primaryColor};
      padding-right: 60px;
      margin-bottom: 20px;
    }
    .header__title_description {
      color: ${(props) => props.theme.tertiaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      padding-right: 60px;
      margin-bottom: 30px;
    }
    .devrel {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 992px) {
      padding-bottom: 100px;
      .devrel {
        margin: 50px 0 0 0;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 50px 0;
      .header__detail {
        margin-top: 0;
        display: flex;
        flex-direction: column;
      }
      .header__title {
        padding-right: 0;
        text-align: center;
        margin-bottom: 10px;
      }
      .header__title_description {
        padding-right: 0;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
`;

const Header = () => {
  return (
    <DevrelHeaderWrapper>
      <div className="devrel-platform header">
        <Container>
          <Row className="row" style={{ justifyContent: "center" }}>
            <Col className="col header__detail" $md={6}>
              <h1 className="header__title">DevRel Platform for Kubernetes and Cloud Native Content</h1>
              <p className="header__title_description">
              Are you a CNCF Ambassador, Docker Captain, AWS Hero, Google Developer Expert, or cloud native enthusiast looking to showcase your expertise and grow your following? The Meshery Cloud and Playground offers a powerful platform to create, share, and teach cloud native technologies while building your personal brand and expanding your reach.

                {/* Meshery provides a comprehensive platform that transforms how you create and share technical content: */}

              </p>
            </Col>
            <Col className="col devrel" $lg={5} $md={4} $xs={10}>
              <img src={IntegrationsImage} alt="devrel" />
            </Col>
          </Row>
        </Container>
      </div>
    </DevrelHeaderWrapper>
  );
};

export default Header;
