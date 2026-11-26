import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import MesheryLogo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import KanvasLogo from "../../assets/images/kanvas/icon-only/kanvas-icon-color.svg";
import SpireLogo from "../../collections/integrations/spire/icons/color/spire-color.svg";
import InforLogo from "./icons/infor-logo.svg";
import TCSLogoLight from "./icons/tcs-labs-logo-light.svg";
import TCSLogoDark from "./icons/tcs-labs-logo-dark.svg";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

import MesheryAndHPE from "../../collections/resources/case-study/hpes-adoption-of-meshery-and-kanvas/meshery-and-hpe.svg";
import InforMeshery from "../../collections/resources/case-study/infors-adoption-of-meshery-and-kanvas/infor-meshery.svg";
import TCSMeshery from "../../collections/resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas/tcs-labs-meshery.svg";

const CASE_STUDY_PRESETS = {
  hpe: {
    title: "Discover how HPE uses Meshery to manage SPIRE",
    link: "/resources/case-study/hpes-adoption-of-meshery-and-kanvas",
    leftLogo: MesheryLogo,
    leftAlt: "Meshery Logo",
    rightLogo: SpireLogo,
    rightAlt: "SPIRE Logo",
    mobileGraphic: MesheryAndHPE,
    mobileAlt: "HPE Meshery Case Study",
    ribbonText: "Case Study",
  },
  infor: {
    title: "Discover how Infor accelerates Platform Engineering with Meshery & Kanvas",
    link: "/resources/case-study/infors-adoption-of-meshery-and-kanvas",
    leftLogo: KanvasLogo,
    leftAlt: "Kanvas Logo",
    rightLogo: InforLogo,
    rightAlt: "Infor Logo",
    mobileGraphic: InforMeshery,
    mobileAlt: "Infor Meshery Case Study",
    ribbonText: "Case Study",
  },
  tcs: {
    title: "See how TCS Labs powers its Internal Developer Platform with Kanvas",
    link: "/resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas",
    leftLogo: KanvasLogo,
    leftAlt: "Kanvas Logo",
    rightLogo: TCSLogoLight,
    rightLogoDark: TCSLogoDark,
    rightAlt: "TCS Labs Logo",
    mobileGraphic: TCSMeshery,
    mobileAlt: "TCS Labs Meshery Case Study",
    ribbonText: "Case Study",
  },
};

const BannerWrapper = styled.div`
  .large-screen {
    display: flex;
    max-width: 100%;
    overflow: hidden;
    margin: 5% 0%;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .left-img {
    display: flex;
    background: ${props => props.theme.bannerGradientBackgroundToWhite};
    flex: 0 0 20%;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    border-image: ${props => props.theme.borderGradientTransitionBefore};
    border-image-slice: 1 1 1 1;
    transition: border 0.4s ease-in-out;
    transform-origin: top right;
    transform: skewX(-25deg);
    padding: 3%;
  }

  .left-img > * {
    transition: transform 0.4s ease;
    transform: skewX(25deg);
    width: auto;
    height: 85px;
    max-width: 60%;
    object-fit: contain;
  }

  .desc {
    display: flex;
    background: ${props => props.theme.bannerDescriptionGradient};
    flex: 0 0 60%;
    text-align: center;
    border: 2px solid #00b39f;
    transition: border 0.4s ease-in-out;
    justify-content: center;
    align-items: center;
    transform: skewX(-25deg);
    position: relative;

    h2 {
      text-align: center;
      width: 85%;
      color: #fff;
      padding: 0 4rem 0 2rem;
      margin: 0;
      line-height: 1.35;
      font-size: 1.65rem;

      @media screen and (max-width: 1200px) {
        font-size: 1.45rem;
      }
      @media screen and (max-width: 800px) {
        font-size: 1.25rem;
        padding: 0 2.5rem 0 1rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }

  .desc > * {
    transform: skewX(25deg);
  }

  .right-img {
    display: flex;
    background: ${props => props.theme.bannerGradientBackground2ToWhite};
    flex: 0 0 20%;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    border-image: ${props => props.theme.borderGradientTransitionBefore};
    border-image-slice: 1 1 1 1;
    transition: border 0.4s ease-in-out;
    transform-origin: bottom left;
    transform: skewX(-25deg);
    padding: 3%;
  }

  .right-img > * {
    transition: transform 0.4s ease;
    transform: skewX(25deg);
    width: auto;
    height: 85px;
    max-width: 75%;
    object-fit: contain;
  }

  .scale-on-hover {
    border-image: ${props => props.theme.borderGradientTransitionAfter};
    border-image-slice: 1 1 1 1;
    transition: 0.4s ease-in-out;
    > * {
      transition: transform 0.4s ease;
      transform: skewX(25deg) scale(1.4);
    }
  }

  .ribbon {
    display: flex;
    align-items: center;
    position: absolute;
    right: -3px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 120px;
    height: 120px;
    text-align: right;

    span {
      padding-left: 1.75rem;
      font-size: 13px;
      font-weight: bold;
      color: ${props => props.theme.whiteToBlack};
      text-transform: uppercase;
      text-align: center;
      line-height: 20px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      width: 150px;
      display: block;
      background: ${props => props.theme.yellowEBC0EBToGradient};
      box-shadow: 0 3px 10px -5px #000;
      position: absolute;
      top: 20px;
      right: -19px;
    }

    span:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 100%;
      z-index: -1;
      border-left: 3px solid #00b39f;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-top: 3px solid #00b39f;
    }

    span:after {
      content: "";
      position: absolute;
      right: 0px;
      top: 100%;
      z-index: -1;
      border-left: 3px solid transparent;
      border-right: 3px solid #00b39f;
      border-bottom: 3px solid transparent;
      border-top: 3px solid #00b39f;
    }
  }

  .small-screen {
    display: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1.5rem 0;

    @media screen and (max-width: 600px) {
      display: flex;
    }

    .small-screen-desc {
      width: 80%;

      h2 {
        font-size: 1.15rem;
        margin-bottom: 0.75rem;
      }
    }

    .meshery-and-spire {
      margin-top: 5%;
      width: 80%;
      border: 1px solid #fff;

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
`;

