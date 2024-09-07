import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Button from "../../../reusecore/Button";
import argocd from "../../../collections/integrations/argo-cd/icons/color/argo-cd-color.svg";
import cilium from "../../../collections/integrations/cilium/icons/color/cilium-color.svg";
import prometheus from "../../../collections/integrations/prometheus/icons/color/prometheus-color.svg";
import kubernetes from "../../../collections/integrations/kubernetes/icons/color/kubernetes-color.svg";
import keda from "../../../collections/integrations/keda/icons/color/keda-color.svg";
import linkerd from "../../../collections/integrations/linkerd/icons/color/linkerd-color.svg";

const ViewsSectionWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .small-card-container {
      display: flex;
      gap: 1rem;

      @media only screen and (max-width: 767px) {
        justify-content: center;
      }
    }

    .views-section {
      position: relative;
      display: flex;
      flex-direction: row;
      background-color: ${(props) => props.theme.grey191919ToGreyF2F5F7};
      margin: 3%;
      border-radius: 1rem;
      max-width: 1920px;
      width: 90vw;
      height: 500px;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 5% 0 0;
      box-sizing: border-box;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      overflow: hidden;

      @media only screen and (max-width: 767px) {
        text-align: center;
        flex-direction: column-reverse;
        height: auto;
        padding: 1.5rem;
      }
    }

    .hero-text {
      display: flex;
      flex-direction: column;
      flex: 0 0 50%;
      max-width: 50%;
      padding-bottom: 3rem;

      @media only screen and (max-width: 767px) {
        max-width: 100%;
        justify-content: center;
        text-align: center;
        padding-bottom: 1rem;
      }
    }

    h2 {
      padding-bottom: 2%;
    }

    h4 {
      max-width: 90%;

      @media only screen and (max-width: 767px) {
        max-width: 100%;
      }
    }

    .hero-image {
      position: relative;
      display: flex;
      justify-content: center;
      flex: 0 0 50%;
      max-width: 50%;

      svg {
        align-items: center;
        justify-content: center;
        width: 70%;
        .visualizer-views-colorMode_svg__colorMode1 {
          fill: ${(props) => props.theme.whiteToGrey737373};
          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      }

      .visible {
        opacity: 1;
        transition: all 0.2s ease-in;
      }

      .not-visible {
        opacity: 0;
        transition: all 0.5s ease;
      }

      @media only screen and (max-width: 767px) {
        max-width: 100%;
      }
    }

    .container {
      display: flex;
      justify-content: center;
      width: 100%;
      // overflow: hidden;

      @media only screen and (max-width: 767px) {
        flex-direction: column;
        margin: 1rem 0;
        padding: 0 1rem;
      }
    }
    
    .line {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 2rem;
      flex-wrap: wrap;

      @media only screen and (max-width: 767px) {
        flex-direction: row;
        flex-wrap: nowrap;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
      }
    }

    .line-primary {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 5%;

      @media only screen and (max-width: 767px) {
        flex-direction: row;
      } 
    }  

    .position-line-down-left {
      //For tablet/desktop screens, icons will move down vertically
      transform: translateY(-20rem);

      //For mobile screens, icons will move to the left horizontally
      @media only screen and (max-width: 767px) {
        transform: translateX(-20rem);
      }
    }

    .position-line-up-right {
      //For tablet/desktop screens, icons will move up vertically
      transform: translateY(20rem);

      //For mobile screens, icons will move to the right horizontally
      @media only screen and (max-width: 767px) {
        transform: translateX(20rem);
      }
    } 
    
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 150px;
      padding: 2rem;
      box-sizing: border-box;
      background-color: ${(props) => props.theme.backgroundColor}; 
      margin-bottom: 1rem; 
      border-radius: 1rem;

      @media only screen and (max-width: 767px) {
        flex: 0 0 auto;
        margin: 5%;
        width: 125px;
        height: 125px;
      }
    }

    .box .boxImg {
      width: auto;
      height: 60px;
      max-width: 100%;
    }
    
    .box .boxText {
      margin-top: 1rem;
      text-align: center;
    }

    // Animation

      // Vertical animation for tablet screen sizes and up.
    .animation-up-scroll {
      animation: scroll-up-animation 15s linear infinite;

      @keyframes scroll-up-animation {
        0% {
          transform: translateY(0%);
        }
        100% {
          transform: translateY(-100%);
        }
      }

      @media only screen and (max-width: 767px) {
        //to disable vertical animation on mobile in favor of horizontal animation
        animation: none; 
      }
    }

    .animation-down-scroll {
      animation: scroll-down-animation 15s linear infinite;
      
      @keyframes scroll-down-animation {
        0% {
            transform: translateY(0%);
        }
        100% {
            transform: translateY(100%);
        }
      }

      @media only screen and (max-width: 767px) {
        //to disable vertical animation on mobile in favor of horizontal animation for smaller screens
        animation: none; 
      }
    }

    .animation-left-scroll {
      animation: scroll-left-animation 10s linear infinite;

      @keyframes scroll-left-animation {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-20rem);
        }
      }

     @media only screen and (min-width: 768px) {
        //to disable horizontal animation on mobile in favor of vertical animation for larger screens
        animation: none; 
      }
    }

    //horizontal animation- to the right
    .animation-right-scroll {
      animation: scroll-right-animation 10s linear infinite;

      @keyframes scroll-right-animation {
        0% {
          transform: translateX(-20rem);
        }
        100% {
          transform: translateX(0);
        }
      }

     @media only screen and (min-width: 768px) {
        //to disable horizontal animation on mobile in favor of vertical animation for larger screens
        animation: none; 
      }
    }
