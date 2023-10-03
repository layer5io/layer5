import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import ProjectItemWrapper from "./projectSection.style.js";
import { StaticImage } from "gatsby-plugin-image";

const Layer5Wrapper = styled.section`
  @media (max-width: 575px) {
    .brandHeader {
      padding: 3rem 0;
    }
  }
`;

const Catalog = () => {
  const CatalogIcon = "../../../../assets/images/catalog-icon/catalog.svg";
  const CatalogIcon2 = "../../../../assets/images/catalog-icon/catalog2.svg";
  const CatalogIcon3 = "../../../../assets/images/catalog-icon/catalog3.svg";
  const CatalogIcon4 = "../../../../assets/images/catalog-icon/catalog4.svg";
  const CatalogIcon5 = "../../../../assets/images/catalog-icon/catalog5.svg";

  return (
    <Layer5Wrapper>
      <div className="post-content">
        <Row className="brand-section">
          <Col xs={12} sm={6}>
            <h1 className="layerH3">Catalog</h1>
          </Col>
          <Col xs={12} sm={6} className="download-button">
            <a href="/brand/catalog-brand-kit.zip">
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
        </Row>
        <ProjectItemWrapper id="projects">
          <Row>
            <div className="project__block__wrap">
              <Col sm={12} md={6} lg={4}>
                <div className="project__block__inner">
                  <StaticImage
                    loading="lazy"
                    src={CatalogIcon}
                    alt="MeshMap Logo"
                  />
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="project__block__inner">
                  <StaticImage
                    loading="lazy"
                    src={CatalogIcon2}
                    alt="Meshery Logo"
                  />
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="project__block__inner">
                  <StaticImage
                    loading="lazy"
                    src={CatalogIcon3}
                    alt="SMP Logo"
                  />
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="project__block__inner">
                  <StaticImage
                    loading="lazy"
                    src={CatalogIcon4}
                    alt="Nighthawk Logo"
                  />
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="project__block__inner">
                  <StaticImage
                    loading="lazy"
                    src={CatalogIcon5}
                    alt="Nighthawk Logo"
                  />
                </div>
              </Col>
            </div>
          </Row>
        </ProjectItemWrapper>

        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">Colors</h2>
          </Col>
          <Col xs={12}>
            <p>
              Our community color palette consists of gray and green colors
              representing each of our projects. The Catalog logo should be
              white when using project colors as the background.
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
