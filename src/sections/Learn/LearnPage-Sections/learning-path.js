import React from "react";
import { Container } from "../../../reusecore/Layout";
import styled from "styled-components";
import CanvasIllustration from "../../../components/Learn-Components/Canvas-Illustration";

const LearningPathsWrapper = styled.div`
  margin: 3rem 0 4rem;

  .learn-path-heading {
    text-align: center;
    margin: 2rem 0;
  }
  .learn-subtitle {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const LearningPaths = () => {
  return (
    <LearningPathsWrapper>
      <Container>
        <h1 className="learn-path-heading">Learning Paths</h1>
        <div className="learn-subtitle">
          <h3>Learn DevOps and platform engineering</h3>
        </div>

        <CanvasIllustration />
      </Container>
    </LearningPathsWrapper>
  );
};

export default LearningPaths;
