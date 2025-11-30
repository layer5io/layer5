import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

/**
 * Helper to safely extract publicURL from thumbnail objects
 * Handles _svg fields that MDX might interpret as components
 */
export const getSafePublicURL = (thumbnail) => {
  if (!thumbnail) return null;
  if (typeof thumbnail === "string") return thumbnail;
  if (thumbnail.publicURL) return String(thumbnail.publicURL);
  return null;
};

/**
 * Helper to safely prepare thumbnail props for Image component
 * Use this when passing thumbnail_svg or darkthumbnail_svg to Image
 */
export const getSafeThumbnailProps = (thumbnail) => {
  if (!thumbnail) return null;
  return {
    childImageSharp: thumbnail.childImageSharp || null,
    extension: thumbnail.extension || (getSafePublicURL(thumbnail)?.endsWith(".svg") ? "svg" : null),
    publicURL: getSafePublicURL(thumbnail),
  };
};

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
          src={imageUrl}
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
