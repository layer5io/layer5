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

    mm.add("(min-width: 800px)", () => {
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
            // changed value of scrub from true to 30 to add delay to the animation so people can read the text before it is gone if people scroll fast
            scrub: 30,
            pin: true,
            // changed the toggleActions to play complete reverse reset so that the animation can be reversed when the user scrolls back up
            toggleActions: "play complete reverse reset"
          },
        });

        _timeline.to(featureContainerName,{
          yPercent,
          ease: "power1.inOut",
        });
      });
      return () => {
        context.revert();
      };

    });

  },[]);

};

export default useGsapTimeline;