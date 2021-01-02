import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ColorBox from "../../../components/ColorBox";

import { FiDownloadCloud } from "react-icons/fi";
import SmpDark from "../../../assets/images/smp/icon/smp-dark.png";
import SmpLight from "../../../assets/images/smp/icon/smp-light.png";
import SmpWhite from "../../../assets/images/smp/icon/smp-white.png";
import SmPLightTextSide from "../../../assets/images/smp/horizontal/smp-light-text-side.png";
import SmPDarkTextSide from "../../../assets/images/smp/horizontal/smp-dark-text-side.png";
import SmPWhiteTextSide from "../../../assets/images/smp/horizontal/smp-white-text-side.png";

const SMPWrap = styled.section`
  .SmpWhite, .smpDark {
    background: ${props => props.theme.primaryColor};
  }

  .smp-logo {
      margin: 0.5rem -15px;
  }

  @media (max-width:425px){
    .colors{
      padding-left:50px;
    }
}
`;

const SMPBrand = () => {
    return (
        <SMPWrap>
            <div className="post-content">
                <Row>
                    <Col xs={12} sm={6}>
                        <h1 className="layerH3">
                            <strong>Service Mesh Performance</strong>
                        </h1>
                    </Col>
                    <Col xs={12} sm={6} className="download-button">
                        <Button primary title="Download Logo Assets" url="../../../assets/brand/smp-brand-kit.zip" external="true">
                            <FiDownloadCloud size={21} className="icon-left" />
                        </Button>
                    </Col>
                    <Col>
                        <p>
                            The Service Mesh Performance mark includes SMP name & logo and any
                            word, phrase, image, or other designation that identifies the
                            source or origin of any Layer5 projects. PLease don't modify the
                            marks or use them in a confusing way, including suggesting
                            sponsorship or endorsement by Layer5 with another brand(including
                            your own)
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="layerH3 in">
                            Logos
                        </h2>
                    </Col>
                    <Row className="ImgDiv smp-logo">
                        <Col xs={12} sm={4}>
                            <img src={SmpDark} />
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="SmpWhite">
                                <img src={SmpWhite} />
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="SmpWhite">
                                <img src={SmpLight} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="ImgDiv smp-logo">
                        <Col xs={12} sm={4}>
                            <img src={SmPDarkTextSide} />
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="SmpWhite">
                                <img src={SmPWhiteTextSide} />
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="SmpWhite">
                                <img src={SmPLightTextSide} />
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col>
                        <h2 className="layerH3 in">
                            Colors
                        </h2>
                    </Col>
                    <Col>
                        <p>
                            The SMP color palette consists of gray, green and colors and
                            additional shades. The SMP logo should be white or monochrome when
                            using project colors as the background.
                        </p>
                    </Col>
                    <Row className="color-code-wrapper">
                        <ColorBox name="Charcoal" R="60" G="73" B="79" colorCode="#3C494F" />
                        <ColorBox name="Keppel" R="0" G="179" B="159" colorCode="#00B39F" />
                        <ColorBox name="Caribbean Green" R="0" G="211" B="169" colorCode="#00D3A9" />
                        <ColorBox name="Teal Blue" R="71" G="126" B="150" colorCode="#477E96" />
                    </Row>
                </Row>
            </div>
        </SMPWrap>
    );
};

export default SMPBrand;
