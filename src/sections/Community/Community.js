import React from "react";
import datacenterimg from "../../assets/images/community/datacenter-crash.svg";
import Button from "../../reusecore/Button";

const Community= () => {
    return (
        <div>
            <h2 className="center">
                Largest collection of service mesh projects and their maintainers in the world
            </h2>
            <div>  
                <img
                    src={datacenterimg}
                    width="40%"
                    align="right"
                    alt="datacenterimg"
                />

                <p className="indent">
                    We build projects
                    to provide learning environments, deployment and operational best practices,
                    performance benchmarks, create documentation, share networking
                    opportunities, and more. Our shared commitment to the open source spirit
                    pushes Layer5 projects forward. 
                </p>
                <div width="100%" className="center">
                    <p>New members are always welcome.</p>
                    <h3>
                        <Button primary title="Join the Community" url="http://slack.layer5.io" external="True"/>
                    </h3>
                </div>
    
                <h4>Open Source Projects</h4>
                <p className="indent">
                    Layer5 projects are open source software. Anyone can download, use, work on,
                    and share it with others. It's built on principles like collaboration,
                    globalism, and innovation. Layer5 projects are distributed under the terms
                    of Apache v2.
                </p>
            </div>
            <div width="100%" className="center" >
                <h3>
                    <a
                        href="https://docs.google.com/document/d/1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk/edit?usp=sharing"
                    >Repository Overview</a>
                </h3>
            </div>
        </div>
    );
};

export default Community;