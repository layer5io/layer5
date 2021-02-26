import React from "react";
import { Container } from "../../../reusecore/Layout";
import Hero from "../../../components/Animated-steps-list/hero";
import AnimatedStepsList from "../../../components/Animated-steps-list";
import MesheryWrapper from "../meshery.style";
import { Link } from "gatsby";


const MesheryTerminal = () => {
  return (
    <MesheryWrapper>
      <Container>
        <Hero
          title="Single Step Installation"
          initialdescription="No faster way to start managing any service mesh than with a single step to download, install, and run Meshery:"
          // links={[
          //   {
          //     text: "Download, Install, and Run Meshery",
          //     url: "/",
          //     external: false,
          //   },
          // ]}
          code="$ curl -L https://git.io/meshery | bash -"
          enddescription="Lightning fast time to cloud native management."
        />
        <AnimatedStepsList
          terminalHeroState={{
            frameLength: 100,
            loop: true,
            lines: [
              {
                frames: 5,
                code: ["$ curl -L https://git.io/meshery | bash -", "$ curl -L https://git.io/meshery | bash -|"],
              },
            ],
          }}
          steps={[
            {
              name: "Install",
              description: (
                <>
                  <p>
                    Meshery provides you with a clean, robust, streamlined command-line interface to manage your service meshes:
                  </p>
                  <p>
                    With <code>mesheryctl</code>, not only you can manage your service meshes, but you can also manage their workloads, mesure their performance, verify conformance to service mesh standards. You can also apply patterns.
                  </p>
                  <p>
                    <code>mesheryctl</code> provides support for all of Meshery's features and many platforms.
                  </p>
                </>
              ),
              logos: [
                {
                  url: require("../Meshery-platforms/supported-icons/homebrew.svg"),
                  alt: "Homebrew",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/kubernetes.svg"),
                  alt: "Kubernetes",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/kind.svg"),
                  alt: "KinD",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/minikube.svg"),
                  alt: "Minikube",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/eks.svg"),
                  alt: "AWS Elastic Kuberentes Service",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/helm-icon-color.png"),
                  alt: "Meshery Helm Chart",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/wsl2.svg"),
                  alt: "WSL2",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/gke.svg"),
                  alt: "GKE",
                },
                {
                  url: require("../Meshery-platforms/supported-icons/docker.svg"),
                  alt: "Docker",
                },
              ],
              terminal: {
                frameLength: 100,
                loop: false,
                lines: [
                  {
                    color: "white",
                    frames: 4,
                    code: [
                      "Extracting mesheryctl-latest",
                      "Extracting mesheryctl-latest .",
                      "Extracting mesheryctl-latest . .",
                      "Extracting mesheryctl-latest . . .",
                    ],
                  },
                  {
                    frames: 4,
                    code:
                      "Archive:  /Users/layer5/meshery.zip",
                    color: "gray",
                  },
                  {
                    frames: 4,
                    code: "inflating: LICENSE",
                    indent: 1,
                    short: true
                  },
                  {
                    frames: 2,
                    code: "inflating: README.md",
                    indent: 1,
                    short: true
                  },
                  {
                    frames: 2,
                    code: "inflating: mesheryctl",
                    indent: 1,
                    short: true
                  },
                  { code: " " },
                  {
                    frames: 2,
                    code: "Installing mesheryctl in /usr/local/bin",
                    color: "gray",
                  },
                  {
                    frames: 2,
                    code: "mesheryctl installed.",
                    color: "gray",
                  },
                  {
                    frames: 8,
                    code: [
                      "Removing installation files and starting Meshery",
                      "Removing installation files and starting Meshery.",
                      "Removing installation files and starting Meshery..",
                      "Removing installation files and starting Meshery...",
                      "Removing installation files and starting Meshery....",
                      "Removing installation files and starting Meshery.....",
                      "Removing installation files and starting Meshery......",
                      "Removing installation files and starting Meshery.......",
                    ],
                    color: "navy",
                  },
                  {
                    frames: 8,
                    code: [
                      "Pulling meshery",
                      "Pulling meshery           .",
                      "Pulling meshery           ..",
                      "Pulling meshery           ...",
                      "Pulling meshery           ... download complete",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-istio",
                      "Pulling meshery-istio     .",
                      "Pulling meshery-istio     ..",
                      "Pulling meshery-istio     ...",
                      "Pulling meshery-istio     ... done",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-kuma",
                      "Pulling meshery-kuma      .",
                      "Pulling meshery-kuma      ..",
                      "Pulling meshery-kuma      ...",
                      "Pulling meshery-kuma      ... done",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-consul",
                      "Pulling meshery-consul    .",
                      "Pulling meshery-consul    ..",
                      "Pulling meshery-consul    ...",
                      "Pulling meshery-consul    ... done",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-linkerd",
                      "Pulling meshery-linkerd   .",
                      "Pulling meshery-linkerd   ..",
                      "Pulling meshery-linkerd   ...",
                      "Pulling meshery-linkerd   ... done",
                    ],
                    short: true,
                    color: "gray",
                  },

                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-tanzu-sm",
                      "Pulling meshery-tanzu-sm  .",
                      "Pulling meshery-tanzu-sm  ..",
                      "Pulling meshery-tanzu-sm  ...",
                      "Pulling meshery-tanzu-sm  ... done",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-nsm",
                      "Pulling meshery-nsm       .",
                      "Pulling meshery-nsm       ..",
                      "Pulling meshery-nsm       ...",
                      "Pulling meshery-nsm       ... done",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-nginx-sm",
                      "Pulling meshery-nginx-sm  .",
                      "Pulling meshery-nginx-sm  ..",
                      "Pulling meshery-nginx-sm  ...",
                      "Pulling meshery-nginx-sm  ... done",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-citrix-sm",
                      "Pulling meshery-citrix-sm .",
                      "Pulling meshery-citrix-sm ..",
                      "Pulling meshery-citrix-sm ...",
                      "Pulling meshery-citrix-sm ... done",
                    ],
                    short: true,
                    color: "gray",
                  },

                  {
                    frames: 5,
                    code: [
                      "Pulling meshery-osm",
                      "Pulling meshery-osm       .",
                      "Pulling meshery-osm       ..",
                      "Pulling meshery-osm       ...",
                      "Pulling meshery-osm       ... done",
                    ],
                    short: true,
                    color: "gray",
                  },
                  {
                    frames: 1,
                    code: "\nManagement plane ready at: https://meshery.io/manage",
                    color: "green",
                  },
                ],
              },
            },
            {
              name: "Patterns",
              description: (
                <>
                  <p>
                    Meshery supports cloud native application patterns using a mesh-agnostic and application-holistic approach: patternfiles.
                  </p>
                  <p>
                    Patternfiles stems from multiple open needs, one of which is the desire to define a common practice of both configuring and operating service mesh functionality in a single, universal file.
                  </p>
                  <p>
                    With a patternfile, you cancapture service mesh behavior in a single file. You can access service mesh-specific differentiation while keeping your patterns short and simple.
                  </p>
                </>
              ),
              logos: [
                {
                  url: require("../../../assets/images/partners/oam.svg"),
                  alt: "Open Application Model",
                },
                {
                  url: require("../../../assets/images/image-hub/layer5-image-hub.svg"),
                  alt: "Image Hub",
                },
                // {
                //     url: require('./img/step-logos/netlify.svg'),
                //     alt: 'Netlify',
                // },
                // {
                //     url: require('./img/step-logos/amazon-ecs.svg'),
                //     alt: 'Amazon ECS',
                // },
                // {
                //     url: require('./img/step-logos/azure-container-service.svg'),
                //     alt: 'Azure Container Service',
                // },
                // {
                //     url: require('./img/step-logos/docker.svg'),
                //     alt: 'Docker',
                // },
                // {
                //     url: require('./img/step-logos/cloud-run.svg'),
                //     alt: 'Google Cloud Run',
                // },
                // {
                //     url: require('./img/step-logos/and-more.svg'),
                //     alt: 'and More',
                // },
              ],
              terminal: {
                frameLength: 100,
                loop: false,
                lines: [
                  {
                    color: "white",
                    frames: 4,
                    code: [
                      "» Deploying pattern",
                      "» Deploying pattern .",
                      "» Deploying pattern . .",
                      "» Deploying pattern . . .",
                    ],
                  },
                  {
                    frames: 5,
                    code:
                      "✓ Meshery connected to Kubernetes at https://kubernetes.example.com:6443",
                  },
                  {
                    frames: 2,
                    color: "gray",
                    code: [
                      "⠋ Preparing pattern deployment",
                      "⠙ Preparing pattner deployment",
                      "⠹ Preparing pattner deployment",
                      "⠸ Preparing pattner deployment",
                      "⠼ Preparing pattner deployment",
                      "⠴ Preparing pattner deployment",
                      "⠦ Preparing pattner deployment",
                      "⠧ Preparing pattner deployment",
                      "⠇ Preparing pattner deployment",
                      "⠏ Preparing pattner deployment",
                      "⠋ Preparing pattner deployment",
                      "⠙ Preparing pattner deployment",
                      "⠹ Preparing pattner deployment",
                      "⠸ Preparing pattner deployment",
                      "⠼ Preparing pattner deployment",
                      "⠴ Preparing pattner deployment",
                      "⠦ Preparing pattner deployment",
                      "⠧ Preparing pattner deployment",
                      "⠇ Preparing pattner deployment",
                      "⠏ Preparing pattner deployment",
                      "✓ Pattern deployed",
                    ],
                  },
                  {
                    frames: 2,
                    color: "gray",
                    code: [
                      "⠋ Waiting on pattern to become available: 1/1/0",
                      "⠙ Waiting on pattern to become available: 1/1/0",
                      "⠹ Waiting on pattern to become available: 1/1/0",
                      "⠸ Waiting on pattern to become available: 1/1/0",
                      "⠼ Waiting on pattern to become available: 1/1/0",
                      "⠴ Waiting on pattern to become available: 1/1/0",
                      "⠦ Waiting on pattern to become available: 1/1/0",
                      "⠧ Waiting on pattern to become available: 1/1/0",
                      "⠇ Waiting on pattern to become available: 1/1/0",
                      "⠏ Waiting on pattern to become available: 1/1/0",
                      "⠋ Waiting on pattern to become available: 1/1/0",
                      "⠙ Waiting on pattern to become available: 1/1/0",
                      "⠹ Waiting on pattern to become available: 1/1/0",
                      "⠸ Waiting on pattern to become available: 1/1/0",
                      "⠼ Waiting on pattern to become available: 1/1/0",
                      "⠴ Waiting on pattern to become available: 1/1/0",
                      "⠦ Waiting on pattern to become available: 1/1/0",
                      "⠧ Waiting on pattern to become available: 1/1/0",
                      "⠇ Waiting on pattern to become available: 1/1/0",
                      "⠏ Waiting on pattern to become available: 1/1/0",
                      "✓ Pattern successfully rolled out!",
                    ],
                  },
                  { code: "" },
                  {
                    frames: 2,
                    code:
                      "\nYour cloud native application pattern deployment was successful!",
                    color: "gray",
                  },
                  { code: "" },
                  {
                    frames: 1,
                    code:
                      "\nDeployment URL: https://meshery.local/patterns",
                    color: "green",
                  },
                ],
              },
            },
            {
              name: "Performance",
              description: (
                <>
                  <p>
                    Meshery provides service mesh and application performance measurement and management.
                  </p>
                  <p>
                    Meshery natively supports the <Link to="/projects/service-mesh-performance">Service Mesh Performance</Link> (SMP) specification.
                  </p>
                  <p>
                    Use performance test profiles to schedule and continuously verify your service mesh is performing in accordance with your SLOs.
                  </p>
                </>
              ),
              logos: [
                {
                  url: require("../../../assets/images/service-mesh-performance/icon/smp-dark.svg"),
                  alt: "ÎService Mesh Performance",
                },
                // {
                //     url: require('./img/step-logos/azure.svg'),
                //     alt: 'Microsoft Azure',
                // },
                // {
                //     url: require('./img/step-logos/gcp.svg'),
                //     alt: 'Google Cloud Platform',
                // },
                // {
                //     url: require('./img/step-logos/terraform.svg'),
                //     alt: 'Terraform',
                // },
                // {
                //     url: require('./img/step-logos/circleci.svg'),
                //     alt: 'CircleCI',
                // },
                // {
                //     url: require('./img/step-logos/slack.svg'),
                //     alt: 'Slack',
                // },
                // {
                //     url: require('./img/step-logos/github.svg'),
                //     alt: 'Github',
                // },
                // {
                //     url: require('./img/step-logos/and-more.svg'),
                //     alt: 'and More',
                // },
              ],
              terminal: {
                frameLength: 100,
                loop: false,
                lines: [
                  {
                    frames: 1,
                    color: "white",
                    code: [
                      "» Analyzing",
                      "» Analyzing .",
                      "» Analyzing . .",
                      "» Analyzing . . .",
                    ],
                  },
                  {
                    frames: 2,
                    code:
                      "✓ Meshery connected to Kubernetes at https://kubernetes.example.com:6443",
                  },
                  {
                    frames: 2,
                    color: "gray",
                    code: [
                      "⠋ Analyzing service mesh",
                      "⠙ Analyzing service mesh",
                      "⠹ Analyzing service mesh",
                      "⠸ Analyzing service mesh",
                      "⠼ Analyzing service mesh",
                      "⠴ Analyzing service mesh",
                      "⠦ Analyzing service mesh",
                      "⠧ Analyzing service mesh",
                      "⠇ Analyzing service mesh",
                      "⠏ Analyzing service mesh",
                      "⠋ Analyzing service mesh",
                      "⠙ Analyzing service mesh",
                      "⠹ Analyzing service mesh",
                      "⠸ Analyzing service mesh",
                      "⠼ Analyzing service mesh",
                      "⠴ Analyzing service mesh",
                      "⠦ Analyzing service mesh",
                      "⠧ Analyzing service mesh",
                      "⠇ Analyzing service mesh",
                      "⠏ Analyzing service mesh",
                      "✓ Analysis complete.",
                    ],
                  },
                  { code: "" },
                  {
                    frames: 2,
                    color: "white",
                    code: [
                      "» Preparing recommendations",
                      "» Preparing recommendations .",
                      "» Preparing recommendations . .",
                      "» Preparing recommendations . . .",
                    ],
                  },
                  {
                    frames: 2,
                    code: "  Patterns: 01EJCSFNDDD15P2BXBW2KCYVB2",
                    color: "navy",
                  },
                  { code: "" },
                  {
                    frames: 2,
                    code: "\nBest practice recommendations ready!",
                    color: "green",
                  },
                  { code: "" },
                  {
                    frames: 1,
                    code: "\nRecommendations URL: https://meshery.io/patterns",
                    color: "green",
                  },
                ],
              },
            },
          ]}
        />
      </Container>
    </MesheryWrapper>
  );
};

export default MesheryTerminal;

