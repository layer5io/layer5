import React from "react";
import styled from "styled-components";
import { Container } from "../../../../reusecore/Layout";
import Features from "../../../../components/Features-carousel";
import { StaticImage } from "gatsby-plugin-image";

const img1 = "../../../../assets/images/kanvas/KanvasDesigner.webp";
const img2 = "../../../../assets/images/kanvas/KanvasDesigner.webp";
const img3 = "../../../../assets/images/kanvas/KanvasDesigner.webp";
const img4 = "../../../../assets/images/kanvas/KanvasDesigner.webp";

const KanvasDesignFeaturesWrapper = styled.div`
    margin: auto;
    margin-top: 12% !important;
    margin-bottom: 12%;
    @media (max-width: 32rem){
        margin-top: 10rem;
    }
    @media only screen and (max-width: 767px) {
      max-width: 100vw;
    }

    .feature-expose {
    img {
      padding: 0 3rem 1rem;
      height:20rem;
    }
  }
  .feature-expose-full {
    img {
      padding: 0rem;
    }
  }
`;

const KanvasDesignFeatures = () => {
  return (
    <KanvasDesignFeaturesWrapper>
      <Container>
        <Features
          features={[
            {
              title: "Design your deployments the way you want",
              description:
                "Drag-and-drop your cloud native infrastructure using a palette of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.",
              learnMoreLink: "/cloud-native-management/kanvas",
              content: <StaticImage src={img1} alt="Operational Best Practices" />,
            },
            {
              title: "Manage your applications visually and intuitively",
              description:
                "Play with powerful features including context-aware designs and namespace configurations to easily manage all services.",
              learnMoreLink: "/cloud-native-management/kanvas",
              content: (
                <StaticImage src={img2} alt="Adaptive WebAssembly Filters for Envoy" />
              ),
            },
            {
              title: "Build the bridge",
              description:
                "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
              learnMoreLink: "/cloud-native-management/kanvas",
              content: (
                <StaticImage src={img3} alt="Adaptive WebAssembly Filters for Envoy" />
              ),
            },
            {
              title: "Stop finger-pointing",
              description:
                "Make infrastructure and application management less about finger-pointing and more about collaborating.",
              content: (
                <StaticImage src={img4} alt="Adaptive WebAssembly Filters for Envoy" />
              ),
              learnMoreLink: "/cloud-native-management/kanvas",
            }
          ]}
        />
      </Container>
    </KanvasDesignFeaturesWrapper>
  );
};

export default KanvasDesignFeatures;