import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import styled from "styled-components";
import {Link} from "gatsby";
import Point from "./images/bullet.svg";
import Bullet from "./images/active.png";
import Slider from "react-slick";
import TOC from "../../../components/handbook-navigation/index";


const Connect= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Connect with Us</h1>
      </div> 
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>Joining the Community</h2>
            <p><img className="logo" src={Point} /> Join our <a href="http://slack.layer5.io/">Slack workspace</a> and interact with like-minded people.</p>
            <p><img className="logo" src={Point} /> Join our  <a href="https://discuss.layer5.io/">Discussion Forum</a>  and engage with the community.</p> 
            <p><img className="logo" src={Point} /> Join our community, by filling the <a href="https://layer5.io/newcomer">membership form.</a></p>
            <p><img className="logo" src={Point} /> Join any or all of the weekly meetings on the <a href="https://bit.ly/2SbrRhe">community calendar.</a></p>
            <p><img className="logo" src={Point} /> Watch community <a href="https://www.youtube.com/playlist?list=PL3A-A6hPO2IMPPqVjuzgqNU5xwnFFn3n0">meeting recordings.</a></p>
        
            <h2>Slack Community</h2>
            <p>We are a community of like-minded people with over a thousand members.</p>
            <p>Join our <a href="http://slack.layer5.io/">Slack Workspace</a> and interact with people.
       In the workspace, there are different channels to engage in. Here’s a description of them:</p>
       
            <p><span className="highlight" >#announcements</span> - For general announcements, projects, releases, security vulnerabilities.</p>
            <p><span className="highlight">#buzz</span> - For notifications on Twitter activities.</p>
            <p><span className="highlight">#careers</span> - For various career opportunities available </p>
            <p><span className="highlight">#github-notifications</span> - For updates on Layer5 GitHub project activities</p>
            <p><span className="highlight">#general</span> - For workspace-wide communication and announcements.</p>
            <p><span className="highlight">#meshery</span> - For discussion on topics in and around Meshery</p>
            <p><span className="highlight">#meshery-adapters</span> - Discuss topics related to meshery-adapters.</p>
            <p><span className="highlight">#meshery-ci</span> - For discussion on topics related to meshery-ci</p>
            <p><span className="highlight">#meshery-meshsync</span> - For discussions on issues related to mesh sync</p>
            <p><span className="highlight">#mesheryctl</span> - For discussions on Meshery’s CLI</p>
            <p><span className="highlight">#newcomers</span> - For welcoming first-time contributors and community newcomers.</p>
            <p><span className="highlight">#osom</span> - For open-source software Mexico discussion</p>
            <p><span className="highlight">#performance</span> - For discussions related to measuring and evaluating service mesh performance.</p>
            <p><span className="highlight">#random</span> - For non-work banter and water cooler conversation.</p>
            <p><span className="highlight">#smi</span> - For discussions related to Meshery and Service Mesh Interface (SMI).</p>
            <p><span className="highlight">#support</span> - For support-related issues such as setup issues</p>
            <p><span className="highlight">#wasm</span> - For discussions on web assembly, rust, data plane filters</p>
            <p><span className="highlight">#websites</span> - For discussions related to layer5.io site.</p>
            <p><span className="highlight">#workshops</span> - Q-A for workshops given at KubeCon, DockerCon, Velocity, O’Reilly Live Training</p>
          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};
  
export default Connect;