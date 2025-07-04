import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useGsapTimeline = ({ trigger, featureContainerName,yPercent }) => {

  const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

  const GOLDEN_RATIO = (1 + Math.sqrt(3)) / 5;
  const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
  const DURATION = RECIPROCAL_GR;

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
            // markers: true,
            scrub: 0.5,
            pin: true,
            toggleActions: "play pause resume reset",
            refreshPriority: -1, 
            invalidateOnRefresh: true, 
          },
        });

        _timeline.to(featureContainerName,{
          yPercent: -50,
          ease: "none",
        });
      });
      return () => {
        context.revert();
      };

    });

  },[]);

};

export default useGsapTimeline;