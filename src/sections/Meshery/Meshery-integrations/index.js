import React from "react";
import loadable from "@loadable/component";
const IntegrationsGrid = loadable(() => import("./IntegrationsGrid"));
import FAQ from "../../General/Faq";
import { IntegrationsWrapper } from "./Integration.style";
import Card from "./Card";
import { Location } from "@reach/router";
import Button from "../../../reusecore/Button";

const Integrations = ({ theme }) => {
  return (
    <IntegrationsWrapper>
      <Location>
        {({ location }) => {
          if (location.pathname !== "/") {
            return (
              <>
                <IntegrationsGrid theme={theme} count={"All"} />
                <Card />
                <FAQ category={["Meshery Integrations"]} />
              </>
            );
          } else {
            return (
              <>
                <IntegrationsGrid theme={theme} count={13} />
                <div style={{ marginTop: "20px" }}>
                  <Button className="seeAll-btn"
                    primary
                    title={"See All"}
                    url="/cloud-native-management/meshery/integrations/"
                  />
                </div>
              </>
            );
          }
        }}
      </Location>
    </IntegrationsWrapper>
  );
};

export default Integrations;
