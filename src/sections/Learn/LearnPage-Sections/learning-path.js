import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Row, Col, Container } from "../../../reusecore/Layout";
import CardComponent from "../../../components/Learn-Components/Card-Component";
import Button from "../../../reusecore/Button";
import styled from "styled-components";

const LearningPathsWrapper = styled.div`
    Button:hover {
  box-shadow: 0 2px 10px ${props => props.theme.DarkTheme ? "rgb(255 255 255 / 40%)" : "rgb(0 0 0 / 40%)"};
    } 
    margin: 3rem 0 4rem;

    .learn-path-heading {
        text-align: center;
        margin: 2rem 0
    }
    .learn-subtitle {
        text-align: center;
    }
    .learning-path-cards{
        margin: auto;
        justify-content: center;
        padding: 6rem 0;

        @media(max-width:500px){
            padding: 6rem 2rem;
        }
    }
    .see-more-button {
      text-align: center;
    }
`;

const LearningPaths = () => {
  const data = useStaticQuery(graphql`
    query learningPaths {
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
            disabled
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
    <LearningPathsWrapper>
      <Container>
        <h1 className="learn-path-heading">Learning Paths</h1>
        <div className="learn-subtitle">
          <h3>Learn how to build an application and </h3>
          <h3>manage it using a service mesh</h3>
        </div>
        <Row className="learning-path-cards">
          {data.learnPaths.nodes.map((tutorial) => (
            <Col sm={6} key={tutorial.id}>
              <CardComponent tutorial={tutorial} path={`learning-paths/${tutorial.fields.learnpath}`} courseCount={getCoursesOfaLearningPath(tutorial.fields.learnpath).length} />
            </Col>
          ))}
        </Row>
        <div className="see-more-button">
          <Button primary title="Checkout all learning paths" url="/learn/learning-paths" />
        </div>
      </Container>
    </LearningPathsWrapper>
  );
};

export default LearningPaths;