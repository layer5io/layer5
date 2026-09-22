import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({
  childImageSharp,
  extension,
  publicURL,
  alt,
  imgStyle,
  fitContainer,
  ...rest
}) => {
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
    ? { width: "100%", height: "100%" }
    : { width: "100%", height: "auto" };

  const computedImgStyle = {
    objectFit: fitContainer ? "contain" : imgStyle?.objectFit || "cover",
    ...(fitContainer && { width: "100%", height: "100%" }),
    ...imgStyle,
  };

  if (!childImageSharp && extension === "svg") {
    return (
      <div
        className="old-gatsby-image-wrapper"
        style={computedWrapperStyle}
      >
        <img
          key={publicURL}
          src={publicURL}
          alt={alt || "Blog image"}
          width="100%"
          height={fitContainer ? "100%" : "auto"}
          style={computedImgStyle}
        />
      </div>
    );
  }

  return (
    <GatsbyImage
      key={publicURL}
      image={childImageSharp?.gatsbyImageData}
      alt={alt || "Blog image"}
      style={fitContainer ? computedWrapperStyle : undefined}
      imgStyle={computedImgStyle}
      {...rest}
    />
  );
};

export default Image;
