import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import five from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import gnh from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import smp from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import imagehub from "../../../assets/images/image-hub/layer5-image-hub.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator.svg";
import MeshSync from "../../../assets/images/meshsync/meshsync.svg";
import patterns from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import github from "../../../assets/images/socialIcons/github.svg";
import istioLogo from "../../../assets/images/service-mesh-icons/istio.svg";
import linkerdLogo from "../../../assets/images/service-mesh-icons/linkerd.svg";
import consulLogo from "../../../assets/images/service-mesh-icons/consul.svg";
import kumaLogo from "../../../assets/images/service-mesh-icons/kuma.svg";
import nsmLogo from "../../../assets/images/service-mesh-icons/nsm.svg";
import nginxLogo from "../../../assets/images/service-mesh-icons/nginx-service-mesh.svg";
import traefikLogo from "../../../assets/images/service-mesh-icons/traefik.svg";
import smiLogo from "../../../assets/images/service-mesh-icons/service-mesh-interface/icon/color/servicemeshinterface-icon-color.svg";
import appmeshLogo from "../../../assets/images/service-mesh-icons/aws-app-mesh.svg";
import ciliumLogo from "../../../assets/images/service-mesh-icons/cilium.svg";
import wasm from "../../../assets/images/webassembly/webssembly_icon.svg";
import recognitionLogo from "../../../assets/images/recognition-program/recognition-program.png";

