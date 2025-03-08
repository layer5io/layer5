import React from "react";
import { StepsIndicatorWrapper } from "./StepsIndicator.style";

const StepsIndicator = ({ steps, activeIndex }) => {
  return (
    <StepsIndicatorWrapper>
      {steps.map((step, index) => (
        <li
          key={step.name}
          className={index === activeIndex ? "active" : ""}
        >
          {step.name}
        </li>
      ))}
    </StepsIndicatorWrapper>
  );
};

export default StepsIndicator;
