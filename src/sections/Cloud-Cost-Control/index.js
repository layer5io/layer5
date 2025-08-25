import React from "react";
import SolutionHeader from "./header";
import SolutionsDetails from "./info";
import WorkflowSection from "./workflows";
import SolutionsPreFooter from "./pre-footer";

const CloudCostControl = () => {
  return (
    <>
      <SolutionHeader />
      <SolutionsDetails />
      <WorkflowSection />
      <SolutionsPreFooter/>
    </>
  );
};

export default CloudCostControl;