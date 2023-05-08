import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wasm from "../../assets/images/webassembly/webssembly_icon.svg";
import Patterns from "../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import Ebpf from "../../assets/images/meshmap/ebpf.svg";
import Opa from "../../assets/images/meshmap/opa.svg";
import CatalogsLight from "../../assets/images/catalog/Catalog-light.svg";
import CatalogsDark from "../../assets/images/catalog/Catalog-dark.svg";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const CatalogWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  background-color: ${(props) => props.theme.body};
  padding-top: 100px;
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
        justify-content: flex-start;
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
    padding: 5rem 0;
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
        justify-content: flex-end;
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
  }
`;

const Catalog = () => {
  const [img, setImg] = useState(CatalogsLight);
  const { isDark } = useStyledDarkMode();

  useEffect(() => {
    isDark ? setImg(CatalogsDark) : setImg(CatalogsLight);
  }, [isDark]);

  return (
    <CatalogWrapper>
      <Container className="catalog-container">
        <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={img} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">Harness Meshery's Compatibility</h2>
            <p className="caption">
              easily manage and monitor your entire infrastructure, regardless
              of the specific tools and services you use.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-detail">
            <h2 className="heading">
              Deploy Applications with Meshery's Deployment Patterns
            </h2>
            <p className="caption">
              Cloud native patterns enable the business function in simple
              language.
            </p>
          </Col>
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Wasm} className="calalog-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Ebpf} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">
              Maximize Your Performance with eBPF Programs
            </h2>
            <p className="caption">
              Embedded in the data plane of a service mesh, eBPF programs
              performant, fine-grained control over service requests.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-detail">
            <h2 className="heading">
              Deploy Applications with Meshery's Deployment Patterns
            </h2>
            <p className="caption">
              Cloud native patterns enable the business function in simple
              language.
            </p>
          </Col>
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Patterns} className="calalog-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Opa} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">
              Revolutionize Your Mesh Security with Policies
            </h2>
            <p className="caption">
              Applied across the cloud native infrastructure under management,
              policies may be applied broadly and specificly.
            </p>
          </Col>
        </Row>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;
