import React from "react";
import styled from "styled-components";
import Reviews from "../Pricing/review-slider";
import PlaygroundHero from "./playground-hero";
import PlaygroundFeatures from "./playground-features";

const Playground = () => {
  return (
    <>
      <PlaygroundHero/>
      <PlaygroundFeatures/>
      <Reviews/>
    </>
  );
};

export default Playground;
