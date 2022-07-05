import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from "../../../../reusecore/Layout";
import Button from "../../../../reusecore/Button";
import ColorBox from "../../../../components/ColorBox";
import { FiDownloadCloud } from "@react-icons/all-files/fi/FiDownloadCloud";
import Layer5CommunityWhite from "../../../../assets/images/layer5/layer5-tagline/png/layer5-tag-white-bg.png";
import Layer5WhiteBg from "../../../../assets/images/layer5/layer5-only/png/layer5-white-bg.png";
import Bookmarks from "../../../../assets/images/layer5/bookmarks.png";
import BookmarksPDF from "../../../../assets/brand/bookmarks.pdf";
import Layer5Icon from "../../../../assets/images/layer5/5 icon/svg/light/5-light-no-trim.svg";

const Layer5Wrapper = styled.section`
    @media (max-width:575px){
        .brandHeader{
            padding: 3rem 0;
        }
    }
`;

const Layer5Brand = () => {
  return (
    <Layer5Wrapper>
      <div className="post-content">
        <Row className="brand-section">
          <Col xs={12} sm={6}>
            <h1 className="layerH3">
              Layer5
            </h1>
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
              The Layer5 mark includes the Layer5 name & logo, and any word,
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
            <h2 className="layerH3 in">
              Logos
            </h2>
          </Col>
          <SRLWrapper>
            <Row Vcenter className="Layer5Logos">
              <Col xs={12} sm={4}>
                <img src={Layer5WhiteBg} alt="Layer5 Logo" />
                  Primary Logo: broadly, and majorly applicable
              </Col>
              <Col xs={12} sm={4}>
                <img src={Layer5CommunityWhite} alt="Layer5 Logo with tagline" />
                  Primary Logo with tagline: alternate horizontal layout
              </Col>
              <Col xs={12} sm={4}>
                <img src={Layer5Icon} alt="Layer5 Logo" className="Layer5Icon" />
                  Layer5 Icon: suited for square-shaped display
              </Col>
            </Row>
          </SRLWrapper>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">
              Colors
            </h2>
          </Col>
          <Col xs={12}>
            <p>
              Our community color palette consists of gray and green colors
              representing each of our projects. The Layer5 logo should be white
              when using project colors as the background.
            </p>
          </Col>
          <Row className="color-code-wrapper">
            <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
            <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
            <ColorBox name="Saffron" R="235" G="192" B="23" colorCode="#EBC017" />
            <div className="blond-color-box">
              <ColorBox name="Blond" R="255" G="243" B="197" dark colorCode="#FFF3C5" />
            </div>
            <ColorBox name="Light Slate Gray" R="122" G="132" B="142" colorCode="#7A848E" />
            <ColorBox name="Dark Jungle Green" R="30" G="33" B="23" colorCode="#1E2117" />
            <ColorBox name="Teal Blue" R="71" G="126" B="150" colorCode="#477E96" />
            <ColorBox name="Casper" R="177" G="182" B="184" colorCode="#B1B6B8" />
            <div className="white-color-box">
              <ColorBox name="White" R="255" G="255" B="255" dark colorCode="#FFFFFF" />
            </div>
          </Row>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="layerH3 in">
              Bookmarks
            </h2>
          </Col>
          <Col xs={12}>
            <p className="layerH3">
              Media available for print.
            </p>
            <Row className="bookmarks">
              <Link to={BookmarksPDF}>
                <img className="bookmarks" src={Bookmarks} alt="Layer5 and Meshery Bookmarks" />
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    </Layer5Wrapper>
  );
};

export default Layer5Brand;
