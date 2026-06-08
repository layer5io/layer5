import React from "react";
import { LearnLayer5GridWrapper } from "./learnlayer5.style";
import { graphql, useStaticQuery } from "gatsby";
import PageHeader from "../../reusecore/PageHeader";
import { Container } from "../../reusecore/Layout";
import LearnInfo from "../../components/Learn-Components/LearnInfo";
import WhatAwaitsSection from "../../components/Learn-Components/what-await-section";
import Book_Giveaway from "../../assets/images/learn/istio-book-giveaway.webp";
import JoinCommunity from "../Community/Join-community";
import CanvasIllustration from "../../components/Learn-Components/Canvas-Illustration";

const LearnPathsPage = () => {
  const data = useStaticQuery(graphql`
    query allLearnPath {
      coursesCount: allMdx(
        filter: { fields: { collection: { eq: "content-learn" } } }
      ) {
        edges {
          node {
            fields {
              course
            }
          }
        }
      }
      chaptersCount: allMdx(
        filter: { fields: { collection: { eq: "content-learn" } } }
      ) {
        edges {
          node {
            fields {
              chapter
            }
          }
        }
      }
      meshesCount: allMdx(
        filter: { fields: { collection: { eq: "content-learn" } } }
      ) {
        edges {
          node {
            fields {
              section
              pageType
            }
          }
        }
      }
    }
  `);

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
        <LearnInfo
          courses={data.coursesCount.edges}
          chapters={data.chaptersCount.edges}
          meshes={data.meshesCount.edges}
        />
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
