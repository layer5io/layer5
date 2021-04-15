import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { FiDownloadCloud } from "react-icons/fi";
import Button from "../../../../reusecore/Button";
import { Col, Row } from "../../../../reusecore/Layout";
import GNH from "../../../../assets/images/getnighthawk/getnighthawk.png";
import GNHNameOnly from "../../../../assets/images/getnighthawk/getnighthawk-name-only.png";
import GNHWithName from "../../../../assets/images/getnighthawk/getnighthawk-with-name.png";

const GetNightHawk = () => {
  return (
    <div className="post-content">
      <Row className="brand-section">
        <Col xs={12} sm={6}>
          <h1 className="layerH3">
            <strong> GetNightHawk </strong>
          </h1>
        </Col>
        <Col xs={12} sm={6} className="download-button">
          <a href="/brand/getnighthawk-brand-kit.zip">
            <Button primary title="Download Logo Assets" external={true}>
              <FiDownloadCloud size={21} className="icon-left" />
            </Button>
          </a>
        </Col>
        <Col>
          <p>
            The GetNightHawk mark includes the GetNightHawk name & logo and any
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
        <SRLWrapper>
          <Row Vcenter className="ImgDiv">
            <Col xs={12} sm={4}>
              <img src={GNHWithName} alt="GetNightHawk-with-name Logo" />
            </Col>
            <Col xs={12} sm={4}>
              <img src={GNH} alt="GetNightHawk Logo" />
            </Col>
            <Col xs={12} sm={4}>
              <img src={GNHNameOnly} alt="GetNightHawk-name-only Logo" />
            </Col>
          </Row>
        </SRLWrapper>
      </Row>
    </div>
  );
};

export default GetNightHawk;
