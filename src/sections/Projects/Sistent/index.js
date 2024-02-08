import React from "react";
import SistentWrapper from "./sistent.style";
import HandbookCard from "../../../components/HandbookCard";

const SistentHome = () => {
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Sistent</h1>
      </div>
      <div className="community-home-subtitle">
        <h3>Design system for Layer5 projects</h3>
      </div>
      <div className="community-home-container">
        <HandbookCard
          title="About"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          to="/projects/sistent/about"
        />
        <HandbookCard
          title="Identity"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          to="/projects/sistent/identity"
        />
        <HandbookCard
          title="Components"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          to="/projects/sistent/components"
        />
        <HandbookCard
          title="Patterns & Templates"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          to="/projects/sistent/patterns"
        />
      </div>
    </SistentWrapper>
  );
};

export default SistentHome;
