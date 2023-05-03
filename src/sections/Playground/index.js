import React from "react";
import styled from "styled-components";
import Reviews from "../Pricing/review-slider";
import PlaygroundHero from "./playground-hero";
import PlaygroundFeatures from "./playground-features";

const PlaygroundWrapper = styled.div`

`;

const Playground = () => {
  return (
    <PlaygroundWrapper>
      <PlaygroundHero/>
      <PlaygroundFeatures/>
      <Reviews/>
    </PlaygroundWrapper>
  );
};

export default Playground;
