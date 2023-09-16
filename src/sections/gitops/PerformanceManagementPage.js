import React from "react";
import { PageWrapper,ContentContainerWrapper,HeroContentContainerWrapper, Heading, Description } from "./snapshot.style";
import { ReactComponent as MeshMapStack } from "../../assets/images/meshmap/meshmap-light-stacked.svg";
import Cone from "../../assets/images/gitops/conelight.svg";
import SMPconfig from "../../assets/images/gitops/SMPconfig.png";
import SMPTestconfig from "../../assets/images/gitops/SMPTestConfig.png";

import Button from "../../reusecore/Button";
import SquarePoint from "./SquarePoint";
import Reviews from "../Pricing/review-slider";
import ServicePerformanceProfileTest from "../../assets/images/gitops/service-mesh-performance-profile.png";
import { ColumnContainer, ContentRow, TextColumn } from "./common";
import { ReactComponent as SmpLogo }  from "../../assets/images/service-mesh-performance/stacked/smp-light-text.svg";
import { ReactComponent as GithubLogo } from "../../collections/integrations/github/icon/color/github-color.svg";

const PerformanceManagementPage = () => {
  return (
    <PageWrapper>

      <div className="gradient-wrapper" />
      <div className="gradient-wrapper-2" />

      <HeroContentContainerWrapper>
        <ContentRow>
          <TextColumn>
            <Heading>Performance regressions begone</Heading>
            <Description>
               Test your Kubernetes cluster and service mesh implementation for conformance with the SMI specification
            </Description>
            <Button primary className="learn-more-btn" title="Go to Documentation" url="https://cloud.layer5.io/connect/github/new"/>
          </TextColumn>
          <ColumnContainer>
            <SmpLogo className="stack-logo" />
            <img src={Cone} className="meshmap-stack-cone" />
          </ColumnContainer>
        </ContentRow>
      </HeroContentContainerWrapper>

      <ContentContainerWrapper>
        <ContentRow>
          <ColumnContainer >
            <img src={SMPconfig} className="code-screenshot" alt="SMPconfig" width={605} height={740} />
          </ColumnContainer>
          <ColumnContainer>
            <Heading>A sample configuration of the action</Heading>
          </ColumnContainer>
        </ContentRow>
      </ContentContainerWrapper>

      <ContentContainerWrapper>
        <ContentRow>
          <ColumnContainer>
            <GithubLogo className="stack-logo" />
            <img src={Cone} className="meshmap-stack-cone" />
          </ColumnContainer>

          <TextColumn>
            <Heading>Using Meshery's Service Mesh Performance GitHub Action</Heading>
            <SquarePoint>The Service Mesh Performance GitHub Action is available in the GitHub Marketplace.</SquarePoint>
            <SquarePoint>You can create your own performance profiles to run repeatable tests with Meshery.</SquarePoint>
            <SquarePoint>You can configure this action to trigger with each of your releases, on every pull request.</SquarePoint>
          </TextColumn>
        </ContentRow>
      </ContentContainerWrapper>

      <ContentContainerWrapper>
        <ContentRow>
          <TextColumn>
            <Heading>A sample configuration <br/> of the action</Heading>
          </TextColumn>
          <ColumnContainer >
            <img src={SMPconfig} className="code-screenshot" alt="SMPconfig" width={605} height={740} />
          </ColumnContainer>
        </ContentRow>
      </ContentContainerWrapper>

      <ContentContainerWrapper>
        <ContentRow>
          <ColumnContainer >
            <img src={SMPTestconfig} className="code-screenshot" alt="SMPTestconfig" width={605} height={740} />
          </ColumnContainer>
          <TextColumn>
            <Heading>Define your test <br /> configuration in an SMP compatible configuration file</Heading>
          </TextColumn>
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

export default PerformanceManagementPage;

