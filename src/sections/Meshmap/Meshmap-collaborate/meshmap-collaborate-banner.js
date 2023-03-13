import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import IngressGatewayImage from "./images/banner-transitions/ingress-gateway-partial.svg";
import KubernetesImage from "./images/banner-transitions/kubernetes-partial.svg";
import PodImage from "./images/banner-transitions/pod-partial.svg";
import PrometheusImage from "./images/banner-transitions/prometheus-partial.svg";
import ServiceIntefaceImage from "./images/banner-transitions/service-interface-partial.svg";
import SupportingArrows from "./images/banner-transitions/supporting-arrows.svg";
import CanvasImage from "./images/banner-transitions/canvas.svg";
import EmptyLight from "./images/banner-transitions/empty-light.svg";
import EmptyDark from "./images/banner-transitions/empty-dark.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const DesignBannerWrapper = styled.div`

    .banner {
        display: flex;
        flex-direction: column;
        background: linear-gradient(61.3deg, rgba(0, 179, 159, 0.2) -26.19%, rgba(255, 255, 255, 0.2) 40.19%), linear-gradient(303.45deg, rgba(0, 179, 159, 0.2) 0%, rgba(255, 255, 255, 0.2) 37.23%), linear-gradient(360deg, #00B39F -108%, #FFFFFF 63.36%);
        /* background-color: ${props => props.theme.DarkTheme ? "#121212" : "#fff"}; */
        max-width: 1920px;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
        padding: 4% 5% 6%;
        /* transform: rotateX(40deg); */

        /* @media only screen and (max-width: 500px) {
            max-height: 400px;
        } */
    }


    .banner-text {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        z-index: 1;
        padding-top: 5%;
    }

    h1 {
        /* font-size: 4rem; */
        position: relative;
        display: inline-block;
        color: black;
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

    /* h1::before,
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
    } */

    .heading {
        opacity: 0;
    }

    .heading-transition {
        opacity: 1;
        transition: opacity 2.5s;
    }

    h2 {
        color: #00b39f;
        width: fit-content;
        font-weight: 200;
        overflow: hidden; /* Hide text outside the h1 element */
        border-right: .1rem solid black; /* Add a blinking cursor */
        white-space: nowrap; /* Keep all text on one line */
        letter-spacing: .1rem; /* Add space between characters */
        animation: typing 3s steps(25, end), blink-caret 0.5s step-end 3s forwards;

        @media only screen and (max-width: 500px) {
            font-size: 1rem;
        }

    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* Blinking cursor animation */
     @keyframes blink-caret {
        from, to { border-color: transparent }
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

    .transition-container {
        margin: 10% 0% 0%;
        max-width: 70%;
        position: relative;
    }


    .ingress-gateway, .kubernetes, .pod, .prometheus, .supporting-arrows, .service-interface {
        /* max-width: 70%; */
        position: absolute;
        top: 0%;
        left: 0%;
        scale: 0.7;
        opacity: 1;
        transition: 1s;
    }

    .ingress-gateway-transition, .kubernetes-transition, .pod-transition, .prometheus-transition {
        scale: 1;
        transition: 1.5s;
    }

    .supporting-arrows {
        opacity: 0;
        scale: 1;
    }

    .supporting-arrows-transition {
        opacity: 1;
        transition: 0.5s ease-out 1.5s ;
    }

    .ingress-gateway {
        translate: -40% 0;
    }

    .ingress-gateway-transition {
        transform: translateX(40%);
    }

    .kubernetes {
        translate: 50% -30%;
    }

    .kubernetes-transition {
        transform: translateX(-50%) translateY(30%);
    }

    .pod {
        translate: 40% 30%;
    }

    .pod-transition {
        transform: translateX(-40%) translateY(-30%);
    }

    .prometheus {
        translate: -50% 30%;
    }

    .prometheus-transition {
        transform: translateX(50%) translateY(-30%);
    }

    .service-interface {
        scale: 1;
    }

`;

const MeshmapCollaborateBanner = ({ theme }) => {
  const [transitionRef, inView] = useInView({ threshold: 0.7 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  return (
    <DesignBannerWrapper>
      <div className="banner">
        <div className="banner-text">
          <h1>Collaborate with the team. <br /> Build solutions together. </h1>
          <h4>Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one place.</h4>
          <Button primary className="join-community-button" title="Start Collaborating" url="/projects" />
        </div>
        <div className="transition-container" ref={transitionRef}>
          <img className="canvas" src={theme == "dark" ? EmptyDark : EmptyLight} alt="" />
          <img className="service-interface" src={ServiceIntefaceImage} alt="" />
          <img className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"} src={IngressGatewayImage} alt="" />
          <img className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} src={KubernetesImage} alt="" />
          <img className={imageInView ? "pod-transition pod" : "pod"} src={PodImage} alt="" />
          <img className={imageInView ? "prometheus-transition prometheus" : "prometheus"} src={PrometheusImage} alt="" />
          <img className={imageInView ? "supporting-arrows-transition supporting-arrows" : "supporting-arrows"} src={SupportingArrows} alt="" />
        </div>
      </div>
    </DesignBannerWrapper>
  );
};

export default MeshmapCollaborateBanner;