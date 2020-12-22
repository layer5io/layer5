import React from "react";
import { Link } from "gatsby";

import DoYouNeedWrapper from "./doYouNeedService.style";

const DoYouNeedService = ({onClick}) => {
    return (
        <DoYouNeedWrapper>
            <div id="content">
                <div id="text">
                    <span className="heading">Do You Need A <br/>Service Mesh?</span>
                    <br/><br/>
                    <span className="description">Let us work you through</span>
                </div>
                <button id="action" onClick={onClick}>
                    Let's find out
                </button>
            </div>
        </DoYouNeedWrapper>
    );
};

export default DoYouNeedService;
