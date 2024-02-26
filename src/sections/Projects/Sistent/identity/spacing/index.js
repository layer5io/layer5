import React, { useState } from "react";
import { Container } from "../../../../../reusecore/Layout";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";
import Button from "../../../../../reusecore/Button";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";
import { SpacingOverview } from "./overview";
import { SpacingGuidance } from "./guidance";
import { SpacingCode } from "./code";

const contents = [{ id: 0, link: "#About Sistent", text: "About Sistent" }];

const SistentIdentitySpacing = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Spacing</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Identity">
              <h2>Spacing</h2>
            </a>
            <p>
              Space is the unseen component in designed solutions that enables
              clear, concise, and consistent arrangement of interface elements
              across a screen.
            </p>
            <div className="filterBtns">
              <Button
                className={activeTab == "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
                title="Overview"
              />
              <Button
                className={activeTab == "guidance" ? "active" : ""}
                onClick={() => setActiveTab("guidance")}
                title="Guidance"
              />
              <Button
                className={activeTab == "code" ? "active" : ""}
                onClick={() => setActiveTab("code")}
                title="Code"
              />
            </div>
            {activeTab === "overview" && <SpacingOverview />}
            {activeTab === "guidance" && <SpacingGuidance />}
            {activeTab === "code" && <SpacingCode />}
            <SistentPagination />
          </div>
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentIdentitySpacing;
