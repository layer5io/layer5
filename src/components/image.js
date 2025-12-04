import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const formatDebugInfo = ({ alt, publicURL }) => {
  const debugInfo = [];
  if (alt) {
    debugInfo.push(`alt="${alt}"`);
  }
  if (publicURL) {
    debugInfo.push(`publicURL="${publicURL}"`);
  }
  return debugInfo.length ? ` (${debugInfo.join(", ")})` : "";
};

const ensureGatsbyImageData = (imageData, context) => {
  if (imageData) {
    return imageData;
  }

  const errorMessage = `[Image] Missing gatsbyImageData${formatDebugInfo(context)}. Ensure the GraphQL query returns childImageSharp.gatsbyImageData.`;
  throw new Error(errorMessage);
};

const Image = ({ childImageSharp, extension, publicURL, alt, imgStyle, ...rest }) => {

  if (!childImageSharp && extension === "svg") {
    return (
      <div className="old-gatsby-image-wrapper" style={{ width: "100%", height: "auto" }}>
        <img
          src={publicURL}
          alt={alt || "Blog image"}
          width="100%"
          height="auto"
          style={{
            objectFit: imgStyle?.objectFit || "cover",
            ...imgStyle
          }}
        />
      </div>
    );
  }

  const gatsbyImageData = ensureGatsbyImageData(childImageSharp?.gatsbyImageData, { alt, publicURL });

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
