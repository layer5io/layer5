import React from "react";
import styled from "styled-components";
import { Container } from "../../../reusecore/Layout";
// import Terminal from "../../../components/Terminal";
import Features from "../../../components/Features-carousel";
import img3 from "./feature-images/meshery-performance.gif";
import img5 from "./feature-images/meshery-snapshot.png";
import img6 from "./feature-images/edge_mount_relationship_pod_persistent_volume.svg";
import { StaticImage } from "gatsby-plugin-image";
import img2 from "./feature-images/workspace.gif";
import multiClusterGif from "./feature-images/multi-cluster-management.gif";
const img1 = "../../../assets/images/kanvas/KanvasDesigner.png";
const img4 = "./feature-images/meshery-catalog.png";
const img7 = "./feature-images/extensions.png";

const MesheryFeaturesWrapper = styled.div`
    margin: auto;
    margin-top: 4rem;
    @media (max-width: 32rem){
        margin-top: 4rem;
    }

    .feature-expose {
    img {
      padding: 0 3rem 1rem;
      height:20rem;
    }
  }
  .feature-expose-full {
    img {
      padding: 0rem;
    }
  }
  @media (max-width: 767px){ 
    .feature-expose img { 
      height: 15rem; 
    } 
  }
`;

const MesheryFeatures = () => {
  return (
    <MesheryFeaturesWrapper>
      <Container>
        <Features
          features={[
            {
              id: "first",
              title: "Infrastructure as Design with Kanvas",
              description:
                "Visually and collaboratively design your cloud native infrastructure using Meshery's drag-and-drop designer. Leverage 300+ integrations and context-aware relationships between components.",
              learnMoreLink: "/kanvas",
              content: <StaticImage src={img1} alt="Infrastructure as Design with Kanvas" loading="lazy" />,
            },
            {
              id: "second",
              title: "Workspaces: Team Collaboration Hub",
              description:
                "Your team's Google Drive for cloud native projects. Organize work, collaborate with teams, and control access to Environments and resources with shared workspaces.",
              learnMoreLink: "https://docs.meshery.io/concepts/logical/workspaces",
              content: (
                <img src={img2} alt="Workspaces Team Collaboration" loading="lazy" />
              ),
            },
            {
              id: "third",
              title: "Multi-Cluster Kubernetes Management",
              description:
                "Manage multiple Kubernetes clusters across any infrastructure from a single console. Perform dry-run deployments and validate configurations before applying changes.",
              learnMoreLink: "https://docs.meshery.io/guides/configuration-management/",
              content: (
                <img src={multiClusterGif} alt="Workspaces Team Collaboration" loading="lazy" />
              ),
            },
            {
              id: "fourth",
              title: "Platform Engineering with Extension Points",
              description:
                "Build your internal developer platform with Meshery's extensive extensibility. Includes REST/GraphQL APIs, gRPC adapters, hot-loadable ReactJS components, and Golang plugins.",
              content: (
                <div className="feature-expose-full">
                  <StaticImage src={img7} alt="Platform Engineering Extension Points" loading="lazy" />
                  <p>
                    Meshery's numerous extension points make it ideal as the foundation of your internal developer platform.
                    Create custom models, import/export as OCI images, and extend functionality through multiple integration patterns.
                  </p>
                </div>
              ),
              learnMoreLink: "https://meshery.io/extensions",
            },
            {
              id: "five",
              title: "Performance Management and Load Testing",
              description:
                "Comprehensive performance testing with multiple load generators (Fortio, Wrk2, Nighthawk). Create reusable performance profiles and track historical performance data.",
              learnMoreLink: "https://playground.meshery.io/performance",
              content: (
                <div className="feature-expose">
                  <img src={img3} alt="Performance Management" loading="lazy" />
                  <p>
                    Built-in statistical analysis, performance profiles for consistent testing,
                    and integration with Prometheus and Grafana for comprehensive metrics collection.
                  </p>
                  <p>
                    Compare performance across infrastructure deployments, track application
                    performance from version to version, and baseline your workload performance.
                  </p>
                </div>
              ),
            },
            {
              id: "six",
              title: "Cloud Native Catalog and Patterns",
              description:
                "Access 400+ curated design patterns and templates. Share, clone, and customize designs with built -in best practices for common deployment scenarios.", content: (
                <div className="feature-expose-full">
                  <StaticImage
                    src={img4}
                    alt="Cloud Native Catalog and Patterns"
                    loading="lazy"
                  />
                  <p>
                    Design configurator with templates from the catalog, version control for
                    infrastructure configurations, and export to multiple formats including
                    Kubernetes Manifest, Helm Chart, and Docker Compose.
                  </p>
                </div>
              ),
              learnMoreLink: "/catalog",
            },
            {
              id: "seven",
              title: "Environments and GitOps Integration",
              description:
                "Manage resources as groups with Environments. Get infrastructure snapshots in pull requests and preview deployments before merging changes.", content: (
                <div className="feature-expose">
                  <img
                    src={img5}
                    alt="Environments and GitOps Integration"
                    loading="lazy"
                  />
                  <p>
                    Environments make it easier to manage, share, and work with collections
                    of resources as a group, instead of dealing with connections and credentials individually.
                  </p>
                  <p>
                    Visual insights in GitHub pull requests help verify workload designs
                    and Kubernetes configurations before accepting and merging changes.
                  </p>
                </div>
              ),
              learnMoreLink: "/concepts/logical/environments",
            },
            {
              id: "eight",
              title: "Advanced Policy Management with OPA",
              description:
                "Context-aware policies for applications using Open Policy Agent integration. Enforce configuration best practices without writing Rego query language.", content: (
                <div className="feature-expose-full">
                  <img
                    src={img6}
                    alt="Policy Management with OPA"
                    loading="lazy"
                  />
                  <p>
                    Meshery uses context-aware relationships to define how and when components interrelate with one another.
                    Meshery supports a variety of relationships between components. These relationships are categorized into two types: semantic and non-semantic.
                  </p>
                </div>
              ),
              learnMoreLink: "https://docs.meshery.io/concepts/logical/relationships#types-of-relationships",
            },
          ]}
        />
      </Container>
    </MesheryFeaturesWrapper>
  );
};

export default MesheryFeatures;
