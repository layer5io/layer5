import React from "react";
import styled from "styled-components";
import Wasm from "../../assets/images/webassembly/webssembly_icon.svg";
import Patterns from "../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import Ebpf from "../../assets/images/meshmap/ebpf.svg";
import EbpfDark from "../../assets/images/meshmap/ebpf-dark.webp";
import Opa from "../../assets/images/meshmap/opa.svg";
import CatalogsLight from "../../assets/images/catalog/catalog-light.svg";
import CatalogsDark from "../../assets/images/catalog/catalog-dark.svg";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import CollImg from "./../Meshmap/FeaturesSection/Collaborate/images/collab4-colorMode.svg";
import DragDrop from "./../Meshmap/Meshmap-design/images/drag-drop-components.gif";
import Visualize from "./../Meshmap/FeaturesSection/Visualize/images/visualize-2-dark.svg";

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
        font-size: 3rem;
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
          font-size: 1.3rem;
          padding-left: 25px;
          padding-right: 25px;
          text-align: left;
        }
      }
      .sub-heading {
        @media (max-width: 767px) {
          text-align: center;
        }
        @media (max-width: 467px) {
          padding-left: 25px;
          text-align: left;
        }
      }
      .caption {
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.5rem;
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
          text-align: left;
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
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={isDark ? CatalogsDark : CatalogsLight} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">AWS architectural diagrams tailored to meet any requirement</h2>
            <b className="sub-heading">Scalable Infrastructure </b>
            <p className="caption">
            The AWS architecture diagram tool ensures your architecture is inherently scalable from the start, making expansion a seamless process.
            </p>
            <b className="sub-heading">Cost-Effective Solutions </b>
            <p className="caption">
            AWS architecture diagrams offer economic benefits by presenting the entire system in one diagram, allowing the team to identify bottlenecks and their respective solutions.
            </p>
            <b className="sub-heading">Ensure Security and Reliability </b>
            <p className="caption">
            Enhance the security and reliability of your AWS architecture by adhering to industry best practices.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-detail">
            <h2 className="heading">Designing AWS diagrams is effortless</h2>
            <b className="sub-heading">Quick-start templates </b>
            <p className="caption">
            Get started quickly with our ready-to-use templates. Effortlessly create your AWS architecture diagrams using these professional templates. They are fully customizable and available for free download.
            </p>
            <b className="sub-heading">User-friendly editor </b>
            <p className="caption">
            Create AWS diagrams effortlessly with an intuitive layout and interface. Benefit from intelligent auto-adjustment, drag-and-drop functionality, and a comprehensive toolkit for quick diagram creation in minutes.
            </p>
            <b className="sub-heading">Extensive AWS Icon Library </b>
            <p className="caption">
            Utilize a vast and continually expanding collection of AWS icons for creating globally comprehensible diagrams that are authentic and up-to-date.
            </p>
          </Col>
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={DragDrop} className="calalog-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={CollImg} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">AWS architectural diagrams tailored to meet any requirement</h2>
            <b className="sub-heading">Collaborate with your Team </b>
            <p className="caption">
            Build an iterative design flow with live collaboration that keeps you in the loop whether you are working in the office or remotely.
            </p>
            <b className="sub-heading">Work from Anywhere </b>
            <p className="caption">
            Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.
            </p>
            <b className="sub-heading">Inclusive collaboration from start to finish </b>
            <p className="caption">
            MeshMap is an end-to-end management platform, here to help teams understand problems, explore options, and build solutions—together.
            </p>
          </Col>
        </Row>
        {/* <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={isDark ? EbpfDark : Ebpf} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
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
          <Col md={6} className="catalog-detail">
            <h2 className="heading">Visualize your infrastructure</h2>
            <b className="sub-heading">Continuous visibility </b>
            <p className="caption">
            Import your existing Kubernetes, Helm, or Docker Compose applications. Interactively connect to terminal sessions or initiate and search log streams from your containers.
            </p>
            <b className="sub-heading">Common management </b>
            <p className="caption">
            Deploy designs, apply patterns, manage and operate your deployments and services in real-time.
            </p>
          </Col>
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={Visualize} className="calalog-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;
