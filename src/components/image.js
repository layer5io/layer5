import React from "react";
import Img from "gatsby-image";


const Image = ({ childImageSharp, extension, publicURL, ...rest }) => {
    if (!childImageSharp && extension === 'svg') {
        return <img src={publicURL} />
    }
    return <Img fluid={childImageSharp.fluid}  {...rest} />
};

export default Image;
