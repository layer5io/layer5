import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({
  childImageSharp,
  extension,
  publicURL,
  alt,
  imgStyle,
  style,
  fitContainer,
  width,
  height,
  aspectRatio,
  ...rest
}) => {
  const imageData = childImageSharp?.gatsbyImageData;
  const explicitWidth = width || imageData?.width;
  const explicitHeight = height || imageData?.height;
  const resolvedAspectRatio =
    aspectRatio ||
    (explicitWidth && explicitHeight
      ? `${explicitWidth} / ${explicitHeight}`
      : undefined);

  /**
   * Rendering Mode: fitContainer
   * By default, GatsbyImage and SVGs scale to their intrinsic aspect ratios.
   * Passing `fitContainer={true}` forces the image wrapper to 100% width and height,
   * and uses `object-fit: contain` to scale the image losslessly inside that bounds.
   *
   * Note: This rendering mode guarantees full visibility with no cropping,
   * but mathematically CANNOT guarantee identical pixel area (visual weight) across
   * arbitrary aspect ratios, as that limitation belongs to standard CSS constraints.
   */
  const computedWrapperStyle = fitContainer
    ? {
        width: "100%",
        height: "100%",
        ...(resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : {}),
        ...style,
      }
    : {
        width: "100%",
        height: style?.height || "100%",
        ...(resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : {}),
        ...style,
      };

  const computedImgStyle = {
    objectFit: fitContainer ? "contain" : imgStyle?.objectFit || "cover",
    ...(fitContainer && { width: "100%", height: "100%" }),
    ...(resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : {}),
    ...imgStyle,
  };

  if (!childImageSharp && extension === "svg") {
    return (
      <div className="old-gatsby-image-wrapper" style={computedWrapperStyle}>
        <img
          key={publicURL}
          src={publicURL}
          alt={alt || "Blog image"}
          width={explicitWidth || undefined}
          height={explicitHeight || undefined}
          style={{
            width: "100%",
            height: fitContainer ? "100%" : "auto",
            ...computedImgStyle,
          }}
          {...rest}
        />
      </div>
    );
  }

  return (
    <GatsbyImage
      key={publicURL}
      image={imageData}
      alt={alt || "Blog image"}
      style={computedWrapperStyle}
      imgStyle={computedImgStyle}
      {...rest}
    />
  );
};

export default Image;
