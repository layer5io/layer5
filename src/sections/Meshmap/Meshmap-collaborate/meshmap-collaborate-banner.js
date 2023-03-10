import React from "react";
import styled from "styled-components";
import FinalCollaborationImage from "./images/banner-transitions/final-collaboration-image.svg";
import IngressGatewayImage from "./images/banner-transitions/ingress-gateway-partial.svg";
import KubernetesImage from "./images/banner-transitions/kubernetes-partial.svg";
import PodImage from "./images/banner-transitions/pod-partial.svg";
import PrometheusImage from "./images/banner-transitions/prometheus-partial.svg";
import ServiceIntefaceImage from "./images/banner-transitions/service-interface-partial.svg";
import SupportingArrows from "./images/banner-transitions/supporting-arrows.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const DesignBannerWrapper = styled.div`

    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.DarkTheme ? "#121212" : "fff"};
    max-width: 1920px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 2% 5%;

    @media only screen and (max-width: 500px) {
        max-height: 400px;
    }


    .banner-text {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        z-index: 1;
    }

    h1 {
        position: relative;
        display: inline-block;
        color: black;

        @media only screen and (min-width: 500px) {
                font-size: 3.5rem;
        }
        @media only screen and (min-width: 767px) {
                font-size: 4rem;
        }
        @media only screen and (min-width: 950px) {
                font-size: 5rem;
        }
        @media only screen and (min-width: 1400px) {
                font-size: 6rem;
        }
    }

    h1::before,
    h1::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 50%;
        height: 4px;
        background-color: #000;
        transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    h1::before {
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        animation: text-animation-left 1s cubic-bezier(0.22, 0.61, 0.36, 1) 3s forwards;
    }

    h1::after {
        right: 0;
        transform-origin: left;
        transform: scaleX(0);
        animation: text-animation-right 1s cubic-bezier(0.22, 0.61, 0.36, 1) 3s forwards;
    }

    @keyframes text-animation-left {
        0% {
            transform: scaleX(0);
        }
        100% {
            transform: scaleX(1);
        }
    }

    @keyframes text-animation-right {
        0% {
            transform: scaleX(0);
        }
        100% {
            transform: scaleX(1);
        }
    }

    .heading {
        opacity: 0;
    }

    .heading-transition {
        opacity: 1;
        transition: opacity 2.5s;
    }

    h2 {
        color: #000;
        width: fit-content;
        font-weight: 200;
        overflow: hidden; /* Hide text outside the h1 element */
        border-right: .1rem solid black; /* Add a blinking cursor */
        white-space: nowrap; /* Keep all text on one line */
        letter-spacing: .1rem; /* Add space between characters */
        animation: typing 2.5s steps(25, end), blink-caret 0.7 step-end 2.5s forwards;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* Blinking cursor animation */
     @keyframes blink-caret {
        from, to { border-color: transparent }
    }

    h5 {
        padding: 2rem 0;
    }

    p {
        padding-top: 2rem;
    }

    .transition-container {
        max-width: 60%;
        position: relative;
    }

    .ingress-gateway, .kubernetes, .pod, .prometheus, .supporting-arrows {
        position: absolute;
        top: 0;
        left: 0;
    }

    .supporting-arrows {
        opacity: 0;
    }

    .supporting-arrows-transition {
        opacity: 1;
        transition: 0.5s ease-out 2s ;
    }

    .ingress-gateway {
        translate: -40% 0;
        scale: 0.7;
    }

    .ingress-gateway-transition {
        transform: translateX(40%);
        scale: 1;
        transition: 2s;
    }

    .kubernetes {
        translate: 50% -30%;
        scale: 0.7;
    }

    .kubernetes-transition {
        transform: translateX(-50%) translateY(30%);
        scale: 1;
        transition: 2s;
    }

    .pod {
        translate: 50% 30%;
        scale: 0.7;
    }

    .pod-transition {
        transform: translateX(-50%) translateY(-30%);
        scale: 1;
        transition: 2s;
    }

    .prometheus {
        translate: -50% 30%;
        scale: 0.7;
    }

    .prometheus-transition {
        transform: translateX(50%) translateY(-30%);
        scale: 1;
        transition: 2s;
    }

    .service-interface {

    }

`;

const MeshmapCollaborateBanner = () => {
  const [transitionRef, inView] = useInView({ threshold: 1.0 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
    // else if (!inView && imageInView)
    // setimageInView(false);

  return (
    <DesignBannerWrapper>
      {/* <img className="banner-image" src={DesignBannerImage} alt="" /> */}
      <div className="banner-text">
        <div className="typing-text">
          <h2 style={{ paddingLeft: "8px", color: "#00b39f" }}>Bring those ideas to life with</h2>
        </div>
        <h1 className={imageInView ? "heading-transition heading" : "heading"}>Collaboration</h1>
        {/* <p>Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.</p> */}
      </div>
      <div className="transition-container" ref={transitionRef}>
        <img className="service-interface" src={ServiceIntefaceImage} alt="" />
        <img className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"} src={IngressGatewayImage} alt="" />
        <img className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} src={KubernetesImage} alt="" />
        <img className={imageInView ? "pod-transition pod" : "pod"} src={PodImage} alt="" />
        <img className={imageInView ? "prometheus-transition prometheus" : "prometheus"} src={PrometheusImage} alt="" />
        <img className={imageInView ? "supporting-arrows-transition supporting-arrows" : "supporting-arrows"} src={SupportingArrows} alt="" />
      </div>
    </DesignBannerWrapper>

  );
};

export default MeshmapCollaborateBanner;