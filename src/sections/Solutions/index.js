import React from "react";
import SolutionHeader from "./header";
import SolutionsDetails from "./info";
import WorkflowSection from "./workflows";

const SolutionPage = () => {
  return (
    <>
      <SolutionHeader/>
      <SolutionsDetails/>
      <WorkflowSection/>
    </>
  );
};

export default SolutionPage;