import React, { useState, useEffect } from "react";
import FramedTerminal from "./Framed-terminal";
import AnimatedTerminalThreeJS from "./AnimatedTerminalThreeJS";

/**
 * Original AnimatedTerminal implementation
 * Uses FramedTerminal for rendering each animation frame
 */
const AnimatedTerminal = ({ lines, frameLength = 100, loop = false, paused = false }) => {
  // Determine the total number of frames
  let totalFrames = 0;
  lines.forEach((line) => {
    let frames = line.frames ? line.frames : 1;
    if (Array.isArray(line.code)) {
      totalFrames += line.code.length * frames;
    } else {
      totalFrames += frames;
    }
  });

  // Set up Animation
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      if (!paused) {
        if (loop) {
          setFrame((frame) => frame + 1);
        } else {
          if (frame + 1 < totalFrames) {
            setFrame((frame) => frame + 1);
          }
        }
      }
    }, frameLength);
    return () => clearInterval(interval);
  }, [frame, loop, paused, totalFrames, frameLength]);

  // Reset Frames if our lines change
  useEffect(() => {
    setFrame(0);
  }, [lines]);

  return <FramedTerminal frame={frame} lines={lines} />;
};

// Export both implementations
export { AnimatedTerminalThreeJS };
export default AnimatedTerminal;