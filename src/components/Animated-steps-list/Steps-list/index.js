import React, { useState } from "react";
import { StepsListWrapper } from "./StepsList.style";
import Step from "./Step";

const StepsList = ({ steps, className, onFocusedIndexChanged }) => {
  const [viewportStatus, setViewportStatus] = useState(
    new Array(steps.length).fill(false)
  );
  const [focusedStepIndex, setFocusedStepIndex] = useState(0);
  return (
    <StepsListWrapper>
      <ul className={`steps-list ${className}`}>
        {steps.map((step, index) => (
          <Step
            key={step.name}
            onInViewStatusChanged={(status) => {
              // Determine the new status array of the view status
              const newStatusArray = [...viewportStatus];
              newStatusArray[index] = status;
              setViewportStatus(newStatusArray);

              // Calculate the first element in focus, set that as
              // our new focusedStepIndex. If it's been updated
              // notify the subscriber.
              const newFocusIndex = newStatusArray.indexOf(true);
              if (focusedStepIndex !== newFocusIndex && newFocusIndex !== -1) {
                setFocusedStepIndex(newFocusIndex);
                onFocusedIndexChanged(newFocusIndex);
              }
            }}
            {...step}
          />
        ))}
      </ul>
    </StepsListWrapper>
  );
};

export default StepsList;
