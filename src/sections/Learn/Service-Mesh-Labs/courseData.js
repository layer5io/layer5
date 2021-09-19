import istioLogo from "../../../assets/images/service-mesh-icons/istio-white.svg";
import linkerdLogo from "../../../assets/images/service-mesh-icons/linkerd-white.svg";
import consulLogo from "../../../assets/images/service-mesh-icons/consul-white.svg";
import kumaLogo from "../../../assets/images/service-mesh-icons/kuma-white.svg";
import nsmLogo from "../../../assets/images/service-mesh-icons/nsm-white.svg";
import traefikLogo from "../../../assets/images/service-mesh-icons/traefik-white.svg";
// import smpLogo from "../../assets/images/smp/horizontal/smp-light-text-side.svg";
import smpLogo from "./assets/smp-light-text.svg";
import smiLogo from "./assets/servicemeshinterface-stackedsmi-white.svg";
import osmLogo from "../../../assets/images/service-mesh-icons/open-service-mesh/icon/white/openservicemesh-icon-white.svg";

export const data = [
  {
    id: "1",
    title: "Getting Started",
    info: "Learn how to run Meshery, install service meshes and deploy sample apps",
    courseLink: "layer5/courses/meshery-adapters",
    scenarios: [
      {
        subId: "1a",
        title: "Working with Meshery and Istio",
        info: "Learn how to run Meshery, install Istio and deploy a sample app",
        embed: "istio-meshery-adapter",
        link: "/learn/service-mesh-labs/working-with-meshery-and-istio",
        cover: istioLogo
      },
      {
        subId: "1b",
        title: "Working with Meshery and Linkerd",
        info: "Learn how to run Meshery, install Linkerd and deploy a sample app",
        embed: "linkerd-meshery-adapter",
        link: "/learn/service-mesh-labs/working-with-meshery-and-linkerd",
        cover: linkerdLogo
      },
      {
        subId: "1c",
        title: "Working with Meshery and Consul",
        info: "Learn how to run Meshery, install Consul and deploy a sample app",
        embed: "consul-meshery-adapter",
        link: "/learn/service-mesh-labs/working-with-meshery-and-consul",
        cover: consulLogo
      },
      {
        subId: "1d",
        title: "Working with Meshery and Kuma",
        info: "Learn how to run Meshery, install Kuma and deploy a sample app",
        embed: "kuma-meshery-adapter",
        link: "/learn/service-mesh-labs/working-with-meshery-and-kuma",
        cover: kumaLogo
      },
      {
        subId: "1e",
        title: "Working with Meshery and NSM",
        info: "Learn how to run Meshery, install NSM and deploy a sample app",
        embed: "nsm-meshery-adapter",
        link: "/learn/service-mesh-labs/working-with-meshery-and-nsm",
        cover: nsmLogo
      },
      {
        subId: "1f",
        title: "Working with Meshery and Traefik",
        info: "Learn how to run Meshery, install Traefik and deploy a sample app",
        embed: "traefik-meshery-adapter",
        link: "/learn/service-mesh-labs/working-with-meshery-and-traefik",
        cover: traefikLogo
      },
      {
        subId: "1g",
        title: "Working with Meshery and Open Service Mesh",
        info: "Learn how to run Meshery, install Open Service Mesh and deploy a sample app",
        embed: "osm-meshery-adapter",
        link: "/learn/service-mesh-labs/working-with-meshery-and-open-service-mesh",
        cover: osmLogo
      }
    ]
  },
  {
    id: "2",
    title: "Performance Management",
    info: "Learn how to do Performance Testing with Meshery",
    courseLink: "layer5/courses/performance-testing-with-meshery",
    scenarios: [
      {
        subId: "2a",
        title: "Running Performance Tests",
        info: "Learn how to do performance testing with Meshery",
        embed: "running-performance-tests",
        link: "/learn/service-mesh-labs/running-performance-tests",
        cover: smpLogo
      },
      {
        subId: "2b",
        title: "Traffic Splitting with Meshery",
        info: "Traffic Management with Meshery",
        embed: "traffic-splitting",
        link: "/learn/service-mesh-labs/traffic-splitting-with-meshery",
        cover: smiLogo
      }
    ]
  },
];
