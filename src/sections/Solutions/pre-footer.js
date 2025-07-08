import React from "react";
import Faq from "../General/Faq";
import Customers from "../../reusecore/Blockquote/Blockquote-image";
import Otto from "../../collections/members/otto-van-der-schaaf/otto-van-der-schaaf.webp";
import styled from "styled-components";

const SolutionsPreFooterStyledWrapper = styled.div`
        .type-one-wrapper {
            max-width: 60rem !important;
        }
`;

const SolutionsPreFooter = () => {
  return (
    <SolutionsPreFooterStyledWrapper>
      <Customers
        type="2"
        quote="The precision by which performance measurements are generated and analyzed is a pinnacle focus of Nighthawk. Mesh performance characterization should be distilled from a set of value measurements, and that is where MeshMark compliments to create the ultimate comprehensive efficiency calculation."
        person="Otto Van Der Schaaf"
        title="Principal Engineer at Red Hat"
        image={Otto}
      />
      <Faq category={["Layer5", "Meshery"]} title="Some answers to more of your questions" />
    </SolutionsPreFooterStyledWrapper>);
};

export default SolutionsPreFooter;