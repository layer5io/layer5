import React, { useEffect } from "react";
import FeatureWrapper from "./feature.style";
import { useInView } from "react-intersection-observer";

export default function Feature({
  title,
  description,
  icon,
  index,
  onInViewStatusChanged,
}) {
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    onInViewStatusChanged(inView, index);
  }, [inView]);

  return (
    <FeatureWrapper>
      <div className="root" ref={ref}>
        <div className="icon">
          {React.isValidElement(icon)
            ? icon
            : <img src={icon} alt="title"/>
          }
        </div>
        <div className="text">
          <h4>{title}</h4>
          {description}
        </div>
      </div>
    </FeatureWrapper>

  );
}
