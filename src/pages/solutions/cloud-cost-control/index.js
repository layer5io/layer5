
import React from "react";
import SEO from "../../../components/seo";
import CloudCostControl from "../../../sections/Cloud-Cost-Control";

const CloudCostControlPage = () => {
  return (
    <>
      <CloudCostControl />
    </>
  );
};
export default CloudCostControlPage;
export const Head = () => {
  return  <SEO title="Cloud Cost Control page"
    description="Optimize costs, reduce risks, and take control of infrastructure with Layer5’s cloud-native management solutions."
    image={"/images/solutions-cost.svg"}
  />;
};