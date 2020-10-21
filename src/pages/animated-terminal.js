import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";
import AnimatedStepsList from "../components/Animated-steps-list";
import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";
import { Container, Row, Col } from "../reusecore/Layout";

const temp = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="mesheryctl | Command Line Management of Service Meshes" />
            <Navigation />
            <Container>
                <div style = {{ marginTop: "970px", marginBottom: "500px",}}>
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
                                            Meshery provides you with a clean, robust, streamlined command-line interface to manage your service meshes: <code>mesheryctl</code>.
                                        </p>
                                        <p>
                                            With <code>mesheryctl</code>, not only you can manage your service meshes, but you can also manage their workloads using the command line.
                                        </p>
                                        <p>
                                            <code>mesheryctl</code> provides support for all of Meshery's features.
                                        </p>
                                    </>
                                ),
                                logos: [
                                    {
                                        url: require("../assets/images/mesheryctl/kubernetes.svg"),
                                        alt: "Kubernetes",
                                    }
                                // {
                                //     url: require('./img/step-logos/react.svg'),
                                //     alt: 'React',
                                // },
                                // {
                                //     url: require('./img/step-logos/ruby.svg'),
                                //     alt: 'Ruby',
                                // },
                                // {
                                //     url: require('./img/step-logos/python.svg'),
                                //     alt: 'Python',
                                // },
                                // {
                                //     url: require('./img/step-logos/go.svg'),
                                //     alt: 'Go',
                                // },
                                // {
                                //     url: require('./img/step-logos/nodejs.svg'),
                                //     alt: 'Node.js',
                                // },
                                // {
                                //     url: require('./img/step-logos/nextjs.svg'),
                                //     alt: 'Next.js',
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
                                name: "Deploy",
                                description: (
                                    <>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </>
                                ),
                                logos: [
                                // {
                                //     url: require("../assets/images/image-hub/layer5-image-hub.svg"),
                                //     alt: "Image Hub",
                                // },
                                // {
                                //     url: require('./img/step-logos/nomad.svg'),
                                //     alt: 'Nomad',
                                // },
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
                                                "» Deploying",
                                                "» Deploying .",
                                                "» Deploying . .",
                                                "» Deploying . . .",
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
                                                "⠋ Preparing deployment",
                                                "⠙ Preparing deployment",
                                                "⠹ Preparing deployment",
                                                "⠸ Preparing deployment",
                                                "⠼ Preparing deployment",
                                                "⠴ Preparing deployment",
                                                "⠦ Preparing deployment",
                                                "⠧ Preparing deployment",
                                                "⠇ Preparing deployment",
                                                "⠏ Preparing deployment",
                                                "⠋ Preparing deployment",
                                                "⠙ Preparing deployment",
                                                "⠹ Preparing deployment",
                                                "⠸ Preparing deployment",
                                                "⠼ Preparing deployment",
                                                "⠴ Preparing deployment",
                                                "⠦ Preparing deployment",
                                                "⠧ Preparing deployment",
                                                "⠇ Preparing deployment",
                                                "⠏ Preparing deployment",
                                                "✓ Created deployment",
                                            ],
                                        },
                                        {
                                            frames: 2,
                                            color: "gray",
                                            code: [
                                                "⠋ Waiting on deployment to become available: 1/1/0",
                                                "⠙ Waiting on deployment to become available: 1/1/0",
                                                "⠹ Waiting on deployment to become available: 1/1/0",
                                                "⠸ Waiting on deployment to become available: 1/1/0",
                                                "⠼ Waiting on deployment to become available: 1/1/0",
                                                "⠴ Waiting on deployment to become available: 1/1/0",
                                                "⠦ Waiting on deployment to become available: 1/1/0",
                                                "⠧ Waiting on deployment to become available: 1/1/0",
                                                "⠇ Waiting on deployment to become available: 1/1/0",
                                                "⠏ Waiting on deployment to become available: 1/1/0",
                                                "⠋ Waiting on deployment to become available: 1/1/0",
                                                "⠙ Waiting on deployment to become available: 1/1/0",
                                                "⠹ Waiting on deployment to become available: 1/1/0",
                                                "⠸ Waiting on deployment to become available: 1/1/0",
                                                "⠼ Waiting on deployment to become available: 1/1/0",
                                                "⠴ Waiting on deployment to become available: 1/1/0",
                                                "⠦ Waiting on deployment to become available: 1/1/0",
                                                "⠧ Waiting on deployment to become available: 1/1/0",
                                                "⠇ Waiting on deployment to become available: 1/1/0",
                                                "⠏ Waiting on deployment to become available: 1/1/0",
                                                "✓ Deployment successfully rolled out!",
                                            ],
                                        },
                                        { code: "" },
                                        {
                                            frames: 2,
                                            code:
                                            "\nThe service mesh deployment was successful!",
                                            color: "gray",
                                        },
                                        { code: "" },
                                        {
                                            frames: 1,
                                            code:
                                            "\nDeployment URL: http://meshery.io/mesh",
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </>
                                ),
                                logos: [
                                // {
                                //     url: require('./img/step-logos/aws.svg'),
                                //     alt: 'Amazon Web Services',
                                // },
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
                                            frames: 4,
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
                </div>
            </Container>
            <Footer />
        </Layout>
    </ThemeProvider>
);

export default temp;
