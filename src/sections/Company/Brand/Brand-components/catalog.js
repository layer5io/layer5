import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import CatalogIcon from "../../../../assets/images/catalog-icon/catalog.svg";
import CatalogIcon2 from "../../../../assets/images/catalog-icon/catalog2.svg";
import CatalogIcon3 from "../../../../assets/images/catalog-icon/catalog3.svg";
import CatalogIcon4 from "../../../../assets/images/catalog-icon/catalog4.svg";
import CatalogIcon5 from "../../../../assets/images/catalog-icon/catalog5.svg";

const Layer5Wrapper = styled.section`
  @media (max-width: 575px) {
    .brandHeader {
      padding: 3rem 0;
    }
  }
`;

const Catalog = () => {
  return (
    <Layer5Wrapper>
      <div className="post-content">
        <Row className="brand-section">
          <Col xs={12} sm={6}>
            <h1 className="layerH3">Catalog</h1>
          </Col>
          <Col xs={12} sm={6} className="download-button">
            <a href="/brand/layer5-brand-kit.zip">
              <Button primary title="Download Logo Assets" external={false}>
                <FiDownloadCloud size={21} className="icon-left" />
              </Button>
            </a>
          </Col>
          <Col>
            <p>
              The Catalog mark includes the Catalog name & logo, and any word,
              phrase, image, or other designation that identifies the source or
              origin of any Layer5 projects. Please don’t modify the marks or
              use them in a confusing way, including suggesting sponsorship or
              endorsement by Layer5, or in a way that confuses Layer5 with
              another brand (including your own).
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">Logos</h2>
          </Col>
          <SRLWrapper>
            <Row Vcenter className="Layer5Logos">
              <Col xs={12} sm={1} />
              <Col xs={12} sm={2}>
                <img src={CatalogIcon} alt="Catalog Logo" />
              </Col>
              <Col xs={12} sm={2}>
                <img src={CatalogIcon2} alt="Catalog Logo" />
              </Col>
              <Col xs={12} sm={2}>
                <img src={CatalogIcon3} alt="Catalog Logo" />
              </Col>
              <Col xs={12} sm={2}>
                <img src={CatalogIcon4} alt="Catalog Logo" />
              </Col>
              <Col xs={12} sm={2}>
                <img src={CatalogIcon5} alt="Catalog Logo" />
              </Col>
              <Col xs={12} sm={1} />
            </Row>
          </SRLWrapper>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">Colors</h2>
          </Col>
          <Col xs={12}>
            <p>
              Our community color palette consists of gray and green colors
              representing each of our projects. The Catalog logo should be white
              when using project colors as the background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox
              name="Caribbean Green"
              R="0"
              G="211"
              B="169"
              colorCode="#00D3A9"
            />
            <ColorBox
              name="Light Slate Gray"
              R="122"
              G="132"
              B="142"
              colorCode="#7A848E"
            />
            <ColorBox
              name="Dark Green"
              R="41"
              G="73"
              B="87"
              colorCode="#294957"
            />
            <div className="white-color-box">
              <ColorBox
                name="Light Grey"
                R="240"
                G="240"
                B="240"
                colorCode="#F0F0F0"
              />
            </div>
            <ColorBox
              name="Charcoal"
              R="60"
              G="73"
              B="79"
              colorCode="#3C494F"
            />
          </Row>
        </Row>
      </div>
    </Layer5Wrapper>
  );
};

export default Catalog;
