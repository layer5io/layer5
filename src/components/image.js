import React from "react";
import Img from "gatsby-image";


const Image = ({ childImageSharp, extension, publicURL, ...rest }) => {
    if (!childImageSharp && extension === "svg") {
        return (
            <div className="gatsby-image-wrapper">
                <img src={publicURL} />
            </div>
        );
    }
    return <Img fluid={childImageSharp.fluid}  {...rest} />;
};

export default Image;
