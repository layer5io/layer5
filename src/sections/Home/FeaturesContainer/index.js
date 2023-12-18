import React from "react";

// Default imports
import Features from "../../../components/Features/index.js";
import WhiteboardingImage from "./images/whiteboarding.svg";
import WhiteboardingImageLight from "./images/whiteboarding-light.svg";
import CommentingImageDark from "./images/commenting.svg";
import CommentingImageLight from "./images/commenting-white.svg";
// Named imports
import { Container } from "./style.js";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode.js";

// Functional component
const FeaturesContainer = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <>
      <Container>
        <h1 className="title">
          Deploy <i>faster </i>together with <span>Confidence</span>
        </h1>
        <p className="subtitle">
          Give your team full application visibility at every layer so the team
          can ship, refactor and onboard faster.
        </p>
        {/* Tools to help you scale your cloud native infrastructure */}
        <Features
          title="Collaborate with Precision"
          show_custom_cursor={true}
          animationOne={true}
          redirectLink="/comments"
          desc="Real-time collaboration for cloud and cloud native designs with live-editing, instant feedback, deploy dry runs, and secure access controls."
          imgLink={isDark ? CommentingImageDark : CommentingImageLight}
          cursor={0}
        />
        {/* Elevate teamwork with integrated communication channels, ensuring efficient and secure project success. */}
        <Features
          title="Generate stunning diagrams"
          show_custom_cursor={true}
          redirectLink="/whiteboard"
          desc="Crafting cloud-native symphonies: Our engineering diagramming tool is your conductor's baton, turning Kubernetes infrastructure into a canvas for freestyle orchestration."
          imgLink={isDark ? WhiteboardingImage : WhiteboardingImageLight}
        />
      </Container>
      {/* a suite of annotation and visualization tools, allowing users to draw, annotate, and collaborate in real-time on their cloud native designs. */}
    </>
  );
};

export default FeaturesContainer;
