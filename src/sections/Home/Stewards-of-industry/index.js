import React from "react";

import BannerSectionWrapper from "./stewards.style";
import Button from "../../../reusecore/Button";

const StewardsOfIndustry = () => {
  return (
    <BannerSectionWrapper>
      <div className="section">
        <h1 className="section-header">
        Creators of service mesh standards.</h1>
        <h2>Service mesh leaders.</h2>
        
        
        <Button
          primary
          className="section-button"
          title="See our Projects"
          url="/projects"
        />
      </div>
    </BannerSectionWrapper>
  );
};

export default StewardsOfIndustry;
