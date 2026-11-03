import React from "react";
import { StepsIndicatorWrapper } from "./StepsIndicator.style";

const StepsIndicator = ({ steps, activeIndex, onItemClick }) => {
  return (
    <StepsIndicatorWrapper aria-label="Getting started steps">
      <ul className="indicator-list">
        {steps.map((step, index) => {
          const stepId =
            step.id || step.name.toLowerCase().replace(/\s+/g, "-");
          return (
            <li
              key={step.name}
              className={index === activeIndex ? "active" : ""}
            >
              <a
                href={`#${stepId}`}
                className="indicator-link"
                onClick={(e) => {
                  if (
                    e.button === 0 &&
                    !e.defaultPrevented &&
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !e.altKey &&
                    !e.shiftKey
                  ) {
                    if (onItemClick) {
                      const handled = onItemClick(index);
                      if (handled) {
                        e.preventDefault();
                      }
                    }
                  }
                }}
                aria-current={index === activeIndex ? "step" : undefined}
                aria-label={`Scroll to ${step.name} step`}
              >
                {step.name}
              </a>
            </li>
          );
        })}
      </ul>
    </StepsIndicatorWrapper>
  );
};

export default StepsIndicator;
