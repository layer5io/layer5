import React from "react";
import styled from "styled-components";
import CatalogsLight from "../../assets/images/catalog/catalog-light.svg";
import CatalogsDark from "../../assets/images/catalog/catalog-dark.svg";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import CollImg from "./../Meshmap/FeaturesSection/Collaborate/images/collab4-colorMode.svg";
import DragDrop from "./../Meshmap/Meshmap-design/images/drag-drop-components.gif";
import Visualize from "./../Meshmap/FeaturesSection/Visualize/images/visualize-2-dark.svg";

const DiagramWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  background-color: ${(props) => props.theme.body};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-bottom: 100px;
  @media (max-width: 850px) {
    margin: 3rem 0;
  }
  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  .diagram-container .catalog:nth-child(odd) {
    .diagram-image {
      .image-wrapper {
        justify-content: center;
        @media (max-width: 767px) {
          justify-content: center;
        }
      }
    }
  }

  .diagram-container .catalog:nth-child(even) {
    .diagram-image {
      @media (max-width: 767px) {
        order: 0;
      }
    }
    .diagram-detail {
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
    .diagram-detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .heading {
        color: ${(props) => props.theme.tertiaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        margin-bottom: 2rem;
        @media (max-width: 767px) {
          text-align: center;
          padding-left: 100px;
          padding-right: 100px;
          margin-bottom: 1rem;
        }
        @media (max-width: 467px) {
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
        .gcp-image {
          @media (max-width: 767px) {
            max-width: 90%;
            margin-bottom: 2rem;
          }
        } 
      }
    }
  }
`;

const Gcp = () => {

  const { isDark } = useStyledDarkMode();

  return (
    <DiagramWrapper>
      <Container className="diagram-container">
        <Row className="catalog">
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? CatalogsDark : CatalogsLight} alt="GCP Diagrams for anything" className="gcp-image" />
            </div>
          </Col>
          <Col md={6} className="diagram-detail">
            <h1 className="heading">GCP architectural diagrams tailored to meet any requirement</h1>
            <b className="sub-heading">Network optimization </b>
            <p className="caption">
            Optimize your network's performance to achieve its best functionality, encompassing security, backup, efficiency, and more, through the adoption of cloud computing methodologies instead of traditional networking approaches.
            </p>
            <b className="sub-heading">Manage and analyze data </b>
            <p className="caption">
            Leverage Google Cloud Platform diagrams to utilize various services in facilitating storage and analysis of large datasets. These services encompass BigQuery, Dataflow, Dataproc, and Data Fusion, contributing to cloud-based data management.
            </p>
            <b className="sub-heading">Navigate services categories </b>
            <p className="caption">
            Google Cloud Platform (GCP) offers a multitude of Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) options to enhance the efficiency of managing your service infrastructure.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="diagram-detail">
            <h1 className="heading">Designing GCP diagrams is effortless</h1>
            <b className="sub-heading">Quick-start templates </b>
            <p className="caption">
            Get started quickly with our ready-to-use templates. Effortlessly create your GCP architecture diagrams using these professional templates. They are fully customizable and available for free download.
            </p>
            <b className="sub-heading">User-friendly editor </b>
            <p className="caption">
            Create GCP diagrams effortlessly with an intuitive layout and interface. Benefit from intelligent auto-adjustment, drag-and-drop functionality, and a comprehensive toolkit for quick diagram creation in minutes.
            </p>
            <b className="sub-heading">Extensive GCP Icon Library </b>
            <p className="caption">
            Utilize a vast and continually expanding collection of GCP icons for creating globally comprehensible diagrams that are authentic and up-to-date.
            </p>
          </Col>
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={DragDrop} alt="Designing GCP Diagrams with MeshMap" className="gcp-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={CollImg} alt="Collaborate with your Team for GCP Diagrams" className="gcp-image" />
            </div>
          </Col>
          <Col md={6} className="diagram-detail">
            <h1 className="heading">Work together and instantly share with your team.</h1>
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
        <Row className="catalog">
          <Col md={6} className="diagram-detail">
            <h1 className="heading">Visualize your infrastructure</h1>
            <b className="sub-heading">Continuous visibility </b>
            <p className="caption">
            Import your existing Kubernetes, Helm, or Docker Compose applications. Interactively connect to terminal sessions or initiate and search log streams from your containers.
            </p>
            <b className="sub-heading">Common management </b>
            <p className="caption">
            Deploy designs, apply patterns, manage and operate your deployments and services in real-time.
            </p>
          </Col>
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={Visualize} alt="Visualize your GCP infrastructure with MeshMap" className="gcp-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </DiagramWrapper>
  );
};

export default Gcp;
