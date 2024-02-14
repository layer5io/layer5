import React from "react";
import FeatureHero from "../SolutionHero";
import comments_svg from "../../assets/images/comments/comment.svg";
import { Container } from "../../reusecore/Layout";
import FeatureUseCard from "../../components/FeatureUseCard";
import MultiClusterWrapper from "./deploy.style";
import Feature from "./features";
import Reviews from "../Pricing/review-slider";

const KubernetesMultiCluster = () => {
  let data = {
    heading: "Cloud Native Deployments by Diagram",
    sub_heading:
      "Design and Deploy your Kubernetes-based, cloud native deployments",
    image: comments_svg,
  };

  let card_data = [
    {
      heading: "Bring those ideas to life",
      subtitle:
        "Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one place.",
      image: comments_svg,
    },
    {
      heading: "Discover more with intuitive zoom levels",
      subtitle:
        "Effectively narrow down the focus starting from a multi cluster infrastructure to individual service mechanisms. Get more clarity, yield better outputs.",
      image: comments_svg,
    },
    {
      heading: "Stop finger-pointing",
      subtitle:
        "Make infrastructure and application management less about finger-pointing and more about collaborating.",
      image: comments_svg,
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
              Seamless Deployment Across Multiple Kubernetes Clusters for Every Meshery Design {" "}
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