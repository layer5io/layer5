import React from "react";
import { LearnLayer5GridWrapper } from "./learnlayer5.style";
import PageHeader from "../../reusecore/PageHeader";
import { Container } from "../../reusecore/Layout";
import WhatAwaitsSection from "../../components/Learn-Components/what-await-section";
import Book_Giveaway from "../../assets/images/learn/istio-book-giveaway.webp";
import JoinCommunity from "../Community/Join-community";
import CanvasIllustration from "../../components/Learn-Components/Canvas-Illustration";

const LearnPathsPage = () => {
  return (
    <LearnLayer5GridWrapper>
      <Container>
        <PageHeader title="Learning Paths" />
        <div className="learn-subtitle">
          <h3>Learn how to build an application and </h3>
          <h3>manage it using cloud native infrastructure</h3>
        </div>
        <CanvasIllustration />
      </Container>
      <Container>
        <WhatAwaitsSection />
        <JoinCommunity
          image={Book_Giveaway}
          header={"Don't Learn Alone"}
          text={
            "Check Out the Layer5 community, join us on Slack and learn with the community"
          }
          btn_primary={true}
        />
      </Container>
    </LearnLayer5GridWrapper>
  );
};

export default LearnPathsPage;
