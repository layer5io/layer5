
import React from "react";
import SEO from "../../../components/seo";
import CloudCostControl from "../../../sections/Cloud-Cost-Control";

const CloudCostControl = () => {
  return (
    <>
      <CloudCostControl />
    </>
  );
};
export default CloudCostControl;
export const Head = () => {
  return  <SEO title="Cloud Cost Control page"
    description="Optimize costs, reduce risks, and take control of infrastructure with Layer5’s cloud-native management solutions."
    image={"/images/solution-cost.svg"}
    />;
};