import React from "react";
import styled from "styled-components";
import DemoBtn from "./solutions-buttons";

import { ReactComponent as HeroGraphicSVG } from "./images/solutions-cost.svg";
import { ReactComponent as SpiralBg } from "./images/spiral-bg.svg";
 
const BannerSectionWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 6rem 2rem;
  min-height: 30rem;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    min-height: 25rem;
  }
`; 

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`; 

const SpiralLayer = styled(SpiralBg)`
  position: absolute;
  bottom: 0;                   /* pin to bottom */
  left: 50%;
  transform: translateX(-35%); /* center horizontally */
  width: 100vw;                /* full viewport width */
  height: auto;                /* maintain aspect ratio */
  z-index: 0;

  /* NO filter: blur here */
`;
 
const GradientLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* above spiral (z-index: 0), below content (z-index: 2) */

  /* Semi-transparent gradient so the crisp spiral still shows through */
  background: linear-gradient(
    to right,
    rgba(0, 13, 18, 0.8)  0%,   /* 80% opaque black-teal */
    rgba(0, 13, 18, 0.0) 40%,   /* fully transparent by 40% */
    rgba(81, 99, 107, 0.8) 100% /* 80% opaque mid-blue */
  );

  /* Only the gradient is blurred */
  filter: blur(20px);
  will-change: filter;
`;
 
const Inner = styled.div`
  position: relative;
  z-index: 2; /* on top of spiral (0) and gradient (1) */
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;
 
const BannerText = styled.div`
  flex: 1 1 50%;
  max-width: 736px;
  display: flex;
  flex-direction: column;
  gap: 40px; /* 40px between h1, h2, and buttons */
  justify-content: flex-start;

  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const MainHeading = styled.h1`
  font-weight: 600;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  color: ${({ theme }) => theme.white || "#ffffff"};
  margin: 0;

  @media (max-width: 600px) {
    br {
      display: none;
    }
  }
`;

const SubHeading = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  line-height: 1.5;
  color: ${({ theme }) => theme.white || "#ffffff"};
  margin: 0;
  max-width: 500px;

  @media (max-width: 992px) {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    br {
      display: none;
    }
  }
`;
 
const BannerGraphic = styled.div`
  flex: 1 1 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;

  svg {
    width: 100%;
    height: auto;
    display: block;
    max-height: 400px;
  }

  @media (max-width: 992px) {
    max-width: 500px;
  }

  @media (max-width: 600px) {
    max-width: 100%;

    svg {
      max-height: 300px;
    }
  }
`;
 
const DemoButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    align-items: stretch;
  }
`;
 
const BannerSection = () => {
  return (
    <BannerSectionWrapper> 
      <BackgroundContainer>
        <SpiralLayer />
        <GradientLayer />
      </BackgroundContainer>
 
      <Inner>
        <BannerText>
          <MainHeading>
            Cost, incident and chaos
            <br />
            oversight
          </MainHeading>

          <SubHeading>
            Save cost, reduce risk and manage
            <br />
            infrastructure failure.
          </SubHeading>

          <DemoButtonsWrapper>
            <DemoBtn />
          </DemoButtonsWrapper>
        </BannerText>

        <BannerGraphic>
          <HeroGraphicSVG aria-label="Cost oversight graphic: stacked coins and icons" />
        </BannerGraphic>
      </Inner>
    </BannerSectionWrapper>
  );
};

export default BannerSection; 