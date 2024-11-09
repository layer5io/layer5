import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import meshery_visualizer from "./images/meshery_visualizer.svg";
import meshery_designer from "./images/meshery_designer.svg";
import CatalogsLight from "../../assets/images/catalog/catalog-light.svg";
import CatalogsDark from "../../assets/images/catalog/catalog-dark.svg";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const FeatureWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  background-color: ${(props) => props.theme.body};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-top: 0;
  padding-bottom: 100px;
  @media (max-width: 468px) {
    margin: 3rem 0;
  }
  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  .catalog-container .catalog:nth-child(odd) {
    .catalog-image {
      .image-wrapper {
        justify-content: center;
        @media (max-width: 767px) {
          justify-content: center;
        }
      }
    }
  }
  .catalog-container .catalog:nth-child(even) {
    .catalog-image {
      @media (max-width: 767px) {
        order: 0;
      }
    }
    .catalog-detail {
      @media (max-width: 767px) {
        order: 1;
      }
    }
  }
  .catalog {
    display: flex;
    padding: 2rem 0;
    @media (max-width: 768px) {
      padding: 2rem 0;
    }
    @media (max-width: 468px) {
      flex-direction: column;
    }
    .catalog-detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .heading {
        font-size: 3.125rem;
        line-height: 3.813rem;
        color: ${(props) => props.theme.tertiaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        margin-bottom: 2rem;
        @media (max-width: 992px) {
          font-size: 2.8rem;
          line-height: 3rem;
        }
        @media (max-width: 767px) {
          font-size: 2rem;
          line-height: 2.5rem;
          text-align: center;
          padding-left: 100px;
          padding-right: 100px;
          margin-bottom: 1rem;
        }
        @media (max-width: 467px) {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
      .caption {
        font-weight: 400;
        font-size: 1.563rem;
        line-height: 2rem;
        color: ${(props) => props.theme.tertiaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        opacity: 0.8;
        @media (max-width: 767px) {
          font-size: 1rem;
          line-height: 1.5rem;
          text-align: center;
          padding-left: 100px;
          padding-right: 100px;
        }
        @media (max-width: 467px) {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
    }
    .catalog-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
          justify-content: center;
        }
        .calalog-image {
          max-width: 300px;
          @media (max-width: 767px) {
            max-width: 200px;
            margin-bottom: 20px;
          }
        }
      }
    }
    .diagram-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
          justify-content: center;
        }
        .kubernetes-image {
          @media (max-width: 767px) {
            max-width: 90%;
            margin-bottom: 2rem;
          }
        } 
      }
    }
  }
`;

const Feature = () => {

  const { isDark } = useStyledDarkMode();

  return (
    <FeatureWrapper>
      <Container className="catalog-container">
        <Row className="catalog">
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={meshery_designer} className="kubernetes-image" />
              {/* <StaticImage src={meshery_designer} alt="Meshery Designer" loading="lazy" /> */}
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">Kanvas Designer</h2>
            <p className="caption">
            Drag-and-drop your cloud native infrastructure using a palette of thousands of versioned Kubernetes components.
            </p>
            <Link className="link" href="/cloud-native-management/kanvas/design">Learn more &rarr;</Link>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-detail">
            <h2 className="heading">
            Kanvas Operator
            </h2>
            <p className="caption">
            Deploy designs, apply patterns, manage and operate your deployments in real-time. Bring all your Kubernetes clusters under a common point of management.
            </p>
            <Link className="link" href="/cloud-native-management/kanvas/visualize">Learn more &rarr;</Link>
          </Col>
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={meshery_visualizer} className="kubernetes-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={isDark ? CatalogsDark : CatalogsLight} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">Cloud Native Catalog</h2>
            <p className="caption">
            Discover and use top-quality patterns and conventions as templates for your cloud native infrastructure and save time with design patterns.
            </p>
            <Link className="link" href="/cloud-native-management/catalog">Learn more &rarr;</Link>
          </Col>
        </Row>
      </Container>
    </FeatureWrapper>
  );
};

export default Feature;