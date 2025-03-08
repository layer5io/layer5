import React from "react";
import KanvasDesignWrapper from "./kanvas-design.style";
import KanvasDesignBanner from "./kanvas-design-banner";
import KanvasHeroSection from "./kanvas-design-hero";
import KanvasIntegrationsSection from "./kanvas-design-integrations";
import { KanvasMobileSwiper } from "./Kanvas_Mobile_swiper/KanvasMobileSwiper";
import KanvasDesignFeatureCarousel from "./kanvas-design-features-carousel";

import Reviews from "../../Pricing/review-slider";


const KanvasDesign = () => {
  return (
    <KanvasDesignWrapper>
      <KanvasDesignBanner />
      <KanvasHeroSection />
      {/* <DesignDefault /> */}
      <KanvasIntegrationsSection/>
      <KanvasMobileSwiper/>
      <KanvasDesignFeatureCarousel />
      <Reviews />
    </KanvasDesignWrapper>
  );
};

export default KanvasDesign;
