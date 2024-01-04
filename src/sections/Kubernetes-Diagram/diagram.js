import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import KubernetesIconsDarkLight from "./images/kubernetes-icons-light.svg";
import KubernetesIconsDark from "./images/kubernetes-icons.svg";
import KubernetesCatalogLight from "./images/kubernetes-catalog-light.svg";
import KubernetesCatalogDark from "./images/kubernetes-catalog-dark.svg";
import RelatedPicks from "../../components/RelatedPicks";
import AWSDiagramDark from "../Home/FeaturesContainer/images/aws.svg";
import AWSDiagramLight from "../Home/FeaturesContainer/images/aws-light.svg";
import GCPDiagramDark from "../GCP-Diagram/images/gcp-diagram-dark.svg";
import GCPDiagramLight from "../GCP-Diagram/images/gcp-diagram-light.svg";

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
  const content = [
    {
      id: 1,
      title: "AWS architecture diagram",
      redirectLink: "/cloud-native-management/generate-aws-architecture-diagram",
      imgSrc: isDark ? AWSDiagramDark : AWSDiagramLight,
    },
    {
      id: 2,
      title: "GCP architecture diagram",
      redirectLink: "/cloud-native-management/generate-gcp-architecture-diagram",
      imgSrc: isDark ? GCPDiagramDark : GCPDiagramLight,
    }
  ];

  return (
    <DiagramWrapper>
      <Container className="diagram-container">
        <Row className="catalog">
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? KubernetesIconsDark : KubernetesIconsDarkLight} alt="Kubernetes Diagrams for anything" className="kubernetes-image" />
            </div>
          </Col>
          <Col md={6} className="diagram-detail">
            <h2 className="heading">Kubernetes architectural diagrams tailored to meet any requirement</h2>
            <b className="sub-heading">Extensive Kubernetes Icon Library </b>
            <p className="caption">
              Utilize a vast and continually expanding collection of Kubernetes icons for creating globally comprehensible diagrams that are authentic and up-to-date.
            </p>
            <b className="sub-heading">Cost-Effective Solutions </b>
            <p className="caption">
            Kubernetes architecture diagrams offer economic benefits by presenting the entire system in one diagram, allowing the team to identify bottlenecks and their respective solutions.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="diagram-detail">
            <h2 className="heading">Designing Kubernetes diagrams is effortless</h2>
            <b className="sub-heading">Quick-start templates </b>
            <p className="caption">
              Get started quickly with our ready-to-use templates. Effortlessly create your Kubernetes architecture diagrams using these professional templates. They are fully customizable and available for free download.
            </p>
            <b className="sub-heading">User-friendly editor </b>
            <p className="caption">
              Create Kubernetes diagrams effortlessly with an intuitive layout and interface. Benefit from intelligent auto-adjustment, drag-and-drop functionality, and a comprehensive toolkit for quick diagram creation in minutes.
            </p>
          </Col>
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? KubernetesCatalogDark : KubernetesCatalogLight} alt="Designing Kubernetes Diagrams with MeshMap" className="kubernetes-image" />
            </div>
          </Col>
        </Row>
        <RelatedPicks content={content} />
      </Container>
    </DiagramWrapper>
  );
};

export default Kubernetes;
