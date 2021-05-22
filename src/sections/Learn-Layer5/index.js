import React from "react";
import { LearnLayer5GridWrapper} from "./learnlayer5.style";
import { graphql, useStaticQuery } from "gatsby";
import PageHeader from "../../reusecore/PageHeader";
import { Row, Col, Container} from "../../reusecore/Layout";
import CardComponent from "../../components/Learn-Components/Card-Component";
import LearnInfo from "../../components/Learn-Components/LearnInfo";

const LearnPathsPage = () => {
  const data = useStaticQuery(graphql`
    query allLearnPath {
      learnPaths: allMdx(
          filter: {fields: {collection: {eq: "content-learn"}, slug: {glob: "/*/"}}}
      ) {
          nodes {
              id,
              frontmatter{
                title,
                description,
                themeColor,   
                learningPaths                 
                cardImage{
                  childImageSharp {
                    gatsbyImageData(width: 200, layout: CONSTRAINED)
                  }
                  extension
                  publicURL
                },
                status
              }
              fields {
                  slug
                  learnpath
              }
          }
      }
      coursesCount: allMdx(
          filter: {fields: {collection: {eq: "content-learn"}}}
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
          filter: {fields: {collection: {eq: "content-learn"}}}
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
          filter: {fields: {collection: {eq: "content-learn"}}}
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
        <PageHeader title="Learning Paths"/>
        <div className="learn-subtitle">
          <p>Learn how to service mesh.Learn how to run</p>
          <p>Meshery, install Istio and deploy a sample app</p>
        </div>
        <Row className="learning-path-cards">
          {
            data.learnPaths.nodes.map((tutorial,index) => (
              <Col sm={12} md={6} xl={4} key={index}>
                <CardComponent tutorial={tutorial} key={index} />
              </Col>
            ))
          }
        </Row>
        <LearnInfo
          courses={data.coursesCount.edges}
          chapters={data.chaptersCount.edges}
          meshes={data.meshesCount.edges} />
      </Container>
    </LearnLayer5GridWrapper>
  );
};

export default LearnPathsPage;