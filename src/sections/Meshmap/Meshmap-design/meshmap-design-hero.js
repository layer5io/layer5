import React from "react";
import styled from "styled-components";
import MeshmapLocator from "./images/meshmap-locator.svg";
import MeshmapImageBottom from "./images/meshmap-image-bottom.svg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const HeroSectionWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.DarkTheme ? "#121212" : "fff"};;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 2% 5% 8%;
    @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column-reverse;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 30%;
        max-width: 30%;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
        }
    }

    .hero-image {
        display: grid;
        grid-template-rows: 5rem 5rem;
        place-items: center;
        margin: 5% 0;
        flex: 0 0 60%;
        max-width: 60%;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
        }

        .locator-moving {
            transform: translateY(5rem);
            transition: 1s;
            z-index: 1;
        }

        .map {
            opacity: 0;
            z-index: 0;
        }
        .map-visible {
            opacity: 1;
            transition: opacity 1.5s ease 0.5s;
        }

    }



`;

const MeshmapHeroSection = () => {
  const [locatorRef, inView] = useInView({ threshold: 1.0 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  // else if (!inView && imageInView)
  // setimageInView(false);

  return (
    <HeroSectionWrapper>
      <div className="hero-image">
        <img className={imageInView ? "locator-moving" : ""} src={MeshmapLocator} alt="" ref={locatorRef} />
        <img className={imageInView ? "map map-visible" : "map"} src={MeshmapImageBottom} alt="" />
      </div>
      <div className="hero-text">
        <h2><span>Design your infrastructure</span></h2>
        <p>Play with powerful features including context-aware designs and namespace configurations to easily manage all services.</p>
      </div>
    </HeroSectionWrapper>

  );
};

export default MeshmapHeroSection;