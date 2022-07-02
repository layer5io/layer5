import React, { useState } from "react";
import AnimatedTerminal from "../../Animated-terminal";

const SteppedAnimatedTerminal = ({ activeIndex, steps }) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  if (activeIndex != currentIndex) {
    setCurrentIndex(activeIndex);
  }

  return (
    <AnimatedTerminal
      frameLength={steps[activeIndex].frameLength}
      loop={steps[activeIndex].loop}
      lines={steps[activeIndex].lines}
    />
  );
};

export default SteppedAnimatedTerminal;
