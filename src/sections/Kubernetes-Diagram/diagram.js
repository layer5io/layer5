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
            <h2 className="heading">Kubernetes made simple.</h2>
            {/* <h3 className="sub-heading">Visualize, configure, deploy.</h3> */}
            <p className="caption">Ditch the code complexity. Design your Kubernetes clusters visually, then deploy with confidence.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={4} className="diagram-detail">
            <h2 className="heading">No Code Kubernetes Deployments</h2>
            <p className="caption">
              Kanvas for Kubernetes empowers anyone to deploy production-ready infrastructure effortlessly. No coding experience? No problem! Kanvas offers all the tools you need to deploy and configure your software on Kubernetes, the top container orchestrator, without writing a single line of code. Perfect for beginners learning the ropes or seasoned professionals seeking streamlined workflows, Kanvas ensures success in deploying and managing your applications on Kubernetes.</p>
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
            <h2 className="heading">From Idea to Infrastructure in Seconds</h2>
            <p className="caption">
            Unlock the power of cloud-native computing without the coding complexity. Kanvas' drag-and-drop interface lets you visualize and build your cloud infrastructure effortlessly.
            </p>
            <Link className="link" href="/cloud-native-management/kanvas/design">Learn more &rarr;</Link>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Comprehensive Kubernetes Toolkit for Platform Engineers</h2>
            <p className="caption">
            Leverage an extensive and continuously updated library of Kubernetes components, meticulously designed for both diagramming and orchestration. Create accurate, industry-standard diagrams that communicate your infrastructure designs effectively across teams. Click "dry run" before deploying to ensure your configurations are error-free.
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
              <img src={isDark ? KubernetesCatalogDark : KubernetesCatalogDark} alt="Designing Kubernetes Diagrams with Kanvas" className="kubernetes-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">From Zero to Kubernetes in Minutes</h2>
            <p className="caption">
            Fast-track your Kubernetes projects with our curated collection of quick-start templates for both diagramming and orchestration. These professional-grade blueprints are fully customizable, giving you the flexibility to adapt them to your unique requirements.
            </p>
            <Link className="link" href="/cloud-native-management/catalog">Explore Kubernetes templates &rarr;</Link>
          </Col>
        </Row>
        <RelatedPicks heading="kubernetes" />
      </Container>
    </DiagramWrapper>
  );
};

export default Kubernetes;
