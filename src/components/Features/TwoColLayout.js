import React, { useRef } from "react";
import { Link } from "gatsby";
import {
  Container,
  Section,
  ContentWrapper,
  ImageWrapper,
} from "./two-col-layout.js";
import DiagrammingImageDark from "../../assets/images/AWS-Diagram/aws.svg";
import DiagrammingImageLight from "../../assets/images/AWS-Diagram/aws-light.svg";
import AWSLogoDark from "../../sections/Home/FeaturesContainer/images/aws-logo-dark.svg";
import AWSLogoLight from "../../sections/Home/FeaturesContainer/images/aws-logo-light.svg";
import GCPLogo from "../../sections/Home/FeaturesContainer/images/gcp-logo.svg";
import OrchestrationLight from "./images/orchestration-light.svg";
import OrchestrationDark from "./images/orchestration.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode.js";
const TwoColLayout = () => {
  const containerRef = useRef(null);
  const { isDark } = useStyledDarkMode();
  return (
    <Section>
      <Container>
        <ImageWrapper ref={containerRef}>
          <Link to="/whiteboard">
            <img src={isDark ? DiagrammingImageDark : DiagrammingImageLight} alt="image" />
          </Link>
        </ImageWrapper>
        <ContentWrapper>
          <h2>Simplify Your Visual Workflow</h2>
          <p className="text">Incorporate AWS, GCP and Kubernetes components into Meshery designs for comprehensive and intuitive system mapping, documentation, and orchestration.</p>
          <div className="small-card-container">
            <Link className="small-card" to="/cloud-native-management/generate-aws-architecture-diagram">
              <img src={isDark ? AWSLogoDark : AWSLogoLight} width={40} />
              <span>Amazon Web Services</span>
            </Link>
            <Link className="small-card" to="/cloud-native-management/generate-gcp-architecture-diagram">
              <img src={GCPLogo} width={40} />
              <span>Google Cloud Platform</span>
            </Link>
          </div>
        </ContentWrapper>
      </Container>
      <Container>
        <ImageWrapper ref={containerRef}>
          <Link to="/">
            <img src={isDark ? OrchestrationDark : OrchestrationLight} alt="image" />
          </Link>
        </ImageWrapper>
        <ContentWrapper>
          <h2>Orchestration Management</h2>
          <p className="text">Empower DevOps, platform, and site reliability engineers with our orchestration management solution. Achieve seamless collaboration and operational harmony for enhanced productivity.</p>
          <Link to="/whiteboard" style={{ visibility: "hidden" }}>Learn more &rarr;</Link>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default TwoColLayout;
