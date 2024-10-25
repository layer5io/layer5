import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Button from "../../../reusecore/Button";
import argocd from "../../../collections/integrations/argo-cd/icons/color/argo-cd-color.svg";
import cilium from "../../../collections/integrations/cilium/icons/color/cilium-color.svg";
import prometheus from "../../../collections/integrations/prometheus/icons/color/prometheus-color.svg";
import kubernetes from "../../../collections/integrations/kubernetes/icons/color/kubernetes-color.svg";
import keda from "../../../collections/integrations/keda/icons/color/keda-color.svg";
import linkerd from "../../../collections/integrations/linkerd/icons/color/linkerd-color.svg";
import istio from "../../../collections/integrations/istio-base/icons/color/istio-base-color.svg";
import jaeger from "../../../collections/integrations/jaeger/icons/color/jaeger-color.svg";
import envoy from "../../../collections/integrations/envoy/icons/color/envoy-color.svg";
import kong from "../../../collections/integrations/kong/icons/color/kong-color.svg";
import grafana from "../../../collections/integrations/grafana-agent-operator/icons/color/grafana-agent-operator-color.svg";
import docker from "../../../collections/integrations/docker/icons/color/docker-color.svg";
import opentelemetry from "../../../collections/integrations/opentelemetry-operator/icons/color/opentelemetry-operator-color.svg";
import kiali from "../../../collections/integrations/kiali-operator/icons/color/kiali-operator-color.svg";
import knative from "../../../collections/integrations/knative/icons/color/knative-color.svg";
import dapr from "../../../collections/integrations/dapr/icons/color/dapr-color.svg";
import fabedge from "../../../collections/integrations/fabedge/icons/color/fabedge-color.svg";
import amdgpu from "../../../collections/integrations/amd-gpu/icons/color/amd-gpu-color.svg";
import karmada from "../../../collections/integrations/karmada/icons/color/karmada-color.svg";
import kubeflow from "../../../collections/integrations/kubeflow/icons/color/kubeflow-color.svg";
import terraform from "../../../collections/integrations/terraform/icons/color/terraform-color.svg";
import fluentd from "../../../collections/integrations/fluentd/icons/color/fluentd-color.svg";

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

    .hero-image {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 0 0 50%;
        max-width: 50%;
        overflow: hidden;
        height: 100%;

        @media only screen and (max-width: 767px) {
          max-width: 100%;
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
        height: 680px;
    }


    .container {
        display: flex;
        justify-content: center;
        gap: 1.5rem; 
        height: 100%; 
      }

    .line {
        position: relative;
        height: 100%;
        overflow: hidden;
        width: 200px;
    }

    .scroll-track {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .scroll-down .scroll-track {
        animation: scrollDown 35s linear infinite;
    }

    .scroll-up .scroll-track {
        animation: scrollUp 35s linear infinite;
    }

    @keyframes scrollDown {
        0% {
            transform: translateY(-50%);
        }
        100% {
            transform: translateY(0%);
        }
    }

    @keyframes scrollUp {
        0% {
            transform: translateY(0%);
        }
        100% {
            transform: translateY(-50%);
        }
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

const KanvasVisualizerViews = () => {
  const [imageRef] = useInView({ threshold: 0.3 });

  const leftColumnItems = [
    { img: prometheus, name: "Prometheus" },
    { img: argocd, name: "Argo CD" },
    { img: cilium, name: "Cilium" },
    { img: istio, name: "Istio" },
    { img: grafana, name: "Grafana" },
    { img: knative, name: "Knative" },
    { img: docker, name: "Docker" },
    { img: envoy, name: "Envoy" },
    { img: karmada, name: "Karmada" },
    { img: amdgpu, name: "AMD GPU" },
    { img: fluentd, name: "Fluentd" }
  ];

  const rightColumnItems = [
    { img: kubernetes, name: "Kubernetes" },
    { img: keda, name: "Keda" },
    { img: linkerd, name: "Linkerd" },
    { img: jaeger, name: "Jaeger" },
    { img: kong, name: "Kong" },
    { img: opentelemetry, name: "Opentelemetry" },
    { img: dapr, name: "Dapr" },
    { img: kiali, name: "Kiali" },
    { img: fabedge, name: "FabEdge" },
    { img: kubeflow, name: "Kubeflow" },
    { img: terraform, name: "Terraform" }
  ];

  const renderColumn = (items, direction) => (
    <div className={`line scroll-${direction}`}>
      <div className="scroll-track">
        {items.map((item, index) => (
          <div className="box" key={`set1-${index}`}>
            <img className="boxImg" src={item.img} alt={item.name} />
            <div className="boxText">{item.name}</div>
          </div>
        ))}
        {items.map((item, index) => (
          <div className="box" key={`set2-${index}`}>
            <img className="boxImg" src={item.img} alt={item.name} />
            <div className="boxText">{item.name}</div>
          </div>
        ))}
        {items.map((item, index) => (
          <div className="box" key={`set3-${index}`}>
            <img className="boxImg" src={item.img} alt={item.name} />
            <div className="boxText">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <ViewsSectionWrapper>
      <div className="views-section">
        <div className="hero-image" ref={imageRef}>
          <div className="container">
            {renderColumn(leftColumnItems, "down")}
            {renderColumn(rightColumnItems, "up")}
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
            $primary
            title="Open in Demo System &rarr;"
            $external={true}
            $url="https://playground.meshery.io/"
          />
        </div>
      </div>
    </ViewsSectionWrapper>
  );
};

export default KanvasVisualizerViews;
