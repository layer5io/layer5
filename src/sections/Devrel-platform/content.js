import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
import IntegrationDesigner from "./images/layer5-kanvas-designer.webp";
import DashboardImg from "./images/cncf_hub_dashboard_mac.png";
import PictureSlider from "./picture-slider";
// import Button from "../../../reusecore/Button";
import JourneySection from "./JourneySection";
import InlineQuotes from "../../components/Inline-quotes";
import YashSharmaIMg from "../../collections/members/yash-sharma/yash-sharma.webp";
const DevrelContentWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  background-color: ${(props) => props.theme.body};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-top: 100px;
  padding-bottom: 10px;
  @media (max-width: 468px) {
    margin: 3rem 0;
  }
  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  .devrel-container .devrel:nth-child(odd) {
    .devrel-image {
      .image-wrapper {
        justify-content: center;
        @media (max-width: 767px) {
          justify-content: center;
        }
      }
    }
  }

  .devrel-container .devrel:nth-child(even) {
    .devrel-image {
      @media (max-width: 767px) {
        order: 0;
      }
    }
    .devrel-detail {
      @media (max-width: 767px) {
        order: 1;
      }
    }
  }

  .devrel-detail.recognition-section {
    @media (min-width: 477px) and (max-width: 767px) {
      margin-top: 3.8rem;
    }
  }

  .devrel {
    display: flex;
    padding-bottom: 3rem;
    align-items: center;
    justify-content: space-around;
    }
    @media (max-width: 768px) {
      padding: 2rem 0;
    }
    @media (max-width: 468px) {
      flex-direction: column;
    }
    .devrel-detail {
      display: flex;
      flex-direction: column;
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
          padding: 0 50px;
          margin-bottom: 1rem;
        }
        @media (max-width: 467px) {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
      .caption {
        font-weight: 400;
        margin-top: 0;
        padding-left: 15px;
        font-size: 1.28rem;
        line-height: 2rem;
        color: ${(props) => props.theme.tertiaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
          list-style-image: url(https://docs.meshery.io/assets/img/meshery/meshery-logo-light.svg);
        }
        @media (max-width: 767px) {
          font-size: 1rem;
          line-height: 1.5rem;
          // text-align: center;
          padding: 0 50px;
        }
        @media (max-width: 467px) {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
    }
    .devrel-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 50%;
      @media (max-width: 767px) {
            max-width: 100%;
            margin-bottom: 20px;
      }
      .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
          justify-content: center;
        }
      }
    }

    .recognition-content {
      width: 100%;
      min-height: 28.25rem;
      @media (max-width: 767px) {
          width: 100%;
          min-height: 0;
      }
      position: relative;
      gap: 2rem;
      .badges-section {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .badge-stack {
          position: relative;
          width: 100%;
          height: 100%;
          // height: 16.25rem;
          // max-width: 25rem;
          max-width: 15rem;
          .badge-item {
            position: absolute;
            width: 11.25rem;
            height: 11.25rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            img {
              width: 140%;
              height: 140%;
              object-fit: contain;
              filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.2));
            }
            &:nth-child(1) {
                top: 0;
                left: calc(50% - 3.75rem);
              }
              &:nth-child(2) {
                top: 10.75rem;
                left: calc(50% - 9.5rem);
              }
              &:nth-child(3) {
                top: 10.75rem;
                left: calc(50% + 2rem);
              }
          }
        }
      }
    }
    @media (max-width: 62rem) {
      .recognition-content {
        .badges-section {
          padding: 1.25rem;
          .badge-stack {
            height: 16.25rem;
            .badge-item {
              width: 9.375rem;
              height: 9.375rem;
              img {
                width: 120%;
                height: 120%;
              }
              &:nth-child(1) {
                top: 0;
                left: calc(50% - 3.75rem);
              }
              &:nth-child(2) {
                top: 8.75rem;
                left: calc(50% - 7.5rem);
              }
              &:nth-child(3) {
                top: 8.75rem;
                left: calc(50% + 0rem);
              }
            }
          }
        }
      }
    }
    @media (max-width: 30rem) {
      .recognition-content {
        .badges-section .badge-stack .badge-item {
          width: 7.5rem;
          height: 7.5rem;
          &:nth-child(1) {
            left: calc(50% - 3.125rem);
          }
          &:nth-child(2) {
            top: 6.875rem;
            left: calc(50% - 6.25rem);
          }
          &:nth-child(3) {
            top: 6.875rem;
            left: calc(50% + 0rem);
          }
        }
      }
    }
  }
