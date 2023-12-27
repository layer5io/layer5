import React from "react";
//import Header from "./header";
import FeatureHero from "../FeatureHero";
import GCPDiagramDark from "./images/gcp-diagram-dark.svg";
import Reviews from "../Pricing/review-slider";
import Diagram from "./diagram";

const GcpDiagramPage = () => {
  let data = {
    heading: "GCP Architecture Diagram Tool",
    sub_heading: "Create GCP diagrams easily with predefined templates and symbols designed for professionals.",
    image: GCPDiagramDark
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

export default GcpDiagramPage;
