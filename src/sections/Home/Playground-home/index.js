import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Button from "../../../reusecore/Button";
import argocd from "../../../collections/integrations/argo-cd/icons/color/argo-cd-color.svg";
import certmanager from "../../../collections/integrations/cert-manager/icons/color/cert-manager-color.svg";
import cilium from "../../../collections/integrations/cilium/icons/color/cilium-color.svg";
import prometheus from "../../../collections/integrations/prometheus/icons/color/prometheus-color.svg";
import kubernetes from "../../../assets/images/kubernetes/kubernetes-color.svg";
import keda from "../../../collections/integrations/keda/icons/color/keda-color.svg";
import linkerd from "../../../collections/integrations/linkerd/icons/color/linkerd-color.svg";
import istio from "../../../collections/integrations/istio-base/icons/color/istio-base-color.svg";
import jaeger from "../../../collections/integrations/jaeger/icons/color/jaeger-color.svg";
import envoy from "../../../collections/integrations/envoy/icons/color/envoy-color.svg";
import fluentd from "../../../collections/integrations/fluentd/icons/color/fluentd-color.svg";
import cloudevents from "../../../collections/integrations/cloudevents/icons/color/cloudevents-color.svg";
import containerd from "../../../collections/integrations/containerd/icons/color/containerd-color.svg";
import coredns from "../../../collections/integrations/coredns/icons/color/coredns-color.svg";
import crio from "../../../collections/integrations/cri-o/icons/color/cri-o-color.svg";
import etcd from "../../../collections/integrations/etcd-cluster-operator/icons/color/etcd-cluster-operator-color.svg";
import falco from "../../../collections/integrations/falco/icons/color/falco-color.svg";
import flux from "../../../collections/integrations/flux/icons/color/flux-color.svg";
import harbor from "../../../collections/integrations/harbor-operator/icons/color/harbor-operator-color.svg";
import helm from "../../../collections/integrations/helm-controller/icons/color/helm-controller-color.svg";
import kubeedge from "../../../collections/integrations/kubegems-edge/icons/color/kubegems-edge-color.svg";
import opa from "../../../assets/images/kanvas/opa.svg";
import rook from "../../../collections/integrations/rook/icons/color/rook-color.svg";
import spiffe from "../../../collections/integrations/spiffe/icons/color/spiffe-color.svg";
import spire from "../../../collections/integrations/spire/icons/color/spire-color.svg";
import tuf from "../../../collections/integrations/tuf/icons/color/tuf-color.svg";
import tikvoperator from "../../../collections/integrations/tikv-operator/icons/color/tikv-operator-color.svg";
import vitess from "../../../collections/integrations/vitess/icons/color/vitess-color.svg";

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
      height: 600px;
      padding: 0 2%;
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
      margin-top: 4rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 1100px) {
      padding-left: 1rem;
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
    height: 150px;
    padding: 2rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.whiteEightToBlack};
    margin-bottom: 1rem;
    border-radius: 1rem;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    //box-shadow: ${(props) => props.theme.boxShadowGreen00D3A9ToBlackTwoFive};
  }
  .box:hover {
    box-shadow: ${(props) => props.theme.boxShadowBlue477E96};
    transform: translateY(-5px);
  }

  .box .boxImg {
    width: auto;
    height: 60px;
    max-width: 100%;
  }

  .box .boxText {
    margin-top: 1rem;
    text-align: center;
    color: ${(props) => props.theme.whiteEightToBlack};
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
    {
      img: argocd,
      name: "Argo",
      link: "/cloud-native-management/meshery/integrations/argo-cd",
    },
    {
      img: certmanager,
      name: "Cert Manager",
      link: "/cloud-native-management/meshery/integrations/cert-manager",
    },
    {
      img: cilium,
      name: "Cilium",
      link: "/cloud-native-management/meshery/integrations/cilium",
    },
    {
      img: cloudevents,
      name: "CloudEvents",
      link: "/cloud-native-management/meshery/integrations/cloudevents",
    },
    {
      img: containerd,
      name: "containerd",
      link: "/cloud-native-management/meshery/integrations/containerd",
    },
    {
      img: coredns,
      name: "CoreDNS",
      link: "/cloud-native-management/meshery/integrations/coredns",
    },
    {
      img: crio,
      name: "cri-o",
      link: "/cloud-native-management/meshery/integrations/cri-o",
    },
    {
      img: envoy,
      name: "Envoy",
      link: "/cloud-native-management/meshery/integrations/envoy",
    },
    {
      img: etcd,
      name: "etcd",
      link: "/cloud-native-management/meshery/integrations/etcd-cluster-operator",
    },
    {
      img: falco,
      name: "Falco",
      link: "/cloud-native-management/meshery/integrations/falco",
    },
    {
      img: fluentd,
      name: "Fluentd",
      link: "/cloud-native-management/meshery/integrations/fluentd",
    },
    {
      img: flux,
      name: "Flux",
      link: "/cloud-native-management/meshery/integrations/flux",
    },
    {
      img: harbor,
      name: "Harbor",
      link: "/cloud-native-management/meshery/integrations/harbor-operator",
    },
    {
      img: helm,
      name: "Helm",
      link: "/cloud-native-management/meshery/integrations/helm-controller",
    },
  ];

  const rightColumnItems = [
    {
      img: istio,
      name: "Istio",
      link: "/cloud-native-management/meshery/integrations/istio-base",
    },
    {
      img: jaeger,
      name: "Jaeger",
      link: "/cloud-native-management/meshery/integrations/jaeger",
    },
    {
      img: keda,
      name: "KEDA",
      link: "/cloud-native-management/meshery/integrations/keda",
    },
    {
      img: kubeedge,
      name: "KubeEdge",
      link: "/cloud-native-management/meshery/integrations/kubegems-edge",
    },
    {
      img: kubernetes,
      name: "Kubernetes",
      link: "/cloud-native-management/meshery/integrations/kubernetes-ingress",
    },
    {
      img: linkerd,
      name: "Linkerd",
      link: "/cloud-native-management/meshery/integrations/linkerd",
    },
    {
      img: opa,
      name: "Open Policy Agent",
      link: "https://www.openpolicyagent.org/",
    },
    {
      img: prometheus,
      name: "Prometheus",
      link: "/cloud-native-management/meshery/integrations/prometheus",
    },
    {
      img: rook,
      name: "Rook",
      link: "/cloud-native-management/meshery/integrations/rook",
    },
    {
      img: spiffe,
      name: "SPIFFE",
      link: "/cloud-native-management/meshery/integrations/spiffe",
    },
    {
      img: spire,
      name: "SPIRE",
      link: "/cloud-native-management/meshery/integrations/spire",
    },
    {
      img: tuf,
      name: "TUF",
      link: "/cloud-native-management/meshery/integrations/tuf",
    },
    {
      img: tikvoperator,
      name: "TiKV",
      link: "/cloud-native-management/meshery/integrations/tikv-operator",
    },
    {
      img: vitess,
      name: "Vitess",
      link: "/cloud-native-management/meshery/integrations/vitess",
    },
  ];

  const renderColumn = (items, direction) => (
    <div className={`line scroll-${direction}`}>
      <div className="scroll-track">
        {items.map((item, index) => {
          const isExternal = item.link && item.link.startsWith("http");
          const Wrapper = isExternal ? "a" : Link;
          const props = isExternal
            ? { href: item.link, target: "_blank", rel: "noreferrer" }
            : { to: item.link || "#" };
          return (
            <Wrapper {...props} className="box" key={`set1-${index}`}>
              <img className="boxImg" src={item.img} alt={item.name} />
              <div className="boxText">{item.name}</div>
            </Wrapper>
          );
        })}
        {items.map((item, index) => {
          const isExternal = item.link && item.link.startsWith("http");
          const Wrapper = isExternal ? "a" : Link;
          const props = isExternal
            ? { href: item.link, target: "_blank", rel: "noreferrer" }
            : { to: item.link || "#" };
          return (
            <Wrapper {...props} className="box" key={`set2-${index}`}>
              <img className="boxImg" src={item.img} alt={item.name} />
              <div className="boxText">{item.name}</div>
            </Wrapper>
          );
        })}
        {items.map((item, index) => {
          const isExternal = item.link && item.link.startsWith("http");
          const Wrapper = isExternal ? "a" : Link;
          const props = isExternal
            ? { href: item.link, target: "_blank", rel: "noreferrer" }
            : { to: item.link || "#" };
          return (
            <Wrapper {...props} className="box" key={`set3-${index}`}>
              <img className="boxImg" src={item.img} alt={item.name} />
              <div className="boxText">{item.name}</div>
            </Wrapper>
          );
        })}
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
