import React from "react";
import { Container, Row, Col, Grid, } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import Cone from "../../assets/images/gitops/conelight.svg";
import MeshMap from "../../assets/images/meshmap/meshmap-color-icon.svg";
import { GitOpsWrapper, SquarePointWrapper } from "./meshery.style.js";
import SmpLogo from "../../assets/images/app/projects/smp.svg";
import Reviews from "../Pricing/review-slider";


const SquarePoint = ({ children }) => {
  return <SquarePointWrapper>
    <div className="square-box" />
    <p className="content" >{children}</p>
  </SquarePointWrapper>;
};


const GitOpsPage = () => {
  return (
    <GitOpsWrapper>
      <Container>
        <div style={{ marginTop: "5rem" }} className="info">
          <Row className="description">
            <Col className="desc-text" lg={6} md={6} sm={10} xs={8}>
              <h1 className="heading-1"> Pipelining Cloud Native Insights and GitOps</h1>
              <p className="desc-p">
                Using SMP specs on your CI/CD pipelines with Meshery's GitHub Actions and MeshMap GitHub Action
              </p>
            </Col>
            <Col lg={6} md={6} className="hero-images">
              <div className="hero-image-container" >
                <img src={MeshMap} style={{ position: "absolute", height: "155px", width: "235px" }} />
                <img src={Cone} />
              </div>
              <div className="hero-image-container" >
                <img src={SmpLogo} style={{ position: "absolute", height: "235px", width: "235px" }} />
                <img src={Cone} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <div className="info">
          <Row className="description">
            <Col lg={6} md={6} className="hero-image">
              <div className="image-container" >
                <img src={SmpLogo} style={{ position: "absolute", height: "235px", width: "235px" }} />
                <img src={Cone} />
              </div>
            </Col>
            <Col className="desc-text" lg={6} md={6} xs={8} sm={10} >
              <h1 className="heading-1">Service Mesh Performance GitHub Action</h1>
              <SquarePoint>Measuring and managing the performance of a service mesh is key to efficient operation of any service mesh</SquarePoint>
              <SquarePoint>Meshery is the canonical implementation of the Service Mesh Performance specification</SquarePoint>
              <SquarePoint>Choose from multiple load generators</SquarePoint>
              <SquarePoint>Use a highly configurable set of load profiles with variable tunable facets to run a performance test</SquarePoint>
              <Button primary className="learn-more-btn" title="Learn More" url="./operating-service-meshes"/>
            </Col>
          </Row>
        </div>
      </Container>


      <Container>
        <div className="info">
          <Row className="description">
            <Col className="desc-text" lg={6} md={6} xs={8} sm={10} >
              <h1 className="heading-1">MeshMap GitHub Action</h1>
              <SquarePoint>Connect your GitHub repository and see the magic</SquarePoint>
              <SquarePoint>Visualize your manifest file in GitHub</SquarePoint>
              <SquarePoint>Easy to configure</SquarePoint>
            </Col>
            <Col lg={6} md={6} className="hero-image">
              <div className="image-container" >
                <img src={MeshMap} style={{ position: "absolute", height: "250px" }} />
                <img src={Cone} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Reviews/>
    </GitOpsWrapper>
  );
};

export default GitOpsPage;
