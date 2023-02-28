import React from "react";
import styled from "styled-components";
import BannerImage from "./images/banner-image.svg";
import MeshmapLocator from "./images/meshmap-locator.svg";
import MeshmapImageBottom from "./images/meshmap-image-bottom.svg";

const BannerSectionWrapper = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #121212;
    align-items: center;

    width: 100%;
    min-height: 25rem;

    h1 {
        /* background-color: ${props => props.theme.black}; */
        font-weight: 500;
        font-size: 60px;
        color: ${props => props.theme.white};

        line-height: 4.3rem;
        margin: 4rem 0 0;
        span {
            font-size: 70px;
            width: fit-content;
            border-radius: .25rem;
            /* padding: .5rem; */
            /* background-color: ${props => props.theme.saffronLightColor};     */
            font-weight: 700;
            color: ${props => props.theme.caribbeanGreenColor};
        }
        @media screen and (max-width: 448px) {
            font-size: 38px;
            span{
                font-size: 48px;
            }
        }
    }
    h2 {
        margin-bottom: 1rem;
        font-size: 1.95rem;
        font-weight: 400;
        color: ${props => props.theme.white};
        font-style: italic;
        span {
            font-style: normal;
        }
    }
    h2.readyPlayer {
        margin: 2rem 0rem 0rem 0rem;
        background-color: black;
        position: absolute;
        z-index: 1;
        padding: 1.5rem;
        color: white;
        font-style: normal;
        text-transform: uppercase ;
        font-size: 2.5rem;
        text-align: center;
    }
    h3 {
        text-align: center;
        color: ${props => props.theme.white};
    }
    p {
        color: ${props => props.theme.primaryLightColor};
    }
    h4 {
        text-transform: uppercase;
        padding-left: 1rem;
        font-style: italic;
        font-size: 1.25rem;
        color: ${props => props.theme.white};
        span {
            padding-left: 1rem;
        }
    }

    .banner-image {
        display: grid;
        max-height: 38vh;
        place-items: center;
        margin: 4rem 2rem;

    }
    div.accent-bubble {
        width: 50%;
        height: 100%;
        background-position: right 20%;

        border-radius: 60% 40% 30% 70% / 70% 30% 70% 40%;
        background: linear-gradient(90deg, hsla(168, 100%, 41%, 1) 57%, hsla(48, 84%, 51%, 1) 100%);

        background: -moz-linear-gradient(90deg, hsla(168, 100%, 41%, 1) 57%, hsla(48, 84%, 51%, 1) 100%);

        background: -webkit-linear-gradient(90deg, hsla(168, 100%, 41%, 1) 57%, hsla(48, 84%, 51%, 1) 100%);

        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00d3a9", endColorstr="#ebc017", GradientType=1 );
    }

    @media screen and (max-width: 1700px) {
        .meshmap-logo {
            width: 12rem;
            /* right: 12rem; */
            /* margin-top: -5rem; */
        }
        .para {
            margin-top: -3rem;
        }
    }
    @media screen and (max-width: 1200px) {
        .meshmap-logo {
            left: 20%;
            width: 10rem;
            /* right: 8rem; */
            margin-top: -5rem;
        }
        /* border-radius: 0% 85% 0% 0% / 0% 60% 0% 0% ; */
    }
    @media screen and (max-width: 992px) {
        .meshmap-logo {
            width: 8rem;
            /* right: 3rem; */
            margin-top: -2rem;
        }
        border-radius: 0% 85% 0% 0% / 0% 60% 0% 0% ;
    }

    @media screen and (max-width: 768px) {
        padding: 8rem 2rem 3rem;
        .meshmap-logo {
            margin-top: 10%;
            left: 5%;
            width: 5rem;
            }
        border-radius: 0% 85% 0% 0% / 0% 40% 0% 0% ;
        }

    @media screen and (max-width: 448px) {
        .meshmap-logo {
            margin-top: 4rem;
            left: 5%;
        }
    }
    @media screen and (max-width: 370px) {
        .meshmap-logo {
            margin-top: 7rem;
            left: 5%;
            width: 5rem;
        }
    }

`;

const BannerSection = () => {
  return (
    <BannerSectionWrapper>
      <div>
        <h1><span>DESIGN</span></h1>
        <h3>your infrastructure</h3>
      </div>
      <div className="banner-image">
        <img style={{ position: "relative", bottom: "10%" }} src={MeshmapLocator} alt="" />
        <img style={{ position: "relative", bottom: "100%" }} src={MeshmapImageBottom} alt="" />
      </div>
    </BannerSectionWrapper>

  );
};

export default BannerSection;