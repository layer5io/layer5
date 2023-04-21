import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ childImageSharp, extension, publicURL, alt, ...rest }) => {

  if (!childImageSharp && extension === "svg") {
    return (
      <div className="old-gatsby-image-wrapper">
        <img src={publicURL} alt={alt} />
      </div>
    );
  }

  return <GatsbyImage
    key={publicURL} image={childImageSharp.gatsbyImageData} {...rest} alt={alt}/>;
};

export default Image;
