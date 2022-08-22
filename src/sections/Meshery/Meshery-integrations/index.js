import React from "react";
import IntegrationsGrid from "./IntegrationsGrid";
import FAQ from "../../General/Faq";
import { IntegrationsWrapper } from "./Integration.style";
import Card from "./Card";



const Integrations = () => {
  return (
    <IntegrationsWrapper>
      <section className="heading">
        <h1>Built-In Integrations</h1>
        <h2>Support for your Cloud Native Infrastructure and Apps</h2>
      </section>
      <IntegrationsGrid />
      <Card />
      <FAQ category={["Meshery Integrations"]} />
    </IntegrationsWrapper>
  );
};

export default Integrations;
