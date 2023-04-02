import React from "react";
import styled from "styled-components";
import MeshmapIcon from "./meshmap-icon.svg";

const BannerSectionWrapper = styled.div`

    display: flex;
    background: #000000;
    border-radius: 0% 85% 0% 0% / 0% 80% 0% 0% ;
    -webkit-box-shadow: 5px -5px 15px 5px rgba(0,0,0,0.33);
    box-shadow: 1px -5px 5px 1px rgba(235,192,23,.5);

    padding: 8rem 6rem 3rem 6rem;
    max-width: 1140px;
    width: 100%;
    margin: auto;
    min-height: 25rem;

    h1 {
        /* background-color: ${props => props.theme.black}; */
        font-weight: 500;
        font-size: 60px;
        color: ${props => props.theme.white};
        line-height: 4.3rem;
        margin-bottom: 1rem;
        min-width: 18rem;
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
        @media screen and (max-width: 418px) {
            line-height: 3rem;
            margin: 1.5rem 0;
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

    }
    .banner-text p {
        color: ${props => props.theme.saffronColor};
        margin-bottom: .5rem;
        font-weight: 400;
        font-size: 1.75rem;
        font-style: italic;
        min-width: 18rem;
        font-family: "Qanelas Soft";
        span {
            color: ${props => props.theme.saffronColor};
        }
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
        width: 14rem;
        overflow: hidden;
        margin-top: -7rem;
        position: relative;
        left: 30%;
        z-index: 0;

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
            margin-top: -2rem;
            left: 15%;
        }
        border-radius: 0% 85% 0% 0% / 0% 60% 0% 0% ;
    }

    @media screen and (max-width: 768px) {
        padding: 8rem 2rem 3rem;
        .meshmap-logo {
            margin-top: -5rem;
            margin-right: 2rem;
            left: 7%;
            min-width: 5rem;
            }
        border-radius: 0% 85% 0% 0% / 0% 40% 0% 0% ;
        }
    @media screen and (max-width: 500px) {
        .meshmap-logo {
            margin-top: -5rem;
            margin-right: 2rem;
            left: 0%;
            min-width: 3rem;
            }
        border-radius: 0% 85% 0% 0% / 0% 40% 0% 0% ;
        }
    @media screen and (max-width: 400px) {
        .meshmap-logo {
            margin-top: -5rem;
            margin-right: 0;
            left: -20%;
            min-width: 3rem;
            }
        border-radius: 0% 85% 0% 0% / 0% 40% 0% 0% ;
        }

`;

const BannerSection = () => {
  return (
    <BannerSectionWrapper>
      <div className="banner-text">
        {/* <PageHeader title="MeshMap" subtitle="take the blinders off" superscript="BETA" /> */}
        <h2>Step aside, YAML</h2>
        <h1><span>MeshMap</span> is here</h1>
        {/* <h3>the world's only visual designer for cloud native infrastructure.</h3> */}
        {/* <h3>
                    Application reigns King. Context is his Queen.
                </h3> */}
        <p>
                    Friends don't let friends GitOps alone.
        </p>
        {/* <h4>Discover and Visualize</h4>
                <h4><span>Collaborate and Design</span></h4>
                any and all your cloud native infra and apps */}
      </div>
      <div className="meshmap-logo">
        <img src={MeshmapIcon} alt="Meshery Logo" />
        {/* <div className="accent-bubble">asdf</div> */}
      </div>
      {/* <h2 className="readyPlayer">Ready, Players?</h2> */}
    </BannerSectionWrapper>

  );
};

export default BannerSection;