import React from "react";
import { LearnLayer5GridWrapper } from "./learnlayer5.style";
import { graphql, useStaticQuery } from "gatsby";
import PageHeader from "../../reusecore/PageHeader";
import { Row, Col, Container } from "../../reusecore/Layout";
import CardComponent from "../../components/Learn-Components/Card-Component";
import LearnInfo from "../../components/Learn-Components/LearnInfo";
import WhatAwaitsSection from "../../components/Learn-Components/what-await-section";
import Book_Giveaway from "../../assets/images/learn/istio-book-giveaway.jpg";
import JoinCommunity from "../Community/Join-community";
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
            disabled
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
      allCourses: allMdx(
        filter: {
          fields: { collection: { eq: "content-learn" },pageType: { eq: "course" } }
        }
      ) {
        nodes{
          fields{
            learnpath
          }
        }
      }
    }
  `);


  const getCoursesOfaLearningPath = (learnpath) => data.allCourses.nodes.filter(obj => obj.fields.learnpath === learnpath);

  return (
    <LearnLayer5GridWrapper>
      <Container>
        <PageHeader title="Learning Paths" />
        <div className="learn-subtitle">
          <h3>Learn how to build an application and </h3>
          <h3>manage it using a service mesh</h3>
        </div>
        <Row className="learning-path-cards">
          {data.learnPaths.nodes.map((tutorial) => (
            <Col sm={6} key={tutorial.id}>
              <CardComponent tutorial={tutorial} path={tutorial.fields.learnpath} courseCount={getCoursesOfaLearningPath(tutorial.fields.learnpath).length} />
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
        <div className="service-mesh-patterns">
          <div className="service-mesh-patterns_text-and_button">
            <h1>Use Service Mesh Patterns</h1>
            <p>Service mesh patterns help you get the most out of any service mesh. Each pattern can be used as a template and is customizable.</p>
            <Button secondary title="Visit Service Mesh Patterns website" url="https://service-mesh-patterns.github.io/service-mesh-patterns/" external="true" />
          </div>
        </div>
        <JoinCommunity
          image={Book_Giveaway}
          header={"Don't Learn Alone"}
          text={"Check Out the Layer5 community, join us on Slack and learn with the community"}
          btn_primary={true} />
      </Container>
    </LearnLayer5GridWrapper >
  );
};

export default LearnPathsPage;
