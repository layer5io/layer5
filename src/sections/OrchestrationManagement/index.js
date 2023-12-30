import React from "react";
import OrchestrationWrapper from "./orchestration.style";
import { Container } from "../../reusecore/Layout";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.png";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import use_case_1 from "../../assets/images/whiteboard/use-case-1.png";
import use_case_2 from "../../assets/images/whiteboard/use-case-2.png";
import use_case_3 from "../../assets/images/whiteboard/use-case-3.png";

let data = {
  heading: "Automate Infrastructure with Orchestration Management",
  sub_heading: "Achieve seamless collaboration and operational harmony for enhanced productivity.",
  image: whiteboard_svg
};

let card_data = [
  {
    heading: "Environment provisioning",
    subtitle: "Automate infrastructure provisioning for efficient, ready-to-deploy environments, eliminating manual work for basic requests in development, QA, testing, and IT operations.",
    image: use_case_1
  },
  {
    heading: "Self-service & Integrations",
    subtitle: "Empower DevOps teams with self-service capabilities for effortless infrastructure management. Seamlessly integrate with current tools and workflows for a smooth and efficient experience.",
    image: use_case_2
  },
  {
    heading: "Governance & Custom policies",
    subtitle: "Set custom policies and governance controls to ensure compliance and maintain control over your infrastructure.",
    image: use_case_3
  },

];

const Orchestration = () => {
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
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={4} />
            ))}
          </div>
        </div>
      </Container>
      <Partners />
      <SeeYou />
    </OrchestrationWrapper>
  );
};

export default Orchestration;