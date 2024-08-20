import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
// import GCPIconsDark from "./images/gcp-icons-dark.svg";
import GCPCatalogDark from "./images/gcp-catalog-dark.svg";
import RelatedPicks from "../../components/RelatedPicks";
// import DeployGIF from "./images/gcp-deploy.gif";
import DragNDropGIF from "./images/gcp-drag-drop.gif";
import IconsLibraryGIF from "./images/gcp-icon-library.gif";
import { Link } from "gatsby";

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


  return (
    <DiagramWrapper>
      <Container className="diagram-container">

        {/* <Row className="catalog">
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={GCPIconsDark} alt="GCP Diagrams for anything" className="GCP-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Diagram + Config = Awesome!</h2>
            <p className="caption">
              Stop wrestling with code templates! Our visual configuration interface gives you the precision of code with the ease of a diagram.
            </p>
          </Col>
        </Row> */}
        {/* <Row className="catalog">
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Deploy with No Code GCP</h2>
            <p className="caption">
              Our visual GCP interface enables anyone to deploy production-grade software with no code. Whether you're new to GCP and are looking for the best way to learn or a seasoned pro, MeshMap has all the features you need to be successful in deploying and configuring your software, all with no code.
            </p>
          </Col>
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={DeployGIF} alt="GCP Diagrams for anything" className="GCP-image" />
            </div>
          </Col>
        </Row> */}
        <Row className="catalog">
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={DragNDropGIF} alt="GCP Diagrams for anything" className="GCP-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Visual drag & drop</h2>
            <p className="caption">
              MeshMap allow you to drag, drop and connect all your cloud components together simply and easily - no-code required!
            </p>
            <Link className="link" href="/cloud-native-management/meshmap/design">Learn more &rarr;</Link>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Extensive GCP Icon Library</h2>
            <p className="caption">
              Utilize a vast and continually expanding collection of GCP icons designed for both diagramming and orchestration scenarios. Craft globally comprehensible diagrams that are not only authentic but also aligned with the latest industry standards.
            </p>
          </Col>
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={IconsLibraryGIF} alt="GCP Diagrams for anything" className="GCP-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={GCPCatalogDark} alt="Designing GCP Diagrams with MeshMap" className="GCP-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Kickstart with Ready-to-Use Templates</h2>
            <p className="caption">
              Jumpstart your projects with our quick-start templates designed for both GCP diagramming and orchestration management. Access a range of professionally crafted templates that are fully customizable, ensuring you can tailor them to your specific needs.
            </p>
            <Link className="link" href="/cloud-native-management/catalog">Learn more &rarr;</Link>
          </Col>
        </Row>

        {/* <Row className="catalog">
          <Col lg={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? GCPIconsDark : GCPIconsLight} alt="GCP Diagrams for anything" className="gcp-image" />
            </div>
          </Col>
          <Col lg={6} className="diagram-detail">
            <h2 className="heading">GCP architectural diagrams tailored to meet any requirement</h2>
            <b className="sub-heading">Extensive GCP Icon Library </b>
            <p className="caption">
              Utilize a vast and continually expanding collection of Kubernetes icons designed for both diagramming and orchestration scenarios. Craft globally comprehensible diagrams that are not only authentic but also aligned with the latest industry standards.
            </p>
            <b className="sub-heading">Manage and analyze data </b>
            <p className="caption">
              Leverage Google Cloud Platform diagrams to utilize various services in facilitating storage and analysis of large datasets. These services encompass BigQuery, Dataflow, Dataproc, and Data Fusion, contributing to cloud-based data management.
              <br />
              <br />
              <a className="link" href="/cloud-native-management/meshmap/design">Learn more &rarr;</a>
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="diagram-detail">
            <h2 className="heading">Designing GCP diagrams is effortless</h2>
            <b className="sub-heading">Swift Kickstart with Ready-to-Use Templates</b>
            <p className="caption">
              Get started quickly with our ready-to-use templates. Effortlessly create your GCP architecture diagrams using these professional templates. They are fully customizable and available for free download.
            </p>
            <b className="sub-heading">Intuitively Designed User-Friendly Editor</b>
            <p className="caption">
              Create GCP diagrams effortlessly with an intuitive layout and interface. Benefit from intelligent auto-adjustment, drag-and-drop functionality, and a comprehensive toolkit for quick diagram creation in minutes.
              <br />
              <br />
              <a className="link" href="/cloud-native-management/catalog">Learn more &rarr;</a>
            </p>
          </Col>
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? GCPCatalogDark : GCPCatalogLight} alt="Designing GCP Diagrams with MeshMap" className="gcp-image" />
            </div>
          </Col>
        </Row> */}
        <RelatedPicks heading="gcp" />
      </Container>
    </DiagramWrapper>
  );
};

export default Gcp;
