import React, { useState } from "react";
import { Container } from "../../../../../reusecore/Layout";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";
import Button from "../../../../../reusecore/Button";
import ColorOverview from "./overview";
import ColorGuidance from "./guidance";
import ColorCode from "./code";

const overviewContents = [
  { id: 0, link: "#Introduction", text: "Introduction" },
  { id: 1, link: "#Color Anatomy", text: "Color Anatomy" },
  { id: 2, link: "#Layer Hirarchy", text: "Layer Hirarchy" },
  {
    id: 3,
    link: "#Green Color Accessbility",
    text: "Green Color Accessbility",
  },
];

const guidanceContent = [
  { id: 0, link: "#Tonal Palettes", text: "Tonal Palettes" },
  { id: 1, link: "#Basic Colors", text: "Basic Colors" },
  { id: 2, link: "#Token Specification", text: "Token Specification" },
];

const codeContent = [
  { id: 0, link: "#Primitive Category", text: "Primitive Category" },
  { id: 1, link: "#Semantic Category", text: "Semantic Category" },
];

const SistentIdentityColor = () => {
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
        <h1>Color</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Identity">
              <h2>Color</h2>
            </a>
            <p>
              Colors when accurately applied can be a potent tool that enables
              designers and developers to implement solutions with speed and
              efficiency. Here are a couple of things to keep in mind.
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
            {activeTab === "overview" && <ColorOverview />}
            {activeTab === "guidance" && <ColorGuidance />}
            {activeTab === "code" && <ColorCode />}
          </div>
        </Container>
        <IntraPage contents={contents()} />
      </div>
    </SistentWrapper>
  );
};

export default SistentIdentityColor;
