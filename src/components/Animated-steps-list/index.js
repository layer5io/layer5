import React, { useEffect, useRef, useState } from "react";
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
    1
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
  const wrapperRef = useRef(null);
  const scrollPosition = useScrollPosition();
  const [sectionTop, setSectionTop] = useState(0);
  const [indicatorIndex, setIndicatorIndex] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      const offset =
        wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      setSectionTop(offset);
    }
  }, []);

  const relativeScroll = Math.max(0, scrollPosition - sectionTop);
  const activeTerminalStateIndex =
    relativeScroll <= 300 ? 0 : indicatorIndex + 1;
  const terminalSteps = [terminalHeroState].concat(
    steps.map((step) => step.terminal)
  );
  const currentFrame = calculateCurrentFrame(
    terminalSteps,
    activeTerminalStateIndex,
    relativeScroll
  );

  return (
    <AnimatedStepsListWrapper ref={wrapperRef}>
      <div className="animated-steps-list">
        <div className="indicator-wrapper">
          <StepsIndicator steps={steps} activeIndex={indicatorIndex} />
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
