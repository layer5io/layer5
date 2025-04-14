import React from "react";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import Button from "../../../../reusecore/Button";
import { Col, Row } from "../../../../reusecore/Layout";
import SFL from "../../../../assets/images/five/SVG/stick-figures.svg";
import teamOfFives from "../../../../assets/images/five/SVG/team-of-fives.svg";
import resourcesSign from "../../../../assets/images/five/SVG/resources-sign.svg";
import mesheryWorship from "../../../../assets/images/five/meshery-worship.png";
// import f1 from "../../../../assets/images/five/SVG/1.svg";
// import f2 from "../../../../assets/images/five/SVG/2.svg";
// import f3 from "../../../../assets/images/five/SVG/3.svg";
// import f4 from "../../../../assets/images/five/SVG/4.svg";
// import f5 from "../../../../assets/images/five/SVG/5.svg";
// import f6 from "../../../../assets/images/five/SVG/6.svg";
// import f7 from "../../../../assets/images/five/SVG/7.svg";
// import f8 from "../../../../assets/images/five/SVG/8.svg";
// import f9 from "../../../../assets/images/five/SVG/9.svg";
// import f10 from "../../../../assets/images/five/SVG/10.svg";
// import f11 from "../../../../assets/images/five/SVG/11.svg";
// import f12 from "../../../../assets/images/five/SVG/12.svg";
// import f13 from "../../../../assets/images/five/SVG/13.svg";
// import f14 from "../../../../assets/images/five/SVG/14.svg";
// import f15 from "../../../../assets/images/five/SVG/15.svg";
// import f16 from "../../../../assets/images/five/SVG/16.svg";
// import f17 from "../../../../assets/images/five/SVG/17.svg";
// import f18 from "../../../../assets/images/five/SVG/18.svg";
// import f19 from "../../../../assets/images/five/SVG/19.svg";

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
          <a href="/brand/five-mascot-kit.zip">
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
        <Row $Vcenter className="fiveDiv" style={{ minWidth: "200px" }}>
          <Col $xs={12}>
            <img src={SFL} alt="Layer5 Mascot, Five" />
          </Col>
        </Row>
        <Row $Vcenter className="fiveDiv" style={{ minWidth: "200px" }}>
          <Col $xs={12}>
            <img src={mesheryWorship} alt="Layer5 Mascot, Five" />
          </Col>
        </Row>
        <Row $Vcenter className="fiveDiv">
          <Col $xs={12} $sm={6}>
            <img src={teamOfFives} alt="Layer5 Mascot, Five" />
            {/* <img src={f1} alt="Layer5 Mascot, Five" />
            <img src={f2} alt="Layer5 Mascot, Five" />
            <img src={f3} alt="Layer5 Mascot, Five" />
            <img src={f4} alt="Layer5 Mascot, Five" />
            <img src={f5} alt="Layer5 Mascot, Five" /> */}
          </Col>
          <Col $xs={12} $sm={6}>
            <img src={resourcesSign} alt="Layer5 Mascot, Five" />
            {/* <img src={f13} alt="Layer5 Mascot, Five" />
            <img src={f14} alt="Layer5 Mascot, Five" />
            <img src={f15} alt="Layer5 Mascot, Five" />
            <img src={f16} alt="Layer5 Mascot, Five" />
            <img src={f17} alt="Layer5 Mascot, Five" /> */}
          </Col>
        </Row>
        {/* <Row $Vcenter className="fiveDiv">
          <Col $xs={12} $sm={6}>
            <img src={f18} alt="Layer5 Mascot, Five" />
            <img src={f19} alt="Layer5 Mascot, Five" />
            <img src={f6} alt="Layer5 Mascot, Five" />
            <img src={f7} alt="Layer5 Mascot, Five" />
            <img src={f8} alt="Layer5 Mascot, Five" />
            <img src={f9} alt="Layer5 Mascot, Five" />
          </Col>
          <Col $xs={12} $sm={6}>
            <img src={f10} alt="Layer5 Mascot, Five" />
            <img src={f11} alt="Layer5 Mascot, Five" />
            <img src={f12} alt="Layer5 Mascot, Five" />
          </Col>
        </Row> */}
      </Row>
    </div>
  );
};

export default StickFigures;
