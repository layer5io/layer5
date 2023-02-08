import React from "react";
import FeatureWrapper from "./features.style";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Feature({
  description,
  onInViewStatusChanged,
}) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [inViewStatus, setInViewStatus] = useState(false);
  if (inView !== inViewStatus) {
    setInViewStatus(inView);
    onInViewStatusChanged(inView);
  }

  return (
    <FeatureWrapper>
      <div className="root">
        <div ref={ref} className="text" id = {inView ? "inView" : "notInView"}>
          {description}
        </div>
      </div>
    </FeatureWrapper>

  );
}
