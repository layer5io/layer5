import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/Navigation";
import Footer from "../../../sections/Footer";
import AnimatedStepsList from "../../../components/Animated-steps-list";
import Hero from "../../../components/Animated-steps-list/hero";
import Features from "../../../components/Features-carousel";
import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";
import { Container } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";

const temp = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="mesheryctl | Command Line Management of Service Meshes" />
            <Navigation />
            <Container>
                <Hero
                    title="Install. Deploy. Patters."
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, adipiscing"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    links={[
                        {
                            text: "Get Started",
                            url: "/",
                            type: "inbound",
                        },
                    ]}
                />
                <div style = {{  marginBottom: "400px",}}>
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
                                        url: require("../../../assets/images/mesheryctl/kubernetes.svg"),
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
                <div style = {{ marginBottom: "100px",}}>
                    <Features
                        features={[
                            {
                                title: "Application Logs",
                                description:
                                    "View log output for running applications and deployments",
                                learnMoreLink: "/",
                                content: (
                                    <Terminal
                                        lines={[
                                            { code: "$ meshery logs" },
                                            {
                                                code: "[11] Puma starting in cluster mode...",
                                                color: "gray",
                                            },
                                            {
                                                code:
                                                    "[11] * Version 3.11.2 (ruby 2.6.6-p146), codename: Love Song",
                                                color: "gray",
                                            },
                                            {
                                                code: "[11] * Min threads: 5, max threads: 5",
                                                color: "gray",
                                            },
                                            { code: "[11] * Environment: production", color: "gray" },
                                            { code: "[11] * Process workers: 2", color: "gray" },
                                            { code: "[11] * Preloading application", color: "gray" },
                                            {
                                                code: "[11] * Listening on tcp://0.0.0.0:3000",
                                                color: "gray",
                                            },
                                            {
                                                code:
                                                    "I, [2020-09-23T19:38:59.250971 #17] INFO -- : [936a952c-76b1-41f0-a4fe-ae2b77afc398] Started GET \"/\" for 10.36.5.1 at 2020-09-23 19:38:59 +0000",
                                                color: "gray",
                                            },
                                        ]}
                                    />
                                ),
                            },
                            {
                                title: "Live Exec",
                                description:
                                    "Execute a command in the context of a running application",
                                learnMoreLink: "/docs/exec",
                                content: (
                                    <Terminal
                                        lines={[
                                            { code: "$ meshery exec bash" },
                                            {
                                                code: "Connected to deployment v18",
                                                color: "gray",
                                            },
                                            {
                                                code: "$ rake db:migrate",
                                                color: "white",
                                            },
                                        ]}
                                    />
                                ),
                            },
                            {
                                title: "Preview URLs",
                                description:
                                    "Get publicly accessible preview URLs per-deployment",
                                learnMoreLink: "/docs/url",
                                content: (
                                    <Terminal
                                        lines={[
                                            { code: "$ meshery deploy" },
                                            { code: "" },
                                            { code: "» Deploying...", color: "white" },
                                            {
                                                code: "✓ Deployment successfully rolled out!",
                                                color: "navy",
                                            },
                                            { code: "\n" },
                                            { code: "» Releasing...", color: "white" },
                                            {
                                                code: "✓ Service successfully configured!",
                                                color: "navy",
                                            },
                                            { code: "\n" },
                                            {
                                                code:
                                                    "The deploy was successful! A meshery URL is shown below.",
                                                color: "white",
                                            },
                                            { code: "\n" },
                                            {
                                                code:
                                                    "   Release URL: https://admittedly-poetic-joey.meshery.run",
                                                color: "white",
                                            },
                                            {
                                                code:
                                                    "Deployment URL: https://admittedly-poetic-joey--v18.meshery.run",
                                                color: "white",
                                            },
                                        ]}
                                    />
                                ),
                            },

                            {
                                title: "Web UI",
                                description:
                                    "View projects and applications being deployed by meshery in a web interface",
                                content: (
                                    <img
                                        src={require("../../../assets/images/workshops/workshops.png")}
                                        alt="Web UI"
                                    />
                                ),
                            },
                            {
                                title: "CI/CD and Version Control Integration",
                                description:
                                    "Integrate with existing CI/CD providers and version control providers like GitHub, CircleCI, Jenksins, and more",
                                learnMoreLink: "/",
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
                                title: "Extensible Plugin Interface",
                                description:
                                    "Easily extend Meshery with custom support for platforms, build processes, and release systems.",
                                learnMoreLink: "/",
                                content: (
                                    <Terminal
                                        title="plugin.go"
                                        lines={[
                                            {
                                                code: "// Destroy deletes the Nomad job.",
                                            },
                                            {
                                                code: "func (p *Platform) Destroy(",
                                                color: "white",
                                            },
                                            {
                                                indent: 1,
                                                code: "ctx context.Context,",
                                                color: "white",
                                            },
                                            {
                                                indent: 1,
                                                code: "log hclog.Logger,",
                                                color: "white",
                                            },
                                            {
                                                indent: 1,
                                                code: "deployment *Deployment,",
                                                color: "white",
                                            },
                                            {
                                                indent: 1,
                                                code: "ui terminal.UI,",
                                                color: "white",
                                            },
                                            {
                                                code: ") error {",
                                                color: "white",
                                            },
                                            {
                                                indent: 1,
                                                code: "client, err := api.NewClient(api.DefaultConfig())",
                                                color: "white",
                                            },
                                            {
                                                indent: 1,
                                                code: "if err != nil {",
                                                color: "gray",
                                            },
                                            {
                                                indent: 2,
                                                code: "return err",
                                                color: "gray",
                                            },
                                            {
                                                indent: 1,
                                                code: "}",
                                                color: "gray",
                                            },
                                            {
                                                indent: 1,
                                                code: "",
                                                color: "gray",
                                            },
                                            {
                                                indent: 1,
                                                code: "st.Update(\"Deleting job...\")",
                                                color: "gray",
                                            },
                                            {
                                                indent: 1,
                                                code:
                                                    "_, _, err = client.Jobs().Deregister(deployment.Id, true, nil)",
                                                color: "navy",
                                            },
                                            {
                                                indent: 1,
                                                code: "return err",
                                                color: "gray",
                                            },
                                            {
                                                code: "}",
                                                color: "white",
                                            },
                                        ]}
                                    />
                                ),
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
