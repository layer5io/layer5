import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Works from "../sections/ServiceMesh";
import Footer from "../sections/Footer";

import { Container } from "../reusecore/Layout";

const Howitworks = () => (
    <Layout>
        <SEO title="How the service mesh management plane, Meshery works" />
        <Navigation />
        <Container>
            <br></br>
            <Works
                title="Secure access to hosts and services"
                description="Traditional approaches like SSH bastion hosts or VPNs require distributing and managing credentials, configuring network controls like firewalls, and exposing the private network. Boundary provides a secure way to access hosts and critical systems without having to manage credentials or expose your network, and is entirely open source."
                features={[
                    {
                        title: "Main",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "Main",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "Main",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "Main",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "BG",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "BG",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "BG",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "BG",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    },
                    {
                        title: "BG",
                        description:
              "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials."
                    }
                ]}
            />
        </Container>
        <Footer />
    </Layout>
);
export default Howitworks;
