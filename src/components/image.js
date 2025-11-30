import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ childImageSharp, extension, publicURL, alt, imgStyle, ...rest }) => {
  // Handle null/undefined cases
  if (!publicURL && !childImageSharp) {
    return null;
  }

  // Ensure publicURL is a string (not a component or object)
  // Wrap in String() to prevent MDX from interpreting _svg fields as components
  const imageUrl = publicURL ? String(publicURL) : null;

  // Handle SVG files - check extension or if publicURL ends with .svg
  const isSvg = extension === "svg" || (imageUrl && imageUrl.endsWith(".svg"));

  if (!childImageSharp && isSvg && imageUrl) {
    return (
      <div className="old-gatsby-image-wrapper" style={{ width: "100%", height: "auto" }}>
        <img
          src={String(imageUrl)}
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
    key={imageUrl || "gatsby-image"}
    image={childImageSharp?.gatsbyImageData}
    alt={alt || "Blog image"}
    style={{
      objectFit: imgStyle?.objectFit || "cover",
    }}
    {...rest}
  />;
};

export default Image;
