import React, { useState, useEffect } from "react";
import useScrollPosition from "./scroll-position";
import StepsList from "./Steps-list";
import StepsIndicator from "./Steps-indicator";
import AnimatedTerminal from "../Animated-terminal";
import FramedTerminal from "../Animated-terminal/Framed-terminal";
import { AnimatedStepsListWrapper } from "./AnimatedStepsList.style";

// The breakpoints where the next step of each animation triggers
const breakpoints = [0, 300, 800, 1300, 1700];

// The number of pixels before the next breakpoint that the animation should complete
const animationBottomPadding = [0, 180, 180, 50];

const calculateCurrentFrame = (terminalSteps, currentIndex, scrollPosition) => {
  const percentage = Math.min(
    (scrollPosition - breakpoints[currentIndex]) /
      (breakpoints[currentIndex + 1] -
        breakpoints[currentIndex] -
        animationBottomPadding[currentIndex]),
    1,
  );
  const currentLines = terminalSteps[currentIndex].lines;
  let totalFrames = 0;
  currentLines.forEach((line) => {
    let frames = line.frames ? line.frames : 1;
    if (Array.isArray(line.code)) {
      totalFrames += line.code.length * frames;
    } else {
      totalFrames += frames;
    }
  });
  return Math.max(0, percentage * (totalFrames - 1));
};

const AnimatedStepsList = ({ terminalHeroState, steps }) => {
  const scrollPosition = useScrollPosition();
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const activeTerminalStateIndex =
    scrollPosition <= 300 ? 0 : indicatorIndex + 1;
  const terminalSteps = [terminalHeroState].concat(
    steps.map((step) => step.terminal),
  );
  const currentFrame = calculateCurrentFrame(
    terminalSteps,
    activeTerminalStateIndex,
    scrollPosition,
  );

  const handleStepClick = (index) => {
    const step = steps[index];
    if (!step) return false;

    const stepId = step.id || step.name.toLowerCase().replace(/\s+/g, "-");
    if (typeof document !== "undefined") {
      const element = document.getElementById(stepId);
      if (element) {
        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        element.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
        setIndicatorIndex(index);
        if (
          typeof window !== "undefined" &&
          window.history &&
          window.history.pushState
        ) {
          window.history.pushState(null, "", `#${stepId}`);
        }
        const heading = element.querySelector("h3");
        if (heading) {
          heading.focus({ preventScroll: true });
        }
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashNavigation = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;

      const targetIndex = steps.findIndex(
        (step) =>
          (step.id || step.name.toLowerCase().replace(/\s+/g, "-")) === hash,
      );

      if (targetIndex !== -1) {
        const stepId =
          steps[targetIndex].id ||
          steps[targetIndex].name.toLowerCase().replace(/\s+/g, "-");
        const element = document.getElementById(stepId);
        if (element) {
          const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          element.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
          setIndicatorIndex(targetIndex);
          const heading = element.querySelector("h3");
          if (heading) {
            heading.focus({ preventScroll: true });
          }
        }
      }
    };

    const timer = setTimeout(handleHashNavigation, 100);
    window.addEventListener("popstate", handleHashNavigation);
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handleHashNavigation);
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, [steps]);

  return (
    <AnimatedStepsListWrapper>
      <div className="animated-steps-list">
        <div className="indicator-wrapper">
          <StepsIndicator
            steps={steps}
            activeIndex={indicatorIndex}
            onItemClick={handleStepClick}
          />
        </div>

        <StepsList
          className="steps-list"
          steps={steps}
          onFocusedIndexChanged={(newStep) => {
            setIndicatorIndex(newStep);
          }}
        />

        <div className="terminal-wrapper">
          {activeTerminalStateIndex === 0 ? (
            <AnimatedTerminal
              frameLength={terminalSteps[activeTerminalStateIndex].frameLength}
              loop={terminalSteps[activeTerminalStateIndex].loop}
              lines={terminalSteps[activeTerminalStateIndex].lines}
            />
          ) : (
            <FramedTerminal
              frame={currentFrame}
              lines={terminalSteps[activeTerminalStateIndex].lines}
            />
          )}
        </div>
      </div>
    </AnimatedStepsListWrapper>
  );
};

export default AnimatedStepsList;
