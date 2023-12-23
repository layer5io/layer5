import React from "react";
import FeatureHero from "../FeatureHero";
// import Header from "./header";
import Reviews from "../Pricing/review-slider";
import Diagram from "./diagram";
import AWSCardDark from "../../assets/images/AWS-Diagram/aws.svg";

const AwsDiagramPage = () => {
  let data = {
    heading: "AWS Architecture Diagram Tool",
    sub_heading: "Create AWS diagrams easily with predefined templates and symbols designed for professionals.",
    image: AWSCardDark
  };
  return (
    <>
      <FeatureHero data={data} />
      {/* <Header /> */}
      <Diagram />
      <Reviews />
    </>
  );
};

export default AwsDiagramPage;
