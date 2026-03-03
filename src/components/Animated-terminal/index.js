import React, { useState, useEffect, useMemo } from "react";
import FramedTerminal from "./Framed-terminal";

const AnimatedTerminal = ({ lines, frameLength, loop, paused }) => {
  // Determine the total number of frames
  const totalFrames = useMemo(() => {
    let total = 0;
    lines.forEach((line) => {
      const frames = line.frames || 1;
      if (Array.isArray(line.code)) {
        total += line.code.length * frames;
      } else {
        total += frames;
      }
    });
    return total;
  }, [lines]);

  // Set up Animation
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (paused) return; // Stop animation when paused

    // Use functional update form and avoid dependency on frame itself
    const interval = setInterval(() => {
      setFrame((prevFrame) => {
        if (loop) {
          return (prevFrame + 1) % totalFrames; // loop cleanly
        } else {
          return prevFrame + 1 < totalFrames ? prevFrame + 1 : prevFrame;
        }
      });
    }, frameLength);

    return () => clearInterval(interval);
  }, [paused, loop, frameLength, totalFrames]);

  // Reset frames if our lines change
  useEffect(() => {
    setFrame(0);
  }, [lines]);

  return <FramedTerminal frame={frame} lines={lines} />;
};

export default AnimatedTerminal;
