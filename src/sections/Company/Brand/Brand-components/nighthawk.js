import React from "react";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import Button from "../../../../reusecore/Button";
import { Col, Row } from "../../../../reusecore/Layout";
import GNH from "../../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import GNHNameOnly from "../../../../assets/images/nighthawk/name-only/SVG/nighthawk-text.svg";
import GNHWithName from "../../../../assets/images/nighthawk/with-name/SVG/nighthawk-full.svg";

const Nighthawk = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            <strong> Nighthawk </strong>
          </h1>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/nighthawk-brand-kit.zip">
            <Button primary title="Download Logo Assets" external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            The Nighthawk mark includes the Nighthawk name & logo and any
            word, phrase, image, or other designation that identifies the source
            or origin of any Layer5 projects. PLease don't modify the marks or
            use them in a confusing way, including suggesting sponsorship or
            endorsement by Layer5 with another brand (including your own).
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="layerH3 in"> Logos </h2>
        </Col>
        <Row Vcenter className="ImgDiv">
          <Col xs={12} sm={4}>
            <img src={GNHWithName} alt="Nighthawk-with-name Logo" />
          </Col>
          <Col xs={12} sm={4}>
            <img src={GNH} alt="Nighthawk Logo" />
          </Col>
          <Col xs={12} sm={4}>
            <img src={GNHNameOnly} alt="Nighthawk-name-only Logo" />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Nighthawk;
