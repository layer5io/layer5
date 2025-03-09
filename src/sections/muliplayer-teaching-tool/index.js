import React from "react";
import styled from "styled-components";
import { Container } from "../../reusecore/Layout";
import MultiplayerTeachingWrapper from "./style";
import { FaCloud } from "@react-icons/all-files/fa/FaCloud";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode";
import { FaCogs } from "@react-icons/all-files/fa/FaCogs";
import { FaBookOpen } from "@react-icons/all-files/fa/FaBookOpen";
import { FaChalkboardTeacher } from "@react-icons/all-files/fa/FaChalkboardTeacher";
import { FaCodeBranch } from "@react-icons/all-files/fa/FaCodeBranch";
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import { FaTrophy } from "@react-icons/all-files/fa/FaTrophy";

import Button from "../../reusecore/Button";
import Reviews from "../Pricing/review-slider";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";


const Grid = styled.div`
  display: grid;
  margin: 3rem 0;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.grey212121ToWhite};
`;

const IconWrapper = styled.div`
  font-size: 2rem;
`;

const CardContent = styled.div`
  flex: 1;
`;
const Section = styled.div`
  text-align: center;
  margin-top: 3rem;
`;


const MultiplayerTeachingPage = () => {

  return (
    <MultiplayerTeachingWrapper>
      <Container className={"heading-container"}>
        <div className={"section-title"}>
          <h1 className={"multiplayer-heading"}>Multi-Player Cloud Native Teaching and Collaboration Platform</h1>
          <p className={"multiplayer-text"}>Empowering content creators, instructors, and trainers with a real-time, interactive environment for cloud native education.</p>
        </div>
      </Container>
      <Container>
        <h2 style={{ margin: "2rem 0", textAlign: "center" }} >For learners:</h2>
        <Grid>
          <Card>
            <IconWrapper><FaCloud style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>Live Lab Environment</h2>
              <p>Instantly deploy and interact with cloud native infrastructure in real time.</p>
            </CardContent>
          </Card>
          <Card>
            <IconWrapper><FaUsers style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>Multi-Player Collaboration</h2>
              <p>Work together with students, trainees, or team members on a shared Kanvas, just like Figma for DevOps engineers.</p>
            </CardContent>
          </Card>
          <Card>
            <IconWrapper><FaLaptopCode style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>Self Paced Learning</h2>
              <p>Create, modify, and explore cloud architectures hands-on with intuitive tools.</p>
            </CardContent>
          </Card>
          {/* <Card>
          <IconWrapper><FaNetworkWired style={{ color: 'red' }} /></IconWrapper>
          <CardContent>
            <h2>GitOps-Integrated Design Reviews</h2>
            <p>Ensure best practices by integrating infrastructure changes through pull requests.</p>
          </CardContent>
        </Card> */}
          <Card>
            <IconWrapper><FaBookOpen style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>Cloud Native Design Patterns</h2>
              <p>Access a growing catalog of ready-made blueprints for Kubernetes and multi-cloud environments.</p>
            </CardContent>
          </Card>
        </Grid>
        <h2 style={{ marginBottom: "2rem", textAlign: "center" }} >For educators: </h2>
        <Grid>
          <Card>
            <IconWrapper><FaChalkboardTeacher style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>Interactive Teaching</h2>
              <p>Conduct live training sessions and provide step-by-step guided tutorials.</p>
            </CardContent>
          </Card>
          <Card>
            <IconWrapper><FaUniversity style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>Structured Learning Paths</h2>
              <p>Build interactive educational journeys for students and professionals.</p>
            </CardContent>
          </Card>
          <Card>
            <IconWrapper><FaCodeBranch style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>Collaborative Design Reviews</h2>
              <p>Facilitate infrastructure design reviews and best practice sharing.</p>
            </CardContent>
          </Card>
          <Card>
            <IconWrapper><FaCogs style={{ color: "rgb(0, 179, 159)" }} /></IconWrapper>
            <CardContent>
              <h2>DevOps and Architecture Training</h2>
              <p>Demonstrate multi-cloud and Kubernetes architecture patterns.</p>
            </CardContent>
          </Card>
        </Grid>
        <Section>
          <h2>Enhance Your Reach and Influence</h2>
          <p>Track engagement, showcase your expertise, and gain recognition.</p>
        </Section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card>
            <IconWrapper><FaTrophy style={{ color: "gold" }} /></IconWrapper>
            <CardContent>
              <h2>Leaderboard & Recognition</h2>
              <p>Earn rewards for popular designs and tutorials.</p>
            </CardContent>
          </Card>
        </div>

        <Section style={{ margin: "1rem 3rem" }}>
          <Button $primary className="banner-btn two" title="Start exploring now" $url="https://kanvas.new/" $external={true}>
            <BsArrowUpRight size={21} className="icon-left" />
          </Button>
        </Section>
      </Container>
      <Reviews />
    </MultiplayerTeachingWrapper>
  );
};

export default MultiplayerTeachingPage;
