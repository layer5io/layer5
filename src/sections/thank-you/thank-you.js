import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import ThankYouWrapper from "./thank-you.style";

const ThankYouSection = () => {
  return (
    <ThankYouWrapper>
      <div className="parentcard">
        <h1>Thank you for subscribing!</h1>
      </div>
    </ThankYouWrapper>
  );
};

export default ThankYouSection;
