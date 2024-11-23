import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import KanvasIcon from "../../../../assets/images/kanvas/icon-only/kanvas-icon-color.svg";
import Kanvas from "../../../../assets/images/kanvas/horizontal/kanvas-horizontal-color.svg";
import KanvasTitle from "../../../../assets/images/kanvas/text-only/kanvas-text-color.svg";

const KanvasWrapper = styled.section`
    .sub-project {
        margin-top: -2rem;
    }
`;

const KanvasBrand = () => {
  return (
    <KanvasWrapper>
      <div className="post-content">
        <Row style={{
          flexWrap: "wrap"
        }} className="sub-project brand-section">
          <Col $xs={12} $sm={6}>
            <h2 className="layerH3">
              Kanvas
            </h2>
          </Col>
          <Col $xs={12} $sm={6} className="download-button">
            <a href="/brand/kanvas-brand-kit.zip">
              <Button $primary title="Download Logo Assets" $external={true}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
              The Kanvas mark includes the Kanvas name & logo, and any word,
              phrase, image, or other designation that identifies the source or
              origin of any Layer5 projects. Please don’t modify the marks or
              use them in a confusing way, including suggesting sponsorship or
              endorsement by Layer5, or in a way that confuses Layer5 with
              another brand (including your own).
            </p>
          </Col>
        </Row>
        <Row style={{
          flexWrap: "wrap"
        }}>
          <Col>
            <h2 className="layerH3 in">
              Logos
            </h2>
          </Col>
          <SRLWrapper>
            <Row $Vcenter className="ImgDiv">
              <Col $xs={12} $sm={4}>
                <img src={Kanvas} style={{ minWidth: "200px" }} alt="Kanvas Logo" />
                <h5>mark and text</h5>
              </Col>
              <Col $xs={12} $sm={4}>
                <img src={KanvasTitle} style={{ minWidth: "200px" }} alt="KanvasTitle Text" />
                <h5>text only</h5>
              </Col>
              <Col $xs={12} $sm={4}>
                <img src={KanvasIcon} style={{ minWidth: "100px" }} alt="KanvasLight Icon" />
                <h5>mark only</h5>
              </Col>
            </Row>
          </SRLWrapper>
        </Row>
        <Row style={{
          flexWrap: "wrap"
        }}>
          <Col>
            <h2 className="layerH3 in">
              Colors
            </h2>
          </Col>
          <Col>
            <p>
              The Kanvas color palette consists of the primary Kanvas color
              and additional shades. The Kanvas logo should be white or
              monochrome tonal when using a color background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
          </Row>
        </Row>
      </div>
    </KanvasWrapper>
  );
};

export default KanvasBrand;
