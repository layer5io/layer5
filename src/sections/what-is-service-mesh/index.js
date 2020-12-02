import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";

import bookImage from "../../collections/books/2020-10-24-the-enterprise-path-to-service-mesh-architectures-2nd-Edition/The-Enterprise-path-to-service-mesh-Architectures-2nd-Edition.png";
import ServiceMeshWrapper from "./whatServiceMesh.style";

const WhatServiceMesh = ({gradient}) => {
    if(gradient === undefined)
        gradient = true;
    return (
        <ServiceMeshWrapper gradient={gradient}>
            <h1>What Is A Service Mesh?</h1>
            <br/>
            <span className="description">A dedicated layer for managing service-to-service communication.</span>
            <br/>
            <span className="description"> A services-first network</span>
            <br/><br/>
            <Link to="/books/the-enterprise-path-to-service-mesh-architectures-2nd-edition">
                <img
                    src={bookImage}
                    alt="The Enterprise path to service mesh Architectures 2nd Edition"
                    className="bookImage"
                />
            </Link>
        </ServiceMeshWrapper>
    );
};

export default WhatServiceMesh;
