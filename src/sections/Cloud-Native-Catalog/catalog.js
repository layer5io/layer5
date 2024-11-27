import React from "react";
import styled from "styled-components";
import Wasm from "../../assets/images/webassembly/webssembly_icon.svg";
import Patterns from "../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
// import Ebpf from "../../assets/images/kanvas/ebpf.svg";
// import EbpfDark from "../../assets/images/kanvas/ebpf-dark.webp";
import Opa from "../../assets/images/kanvas/opa.svg";
import CatalogsLight from "../../assets/images/catalog/catalog-light.svg";
import CatalogsDark from "../../assets/images/catalog/catalog-dark.svg";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const CatalogWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  background-color: ${(props) => props.theme.body};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
  }
`;

const Catalog = () => {

  const { isDark } = useStyledDarkMode();

  return (
    <CatalogWrapper>
      <Container className="catalog-container">
        <Row className="catalog">
          <Col $md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={isDark ? CatalogsDark : CatalogsLight} className="calalog-image" />
            </div>
          </Col>
          <Col $md={6} className="catalog-detail">
            <h2 className="heading">Harness Well-Architected Kubernetes Patterns</h2>
            <p className="caption">
                Discover and use top-quality patterns and conventions as templates for your cloud native infrastructure with Meshery Catalog. Publish your own best practices and share with team members and the world.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col $md={6} className="catalog-detail">
            <h2 className="heading">
            Center of Excellence: Mutli-tentant Platform Engineering Patterns
            </h2>
            <p className="caption">
              Disseminate your organizational best practices by encapsulating them into your own Meshery design patterns. Expose configurable templates for your developer teams for reuse and environment reconfiguration, while retaining the imbued operational practices within your shared designs.
            </p>
          </Col>
          <Col $md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Patterns} className="calalog-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col $md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Wasm} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">Unlock the Power of WebAssembly Filters</h2>
            <p className="caption">
              Meshery's management of WASM filters for Envoy offers seamless integration into cloud native infrastructure running Envoy-based data planes.
            </p>
          </Col>
        </Row>
        {/* <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={isDark ? EbpfDark : Ebpf} className="calalog-image" />
            </div>
          </Col>
          <Col $md={6} className="catalog-detail">
            <h2 className="heading">
              Maximize Your Performance with eBPF Programs
            </h2>
            <p className="caption">
              Embedded within the data plane, eBPF programs enable
              high-performance, granular control over service requests.
            </p>
          </Col>
        </Row> */}
        <Row className="catalog">
          <Col $md={6} className="catalog-detail">
            <h2 className="heading">
              Policy-driven Orchestration and Control Where You Need It
            </h2>
            <p className="caption">
              Inherent standard policy for your organization or override it at your team or individual user-level. Reconfigure Meshery's and your infrastructure's behavior whether applying policy broadly or very specifically.
            </p>
          </Col>
          <Col $md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Opa} className="calalog-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;
