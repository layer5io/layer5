import React, { useState, useEffect } from "react";
import { CircularProgress } from "@sistent/sistent";

const CircularProgressDemo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress variant="determinate" value={progress} />;
};

export default CircularProgressDemo;
