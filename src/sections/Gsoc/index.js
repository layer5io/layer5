import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import logo from "../../images/layer5/gsoc.svg";

import GSOCSectionWrapper from "./gsoc.style";


const Gsoc = () => {
    return (
        <GSOCSectionWrapper>
            <Container>
            <div style={{zIndex: '20'}}>
            <h3 className="post-title" style={{textAlign: 'center',color: '#1D316C',fontSize: '2rem',margin:' 1.46rem 0 1.168rem 0'}}>
    Google Summer of Code 2020
  </h3>
  <h3 className="black-text">Google Summer of Code 2020 and Layer5</h3>
  <img
    src={logo}
    style={{width: '19vw', float: 'right', marginLeft: '20px'}}
  />
  <h5 className="black-text">2020 Program Timeline</h5>
  <div className="gsoc">
    <ul>
      <li className="gsoc">January 14 - Organization applications open</li>
      <li className="gsoc">February 20 - Accepted GSoC Organizations announced</li>
      <li className="gsoc">March 16-March 31 - Students submit their proposals</li>
      <li className="gsoc">April 27 - Accepted students are announced</li>
      <li className="gsoc">April 27-May 18 - Community bonding period with orgs</li>
      <li className="gsoc">May 18-Aug 17 - Students code the summer away</li>
      <li className="gsoc">
        August 25 - Successful student projects are announced
      </li>
    </ul>
  </div>
  <h5 className="black-text">Statistics</h5>
  <div style={{marginLeft: '25px'}}>
    <ul>
      <li className="gsoc">
        In 15 years 15,926 students from 109 countries have been accepted into
        GSoC
      </li>
      <li className="gsoc">
        Countries with the most students: India (4,065), United States (2,552),
        and Germany (870 )
      </li>
      <li className="gsoc">
        Approximately 36+ million lines of code have been produced
      </li>
    </ul>
  </div>
  <h5 className="black-text">Project Ideas</h5>
  <div style={{marginLeft: '25px'}}>
    <b>SMI Conformance Testing</b>
    <ul>
      <li className="gsoc">
        <b>Description</b>: Ensure that a service mesh is properly configured
        and that its behavior conforms to official SMI specifications.
        Conformance consists of both capabilities and compliance status as
        outlined in the
        <a
          href="https://docs.google.com/document/d/1HL8Sk7NSLLj-9PRqoHYVIGyU6fZxUQFotrxbmfFtjwc/edit"
          >design specification</a>
      </li>
      <li className="gsoc"><b>Recommended Skills</b>: Golang, Kubernetes</li>
      <li className="gsoc">
        <b>Mentor(s)</b>: Lee Calcote (<a href="https://twitter.com/lcalcote"
          >@lcalcote</a
        >), Sagar Utekar (<a href="https://twitter.com/named_uttu"
          >@named_uttu</a
        >)
      </li>
      <li className="gsoc">
        <b>Issue(s)</b>:
        <a href="https://github.com/servicemeshinterface/smi-spec/issues/70 "
          >https://github.com/servicemeshinterface/smi-spec/issues/70
        </a>
      </li>
      <li className="gsoc">
      <b>Mentee:</b> 
Naveen Jain (<a href="https://github.com/nveenjain">@nveenjain</a>)
</li>
    </ul>
  </div>
  <div style={{marginLeft: '25px'}}>
    <b>Distributed Load Testing of Service Meshes</b>
    <ul>
      <li className="gsoc">
        <b>Description</b>: Many performance benchmarks are limited to single
        instance load generation (single pod load generator). This limits the
        amount of traffic that can be generated to output of the single machine
        that the benchmark tool runs on in or out of a cluster. Overcoming this
        limitation would allow for more flexible and robust testing. Distributed
        load testing in parallel poses a challenge when merging results without
        losing the precision we need to gain insight into the high tail
        percentiles. Use Meshery’s interface for supporting different load
        generators (a point of extensibility) to place support for Vegeta.
        Workloads running on service meshes are hit in various ways and
        generally not from the same source. Use of a distributed load generator
        will aid in the testing of service mesh behavior.
      </li>
      <li className="gsoc"><b>Recommended Skills</b>: Golang, Kubernetes</li>
      <li className="gsoc">
        <b>Mentor(s)</b>: Prateek Sahu (<a
          href="https://twitter.com/prateeksahu22"
          >@PrateekSahu22</a>), Kanishkar J (<a href="https://twitter.com/_kanishkarj_"
          >@_kanishkarj_</a>)
      </li>
      <li className="gsoc">
        <b>Issue(s)</b>:
        <a href="https://github.com/envoyproxy/envoy-perf/issues/72"
          >https://github.com/envoyproxy/envoy-perf/issues/72
        </a>
      </li>
            <li className="gsoc">
      <b>Mentee:</b> 
Kush Trivedi (<a href="https://github.com/kushthedude">@kushthedude</a>)
</li>
    </ul>
  </div>
  
  


  <div style={{flexGrow: '0.25'}}>&nbsp;</div>
  <hr />
  <div style={{flexGrow: '0.25'}}>&nbsp;</div>

  <div
    id="layer5-intro"
    className="card-content"
    style={{position: 'relative', float: 'right',marginLeft:'20px'}}
  >
    <iframe
      width="392"
      height="220.5"
      src="https://www.youtube.com/embed/0yN5T5LB9ps"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <ul>
    <ol>
      <b>What is Layer5?</b>
    </ol>
    <ol>
      While small, the Layer5 community represents the largest collection of
      service mesh projects and their maintainers in the world. We build
      projects to provide learning environments, deployment and operational best
      practices, performance benchmarks, create documentation, share networking
      opportunities, and more. Our shared commitment to the open source spirit
      pushes Layer5 projects forward. New members are always welcome.
    </ol>
  </ul>
  <ul>
    <ol>
      <b>Is it Open Source?</b>
    </ol>
    <ol>
      Layer5 projects are open source software. Anyone can download, use, work
      on, and share it with others. It's built on principles like collaboration,
      globalism, and innovation. Layer5 projects are distributed under the terms
      of Apache v2.
    </ol>
  </ul>
  <ul>
    <ol>
      <b>Google Summer of Code Participation?</b>
    </ol>
    <ol>
      The key component of these projects is our Community. This community,
      which you will join as an participant in Google Summer of Code, is
      improving the world of diverse cloud native systems. Your contributions
      will affect people you've never met. The Layer5 community includes
      software engineers, researchers, students, artists, system administrators,
      operators and web designers -- all of whom will be happy to help you get
      started.
    </ol>
  </ul>
  <ul>
    <ol>
      We believe that all contributors should expect and be part of a safe and
      friendly environment for constructive contribution. We can more
      effectively and successfully compare and challenge different ideas to find
      the best solutions for advancement, while building the size, diversity,
      and strength of our community.
    </ol>
  </ul>

  <div
    id="gsoc-2020"
    className="card-content"
    style={{position: 'relative', float: 'center', verticalAlign: 'bottom'}}
  >
    <h3 style={{textAlign: 'center', color: 'aliceblue'}}>
      <a
        style={{
          fontSize: '21px',
          paddingBottom: '40px',
          paddingTop: '10px',
          width: '300px'}}
        className="waves-effect waves-light btn l5-dark-grey-text darken-2 l5-dark-yellow z-depth-2"
        href="http://slack.layer5.io"
        >Participate</a>
    </h3>
  </div>
</div>
            </Container>
        </GSOCSectionWrapper>
    );
};

export default Gsoc;
