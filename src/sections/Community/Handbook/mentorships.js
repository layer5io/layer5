import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import styled from "styled-components";
import {Link} from "gatsby";
import Button from "../../../reusecore/Button";
import SCA from "../../../collections/programs/sca-contributhon/sca.svg";
import MLH from "../../../collections/programs/mlh-2020/mlh.svg";
import LFX from "../../../collections/programs/lfx/Linux_Foundation_logo.png";
import Hacktoberfest from "../../../collections/programs/hacktoberfest-2020/hacktoberfest2020.png";
import GSOC from "../../../collections/programs/gsoc-2020/gsoc.svg";
import GSOD from "../../../collections/programs/gsod/gsod.png";
import TOC from "../../../components/handbook-navigation/index";
import Layer from "../../../assets/images/layer5/layer5-only/svg/layer5-white-bg.svg";
import Bridge from "../../../collections/programs/communitybridge/communitybridge.png";

const ConductWrapper = styled.div`

    padding: 0 5rem 3rem 20rem;
    margin-top: -32rem; 
    .explain-2{
      padding: 25px 0px;
      .text{
          padding: 1.25rem 1.25rem 0px 1.25rem;
          h2{
              font-weight: 700;
              font-size: 40px;
              padding: 1.25rem 0px;
          }
          p{
              color: ${props => props.theme.tertiaryColor};
              
          }
      }
      img{
        padding-top:3rem;
          height: 25rem;
          width: auto;
          display: block;
          margin-left: auto;
          margin-right: auto;
      }
      .linux-logo, .bridge-logo{
        height: 20rem;
          width: auto;
      }
      Button{
          margin: 1.25rem 0px;
          color: white;
      }
  }
  @media only screen and (max-width: 750px){
      margin-top: -2rem;
      margin-left: 0;
      padding: 1rem 1.5rem;
  
  }

  @media only screen and (max-width: 475px){
        margin-top: -2rem;
        margin-left: 0rem;
      }
    
  }
`;


const MentorshipPrograms= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Mentorship Programs</h1>
      </div>   
      <TOC />
      <ConductWrapper>
        <Container>
        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Goggle Season of Docs</h2>
                <p>Google Season of Docs provides support for open source projects to improve their documentation and allows professional technical writers to gain experience in open source. This is to raise awareness of open source, docs, and technical writing. Google season of docs started in 2019. Each year, layer5 submits a new project idea for technical writers to contribute to for a particular period. Also, stipends are awarded to the contributors.
                </p>
                <Button primary id="learn" type="button" title="Learn More" url="/programs/gsod" />
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={GSOD} alt="explanation" />
            </Col>
          </Row>
        </div>

        
        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={GSOC} alt="explanation" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Google Summer of Codes</h2>
                <p>Google Summer of Codes is a global program focused on bringing more student developers into open source software development. Students work with an open-source organization on a 10-week programming project during their break from school. Every Summer, Layer5 submits a new project idea for student developers to contribute to for a particular period. Also, stipends are awarded at the end of the program to the contributors.
                </p>
                <Button primary id="learn" type="button" title="Learn More" url="/programs/gsoc" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Hacktoberfest</h2>
                <p>Hacktoberfest is open to everyone in the global community. Whether you’re a developer, student learning to code, event host, or a company of any size, you can help drive the growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge. Every year in October, Hacktoberfest is held. So far, Layer5 has been a participant organization with different projects and issues such as first-timers-only, help-wanted, and good-first-issues for open-source contributors. This is to help towards completing the Hacktoberfest challenge.
                </p>
                <Button primary id="learn" type="button" title="Learn More" url="/programs/hacktoberfest" />
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={Hacktoberfest} alt="explanation" />
            </Col>
          </Row>
        </div>

        
        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img className="linux-logo" src={LFX} alt="explanation" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Linux Foundation</h2>
                <p>The Linux Foundation (Mentorship Programs) are designed to help developers with the necessary skills–many of whom are first-time open source contributors–experiment, learn, and contribute effectively to open source communities. Layer5, as an organization, has been participating in the Linux Foundation mentorship program since 2019. The program offers mentorships, program certification, and also stipend for the mentee.
                </p>
                <Button primary id="learn" type="button" title="Learn More" url="/programs/lfx" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>MLH Fellowship Program</h2>
                <p>The MLH Fellowship is a 12-week internship alternative for students interested in becoming software engineers. Instead of an internship at a single company, you'll contribute to the type of Open Source projects that every company depends on. The programs pair fun, educational curriculum with practical experience that you can put on your resume right away. It's collaborative, remote, and happens under the guidance of expert mentors. Layer5, as an organization, participates in the program by submitting a project idea for contributors to work on and also provides mentorship during the time phase given.</p>
                <Button primary id="learn" type="button" title="Learn More" url="/programs/mlh" />
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={MLH} alt="explanation" />
            </Col>
          </Row>
        </div>

        
        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img className="bridge-logo" src={Bridge} alt="explanation" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>CommunityBridge</h2>
                <p>The Linux Foundation's CommunityBridge is building a healthy ecosystem around the open source software by funding projects, securing code, and connecting with talented developers. Layer5 has been participating in the  CommunityBridge's mentorship program since 2019.</p>
                <Button primary id="learn" type="button" title="Learn More" url="/programs/communitybridge" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>Layer5</h2>
                <p>At Layer5, we take our internships seriously. Interns are expected to work hard, learn much, and be recognized for doing so. Past interns have presented their projects at KubeCon, DockerCon, and similar technical conferences. Our community of contributors is the key ingredient to the success of every one of our projects. Interns engage as part of the community. Whether interning directly with Layer5 or through one of Layer5's partner programs, your contributions will affect people you've never met as the Layer5 projects are being broadly referenced and used in organizations large and small.</p>
                <Button primary id="learn" type="button" title="Learn More" url="/careers/internships/" />
            </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={Layer} alt="explanation" />
            </Col>
          </Row>
        </div>

        
        <div className="explain-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={SCA} alt="explanation" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text">
                <h2>She Code Africa Contributhon</h2>
                <p>She Code Africa is a non-profit organization focused on celebrating and empowering young girls and women in tech across Africa.
The She Code Africa Contributhon Program is a virtual open-source boot camp for 4 weeks where ladies get the opportunity to work with open source organizations on selected projects with dedicated mentorship and on completion of the program, a stipend of $500 is awarded. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsors and mentor open source organizations to work on projects used by millions of people all over the world.
Layer5 is participating in Contributhon as a Mentoring Organization. This program engages more with the open-source ecosystem in Africa and diversifies contributions. Most especially, we love making an impact. Various project ideas are submitted for the selected ladies to contribute during the one-month time phase.
</p>
                <Button primary id="learn" type="button" title="Learn More" url="/programs/sca-contributhon" />
              </div>
            </Col>
          </Row>
        </div>
        </Container>
      </ConductWrapper>       
    </HandbookWrapper>
  );
};
  
export default MentorshipPrograms;
