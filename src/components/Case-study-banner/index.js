import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MesheryLogo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import SpireLogo from "../../collections/integrations/spire/icons/color/spire-color.svg";
import KanvasLogo from "../../assets/images/kanvas/icon-only/kanvas-icon-color.svg";
import MesheryAndSpire from "../../collections/resources/case-study/hpes-adoption-of-meshery-and-kanvas/meshery-and-hpe.svg";
import TcsLabsMeshery from "../../collections/resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas/tcs-labs-meshery.svg";
import InforMeshery from "../../collections/resources/case-study/infors-adoption-of-meshery-and-kanvas/infor-meshery.svg";

const BannerWrapper = styled.div`
  display: none;

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

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
    /* border: 1px solid;
    border-color: ${props => props.theme.whiteToBlack};
    border-bottom-width: 2px; */
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
  transform: skewX(25deg); /* Counteract the parent's skew */
  width: 40%;

}

.desc {
  display: flex;
  background:${props => props.theme.bannerDescriptionGradient};
    flex: 0 0 60%;
    text-align: center;
    border: 2px solid #00b39f;
    /* border-image: ${props => props.theme.borderGradientTransitionBefore} ;
    border-image-slice: 1 1 1 1; */
    transition: border 0.4s ease-in-out;
    justify-content: center;
    align-items: center;
    transform: skewX(-25deg);

    h2 {
      text-align: center;
      width: 80%;
      color: #fff;

      @media screen and (max-width: 800px) {
        font-size: 1.25rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
}

.desc > * {
  transform: skewX(25deg); /* Counteract the parent's skew */
}

.right-img {
  display: flex;
  background: ${props => props.theme.bannerGradientBackground2ToWhite};
    flex: 0 0 20%;
    text-align: center;
    justify-content: center;
    /* border: 1px solid;
    border-bottom-width: 2px;
    border-color: #00b39f; */
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
  transform: skewX(25deg); /* Counteract the parent's skew */
  width: 40%;
}

.scale-on-hover {
  border-image: ${props => props.theme.borderGradientTransitionAfter} ;
    border-image-slice: 1 1 1 1;
    transition: 0.4s ease-in-out;
  > * {
    transition: transform 0.4s ease;
    transform: skewX(25deg) scale(1.4);
  }
}

.desc-hover {
  /* border-image: ${props => props.theme.borderGradientTransitionAfter} ;
    border-image-slice: 1 1 1 1;
    transition: 0.4s ease-in-out; */
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
    background: #79A70A;
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
    border-left: 3px solid #00B39F;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #00B39F;
    }

    span:after {
      content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #00B39F;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #00B39F;
    }
}

.small-screen {
  display: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    display: flex;
  }

  .small-screen-desc {
    width: 80%;
  }

  .meshery-and-spire {
    margin-top: 5%;
  width: 80%;
  border: 1px solid #fff;
  }
}
`;

const CaseStudiesCount = 3;

const caseStudies = [
  {
    title: "Discover how HPE uses Meshery to manage SPIRE",
    link: "/resources/case-study/hpes-adoption-of-meshery-and-kanvas",
    logoLeft: MesheryLogo,
    logoRight: SpireLogo,
    mobileImg: MesheryAndSpire,
    altLeft: "meshery-logo",
    altRight: "spire-logo",
    altMobile: "meshery-and-spire"
  },
  {
    title: "Discover how TCS Labs runs Meshery as the design plane of its IDP",
    link: "/resources/case-study/tcs-labs-adoption-of-meshery-and-kanvas",
    logoLeft: MesheryLogo,
    logoRight: KanvasLogo,
    mobileImg: TcsLabsMeshery,
    altLeft: "meshery-logo",
    altRight: "kanvas-logo",
    altMobile: "tcs-labs-meshery"
  },
  {
    title: "Discover how Infor uses Meshery for cloud platform engineering",
    link: "/resources/case-study/infors-adoption-of-meshery-and-kanvas",
    logoLeft: MesheryLogo,
    logoRight: KanvasLogo,
    mobileImg: InforMeshery,
    altLeft: "meshery-logo",
    altRight: "kanvas-logo",
    altMobile: "infor-meshery"
  }
];

const CaseStudyBanner = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  let initialValue;
  try {
    initialValue = sessionStorage.getItem("caseStudy") || 1;
  } catch (error) {
    console.error("Error in sessionStorage.getItem('caseStudy'):", error);
    initialValue = 1;
  }

  useEffect(() => {
    let val = initialValue;
    try {
      val = sessionStorage.getItem("caseStudy") || 1;
    } catch (error) {
      console.error("Error in sessionStorage.getItem('caseStudy'):", error);
      val = 1;
    }

    let currentClass = `casestudy${val}`;
    let replaceClass = `casestudy${val - 1 == 0 ? CaseStudiesCount : val - 1}`;
    if (!document.body.classList.contains(currentClass)) {
      document.body.classList.replace(replaceClass, currentClass);
    }
    if (!document.body.classList.contains(currentClass)) {
      document.body.classList.add(currentClass);
    }

    try {
      if (sessionStorage.getItem("caseStudy")) {
        sessionStorage.setItem("caseStudy", (Number(initialValue) % CaseStudiesCount) + 1);
      } else {
        sessionStorage.setItem("caseStudy", 2);
      }
    } catch (error) {
      console.error("Error in sessionStorage.setItem('caseStudy'):", error);
    }
  }, []);

  return (
    <>
      {caseStudies.map((study, index) => {
        const studyClass = `casestudy${index + 1}`;
        const isHovered = hoverIndex === index;
        return (
          <BannerWrapper key={index} className={studyClass}>
            <a href={study.link}>
              <div className="small-screen">
                <div className="small-screen-desc">
                  <h2>{study.title}</h2>
                </div>
                <div className="meshery-and-spire">
                  <img src={study.mobileImg} alt={study.altMobile} />
                </div>
              </div>
              <div className="large-screen">
                <div
                  className={`left-img ${isHovered ? "scale-on-hover" : ""}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img src={study.logoLeft} alt={study.altLeft} />
                </div>
                <div
                  className={`desc ${isHovered ? "desc-hover" : ""}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <h2>{study.title}</h2>
                  <div className="ribbon">
                    <span>Case Study</span>
                  </div>
                </div>
                <div
                  className={`right-img ${isHovered ? "scale-on-hover" : ""}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img src={study.logoRight} alt={study.altRight} />
                </div>
              </div>
            </a>
          </BannerWrapper>
        );
      })}
    </>
  );
};

export default CaseStudyBanner;
