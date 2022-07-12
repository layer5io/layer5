import React from "react";
import styled from "styled-components";
import IntegrationList from "../../../assets/data/integrations/IntegrationList";

const Honeycomb = styled.div`
  display: flex;
`;
function IntegrationsGrid() {
  return (
    <Honeycomb>
      <div className="integration-list"></div>
    </Honeycomb>
  );
}

export default IntegrationsGrid;
