import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/Navigation";
import HowMehseryWorks from "../../../sections/Meshery/How-meshery-works";
import Footer from "../../../sections/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";
import { Container } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";


import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";


const Howitworks = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Meshery, Multi-Mesh Manager" />
      <Navigation />
      <HowMehseryWorks
        title="How Meshery Manages Meshes"
        description="As the multi-mesh manager, Meshery offers support for more adapters than any other project or product in the world. Meshery uses adapters for managing the various service meshes."
        features={[
          {
            title: "Supporting Service Mesh Interface",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Adapters allow Meshery to interface with the different service meshes, exposing their differentiated value to users.</p>,
          },
          {
            title: "Adapters should avoid wheel reinvention, but seek to leverage the functionality provided by service meshes under management.",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>This both reduces sustaining costs and improves reliability</p>,
          },
          {
            title: "Each service mesh adapter is unique",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Every Meshery Adapter provides a common substrate of support for every service mesh, offering a
                      standard set of management features across all service meshes. Carre is taken in each Meshery Adapters
                      to also expose the unique value of each service mesh. Consequently, each Meshery Adapter is not equally capable just as each service mesh is not equally
                      capable as another service mesh.</p>,
          },
          {
            title: "Main",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Automate credential injection to securely access services and
                      hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials.</p>,
          },
          {
            title: "BG",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials.</p>,
          },
          {
            title: "Managing multiple instances of the same type of service mesh",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Adapters establish
                      communication with Kubernetes and a specific type of service mesh.
                      Multiple adapters of the same type may be deployed concurrently. Although,
                      this isn’t strictly necessary for Meshery to communicate to more than one instance of the same type of service mesh.
                      See the <a href='https://docs.meshery.io/guides/multiple-adapters' target="_blank" rel="noreferrer">Using Multiple Adapters</a> guide for more information.</p>,
          },
          {
            title: "BG",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials.</p>,
          },
          {
            title: "BG",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials.</p>,
          },
          {
            title: "BG",
            icon: require("../../../sections/Meshery/How-meshery-works/icons/consulicon.svg"),
            description:
                  <p>Automate credential injection to securely access services and hosts with HashiCorp Vault. Reduce risk of leaking credentials with dynamic secrets and just-in-time credentials.</p>,
          },
        ]}/>
      <Container>
        <SectionTitle
          leftAlign={false}
          UniWidth="100%"
        >
          <h3>Where you find a Kubernetes,
you’ll find a service mesh.</h3>
          <p>Service meshes are the third major step in enterprises cloud native journeys.</p>
          <VintageBox left={true} vintageTwo={true} >
            <Button
              primary
              className="about-button"
              url="./getting-started"
              title="Install Meshery"
              external="false"
            />
          </VintageBox>
        </SectionTitle>
      </Container>
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Howitworks;
