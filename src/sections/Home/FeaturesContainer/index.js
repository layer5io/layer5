import React from "react";

// Default imports
import Features from "../../../components/Features/index.js";
import WhiteboardingImage from "../../../assets/images/features-section/whiteboarding.svg";
import WhiteboardingImageLight from "../../../assets/images/features-section/whiteboarding-light.svg";
import CommentingImage from "../../../assets/images/features-section/commenting.svg";
// Named imports
import { Container } from "./style.js";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode.js";

// Functional component
const FeaturesContainer = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <>
      <Container>
        <h1 className="title">A platform designed for <span>growth</span></h1>
        <p className="subtitle">Tools to help you scale your cloud native infrastructure</p>
        <Features title="Collaborate with Precision" show_custom_cursor={true} redirectLink="/comments" desc="Real-time collaboration for cloud-native designs with live editing, instant feedback, and secure access controls. Elevate teamwork with integrated communication channels, ensuring efficient and secure project success." imgLink={CommentingImage}/>
        <Features title="Get rid of boring designs, Customize it!"  redirectLink="/whiteboard" desc="This expansion augments the tool’s functionality with a suite of annotation and visualization tools, allowing users to draw, annotate, and collaborate in real-time on their cloud native designs." imgLink={isDark ? WhiteboardingImage : WhiteboardingImageLight}/>
      </Container>
    </>
  );
};


export default FeaturesContainer;