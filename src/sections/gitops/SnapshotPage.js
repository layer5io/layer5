import React from "react";
import { PageWrapper,ContentContainerWrapper,HeroContentContainerWrapper, Heading, Description } from "./snapshot.style";
import { ReactComponent as MeshMapStack } from "../../assets/images/meshmap/meshmap-light-stacked.svg";
import Cone from "../../assets/images/gitops/conelight.svg";
import GithubActionComment from "../../assets/images/gitops/GithubActionComment.png";
import Button from "../../reusecore/Button";
import SquarePoint from "./SquarePoint";
import Reviews from "../Pricing/review-slider";
import ServicePerformanceProfileTest from "../../assets/images/gitops/service-mesh-performance-profile.png";
import { ColumnContainer, ContentRow, TextColumn } from "./common";


const SnapshotPage = () => {
  return (
    <PageWrapper>
      <div className="gradient-wrapper" />
      <div className="gradient-wrapper-2" />

      <HeroContentContainerWrapper>
        <ContentRow>
          <TextColumn>
            <Heading>Visual insights in every pull request</Heading>
            <Description>
               Test your Kubernetes cluster and service mesh implementation for conformance with the SMI specification
            </Description>
            <Button primary className="learn-more-btn" title="INSTALL" url="https://cloud.layer5.io/connect/github/new"/>
          </TextColumn>
          <ColumnContainer>
            <MeshMapStack className="stack-logo" />
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
            <SquarePoint>You can configure this action to trigger with each of your releases, on every pull request.</SquarePoint>
          </TextColumn>

          <ColumnContainer>
            <MeshMapStack className="stack-logo" />
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

    </PageWrapper>
  );
};

export default SnapshotPage;

