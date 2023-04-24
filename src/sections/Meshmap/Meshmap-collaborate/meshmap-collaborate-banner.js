import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { ReactComponent as IngressGatewayImage } from "./images/banner-transitions/ingress-gateway-partial-colorMode.svg";
import { ReactComponent as KubernetesImage } from "./images/banner-transitions/kubernetes-partial-colorMode.svg";
import { ReactComponent as PodImage } from "./images/banner-transitions/pod-partial-colorMode.svg";
import { ReactComponent as PrometheusImage } from "./images/banner-transitions/prometheus-partial-colorMode.svg";
import { ReactComponent as ServiceIntefaceImage } from "./images/banner-transitions/service-interface-partial-colorMode.svg";
import SupportingArrows from "./images/banner-transitions/supporting-arrows.svg";
import EmptyLight from "./images/banner-transitions/empty-light.svg";
import EmptyDark from "./images/banner-transitions/empty-dark.svg";
import { useInView } from "react-intersection-observer";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const CollaborationBannerWrapper = styled.div`

    .banner {
        display: flex;
        flex-direction: column;
        background: ${props => props.theme.linearToLinear2};
        /* background-color: ${props => props.theme.grey121212ToWhite}; */
        max-width: 1920px;
        width: 100%;
        height: fit-content;
        justify-content: space-evenly;
        align-items: center;
        padding: 4% 5% 6%;
        /* transform: rotateX(40deg); */

        /* @media only screen and (max-width: 500px) {
            max-height: 400px;
        } */
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        svg {
            .service-interface-partial-colorMode_svg__colorMode1,
            .prometheus-partial-colorMode_svg__colorMode1,
            .pod-partial-colorMode_svg__colorMode1,
            .kubernetes-partial-colorMode_svg__colorMode1,
            .ingress-gateway-partial-colorMode_svg__colorMode1 {
              fill: ${props => props.theme.whiteToBlack};
              transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
    }


    .banner-text {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        z-index: 1;
        padding-top: 2%;
    }

    h1 {
        /* font-size: 4rem; */
        position: relative;
        display: inline-block;
        color: ${props => props.theme.primaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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

    .heading {
        opacity: 0;
    }

    .heading-transition {
        opacity: 1;
        transition: opacity 2.5s;
    }

    h4 {
        padding: 3% 0%;
        color: ${props => props.theme.greyA0AAAAToGrey666666};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        /* font-size: 20px; */
        max-width: 40%;
        /* font-weight: bold; */
        @media only screen and (max-width: 500px) {
            font-size: 1rem;
            max-width: 100%;
        }
        @media only screen and (max-width: 767px) {
            max-width: 100%;
        }
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

    .supporting-arrows {
        opacity: 0;
        scale: 1;
    }

    .supporting-arrows-transition {
        opacity: 1;
        transition: 0.5s ease-out 1s ;
    }

    .ingress-gateway {
        translate: -40% 0;
    }

    .ingress-gateway-transition {
        transform: translateX(40%);
        scale: 1;
        transition: 1s;
    }

    .kubernetes {
        translate: 50% -30%;
    }

    .kubernetes-transition {
        transform: translateX(-50%) translateY(30%);
        scale: 1;
        transition: 0.75s;
    }

    .pod {
        translate: 40% 30%;
    }

    .pod-transition {
        transform: translateX(-40%) translateY(-30%);
        scale: 1;
        transition: 1s;
    }

    .prometheus {
        translate: -50% 30%;
    }

    .prometheus-transition {
        transform: translateX(50%) translateY(-30%);
        scale: 1;
        transition: 1.25s;
    }

    .service-interface {
        scale: 1;
    }

`;

const MeshmapCollaborateBanner = () => {
  const [transitionRef, inView] = useInView({ threshold: 0.7 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  const { isDark } = useStyledDarkMode();

  return (
    <CollaborationBannerWrapper>
      <div className="banner">
        <div className="banner-text">
          <h1>Collaborate with the team. <br /> Build solutions together </h1>
          <h4>Designer and Visualizer live side-by-side, so all design work, from ideation to operation, can be found in one place.</h4>
          <Button primary className="join-community-button" title="Start Collaborating" url="/projects" />
        </div>
        <div className="transition-container" ref={transitionRef}>
          <img className="canvas" src={isDark ? EmptyDark : EmptyLight} alt="" />
          <div>
            <ServiceIntefaceImage className="service-interface" alt="ServiceIntefaceImage" />
          </div>
          <div>
            <IngressGatewayImage className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"} alt="IngressGatewayImage" />
          </div>
          <div>
            <KubernetesImage className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"} alt="KubernetesImage" />
          </div>
          <div>
            <PodImage className={imageInView ? "pod-transition pod" : "pod"} alt="PodImage" />
          </div>
          <div>
            <PrometheusImage alt="PrometheusImage" className={imageInView ? "prometheus-transition prometheus" : "prometheus"} />
          </div>
          <img className={imageInView ? "supporting-arrows-transition supporting-arrows" : "supporting-arrows"} src={SupportingArrows} alt="" />
        </div>
      </div>
    </CollaborationBannerWrapper>
  );
};

export default MeshmapCollaborateBanner;