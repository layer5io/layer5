export const compatibility=[
    {
        name: "Consul Connect",
        tac: "Yes",
        taclink: "https://github.com/hashicorp/consul-smi-controller",
        tmetrics: "No",
        tmetricslink: "",
        tsplit: "No",
        tsplitlink: "",
        tspec: "No",
        tspeclink: ""
    },
    {
        name: "Istio",
        tac: "Yes",
        taclink: "https://github.com/deislabs/smi-adapter-istio",
        tmetrics: "Yes",
        tmetricslink: "https://github.com/deislabs/smi-metrics/tree/master/pkg/istio",
        tsplit: "Yes",
        tsplitlink: "https://github.com/deislabs/smi-adapter-istio",
        tspec: "Yes",
        tspeclink: "https://github.com/deislabs/smi-adapter-istio"
    },
    {
        name: "Linkerd 2.x (Conduit)",
        tac: "No",
        taclink: "",
        tmetrics: "Yes",
        tmetricslink: "https://github.com/deislabs/smi-metrics/tree/master/pkg/linkerd",
        tsplit: "Yes",
        tsplitlink: "https://linkerd.io/2/features/traffic-split/",
        tspec: "No",
        tspeclink: ""
    },
    {
        name: "Traefik",
        tac: "Yes",
        taclink: "https://github.com/traefik/mesh",
        tmetrics: "No",
        tmetricslink: "",
        tsplit: "Yes",
        tsplitlink: "https://github.com/traefik/mesh",
        tspec: "Yes",
        tspeclink: "https://github.com/traefik/mesh"
    }
]