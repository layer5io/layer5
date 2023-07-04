import React from "react";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import Button from "../../../../reusecore/Button";
import { Col, Row } from "../../../../reusecore/Layout";
import SFL from "../../../../assets/images/stick-figures/SVG/stick-figures.svg";

const StickFigures = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            <strong> Stick Figures </strong>
          </h1>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/stick-figures.zip">
            <Button primary title="Download Logo Assets" external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            Introducing stick figures, a playful and dynamic visual language
            that captures the essence of Layer5.io. These charming and
            minimalist illustrations serve as the perfect embodiment of
            our brand's values and offerings.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="layerH3 in"> Logos </h2>
        </Col>
        <Row Vcenter className="ImgDiv">
          <Col xs={12} className="stick-figure">
            <img src={SFL} alt="Stick figures" />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default StickFigures;
