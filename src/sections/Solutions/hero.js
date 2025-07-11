import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";
import BannerImg from "./images/deploy.svg";

const SolutionBannerWrapper = styled.div`
    .banner {
        display: flex;
        flex-direction: row;
        background: ${props => props.theme.linearToLinear2};
        max-width: 1920px;
        width: 100%;
        height: fit-content;
        justify-content: space-evenly;
        align-items: center;
        padding: 4% 5% 6%;
        /* transform: rotateX(40deg); */

        @media only screen and (max-width: 900px) {
            flex-direction: column;
            gap: 2rem;
        }
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        svg {
            .service-interface-partial-colorMode_svg__colorMode1,
            .prometheus-partial-colorMode_svg__colorMode1,
            .pod-partial-colorMode_svg__colorMode1,
            .kubernetes-partial-colorMode_svg__colorMode1,
            .ingress-gateway-partial-colorMode_svg__colorMode1 {
              fill: ${props => props.theme.whiteToBlack};
              transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
    }


    .banner-text {
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: start;
        z-index: 1;
        padding-top: 2%;
        max-width: 60%;

        @media only screen and (max-width: 900px) {
            text-align: center;
            align-items: center;
            max-width: 100%;
        }

        .yellow-text {
            color: #ebc017;
        }
    }

    h1 {
        /* font-size: 4rem; */
        position: relative;
        display: inline-block;
        /* color: ${props => props.theme.primaryColor}; */
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
/*
        @media only screen and (min-width: 500px) {
            font-size: 3.5rem;
        }
        @media only screen and (min-width: 767px) {
            font-size: 4rem;
        }
        @media only screen and (min-width: 950px) {
            font-size: 5rem;
        } */
        @media only screen and (min-width: 1400px) {
            font-size: 3.75rem;
        }
    }

    .heading {
        opacity: 0;
    }

    .heading-transition {
        opacity: 1;
        transition: opacity 2.5s;
    }

    h4 {
        padding: 1rem 0 1.5rem 0;
        color: ${props => props.theme.greyA0AAAAToGrey666666};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        /* font-size: 20px; */
        max-width: 80%;
        /* font-weight: bold; */
        @media only screen and (max-width: 500px) {
            font-size: 1rem;
            max-width: 100%;
        }
        @media only screen and (max-width: 767px) {
            max-width: 100%;
        }
    }

    h5 {
        padding: 2rem 0;
    }

    p {
        padding-top: 2rem;
    }

    .banner-btns {
        display: flex;
        gap: 1rem;
        @media only screen and (max-width: 767px) {
            flex-direction: column;
        }
    }
}
`;

const SolutionsBanner = () => {

  return (
    <SolutionBannerWrapper>
      <div className="banner">
        <div className="banner-text">
          <h1>So what's the <span className="yellow-text">solution?</span> </h1>
          <h4>Still not sure what to expect with our cloud-native manager? Not a problem. Explore these specific issues and notice how Layer5 is poised to elevate your cloud experience with tailored products, features, and approaches that cater to your needs in dynamic ways!</h4>
          <div className="banner-btns">
            <Button
              $secondary
              title="Book a demo"
              $external={true}
              $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true"
            />
          </div>
        </div>
        <div className="banner-image">
          <img src={BannerImg} alt="solutions" />
        </div>
      </div>
    </SolutionBannerWrapper>
  );
};

export default SolutionsBanner;