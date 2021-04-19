import React from "react";
import styled from "styled-components";
import { Container } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";
import Features from "../../../components/Features-carousel";

const MesheryFeaturesWrapper = styled.div`
    margin: auto;
    margin-top: 4rem;
    @media (max-width: 32rem){
        margin-top: 10rem;
    }
    .feature-expose {
    img {
      padding: 4rem;
    }
  }
  .feature-expose-full {
    img {
      padding: 0rem;
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
              title: "Operational Best Practices",
              description:
                "Benefit from the operational expertise of the world’s foremost service mesh operator and the patterns they use.",
              learnMoreLink: "/books/service-mesh-patterns",
              content: (
                <img
                  src={require("./feature-images/meshery-configuration-management.png")}
                  alt="Operational Best Practices"
                />
              ),
            },
            {
              title: "Adaptive WebAssembly Filters for Envoy",
              description:
                "Dynamically offload application infrastructure logic.",
              learnMoreLink: "/projects/image-hub",
              content: (
                <img
                  src={require("./feature-images/meshery-wasm.png")}
                  alt="Adaptive WebAssembly Filters for Envoy"
                />
              ),
            },
            {
              title: "Integration with ArgoCD",
              description:
                "Canary new releases of your applicatioons intelligently. Leverage your existing ArgoCD workflows.",
              learnMoreLink: "/",
              content: (
                <Terminal
                  lines={[
                    { code: "$ mesheryctl pattern apply -f canary-v3.yaml", color: "white" },
                    { code: "» Deploying...", color: "navy" },
                    {
                      code: "✓ Deployment successfully rolled out!",
                      color: "green",
                    },
                    { code: "\n" },
                    { code: "» Traffic splitting...", color: "navy" },
                    {
                      code: "✓ 5% of user requests to v3.",
                      color: "green",
                    },
                    {
                      code: "✓ 30% of user requests to v3.",
                      color: "green",
                    },
                    {
                      code: "✓ 60% of user requests to v3.",
                      color: "green",
                    },
                    {
                      code: "✓ 90% of user requests to v3.",
                      color: "green",
                    },
                    {
                      code: "✓ 100% of user requests to v3.",
                      color: "green",
                    },
                    { code: "\n" },
                    {
                      code: "Pattern successfully applied. Rollout of 'canary-v3' completed.",
                      color: "navy",
                    },
                    {
                      code: "» Prerelease URL: https://payments-v3.meshery.run",
                      color: "green",
                    },
                    {
                      code: "» Release URL: https://payments.meshery.run",
                      color: "green",
                    },
                  ]}
                />
              ),
            },
            {
              title: "Meshery Operator",
              description:
                "",
              content: (
                <div className="feature-expose">
                  <img
                    src={require("../../../assets/images/meshery-operator/meshery-operator-dark.svg")}
                    alt="Kubernetes Operator for Meshery"
                  />
                  <p>Service meshes are dynamic. Changes to the service meshes and their workloads occur with great frequency. Meshery Operator helps Meshery stay in lockstep with these changes. Service mesh administrators might make updates to service mesh configuration directly with the service mesh. </p>
                  <p>Meshery is continually cognizant of such changes. The Kubernetes operator for Meshery, supports discovery and eventing of greenfield and brownfield service mesh deployments.</p>

                </div>
              ),
            },
            {
              title: "Integration with Prometheus and Grafana",
              description:
                "",
              content: (
                <div className="feature-expose">
                  <img
                    src={require("./feature-images/meshery-and-grafana.png")}
                    alt="Prometheus and Grafana integration with Meshery"
                  />
                  <p>Key to the efficient operation of any service mesh is the measurement and management of it’s performance.</p>
                  <p>Meshery provides performance test results alongside environment metrics, including service mesh control and data plane metrics as well as cluster node resource metrics, so that operators may easily understand the overhead of their service mesh’s control plane and data plane in context of the overhead incurred on nodes within the cluster.</p>

                </div>
              ),
            },
            // {
            //   title: "CI/CD and Version Control Integration",
            //   description:
            //     "Integrate with existing CI/CD providers and version control providers like GitHub, CircleCI, Jenksins, and more",
            //   //learnMoreLink: "/",
            //   content: (
            //     <Terminal
            //       title="config.yaml"
            //       lines={[
            //         {
            //           code: "env:",
            //           color: "white",
            //         },
            //         {
            //           indent: 1,
            //           code:
            //             "SERVER_TOKEN: ${{ secrets.SERVER_TOKEN }}",
            //           color: "white",
            //         },
            //         {
            //           indent: 1,
            //           code: "SERVER_ADDR: meshery.example.com:9701",
            //           color: "white",
            //         },
            //         {
            //           code: "steps:",
            //           color: "white",
            //         },
            //         {
            //           indent: 1,
            //           code: "- uses: actions/checkout@v2",
            //           color: "white",
            //         },
            //         {
            //           indent: 1,
            //           code: "- uses: layer5/action-setup-layer5",
            //           color: "white",
            //         },
            //         {
            //           indent: 1,
            //           code: "with:",
            //           color: "white",
            //         },
            //         {
            //           indent: 2,
            //           code: "version: '0.1.0'",
            //           color: "white",
            //         },
            //         {
            //           code: "- run: meshery init",
            //           color: "white",
            //         },
            //         {
            //           code: "- run: meshery up",
            //           color: "white",
            //         },
            //       ]}
            //     />
            //   ),
            // },
            {
              title: "MeshSync",
              description:
                "Strict control of service mesh behavior.",
              //learnMoreLink: "/",
              content: (
                <div className="feature-expose">
                  <img
                    src={require("./feature-images/meshsync.svg")}
                    alt="Meshery, the extensible service mesh manager"
                  />
                  <p>
                    With MeshSync was designed from the ground up to perform tiered discovery of your Kubernetes enviroment by incorporating tiered discovery and a unique method of fingerprinting each running mesh and workload.
                  </p>
                  <p>
                    MeshSync's working snapshot of the state of each cluster and service mesh under management is stored in-memory and continuously refreshed.
                  </p>
                </div>
              ),
            },
            {
              title: "Extensible Management Plane",
              description:
                "Plug in different service meshes, load generators and providers.",
              content: (
                <div className="feature-expose-full">
                  <a href={require("./feature-images/meshery-extensibility.svg")}>
                    <img
                      src={require("./feature-images/meshery-extensibility.svg")}
                      alt="Meshery, the extensible service mesh manager"
                    /></a>
                  <p>
                    Meshery is not just an application. It is a set of microservices where the central component is itself called Meshery. Integrators may extend Meshery by taking advantage of designated Extension Points.</p>
                  <p>Extension points come in various forms and are available through Meshery’s architecture.
                  </p>
                </div>
              ),
              learnMoreLink: "https://docs.meshery.io/extensibility",
            },
          ]}
        />
      </Container>
    </MesheryFeaturesWrapper>
  );
};

export default MesheryFeatures;
