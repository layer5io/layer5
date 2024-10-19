import React from "react";
import { PageWrapper,ContentContainerWrapper,HeroContentContainerWrapper, Heading, Description } from "./snapshot.style";
import { ReactComponent as KanvasStack } from "../../assets/images/kanvas/kanvas-light-stacked.svg";
import Cone from "../../assets/images/gitops/conelight.svg";
import GithubActionComment from "../../assets/images/gitops/GithubActionComment.png";
import Button from "../../reusecore/Button";
import SquarePoint from "./SquarePoint";
import Reviews from "../Pricing/review-slider";
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
               Verify your workload designs and Kubernetes cluster configurations prior to accepting and merging pull requests.
            </Description>
            <Button primary className="learn-more-btn" title="INSTALL" $url="https://meshery.layer5.io/connect/github/new"/>
          </TextColumn>
          <ColumnContainer>
            <KanvasStack className="stack-logo" />
            <img src={Cone} className="kanvas-stack-cone" />
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
            <SquarePoint>Kanvas Snapshot GitHub Action is available in the GitHub Marketplace.</SquarePoint>
            <SquarePoint>Connect Kanvas to your GitHub repo and see changes pull request-to-pull request.</SquarePoint>
            <SquarePoint>You can configure this action to trigger with each of your releases, on every pull request.</SquarePoint>
          </TextColumn>

          <ColumnContainer>
            <KanvasStack className="stack-logo" />
            <img src={Cone} className="kanvas-stack-cone" />
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

