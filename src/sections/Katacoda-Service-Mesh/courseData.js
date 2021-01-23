import istioLogo from "../../assets/images/service-mesh-icons/istio.svg";
import linkerdLogo from "../../assets/images/service-mesh-icons/linkerd.svg";
import consulLogo from "../../assets/images/service-mesh-icons/consul.svg";
import kumaLogo from "../../assets/images/service-mesh-icons/kuma.svg";
import nsmLogo from "../../assets/images/service-mesh-icons/nsm.svg";
import smpLogo from "../../assets/images/smp/horizontal/smp-light-text-side.svg";
import smiLogo from "./assets/servicemeshinterface-icon-color.svg";

export const data = [
    {
        id: "1",
        title: "Meshery - Learn how to manage your service mesh",
        info: "Learn how to run Meshery, install service meshes and deploy sample apps",
        courseLink: "layer5/courses/meshery-adapters",
        scenarios: [
            {
                subId: "1a",
                title: "Working with Meshery and Istio",
                info: "Learn how to run Meshery, install Istio and deploy a sample app",
                embed: "istio-meshery-adapter",
                link: "/labs/working-with-meshery-and-istio",
                cover: istioLogo
            },
            {
                subId: "1b",
                title: "Working with Meshery and Linkerd",
                info: "Learn how to run Meshery, install Linkerd and deploy a sample app",
                embed: "linkerd-meshery-adapter",
                link: "/labs/working-with-meshery-and-linkerd",
                cover: linkerdLogo
            },
            {
                subId: "1c",
                title: "Working with Meshery and Consul",
                info: "Learn how to run Meshery, install Consul and deploy a sample app",
                embed: "consul-meshery-adapter",
                link: "/labs/working-with-meshery-and-consul",
                cover: consulLogo
            },
            {
                subId: "1d",
                title: "Working with Meshery and Kuma",
                info: "Learn how to run Meshery, install Kuma and deploy a sample app",
                embed: "kuma-meshery-adapter",
                link: "/labs/working-with-meshery-and-kuma",
                cover: kumaLogo
            },
            {
                subId: "1e",
                title: "Working with Meshery and NSM",
                info: "Learn how to run Meshery, install NSM and deploy a sample app",
                embed: "nsm-meshery-adapter",
                link: "/labs/working-with-meshery-and-nsm",
                cover: nsmLogo
            }
        ]
    },
    {
        id: "2",
        title: "Meshery - Performance Testing",
        info: "Learn how to do Performance Testing with Meshery",
        courseLink: "layer5/courses/performance-testing-with-meshery",
        scenarios: [
            {
                subId: "2a",
                title: "Running Performance Tests",
                info: "Learn how to do performance testing with Meshery",
                embed: "running-performance-tests",
                link: "/labs/running-performance-tests",
                cover: smpLogo
            },
            {
                subId: "2b",
                title: "Traffic Splitting with Meshery",
                info: "Traffic Management with Meshery",
                embed: "traffic-splitting",
                link: "/labs/traffic-splitting-with-meshery",
                cover: smiLogo
            }
        ]
    },
];
