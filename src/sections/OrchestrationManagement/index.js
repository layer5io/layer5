import React from "react";
import OrchestrationWrapper from "./orchestration.style";
import { Container } from "../../reusecore/Layout";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import SelfServiceAndIntegrationsGIF from "./images/self-service-and-integration.gif";
import DeployDesignsGIF from "./images/deploy-designs.gif";
import EnvironmentsGIF from "./images/environments.gif";
import Validate from "./images/validate.gif";
import OrchestrationImgDark from "../../components/Features/images/orchestration.svg";
import OrchestrationImgLight from "../../components/Features/images/orchestration-light.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import RelatedPicks from "../../components/RelatedPicks";

let card_data = [
  {
    heading: "Self-service & Integrations",
    subtitle: "Empower DevOps teams with self-service capabilities for effortless infrastructure management. Seamlessly integrate with current tools and workflows for a smooth and efficient experience.",
    image: SelfServiceAndIntegrationsGIF
  },
  {
    heading: "Validate your infra before deployment",
    subtitle: "Infrastructure is rigorously validated pre-deployment to ensure reliability, security, and optimal performance.",
    image: Validate
  },
  {
    heading: "Infrastructure provisioning",
    subtitle: "Automate infrastructure provisioning for efficient, ready-to-deploy designs, eliminating manual work for basic requests in development, QA, testing, and IT operations.",
    image: DeployDesignsGIF
  },
  {
    heading: "Manage resources with Environment",
    subtitle: "Simplify your workflow by effortlessly handling a bundle of resources as a unified group, eliminating the hassle of managing individual Connections and Credentials.",
    image: EnvironmentsGIF
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