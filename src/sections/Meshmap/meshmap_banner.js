import React from "react";
import styled from "styled-components";
import MeshmapIcon from "./meshmap-newicon.svg";

const BannerSectionWrapper = styled.div`

    background: linear-gradient(180deg, #EEEEEE 0%, rgba(251, 251, 251, 0) 100%);
    padding: 8rem 6rem 3rem 6rem;
    margin-bottom: 3rem;
    min-height: 35rem;

    h1 {
        /* background-color: ${props => props.theme.black}; */
        font-weight: 500;
        font-size: 60px;
        color: #444444;
        position: absolute;
        margin-top: 3rem;
        left: 10rem;
        line-height: 4.3rem;
        margin-bottom: 1rem;
        span {
            font-size: 60px;
            width: fit-content;
            border-radius: .25rem;
            /* padding: .5rem; */
            /* background-color: ${props => props.theme.saffronLightColor};     */
            font-weight: 700;
            color: #444444;
        }
        @media screen and (max-width: 380px) {
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
        color: ${props => props.theme.saffronColor};
        margin-bottom: .5rem;
        font-weight: 300;
        font-style: italic;
        span {
            color: ${props => props.theme.saffronColor};
        }
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

    .meshmap-logo {
        width: 35rem;
        overflow: hidden;
        margin-top: -7rem;
        position: absolute;
        right: 1rem;
    }
    .line {
        position: absolute;
        width: 30.2vw;
        height: 0px;
        left: 9.9rem;
        top: 21.7rem;
        border: 2px solid rgba(0,0,0,0.07);
    }
    .tagline {
        position: absolute;
        width: 36vw;
        height: 0px;
        left: 10rem;
        top: 21.7rem;
        font-family: 'Qanelas Soft DEMO';
        font-style: normal;
        font-weight: 100;
        font-size: 35px;
        line-height: 61px;
        color: #000000;
    }

    .desc {
        position: absolute;
        width: 30.2vw;
        height: 87px;
        left: 10rem;
        top: 27.7rem;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
        letter-spacing: -0.025em;
        color: rgba(0, 0, 0, 0.6);
    }

    .get-started {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 19px 33px;
        gap: 10px;
        position: absolute;
        width: 160px;
        height: 55px;
        left: 10rem;
        top: 37rem;
        background: #00B39F;
        border-radius: 5px;
        color: #ffffff;
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 17px;
        font-weight:400;
        border-color: #ffffff
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
            width: 37rem;
            right: 10rem;
            margin-top: 0.7rem;
        }
        .para {
            margin-top: -3rem;
        }
    }
    @media screen and (max-width: 1150px) {
        .meshmap-logo {
            width: 30rem;
            right: 1rem;
            margin-top: -5rem;
        }
        border-radius: 0% 85% 0% 0% / 0% 60% 0% 0% ;
    }
    @media screen and (max-width: 992px) {
        .meshmap-logo {
            width: 30rem;
            right: 1rem;
            margin-top: -2rem;
        }
        border-radius: 0% 85% 0% 0% / 0% 60% 0% 0% ;
    }

    @media screen and (max-width: 740px) {
        padding: 8rem 2rem 3rem;
        .meshmap-logo {
            display: none;
            }
        border-radius: 0% 85% 0% 0% / 0% 40% 0% 0% ;
        }
    `;

const BannerSection = () => {
  return (
    <BannerSectionWrapper>
      <div className="meshmap-logo">
        <img src={MeshmapIcon} alt="Meshery Logo" />
      </div>
      <div>
        <h1><span>MeshMap</span></h1>
        <div className="line"></div>
        <div className="tagline">Your visual navigator</div>
        <div className="desc">Say goodbye to YAML. MeshMap allows you to get the best out of your infrastructure, in the easiest way possible.</div>
        <button className="get-started">Get Started</button>
      </div>
    </BannerSectionWrapper>
  );
};

export default BannerSection;
