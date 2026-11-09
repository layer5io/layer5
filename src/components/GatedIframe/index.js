import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFileAlt } from "@react-icons/all-files/fa/FaFileAlt";

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.elevationColor || "#212121"};
  color: ${(props) => props.theme.text || "#ffffff"};
  border: 1px solid ${(props) => props.theme.shadowLightColor || "#333"};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-sizing: border-box;
  min-height: 220px;
  max-width: 100%;

  .embed-icon {
    margin-bottom: 0.75rem;
    color: ${(props) => props.theme.secondaryColor || "#00b39f"};
  }

  .embed-text {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    max-width: 340px;
    line-height: 1.4;
    color: ${(props) => props.theme.text || "#ffffff"};
  }
`;

const getEmbedType = (src) => {
  if (!src || typeof src !== "string") return null;
  try {
    const url = new URL(src, "https://layer5.io");
    const host = url.hostname.toLowerCase();
    if (
      host === "youtube.com" ||
      host === "www.youtube.com" ||
      host === "youtube-nocookie.com" ||
      host === "www.youtube-nocookie.com" ||
      host === "youtu.be"
    ) {
      return "youtube";
    }
    if (
      host === "docs.google.com" &&
      url.pathname.toLowerCase().startsWith("/presentation")
    ) {
      return "presentation";
    }
  } catch {
    return null;
  }
  return null;
};

const GatedIframe = (props) => {
  const { src, title, className, style, width, height, ...rest } = props;
  const [hasConsent, setHasConsent] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasConsent(localStorage.getItem("cookie_consent") === "accepted");
    }

    const onConsentChanged = (event) => {
      setHasConsent(event.detail === "accepted");
    };

    const onStorage = (event) => {
      if (event.key === "cookie_consent") {
        setHasConsent(event.newValue === "accepted");
      }
    };

    window.addEventListener("cookie-consent-changed", onConsentChanged);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cookie-consent-changed", onConsentChanged);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const embedType = getEmbedType(src);

  if (!embedType || hasConsent || loaded) {
    return (
      <iframe
        src={src}
        title={title}
        className={className}
        style={style}
        width={width}
        height={height}
        {...rest}
      />
    );
  }

  const isVideo = embedType === "youtube";
  const isPresentation = embedType === "presentation";

  const label = isVideo
    ? "Load Video"
    : isPresentation
      ? "Load Presentation"
      : "Load Content";

  const placeholderStyle = {
    ...style,
    width: width || (style && style.width),
    height: height || (style && style.height),
  };

  return (
    <Placeholder className={className} style={placeholderStyle}>
      {isVideo ? (
        <FaYoutube size={36} className="embed-icon" />
      ) : (
        <FaFileAlt size={32} className="embed-icon" />
      )}
      <p className="embed-text">
        {isVideo
          ? "This video is hosted by YouTube."
          : isPresentation
            ? "This presentation is hosted by Google Slides."
            : "This content is hosted by a third party."}{" "}
        Accept cookies or click below to view it.
      </p>
      <Button
        $secondary
        onClick={() => setLoaded(true)}
        style={{ minWidth: 120, padding: "8px 16px", fontSize: 14 }}
      >
        {label}
      </Button>
    </Placeholder>
  );
};

export default GatedIframe;
