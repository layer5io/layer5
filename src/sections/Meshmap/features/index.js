/* eslint-disable */
import React from "react";
import LogoList from "../../../components/Logo-List";
import FeatureWrapper from "./features.style";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
import { triggerDateSelect } from "@fullcalendar/react";

export default function Feature({
  title,
  description,
  icon,
  logos,
  onInViewStatusChanged,
}) {
  const [ref, inView] = useInView({ threshold: 0.8 });
  const [inViewStatus, setInViewStatus] = useState(false);
  const [fix, setFix] = useState(false);
  if (inView !== inViewStatus) {
    setInViewStatus(inView);
    onInViewStatusChanged(inView);
  }


  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 1660)
        setFix(true);
      else
        setFix(false);
    };
    window.addEventListener("scroll", setFixed);
  }, []);



  return (
    <FeatureWrapper>
      <div className="root" ref={ref}>
        <div className="text">{
          (title != "") &&
          <h4 className={fix ? "fixed" : ""}> {title}</h4>}
          {description}
          {logos ? <LogoList logos={logos} /> : null}
        </div>
      </div>
    </FeatureWrapper>

  );
}
