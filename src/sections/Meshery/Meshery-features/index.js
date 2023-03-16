import React from "react";
import styled from "styled-components";
import { Container } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";
import Features from "../../../components/Features-carousel";
import img3 from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import img5 from "./feature-images/meshsync.svg";
import img6 from "./feature-images/meshery-extensibility.svg";
import { StaticImage } from "gatsby-plugin-image";

const img1 = "./feature-images/meshery-configuration-management.png";
const img2 = "./feature-images/meshery-wasm.png";
const img4 = "./feature-images/meshery-and-grafana.png";
const img7 = "../../../assets/images/docker-extension/docker-extension-meshery.png";

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
`;

const MesheryFeatures = () => {
  return (
    <MesheryFeaturesWrapper>
      <Container>
        <Features
          features={[
            {
              id: "first" ,
              title: "Operational Best Practices",
              description:
                "Benefit from the operational expertise of the world’s foremost service mesh operator and the patterns they use.",
              learnMoreLink: "/books/service-mesh-patterns",
              content: <StaticImage src={img1} alt="Operational Best Practices" loading="lazy" />,
            },
            {
              id: "second" ,
              title: "Adaptive WebAssembly Filters for Envoy",
              description:
                "Dynamically offload application infrastructure logic.",
              learnMoreLink: "/projects/image-hub",
              content: (
                <StaticImage src={img2} alt="Adaptive WebAssembly Filters for Envoy" loading="lazy" />
              ),
            },
            {
              id: "third" ,
              title: "Integration with ArgoCD",
              description:
                "Canary new releases of your applicatioons intelligently. Leverage your existing ArgoCD workflows.",
              learnMoreLink: "/",
              content: (
                <Terminal
                  lines={[
                    {
                      code: "$ mesheryctl pattern apply -f canary-v3.yaml",
                      color: "white",
                    },
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
              id: "fourth" ,
              title: "Docker Extension for Meshery",
              description:
                "Develop service mesh-ready apps using Docker Desktop and Meshery",
              content: (
                <div className="feature-expose-full">
                  <StaticImage src={img7} alt="Meshery, Docker Extension for Meshery" loading="lazy" />
                  <p>
                    The Docker Extension for Meshery extends Docker Desktop’s
                    position as the cloud native developer’s go-to Kubernetes
                    environment with easy access to the next layer of cloud
                    native infrastructure: service meshes.
                  </p>
                </div>
              ),
              learnMoreLink: "/docker-extension-meshery",
            },
            {
              id: "five" ,
              title: "Meshery Operator",
              description: "",
              learnMoreLink:
                "/cloud-native-management/meshery/meshery-operator",
              content: (
                <div className="feature-expose">
                  <img src={img3} alt="Kubernetes Operator for Meshery" loading="lazy" />
                  <p>
                    Your infrastructure is dynamic. Changes to your infrastructure and your applications occur with great frequency. Whether you make a change directly or another system makes a change, Meshery Operator helps Meshery stay in lockstep with your ever-evolving infrastructure. {" "}
                  </p>
                  <p>
                    Meshery is continually cognizant of such changes. The
                    Kubernetes operator for Meshery, supports discovery and
                    eventing of greenfield and brownfield of your workloads, services, deployments, replicasets, pods, containers, services, persistent volumes... all of your Kubernetes-based infrastructure.
                  </p>
                </div>
              ),
            },
            {
              id: "six" ,
              title: "Integration with Prometheus and Grafana",
              description: "",
              content: (
                <div className="feature-expose-full">
                  <StaticImage
                    src={img4}
                    alt="Prometheus and Grafana integration with Meshery"
                    loading="lazy"
                  />
                  <p>
                    Key to the efficient operation of any service mesh is the
                    measurement and management of it’s performance.
                  </p>
                  <p>
                    Meshery provides performance test results alongside
                    environment metrics, including service mesh control and data
                    plane metrics as well as cluster node resource metrics, so
                    that operators may easily understand the overhead of their
                    service mesh’s control plane and data plane in context of
                    the overhead incurred on nodes within the cluster.
                  </p>
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
              id: "seven" ,
              title: "MeshSync",
              description: "Strict control of service mesh behavior.",
              //learnMoreLink: "/",
              content: (
                <div className="feature-expose">
                  <img
                    src={img5}
                    alt="Meshery, the extensible cloud native manager"
                    loading="lazy"
                  />
                  <p>
                    With MeshSync was designed from the ground up to perform
                    tiered discovery of your Kubernetes enviroment by
                    incorporating tiered discovery and a unique method of
                    fingerprinting each running mesh and workload.
                  </p>
                  <p>
                    MeshSync's working snapshot of the state of each cluster and
                    service mesh under management is stored in-memory and
                    continuously refreshed.
                  </p>
                </div>
              ),
            },
            {
              id: "eight" ,
              title: "Extensible Management Plane",
              description:
                "Plug in different service meshes, load generators and providers.",
              content: (
                <div className="feature-expose-full">
                  <img
                    src={img6}
                    alt="Meshery, the extensible cloud native manager"
                    loading="lazy"
                  />
                  <p>
                    Meshery is not just an application. It is a set of
                    microservices where the central component is itself called
                    Meshery. Integrators may extend Meshery by taking advantage
                    of designated Extension Points.
                  </p>
                  <p>
                    Extension points come in various forms and are available
                    through Meshery’s architecture.
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