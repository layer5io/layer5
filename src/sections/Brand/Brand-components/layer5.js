import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";
import media from "../../../components/mediaQuery";

import { FiDownloadCloud } from "react-icons/fi";
import Layer5CommunityWhite from "../../../assets/images/layer5/layer5-tagline/png/layer5-tag-white-bg.png";
import Layer5WhiteBg from "../../../assets/images/layer5/layer5-only/png/layer5-white-bg.png";
import Layer5TagDark from "../../../assets/images/layer5/layer5-tagline/png/layer5-tag-community-white.png";
import Bookmarks from "../../../assets/images/layer5/bookmarks.png";

const Layer5Wrapper = styled.section`
    .brandHeader {
        padding: 75px 0 105px 0;
        height: auto;
        background: #1E2117;
        text-align: center;
        h1{
            color: ${props => props.theme.white};
            font-size: 50px;
            line-height: 60px;
            padding: 20px 0 20px 0;
        }
        h6{
            margin: 20px auto 60px auto;
            width: 70%;
            color: ${props => props.theme.white};
            font-size: 21px;
            line-height: 32px;
            font-weight: 100;
        }
    }
    .Layer5TagDark {
        background: #000000;
    }
    .bookmarks{
        width: 80%;
        margin: auto;
    }
    

    @media (max-width:575px){
        .brandHeader{
            padding: 30px 0 50px 0;
            h6{
                width: 90%;
            }
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
            <div className="brandHeader">
                <h1> Layer5 Brand Kits</h1>
                <h6>
                    We’ve created some guidelines to help you use our brand and
                    assets, including our logo, content and trademarks, without having
                    to negotiate legal agreements for each use. To make any use of our
                    marks in a way not covered by these guidelines, please contact us
                    and include a visual mockup of intended use.
                </h6>
                <Button primary title="Download Brand Kit">
                    <FiDownloadCloud size={21} className="icon-left" />
                </Button>
            </div>
            <div className="post-content">
                <Row>
                    <h1 className="layerH3">
                            Layer5
                    </h1>
                    <Button primary className="l5-dark-yellow" title="Donwload Logo Assets" url="https://layer5.io/assets/resources/brand/layer5-brand-kit.zip" external="true">
                        <FiDownloadCloud size={21} className="icon-left" />
                    </Button>
                </Row>
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
                <Row>
                    <h1 className="layerH3 in">
                            Logos
                    </h1>
                </Row>
                <Row className="ImgDiv">
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={Layer5CommunityWhite} alt="Layer5CommunityWhite" />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img className="Layer5TagDark" src={Layer5TagDark} alt="Layer5TagDark" />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} lg={4} xl={4}>
                        <a href="#">
                            <img src={Layer5WhiteBg} alt="Layer5WhiteBg" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <h1 className="layerH3 in">
                            Colors
                    </h1>
                </Row>
                <Row>
                    <p>
                            Our community color palette consists of gray, green and colors
                            representing each of our projects. The Layer5 logo should be white
                            when using project colors as the background.
                    </p>
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
                    <h1 className="layerH3 in">
                        Bookmarks
                    </h1>
                </Row>
                <Row>
                    <p className="layerH3">
                        Media available for print in the form of bookmarks.
                    </p>
                    <Link className="bookmarks" to="#">
                        <img src={Bookmarks} alt="Bookmarks" />
                    </Link>
                </Row>
            </div>
        </Layer5Wrapper>
    );
};

export default Layer5;
