import React from "react";
import styled from "styled-components";
import MeshmapLocator from "./images/meshmap-locator.svg";
import MeshmapImageBottom from "./images/meshmap-image-bottom.svg";
import DesignBannerImage from "./images/design-banner-image.svg";
import CytoscapeDemoImage from "./images/cytoscape-demo.svg";

const DesignBannerWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: #121212;
    max-width: 1920px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5%;

    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 50%;
        max-width: 50%;
        text-align: left;
        padding-left: 10%;
        padding-bottom: 5%;
        z-index: 1;
        /* margin-left: 5%; */
        /* margin-bottom: 5%; */

    }

    h1 {
        span {
            font-size: 7rem;
        }
        @media only screen and (max-width: 1400px) {
            span {
                font-size: 5rem;
            }
        }
        @media only screen and (max-width: 1400px) {
            span {
                /* font-size: 3rem; */
            }
        }
    }

    h3 {
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
    }

    .hero-image {
        display: flex;
        flex-direction: column;
        place-items: center;
        margin: 6rem 0;
        flex: 0 0 50%;
        max-width: 50%;
        /* max-width: 56rem; */
        /* min-width: 56rem; */

        /* @media only screen and (max-width: 1600px) {
            min-width: 40rem;
        } */

        .locator-moving {
            transform: translateY(5rem);
            transition: 1s;
            z-index: 1;
        }

        .map {
            opacity: 0;
            z-index: 0;
        }
        .map-visible {
            opacity: 1;
            transition: opacity 1s ease 0.5s;
        }

    }



`;

const MeshmapDesignBanner = () => {
  return (
    <DesignBannerWrapper>
      <img className="banner-image" src={DesignBannerImage} alt="" />
      <div className="hero-text">
        <h2 style={{ paddingLeft: "8px", color: "#00b39f" }}>MeshMap</h2>
        <h1><span>Designer</span></h1>
        {/* <p>Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.</p> */}
      </div>
      <div className="hero-image">
        <img style={{ zIndex: 1 }} src={CytoscapeDemoImage} alt="" />
        <h3>Experience context-aware design</h3>
      </div>
    </DesignBannerWrapper>

  );
};

export default MeshmapDesignBanner;