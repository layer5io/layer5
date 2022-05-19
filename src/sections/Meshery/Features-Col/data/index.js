const lifecycleFeatureData = {
  name: "Lifecycle",
  description: "Manage any service mesh",
  link: "#",
  btnText: "Get Started",
  services: [
    {
      content:
        "AWS App Mesh, Cilium Service Mesh, Citrix Service Mesh, Consul, Istio, Kuma, Linkerd, Network Service Mesh, NGINX Service Mesh, Open Service Mesh, Traefik Mesh",
      className: "--on",
    },
    {
      content:
        "Use sample applications, patterns, and filters to explore service mesh functionality",
      className: "--on",
    },
    {
      content:
        "Validate each service mesh's compliance with Service Mesh Interface (SMI)",
      className: "--on",
    },
  ],
  count: {
    value: 10,
    description: "service meshes supported",
  },
};

const configurationFeatureData = {
  name: "Configuration",
  description: "Operate with best practices",
  link: "#",
  btnText: "Get Started",
  services: [
    {
      content: "Built-in industry patterns and known best practices",
      className: "--on",
    },
    {
      content: "Apply custom configuration to your service mesh",
      className: "--on",
    },
    {
      content: "Manage WebAssembly filters for Envoy",
      className: "--on",
    },
    {
      content: "Control service mesh add-ons",
      className: "--on",
    },
    {
      content: "Visualize your deployment with MeshMap",
      className: "--on",
    },
    {
      content: "Apply well-known service mesh patterns",
      className: "--on",
    },
  ],
  count: {
    value: 1200,
    description: "users",
  },
};

const performanceFeatureData = {
  name: "Performance",
  description: "Assess the performance of your service mesh",
  link: "#",
  btnText: "Get Started",
  services: [
    {
      content:
        "Distributed performance analysis supporting 3 different types of load generators",
      className: "--on",
    },
    {
      content: "Built-in statistical analysis of service latency quartiles",
      className: "--on",
    },
    {
      content: "Integration with Prometheus and Grafana",
      className: "--on",
    },
    {
      content: "Baseline and track deltas of workload performance.",
      className: "--on",
    },
  ],
  count: {
    value: 0,
    description: "performance tests run",
  },
};

const data = {
  features: [
    lifecycleFeatureData,
    configurationFeatureData,
    performanceFeatureData,
  ],
};

export default data;
