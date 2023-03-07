const lifecycleFeatureData = {
  name: "Lifecycle",
  description: "Manage all your cloud native infrastructure",
  link: "#",
  btnText: "Discover your clusters",
  services: [
    {
      content:
        "Discover, configure, visualize, validate and troubleshoot your existing Kubernetes clusters",
      className: "--on",
    },
    {
      content:
        "Deploy and operate any service mesh",
      className: "--on",
    },
    {
      content:
        "Use known cloud native ",
      className: "--on",
    },
    {
      content:
        "Validate each service mesh's compliance with Service Mesh Interface (SMI)",
      className: "--on",
    },
  ],
  count: {
    value: 150,
    description: "cloud native integrations",
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
      content: "Apply custom configuration to your Kubernetes clusters",
      className: "--on",
    },
    {
      content: "Manage WebAssembly filters for Envoy",
      className: "--on",
    },
    {
      content: "Version your infrastructure configuration designs",
      className: "--on",
    },
    {
      content: "Visualize and dry-run your deployment with MeshMap",
      className: "--on",
    },
    {
      content: "Apply well-known service mesh patterns",
      className: "--on",
    },
  ],
  count: {
    value: 1500,
    description: "components",
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
      content: "Import your existing Grafana dashboards. Ingest any metric from Prometheus",
      className: "--on",
    },
    {
      content: "Create and share performance profiles and test results with team members.",
      className: "--on",
    },
    {
      content: "Identify the MeshMark of a specific network function",
      className: "--on",
    },
    {
      content: "Baseline and track deltas of your workload performance",
      className: "--on",
    }
  ],
  count: {
    value: 0,
    description: "performance tests run",
  },
};

// const collaborationFeatureData = {
//   name: "Performance",
//   description: "Assess the performance of your service mesh",
//   link: "#",
//   btnText: "Get Started",
//   services: [
//     {
//       content:
//         "Distributed performance analysis supporting 3 different types of load generators",
//       className: "--on",
//     },
//     {
//       content: "Built-in statistical analysis of service latency quartiles",
//       className: "--on",
//     },
//     {
//       content: "Integration with Prometheus and Grafana",
//       className: "--on",
//     },
//     {
//       content: "Baseline and track deltas of workload performance.",
//       className: "--on",
//     },
//   ],
//   count: {
//     value: 0,
//     description: "performance tests run",
//   },
// };

const data = {
  features: [
    lifecycleFeatureData,
    configurationFeatureData,
    performanceFeatureData,
    // collaborationFeatureData,
  ],
};

export default data;
