import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import HandbookCard from "../../../components/HandbookCard/index";
import {Link} from "gatsby";


const handbookHome= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Community Handbook</h1>
      </div>

      <div className="community-home-subtitle">
        <h3>Explore the Layer5 Community</h3>
      </div>
       
      <div className="community-home-container">
        <HandbookCard 
          title="About" 
          description="Layer5 is a community and open source-centered service mesh company, representing the largest collection of service meshes and their maintainers in the world." 
          to="/community/handbook/contributor-journey" 
        />

        <HandbookCard 
          title="Community" 
          description="A MeshMate is an experienced Layer5 community member, who will be available to guide you as you explore the various projects and find your areas of interest." 
          to="/community/handbook/community" 
        />

        <HandbookCard 
          title="Community Roles" 
          description="Many roles exist in the community. Individuals who perform a role, bolster community and project growth by participating in decision-making and being accountable for those decisions." 
          to="/community/handbook/community-roles" 
        />

        <HandbookCard 
          title="Contribution" 
          description="Pull requests (PRs) are the best ways to propose changes to a project repository. At Layer5 org, we use the Github Flow." 
          to="/community/handbook/contribution" 
        />

        <HandbookCard 
          title="Repository Overview" 
          description="This overview serves as resources to newcomers seeking a perspective of the collective community efforts (from the limited vantage point of a code-centric perspective)." 
          to="/community/handbook/repository-overview" 
        />

        <HandbookCard 
          title="Projects" 
          description="Layer5 Projects: Layer5, Meshery, Service Mesh Performance, NightHawk" 
          to="/community/handbook/projects" 
        />

        <HandbookCard 
          title="Mentorship Programs" 
          description="As an open-source organization and a community, we participate in different mentorships programs where project ideas are submitted for people to contribute to during the program." 
          to="/community/handbook/mentorship-programs" 
        />

        <HandbookCard 
          title="Learning" 
          description="As a community, we have put together good learning materials and resources to guide you through learning about service meshes." 
          to="/community/handbook/learn-layer5" 
        />

        <HandbookCard 
          title="Connect with Us" 
          description="We are a community of like-minded people with over a thousand members. Join our Slack Workspace and interact with people" 
          to="/community/handbook/connect-with-us" 
        />

        <HandbookCard 
          title="Code of Conduct" 
          description="At Layer5 We follow the CNCF Code of Conduct. We pledge to respect all people who contribute through reporting issues, to submit pull requests or patches, and other activities." 
          to="/community/handbook/code-of-conduct" 
        />
        <HandbookCard 
          title="FAQs" 
          description="General frequently asked questions (FAQ) about Layer5 and people who contribute through reporting issues, to submit pull requests or patches, and other activities." 
          to="/community/handbook/faq" 
        />
      </div>
    </HandbookWrapper>
  );
};
  
export default handbookHome;