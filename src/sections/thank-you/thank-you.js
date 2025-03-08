import React from "react";
import LearnServiceMeshCTA from "../Learn/Learn-Service-Mesh-CTA";
import ThankYouWrapper from "./thank-you.style";

const ThankYouSection = () => {
  return (
    <ThankYouWrapper>
      <div className="parentcard">
        <h1>Thank you for subscribing!</h1>
      </div>
      <LearnServiceMeshCTA />
    </ThankYouWrapper>
  );
};

export default ThankYouSection;
