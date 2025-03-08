import React, { useState } from "react";
import useScrollPosition from "./scroll-position";
import StepsList from "./Steps-list";
import StepsIndicator from "./Steps-indicator";
import AnimatedTerminal from "../Animated-terminal";
import FramedTerminal from "../Animated-terminal/Framed-terminal";
import { AnimatedStepsListWrapper } from "./AnimatedStepsList.style";

// The breakpoints where the next step of each animation triggers
const breakpoints = [0, 350, 1400, 2450, 2680];

// The number of pixels before the next breakpoint that the animation should complete
const animationBottomPadding = [0, 620, 575, -50];

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
  const scrollPosition = useScrollPosition();
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const activeTerminalStateIndex =
        scrollPosition <= 350 ? 0 : indicatorIndex + 1;
  const terminalSteps = [terminalHeroState].concat(
    steps.map((step) => step.terminal)
  );
  const currentFrame = calculateCurrentFrame(
    terminalSteps,
    activeTerminalStateIndex,
    scrollPosition
  );

  return (
    <AnimatedStepsListWrapper>
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
