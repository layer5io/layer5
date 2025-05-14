import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ childImageSharp, extension, publicURL, alt, imgStyle, ...rest }) => {

  if (!childImageSharp && extension === "svg") {
    return (
      <div className="old-gatsby-image-wrapper" style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}>
        <img
          src={publicURL}
          alt={alt || "Blog image"}
          width="100%"
          height="auto"
          style={{
            aspectRatio: "16/9",
            objectFit: imgStyle?.objectFit || "cover",
            ...imgStyle
          }}
        />
      </div>
    );
  }

  return <GatsbyImage
    key={publicURL}
    image={childImageSharp?.gatsbyImageData}
    alt={alt || "Blog image"}
    {...rest}
  />;
};

export default Image;
