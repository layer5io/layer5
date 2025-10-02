import React, { useState } from "react";
import styled from "styled-components";
import EmptyDark from "./Kanvas-collaborate/images/banner-transitions/empty-dark.svg";
import EmptyLight from "./Kanvas-collaborate/images/banner-transitions/empty-light.svg";
import { ReactComponent as IngressGatewayImage } from "./Kanvas-collaborate/images/banner-transitions/ingress-gateway-partial-colorMode.svg";
import { ReactComponent as KubernetesImage } from "./Kanvas-collaborate/images/banner-transitions/kubernetes-partial-colorMode.svg";
import { ReactComponent as PodImage } from "./Kanvas-collaborate/images/banner-transitions/pod-partial-colorMode.svg";
import { ReactComponent as PrometheusImage } from "./Kanvas-collaborate/images/banner-transitions/prometheus-partial-colorMode.svg";
import {
  ReactComponent as ServiceIntefaceImage
} from "./Kanvas-collaborate/images/banner-transitions/service-interface-partial-colorMode.svg";
import SupportingArrows from "./Kanvas-collaborate/images/banner-transitions/supporting-arrows.svg";
import { useInView } from "react-intersection-observer";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const TransitionWrapper = styled.div`

    .transition-container {
        margin: auto;
        max-width: 70%;
        position: relative;
    }

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
        transition: 0.5s ease-out 1s;
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

const KanvasArchitecturalTransition = () => {
  const [transitionRef, inView] = useInView({ threshold: 0.7 });
  const [imageInView, setImageInView] = useState(false);

  if (inView && !imageInView) setImageInView(true);
  else if (imageInView && !inView) setImageInView(false);

  const { isDark } = useStyledDarkMode();

  return (
    <TransitionWrapper>
      <div className="transition-container" ref={transitionRef}>
        <img className="canvas" src={isDark ? EmptyDark : EmptyLight} alt="" />
        <div>
          <ServiceIntefaceImage className="service-interface" alt="ServiceIntefaceImage"/>
        </div>
        <div>
          <IngressGatewayImage
            className={imageInView ? "ingress-gateway-transition ingress-gateway" : "ingress-gateway"}
            alt="IngressGatewayImage"
          />
        </div>
        <div>
          <KubernetesImage
            className={imageInView ? "kubernetes-transition kubernetes" : "kubernetes"}
            alt="KubernetesImage"
          />
        </div>
        <div>
          <PodImage
            className={imageInView ? "pod-transition pod" : "pod"}
            alt="PodImage"
          />
        </div>
        <div>
          <PrometheusImage
            className={imageInView ? "prometheus-transition prometheus" : "prometheus"}
            alt="PrometheusImage"
          />
        </div>
        <img
          className={imageInView ? "supporting-arrows-transition supporting-arrows" : "supporting-arrows"}
          src={SupportingArrows}
          alt=""
        />
      </div>
    </TransitionWrapper>
  );
};

export default KanvasArchitecturalTransition;