export const repo_data = [
  {
    category: "Frontend",
    subdata: [
      {
        project: "Layer5.io",
        image: five,
        site: "https://layer5.io/",
        language: "Gatsby",
        maintainers_name: ["Gaurav Chadha", "Nikhil Ladha"],
        link: ["https://layer5.io/community/members/gaurav-chadha","https://layer5.io/community/members/nikhil-ladha"],
        repository: "https://github.com/layer5io/layer5",
      },
      {
        project: "Meshery.io",
        image: meshery,
        site: "https://meshery.io",
        language: "Jekyll",
        maintainers_name: ["Vacant"],
        link: ["#"],
        repository: "https://github.com/meshery/meshery.io",
      },
      {
        project: "Meshery Documentation",
        image: meshery,
        site: "http://docs.meshery.io",
        language: "Jekyll",
        maintainers_name: ["Vacant"],
        link: ["#"],
        repository: "https://github.com/meshery/meshery/tree/master/docs",
      },
      {
        project: "Meshery UI",
        image: meshery,
        site: "https://github.com/meshery/meshery/tree/master/ui",
        language: "NextJS, React.js, MaterialUI and Billboard.js",
        maintainers_name: ["Antonette Caldwell","Abhishek Kumar"],
        link: ["https://layer5.io/community/members/antonette-caldwell","https://layer5.io/community/members/abhishek-kumar"],
        repository: "https://github.com/meshery/meshery/tree/master/ui",
      },
      {
        project: "Service Mesh Performance",
        image: smp,
        site: "https://smp-spec.io",
        language: "Jekyll",
        maintainers_name: ["Aaditya Subedy"],
        link: ["https://layer5.io/community/members/aaditya-narayan-subedy"],
        repository:
          "https://github.com/service-mesh-performance/service-mesh-performance",
      },
      {
        project: "Nighthawk",
        image: gnh,
        site: "https://getnighthawk.dev",
        language: "Jekyll",
        maintainers_name: ["Uzair Shaikh"],
        link: ["https://layer5.io/community/members/uzair-shaikh"],
        repository: "https://github.com/layer5io/getnighthawk",
      },
      {
        project: "MeshMap",
        image: meshery,
        site:
          "/cloud-native-management/meshmap",
        language: "React.js, Cytoscape.js",
        maintainers_name: ["Abhishek Kumar"],
        link: ["https://layer5.io/community/members/abhishek-kumar"],
        description: "A visual topology to display cloud native configuration, workloads and traffic.",
        repository: "https://github.com/layer5labs/meshery-extensions",
        accessRequired: "*program participation required"
      },
      {
        project: "Discussion Forum",
        image: five,
        site: "https://discuss.layer5.io",
        language: "Discourse",
        maintainers_name: ["Vivek Vishal"],
        link: ["https://layer5.io/community/members/vishal-vivek"],
        repository: " https://discuss.layer5.io",
      },
      {
        project: "Cloud Native Patterns",
        image: patterns,
        site: "https://service-mesh-patterns.github.io/service-mesh-patterns/",
        language: "Gatsby",
        maintainers_name: ["Gaurav Chadha", "Nikhil Ladha"],
        link: ["https://layer5.io/community/members/gaurav-chadha","https://layer5.io/community/members/nikhil-ladha"],
        repository: "https://github.com/service-mesh-patterns/service-mesh-patterns",
      },
      {
        project: "Cloud Native Playground",
        image: meshery,
        site: "https://play.meshery.io",
        language: "React.js",
        maintainers_name: ["Nikhil Ladha"],
        link: ["https://layer5.io/community/members/nikhil-ladha"],
        repository: "https://github.com/meshery/play",
      },
      {
        project: "Meshery Cloud",
        image: meshery,
        site: "https://meshery.layer5.io/",
        language: "React.js",
        maintainers_name: ["Pranav Singh"],
        link: ["https://layer5.io/community/members/pranav-singh"],
        repository: "https://github.com/layer5io/meshery-cloud",
        accessRequired: "*program participation required"
      },
      {
        project: "Recognition Program",
        image: recognitionLogo,
        site: "https://badges.layer5.io/",
        language: "Gatsby",
        maintainers_name: ["Vacant"],
        link: ["https://badges.layer5.io"],
        repository: "https://github.com/layer5labs/meshery-extensions-packages/"
      }
    ],
  },

  {
    category: "Cloud Native Training",
    subdata: [
      {
        project: "Cloud Native Labs",
        image: five,
        language: "yaml",
        description:
          "A variety of interactive labs spanning different cloud native infrastructure. See https://layer5.io/learn/service-mesh-labs.",
        repository:
          "https://github.com/layer5io/service-mesh-labs",
      },
      {
        project: "Istio Service Mesh Workshop",
        image: istioLogo,
        language: "Meshery",
        description:
          "A workshop that teaches about service meshes through the lens of Istio.",
        repository:
          "https://github.com/layer5io/istio-service-mesh-workshop",
      },
      {
        project: "Advanced Istio Service Mesh Workshop",
        image: istioLogo,
        language: "Meshery",
        description:
          "An advanced workshop that teaches about service meshes through the lens of Istio.",
        repository:
          "https://github.com/layer5io/advanced-istio-service-mesh-workshop",
      },
      {
        project: "Linkerd Service Mesh Workshop",
        image: linkerdLogo,
        language: "Meshery",
        description:
          "A workshop that teaches about service meshes through the lens of Linkerd.",
        repository:
          "https://github.com/layer5io/linkerd-service-mesh-workshop",
      },
      {
        project: "Containers 101 Workshop",
        image: five,
        language: "Docker",
        description:
          "A workshop that introduces Linux containers through concepts in slides and hands-on labs.",
        repository:
          "https://github.com/layer5io/containers-101-workshop",
      },
      {
        project: "Cloud Native Playground",
        image: meshery,
        language: "Meshery",
        description:
          "Cloud Native Playground for Kubernetes and CNCF projects",
        repository:
          "https://github.com/meshery/play",
      }
    ],
  },

  {
    category: "Cloud Native Management Repos",
    subdata: [
      {
        project: "Meshery",
        image: meshery,
        language: "Golang, gRPC",
        description: "the cloud native management plane to provide governance and backend system integration. Golang, gRPC, NATS, CloudEvents",
        repository: "https://github.com/meshery/meshery",
      },
      {
        project: "SMI Conformance",
        image: smiLogo,
        language: "GitHub Action",
        description: "A utility for validating the conformance of service mesh implementations and their adherence to the Service Mesh Interface specifications.",
        repository:
          "https://github.com/layer5io/meshery-smi-conformance-action",
      },
      {
        project: "Meshery Operator",
        image: MesheryOperator,
        language: "Golang, Kubernetes Operator",
        description: "Meshery Operator is the multi-cloud native operator and implementation of MeshSync.",
        repository: "https://github.com/meshery/meshery-operator",
      },
      {
        project: "MeshSync",
        image: MeshSync,
        language: "Golang and NATS",
        description: "MeshSync is a multi-mesh resource discovery application which is also a custom kubernetes controller.",
        repository: "https://github.com/meshery/meshsync",
      },
      {
        project: "Learn-Layer5",
        image: five,
        language: "Golang, Kuttl",
        description: "A utility for validating the conformance of cloud native implementations and their adherence to the Cloud Native Interface specifications.",
        repository: "https://github.com/layer5io/meshery-smi-conformance-action",
      },
      {
        project: "Meshery Cloud",
        image: meshery,
        language: "Golang",
        description: "A Meshery Remote Provider.",
        repository: "https://docs.meshery.io/extensibility/providers",
      },
      // {
      //   project: "MeshMonkey",
      //   language: "Golang",
      //   repository: "https://github.com/layer5io/meshmonkey",
      // },
    ],
  },

  {
    category: "WebAssembly Repos",
    subdata: [
      {
        project: "Image Hub",
        image: imagehub,
        language: "Vuejs",
        description: "A sample application written to run on Istio or Consul for exploring WebAssembly modules used as Envoy filters.",
        repository: "https://github.com/layer5io/image-hub",
      },
      {
        project: "WASM Filters",
        image: wasm,
        language: "C, C++, Rust",
        description: "A collection of WebAssemby filters for Envoy proxy written in C, C++, and Rust for exercising different features provided by envoy-wasm.",
        repository: "https://github.com/layer5io/wasm-filters",
      },
    ],
  },

  {
    category: "Cloud Native Performance Repos ",
    subdata: [
      {
        project: "Cloud Native Performance",
        image: smp,
        language: "Protobuf",
        description:
          "a common format for capturing and describing cloud native infrastucture performance and services.",
        repository:
          "https://github.com/layer5io/service-mesh-performance-specification",
      },
      {
        project: "Wrk2",
        image: meshery,
        language: "C",
        description:
          "a C-based load generator. A fork of wrk2, which includes the concept of coordinated omission.",
        repository: "https://github.com/giltene/wrk2",
      },
      {
        project: "Gowrk2",
        image: meshery,
        language: "Golang",
        description:
          "Augmentation of wrk2 to produce output compatible with Meshery’s visualization of performance test results.",
        repository: "https://github.com/layer5io/gowrk2",
      },
      {
        project: "Nighthawk",
        image: gnh,
        language: "Golang, gRPC",
        description:
          "Augmentation of Envoy Nighthawk to produce output compatible with Meshery’s visualization of performance test results",
        repository: "https://github.com/layer5io/nighthawk-go",
      },
      {
        project: "SMP Action",
        image: github,
        language: "shell",
        description: "GitHub Action to run SMP Performance Benchmarks on CI/CD pipelines.",
        repository: "https://github.com/layer5io/meshery-smp-action"
      },
      {
        project: "Meshery-Perf",
        image: meshery,
        language: "Golang",
        description: "meshery-perf is a Meshery component used to run performance tests",
        repository: "https://github.com/meshery/meshery-perf"
      }
    ],
  },

  {
    category: "Cloud Native Pattern Repos",
    subdata: [
      {
        project: "Cloud Native Patterns",
        image: patterns,
        language: "Yaml",
        description:
          "A collection of functional examples to be used as patterns for operationalizing cloud native infrastruture and application deployments and applying best practices.",
        repository:
          "https://github.com/service-mesh-patterns/service-mesh-patterns",
      },
      {
        project: "Cloud Native Patterns Action",
        image: patterns,
        language: "shell",
        description: "GitHub Action to deploy Cloud Native Patterns on CI/CD pipelines.",
        repository: "https://github.com/layer5io/meshery-service-mesh-patterns-action",
      },
    ],
  },
  {
    category: "Meshery Adapter Repos",
    subdata: [
      {
        project: "Meshery Adapter for Istio",
        image: istioLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Istio.",
        repository: "https://github.com/layer5io/meshery-istio",
      },
      {
        project: "Meshery Adapter for Linkerd",
        image: linkerdLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Linkerd.",
        repository: "https://github.com/layer5io/meshery-linkerd",
      },
      {
        project: "Meshery Adapter for NSM",
        image: nsmLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Network Service Mesh.",
        repository: "https://github.com/layer5io/meshery-nsm",
      },
      {
        project: "Meshery Adapter for Octarine",
        image: meshery,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Octarine.",
        repository: "https://github.com/layer5io/meshery-octarine",
      },
      {
        project: "Meshery Adapter for Traefik Mesh",
        image: traefikLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Traefik Mesh.",
        repository: "https://github.com/layer5io/meshery-traefik-mesh",
      },
      {
        project: "Meshery Adapter for Kuma",
        image: kumaLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Kuma.",
        repository: "https://github.com/layer5io/meshery-kuma",
      },
      {
        project: "Meshery Adapter for Consul",
        image: consulLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Consul",
        repository: "https://github.com/layer5io/meshery-consul",
      },
      {
        project: "Meshery Adapter for CPX",
        image: meshery,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Citrix CPX",
        repository: "https://github.com/layer5io/meshery-cpx",
      },
      {
        project: "Meshery Adapter for App Mesh",
        image: appmeshLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of AWS App Mesh",
        repository: "https://github.com/layer5io/meshery-app-mesh",
      },
      {
        project: "Meshery Adapter for Tanzu Service Mesh",
        image: meshery,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of VMware Tanzu Service Mesh",
        repository: "https://github.com/layer5io/meshery-tanzu-sm",
      },
      {
        project: "Meshery Adapter for NGINX Service Mesh",
        image: nginxLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of NGINX Service Mesh",
        repository: "https://github.com/layer5io/meshery-nginx-sm",
      },
      {
        project: "Meshery Adapter for Cilium Service Mesh",
        image: ciliumLogo,
        language: "Golang, gRPC",
        description: "Meshery adapter for management of Cilium Service Mesh.",
        repository: "https://github.com/meshery/meshery-cilium",
      },
      {
        project: "MeshKit",
        image: meshery,
        language: "Golang,Cuelang",
        description: "Toolkit for Layer5's microservices.",
        repository: "https://github.com/layer5io/meshkit",
      },
      {
        project: "Meshery Adapter Library",
        image: meshery,
        language: "Golang, gRPC",
        description: "A common and consistent set of functionality for Meshery Adapters.",
        repository: "https://github.com/layer5io/meshery-adapter-library",
      },
      {
        project: "Meshery Adapter Template",
        image: meshery,
        language: "Golang, gRPC",
        description: "A GitHub repo used as a template for new Meshery Adapters.",
        repository: "https://github.com/layer5io/meshery-adapter-template",
      },
    ],
  },

];


