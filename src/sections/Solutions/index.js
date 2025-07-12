import React from "react";
import SolutionsBanner from "./hero";
import SolutionsMain from "./solutions";
import PreFooterContent from "./pre-footer";

const SolutionsMainPage = () => {
  return (
    <>
      <SolutionsBanner/>
      <SolutionsMain/>
      <PreFooterContent/>
    </>
  );
};

export default SolutionsMainPage;