import React from "react";
import { SnapshotWrapper,ContentContainerWrapper,HeroContentContainerWrapper,ContentRowWrapper, Heading, Description, ColumnWrapper, GithubActionCommentColumnWrapper } from "./snapshot.style";
import {  Col } from "../../reusecore/Layout";
import { ReactComponent as MeshMapStack } from "../../assets/images/meshmap/meshmap-light-stacked.svg";
import Cone from "../../assets/images/gitops/conelight.svg";
import GithubActionComment from "../../assets/images/gitops/GithubActionComment.png";
import Button from "../../reusecore/Button";
import SquarePoint from "./SquarePoint";
import Reviews from "../Pricing/review-slider";
import ServicePerformanceProfileTest from "../../assets/images/gitops/service-mesh-performance-profile.png";


const SnapshotPage = () => {
  return (
    <SnapshotWrapper>
      <div className="gradient-wrapper" />
      <HeroContentContainerWrapper>
        <ContentRow>
          <TextColumn>
            <Heading>Visual insights in every pull request</Heading>
            <Description>
               Test your Kubernetes cluster and service mesh implementation for conformance with the SMI specification
            </Description>
            <Button primary className="learn-more-btn" title="Install" url="https://cloud.layer5.io/connect/github/new"/>
          </TextColumn>
          <ColumnContainer>
            <MeshMapStack className="meshmap-stack-hero" />
            <img src={Cone} className="meshmap-stack-cone" />
          </ColumnContainer>
        </ContentRow>
      </HeroContentContainerWrapper>

      <ContentContainerWrapper>
        <ContentRow>
          <ColumnContainer >
            <img src={GithubActionComment} className="screenshot" alt="GithubActionComment" width={530} height={375} />
          </ColumnContainer>
          <ColumnContainer>
            <Heading>See your deployment <br/> before you merge.</Heading>
          </ColumnContainer>
        </ContentRow>
      </ContentContainerWrapper>

      <ContentContainerWrapper>
        <ContentRow>
          <TextColumn >
            <Heading>Using Meshery's Snapshot GitHub Action</Heading>
            <SquarePoint>MeshMap Snapshot GitHub Action is available in the GitHub Marketplace.</SquarePoint>
            <SquarePoint>Connect MeshMap to your GitHub repo and see changes pull request-to-pull request.</SquarePoint>
            <SquarePoint>You can configure this action to trigger with each of your releases, on every pull request.SquarePoint.</SquarePoint>
          </TextColumn>

          <ColumnContainer>
            <MeshMapStack className="meshmap-stack-hero" />
            <img src={Cone} className="meshmap-stack-cone" />
          </ColumnContainer>
        </ContentRow>
      </ContentContainerWrapper>


      <ContentContainerWrapper>
        <ContentRow>
          <TextColumn>
            <Heading>See this sample GitHub workflow (action.yml) for more configuration details.</Heading>
          </TextColumn>
          <ColumnContainer >
            <img src={ServicePerformanceProfileTest} className="screenshot" alt="ServicePerformanceProfileTest" width={530} height={375} />
          </ColumnContainer>
        </ContentRow>
      </ContentContainerWrapper>


      <div className="reviews-container" >
        <Reviews/>
      </div>

    </SnapshotWrapper>
  );
};

export default SnapshotPage;

const ColumnContainer = ({ children }) => {

  return (
    <ColumnWrapper lg={5} md={6}>
      {children}
    </ColumnWrapper>
  );
};


const ContentRow = ({ children }) => {

  return (
    <ContentRowWrapper>
      {children}
    </ContentRowWrapper>
  );
};

const TextColumn = ({ children }) => {
  return (
    <Col className="desc-text-container" lg={7} md={6} sm={10} xs={12}>
      {children}
    </Col>
  );
};
