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
  background-color: ${(props) => props.theme.grey121212ToWhite};
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
  if (inView && !imageInView) setimageInView(true);
  else if (imageInView && !inView) setimageInView(false);

  const { isDark } = useStyledDarkMode();

  return (
    <HeroSectionWrapper id="kanvas-hero" aria-labelledby="kanvas-hero-heading">
      <div className="hero-text">
        <h1 id="kanvas-hero-heading">
          Kanvas Designer: Visual Cloud Native Infrastructure Tool
        </h1>

        <h2>Design Your Kubernetes &amp; Cloud Native Infrastructure</h2>

        <p>Kanvas is a visual designer for Kubernetes and cloud-native applications. It allows developers and platform engineers to design, deploy, and manage Kubernetes-based infrastructure through an intuitive graphical interface, simplifying cloud-native architecture and accelerating configuration. </p>
      </div>
      <div className="hero-image">
        <img
          title="Kanvas infrastructure locator - visual Kubernetes design tool"
          className={imageInView ? "locator-moving" : "locator"}
          src={isDark ? KanvasLocatorDark : KanvasLocatorLight}
          alt="Kanvas visual infrastructure design locator icon"
          fetchPriority="high"
          loading="eager"
        />
        <img
          title="Kanvas cloud native Kubernetes infrastructure visualization"
          className={imageInView ? "map map-visible" : "map"}
          src={isDark ? KanvasImageBottomDark : KanvasImageBottomLight}
          alt="Kanvas infrastructure visualization diagram showing cloud native components"
          loading="lazy"
          ref={locatorRef}
        />
      </div>
    </HeroSectionWrapper>
  );
};

export default KanvasHeroSection;
