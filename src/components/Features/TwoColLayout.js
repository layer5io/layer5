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
import KubernetesLogo from "../../sections/Kubernetes-Diagram/images/kubernetes-icon.svg";
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
          <Link to="/solutions/architecture-diagram">
            <img src={isDark ? DiagrammingImageDark : DiagrammingImageLight} alt="image" />
          </Link>
        </ImageWrapper>
        <ContentWrapper>
          <h2>Visualize and Simplify Platform Engineering</h2>
          <p className="text">Incorporate AWS, GCP and Kubernetes components into Meshery designs for comprehensive and intuitive system mapping, documentation, and orchestration.</p>
          <div className="small-card-container">
            <Link aria-label="aws" className="small-card" to="/cloud-native-management/generate-aws-architecture-diagram">
              <img alt="aws" src={isDark ? AWSLogoDark : AWSLogoLight} width={40} />
            </Link>
            <Link aria-label="gcp" className="small-card" to="/cloud-native-management/generate-gcp-architecture-diagram">
              <img alt="gcp" src={GCPLogo} width={40} />
            </Link>
            <Link aria-label="kubernetes" className="small-card" to="/cloud-native-management/generate-kubernetes-architecture-diagram">
              <img alt="kubernetes" src={KubernetesLogo} width={40} />
            </Link>
          </div>
        </ContentWrapper>
      </Container>
      <Container>
        <ImageWrapper ref={containerRef}>
          <Link to="/orchestration-management">
            <img src={isDark ? OrchestrationDark : OrchestrationLight} alt="image" />
          </Link>
        </ImageWrapper>
        <ContentWrapper>
          <h2>Easing your Workflow Burden Collaboratively</h2>
          <p className="text">Empower DevOps, platform, and site reliability engineers with our orchestration management solution. Achieve seamless collaboration and operational harmony for enhanced productivity.</p>
          <Link to="/solutions/orchestration-management">Learn more &rarr;</Link>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default TwoColLayout;
