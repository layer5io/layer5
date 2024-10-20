import React from "react";
import styled from "styled-components";
import KanvasLocatorLight from "./images/kanvas-locator-light.svg";
import KanvasLocatorDark from "./images/kanvas-locator-dark.svg";
import KanvasImageBottomLight from "./images/kanvas-bottom-image-light.svg";
import KanvasImageBottomDark from "./images/kanvas-bottom-image-dark.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const HeroSectionWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.grey121212ToWhite};;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 3% 5% 8%;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column-reverse;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 35%;
        margin-top: 5%;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
          margin-top: 15%;
        }
    }

    h2 {
      padding-bottom: 2%;
    }

    .hero-image {
        display: grid;
        grid-template-rows: 5rem 5rem;
        place-items: center;
        margin: 5% 0;
        flex: 0 0 50%;
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


const KanvasHeroSection = () => {
  const [locatorRef, inView] = useInView({ threshold: 0.8 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  const { isDark } = useStyledDarkMode();

  return (
    <HeroSectionWrapper>
      <div className="hero-text">
        <h2><span>Design your infrastructure</span></h2>
        <p>Kanvasis the world’s only visual designer for Kubernetes and cloud native applications. Design, deploy, and manage your Kubernetes-based, cloud native deployments allowing you to speed up infrastructure configuration.</p>
      </div>
      <div className="hero-image">
        <img className={imageInView ? "locator-moving" : "locator"} src={isDark ? KanvasLocatorDark : KanvasLocatorLight} alt="locator" />
        <img className={imageInView ? "map map-visible" : "map"} src={isDark ? KanvasImageBottomDark : KanvasImageBottomLight} alt="integrations" ref={locatorRef} />
      </div>
    </HeroSectionWrapper>

  );
};

export default KanvasHeroSection;