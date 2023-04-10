import React from "react";
import styled from "styled-components";
import { ReactComponent as BannerImage } from "./images/banner-image-colorMode.svg";
import { ReactComponent as CytoscapeImg } from "./images/cytoscape-colorMode.svg";

const DesignBannerWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.grey121212ToWhite};
    max-width: 1920px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5%;

    @media only screen and (max-width: 500px) {
        max-height: 400px;
    }


    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 50%;
        max-width: 50%;
        text-align: left;
        padding-left: 10%;
        padding-bottom: 10%;
        z-index: 1;

        @media only screen and (max-width: 1100px) {
            padding-left: 0;
        }
        @media only screen and (max-width: 950px) {
            padding-bottom: 15%;
        }
        @media only screen and (max-width: 600px) {
            padding-bottom: 30%;
        }
    }

    h1 {
        /* span {
            font-size: 7rem;
        } */

        @media only screen and (min-width: 500px) {
            span {
                font-size: 3.5rem;
            }
        }
        @media only screen and (min-width: 767px) {
            span {
                font-size: 4rem;
            }
        }
        @media only screen and (min-width: 950px) {
            span {
                font-size: 5rem;
            }
        }
        @media only screen and (min-width: 1400px) {
            span {
                font-size: 7rem;
            }
        }
    }

    h2 {
        padding-left: 8px;
        color: #00b39f;
        font-weight: 100;
    }

    h5 {
        padding: 2rem 0;
    }

    p {
        padding-top: 2rem;
    }

    .banner-image {
        z-index: 0;
        position: absolute;
        top: 2rem;
        left: 0px;
        overflow: hidden;
        /* height: 200rem; */
        width: 90rem;

        .banner-image-colorMode_svg__colorMode1 {
            fill: ${props => props.theme.blueE0FFFCToBlue477E96};
        }

        .banner-image-colorMode_svg__colorMode2 {
            stop-color: ${props => props.theme.blue477E96ToGreen00B39F};
            offset: ${props => props.theme.blue477E96ToGreen00B39F === "#477E96" ? 0.510971 : 0.210971};
        }
        .banner-image-colorMode_svg__colorMode3 {
            stop-color: ${props => props.theme.grey121212ToWhite};
        }

        img {
            filter: brightness(1.3);
            transform: scale(2);
            transform-origin: 0rem 0rem;
        }

            @media only screen and (max-width: 700px) {
                top: 5rem;
        }
            @media only screen and (max-width: 400px) {
                top: 7rem;
        }
    }

    .hero-image {
        display: flex;
        flex-direction: column;
        place-items: center;
        margin: 6rem 0;
        flex: 0 0 50%;
        max-width: 50%;
        z-index: 1;

        svg {
            
            .cytoscape-colorMode_svg__colorMode1 {
                fill: ${props => props.theme.grey232323ToGreyEEEEEE};
            }

            .cytoscape-colorMode_svg__colorMode2 {
                fill: ${props => props.theme.grey505050ToGreyB4B4B4};
            }
        }
    }
        /* max-width: 56rem; */
        /* min-width: 56rem; */

        /* @media only screen and (max-width: 1600px) {
            min-width: 40rem;
        } */

`;

const MeshmapDesignBanner = () => {

  return (
    <DesignBannerWrapper>
      <BannerImage className="banner-image" alt="BannerImage"/>
      <div className="hero-text">
        <h2>MeshMap</h2>
        <h1><span>Designer</span></h1>
        {/* <p>Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.</p> */}
      </div>
      <div className="hero-image">
        <CytoscapeImg alt="cytoscape" />
        {/* <CytoscapeDemo/> */}
        <h5>Experience context-aware design</h5>
      </div>
    </DesignBannerWrapper>

  );
};

export default MeshmapDesignBanner;