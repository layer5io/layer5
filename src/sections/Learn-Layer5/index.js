import React from "react";
import { LearnLayer5GridWrapper } from "./learnlayer5.style";
import { graphql, useStaticQuery } from "gatsby";
import PageHeader from "../../reusecore/PageHeader";
import { Row, Col, Container } from "../../reusecore/Layout";
import CardComponent from "../../components/Learn-Components/Card-Component";
import LearnInfo from "../../components/Learn-Components/LearnInfo";
import WhatAwaitsSection from "../../components/Learn-Components/what-await-section";
import Button from "../../reusecore/Button";

const LearnPathsPage = () => {
  const data = useStaticQuery(graphql`
    query allLearnPath {
      learnPaths: allMdx(
        filter: {
          fields: { collection: { eq: "content-learn" }, pageType: { eq: "learnpath" } }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            themeColor
            courses
            cardImage {
              childImageSharp {
                gatsbyImageData(width: 200, layout: CONSTRAINED)
              }
              extension
              publicURL
            }
            status
          }
          fields {
            slug
            learnpath
          }
        }
      }
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
          <p>Learn how to service mesh.Learn how to run</p>
          <p>Meshery, install Istio and deploy a sample app</p>
        </div>
        <Row className="learning-path-cards">
          {data.learnPaths.nodes.map((tutorial) => (
            <Col sm={12} md={6} xl={4} key={tutorial.id}>
              <CardComponent tutorial={tutorial} />
            </Col>
          ))}
        </Row>
      </Container>
      <WhatAwaitsSection />
      <Container>
        <LearnInfo
          courses={data.coursesCount.edges}
          chapters={data.chaptersCount.edges}
          meshes={data.meshesCount.edges}
        />
        <div className="join-community">
          <div className="join-community_text-and_button">
            <h1>Don't Learn Alone</h1>
            <p>
              Check Out the Layer5 community, Join us on Slack and learn with
              the community
            </p>
          </div>
          <Button
            secondary
            title="Join Our Talented Community"
            url="http://slack.layer5.io/"
          />
        </div>
      </Container>
    </LearnLayer5GridWrapper>
  );
};

export default LearnPathsPage;
