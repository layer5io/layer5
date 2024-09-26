import React, { useRef, useEffect } from "react";
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
const withIntersectionObserver = (WrappedComponent) => {
  return (props) => {
    const containerRefs = useRef([]);
    const contentRefs = useRef([]);
    useEffect(() => {
      const options = {
        threshold: 0.1,
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      }, options);

      const addClasses = (ref, index) => {
        if (ref) {
          observer.observe(ref);
          ref.classList.add(index % 2 === 0 ? "left-slide-in" : "right-slide-in");
        }
      };
      containerRefs.current.forEach(addClasses);
      contentRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
      return () => {
        const removeObserver = (ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        };
        containerRefs.current.forEach(removeObserver);
        contentRefs.current.forEach(removeObserver);
      };
    }, []);

    return <WrappedComponent {...props} containerRefs={containerRefs} contentRefs={contentRefs} />;
  };
};
const TwoColLayout = ({ containerRefs, contentRefs }) => {
  const { isDark } = useStyledDarkMode();
  return (
    <Section>
      <Container ref={(el) => (containerRefs.current[0] = el)}>
        <ImageWrapper>
          <Link to="/solutions/architecture-diagram">
            <img src={isDark ? DiagrammingImageDark : DiagrammingImageLight} alt="image" />
          </Link>
        </ImageWrapper>
        <ContentWrapper ref={(el) => (contentRefs.current[0] = el)}>
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
      <Container ref={(el) => (containerRefs.current[1] = el)}>
        <ImageWrapper>
          <Link to="/orchestration-management">
            <img src={isDark ? OrchestrationDark : OrchestrationLight} alt="image" />
          </Link>
        </ImageWrapper>
        <ContentWrapper ref={(el) => (contentRefs.current[1] = el)}>
          <h2>Cognitive overload is real</h2>
          <p className="text">Empower DevOps, platform, and site reliability engineers with our orchestration management solution. Achieve seamless collaboration and operational harmony for enhanced productivity.</p>
          <Link to="/solutions/orchestration-management">Learn more &rarr;</Link>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default withIntersectionObserver(TwoColLayout);
