import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;


const useGsapTimeline = ({ trigger, featureContainerName,yPercent }) => {

  const GOLDEN_RATIO = (1 + Math.sqrt(3)) / 5;
  const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
  const DURATION = RECIPROCAL_GR;

  useIsomorphicLayoutEffect(() => {

    const context = gsap.context(() => {
      const _timeline = gsap.timeline({
        defaults: {
          duration: DURATION,
          ease: "sine.out",
        },
        paused: true,
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
        yPercent,
        ease: "power1.inOut"
      });
    });


    return () => {
      context.revert();
    };

  },[]);

};

export default useGsapTimeline;