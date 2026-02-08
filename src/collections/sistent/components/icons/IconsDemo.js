import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { SistentThemeProvider, KubernetesIcon, DesignIcon, CustomTooltip } from "@sistent/sistent";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";
import * as Icons from "@sistent/sistent";
import debounce from "lodash.debounce";

// Filter out only the icon components from the imported Icons
const sistentIcons = Object.entries(Icons).filter(
  ([key, value]) =>
    key.endsWith("Icon") && typeof value === "function" && key !== "TooltipIcon" && key !== "componentIcon"
);

// Map the filtered icons to a usable format
const icons = sistentIcons.map(([name, icon]) => ({ name, component: icon }));

const IconCard = ({ icon, isDark }) => {
  const IconComponent = icon.component;

  if (!IconComponent) {
    return null;
  }

  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleIconClick = async () => {
    const importStatement = `import { ${icon.name} } from "@sistent/sistent";`;
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
              `import { ${icon.name} } from "@sistent/sistent";`
            }
          </h6>
          <button
            onClick={handleIconClick}
            style={{
              opacity: isHovered ? "1" : "0.5",
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              background: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "2px 8px",
              borderRadius: "4px"
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
      <div className={`icon-card-container ${isDark ? "dark" : "light"}`} style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          padding: "1rem", 
          border: `1px solid ${isDark ? "#333" : "#eee"}`, 
          borderRadius: "8px",
          width: "120px",
          height: "120px",
          justifyContent: "center",
          gap: "10px",
          cursor: "pointer"
      }} onClick={handleIconClick}>
        <div className="icon-container">
          <IconComponent width={32} height={32} fill={isDark ? "#fff" : "#000"} />
        </div>
        <span className={`icon-name ${isDark ? "dark" : "light"}`} style={{ fontSize: "12px", textAlign: "center" }}>
            {icon.name?.replace("Icon", "")}
        </span>
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
  color: PropTypes.string
};

const IconsDemo = ({ type }) => {
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
  
  if (type === "basic") {
      return (
        <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <KubernetesIcon />
        </SistentThemeProvider>
      );
  }
  
  if (type === "size") {
      return (
        <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <DesignIcon width={40} height={40} />
        </SistentThemeProvider>
      );
  }

  if (type === "all") {
    return (
        <div className="icon-list">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <div className="icon-search-container" style={{ marginBottom: "2rem" }}>
              <input
                type="text"
                placeholder="Search icons..."
                onChange={(e) => handleSearch(e.target.value)}
                className={`icon-search-input ${isDark ? "dark" : "light"}`}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: `1px solid ${isDark ? "#444" : "#ccc"}`,
                    background: isDark ? "#222" : "#fff",
                    color: isDark ? "#fff" : "#000"
                }}
              />
            </div>
            {filteredIcons.length === 0 ? (
              <p className={`no-icons-found ${isDark ? "dark" : "light"}`}>No icons found.</p>
            ) : (
              <div className="icon-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
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
    );
  }

  return null;
};

export default IconsDemo;
