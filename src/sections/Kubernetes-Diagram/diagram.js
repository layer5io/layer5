import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import KubernetesCatalogDark from "./images/kubernetes-catalog-dark.svg";
import RelatedPicks from "../../components/RelatedPicks";
import ConfigGIF from "./images/config.gif";
import DeployGIF from "./images/deploy.gif";
import DragDropGIF from "./images/drag-drop.gif";
import IconLibraryGIF from "./images/icon-library.gif";
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
  .image-wrapper{
    border-radius: 0.25rem;
    overflow: hidden;
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
      .link {
        margin: 1rem 0;
        cursor: pointer;
      }
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

const Kubernetes = () => {

  const { isDark } = useStyledDarkMode();

  return (
    <DiagramWrapper>
      <Container className="diagram-container">
        <Row className="catalog">
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={ConfigGIF} alt="Kubernetes Diagrams for anything" className="kubernetes-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Diagram + Config = Awesome!</h2>
            <p className="caption">
              Stop wrestling with code templates! Our visual configuration interface gives you the precision of code with the ease of a diagram.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Deploy  with No Code Kubernetes</h2>
            <p className="caption">
              Our visual Kubernetes interface enables anyone to deploy production-grade software with no code. Whether you're new to Kubernetes and are looking for the best way to learn or a seasoned pro, MeshMap has all the features you need to be successful in deploying and configuring your software using the industry-leading container orchestrator, all with no code.            </p>
          </Col>
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={DeployGIF} alt="Kubernetes Diagrams for anything" className="kubernetes-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={DragDropGIF} alt="Kubernetes Diagrams for anything" className="kubernetes-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Visual drag & drop</h2>
            <p className="caption">
              Instantly search for and find any integration that CNCF supports and drop on the canvas to create your cloud native infrastructure. MeshMap allow you to drag, drop and connect all your cloud components together simply and easily - no-code required!
            </p>
            <Link className="link" href="/cloud-native-management/meshmap/design">Learn more &rarr;</Link>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Extensive Kubernetes Icon Library</h2>
            <p className="caption">
              Utilize a vast and continually expanding collection of Kubernetes icons designed for both diagramming and orchestration scenarios. Craft globally comprehensible diagrams that are not only authentic but also aligned with the latest industry standards.
            </p>
          </Col>
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={IconLibraryGIF} alt="Kubernetes Diagrams for anything" className="kubernetes-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? KubernetesCatalogDark : KubernetesCatalogDark} alt="Designing Kubernetes Diagrams with MeshMap" className="kubernetes-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Kickstart with Ready-to-Use Templates</h2>
            <p className="caption">
              Jumpstart your projects with our quick-start templates designed for both Kubernetes diagramming and orchestration management. Access a range of professionally crafted templates that are fully customizable, ensuring you can tailor them to your specific needs.
            </p>
            <Link className="link" href="/cloud-native-management/catalog">Learn more &rarr;</Link>
          </Col>
        </Row>
        <RelatedPicks heading="kubernetes" />
      </Container>
    </DiagramWrapper>
  );
};

export default Kubernetes;
