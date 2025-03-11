import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { SistentThemeProvider, KubernetesIcon, DesignIcon, CustomTooltip } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import debounce from "lodash.debounce";
import * as Icons from "@layer5/sistent";
import Code from "../../../../../components/CodeBlock";

// Example code snippets for usage
const codes = [
  `
  import { 
    SistentThemeProvider,
    KubernetesIcon,
    DesignIcon,
  } from "@layer5/sistent";
  `,
  `
  <SistentThemeProvider>
    <KubernetesIcon fill="#fff" />
    <DesignIcon fill="#fff" />
  </SistentThemeProvider>
  `,
];

// Filter out only the icon components from the imported Icons
const sistentIcons = Object.entries(Icons).filter(
  ([key, value]) =>
    key.endsWith("Icon") && typeof value === "function" && key !== "TooltipIcon" && key !== "componentIcon"
);

// Map the filtered icons to a usable format
const icons = sistentIcons.map(([name, icon]) => ({ name, component: icon }));

// IconCard component
const IconCard = ({ icon, isDark }) => {
  const IconComponent = icon.component;

  if (!IconComponent) {
    return null;
  }

  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleIconClick = async () => {
    const importStatement = `import { ${icon.name} } from "@layer5/sistent";`;
    try {
      await navigator.clipboard.writeText(importStatement);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      console.error("Failed to copy icon name: ", err);
    }
  };

  return (
    <CustomTooltip
      title={
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <h6
            style={{
              color: "white"
            }}
          >
            {
              `import { ${icon.name} } from "@layer5/sistent";`
            }
          </h6>
          <button
            onClick={handleIconClick}
            style={{
              opacity: isHovered ? "1" : "0.5",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {showPopup ? "Copied" : "Copy"}
          </button>
        </div>
      }
      placement="top"
    >
      <div className={`icon-card-container ${isDark ? "dark" : "light"}`}>
        <div className="icon-container">
          <IconComponent width={32} height={32} fill={isDark ? "#fff" : "#000"} />
        </div>
        <span className={`icon-name ${isDark ? "dark" : "light"}`}>{icon.name?.replace("Icon", "")}</span>
      </div>
    </CustomTooltip>
  );
};

IconCard.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.elementType.isRequired,
  }).isRequired,
  isDark: PropTypes.bool.isRequired,
};

// Main SistentIcons component
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
    <SistentLayout title="Icons">
      <div className="content">
        <a id="Identity">
          <h2>Icons</h2>
        </a>
        <p>
          Sistent provides a comprehensive collection of icons that can be used across your projects. These icons are designed to be consistent with the overall design language of the Sistent design system, ensuring a cohesive user experience.
        </p>
        <p>
          The icons are available as React components and can be easily imported and used in your application. They are also customizable in terms of size, color, and other properties.
        </p>
      </div>

      <div className="showcase">
        <div className="items">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <KubernetesIcon width={60} height={60} fill={isDark ? "#fff" : "#000"} />
            <DesignIcon width={60} height={60} fill={isDark ? "#fff" : "#000"} />
          </SistentThemeProvider>
        </div>
      </div>

      <a id="Identity">
        <h2>Usage</h2>
      </a>
      <div className="showcase">
        <Code codeString={codes[0]} language="javascript" />
        <Code codeString={codes[1]} language="javascript" />
      </div>

      <div className="main-content">
        <a id="Sistent-Icons">
          <h2>Search Icons</h2>
        </a>
        <p>
          Browse through the icons below to find the one you need.
          The search field supports synonyms—for example, try searching for "Kubernetes" or "Design".
        </p>
        <div className="icon-list">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <div className="icon-search-container">
              <input
                type="text"
                placeholder="Search icons..."
                onChange={(e) => handleSearch(e.target.value)}
                className={`icon-search-input ${isDark ? "dark" : "light"}`}
              />
            </div>
            {filteredIcons.length === 0 ? (
              <p className={`no-icons-found ${isDark ? "dark" : "light"}`}>No icons found.</p>
            ) : (
              <div className="icon-grid">
                {filteredIcons.map((icon) => (
                  <IconCard
                    key={icon.name}
                    icon={icon}
                    isDark={isDark}
                  />
                ))}
              </div>
            )}
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentIcons;