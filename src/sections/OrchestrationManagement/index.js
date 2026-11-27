import React from "react";
import OrchestrationWrapper from "./orchestration.style";
import { Container } from "../../reusecore/Layout";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import SelfServiceAndIntegrationsVideo from "./images/self-service-and-integration.mp4";
import SelfServiceAndIntegrationsPoster from "./images/self-service-and-integration-poster.webp";
import DeployDesignsVideo from "./images/deploy-designs.mp4";
import DeployDesignsPoster from "./images/deploy-designs-poster.webp";
import EnvironmentsVideo from "./images/environments.mp4";
import EnvironmentsPoster from "./images/environments-poster.webp";
import Validate from "./images/validate.mp4";
import ValidatePoster from "./images/validate-poster.webp";
import OrchestrationImgDark from "../../components/Features/images/orchestration.svg";
import OrchestrationImgLight from "../../components/Features/images/orchestration-light.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import RelatedPicks from "../../components/RelatedPicks";

let card_data = [
  {
    heading: "Self-service & Integrations",
    subtitle: "Empower DevOps teams with self-service capabilities for effortless infrastructure management. Seamlessly integrate with current tools and workflows for a smooth and efficient experience.",
    video: { src: SelfServiceAndIntegrationsVideo, poster: SelfServiceAndIntegrationsPoster, width: 1258, height: 678 }
  },
  {
    heading: "Validate your infra before deployment",
    subtitle: "Infrastructure is rigorously validated pre-deployment to ensure reliability, security, and optimal performance.",
    video: { src: Validate, poster: ValidatePoster, width: 1258, height: 678 }
  },
  {
    heading: "Infrastructure provisioning",
    subtitle: "Automate infrastructure provisioning for efficient, ready-to-deploy designs, eliminating manual work for basic requests in development, QA, testing, and IT operations.",
    video: { src: DeployDesignsVideo, poster: DeployDesignsPoster, width: 1258, height: 678 }
  },
  {
    heading: "Manage resources with Environment",
    subtitle: "Simplify your workflow by effortlessly handling a bundle of resources as a unified group, eliminating the hassle of managing individual Connections and Credentials.",
    video: { src: EnvironmentsVideo, poster: EnvironmentsPoster, width: 1258, height: 680 }
  },

];

const Orchestration = () => {
  const { isDark } = useStyledDarkMode();
  const data = {
    heading: "Insights Visualized into Action",
    sub_heading: "Optimize and streamline operations through strategic orchestration of your infrastructure.",
    image: isDark ? OrchestrationImgDark : OrchestrationImgLight
  };


  return (
    <OrchestrationWrapper>
      <FeatureHero data={data} />

      <Container>
        <div className={"feature-use-container"}>
          <div>
            <h2 className={"use-heading"}> Cloud Infra Provisioning with Speed and Control </h2>
          </div>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} $sm={12} $md={6} $lg={6} />
            ))}
          </div>
        </div>
      </Container>
      <RelatedPicks heading="self" />
      <Partners />
      <SeeYou />
    </OrchestrationWrapper>
  );
};

export default Orchestration;