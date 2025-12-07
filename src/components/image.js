import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const loggedWarnings = new Set();

const warnMissingImageData = ({ alt, publicURL }) => {
  const key = `${publicURL || "no-url"}-${alt || "no-alt"}`;
  if (loggedWarnings.has(key)) {
    return;
  }
  loggedWarnings.add(key);

  const details = [];
  if (alt) {
    details.push(`alt="${alt}"`);
  }
  if (publicURL) {
    details.push(`publicURL="${publicURL}"`);
  }
  const suffix = details.length ? ` (${details.join(", ")})` : "";
  console.warn(`[Image] Missing gatsbyImageData${suffix}. Falling back to <img>.`);
};

const renderBasicImage = ({ publicURL, alt, imgStyle, ...rest }) => {
  if (!publicURL) {
    return null;
  }

  return (
    <div className="old-gatsby-image-wrapper" style={{ width: "100%", height: "auto" }}>
      <img
        src={publicURL}
        alt={alt || "Blog image"}
        width="100%"
        height="auto"
        style={{
          objectFit: imgStyle?.objectFit || "cover",
          ...imgStyle,
        }}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};

const Image = ({ childImageSharp, extension, publicURL, alt, imgStyle, ...rest }) => {

  if (!childImageSharp && extension === "svg") {
    return renderBasicImage({ publicURL, alt, imgStyle, ...rest });
  }

  if (!childImageSharp?.gatsbyImageData) {
    warnMissingImageData({ alt, publicURL });
    return renderBasicImage({ publicURL, alt, imgStyle, ...rest });
  }

  const gatsbyImageData = childImageSharp.gatsbyImageData;

  return <GatsbyImage
    key={publicURL}
    image={gatsbyImageData}
    alt={alt || "Blog image"}
    style={{
      objectFit: imgStyle?.objectFit || "cover",
    }}
    {...rest}
  />;
};

export default Image;
