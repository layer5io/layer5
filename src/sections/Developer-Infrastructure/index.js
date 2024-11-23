import React from "react";
import FeatureHero from "../SolutionHero";
import kubernetes_svg from "./images/kubernetes.svg";
import config_svg from "./images/config.svg";
import cluster_svg from "./images/cluster.png";
import collaborate_svg from "./images/collaborate.svg";
import { Container } from "../../reusecore/Layout";
import FeatureUseCard from "../../components/FeatureUseCard";
import MultiClusterWrapper from "./deploy.style";
import Feature from "./features";
import Reviews from "../Pricing/review-slider";

const KubernetesMultiCluster = () => {
  let data = {
    heading: "Developer-defined Infrastructure",
    sub_heading:
      "Cloud Native application and infrastructure management software that empowers organizations to expect more from their infrastructure.",
    image: kubernetes_svg,
  };

  let card_data = [
    {
      heading: "Build the bridge",
      subtitle:
        "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
      image: config_svg,
    },
    {
      heading: "Continuous visibility across all of your clusters and workloads.",
      subtitle:
        "Import your existing Kubernetes, Helm, or Docker Compose applications. Interactively connect to terminal sessions or initiate and search log streams from your containers.",
      image: cluster_svg,
    },
    {
      heading: "Inclusive collaboration from start to finish",
      subtitle:
        "Kanvas is an end-to-end management platform, here to help teams understand problems, explore options, and build solutions—together.",
      image: collaborate_svg,
    },
  ];
  return (
    <MultiClusterWrapper>
      <FeatureHero data={data} />
      <Feature/>
      <Container>
        <div className={"feature-use-container"}>
          <div>
            <h2 className={"use-heading"}>
              {" "}
              Seamless Deployment Across Multiple Kubernetes Clusters {" "}
            </h2>
          </div>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} $sm={12} $md={6} $lg={4} />
            ))}
          </div>
        </div>
      </Container>
      <Reviews/>
    </MultiClusterWrapper>
  );
};
export default KubernetesMultiCluster;