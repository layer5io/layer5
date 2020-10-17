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
            <SEO title="Mesheryctl" />
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
                                code: ['$ curl -L https://git.io/meshery | bash -', '$ curl -L https://git.io/meshery | bash -|'],
                            },
                        ],
                    }}
                    steps={[
                        {
                            name: 'Build',
                            description: (
                                <>
                                    <p>
                                        Meshery provides you with a clean, robust,
                                        streamlined command-line interface to manage
                                        and benchmark your service meshes, mesheryctl.

                                    </p>
                                    <p>
                                        With mesheryctl, not only you can manage your adapters &
                                        containers but you can also benchmark your mesh using the command line.
                                    </p>
                                    <p>
                                        mesheryctl provides support to a number of platforms so that we never miss out users.
                                    </p>
                                </>
                            ),
                            logos: [
                                // {
                                //     url: require('./img/step-logos/angular.svg'),
                                //     alt: 'Angular',
                                // },
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
                                        color: 'white',
                                        frames: 4,
                                        code: [
                                            'Extracting mesheryctl-v0.3.14',
                                            'Extracting mesheryctl-v0.3.14 .',
                                            'Extracting mesheryctl-v0.3.14 . .',
                                            'Extracting mesheryctl-v0.3.14 . . .',
                                        ],
                                    },
                                    {
                                        frames: 4,
                                        code:
                                            'Archive:  /Users/layer5/meshery.zip',
                                        color: 'gray',
                                    },
                                    {
                                        frames: 4,
                                        code: 'inflating: LICENSE',
                                        indent: 1,
                                        short: true
                                    },
                                    {
                                        frames: 2,
                                        code: 'inflating: README.md',
                                        indent: 1,
                                        short: true
                                    },
                                    {
                                        frames: 2,
                                        code: 'inflating: mesheryctl',
                                        indent: 1,
                                        short: true
                                    },
                                    { code: ' ' },
                                    {
                                        frames: 2,
                                        code: 'Installing mesheryctl in /usr/local/bin.',
                                        color: 'gray',
                                    },
                                    {
                                        frames: 2,
                                        code: 'mesheryctl installed.',
                                        color: 'gray',
                                    },
                                    {
                                        frames: 2,
                                        code: 'permissions moved to layer5',
                                        color: 'gray',
                                    },
                                    {
                                        frames: 8,
                                        code: [
                                            'Removing installation files and opening Meshery',
                                            'Removing installation files and opening Meshery.',
                                            'Removing installation files and opening Meshery..',
                                            'Removing installation files and opening Meshery...',
                                            'Removing installation files and opening Meshery...Updating Meshery now',
                                            'Removing installation files and opening Meshery...Updating Meshery now.',
                                            'Removing installation files and opening Meshery...Updating Meshery now..',
                                            'Removing installation files and opening Meshery...Updating Meshery now...',
                                        ],
                                        color: 'gray',
                                    },
                                    {
                                        frames: 8,
                                        code: [
                                            'Pulling meshery',
                                            'Pulling meshery          .',
                                            'Pulling meshery          ..',
                                            'Pulling meshery          ...',
                                            'Pulling meshery          ... download complete',
                                        ],
                                        short: true
                                    },
                                    {
                                        frames: 5,
                                        code: [
                                            'Pulling meshery-linkerd',
                                            'Pulling meshery-linkerd  .',
                                            'Pulling meshery-linkerd  ..',
                                            'Pulling meshery-linkerd  ...',
                                            'Pulling meshery-linkerd  ... done',
                                        ],
                                        short: true
                                    },
                                    {
                                        frames: 5,
                                        code: [
                                            'Pulling meshery-consul',
                                            'Pulling meshery-consul   .',
                                            'Pulling meshery-consul   ..',
                                            'Pulling meshery-consul   ...',
                                            'Pulling meshery-consul   ... done',
                                        ],
                                        short: true
                                    },
                                    {
                                        frames: 5,
                                        code: [
                                            'Pulling meshery-octarine',
                                            'Pulling meshery-octarine .',
                                            'Pulling meshery-octarine ..',
                                            'Pulling meshery-octarine ...',
                                            'Pulling meshery-octarine ... done',
                                        ],
                                        short: true
                                    },
                                    {
                                        frames: 5,
                                        code: [
                                            'Pulling meshery-nsm',
                                            'Pulling meshery-nsm      .',
                                            'Pulling meshery-nsm      ..',
                                            'Pulling meshery-nsm      ...',
                                            'Pulling meshery-nsm      ... done',
                                        ],
                                        short: true
                                    },
                                    {
                                        frames: 5,
                                        code: [
                                            'Pulling meshery-cpx',
                                            'Pulling meshery-cpx      .',
                                            'Pulling meshery-cpx      ..',
                                            'Pulling meshery-cpx      ...',
                                            'Pulling meshery-cpx      ... done',
                                        ],
                                        short: true
                                    },
                                    {
                                        frames: 5,
                                        code: [
                                            'Pulling watchtower',
                                            'Pulling watchtower       .',
                                            'Pulling watchtower       ..',
                                            'Pulling watchtower       ...',
                                            'Pulling watchtower       ... done',
                                        ],
                                        short: true
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Deploy',
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
                                //     url: require('./img/step-logos/kubernetes.svg'),
                                //     alt: 'Kubernetes',
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
                                        color: 'white',
                                        frames: 4,
                                        code: [
                                            '» Deploying',
                                            '» Deploying .',
                                            '» Deploying . .',
                                            '» Deploying . . .',
                                        ],
                                    },
                                    {
                                        frames: 5,
                                        code:
                                            '✓ Kubernetes client connected to https://kubernetes.example.com:6443',
                                    },
                                    {
                                        frames: 2,
                                        color: 'gray',
                                        code: [
                                            '⠋ Preparing deployment',
                                            '⠙ Preparing deployment',
                                            '⠹ Preparing deployment',
                                            '⠸ Preparing deployment',
                                            '⠼ Preparing deployment',
                                            '⠴ Preparing deployment',
                                            '⠦ Preparing deployment',
                                            '⠧ Preparing deployment',
                                            '⠇ Preparing deployment',
                                            '⠏ Preparing deployment',
                                            '⠋ Preparing deployment',
                                            '⠙ Preparing deployment',
                                            '⠹ Preparing deployment',
                                            '⠸ Preparing deployment',
                                            '⠼ Preparing deployment',
                                            '⠴ Preparing deployment',
                                            '⠦ Preparing deployment',
                                            '⠧ Preparing deployment',
                                            '⠇ Preparing deployment',
                                            '⠏ Preparing deployment',
                                            '✓ Created deployment',
                                        ],
                                    },
                                    {
                                        frames: 2,
                                        color: 'gray',
                                        code: [
                                            '⠋ Waiting on deployment to become available: 1/1/0',
                                            '⠙ Waiting on deployment to become available: 1/1/0',
                                            '⠹ Waiting on deployment to become available: 1/1/0',
                                            '⠸ Waiting on deployment to become available: 1/1/0',
                                            '⠼ Waiting on deployment to become available: 1/1/0',
                                            '⠴ Waiting on deployment to become available: 1/1/0',
                                            '⠦ Waiting on deployment to become available: 1/1/0',
                                            '⠧ Waiting on deployment to become available: 1/1/0',
                                            '⠇ Waiting on deployment to become available: 1/1/0',
                                            '⠏ Waiting on deployment to become available: 1/1/0',
                                            '⠋ Waiting on deployment to become available: 1/1/0',
                                            '⠙ Waiting on deployment to become available: 1/1/0',
                                            '⠹ Waiting on deployment to become available: 1/1/0',
                                            '⠸ Waiting on deployment to become available: 1/1/0',
                                            '⠼ Waiting on deployment to become available: 1/1/0',
                                            '⠴ Waiting on deployment to become available: 1/1/0',
                                            '⠦ Waiting on deployment to become available: 1/1/0',
                                            '⠧ Waiting on deployment to become available: 1/1/0',
                                            '⠇ Waiting on deployment to become available: 1/1/0',
                                            '⠏ Waiting on deployment to become available: 1/1/0',
                                            '✓ Deployment successfully rolled out!',
                                        ],
                                    },
                                    { code: '' },
                                    {
                                        frames: 2,
                                        code:
                                            '\nThe deploy was successful!',
                                        color: 'gray',
                                    },
                                    { code: '' },
                                    {
                                        frames: 1,
                                        code:
                                            '\nDeployment URL: http://meshery.io/',
                                        color: 'green',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Release',
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
                                        frames: 2,
                                        color: 'white',
                                        code: [
                                            '» Releasing',
                                            '» Releasing .',
                                            '» Releasing . .',
                                            '» Releasing . . .',
                                        ],
                                    },
                                    {
                                        frames: 2,
                                        code:
                                            '✓ Kubernetes client connected to https://kubernetes.example.com:6443',
                                    },
                                    {
                                        frames: 2,
                                        color: 'gray',
                                        code: [
                                            '⠋ Preparing service',
                                            '⠙ Preparing service',
                                            '⠹ Preparing service',
                                            '⠸ Preparing service',
                                            '⠼ Preparing service',
                                            '⠴ Preparing service',
                                            '⠦ Preparing service',
                                            '⠧ Preparing service',
                                            '⠇ Preparing service',
                                            '⠏ Preparing service',
                                            '⠋ Preparing service',
                                            '⠙ Preparing service',
                                            '⠹ Preparing service',
                                            '⠸ Preparing service',
                                            '⠼ Preparing service',
                                            '⠴ Preparing service',
                                            '⠦ Preparing service',
                                            '⠧ Preparing service',
                                            '⠇ Preparing service',
                                            '⠏ Preparing service',
                                            '✓ Service is ready!',
                                        ],
                                    },
                                    { code: '' },
                                    {
                                        frames: 4,
                                        color: 'white',
                                        code: [
                                            '» Pruning old deployments',
                                            '» Pruning old deployments .',
                                            '» Pruning old deployments . .',
                                            '» Pruning old deployments . . .',
                                        ],
                                    },
                                    {
                                        frames: 2,
                                        code: '  Deployment: 01EJCSFNDDD15P2BXBW2KCYVB2',
                                        color: 'navy',
                                    },
                                    { code: '' },
                                    {
                                        frames: 2,
                                        code: '\nThe release was successful!',
                                        color: 'green',
                                    },
                                    { code: '' },
                                    {
                                        frames: 1,
                                        code: '\nRelease URL: https://www.example.com',
                                        color: 'green',
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
