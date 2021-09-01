import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import {Link} from "gatsby";


const CommunityGuide= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Community</h1>
      </div>    
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>Where do I start? Who should I talk to?</h2>
            <p>We realize that finding your way in a maze of fast-paced projects can be baffling, so we have an amazing program called “The Meshmate Program”. A <Link to="/community/meshmates">MeshMate </Link> is an experienced Layer5 community member, who will be available to guide you as you explore the various projects and find your areas of interest.</p>
            <h3>Become a Meshtee today!	</h3>
            <p>We love you to fill the Community Member Form and let us know you want a Meshamate. Then you can go ahead to review each MeshMate profile to identify your ideal mentor. Once you have identified your ideal MeshMate, reach out and introduce yourself in the #newcomers channel on Slack. Tell them about your areas of interest and focus in terms of languages and technology. The more they know about you, the more they can align project needs with your interests and abilities.</p>
            <h2>Why contribute?</h2>
            <p>Contributing to Open Source is an excellent way for gaining knowledge, engaging with the community, enhancing your skill set, and networking with different people across the world. As a contributor, working on a project like Meshery expands your experience with Docker, Kubernetes, Istio, Linkerd, Envoy, Octarine, App Mesh, Consul, Kuma, Maesh, and so on. With other amazing projects, you will also get to work with experienced software engineers in languages the projects use like Golang, Rust, Javascript (React, Gatsby, Nextjs, BillboardJs). In addition, contributors can get to work with DevOps tooling, continuous integration pipelining, documentation, and community management.</p>
          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};
  
export default CommunityGuide;