`;

const DevrelContent = () => {


  return (
    <>
      <DevrelContentWrapper>
        <Container className="devrel-container">
          <Row className="devrel">
            <Col $md={6} className="devrel-image">
              <div className="image-wrapper">
                <img src={IntegrationDesigner} />
              </div>
            </Col>
            <Col $md={6} className="devrel-detail">
              <h2 className="heading">Visual, Collaborative Teaching Environment</h2>
              <ul className="caption">
                <li><b>Live Kubernetes Clusters:</b> Give your audience hands-on experience with a collaborative live Kubernetes environment through Meshery Playground.</li>
                <li><b>Demonstrate Complex Concepts:</b> Explain cloud native architectures visually and interactively.</li>
                <li><b>Multi-Player Teaching & Presentations:</b> Conduct live demos and training sessions where participants can follow along in real-time, whether you're presenting at a conference, or leading a workshop.</li>
              </ul>
            </Col>
          </Row>
          <Row className="devrel">
            <Col $md={6} className="devrel-detail">
              <h2 className="heading">
              Content Creation and Publishing
              </h2>
              <ul className="caption">
                <li><b>Design Cloud Native Patterns:</b> Create and publish cloud native designs featuring any CNCF project.</li>
                <li><b>Curate Reference Architectures:</b> As a Solutions Engineer or Developer Relations professional, publish best practices and operational patterns for Kubernetes and cloud-native infrastructure.</li>
                <li><b>Develop Learning Paths:</b> Create structured educational journeys that combine theory with hands-on practice.</li>
                <li><b>Design Challenges/Tutorials:</b> Create interactive labs using Meshery Playground with step-by-step guides and live demonstrations on diverse cloud native concepts.</li>
              </ul>
            </Col>
            <Col $md={6} className="devrel-image">
              <PictureSlider />
            </Col>
          </Row>
          <Row className="devrel">
            <Col $md={6} className="devrel-image">
              <div className="image-wrapper">
                <img src={DashboardImg} />
              </div>
            </Col>
            <Col $md={6} className="devrel-detail">
              <h2 className="heading">Build Your Professional Brand</h2>
              <ul className="caption">
                <li><b>Public User Profile:</b>  All your published designs and reference architectures are linked to your profile, with real-time stats to track their reach and impact.</li>
                <li><b>Showcase Your Metrics and Leaderboard Position: </b>Track your content's performance with analytics, leaderboard rankings, and engagement metrics. Assess what's resonating with your audience and refine your developer advocacy strategy accordingly.</li>
                <li><b>Themed Organization:</b> Create a personalized dashboard with your organization's colors and logo, and invite members.</li>
                <li><b>Dedicated Workspace:</b> Maintain a centralized environment for all your content and resources.</li>
              </ul>
            </Col>
          </Row>
          <Row className="devrel">
            <Col $md={6} className="devrel-detail recognition-section">
              <h2 className="heading">
              Recognition Program
              </h2>
              <ul className="caption">
                <li><b>Achievement Badges:</b> Earn badges for key milestones, like streaming logs from a Kubernetes Pod for the first time.</li>
                <li><b>Leaderboard Visibility:</b> Participate in challenges, compete on leaderboards, and stand out in the community.</li>
                <li><b>Featured Mentions:</b> Get recognized when your content becomes popular, with shoutouts from the project.</li>
              </ul>
            </Col>

            <div className="recognition-content">
              <div className="badges-section">
                <div className="badge-stack">
                  <div className="badge-item">
                    <img
                      src="https://badges.layer5.io/assets/badges/docker-captain/docker-captain.png"
                      alt="Docker Captain Badge"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://badges.layer5.io/assets/badges/cncf-ambassador/cncf-ambassador.png"
                      alt="CNCF Ambassador Badge"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://badges.layer5.io/assets/badges/meshery/meshery.png"
                      alt="Meshery Badge"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row className="devrel">
            <InlineQuotes
              person="Yash Sharma"
              title="Layer5 MeshMate & Developer Advocate at DigitalOcean"
              quote="The platform helped me gain recognition in Developer Relations by showcasing my popular designs to the community."
              image={YashSharmaIMg}/>
          </Row>
        </Container>
      </DevrelContentWrapper>
      <JourneySection />
    </>
  );
};

export default DevrelContent;
