import React from "react";
import styled from "styled-components";
import MeshmapLocatorLight from "./images/meshmap-locator-light.svg";
import MeshmapLocatorDark from "./images/meshmap-locator-dark.svg";
import MeshmapImageBottomLight from "./images/meshmap-bottom-image-light.svg";
import MeshmapImageBottomDark from "./images/meshmap-bottom-image-dark.svg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

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
        padding-bottom: 3rem;
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

        .locator {
            /* transform: translateY(-5rem); */
            transition: 1s;
            z-index: 1;
        }
        .locator-moving {
            transform: translateY(5rem);
            transition: 1s;
            z-index: 1;
        }

        .map {
            opacity: 0;
            transition: opacity ease 0.5s;
            z-index: 0;
        }
        .map-visible {
            opacity: 1;
            transition: opacity 1s ease 0.5s;
        }

    }
`;

const MeshmapHeroSection = () => {
  const [locatorRef, inView] = useInView({ threshold: 1.0 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  const { isDark } = useStyledDarkMode();
  const theme = (typeof isDark === "boolean" && isDark) ? "dark" : "light";

  return (
    <HeroSectionWrapper>
      <div className="hero-image">
        <img className={imageInView ? "locator-moving" : "locator"} src={theme === "dark" ? MeshmapLocatorDark : MeshmapLocatorLight} alt="locator" ref={locatorRef} />
        <img className={imageInView ? "map map-visible" : "map"} src={theme === "dark" ? MeshmapImageBottomDark : MeshmapImageBottomLight} alt="integrations" />
      </div>
      <div className="hero-text">
        <h2><span>Design your infrastructure</span></h2>
        <p>Play with powerful features including context-aware designs and namespace configurations to easily manage all services.</p>
      </div>
    </HeroSectionWrapper>

  );
};

export default MeshmapHeroSection;