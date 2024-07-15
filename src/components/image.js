import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ childImageSharp, extension, publicURL, alt, test_var, ...rest }) => {

  if (!childImageSharp && extension === "svg") {
    const b=1+2;
    return (
      <div className="old-gatsby-image-wrapper">
        <img src={publicURL} alt={alt} />
      </div>
    );
  }

  console.log(b);

  return <GatsbyImage
    key={publicURL} image={childImageSharp?.gatsbyImageData} {...rest} alt={alt}/>;
};

export default Image;
