import React from "react";

import BannerSectionWrapper from "./stewards.style";
import Button from "../../../reusecore/Button";

const StewardsOfIndustry = () => {
  return (
    <BannerSectionWrapper>
      <div className="section">
        <h1 className="section-header">
          Stewards of industry.
          <br /> Service mesh leaders.
        </h1>
        <p className="section-content">
          Open source. Service mesh focused. Service mesh neutral.
          <br /> The only vendor dedicated to empowering organizations with any
          service mesh.
          <br /> You could say we are the creators of service mesh standards.
        </p>
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
