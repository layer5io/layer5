export const PLATFORM_SECTION_ID = "getting-started-platforms";
export const SELECT_PLATFORM_EVENT = "select-meshery-platform";

export const PLATFORM_NAMES = {
  APPLE: "Apple",
  DOCKER: "Docker",
  EKS: "EKS",
  GKE: "GKE",
  HELM: "Helm",
  HOMEBREW: "HomeBrew",
  KIND: "KinD",
  KUBERNETES: "Kubernetes",
  LINUX: "Linux",
  MINIKUBE: "Minikube",
  AKS: "AKS",
  WSL2: "WSL2",
};

export const PLATFORM_DETAILS = {
  [PLATFORM_NAMES.APPLE]: {
    alt: "Apple",
    title: "Install on Apple",
  },
  [PLATFORM_NAMES.DOCKER]: {
    alt: "Docker",
    title: "Install on Docker",
  },
  [PLATFORM_NAMES.EKS]: {
    alt: "AWS Elastic Kubernetes Service",
    title: "Install on AWS Elastic Kubernetes Service (EKS)",
  },
  [PLATFORM_NAMES.GKE]: {
    alt: "GKE",
    title: "Install on Google Kubernetes Engine (GKE)",
  },
  [PLATFORM_NAMES.HELM]: {
    alt: "Meshery Helm Chart",
    title: "Install via Meshery Helm Chart",
  },
  [PLATFORM_NAMES.HOMEBREW]: {
    alt: "Homebrew",
    title: "Install on Homebrew",
  },
  [PLATFORM_NAMES.KIND]: {
    alt: "KinD",
    title: "Install on KinD",
  },
  [PLATFORM_NAMES.KUBERNETES]: {
    alt: "Kubernetes",
    title: "Install on Kubernetes",
  },
  [PLATFORM_NAMES.LINUX]: {
    alt: "Linux",
    title: "Install on Linux",
  },
  [PLATFORM_NAMES.MINIKUBE]: {
    alt: "Minikube",
    title: "Install on Minikube",
  },
  [PLATFORM_NAMES.AKS]: {
    alt: "AKS",
    title: "Install on Azure Kubernetes Service (AKS)",
  },
  [PLATFORM_NAMES.WSL2]: {
    alt: "WSL2",
    title: "Install on Windows (WSL2)",
  },
};

export const TALL_PLATFORMS = [
  PLATFORM_NAMES.DOCKER,
  PLATFORM_NAMES.HELM,
  PLATFORM_NAMES.LINUX,
  PLATFORM_NAMES.KIND,
];
