import React from "react";
import { Container } from "../../reusecore/Layout";
import { Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import InternshipPage from "../Internship-gird";
import Button from "../../reusecore/Button";
import Lee_and_Rigs from "../../assets/images/careers/Lee-and-Rigs-Caballero-of-Google.jpeg";
import CareersSectionWrapper from "./careers.style";

const CareersPage = () => {
    return (
        <CareersSectionWrapper>
            <PageHeader title="Come Work with us" path="Careers"/>
            <div className="careers-section-wrapper">
                <Container>
                    <p className="centerTexts">If you’re a smart, curious person who can make contributions in and out of your areas of expertise, why not start now?</p>
                    <Row className="videoText">
                        <div className="introText">
                            <h1>What is Layer5?</h1>
                            <p>
                                The quickly growing Layer5 community represents the largest collection of
                                service mesh projects and their maintainers in the world. Our projects establish
                                industry standards and enable service developers, owners, and operators
                                with repeatable patterns and best practices for managing all aspects of distributed services.
                                Our shared commitment to the open source spirit push the Layer5 community and its projects forward.
                                New members are always welcome.
                            </p>
                        </div>
                        <div className="introVideo">
                            <iframe
                                width="392"
                                height="220.5"
                                src="https://www.youtube.com/embed/0yN5T5LB9ps"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </div>
                    </Row>
                </Container>
                <div className="opensource-section">
                    <div className="opensource-section-text">
                        <h1>Open Source Projects?</h1>
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
                    </div>
                    <div className="opensource-section-img">
                        <img src={Lee_and_Rigs} alt="Lee-and-Rigs-Caballero-of-Google" />
                    </div>
                </div>
                <div className="opportunity-section">
                    <InternshipPage hide_heading={true}/>
                </div>
                <div className="join-community">
                    <div className="join-community_text-and_button">
                        <h1>Join the community!</h1>
                        <p>Checkout the Layer5 community and join us on Slack</p>
                        <Button primary title="Join Our Talented Community" url="http://slack.layer5.io/"/> 
                    </div>
                </div>
            </div>
        </CareersSectionWrapper>
    );
};

export default CareersPage;
