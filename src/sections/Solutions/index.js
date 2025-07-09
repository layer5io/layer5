import React from "react";
import SolutionsBanner from "./hero";
import SolutionsMain from "./solutions";
import Reviews from "../Pricing/review-slider";

const SolutionsMainPage = () => {
  return (
    <>
      <SolutionsBanner/>
      <SolutionsMain/>
      <Reviews/>
    </>
  );
};

export default SolutionsMainPage;