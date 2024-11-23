import { useStaticQuery, graphql } from "gatsby";

const LifecycleFeature = () => {
  const integrations = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fields: { collection: { eq: "integrations" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        totalCount
      }
    }
  `);

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
        content: "Deploy and operate cloud native infrastructure",
        className: "--on",
      },
      {
        content: "Share and use known cloud native patterns",
        className: "--on",
      },
      {
        content: "Multi-player collaboration",
        className: "--on",
      },
      {
        content: "Real-Time Helm Chart Generation for CLI and UI",
        className: "--on",
      },
      {
        content: "Enhanced Multi-Cluster Support for Streamlined Environments",
        className: "--on",
      },
      {
        content: "Multiplayer5 designer for kubernetes and cloud",
        className: "--on",
      },
      {
        content: "Scheduled Workflow: Automated Helm Chart Generation",
        className: "--on",
      },
      {
        content: "Hierarchical Organization and Teams management",
        className: "--on",
      },
      // {
      //   content:
      //     "Validate each service mesh's compliance with Service Mesh Interface (SMI)",
      //   className: "--on",
      // },
    ],
    count: {
      value: 0,
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
        content: "Visualize and dry-run your deployment with Kanvas",
        className: "--on",
      },
      {
        content: "Apply well-known cloud native designs",
        className: "--on",
      },
      {
        content: "Kubernetes Management with Design Deployment Dry-run",
        className: "--on",
      },
      {
        content: "Efficient WASM Envoy Filter Management in Meshery UI and CLI",
        className: "--on",
      },
      {
        content: "Configurable OAuth callbacks",
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
    description: "Assess the performance of your cloud native infrastructure",
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
        content:
          "Import your existing Grafana dashboards. Ingest any metric from Prometheus",
        className: "--on",
      },
      {
        content:
          "Create and share performance profiles and test results with team members.",
        className: "--on",
      },
      {
        content: "Identify the MeshMark of a specific network function",
        className: "--on",
      },
      {
        content: "Baseline and track deltas of your workload performance",
        className: "--on",
      },
      {
        content: "Validate and dry run your configurations before deploying",
        className: "--on",
      },
      {
        content: "Certificate support in performance profiles",
        className: "--on",
      },
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

  // Count the total number of integrations
  const totalIntegrations =
    Math.ceil(integrations.allMdx.totalCount / 10) * 10;

  // Update the count value in lifecycleFeatureData
  const lifecycleFeatureDataUpdated = {
    ...lifecycleFeatureData,
    count: {
      value: totalIntegrations,
      description: "cloud native integrations",
    },
  };

  // Update the data object with the updated lifecycleFeatureData
  const dataUpdated = {
    ...data,
    features: [
      lifecycleFeatureDataUpdated,
      configurationFeatureData,
      performanceFeatureData,
    ],
  };
  return dataUpdated;
};

export default LifecycleFeature;
