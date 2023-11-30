import React from "react";
import PlaygroundHero from "./playground-hero";
import PlaygroundFeatures from "./playground-features";
import ReviewsSlider from "../../components/ReviewsSlider";

const Playground = () => {
  return (
    <>
      <PlaygroundHero/>
      <PlaygroundFeatures/>
      <ReviewsSlider/>
    </>
  );
};

export default Playground;
