import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import styled from "styled-components";
import {Link} from "gatsby";
import Point from "./images/bullet.svg";
import Bullet from "./images/active.png";
import TOC from "../../../components/handbook-navigation/index";

const IntroWrapper = styled.div`
    padding: 3rem 20rem;
    margin-top: -25rem; 
    padding-top: 0.5rem;
    h2{
      color:black;
      margin-bottom: 1rem;
      font-size: 25px;
    }
    h3{
      color:black;
      font-size: 20px;
      margin-bottom: 0.5rem;
    }
    p{
      font-size: 15px;
    }
    .bullet{
      width: 15px;
    }
    .logo{
      width: 25px;
    }
    .number{
      color:#00d3a9;
      background-color:#f3fffd;
      font-size: 18px;
      padding: 0rem 1rem;
    }
`;

const Intro= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>About</h1>
      </div> 
      <TOC />
      <IntroWrapper>
        <Container>
          <h2>What is Layer5</h2>
          <p>Layer5 is a community and open source-centered service mesh company, representing the largest collection of service meshes and their maintainers in the world. Layer5 is also the creator and maintainer of service mesh standards and also the maker of Meshery,  the service mesh management plane.</p>         
          <h2>Community First</h2>
          <p>Layer5 also represents the community.  We build projects to provide learning environments, deployment, and operational best practices, performance benchmarks, create documentation, share networking opportunities, and more. Our shared commitment to the open-source spirit pushes Layer5 projects forward. New members are always welcome.</p>
          <h2>Open Source First</h2>
          <p>Layer5 projects are open-source software. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration, globalism, and innovation. Layer5 projects are distributed under the terms of Apache v2.</p>
    
          <div className="goals">
            <h2>Goals</h2>
            <p><img className="bullet" src={Bullet} />To build a large collection of service meshes.</p>
            <p><img className="bullet" src={Bullet} />To build products that are accessible and easy to use.</p>
            <p><img className="bullet" src={Bullet} />To build a welcoming community for open-source contributions.</p>
          </div>

          <h2>Newcomer’s Path</h2>
          <p>Thank you for your interest in contributing to Layer5 open source initiatives!</p>
          <p>In combination with the Layer5 Community Guide and Contributing Guide, the following set of instructions are to encourage and support first-time (or near first-time) open-source contributors.</p>
          <h3>How to contribute?</h3>
          <p>The following steps outline the process by which you can openly engage, learn, and participate in the broad set of open source projects at Layer5.</p>

          <div>
            <p><span className="number">1</span> Browse the list of <a href="https://github.com/layer5io">Layer5</a> org issues bearing the <a href="https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+no%3Aassignee">“good first issue”</a>, <a href="https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first+timers+only%22+no%3Aassignee">“first-timers-only”</a> or the  <a href="https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+no%3A%22assignee%22">“help wanted”</a> label.</p>
            <p><span className="number">2</span> Alternatively, find an area of interest by checking out the Layer5 Repository Overview section of this handbook.</p>
            <p><span className="number">3</span>After identifying the issue you wish to work on, check if it has been assigned by taking a look at the assignee section on the issue, otherwise signal your interest by commenting on the issue so that it can be assigned to you.</p>
          </div>
          <h3>Working on your issue</h3>
          <p>Once an issue has been assigned to you, it’s time to get started!</p>
          <div>
            <p><span className="number">1</span>Be sure to <a href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin">sign off on your commits</a></p>
            <p><span className="number">2</span>Contributions of all sizes are welcome.</p>
            <p><span className="number">3</span>If you need some additional help, please join the Layer5 Slack workspace and find your way to the #newcomers channel. Feel free to ask questions.</p>
          </div>
          <h3>While your issue is under review</h3>
          <div>
            <p><span className="number">1</span>Please double-check that you have signed off on all of your git commits.</p>
            <p><span className="number">2</span>
Be patient. There are a large number of contributors and only a small number of maintainers/reviewers. All contributors are equally important to us, and we'll be sure to get to you as soon as possible. In the meanwhile, you are welcome to join our Slack workspace and take a look at all our projects. </p>
          </div>
        </Container>
      </IntroWrapper>
    </HandbookWrapper>
  );
};
  
export default Intro;
