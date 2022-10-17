import React from "react";
import IntegrationsGrid from "./IntegrationsGrid";
import FAQ from "../../General/Faq";
import { IntegrationsWrapper } from "./Integration.style";
import Card from "./Card";
import { Location } from "@reach/router";





const Integrations = ({ theme }) => {
  return (
    <IntegrationsWrapper>
      <section className="heading">
        <h1>Built-In Integrations</h1>
        <h2>Support for your Cloud Native Infrastructure and Apps</h2>
        <IntegrationsGrid theme={theme}/>
        <Location>
          {({ location }) => {
            if (location.pathname !== "/") return <>
              <Card /><FAQ category={["Meshery Integrations"]} />
            </>;
          }}
        </Location>
      </section>
    </IntegrationsWrapper>
  );
};

export default Integrations;



