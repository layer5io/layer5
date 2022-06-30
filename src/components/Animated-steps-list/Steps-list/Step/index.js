import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LogoList from "../../../Logo-List";
import { StepWrapper } from "./Step.style";

const Step =({ name, description, logos, onInViewStatusChanged }) => {
  const [ref, inView] = useInView({ threshold : 0.4 });
  const [inViewStatus, setInViewStatus] = useState(false);

  useEffect(() => {
    if (inView !== inViewStatus) {
      setInViewStatus(inView);
      onInViewStatusChanged(inView);
    }
  }, [inView, inViewStatus]);

  return (
    <StepWrapper ref={ref}>
      <h3>{name}</h3>
      <div className="description">{description}</div>
      <LogoList className="logo-list" logos={logos} />
    </StepWrapper>
  );
};

export default Step;
