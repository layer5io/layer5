import React from "react";
import ListIntegration from "./list-integration.svg";
import MissingIntegration from "./missing-integration.svg";
import Button from "../../../reusecore/Button";
import { IntegrationCard } from "./Integration.style";
import ContactFormModal from "../../../components/Contact-Modal";

const Card = () => {
  return (
    <IntegrationCard>
      <div className="container">
        <img src={MissingIntegration} alt="missing integration icon" />
        <h2>Missing an Integration?</h2>
        <p>Meshery is an extensible  platform with many purpose-built extension points. Use Meshery’s REST API or its GraphQL API both of which allow you to connect to any Kubernetes-native app.</p>
        <Button
          secondary
          title="Learn about Extension Points"
          url="https://docs.meshery.io/extensibility"
        />
      </div>
      <div className="container">
        <img src={ListIntegration} alt="List your integration icon" />
        <h2>Want your app listed?</h2>
        <p>Learn more about submitting an integration and partnership opportunities.</p>
        <ContactFormModal callout_text="Contact Us" form_header="Send Us An Email" />
      </div>
    </IntegrationCard>
  );
};

export default Card;