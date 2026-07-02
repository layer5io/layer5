import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({
  childImageSharp,
  extension,
  publicURL,
  alt,
  imgStyle,
  style,
  ...rest
}) => {
  if (!childImageSharp && extension === "svg") {
    return (
      <div
        className="old-gatsby-image-wrapper"
        style={{ width: "100%", height: "100%", ...style }}
      >
        <img
          src={publicURL}
          alt={alt || "Blog image"}
          width="100%"
          height="100%"
          style={{
            objectFit: imgStyle?.objectFit || "cover",
            ...imgStyle,
          }}
          {...rest}
        />
      </div>
    );
  }

  return (
    <GatsbyImage
      key={publicURL}
      image={childImageSharp?.gatsbyImageData}
      alt={alt || "Blog image"}
      imgStyle={{
        objectFit: imgStyle?.objectFit || "cover",
        ...imgStyle,
      }}
      style={style}
      {...rest}
    />
  );
};

export default Image;
