import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import five from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import gnh from "../../../assets/images/getnighthawk/icon-only/SVG/getnighthawk-logo.svg";

export const repo_data = [
  {
    category: "Frontend",
    subdata: [
      {
        project: "Layer5",
        image: five,
        site: "https://layer5.io/",
        language: "Gatsby and Strapi",
        repository: "https://github.com/layer5io/layer5",
      },
      {
        project: "Meshery.io",
        image: meshery,
        site: "https://meshery.io",
        language: "Jekyll",
        repository: "https://github.com/meshery/meshery",
      },
      {
        project: "Meshery Documentation",
        image: meshery,
        site: "http://docs.meshery.io",
        language: "Jekyll",
        repository: "https://github.com/meshery/meshery/tree/master/docs",
      },
      {
        project: "Meshery UI",
        image: meshery,
        site: "https://github.com/layer5io/meshery/tree/master/ui",
        language: "NextJs, MaterialUI and Billboard.js",
        repository: "https://github.com/layer5io/meshery/tree/master/ui",
      },
      {
        project: "Service Mesh Performance",
        image: meshery,
        site: "https://smp-spec.io",
        language: "Jekyll",
        repository:
          "https://github.com/service-mesh-performance/service-mesh-performance",
      },
      {
        project: "GetNighthawk",
        image: gnh,
        site: "https://getnighthawk.dev",
        language: "Jekyll",
        repository: "https://github.com/layer5io/getnighthawk",
      },
      {
        project: "MeshSync UI (MeshMap)",
        image: meshery,
        site:
          "https://drive.google.com/a/layer5.io/open?id=1AMi5UTUwLRFeQRQj7YuRQgMG-4IXWie24z4R88Eoazs",
        language: "Cytoscape.js",
        repository: "https://github.com/meshery/meshery",
      },
    ],
  },

  {
    category: "Service Mesh Management Repos",
    subdata: [
      {
        project: "Meshery",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery",
      },
      {
        project: "SMI Conformance",
        language: "Golang",
        repository:
          "https://github.com/layer5io/meshery-smi-conformance-action",
      },
      {
        project: "Meshery Operator",
        language: "Golang",
        repository: "https://github.com/layer5io/meshery-operator",
      },
      {
        project: "Meshsync",
        language: "Golang and NATS",
        repository: "https://github.com/layer5io/meshsync",
      },
    ],
  },

  {
    category: "Adapter Dedicated Repos",
    subdata: [
      {
        project: "Meshery Istio",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-istio",
      },
      {
        project: "Meshery Linkerd",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-linkerd",
      },
      {
        project: "Layer5-istio-adapter",
        language: "Golang",
        repository: "https://github.com/layer5io/layer5-istio-adapter",
      },
      {
        project: "Meshery NSM",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-nsm",
      },
      {
        project: "Meshery Octarine",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-octarine",
      },
      {
        project: "Meshery Traefik-mesh",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-traefik-mesh",
      },
      {
        project: "Meshery Kuma",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-kuma",
      },
      {
        project: "Meshery Consul",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-consul",
      },
      {
        project: "Meshery CPX",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-cpx",
      },
      {
        project: "Meshery Adapter Template",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-adapter-template",
      },
      {
        project: "Meshery-tanzu-sm",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-tanzu-sm",
      },
      {
        project: "Meshery-Nginx-sm",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-nginx-sm",
      },
      {
        project: "Meshkit",
        language: "Toolkit for Layer5's microservices",
        repository: "https://github.com/layer5io/meshkit",
      },
      {
        project: "Meshery Adapter Library",
        language: "Golang gRPC",
        repository: "https://github.com/layer5io/meshery-adapter-library",
      },
    ],
  },

  {
    category: "Installation Dedicated Repos",
    subdata: [
      {
        project: "Scoop-bucket",
        language: "Windows-compatible package management for `mesheryctl`",
        repository: "https://github.com/layer5io/scoop-bucket",
      },
      {
        project: "Homebrew-tap",
        language: "MacOS-compatible package management for `mesheryctl`",
        repository: "https://github.com/layer5io/homebrew-tap",
      },
    ],
  },

  {
    category: "WebAssembly Repos",
    subdata: [
      {
        project: "Image-hub",
        language: "Vuejs",
        repository: "https://github.com/layer5io/image-hub",
      },
      {
        project: "Wasm-filters",
        language: "Rust",
        repository: "https://github.com/layer5io/wasm-filters",
      },
    ],
  },

  {
    category: "Service Mesh Performance Repos ",
    subdata: [
      {
        project: "Service Mesh Performance",
        language:
          "a common format for capturing and describing service meshes’ performance and workloads.",
        repository:
          "https://github.com/layer5io/service-mesh-performance-specification",
      },
      {
        project: "Wrk2",
        language:
          "a C-based load generator. A fork of wrk2, which includes the concept of coordinated omission.",
        repository: "https://github.com/giltene/wrk2",
      },
      {
        project: "Gowrk2",
        language:
          "Augmentation of wrk2 to produce output compatible with Meshery’s visualization of performance test results.",
        repository: "https://github.com/layer5io/gowrk2",
      },
      {
        project: "Getnighthawk",
        language:
          "Augmentation of Envoy Nighthawk to produce output compatible with Meshery’s visualization of performance test results",
        repository: "https://github.com/layer5io/nighthawk-go",
      },
    ],
  },
];
