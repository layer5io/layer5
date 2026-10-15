import React from "react";

const AutoVideo = ({
  mp4,
  webm,
  width,
  height,
  alt = "",
  className,
  style,
}) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      width={width}
      height={height}
      aria-label={alt}
      className={className}
      style={style}
    >
      {webm && <source src={webm} type="video/webm" />}
      {mp4 && <source src={mp4} type="video/mp4" />}
    </video>
  );
};

export default AutoVideo;
