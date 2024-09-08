import React from "react";
import styled from "styled-components";
// uncomment if need
// import { ReactComponent as BannerImage } from "./images/banner-image-colorMode.svg";
// import { ReactComponent as CytoscapeImg } from "./images/cytoscape-colorMode.svg";
// import CytoscapeDemo from "./cytoscape-demo";
// import CytoscapeCanvas from "./cytoscape-demo";
// import Graph from "./cytoscapeCanvas";
// import CytoscapeComponent from "./cytoscapeCanvas";
import plusSign from "./images/plus-sign-colorMode.svg";
import CytoscapeCtx from "./cytoscapeCanvas";
import BackgroundDotsPattern from "./images/background-dots-pattern.svg";
import Button from "../../../reusecore/Button";


const DesignBannerWrapper = styled.div`

    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.grey121212ToWhite};
    background-image: url(${plusSign});
    background-repeat: repeat;
    background-size: 2.5rem 2.5rem;
    background-position: 10px 10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    position: relative;

    max-width: 1920px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 3% 5%;

    @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column    ;
    }

    @media only screen and (max-width: 500px) {
        max-height: 400px;
    }


    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 50%;
        max-width: 50%;
        text-align: left;
        padding-left: 5%;
        padding-bottom: 10%;
        z-index: 1;

        @media only screen and (max-width: 1100px) {
            padding-left: 0;
        }
        @media only screen and (max-width: 767px) {
            flex: 0 0 80%;
            max-width: 80%;
            text-align: center;
            margin-top: 10%;
        }
    }

    h2 {
        font-weight: bold;
        font-size: 3rem;
    }

    h5 {
        padding: 2rem 0;
    }

    p {
        padding-top: 0.75rem;
    }

    /* .banner-image {
        position: absolute;
        top: 2rem;
        left: 0px;

        .banner-image-colorMode_svg__colorMode1 {
            fill: ${props => props.theme.grey1D1817ToGreyE6E6E6};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .banner-image-colorMode_svg__colorMode2 {
            stop-color: ${props => props.theme.blue477E96ToGreen00B39F};
            offset: ${props => props.theme.blue477E96ToGreen00B39F === "#477E96" ? 0.510971 : 0.210971};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .banner-image-colorMode_svg__colorMode3 {
            stop-color: ${props => props.theme.grey121212ToWhite};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        @media only screen and (max-width: 700px) {
                top: 5rem;
        }
        @media only screen and (max-width: 400px) {
                top: 7rem;
        }
    } */

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
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }

            .cytoscape-colorMode_svg__colorMode2 {
                fill: ${props => props.theme.grey505050ToGreyB4B4B4};
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
        }

        @media only screen and (max-width: 767px) {
            display: none;
        }
        /* max-width: 56rem; */
        /* min-width: 56rem; */

        /* @media only screen and (max-width: 1600px) {
            min-width: 40rem;
        } */
    }

    .dots-upper {
        position: absolute;
        top: 0;
        left: 0;
    }

    .dots-lower {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%;
        transform: rotate(180deg);
    }
`;

const MeshmapDesignBanner = () => {

  return (
    <DesignBannerWrapper>
      {/* <BannerImage className="banner-image" alt="BannerImage"/> */}
      <div className="hero-text">
        <h4>MeshMap</h4>
        <h2>Designer</h2>
        <p>Drag-and-drop your cloud native infrastructure using a palette of thousands of versioned Kubernetes components. Using GitOps? Integrate visual reviews into your pipeline.</p>
      </div>
      <div className="hero-image">
        <CytoscapeCtx />
        <Button secondary title="Experience context-aware design" url="https://meshery.layer5.io" external={ true } />
        <h5>Upload your Helm Chart or Kubernetes manifest to have your infra diagrammed</h5>
      </div>
      <img className="dots-upper" src={BackgroundDotsPattern}  />
      <img className="dots-lower" src={BackgroundDotsPattern}  />
    </DesignBannerWrapper>

  );
};

export default MeshmapDesignBanner;