import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Works from "../sections/How-it-works";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import { Container } from "../reusecore/Layout";

const Howitworks = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="How the service mesh management plane, Meshery works" />
      <Navigation />
      <Container>
        <br></br>
        <Works
          title="Secure access to hosts and services"
          description="Traditional approaches like SSH bastion hosts or VPNs require distributing and managing credentials, configuring network controls like firewalls, and exposing the private network. Boundary provides a secure way to access hosts and critical systems without having to manage credentials or expose your network, and is entirely open source."
          features={[
            {
              title: "Authenticate",
              description:
                  "Authenticate with any trusted identity provider you are already using. No need to distribute new credentials and manage them.",
              logos: [
                {
                  alt: "GitHub",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "AWS",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Microsoft Azure",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Google Cloud Platform",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Okta",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Ping",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "More integrations",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
              ],
            },
            {
              title: "Authorize",
              description:
                  "Authorize access based on logical roles and services, instead of physical IP addresses. Manage dynamic infrastructure and integrate service registries so hosts and service catalogs are kept up-to-date.",
              logos: [
                {
                  alt: "Consul",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "AWS",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Microsoft Azure",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Terraform",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Google Cloud Platform",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  alt: "Kubernetes",
                  url: require("../assets/images/How-It-works/aws.svg"),
                },
                {
                  url: require("../assets/images/How-It-works/aws.svg"),
                  alt: "More integrations",
                },
              ],
            },
            {
              title: "Access",
              description:
                  "Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials.",
            },
          ]}/>
      </Container>
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Howitworks;
