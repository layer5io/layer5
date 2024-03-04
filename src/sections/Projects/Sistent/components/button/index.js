import React, { useState } from "react";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import { Container } from "../../../../../reusecore/Layout";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";
import TabButton from "../../../../../reusecore/Button";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";

import { ButtonOverview } from "./overview";
import { ButtonGuidance } from "./guidance";
import { ButtonCode } from "./code";

const overviewContents = [
  { id: 0, link: "#Types", text: "Types" },
  { id: 1, link: "#Sizes", text: "Sizes" },
  { id: 2, link: "#Adding Icons", text: "Adding Icons" },
];

const guidanceContents = [
  { id: 0, link: "#Tonal Palettes", text: "Tonal Palettes" },
  { id: 1, link: "#Basic Colors", text: "Basic Colors" },
  { id: 2, link: "#Token Specification", text: "Token Specification" },
];

const codeContents = [
  { id: 0, link: "#Primitive Category", text: "Primitive Category" },
  { id: 1, link: "#Semantic Category", text: "Semantic Category" },
];

const SistentButton = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const contents = () => {
    if (activeTab === "overview") {
      return overviewContents;
    } else if (activeTab === "guidance") {
      return guidanceContents;
    } else if (activeTab === "code") {
      return codeContents;
    }
  };

  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Button</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Identity">
              <h2>Button</h2>
            </a>
            <p>
              Colors when accurately applied can be a potent tool that enables
              designers and developers to implement solutions with speed and
              efficiency. Here are a couple of things to keep in mind.
            </p>
            <div className="filterBtns">
              <TabButton
                className={activeTab == "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
                title="Overview"
              />
              <TabButton
                className={activeTab == "guidance" ? "active" : ""}
                onClick={() => setActiveTab("guidance")}
                title="Guidance"
              />
              <TabButton
                className={activeTab == "code" ? "active" : ""}
                onClick={() => setActiveTab("code")}
                title="Code"
              />
            </div>
            {activeTab === "overview" && <ButtonOverview />}
            {activeTab === "guidance" && <ButtonGuidance />}
            {activeTab === "code" && <ButtonCode />}
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents()} />
      </div>
    </SistentWrapper>
  );
};

export default SistentButton;
