import React from "react";
import Img from "gatsby-image";


const Image = ({ childImageSharp, extension, publicURL, alt, ...rest }) => {
  if (!childImageSharp && extension === "svg") {
    return (
      <div className="gatsby-image-wrapper">
        <img src={publicURL} alt={alt} />
      </div>
    );
  }
  return <Img fluid={childImageSharp.fluid}  {...rest} alt={alt} />;
};

export default Image;
