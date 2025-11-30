import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const getSafePublicURL = (thumbnail) => {
  if (!thumbnail) return null;
  if (typeof thumbnail === "string") return thumbnail;
  if (thumbnail.publicURL) return String(thumbnail.publicURL);
  return null;
};

export const getSafeThumbnailProps = (thumbnail) => {
  if (!thumbnail) return null;
  return {
    childImageSharp: thumbnail.childImageSharp || null,
    extension: thumbnail.extension || (getSafePublicURL(thumbnail)?.endsWith(".svg") ? "svg" : null),
    publicURL: getSafePublicURL(thumbnail),
  };
};

const Image = ({ childImageSharp, extension, publicURL, alt, imgStyle, ...rest }) => {
  if (!publicURL && !childImageSharp) {
    return null;
  }

  const imageUrl = publicURL ? String(publicURL) : null;

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
