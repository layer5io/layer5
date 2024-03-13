import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const docker_ext = "../../assets/images/docker-extension/docker-extension-meshery.webp";
import meshery_operator from "../../assets/images/meshery-operator/meshery-operator-dark.svg";
import meshsync from "./images/meshsync.svg";
import { Container, Row, Col } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const FeatureWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  background-color: ${(props) => props.theme.body};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-top: 0;
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
    padding: 2rem 0;
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

const Feature = () => {

  const { isDark } = useStyledDarkMode();

  return (
    <FeatureWrapper>
      <Container className="catalog-container">
        <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              {/* <img src={docker_ext} className="calalog-image" /> */}
              <StaticImage src={docker_ext} alt="Meshery, Docker Extension for Meshery" loading="lazy" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">Docker Extension for Meshery</h2>
            <p className="caption">
            From the convenience of your Docker Desktop interface, connect Meshery with your Kubernetes cluster. Watch as MeshSync discovers all of your Kuberentes clusters.
            </p>
            <Link className="link" href="/docker-extension-meshery">Learn more &rarr;</Link>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-detail">
            <h2 className="heading">
            Meshery Operator
            </h2>
            <p className="caption">
            The Kubernetes operator for Meshery, supports discovery and eventing of greenfield and brownfield of your workloads, services, deployments, replicasets, pods, containers, services, persistent volumes and all of your Kubernetes-based infrastructure.
            </p>
            <Link className="link" href="/cloud-native-management/meshery/meshery-operator">Learn more &rarr;</Link>
          </Col>
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={meshery_operator} className="calalog-image" />
            </div>
          </Col>
        </Row>
        <Row className="catalog">
          <Col md={6} className="catalog-image">
            <div className="image-wrapper">
              <img src={meshsync} className="calalog-image" />
            </div>
          </Col>
          <Col md={6} className="catalog-detail">
            <h2 className="heading">MeshSync</h2>
            <p className="caption">
             MeshSync was designed from the ground up to perform tiered discovery of your Kubernetes enviroment. MeshSync's working snapshot of the state of each cluster is stored in-memory and continuously refreshed.
            </p>
          </Col>
        </Row>
      </Container>
    </FeatureWrapper>
  );
};

export default Feature;
