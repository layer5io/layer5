import React from "react";

import { GlobalStyle } from "../../app.style";
import BannerSectionWrapper from "./stewards.style";

const StewardsOfIndustry = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BannerSectionWrapper>
        <div className="wrapper">
          <h1 className="header">
            Stewards of industry.
            <br /> Service mesh leaders.
          </h1>
          <p className="content">
            Open source. Service mesh focused. Service mesh neutral.
            <br /> The only vendor dedicated to empowering organizations with
            any service mesh.
            <br /> You could say we are the creators of service mesh standards.
          </p>
          <button className="button">See our Projects</button>
        </div>
      </BannerSectionWrapper>
    </React.Fragment>
  );
};

export default StewardsOfIndustry;
