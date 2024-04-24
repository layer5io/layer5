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
    //box-shadow: ${(props) => props.theme.boxShadowBlue477E96};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    overflow: hidden;

    @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column-reverse;
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
        }
    }

    h2 {
        /* max-width: 90%; */
        padding-bottom: 2%;
      }
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

    .overlay {
        width: 483px;
        height: 680x;
    }

    .container {
      display: flex;
      justify-content: center;
    }
    
    .line1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 2rem;
      transform: translateY(50px);
      flex-wrap: wrap;
    }

    .line2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 2rem;
      transform: translateY(-50px);
      flex-wrap: wrap;
    }
    
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height:150px;
      padding: 2rem;
      box-sizing: border-box;
      background-color: ${(props) => props.theme.backgroundColor}; 
      margin-bottom: 1rem; 
      border-radius: 1rem;
      //box-shadow: ${(props) => props.theme.boxShadowGreen00D3A9ToBlackTwoFive};
    }
    // .box:hover {
    //   box-shadow: ${(props) => props.theme.boxShadowBlue477E96};
    // }

    .box .boxImg {
      width: auto;
      height: 60px;
      max-width: 100%;
    }
    
    .box .boxText {
      margin-top: 1rem;
      text-align: center;
    }

    @media only screen and (max-width: 700px) {
      .hero-image {
        display: none; 
      }
      .views-section {
        padding: 2rem 2rem 0 2rem;
        height: auto;
      }
      .small-card-container {
        display: flex;
        justify-content: center;
      }
    }

`;

const MeshmapVisualizerViews = () => {
  const [imageRef, inView] = useInView({ threshold: 0.4 });
  const [imageInView, setimageInView] = useState(false);

  if (inView && !imageInView) setimageInView(true);
  else if (imageInView && !inView) setimageInView(false);

  return (
    <ViewsSectionWrapper>
      <div className="views-section">
        <div className="hero-image" ref={imageRef}>
          {/* <img
            className={imageInView ? "lines-visible" : "not-visible"}
            src={CommentingImageDark}
            alt=""
          /> */}
          <div
            className={
              imageInView ? "visible container" : "not-visible container"
            }
          >
            <div className="line1">
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
              <div className="box">
                <img className="boxImg" src={prometheus} alt="" />
                <div>Prometheus</div>
              </div>
            </div>
            <div className="line2">
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
            title="Use Playground &rarr;"
            external={true}
            url="https://playground.meshery.io/"
          />
        </div>
      </div>
    </ViewsSectionWrapper>
  );
};

export default MeshmapVisualizerViews;
