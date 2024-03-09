import React, { useState } from "react";
import SistentWrapper from "../../sistent.style";
import TOC from "../../../../../components/SistentNavigation";
import { Container } from "../../../../../reusecore/Layout";
import SistentPagination from "../../../../../components/SistentNavigation/pagination";
import TabButton from "../../../../../reusecore/Button";
import IntraPage from "../../../../../components/handbook-navigation/intra-page";

import { TextInputOverview } from "./overview";
import { TextInputGuidance } from "./guidance";
import { TextInputCode } from "./code";

const overviewContents = [
  { id: 0, link: "#Design", text: "Design" },
  { id: 1, link: "#Sizes", text: "Sizes" },
  { id: 2, link: "#Adding Icons", text: "Adding Icons" },
];

const guidanceContents = [
  { id: 0, link: "#Function", text: "Function" },
  { id: 1, link: "#Labelling", text: "Labelling" },
];

const codeContents = [
  { id: 0, link: "#Basic Button", text: "Basic Button" },
  { id: 1, link: "#Sizes", text: "Sizes" },
  { id: 1, link: "#Adding Icons", text: "Adding Icons" },
];

const SistentTextInput = () => {
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
              <h2>Text Input</h2>
            </a>
            <p>
              Text inputs are important elements that help users interact with
              an experience by providing text commands that will in turn return
              expected results. These commands can range from providing a free
              range of personal information to entering a limited number of
              characters for a use case.
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
            {activeTab === "overview" && <TextInputOverview />}
            {activeTab === "guidance" && <TextInputGuidance />}
            {activeTab === "code" && <TextInputCode />}
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents()} />
      </div>
    </SistentWrapper>
  );
};

export default SistentTextInput;
