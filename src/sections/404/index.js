import React from "react";

import L404SectionWrapper from './404.style';

const messages = [
    "Oh, no. Please pardon our meshy site.",
    "Oops. Please excuse the mesh.",
    "Looks like this page doesn't exists. What a mesh!",
    "Things tend to get a bit meshy around here.",
    "Please pardon our mesh.",
    "Yikes. Things are a mesh here."
    ];
let message = messages[Math.floor(Math.random()*messages.length)];

const L404 = () => {
    return (
        <L404SectionWrapper>
            <h3 className="strong text-lighten"> {message} </h3>
            <p className="text-lighten-2">Page does not exist.</p>
            <p className="card-panel">Please 
                <a  href="https://github.com/layer5io/layer5/issues/new"> report this error</a> <em>(thank you!) </em>
                and return to <a href="/">layer5.io</a>.</p>
        </L404SectionWrapper>
    );
};

export default L404;