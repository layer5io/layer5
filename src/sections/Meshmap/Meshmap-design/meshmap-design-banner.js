import React from "react";
import styled from "styled-components";
import BannerImageDark from "./images/banner-image-dark.svg";
import BannerImageLight from "./images/banner-image-light.svg";
import CytoscapeDemo from "./cytoscape-demo";
import CytoscapeImgDark from "./images/cytoscape-dark.svg";
import CytoscapeImgLight from "./images/cytoscape-light.svg";

const DesignBannerWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.DarkTheme ? "#121212" : "fff"};
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
        @media only screen and (max-width: 550px) {
            padding-bottom: 25%;
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
        /* max-width: 56rem; */
        /* min-width: 56rem; */

        /* @media only screen and (max-width: 1600px) {
            min-width: 40rem;
        } */

    }
`;

const MeshmapDesignBanner = ({ theme }) => {
  return (
    <DesignBannerWrapper>
      <img className="banner-image" src={theme === "dark" ? BannerImageDark : BannerImageLight} alt="" />
      <div className="hero-text">
        <h2 style={{ paddingLeft: "8px", color: "#00b39f" }}>MeshMap</h2>
        <h1><span>Designer</span></h1>
        {/* <p>Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.</p> */}
      </div>
      <div className="hero-image">
        <img src={theme == "dark" ? CytoscapeImgDark : CytoscapeImgLight} alt="cytoscape" />
        <h5>Experience context-aware design</h5>
      </div>
    </DesignBannerWrapper>

  );
};

export default MeshmapDesignBanner;