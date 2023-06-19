import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MesheryLogo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import SpireLogo from "../../collections/integrations/spire/icon/color/spire-color.svg";
import { Link } from "gatsby";


const BannerWrapper = styled.div`
display: flex;
max-width: 100%;
overflow: hidden;
margin: 5% 0%;

.left-img {
  display: flex;
  background: linear-gradient(90.01deg, rgba(0, 179, 159, 0.54) 0.53%, rgba(71, 126, 150, 0.26) 51.1%, rgba(18, 18, 18, 0.16) 99.99%);
    flex: 0 0 20%;
    text-align: center;
    justify-content: center;
    /* padding: 4%; */
    border: 2px solid #eee;
    border-bottom-width: 2px;
    border-right-width: 10px;
    transform-origin: top right;
    transform: skewX(-25deg);
    padding: 3%;
}

.left-img > * {
  transition: transform 0.3s ease;
  transform: skewX(25deg); /* Counteract the parent's skew */
  width: 40%;

}

.desc {
  display: flex;
    flex: 0 0 60%;
    /* width: 60vw; */
    text-align: center;
    border: 1px solid #eee;
    border-bottom-width: 2px;
    justify-content: center;
    align-items: center;
    /* border-left-width: 10px;
    border-right-width: 10px; */
    /* padding: 4%; */
    transform: skewX(-25deg);

    h2 {
      text-align: center;
      width: 80%;
    }
}

.desc > * {
  transform: skewX(25deg); /* Counteract the parent's skew */
}

.right-img {
  display: flex;
  background: linear-gradient(90.01deg, rgba(18, 18, 18, 0.16) 0.01%, rgba(71, 126, 150, 0.26) 49.9%, rgba(0, 179, 159, 0.54) 99.47%);
    flex: 0 0 20%;
    text-align: center;
    justify-content: center;
    /* padding: 4%; */
    border: 1px solid #eee;
    border-left-width: 10px;
    border-bottom-width: 2px;
    transform-origin: bottom left;
    transform: skewX(-25deg);
    padding: 3%;
}

.right-img > * {
  transition: transform 0.3s ease;
  transform: skewX(25deg); /* Counteract the parent's skew */
  width: 40%;
}

.scale-on-hover {

  > * {
    transition: transform 0.5s ease;
    transform: skewX(25deg) scale(1.4);
  }
}
`;

const CaseStudyBanner = () => {

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <BannerWrapper>
      <div className={`left-img ${hover ? "scale-on-hover" : ""}`}>
        <img src={MesheryLogo} alt="meshery-logo" />
      </div>
      {/* <Link to= "../../collections/resources/articles/"> */}
      <div className="desc" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <h2>Discover how HPE uses Meshery to manage SPIRE</h2>
      </div>
      {/* </Link> */}
      <div className={`right-img ${hover ? "scale-on-hover" : ""}`}>
        <img src={SpireLogo} alt="spire-logo" />
      </div>
    </BannerWrapper>
  );
};

export default CaseStudyBanner;
