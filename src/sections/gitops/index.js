import React, { useContext } from "react";
import { Row, Col } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import { ThemeManagerContext } from "../../theme/app/ThemeManager";
import Cone from "../../assets/images/gitops/conelight.svg";
import { GitOpsWrapper } from "./gitops.style.js";
import SmpLogo_dark from "../../assets/images/app/projects/smp.svg";
import SmpLogo_light from "../../assets/images/service-mesh-performance/icon/smp-light.svg";
import Reviews from "../Pricing/review-slider";
import Github_Dark from "../../assets/images/socialIcons/github-dark.svg";
import Github_Light from "../../assets/images/socialIcons/github-light.svg";
import { ReactComponent as KanvasStack } from "../../assets/images/kanvas/kanvas-light-stacked.svg";
import SquarePoint from "./SquarePoint";



const GitOpsPage = () => {
  const { isDark } = useContext(ThemeManagerContext);
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
              <KanvasStack className="kanvas-stack-hero" />
              <img src={Cone} />
            </div>
            <div className="hero-image-container">
              <img src={isDark ? SmpLogo_light : SmpLogo_dark} style={{ position: "absolute", height: "235px", width: "235px" }} />
              <img src={Cone} />
            </div>
          </Col>
        </Row>
      </div>

      <div className="content-container content-container-more-width">
        <Row className="content-row">
          <Col lg={6} md={6} className="desc-text-container">
            <h1 className="heading-1 mobile-margin">What is GitOps?</h1>
            <SquarePoint>
              GitOps uses Git for defining and tracking infrastructure and app
              changes.
            </SquarePoint>
            <SquarePoint>
              It automates syncing actual state with Git's desired state.
            </SquarePoint>
            <SquarePoint>
              GitOps ensures consistent, auditable changes using code-defined
              configurations.
            </SquarePoint>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                primary
                className="learn-more-btn"
                title="Read More"
                url="https://layer5.io/resources/cloud-native/what-is-gitops"
              />
            </div>
          </Col>
          <Col className="hero-image" lg={6} md={6} xs={12} sm={10}>
            <div className="image-container">
              <img src={isDark ? Github_Dark : Github_Light} className="logo" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="content-container content-container-more-width">
        <Row className="content-row">
          <Col lg={6} md={6} className="desc-text-container">
            <h1 className="heading-1">Kanvas GitHub Action</h1>
            <SquarePoint>See your deployment before you merge</SquarePoint>
            <SquarePoint>Connect Kanvas to your GitHub repo and see changes pull request-to-pull request</SquarePoint>
            <SquarePoint>Get snapshots of your infrastructure directly in your PRs</SquarePoint>
            <div className="buttons-container">
              <Button primary className="learn-more-btn" title="Install" url="https://meshery.layer5.io/connect/github/new"/>
              <Button secondary className="learn-more-btn" title="Learn More" url="/solutions/gitops/snapshot"/>
            </div>
          </Col>
          <Col className="hero-image" lg={6} md={6} xs={12} sm={10} >
            <div className="image-container" >
              <KanvasStack className="logo" />
              <img src={Cone} className="cone-image" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="content-container content-container-more-width">
        <Row className="content-row">
          <Col className="desc-text-container" lg={6} md={6} xs={12} sm={10} >
            <h1 className="heading-1">Red light performance regressions</h1>
            <SquarePoint>Baselin and track the performance of your services. Put your application service efficient to the test</SquarePoint>
            <SquarePoint>Meshery is the canonical implementation of the Cloud Native Performance specification</SquarePoint>
            <SquarePoint>Define your performance profiles upfront. See statistcal analysis with microservice latency and throughput quartiles</SquarePoint>
            <SquarePoint>Meshery includes your choice of load generator, so that you can meausure your way</SquarePoint>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button primary className="learn-more-btn" title="Install" url="https://github.com/marketplace/actions/performance-testing-with-meshery"/>
            </div>
          </Col>
          <Col lg={6} md={6} className="hero-image" style={{ display: "flex", justifyContent: "flex-end" }} >
            <div className="image-container" >
              <img src={isDark ? SmpLogo_light : SmpLogo_dark} className="logo" />
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
