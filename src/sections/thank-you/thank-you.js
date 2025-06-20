import React from "react";
import KanvasCTA from "../../sections/Kanvas/kanvas-cta";
import ThankYouWrapper from "./thank-you.style";

const ThankYouSection = () => {
  return (
    <ThankYouWrapper>
      <div className="parentcard">
        <h1>Thank you for subscribing!</h1>
      </div>
       <KanvasCTA />
    </ThankYouWrapper>
  );
};

export default ThankYouSection;
