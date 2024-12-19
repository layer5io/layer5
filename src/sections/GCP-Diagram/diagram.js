import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
// import GCPIconsDark from "./images/gcp-icons-dark.svg";
import GCPCatalogDark from "./images/gcp-catalog-dark.svg";
//import GCPCatalogLight from "./images/gcp-catalog-light.svg";
import RelatedPicks from "../../components/RelatedPicks";
// import DeployGIF from "./images/gcp-deploy.gif";
import DragNDropGIF from "./images/gcp-drag-drop.gif";
import IconsLibraryGIF from "./images/gcp-icon-library.gif";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
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

  const { isDark } = useStyledDarkMode();
  return (
    <DiagramWrapper>
      <Container className="diagram-container">
        <Row className="catalog">
          <Col md={8} className="diagram-image">
            <div className="image-wrapper">
              <img src={DragNDropGIF} alt="GCP Diagrams for anything" className="GCP-image" />
            </div>
          </Col>
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Visual drag & drop</h2>
            <p className="caption">
              Kanvas allow you to drag, drop and connect all your cloud components together simply and easily - no-code required!
            </p>
            <Link className="link" href="/cloud-native-management/kanvas/design">Learn more &rarr;</Link>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={4} className="diagram-detail">
            <h2 className="heading">Extensive GCP component library</h2>
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
              <img src={isDark ? GCPCatalogDark : GCPCatalogDark} alt="Designing GCP Diagrams with Kanvas" className="GCP-image" />
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

        <RelatedPicks heading="gcp" />
      </Container>
    </DiagramWrapper>
  );
};

export default Gcp;
