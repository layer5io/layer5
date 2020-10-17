import React from "react";
import image from "../../assets/images/community/datacenter-crash.svg";

const Community= () => {
    return (
        <div>
            <h3>Largest collection of
  service mesh projects and their maintainers in the world</h3>
            <div>  
                <img
                    src={image}
                    width="40%"
                    align="right"
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
                        <a
                            className=" btn "
                            href="http://slack.layer5.io"
                        >Join the Community</a>
                    </h3>
                </div>
    
                <h6>Open Source Projects</h6>
                <p className="indent">
    Layer5 projects are open source software. Anyone can download, use, work on,
    and share it with others. It's built on principles like collaboration,
    globalism, and innovation. Layer5 projects are distributed under the terms
    of Apache v2.
                </p>
            </div>
            <div width="100%">
                <h3 className="h3link">
                    <a
                        href="https://docs.google.com/document/d/1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk/edit?usp=sharing"
                        className="link"
                    >Repository Overview</a>
                </h3>
            </div>
        </div>
    );
};

export default Community;