import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ childImageSharp, extension, publicURL, alt, imgStyle, ...rest }) => {
  // Handle null/undefined cases
  if (!publicURL && !childImageSharp) {
    return null;
  }

  // Handle SVG files - check extension or if publicURL ends with .svg
  const isSvg = extension === "svg" || (publicURL && publicURL.endsWith(".svg"));

  if (!childImageSharp && isSvg && publicURL) {
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

  // If no childImageSharp and not SVG, return null or fallback
  if (!childImageSharp) {
    return null;
  }

  return <GatsbyImage
    key={publicURL}
    image={childImageSharp?.gatsbyImageData}
    alt={alt || "Blog image"}
    style={{
      objectFit: imgStyle?.objectFit || "cover",
    }}
    {...rest}
  />;
};

export default Image;
