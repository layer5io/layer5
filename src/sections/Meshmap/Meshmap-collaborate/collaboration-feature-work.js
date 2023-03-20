import React from "react";
import styled from "styled-components";
import WorldImg from "./images/world-transitions/world-image.svg";
import World1 from "./images/world-transitions/world-1.svg";
import World2 from "./images/world-transitions/world-2.svg";
import World3 from "./images/world-transitions/world-3.svg";
import World4 from "./images/world-transitions/world-4.svg";
import World5 from "./images/world-transitions/world-5.svg";
import World6 from "./images/world-transitions/world-6.svg";
import World7 from "./images/world-transitions/world-7.svg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const CollaborationFeatureWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.grey121212ToWhite};;
    max-width: 90%;
    justify-content: space-between;
    align-items: center;
    padding: 2% 5% 8%;
    @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column-reverse;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 40%;
        max-width: 40%;
        position: relative;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
        }
    }

    .hero-text-visibe {
      right: 0%;
      scale: 1;
      transition: 1s;
    }

    h2 {
      span {
        color: #00b39f;
      }
    }

    .world-image {
      flex: 0 0 50%;
      max-width: 50%;
      /* position: relative; */
    }

    img {
      opacity: 0;
      /* position: absolute; */
      /* top: 0%; */
      /* left: 0%; */
      transition: opacity ease-out 0.5s;
    }

    .visible {
      opacity: 1;
      transition: opacity ease-in 0.5s;
    }

`;

const CollaborationFeatureWork = () => {
  const [locatorRef, inView] = useInView({ threshold: 0.5 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  return (
    <CollaborationFeatureWrapper>
      <div className="world-image">
        <img className={imageInView ? "visible" : ""} src={WorldImg} alt="" ref={locatorRef} />
        {/* <img className={imageInView ? "visible" : ""} src={World1} alt="" ref={locatorRef} />
        <img className={imageInView ? "visible" : ""} src={World2} alt="" ref={locatorRef} />
        <img className={imageInView ? "visible" : ""} src={World3} alt="" ref={locatorRef} />
        <img className={imageInView ? "visible" : ""} src={World4} alt="" ref={locatorRef} />
        <img className={imageInView ? "visible" : ""} src={World5} alt="" ref={locatorRef} />
        <img className={imageInView ? "visible" : ""} src={World6} alt="" ref={locatorRef} />
        <img className={imageInView ? "visible" : ""} src={World7} alt="" ref={locatorRef} /> */}
      </div>
      <div className="hero-text">
        <h2><span>Work from Anywhere</span></h2>
        <p>Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.</p>
      </div>
    </CollaborationFeatureWrapper>

  );
};

export default CollaborationFeatureWork;