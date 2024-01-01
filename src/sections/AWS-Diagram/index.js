import React from "react";
import FeatureHero from "../FeatureHero";
// import Header from "./header";
import Reviews from "../Pricing/review-slider";
import Diagram from "./diagram";
import AWSDark from "../../assets/images/AWS-Diagram/aws.svg";
import AWSLight from "../../assets/images/AWS-Diagram/aws-light.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const AwsDiagramPage = () => {
  const { isDark } = useStyledDarkMode();

  let data = {
    heading: "AWS Architecture Diagram Tool",
    sub_heading: "Create Amazon Web Services diagrams easily with predefined templates and symbols designed for professionals.",
    image: isDark ? AWSDark : AWSLight
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
