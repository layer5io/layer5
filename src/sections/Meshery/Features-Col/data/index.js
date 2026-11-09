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
    description: "Manage and operate your cloud native infra from discovery to deployment.",
    link: "#",
    btnText: "Discover your clusters",
    services: [
      { content: "Multi-cluster operations from a central console", className: "--on" },
      { content: "Discover, deploy, and visualize Kubernetes clusters", className: "--on" },
      { content: "Dry-run capabilities and change previews in pull requests", className: "--on" },
      { content: "Meshery CLI (mesheryctl) for streamlined cluster ops", className: "--on" },
      { content: "Bulk import of infrastructure as code from GitHub", className: "--on" },
      { content: "Helm chart generation and environment configuration", className: "--on" },
      { content: "Workspaces for centralized team and project management", className: "--on" },
      { content: "Environments for grouped resource access and control", className: "--on" },
      { content: "GitOps snapshots and insights in pull requests", className: "--on" },
      { content: "Role-based access control and multi-tenant support", className: "--on" }
    ],
    count: {
      value: 300,
      description: "cloud native integrations"
    }
  };


  const configurationFeatureData = {
    name: "Configuration",
    description: "Design, validate, and version your infra with visual tools and best practices.",
    link: "#",
    btnText: "Get Started",
    services: [
      { content: "Drag-and-drop infrastructure designer (Kanvas)", className: "--on" },
      { content: "400+ reusable design templates and patterns", className: "--on" },
      { content: "Define semantic and non-semantic relationships visually", className: "--on" },
      { content: "Export designs: Kubernetes, Helm, Docker Compose, OCI", className: "--on" },
      { content: "Static validation and OPA-based policy enforcement", className: "--on" },
      { content: "Version control and inline design review tools", className: "--on" },
      { content: "Custom models with OCI registry support", className: "--on" },
      { content: "Web terminal for direct container/pod access", className: "--on" },
      { content: "Extension points: gRPC adapters, hot-loadable React and Golang plugins", className: "--on" },
      { content: "REST and GraphQL APIs for platform extensibility", className: "--on" }
    ],
    count: {
      value: 1500,
      description: "standardized components"
    }
  };


  const performanceFeatureData = {
    name: "Optimization",
    description: "Assess, benchmark, and improve the performance of your infra.",
    link: "#",
    btnText: "Start Performance Testing",
    services: [
      { content: "Performance profiles for consistent benchmarking", className: "--on" },
      { content: "Built-in load generators: Fortio, Wrk2, Nighthawk", className: "--on" },
      { content: "Comparative testing with visual result analysis", className: "--on" },
      { content: "Statistical reporting: latency histograms, buckets", className: "--on" },
      { content: "Cloud Native Performance spec compliance", className: "--on" },
      { content: "Historical performance tracking across versions", className: "--on" },
      { content: "Prometheus and Grafana integration for metrics", className: "--on" },
      { content: "Support for soak, burst, and capacity tests", className: "--on" },
      { content: "HTTP, TCP, and gRPC load generation support", className: "--on" },
      { content: "Behavioral comparison of CNFs across deployments", className: "--on" }
    ],
    count: {
      value: 0,
      description: "performance tests run"
    }
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
