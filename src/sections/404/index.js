import React from "react";

import L404SectionWrapper from "./404.style";
import serviceMesh from "./service-mesh.svg";
import Button from "../../reusecore/Button";

const messages = [
    "Oh, no. Please pardon our meshy site.",
    "Oops. Please excuse the mesh.",
    "Looks like this page doesn't exists. What a mesh!",
    "Things tend to get a bit meshy around here.",
    "Please pardon our mesh.",
    "How did this mesh happen?",
    "Well, isn't this a mesh?",
    "Yikes. Things are a mesh here."
];
let message = messages[Math.floor(Math.random()*messages.length)];

const L404 = () => {
    return (
        <L404SectionWrapper>
            <h1 className="message"> {message} </h1>
            <h3 className="subtitle">Page does not exist.</h3>
            <div className="button-row">
                <img src={serviceMesh} alt="service meshed" className="mesh" />
                <Button primary url="/" external="false">Return to Layer5</Button>
            </div>
        </L404SectionWrapper>
    );
};

export default L404;