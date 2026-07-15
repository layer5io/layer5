import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Row, Col, Container } from "../../../reusecore/Layout";
import CardComponent from "../../../components/Learn-Components/Card-Component";
import Button from "../../../reusecore/Button";
import styled from "styled-components";

const LearningPathsWrapper = styled.div`
    Button:hover {
  box-shadow: 0 2px 10px ${props => props.theme.whiteFourToBlackFour};
    } 
    margin: 3rem 0 4rem;

    .learn-path-heading {
        text-align: center;
        margin: 2rem 0
    }
    .learn-subtitle {
        text-align: center;
    }
    .custom-container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .learning-path-cards {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
        margin: auto;
        padding: 4rem 0;

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }

    .card-item-wrapper {
        display: flex;
        width: 100%;
        height: 100%;

        > div {
            max-width: none;
            width: 100%;
            margin: 0;
            height: 100%;
        }

        .card-parent {
            height: 100%;
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
      <div className="custom-container">
        <h1 className="learn-path-heading">Learning Paths</h1>
        <div className="learn-subtitle">
          <h3>Learn DevOps and platform engineering</h3>
        </div>
        <div className="learning-path-cards">
          {data.learnPaths.nodes.map((tutorial) => (
            <div key={tutorial.id} className="card-item-wrapper">
              <CardComponent tutorial={tutorial} path={`/learn/learning-paths/${tutorial.fields.learnpath}`} courseCount={getCoursesOfaLearningPath(tutorial.fields.learnpath).length} />
            </div>
          ))}
        </div>
        <div className="see-more-button">
          <Button $primary title="Checkout all learning paths" $url="/learn/learning-paths" />
        </div>
      </div>
    </LearningPathsWrapper>
  );
};

export default LearningPaths;