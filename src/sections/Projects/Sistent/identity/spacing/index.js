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

const overviewContents = [
  { id: 0, link: "#The Basics", text: "The Basics" },
  { id: 1, link: "#Scaling", text: "Scaling" },
  { id: 2, link: "#Text and Spacing", text: "Text and Spacing" },
];

const guidanceContent = [
  { id: 0, link: "#Spatial Organization", text: "Spatial Organization" },
  {
    id: 1,
    link: "#Space Application Considerations",
    text: "Space Application Considerations",
  },
];

const codeContent = [
  { id: 0, link: "#Primitive Category", text: "Primitive Category" },
  { id: 1, link: "#Semantic Category", text: "Semantic Category" },
];
const SistentIdentitySpacing = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const contents = () => {
    if (activeTab === "overview") {
      return overviewContents;
    } else if (activeTab === "guidance") {
      return guidanceContent;
    } else if (activeTab === "code") {
      return codeContent;
    }
  };

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
        <IntraPage contents={contents()} />
      </div>
    </SistentWrapper>
  );
};

export default SistentIdentitySpacing;
