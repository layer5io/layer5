import React from "react";
import FeatureHero from "../FeatureHero";
import Reviews from "../Pricing/review-slider";
import Diagram from "./diagram";
import KubernetesDark from "./images/kubernetes.svg";
// import KubernetesLight from "./images/kubernetes-light.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const KubernetesDiagramPage = () => {
  const { isDark } = useStyledDarkMode();

  let data = {
    heading: "Kubernetes Orchestration and Diagramming software",
    sub_heading: "Orchestrate and design Kubernetes architecture diagrams easily with predefined templates and symbols designed for professionals.",
    image: isDark ? KubernetesDark : KubernetesDark
  };
  return (
    <>
      <FeatureHero data={data} />
      <Diagram />
      <Reviews />
    </>
  );
};

export default KubernetesDiagramPage;
