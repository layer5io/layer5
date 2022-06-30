import React from "react";
import LogoList from "../../../../components/Logo-List";
import FeatureWrapper from "./feature.style";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Feature({
  title,
  description,
  icon,
  logos,
  onInViewStatusChanged,
}) {
  const [ref, inView] = useInView({ threshold: 0.8 });
  const [inViewStatus, setInViewStatus] = useState(false);
  if (inView !== inViewStatus) {
    setInViewStatus(inView);
    onInViewStatusChanged(inView);
  }

  return (
    <FeatureWrapper>
      <div className="root" ref={ref}>
        <div className="icon">
          <img src={icon} alt="title"/>
        </div>
        <div className="text">
          <h4>{title}</h4>
          {description}
          <br/>
          {logos ? <LogoList logos={logos} /> : null}
        </div>
      </div>
    </FeatureWrapper>

  );
}
