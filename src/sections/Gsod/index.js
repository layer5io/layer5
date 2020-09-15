import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import logo from "../../images/layer5/gsod.png";


import GSODSectionWrapper from "./gsod.style";


const Gsod = () => {
    return (
        <GSODSectionWrapper>
            <Container>
                <div style={{zIndex: "20"}}>
                    <h3 className="post-title" style={{textAlign: "center",color: "#1D316C",fontSize: "2rem",margin:" 1.46rem 0 1.168rem 0"}}>
    Google Season of Docs 2020
                    </h3>
                    <h2>Google Season of Docs 2020 and Layer5</h2>
                    <p>Google <a href="https://developers.google.com/season-of-docs">Season of Docs</a> gives technical writers an opportunity to work with open source projects. Layer5 is participating in the Season of Docs in 2020. See below for a list of project ideas.</p>
                    <div id="layer5-intro" className="card-content" style={{position:"relative",float:"right",marginLeft:"20px"}} ><iframe width="392" height="220.5" src="https://www.youtube.com/embed/0yN5T5LB9ps" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>

                    <h3>Program Maintainers</h3>
                    <ul>
                        <li>Lee Calcote (<a href="https://github.com/leecalcote">@leecalcote</a>)</li>
                        <li>Kush Trivedi (<a href="https://github.com/kushthedude">@kushthedude</a>)</li>
                    </ul>
                    <h3>2020 Project Ideas</h3>
                    <p>The following is a list of project ideas for Layer5&#39;s participation in Google Season of Docs.</p>
                    <h3>Improve Meshery&#39;s Documentation</h3>
                    <p><strong>API Documentation</strong></p>
                    <ul>
                        <li>Prepare Meshery&#39;s API Endpoint Documentation using Swagger.</li>
                        <li>Facilitate a documentation that provides developer playground and test interactions.</li>
                    </ul>
                    <p><strong>User Tutorials</strong></p>
                    <ul>
                        <li>Create structured, hands-on user tutorials that walk users through various user flows (similar to <a href="https://tutorials.keptn.sh">https://tutorials.keptn.sh</a>)
Developer / Contributor Framework</li>
                        <li>Participate in the design of a dynamic framework for developers to use to ensure that error codes presented to users include a common set of metadata (e.g. a unique error code, description, likely cause, and suggested remediations)</li>
                        <li>Identify and enforce standardized release notes practices.</li>
                    </ul>
                    <p><strong>Set of Project Docs</strong></p>
                    <ul>
                        <li>Design and create a complete set of User Guide, Admin Guide, Install and Upgrade Guide, Developer Guide, and so on.</li>
                        <li>Identify opportunities for improvements in current documentation website.</li>
                    </ul>
                    <h4>Project goals</h4>
                    <p>Our goal is to have helpful, consistent, and integrated tutorials for contributors, and readers of API reference docs.</p>
                    <ul>
                        <li>Use the <a href="https://github.com/swaggo/swag">Swaggo</a> to generate the API Endpoint documentation.</li>
                        <li>Use any open-source training track tool to create tutorial for Meshery and performance management.</li>
                        <li>Update the contribution documentation and create an user guide for <a href="https://meshery.io">Meshery</a>.</li>
                    </ul>
                    <p><img
                        src={logo}
                        style={{width:"150px",  float: "left", margin: "20px"}}
                    /></p>
                    <h4>What you&#39;ll learn</h4>
                    <p>A writer who takes on this project will learn:</p>
                    <ul>
                        <li>How to work with stakeholders in open source projects</li>
                        <li>How to work with different open-source tools to create training tutorials</li>
                        <li>How to work with different service meshes &amp; service mesh architecture</li>
                        <li>How to create and render beautiful API docs</li>
                    </ul>

                </div>
            </Container>
        </GSODSectionWrapper>
    );
};

export default Gsod;