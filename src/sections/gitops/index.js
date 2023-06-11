import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import Cone from "../../assets/images/gitops/conelight.svg";
import MeshMap from "../../assets/images/meshmap/meshmap-color-icon.svg";
import { GitOpsWrapper, SquarePointWrapper } from "./gitops.style.js";
import SmpLogo from "../../assets/images/app/projects/smp.svg";
import Reviews from "../Pricing/review-slider";


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
            <h1 className="heading-1"> Pipelining Cloud Native Insights and GitOps</h1>
            <p className="desc-p">
                Using SMP specs on your CI/CD pipelines with Meshery's GitHub Actions and MeshMap GitHub Action
            </p>
          </Col>
          <Col lg={6} md={6} className="hero-images">
            <div className="hero-image-container" >
              <img src={MeshMap} style={{ position: "absolute", height: "155px", width: "235px", animation: "floating 3s ease-in-out infinite" }} />
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
          <Col lg={6} md={6} className="hero-image">
            <div className="image-container" >
              <img src={SmpLogo} className="logo" />
              <img src={Cone} className="cone-image" />
            </div>
          </Col>
          <Col className="desc-text-container" lg={6} md={6} xs={12} sm={10} >
            <h1 className="heading-1">Service Mesh Performance GitHub Action</h1>
            <SquarePoint>Measuring and managing the performance of a service mesh is key to efficient operation of any service mesh</SquarePoint>
            <SquarePoint>Meshery is the canonical implementation of the Service Mesh Performance specification</SquarePoint>
            <SquarePoint>Choose from multiple load generators</SquarePoint>
            <SquarePoint>Use a highly configurable set of load profiles with variable tunable facets to run a performance test</SquarePoint>
            <Button primary className="learn-more-btn" title="Learn More" url="./operating-service-meshes"/>
          </Col>
        </Row>
      </div>

      <div className="content-container content-container-more-width">
        <Row className="content-row">
          <Col className="desc-text-container" lg={6} md={6} xs={12} sm={10} >
            <h1 className="heading-1">MeshMap GitHub Action</h1>
            <SquarePoint>Connect your GitHub repository and see the magic</SquarePoint>
            <SquarePoint>Visualize your manifest file in GitHub</SquarePoint>
            <SquarePoint>Easy to configure</SquarePoint>
          </Col>
          <Col lg={6} md={6} className="hero-image" style={{ display: "flex", justifyContent: "flex-end" }} >
            <div className="image-container" >
              <img src={MeshMap} className="logo" />
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
