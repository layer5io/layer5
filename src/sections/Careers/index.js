import React from "react";
import { Container } from "../../reusecore/Layout";
import { Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import InternshipPage from "./Careers-Internship-grid";
import Lee_and_Rigs from "../../assets/images/careers/Lee-and-Rigs-Caballero-of-Google.jpeg";
import Lee_giveaway from "../../assets/images/careers/Lee-giving-away-free-t-shirts-at-UT-Austin.jpeg";
import JoinCommunity from "../Community/Join-community";
import CareersSectionWrapper from "./careers.style";

const CareersPage = () => {
  return (
    <CareersSectionWrapper>
      <PageHeader title="Come Work with us" path="Careers" />
      <div className="careers-section-wrapper">
        <Container>
          <p className="centerTexts">If you’re a smart, curious person who can make contributions in and out of your areas of expertise, why not start now?</p>

        </Container>
        <div className="opensource-section">
          <div className="opensource-section-text">
            <h1>Open Source is in our DNA</h1>
            <p>
              Layer5 projects are open source software. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration, globalism, and innovation. Layer5 projects are distributed under the terms of Apache v2.
            </p>
            <p>
              We believe that all contributors should expect and be part of a safe and friendly environment for constructive contribution. We can more effectively and successfully compare and challenge different ideas to find the best solutions for advancement, while building the size, diversity, and strength of our community.
            </p>
          </div>
          <div className="opensource-section-img">
            <img src={Lee_and_Rigs} alt="Lee-and-Rigs-Caballero-of-Google" />
          </div>
        </div>
        <Container>
          <Row className="videoText">
            <div className="introText">
              <h2>Layer5 Culture</h2>
              <strong>All team members are expected to...</strong>
              <p>
                ...take initiative, execute briskly, debate in the discussion, then execute post-haste on the decision, irrespective of the specific decision.</p>
              <strong>All team members should expect to...</strong>
              <p>...be challenged, to work hard, to play hard, to be recognized, to grow and help others grow.</p>
              <strong>You should...</strong>
              <p>...pay attention to detail and take pride in your work. Know when to pri- oritize and have the discipline to adhere to those priorities. Focus on the customer. Pay it forward and enable others. Bring solutions with the problems. Take out the trash (do grunt work) as needed.</p>
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
        <div className="opportunity-section">
          <InternshipPage hide_heading={true} />
        </div>
        <JoinCommunity image={Lee_giveaway} />
      </div>
    </CareersSectionWrapper>
  );
};

export default CareersPage;
