import React from "react";
import MeshmapDesignWrapper from "./meshmap-design.style";
import MeshmapDesignBanner from "./meshmap-design-banner";
import MeshmapHeroSection from "./meshmap-design-hero";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import MeshmapDesignFeatures from "./Meshmap-design-features";
import SignupForm from "../signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = ({ theme }) => {
  return (
    <MeshmapDesignWrapper>
      <MeshmapDesignBanner  />
      <MeshmapHeroSection  />
      <DesignDefault  />
      <MeshmapDesignFeatures />
      <SignupForm />
      <Reviews />
    </MeshmapDesignWrapper>
  );
};

export default MeshmapDesign;
