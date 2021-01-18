import React from "react";
import styled from "styled-components";
import {Container} from "../../../reusecore/Layout";
import Terminal from "../../../components/Terminal";
import Features from "../../../components/Features-carousel";

const MesheryFeaturesWrapper = styled.div`
    margin: 6.25rem auto;
    @media (max-width: 32rem){
        margin-top: 10rem;
    }
`;


const MehseryFeatures = () => {
    return(
        <MesheryFeaturesWrapper>
            <Container>
                <Features
                    features={[
                        {
                            title: "Operational Best Practices",
                            description:
                                "Benefit from the operational expertise of the world’s foremost service mesh operators.",
                            learnMoreLink: "/",
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
                            learnMoreLink: "/",
                            content: (
                                <img
                                    src={require("./feature-images/meshery-wasm.png")}
                                    alt="WebAssembly Filters for Envoy"
                                />
                            ),
                        },
                        {
                            title: "Integration with Grafana and Prometheus",
                            description:
                                "Get publicly accessible preview URLs per-deployment",
                            learnMoreLink: "/",
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
                            title: "Kubernetes Operator",
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
                            title: "MeshSync",
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
                        {
                            title: "Extensible Management Plane",
                            description:
                                "View projects and applications being deployed by meshery in a web interface",
                            content: (
                                <img
                                    src={require("../../../assets/images/workshops/workshops.png")}
                                    alt="Web UI"
                                />
                            ),
                        },
                    ]}
                />
            </Container>
        </MesheryFeaturesWrapper>
    );
};

export default MehseryFeatures;
