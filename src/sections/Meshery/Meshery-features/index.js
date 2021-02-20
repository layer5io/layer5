import React from "react";
import styled from "styled-components";
import { Container } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";
import Features from "../../../components/Features-carousel";

const MesheryFeaturesWrapper = styled.div`
    margin: 6.25rem auto;
    @media (max-width: 32rem){
        margin-top: 10rem;
    }
    .feature-expose {
    display:inline;
    img {
      padding: 4rem;
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
              title: "WebAssembly Filters for Envoy",
              description:
                "Execute a command in the context of a running application",
              learnMoreLink: "/projects/image-hub",
              content: (
                <img
                  src={require("./feature-images/meshery-wasm.png")}
                  alt="WebAssembly Filters for Envoy"
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
              title: "CI/CD and Version Control Integration",
              description:
                "Integrate with existing CI/CD providers and version control providers like GitHub, CircleCI, Jenksins, and more",
              //learnMoreLink: "/",
              content: (
                <Terminal
                  title="config.yaml"
                  lines={[
                    {
                      code: "env:",
                      color: "white",
                    },
                    {
                      indent: 1,
                      code:
                        "SERVER_TOKEN: ${{ secrets.SERVER_TOKEN }}",
                      color: "white",
                    },
                    {
                      indent: 1,
                      code: "SERVER_ADDR: meshery.example.com:9701",
                      color: "white",
                    },
                    {
                      code: "steps:",
                      color: "white",
                    },
                    {
                      indent: 1,
                      code: "- uses: actions/checkout@v2",
                      color: "white",
                    },
                    {
                      indent: 1,
                      code: "- uses: layer5/action-setup-layer5",
                      color: "white",
                    },
                    {
                      indent: 1,
                      code: "with:",
                      color: "white",
                    },
                    {
                      indent: 2,
                      code: "version: '0.1.0'",
                      color: "white",
                    },
                    {
                      code: "- run: meshery init",
                      color: "white",
                    },
                    {
                      code: "- run: meshery up",
                      color: "white",
                    },
                  ]}
                />
              ),
            },
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
                "Meshery provides several extension points for working with different service meshes via adapters, different load generators and different providers. Meshery also offers a Graphql and ReST API.",
              content: (
                <img
                  src={require("./feature-images/meshery-extensibility.svg")}
                  alt="Meshery, the extensible service mesh manager"
                />
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
