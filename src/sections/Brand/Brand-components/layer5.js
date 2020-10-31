import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";
import media from "../../../components/mediaQuery";

import Layer5CommunityWhite from "../../../images/layer5/layer5-tagline/png/layer5-tag-white-bg.png";
import Layer5WhiteBg from "../../../images/layer5/layer5-only/png/layer5-white-bg.png";
import Layer5TagDark from "../../../images/layer5/layer5-tagline/png/layer5-tag-community-white.png";
import Bookmarks from "../../../images/layer5/bookmarks.png";

const Layer5Wrapper = styled.section`
  .brandHeader {
    height: auto;
    padding-left:0px;
    padding-top: 3rem;
  }
  .brandHeader h2{
    font-size:2rem;
  }
  .Layer5TagDark {
    background: #000000;
  }

  @media (max-width:575px){
     .brandHeader{
         padding-bottom:30px;
         padding-top: 0;
     }
  }

  ${media.grandpabear`
        .mediaLayer5 {
          padding-left: 2.5em;
      }
  `}

  ${media.papabear`
        .mediaLayer5 {
          padding-left: 5.8em;
      }
  `}

  ${media.mamabear`
        .mediaLayer5 {
          padding-left: .5em;
      }
   `}
  ${media.babybear`
        .mediaLayer5 {
          padding-left: 1.3em;
      }
   `}

`;

const Layer5 = () => {
    return (
        <Layer5Wrapper>
            <Row>
                <Col xs={12} sm={4} lg={4} xl={4}>
                    <div className="brandHeader">
                        <h2>Layer5 Brand Kits</h2>
                    </div>
                </Col>
                <Col xs={12} sm={8} lg={8} xl={8}>
                    <div className="post-content">
                        <p>
              We’ve created some guidelines to help you use our brand and
              assets, including our logo, content and trademarks, without having
              to negotiate legal agreements for each use. To make any use of our
              marks in a way not covered by these guidelines, please contact us
              and include a visual mockup of intended use.
                        </p>
                        <p>
                            <a href="mailto:community@layer5.io">
                Questions about our brand? Contact us.
                            </a>
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="post-content">
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <h1 className="layerH3">
                        <strong>Layer5</strong>
                    </h1>
                </Col>
                <Col xs={12} sm={6} lg={6} xl={6}>
                    <Button className="l5-dark-yellow" title="DOWNLOAD LOGO ASSETS" url="https://layer5.io/assets/resources/brand/layer5-brand-kit.zip" external="true" />
                </Col>
                <Col xs={12} sm={12} lg={12} xl={12}>
                    <Row>
                        <p>
              The Layer5 mark includes the Layer5 name & logo, and any word,
              phrase, image, or other designation that identifies the source or
              origin of any Layer5 projects. Please don’t modify the marks or
              use them in a confusing way, including suggesting sponsorship or
              endorsement by Layer5, or in a way that confuses Layer5 with
              another brand (including your own).
                        </p>
                    </Row>
                </Col>
                <Row className="ImgDiv">
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={Layer5CommunityWhite} />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img className="Layer5TagDark" src={Layer5TagDark} />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={Layer5WhiteBg} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} lg={6} xl={6}>
                        <h3 className="layerH3">
                            <strong>Colors</strong>
                        </h3>
                    </Col>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p>
              Our community color palette consists of gray, green and colors
              representing each of our projects. The Layer5 logo should be white
              when using project colors as the background.
                        </p>
                    </Col>
                </Row>
                <Col xs={12} sm={12} lg={12} xl={12}>
                    <h4 className="layerH3">Web</h4>
                </Col>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={12} sm={12} lg={12} xl={12}>
                                <p className="layerH3">Color</p>
                            </Col>
                            <ColorBox R="R: 60" G="G: 73" B="B: 79" colorCode="#3c494f" />
                            <ColorBox R="R: 0" G="G: 179" B="B: 159" colorCode="#00b39f" />
                            <ColorBox R="R: 0" G="G: 211" B="B: 169" colorCode="#00d3a9" />
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={12} sm={12} lg={12} xl={12}>
                                <p className="layerH3">Grayscale</p>
                            </Col>
                            <ColorBox R="R: 60" G="G: 73" B="B: 79" colorCode="#3c494f" />
                            <ColorBox R="R: 130" G="G: 140" B="B: 140" colorCode=" #828c8c" />
                            <ColorBox R="R: 160" G="G: 170" B="B: 170" colorCode="#a0aaaa" />
                        </Row>
                    </Col>
                </Row>
                <Col xs={12} sm={12} lg={12} xl={12}>
                    <h4 className="layerH3">Print</h4>
                </Col>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={12} sm={12} lg={12} xl={12}>
                                <p className="layerH3">Color</p>
                            </Col>
                            <ColorBox
                                R="c: 20"
                                G="M: 0"
                                B="Y: 0"
                                K="K: 80"
                                colorCode="#3c494f"
                                CMY />
                            <ColorBox
                                R="C: 80"
                                G="M: 0"
                                B="Y: 50"
                                K="K: 0"
                                colorCode="#00b39f"
                                CMY />
                            <ColorBox
                                R="C: 65"
                                G="M: 0"
                                B="Y: 45"
                                K="K: 0"
                                colorCode="#00d3a9"
                                CMY />
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Row>
                            <Col xs={12} sm={12} lg={12} xl={12}>
                                <p className="layerH3">Grayscale</p>
                            </Col>
                            <ColorBox
                                R="C: 0"
                                G="M: 0"
                                B="Y: 0"
                                K="K: 85"
                                colorCode="#3c494f"
                                CMY />
                            <ColorBox
                                R="C: 0"
                                G="M: 0"
                                B="Y: 0"
                                K="K: 55"
                                colorCode=" #828c8c"
                                CMY />
                            <ColorBox
                                R="C: 0"
                                G="M: 0"
                                B="Y: 0"
                                K="K: 40"
                                colorCode="#a0aaaa"
                                CMY/>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <h4 className="layerH3">Bookmarks</h4>
                    </Col>
                    <Col xs={12} sm={12} lg={12} xl={12}>
                        <p className="layerH3">
              Media available for print in the form of bookmarks.
                        </p>
                    </Col>
                    <Col xs={8} sm={2} lg={2} xl={2}>
                        <Link to="#">
                            <img src={Bookmarks} />
                        </Link>
                    </Col>
                </Row>
            </Row>
        </Layer5Wrapper>
    );
};

export default Layer5;
