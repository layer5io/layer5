import React from "react";
import MeshmapWrapper from "./meshmap-design.style";
import { Container, Row, Col } from "../../../reusecore/Layout";
import Features from "../../../components/Features-carousel";
import MeshmapModes from "./meshmap-modes";
import MeshMapDrafts from "./../images/meshmap-draft-logos.png";
import MeshmapDesignBanner from "./meshmap-design-banner";
import designerImage from "../../../assets/images/meshmap/MeshmapDesigner.png";
import visualizerImage from "../../../assets/images/meshmap/MeshmapVisualizer.png";
import CommonForm from "../../../components/CommonForm";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = ({ theme }) => {
  return (
    <div>
      <MeshmapDesignBanner/>
    </div>
  );
};

export default MeshmapDesign;
