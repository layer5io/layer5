import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import GCPIconsDark from "./images/gcp-icons-dark.svg";
import GCPIconsLight from "./images/gcp-icons-light.svg";
import GCPCatalogDark from "./images/gcp-catalog-dark.svg";
import GCPCatalogLight from "./images/gcp-catalog-light.svg";
import RelatedPicks from "../../components/RelatedPicks";
import AWSDiagramDark from "../Home/FeaturesContainer/images/aws.svg";
import AWSDiagramLight from "../Home/FeaturesContainer/images/aws-light.svg";
import KubernetesDark from "../Kubernetes-Diagram/images/kubernetes.svg";
import KubernetesLight from "../Kubernetes-Diagram/images/kubernetes-light.svg";
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
  const content = [
    {
      id: 1,
      title: "AWS architecture diagram",
      redirectLink: "/cloud-native-management/generate-aws-architecture-diagram",
      imgSrc: isDark ? AWSDiagramDark : AWSDiagramLight,
    },
    {
      id: 2,
      title: "Kubernetes architecture diagram",
      redirectLink: "/cloud-native-management/generate-kubernetes-architecture-diagram",
      imgSrc: isDark ? KubernetesDark : KubernetesLight,
    }
  ];
  return (
    <DiagramWrapper>
      <Container className="diagram-container">
        <Row className="catalog">
          <Col lg={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? GCPIconsDark : GCPIconsLight} alt="GCP Diagrams for anything" className="gcp-image" />
            </div>
          </Col>
          <Col lg={6} className="diagram-detail">
            <h2 className="heading">GCP architectural diagrams tailored to meet any requirement</h2>
            <b className="sub-heading">Extensive GCP Icon Library </b>
            <p className="caption">
            Utilize a vast and continually expanding collection of GCP icons for creating globally comprehensible diagrams that are authentic and up-to-date.
            </p>
            <b className="sub-heading">Manage and analyze data </b>
            <p className="caption">
            Leverage Google Cloud Platform diagrams to utilize various services in facilitating storage and analysis of large datasets. These services encompass BigQuery, Dataflow, Dataproc, and Data Fusion, contributing to cloud-based data management.
            </p>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="diagram-detail">
            <h2 className="heading">Designing GCP diagrams is effortless</h2>
            <b className="sub-heading">Quick-start templates </b>
            <p className="caption">
            Get started quickly with our ready-to-use templates. Effortlessly create your GCP architecture diagrams using these professional templates. They are fully customizable and available for free download.
            </p>
            <b className="sub-heading">User-friendly editor </b>
            <p className="caption">
            Create GCP diagrams effortlessly with an intuitive layout and interface. Benefit from intelligent auto-adjustment, drag-and-drop functionality, and a comprehensive toolkit for quick diagram creation in minutes.
            </p>
          </Col>
          <Col md={6} className="diagram-image">
            <div className="image-wrapper">
              <img src={isDark ? GCPCatalogDark : GCPCatalogLight} alt="Designing GCP Diagrams with MeshMap" className="gcp-image" />
            </div>
          </Col>
        </Row>
        <RelatedPicks content={content}/>
      </Container>
    </DiagramWrapper>
  );
};

export default Gcp;
