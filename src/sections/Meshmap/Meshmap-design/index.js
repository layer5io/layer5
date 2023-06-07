import React from "react";
import MeshmapDesignWrapper from "./meshmap-design.style";
import MeshmapDesignBanner from "./meshmap-design-banner";
import MeshmapHeroSection from "./meshmap-design-hero";
import MeshmapIntegrationsSection from "./meshmap-design-integrations";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import { MeshmapMobileSwiper } from "./Meshmap_Mobile_swiper/MeshmapMobileSwiper";
import MeshmapDesignFeatureCarousel from "./meshmap-design-features-carousel";

import SignupForm from "../signup-form";
import Reviews from "../../Pricing/review-slider";


const MeshmapDesign = () => {
  return (
    <MeshmapDesignWrapper>
      <MeshmapDesignBanner />
      <MeshmapHeroSection />
      {/* <DesignDefault /> */}
      <MeshmapIntegrationsSection/>
      <MeshmapMobileSwiper/>
      <MeshmapDesignFeatureCarousel />
      <SignupForm />
      <Reviews />
    </MeshmapDesignWrapper>
  );
};

export default MeshmapDesign;
