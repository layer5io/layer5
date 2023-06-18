import React from "react";
import { SnapshotWrapper,ContentContainerWrapper,HeroContentContainerWrapper,ContentRowWrapper, Heading, Description, HeroImageWrapper } from "./snapshot.style";
import { Row, Col } from "../../reusecore/Layout";
import { ReactComponent as MeshMapStack } from "../../assets/images/meshmap/meshmap-light-stacked.svg";
import Cone from "../../assets/images/gitops/conelight.svg";
import Button from "../../reusecore/Button";

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
          <HeroImageColumnContainer>
            <MeshMapStack className="meshmap-stack-hero" />
            <img src={Cone} className="meshmap-stack-cone" />
          </HeroImageColumnContainer>
        </ContentRow>
      </HeroContentContainerWrapper>
    </SnapshotWrapper>
  );
};

export default SnapshotPage;

const HeroImageColumnContainer = ({ children }) => {

  return (
    <Col lg={5} md={6} style={{ display: "flex",justifyContent: "end" }} >
      <HeroImageWrapper>
        {children}
      </HeroImageWrapper>
    </Col>
  );
};


const ContentRow = ({ children }) => {

  return (
    <ContentRowWrapper>
      <Row className="content-row">
        {children}
      </Row>
    </ContentRowWrapper>
  );
};

const TextColumn = ({ children }) => {
  return (
    <Col className="desc-text-container" lg={7} md={6} sm={10} xs={10}>
      {children}
    </Col>
  );
};
