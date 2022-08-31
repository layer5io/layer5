import React from "react";
import IntegrationsGrid from "./IntegrationsGrid";
import FAQ from "../../General/Faq";
import { IntegrationsWrapper } from "./Integration.style";
import Card from "./Card";
import { Location } from "@reach/router";





const Integrations = ({ location, data }) => {
  return (
    <IntegrationsWrapper>
      <section className="heading">
        <Location>
          {({ location }) => {
            if (location.pathname !== "/") return <>
              <h1>Built-In Integrations</h1>
              <h2>Support for your Cloud Native Infrastructure and Apps</h2>
            </>;
            return <>
              <h2>Built-In Integrations</h2>
              <h3>Support for your Cloud Native Infrastructure and Apps</h3>
            </>;
          }}
        </Location>
        <IntegrationsGrid />
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



