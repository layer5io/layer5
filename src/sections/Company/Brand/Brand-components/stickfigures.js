import React from "react";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import Button from "../../../../reusecore/Button";
import { Col, Row } from "../../../../reusecore/Layout";
import SFL from "../../../../assets/images/stick-figures/SVG/stick-figures.svg";
import teamOfFives from "../../../../assets/images/stick-figures/SVG/team-of-fives.svg";
import resourcesSign from "../../../../assets/images/stick-figures/SVG/resources-sign.svg";
import mesheryWorship from "../../../../assets/images/stick-figures/meshery-worship.png";
import f1 from "../../../../assets/images/stick-figures/SVG/1.svg";
import f2 from "../../../../assets/images/stick-figures/SVG/2.svg";
import f3 from "../../../../assets/images/stick-figures/SVG/3.svg";
import f4 from "../../../../assets/images/stick-figures/SVG/4.svg";
import f5 from "../../../../assets/images/stick-figures/SVG/5.svg";
import f6 from "../../../../assets/images/stick-figures/SVG/6.svg";
import f7 from "../../../../assets/images/stick-figures/SVG/7.svg";
import f8 from "../../../../assets/images/stick-figures/SVG/8.svg";
import f9 from "../../../../assets/images/stick-figures/SVG/9.svg";
import f10 from "../../../../assets/images/stick-figures/SVG/10.svg";
import f11 from "../../../../assets/images/stick-figures/SVG/11.svg";
import f12 from "../../../../assets/images/stick-figures/SVG/12.svg";
import f13 from "../../../../assets/images/stick-figures/SVG/13.svg";
import f14 from "../../../../assets/images/stick-figures/SVG/14.svg";
import f15 from "../../../../assets/images/stick-figures/SVG/15.svg";
import f16 from "../../../../assets/images/stick-figures/SVG/16.svg";
import f17 from "../../../../assets/images/stick-figures/SVG/17.svg";
import f18 from "../../../../assets/images/stick-figures/SVG/18.svg";
import f19 from "../../../../assets/images/stick-figures/SVG/19.svg";

const StickFigures = () => {
  return (
    <div className="post-content">
      <Row style={{
        flexWrap: "wrap"
      }} className="brand-section">
        <Col $xs={12} $sm={6}>
          <h1 className="layerH3">
            <strong> Five, our mascot </strong>
          </h1>
        </Col>
        <Col $xs={12} $sm={6} className="download-button">
          <a href="/brand/stick-figures.zip">
            <Button $primary title="Download Logo Assets" $external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            Introducing Five, a playful and dynamic visual language
            that captures the essence of Layer5. These charming and
            minimalist illustrations serve as the perfect embodiment of
            our brand's values and offerings.
          </p>
        </Col>
      </Row>

      <Row style={{
        flexWrap: "wrap"
      }}>
        <Col>
          <h2 className="layerH3 in">Images</h2>
        </Col>
        <Row $Vcenter className="ImgDiv" style={{ minWidth: "200px" }}>
          <Col $xs={12}>
            <img src={SFL} alt="Layer5 Mascot, Five" />
          </Col>
        </Row>
        <Row $Vcenter className="ImgDiv" style={{ minWidth: "200px" }}>
          <Col $xs={12}>
            <img src={mesheryWorship} alt="Layer5 Mascot, Five" />
          </Col>
        </Row>
        <Row $Vcenter className="ImgDiv">
          <Col $xs={12} $sm={6}>
            <img src={teamOfFives} style={{ maxWidth: "150px",  backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f1} style={{ maxWidth: "150px",  backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f2} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f3} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f4} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f5} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
          </Col>
          <Col $xs={12} $sm={6}>
            <img src={resourcesSign} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f13} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f14} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f15} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f16} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f17} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
          </Col>
        </Row>
        <Row $Vcenter className="ImgDiv">
          <Col $xs={12} $sm={6}>
            <img src={f18} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f19} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f6} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f7} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f8} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f9} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
          </Col>
          <Col $xs={12} $sm={6}>
            <img src={f10} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f11} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
            <img src={f12} style={{ maxWidth: "150px", backgroundColor: "#fff" }}alt="Layer5 Mascot, Five" />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default StickFigures;
