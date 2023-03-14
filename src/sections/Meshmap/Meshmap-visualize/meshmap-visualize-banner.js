import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import BannerImage from "./images/oval-blur-shape.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const VisualizeBannerWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    .banner {
        margin: 5%;
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.DarkTheme ? "#121212" : "#fff"};
        border-radius: 2rem;
        max-width: 1920px;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        padding: 4% 5% 6%;
        box-shadow: ${props => props.theme.DarkTheme ? "-0.25rem 0.25rem 1.25rem #00b3a9" : "-0.25rem 0.25rem 1.25rem rgb(0 0 0 / 25%)"};
        /* transform: rotateX(40deg); */

        /* @media only screen and (max-width: 500px) {
            max-height: 400px;
        } */
    }


    .banner-text {
        color: ${props => props.theme.primaryColor};
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        z-index: 1;
        padding-top: 5%;
    }

    .banner-image {
        z-index: 0;
        position: absolute;
        width: 100%;
        scale: 1.2;
        top: -10%;
        left: 0%;
    }

    h1 {
        /* font-size: 4rem; */
        /* color: ${props => props.theme.primaryColor}; */
        position: relative;
        display: inline-block;
        /* color: black; */
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

    h4 {
        padding: 3% 0%;
        color: #A0AAAA;
        /* font-size: 20px; */
        max-width: 40%;
        font-weight: bold;
    }

    h5 {
        padding: 2rem 0;
    }

    p {
        padding-top: 2rem;
    }

`;

const MeshmapVisualizeBanner = ({ theme }) => {
//   const [transitionRef, inView] = useInView({ threshold: 0.7 });
//   const [imageInView, setimageInView] = useState(false);
//   if (inView && !imageInView)
//     setimageInView(true);
//   else if (imageInView && !inView)
//     setimageInView(false);

  return (
    <VisualizeBannerWrapper>
      {/* <div className="banner-image">
          <img src={BannerImage} alt="banner-background" />
        </div> */}
      <div className="banner">
        <div className="banner-text">
          <h1>Visualize your infrastructure. <br /> See your designs in action. </h1>
          <h4>Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one place.</h4>
          <Button primary className="join-community-button" title="Explore Visualizer" url="/projects" />
        </div>
        {/* <div className="transition-container" ref={transitionRef}>
          <img className="canvas" src={theme == "dark" ? EmptyDark : EmptyLight} alt="" />
          <img className="service-interface" src={ServiceIntefaceImage} alt="" />
          <img className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"} src={IngressGatewayImage} alt="" />
          <img className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} src={KubernetesImage} alt="" />
          <img className={imageInView ? "pod-transition pod" : "pod"} src={PodImage} alt="" />
          <img className={imageInView ? "prometheus-transition prometheus" : "prometheus"} src={PrometheusImage} alt="" />
          <img className={imageInView ? "supporting-arrows-transition supporting-arrows" : "supporting-arrows"} src={SupportingArrows} alt="" />
        </div> */}
      </div>
    </VisualizeBannerWrapper>
  );
};

export default MeshmapVisualizeBanner;