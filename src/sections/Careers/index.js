import React from "react";
import { Container } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import ProgramsGrid from "../Programs-grid";
import InternshipPage from "../Internship-gird";
import Button from "../../reusecore/Button";

import CareersSectionWrapper from "./careers.style";

const CareersPage = () => {
    return (
        <CareersSectionWrapper>
            <PageHeader title="Come Work with us" path="Careers"/>
            <div className="careers-section-wrapper">
                <Container>
                    <p>If you’re a smart, curious person who can make contributions in and out of your areas of expertise, why not start now?</p>
                    <p>
                        <h2>What is Layer5?</h2>
                    </p>
                    <p>
                        The quickly growing Layer5 community represents the largest collection of
                        service mesh projects and their maintainers in the world. Our projects establish
                        industry standards and enable service developers, owners, and operators
                        with repeatable patterns and best practices for managing all aspects of distributed services.
                        Our shared commitment to the open source spirit push the Layer5 community and its projects forward.
                        New members are always welcome.
                    </p>
                    <div id="layer5-intro" className="card-content">
                        <iframe
                            width="392"
                            height="220.5"
                            src="https://www.youtube.com/embed/0yN5T5LB9ps"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                    </div>
                    <p>
                        <h2>Open Source Projects?</h2>
                    </p>
                    <p>
                        Layer5 projects are open source software. Anyone can download, use, work
                        on, and share it with others. It's built on principles like collaboration,
                        globalism, and innovation. Layer5 projects are distributed under the terms
                        of Apache v2.
                    </p>
                    <p>
                        We believe that all contributors should expect and be part of a safe and
                        friendly environment for constructive contribution. We can more
                        effectively and successfully compare and challenge different ideas to find
                        the best solutions for advancement, while building the size, diversity,
                        and strength of our community.
                    </p>
                    <div className="flex-div">&nbsp;</div>
                    <hr/>
                    <div className="flex-div">&nbsp;</div>
                </Container>
                <div className="opportunity-section">
                    <InternshipPage hide_heading={true}/>
                </div>
                <br/>
                <div className="prog-desc"> 
                    <h3>Layer5 also participates in a number of programs.</h3>
                    <a href="/programs">
                        <Button primary title="See More" /> 
                    </a>    
                </div>
                {/* <div className="programs-section">
                    <ProgramsGrid hide_path={true} />
                </div> */}
            </div>
        </CareersSectionWrapper>
    );
};

export default CareersPage;