`;

const MeshmapVisualizerViews = () => {
  const [imageRef, inView] = useInView({ threshold: 0.3 });
  const [imageInView, setimageInView] = useState(false);

  if (inView && !imageInView) setimageInView(true);
  else if (imageInView && !inView) setimageInView(false);

  return (
    <ViewsSectionWrapper>
      <div className="views-section">
        <div className="hero-image" ref={imageRef}>
          <div className={
            imageInView ? "visible container" : "not-visible container"}>
            <div className="line position-line-down-left animation-left-scroll">
              <div className="line-primary animation-down-scroll">
                <div className="box">
                  <img className="boxImg" src={prometheus} alt="" />
                  <div>Prometheus</div>
                </div>
                <div className="box">
                  <img className="boxImg" src={argocd} alt="" />
                  <div className="boxText">Argo CD</div>
                </div>
                <div className="box">
                  <img className="boxImg" src={cilium} alt="" />
                  <div>Cilium</div>
                </div>
                <div className="box">
                  <img className="boxImg" src={prometheus} alt="" />
                  <div>Prometheus</div>
                </div>
              </div>

            </div>
            <div className="line position-line-up-right animation-right-scroll">
              <div className="line-primary animation-up-scroll">
                <div className="box">
                  <img className="boxImg" src={kubernetes} alt="" />
                  <div>Kubernetes</div>
                </div>
                <div className="box">
                  <img className="boxImg" src={keda} alt="" />
                  <div>Keda</div>
                </div>
                <div className="box">
                  <img className="boxImg" src={linkerd} alt="" />
                  <div>Linkerd</div>
                </div>
                <div className="box">
                  <img className="boxImg" src={kubernetes} alt="" />
                  <div>Kubernetes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-text">
          <h2>
            <span>Manage your Cloud Native mess</span>
          </h2>
          <p>
            Employ a set of learning paths that incorporate an application
            networking centric curriculum featuring training on 200+
            integrations.
          </p>
          <Button
            primary
            title="Open in Demo System &rarr;"
            external={true}
            url="https://playground.meshery.io/"
          />
        </div>
      </div>
    </ViewsSectionWrapper>
  );
};

export default MeshmapVisualizerViews;
