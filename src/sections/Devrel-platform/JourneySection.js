import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
import { FaPencilRuler } from "@react-icons/all-files/fa/FaPencilRuler";
import { FaChartLine } from "@react-icons/all-files/fa/FaChartLine";
import { FaTrophy } from "@react-icons/all-files/fa/FaTrophy";
import Button from "../../reusecore/Button";

const JourneySectionWrapper = styled.div`
    .action-buttons{
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      @media (max-width: 418px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
       }
    }
  padding: 10px 0 80px 0;
  background-color: ${(props) => props.theme.body};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  .journey-header {
    text-align: center;
    margin-bottom: 50px;
    
    h2 {
      font-size: 3.125rem;
      line-height: 3.813rem;
      color: ${(props) => props.theme.tertiaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      margin-bottom: 1.5rem;
      
      @media (max-width: 992px) {
        font-size: 2.8rem;
        line-height: 3rem;
      }
      
      @media (max-width: 767px) {
        font-size: 2rem;
        line-height: 2.5rem;
        padding: 0 25px;
      }
    }
    
    p {
      font-size: 1.28rem;
      line-height: 2rem;
      max-width: 800px;
      margin: 0 auto;
      color: ${(props) => props.theme.tertiaryColor};
      opacity: 0.8;
      
      @media (max-width: 767px) {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0 25px;
      }
    }
  }
  
  .timeline-container {
    position: relative;
    padding: 20px 0;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${(props) => props.theme.secondaryColor} 0%, ${(props) => props.theme.primaryColor} 100%);
        transform: translateY(60%);
      z-index: 1;
      
      @media (max-width: 767px) {
        display: none;
      }
    }
    .stepp{
        z-index: 2;
        padding: 0;
        margin: 0 10px;
        border-radius: 4%;
        background: ${props => props.theme.grey212121ToWhite};
        box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.whiteToGreyE6E6E6};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        &:hover{
            box-shadow: 0px 0px 5px ${props => props.theme.green00D3A9ToGreen3C494F};
        }
        @media (max-width: 767px) {
          width: 80%;
        }
    }
    .timeline-row {
        position: relative;
        left: 0;
        right: 0;
       @media (max-width: 767px) {
        justify-content: center;
        gap: 2rem;
        }
    }
  }
  
  .step-card {
    background-color: ${(props) => props.theme.secondaryButtonColor};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    height: 100%;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    .step-number {
      background-color: ${(props) => props.theme.tertiaryColor};
      align-self: flex-start;
      color:${(props) => props.theme.body};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
    
    .step-icon {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: ${(props) => props.theme.primaryColor};
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      text-align: center;
      color: ${(props) => props.theme.tertiaryColor};
    }
    
    p {
      font-size: 1rem;
      line-height: 1.6;
      color: ${(props) => props.theme.tertiaryColor};
      opacity: 0.9;
      text-align: center;
    }
    
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
`;

const JourneySection = () => {
  const steps = [
    {
      number: "1",
      icon: <FaPencilRuler />,
      title: "Design and Publish",
      description: "Create your profile on Layer5 Cloud, share and discover best practices, reusable templates, and operational patterns for kubernetes."
    },
    {
      number: "2",
      icon: <FaChartLine />,
      title: "Engage and Measure",
      description: "Monitor your content's performance, gather feedback, and refine your approach based on real-time user interaction metrics."
    },
    {
      number: "3",
      icon: <FaTrophy />,
      title: "Grow and Get Recognized",
      description: "Build your reputation through badges and leaderboard positions while expanding your network in the cloud native community."
    }
  ];

  return (
    <JourneySectionWrapper>
      <Container>
        <div className="journey-header">
          <h2>Expand Your Network and Visibility in the Cloud Native Community</h2>
          <p>Connect with ambassadors, developer evangelists, maintainers, and experts while collaborating on CNCF projects.</p>
        </div>
        <div className="timeline-container">
          <Row className="timeline-row">
            {steps.map((step, index) => (
              <Col $md={4} key={index} className="stepp">
                <div className="step-card">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="action-buttons">
          <Button
            $primary
            $external={true}
            title="Explore Layer5 Cloud"
            alt="Explore cloud"
            $url="https://cloud.layer5.io/"
          />
          <Button
            $primary
            $external={true}
            title="Explore Kanvas"
            alt="Explore Meshery Playground"
            $url="https://kanvas.new/"
          />
          <Button
            aria-label="Book a demo"
            $primary
            $external={true}
            title="Talk to team"
            alt="Book a demo"
            $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true"
          />
          <Button
            aria-label="Recognition program"
            $primary
            $external={true}
            title="Recogntion Program"
            alt="recogntion program"
            $url="https://badges.layer5.io"
          />
        </div>
      </Container>
    </JourneySectionWrapper>
  );
};

export default JourneySection;
