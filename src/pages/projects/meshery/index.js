import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/Navigation";
import Footer from "../../../sections/Footer";
import MesheryTerminal from "../../../sections/Meshery-terminal";
import MesheryPlatforms from "../../../sections/Meshery-platforms";
import Features from "../../../components/Features-carousel";
import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";
import { Container } from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";

const temp = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Meshery"/>
            <Navigation />
            <MesheryTerminal/>
            <MesheryPlatforms/>
            <Container>
                <div style = {{ marginTop: "400px", marginBottom: "100px",}}>
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
