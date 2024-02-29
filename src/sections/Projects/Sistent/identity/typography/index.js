import React, { useState } from "react";
import { Container } from "../../../../../reusecore/Layout";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";
import Button from "../../../../../reusecore/Button";
import TypographyOverview from "./overview";
import TypographyGuidance from "./guidance";
import TypographyCode from "./code";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";

const overviewContents = [
  { id: 0, link: "#The Basics", text: "The Basics" },
  { id: 1, link: "#Type Scale", text: "Type Scale" },
  { id: 2, link: "#Font Pairing", text: "Font Pairing" },
];

const guidanceContent = [
  {
    id: 0,
    link: "#Type Scale Customization",
    text: "Type Scale Customization",
  },
  { id: 1, link: "#Establishing Hierarchy", text: "Establishing Hierarchy" },
  { id: 2, link: "#Font Specification", text: "Font Specification" },
];

const codeContent = [
  { id: 0, link: "#Primitive Category", text: "Primitive Category" },
  { id: 1, link: "#Semantic Category", text: "Semantic Category" },
];

const SistentTypography = () => {
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
        <h1>Typography</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Identity">
              <h2>Typography</h2>
            </a>
            <p>
              Most of the information that is present in a user interface for
              the purpose of passing information across is represented via
              typography. Correct typography structure and appropriate
              application is important in all interfaces.
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
            {activeTab === "overview" && <TypographyOverview />}
            {activeTab === "guidance" && <TypographyGuidance />}
            {activeTab === "code" && <TypographyCode />}
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents()} />
      </div>
    </SistentWrapper>
  );
};

export default SistentTypography;
