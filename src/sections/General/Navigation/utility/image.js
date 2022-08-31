import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


const Image = ({ childImageSharp, extension, publicURL, alt, ...rest }) => {
  if (!childImageSharp && extension === "svg") {
    return (
      <div className="old-gatsby-image-wrapper">
        <img src={publicURL} alt={alt} />
      </div>
    );
  } else {
    return <GatsbyImage image={childImageSharp.gatsbyImageData} {...rest} alt={alt} />;
  }
};

export default Image;