const CaseStudyBanner = ({
  caseStudy = "hpe",
  title,
  link,
  leftLogo,
  leftAlt,
  rightLogo,
  rightLogoDark,
  rightAlt,
  mobileGraphic,
  mobileAlt,
  ribbonText,
  className,
}) => {
  const { isDark } = useStyledDarkMode();
  const presetKey = (caseStudy || "hpe").toLowerCase();
  const preset = Object.prototype.hasOwnProperty.call(CASE_STUDY_PRESETS, presetKey)
    ? CASE_STUDY_PRESETS[presetKey]
    : CASE_STUDY_PRESETS.hpe;

  const resolvedTitle = title || preset.title;
  const resolvedLink = link || preset.link;
  const resolvedLeftLogo = leftLogo || preset.leftLogo;
  const resolvedLeftAlt = leftAlt || preset.leftAlt;
  const defaultRightLogo = isDark
    ? (preset.rightLogo || preset.rightLogoLight)
    : (preset.rightLogoDark || preset.rightLogo);
  const resolvedRightLogo =
    (isDark ? rightLogo : (rightLogoDark || rightLogo)) || defaultRightLogo;
  const resolvedRightAlt = rightAlt || preset.rightAlt;
  const resolvedMobileGraphic = mobileGraphic || preset.mobileGraphic;
  const resolvedMobileAlt = mobileAlt || preset.mobileAlt;
  const resolvedRibbonText = ribbonText || preset.ribbonText;

  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(true);
  const handleLeave = () => setHover(false);

  return (
    <Link to={resolvedLink} style={{ textDecoration: "none" }} aria-label={resolvedTitle}>
      <BannerWrapper className={className}>
        <div className="small-screen">
          <div className="small-screen-desc">
            <h2>{resolvedTitle}</h2>
          </div>
          <div className="meshery-and-spire">
            <img src={resolvedMobileGraphic} alt={resolvedMobileAlt} loading="lazy" />
          </div>
        </div>
        <div className="large-screen" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <div className={`left-img ${hover ? "scale-on-hover" : ""}`}>
            <img src={resolvedLeftLogo} alt={resolvedLeftAlt} loading="lazy" />
          </div>
          <div className="desc">
            <h2>{resolvedTitle}</h2>
            <div className="ribbon">
              <span>{resolvedRibbonText}</span>
            </div>
          </div>
          <div className={`right-img ${hover ? "scale-on-hover" : ""}`}>
            <img src={resolvedRightLogo} alt={resolvedRightAlt} loading="lazy" />
          </div>
        </div>
      </BannerWrapper>
    </Link>
  );
};

CaseStudyBanner.propTypes = {
  caseStudy: PropTypes.oneOf(Object.keys(CASE_STUDY_PRESETS)),
  title: PropTypes.string,
  link: PropTypes.string,
  leftLogo: PropTypes.string,
  leftAlt: PropTypes.string,
  rightLogo: PropTypes.string,
  rightLogoDark: PropTypes.string,
  rightAlt: PropTypes.string,
  mobileGraphic: PropTypes.string,
  mobileAlt: PropTypes.string,
  ribbonText: PropTypes.string,
  className: PropTypes.string,
};

export default CaseStudyBanner;
