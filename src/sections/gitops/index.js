import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import Cone from "../../assets/images/gitops/conelight.svg";
import { GitOpsWrapper, SquarePointWrapper } from "./gitops.style.js";
import SmpLogo from "../../assets/images/app/projects/smp.svg";
import Reviews from "../Pricing/review-slider";
import { ReactComponent as MeshMapStack } from "../../assets/images/meshmap/meshmap-light-stacked.svg";


const SquarePoint = ({ children }) => {
  return <SquarePointWrapper>
    <div className="square-box" />
    <p className="content">{children}</p>
  </SquarePointWrapper>;
};


const GitOpsPage = () => {
  return (
    <GitOpsWrapper>
      <div className="gradient-wrapper" />
      <div className="content-container first-content-container">
        <Row className="content-row">
          <Col className="desc-text-container" lg={6} md={6} sm={10} xs={10}>
            <h1 className="heading-1"> GitOps with Cloud <br/> Native Insights</h1>
            <p className="desc-p">
                Give your pipelines super powers with Meshery's GitHub Actions
            </p>
          </Col>
          <Col lg={6} md={6} className="hero-images">
            <div className="hero-image-container" >
              <MeshMapStack className="meshmap-stack-hero" />
              <img src={Cone} />
            </div>
            <div className="hero-image-container">
              <img src={SmpLogo} style={{ position: "absolute", height: "235px", width: "235px" }} />
              <img src={Cone} />
            </div>
          </Col>
        </Row>
      </div>

      <div className="content-container content-container-more-width">
        <Row className="content-row">
          <Col lg={6} md={6} className="desc-text-container">
            <h1 className="heading-1">MeshMap GitHub Action</h1>
            <SquarePoint>See your deployment before you merge</SquarePoint>
            <SquarePoint>Connect MeshMap to your GitHub repo and see changes pull request-to-pull request</SquarePoint>
            <SquarePoint>Get snapshots of your infrastructure directly in your PRs</SquarePoint>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button primary className="learn-more-btn" title="Install" url="https://meshery.layer5.io/connect/github/new"/>
            </div>
          </Col>
          <Col className="hero-image" lg={6} md={6} xs={12} sm={10} >
            <div className="image-container" >
              <MeshMapStack className="logo" />
              <img src={Cone} className="cone-image" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="content-container content-container-more-width">
        <Row className="content-row">
          <Col className="desc-text-container" lg={6} md={6} xs={12} sm={10} >
            <h1 className="heading-1">Red light performance regressions</h1>
            <SquarePoint>Baseline and analyze the performance of your services is key to efficient operation of any application</SquarePoint>
            <SquarePoint>Meshery is the canonical implementation of the Cloud Native Performance specification</SquarePoint>
            <SquarePoint>Define your performance profiles upfront. See statistcal analysis with microservice latency and throughput quartiles</SquarePoint>
            <SquarePoint>Meshery includes your choice of load generator, so that you can meausure your way</SquarePoint>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button primary className="learn-more-btn" title="Install" url="https://github.com/marketplace/actions/performance-testing-with-meshery"/>
            </div>
          </Col>
          <Col lg={6} md={6} className="hero-image" style={{ display: "flex", justifyContent: "flex-end" }} >
            <div className="image-container" >
              <img src={SmpLogo} className="logo" />
              <img src={Cone} className="cone-image" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="reviews-container" >
        <Reviews/>
      </div>

    </GitOpsWrapper>
  );
};

export default GitOpsPage;
