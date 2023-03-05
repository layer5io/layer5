import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const useGsapTimeline = ({ trigger, featureContainerName }) => {

  const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
  const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
  const DURATION = RECIPROCAL_GR;

  useEffect(() => {
    const _timeline = gsap.timeline({
      defaults: {
        duration: DURATION,
        ease: "sine.out",
      },
      paused: true,
      smoothChildTiming: true,
      scrollTrigger: {
        trigger,
        start: "top top+=96px",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true
      },
    });

    _timeline.to(featureContainerName,{
      yPercent: -400,
      scrollBehavior: "smooth",
      ease: "Power1.easeInOut" });

  },[]);

};

export default useGsapTimeline;