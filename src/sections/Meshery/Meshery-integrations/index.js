import React, { Suspense } from "react";
import Loading from "../../../components/loading";
const IntegrationsGrid = React.lazy(() => import("./IntegrationsGrid"));
import FAQ from "../../General/Faq";
import { IntegrationsWrapper } from "./Integration.style";
import Card from "./Card";
import { Location } from "@reach/router";
import Button from "../../../reusecore/Button";

const Integrations = () => {
  return (
    <IntegrationsWrapper>
      <Location>
        {({ location }) => {
          if (location.pathname !== "/") {
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <IntegrationsGrid  count={"All"} />
                </Suspense>
                <Card />
                <FAQ category={["Meshery Integrations"]} />
              </>
            );
          } else {
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <IntegrationsGrid  count={13} />
                </Suspense>
                <div style={{ marginTop: "20px" }}>
                  <Button className="seeAllBtn"
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
