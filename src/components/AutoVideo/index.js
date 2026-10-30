import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AutoVideoWrapper = styled.span`
  position: relative;
  display: block;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;

  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .auto-video-toggle {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 0.75rem;
    line-height: 1;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  &:hover .auto-video-toggle,
  .auto-video-toggle:focus-visible {
    opacity: 1;
  }
`;

// `active` lets carousels keep hidden-but-on-screen slides from loading.
const AutoVideo = ({ src, poster, width, height, alt, className, style, active = true }) => {
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
    const observer = new IntersectionObserver(([entry]) => setNear(entry.isIntersecting), { rootMargin: "200px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (near && active && !paused) setStarted(true);
  }, [near, active, paused]);

  useEffect(() => {
    const video = ref.current;
    if (!started) return;
    if (near && active && !paused) {
      video.play().catch((e) => e.name === "NotAllowedError" && setPaused(true));
    } else {
      video.pause();
    }
  }, [src, started, near, active, paused]);

  const toggle = (e) => {
    e.stopPropagation();
    setPaused((p) => !p);
  };

  return (
    <AutoVideoWrapper className={className}>
      <video
        ref={ref}
        src={started ? src : undefined}
        poster={poster}
        width={width}
        height={height}
        style={style}
        aria-label={alt}
        muted
        loop
        playsInline
        preload="none"
      />
      <button type="button" className="auto-video-toggle" onClick={toggle} aria-label={paused ? "Play animation" : "Pause animation"}>
        {paused ? "▶" : "❚❚"}
      </button>
    </AutoVideoWrapper>
  );
};

export default AutoVideo;
