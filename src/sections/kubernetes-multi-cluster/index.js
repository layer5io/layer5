import React from "react";
import SolutionHero from "../SolutionHero";
import cluster_img from "./images/cluster.png";
import deploy_img from "./images/deploy.png";
import config_img from "./images/config.png";
import { Container } from "../../reusecore/Layout";
import FeatureUseCard from "../../components/FeatureUseCard";
import MultiClusterWrapper from "./kube.style";
import Feature from "./features";
import Reviews from "../Pricing/review-slider";

const KubernetesMultiCluster = () => {
  let data = {
    heading: "Kubernetes Multi-cluster Operation",
    sub_heading:
      "Manage all of your Kubernetes clusters with the cloud native management plane, Meshery.",
    image: cluster_img,
  };

  let card_data = [
    {
      heading: "Streamlined Multi-Cluster Operations",
      subtitle:
        "Empower your workflow with Meshery's multi-context feature, enabling seamless deployment and operations across clusters while simplifying visualization for efficient management.",
      image: deploy_img,
    },
    {
      heading: "Uniform Cluster Management Made Easy",
      subtitle:
        "Meshery's intuitive context switcher allows swift selection and execution of tasks, enhancing productivity in cluster management.",
      image: cluster_img,
    },
    {
      heading: "Seamless Meshery Configuration",
      subtitle:
        "Effortlessly manage Meshery across multiple clusters through the Settings page. Add, remove, or modify clusters with ease, and fine-tune configurations to tailor Meshery's awareness to your infrastructure needs.",
      image: config_img,
    },
  ];
  return (
    <MultiClusterWrapper>
      <SolutionHero data={data} />
      <Feature/>
      <Container>
        <div className={"feature-use-container"}>
          <div>
            <h2 className={"use-heading"}>
              {" "}
              Wrangling your services one cluster at-a-time {" "}
            </h2>
          </div>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={4} />
            ))}
          </div>
        </div>
      </Container>
      <Reviews/>
    </MultiClusterWrapper>
  );
};
export default KubernetesMultiCluster;

