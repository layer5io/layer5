import docker from "./Images/docker.svg";
import kubernetes from "./Images/kubernetes.svg";
import aks from "./Images/aks.png";
import eks from "./Images/eks.svg";
import gke from "./Images/gke.png";
import helm from "./Images/helm.svg";
import kinD from "./Images/kinD.png";
import kubesphere from "./Images/kubesphere.png";
import minikube from "./Images/minikube.png";
import openshift from "./Images/openshift.svg";
import mac from "./Images/mac.svg";
import homebrew from "./Images/homebrew.png";
import wsl2 from "./Images/wsl2.svg";
import raspberrypi from "./Images/raspberry-pi.svg";
import traefik from "./Images/traefik-mesh.svg";
import osm from "./Images/osm.svg";
import nsm from "./Images/nsm.svg";
import ngnix from "./Images/nginx-sm.svg";
import linkerd from "./Images/linkerd.svg";
import kuma from "./Images/kuma.svg";
import istio from "./Images/istio.svg";
import consul from "./Images/consul.svg";
import cilium from "./Images/cilium.svg";
import citrix from "./Images/citrix.svg";
import appmesh from "./Images/app-mesh.svg";
import tanzu from "./Images/tanzu.svg";
import slack from "./Images/slack.svg";
import github from "./Images/github.svg";

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
    category: "Platform",
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
    status: "inProgress",
    category: "Platform",
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
    name: "Tanzu Service Mesh",
    img: tanzu,
    status: "inProduction",
    category: "Service Mesh",
  },
];

export default IntegrationList;
