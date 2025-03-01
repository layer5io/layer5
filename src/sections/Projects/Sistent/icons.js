import React, { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Container } from "../../../reusecore/Layout";
import SistentWrapper from "./sistent.style";
import TOC from "../../../components/SistentNavigation";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import SistentPagination from "../../../components/SistentNavigation/pagination";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "./components/button/code-block";
import { SistentThemeProvider, KubernetesIcon , DesignIcon } from "@layer5/sistent";
import * as Icons from "@layer5/sistent";
import debounce from "lodash.debounce";

// Constants
const contents = [{ id: 0, link: "#Sistent Icons", text: "Sistent Icons" }];
const codes = [
  "npm i @layer5/sistent",
  `import { 
    SistentThemeProvider,
    KubernetesIcon,
    DesignIcon,
  } from "@layer5/sistent";
  
  <SistentThemeProvider>
    <KubernetesIcon fill="#fff" />
    <DesignIcon fill="#fff" />
  </SistentThemeProvider>`,
];

// Filter and map icons
const sistentIcons = Object.entries(Icons).filter(
  ([key, value]) => key.endsWith("Icon") && typeof value === "function" && key !== "TooltipIcon" && key !== "componentIcon"
);

const icons = Object.keys(sistentIcons).map((iconName) => {
  const curr = sistentIcons[iconName];
  const name = curr[0];
  const icon = Icons[curr[0]];
  return {
    name: name,
    component: icon,
  };
});

// Reusable IconCard Component
const IconCard = ({ icon, isDark }) => {
  const IconComponent = icon.component;

  if (!IconComponent) {
    console.error(`Icon component "${icon.name}" is undefined.`);
    return null;
  }

  return (
    <div className={`icon-card ${isDark ? "dark" : "light"}`}>
      <div className="icon-container">
        <IconComponent width={32} height={32} fill={isDark ? "#fff" : "#000"} />
      </div>
      <span className="icon-name">{icon.name}</span>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.elementType.isRequired,
  }).isRequired,
  isDark: PropTypes.bool.isRequired,
};

// Main SistentIcons Component
const SistentIcons = () => {
  const { isDark } = useStyledDarkMode();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(
    debounce((term) => {
      setSearchTerm(term);
    }, 300),
    []
  );

  const filteredIcons = useMemo(
    () =>
      icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Sistent Icons</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Sistent Icons">
              <h2>Sistent Icons</h2>
            </a>
            <p>
              Sistent provides a comprehensive collection of icons that can be used across your projects. These icons are designed to be consistent with the overall design language of the Sistent design system, ensuring a cohesive user experience.
            </p>
            <p>
              The icons are available as React components and can be easily imported and used in your application. They are also customizable in terms of size, color, and other properties.
            </p>

            <a id="Installation">
              <h2>Installation and Quickstart</h2>
            </a>
            <p>To install the Sistent NPM package, run:</p>
            <div className="showcase">
              <CodeBlock name="installation" code={codes[0]} />
            </div>
            <p>
              After installation, you can import Sistent theme and any Sistent icon from "@layer5/sistent". The icon needs to be included inside "SistentThemeProvider".
            </p>
            <p>Here’s an example of how to use Sistent icons:</p>
            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <KubernetesIcon width={32} height={32} fill={isDark ? "#fff" : "#000"} />
                  <DesignIcon width={32} height={32} fill={isDark ? "#fff" : "#000"} />
                </SistentThemeProvider>
              </div>
              <CodeBlock name="icons" code={codes[1]} />
            </div>

            <a id="Icon List">
              <h2>Icon List</h2>
            </a>
            <p>
              Below is a list of some of the icons available in Sistent. You can use these icons by importing them from the Sistent package and using them as React components.
            </p>
            <div className="icon-list">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div className="icon-search-container">
                  <input
                    type="text"
                    placeholder="Search icons..."
                    onChange={(e) => handleSearch(e.target.value)}
                    className="icon-search-input"
                  />
                </div>
                {filteredIcons.length === 0 ? (
                  <p className="no-icons-found">No icons found.</p>
                ) : (
                  <div className="icon-grid">
                    {filteredIcons.map((icon) => (
                      <IconCard key={icon.name} icon={icon} isDark={isDark} />
                    ))}
                  </div>
                )}
              </SistentThemeProvider>
            </div>
          </div>
          <SistentPagination />
        </Container>
        <IntraPage contents={contents} />
      </div>
    </SistentWrapper>
  );
};

export default SistentIcons;