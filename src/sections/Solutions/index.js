import React from "react";
import Hero from "./hero";
import SolutionsDetails from "./details";
import WorkflowSection from "./workflow";
import Faq from "../General/Faq";
import Customers from "../../reusecore/Blockquote/Blockquote-image";
import Otto from "../../collections/members/otto-van-der-schaaf/otto-van-der-schaaf.webp";

const SolutionPage = () => {
  return (
    <>
      <Hero />
      <SolutionsDetails />
      <WorkflowSection />
      <Faq category={["Pricing"]} title="Some answers to more of your questions" />
       {/* <Customers
            type="2"
            quote="The precision by which performance measurements are generated and analyzed is a pinnacle focus of Nighthawk. Mesh performance characterization should be distilled from a set of value measurements, and that is where MeshMark compliments to create the ultimate comprehensive efficiency calculation."
            person="Otto Van Der Schaaf"
            title="Principal Engineer at Red Hat"
            image={Otto}
          /> */}
    </>
  );
};

export default SolutionPage;
