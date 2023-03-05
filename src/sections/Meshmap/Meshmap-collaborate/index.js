import React from "react";
import MeshmapDesignWrapper from "./meshmap-design.style";
import { Container, Row, Col } from "../../../reusecore/Layout";
import MeshMapDrafts from "./../images/meshmap-draft-logos.png";
import MeshmapDesignBanner from "./meshmap-design-banner";
import MeshmapHeroSection from "./meshmap-design-hero";
// import DesignDefault from "../../Home/MeshmapDesignHighlight";
import MeshmapDesignFeatures from "./Meshmap-design-features";
import designerImage from "../../../assets/images/meshmap/MeshmapDesigner.png";
import visualizerImage from "../../../assets/images/meshmap/MeshmapVisualizer.png";
import CommonForm from "../../../components/CommonForm";
// import SignupForm from "../signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapCollaborate = ({ theme }) => {
  return (
    <MeshmapDesignWrapper>
      <MeshmapDesignBanner />
      <MeshmapHeroSection />
      {/* <DesignDefault /> */}
      <MeshmapDesignFeatures />
      {/* <SignupForm /> */}
      {/* <Reviews /> */}
    </MeshmapDesignWrapper>
  );
};

export default MeshmapCollaborate;
