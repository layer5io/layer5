import docker from "../../images/socialIcons/docker.svg";
import kubernetes from "../../images/mesheryctl/kubernetes.svg";
import aks from "../../../sections/Meshery/Meshery-platforms/supported-icons/aks.svg";
import eks from "../../../sections/Meshery/Meshery-platforms/supported-icons/eks.svg";
import gke from "../../../sections/Meshery/Meshery-platforms/supported-icons/gke.svg";
import helm from "../../images/service-mesh-icons/helm.svg";
import kinD from "../../../sections/Meshery/Meshery-platforms/supported-icons/kind.svg";
import kubesphere from "../../../sections/Meshery/Meshery-platforms/supported-icons/kubesphere.svg";
import minikube from "../../../sections/Meshery/Meshery-platforms/supported-icons/minikube.svg";
import openshift from "../../images/service-mesh-icons/openshift.svg";
import mac from "../../../sections/Meshery/Meshery-platforms/supported-icons//mac.svg";
import homebrew from "../../../sections/Meshery/Meshery-platforms/supported-icons/homebrew.svg";
import wsl2 from "../../../sections/Meshery/Meshery-platforms/supported-icons/wsl2.svg";
import raspberrypi from "../../../sections/Meshery/Meshery-platforms/supported-icons/raspberry-pi.svg";
import traefik from "../../images/service-mesh-icons/traefik.svg";
import osm from "../../images/service-mesh-icons/osm.svg";
import nsm from "../../images/service-mesh-icons/nsm.svg";
import ngnix from "../../images/service-mesh-icons/nginx-service-mesh.svg";
import linkerd from "../../images/service-mesh-icons/linkerd.svg";
import kuma from "../../images/service-mesh-icons/kuma/icon/color/kuma-icon-color.svg";
import istio from "../../images/service-mesh-icons/istio.svg";
import consul from "../../images/service-mesh-icons/consul.svg";
import cilium from "../../images/service-mesh-icons/cilium.svg";
import citrix from "../../images/service-mesh-icons/citrix.svg";
import appmesh from "../../images/service-mesh-icons/aws-app-mesh.svg";
import tanzu from "../../images/service-mesh-icons/tanzu.svg";
import slack from "../../images/socialIcons/slack-light.svg";
import github from "../../images/socialIcons/github.svg";
import prometheus from "../../images/service-mesh-icons/prometheus.svg";
import grafana from "../../images/service-mesh-icons/grafana.svg";
import argo_cd from "../../images/service-mesh-icons/argo_cd.svg";
import nats from "../../images/service-mesh-icons/nats.svg"

const IntegrationList = [
  {
    name: "Docker",
    img: docker,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "Kubernetes",
    img: kubernetes,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "AKS",
    img: aks,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "EKS",
    img: eks,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "GKE",
    img: gke,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "Helm",
    img: helm,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "KinD",
    img: kinD,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "Kubesphere",
    img: kubesphere,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "Minikube",
    img: minikube,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "OpenShift",
    img: openshift,
    status: "InProgress",
    category: "Platforms",
  },
  {
    name: "Mac",
    img: mac,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "Homebrew",
    img: homebrew,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "Windows",
    img: wsl2,
    status: "inProduction",
    category: "Platforms",
  },
  {
    name: "Raspberry Pi",
    img: raspberrypi,
    status: "InProgress",
    category: "Platforms",
  },
  {
    name: "Traefik Mesh",
    img: traefik,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Slack",
    img: slack,
    status: "InProgress",
    category: "Platforms",
  },
  {
    name: "Open Service Mesh",
    img: osm,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Network Service Mesh",
    img: nsm,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "NGINX Service Mesh",
    img: ngnix,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Linkerd",
    img: linkerd,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Kuma",
    img: kuma,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Istio",
    img: istio,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Consul",
    img: consul,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Github",
    img: github,
    status: "InProgress",
    category: "Platforms",
  },
  {
    name: "Cilium Service Mesh",
    img: cilium,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Citrix Service Mesh",
    img: citrix,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "App Mesh",
    img: appmesh,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Nats",
    img: nats,
    status: "InProgress",
    category: "Platforms",
  },
  {
    name: "Tanzu Service Mesh",
    img: tanzu,
    status: "inProduction",
    category: "Service Mesh",
  },
  {
    name: "Prometheus",
    img: prometheus,
    status: "InProgress",
    category: "Platforms",
  },
  {
    name: "Grafana",
    img: grafana,
    status: "InProgress",
    category: "Platforms",
  },
  {
    name: "Argo CD",
    img: argo_cd,
    status: "InProgress",
    category: "Platforms",
  },
];

export default IntegrationList;
