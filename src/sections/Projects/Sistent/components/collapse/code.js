import React, { useState, useMemo, useEffect } from "react";
import { Collapse, Button, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const TABS = ["Overview", "Guidance", "Code"];

const collapseExamples = [
  {
    title: "Basic Collapse",
    description: "A simple collapsible section that can be toggled with a button click.",
    element: ({ isDark }) => {
      const [expanded, setExpanded] = useState(false);
      return (
        <>
          <Button
            variant="contained"
            onClick={() => setExpanded(!expanded)}
            style={{ marginBottom: "1rem" }}
          >
            {expanded ? "Collapse" : "Expand"}
          </Button>
          <Collapse in={expanded}>
            <div style={{
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: isDark ? "#333" : "#f5f5f5"
            }}>
              This content will be collapsed/expanded with a smooth animation.
            </div>
          </Collapse>
        </>
      );
    },
    code: `import { Collapse, Button } from "@sistent/sistent";
import { useState } from "react";

function BasicCollapse() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </Button>
      <Collapse in={expanded}>
        <div style={{ padding: '1rem', border: '1px solid #ddd' }}>
          Content to be collapsed/expanded
        </div>
      </Collapse>
    </>
  );
}`,
    id: "basic-collapse"
  },
  {
    title: "Default Expanded",
    description: "A collapsible section that starts expanded by default.",
    element: ({ isDark }) => {
      const [expanded, setExpanded] = useState(true);
      return (
        <>
          <Button
            variant="outlined"
            onClick={() => setExpanded(!expanded)}
            style={{ marginBottom: "1rem" }}
          >
            {expanded ? "Collapse" : "Expand"}
          </Button>
          <Collapse in={expanded}>
            <div style={{
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: isDark ? "#333" : "#f5f5f5"
            }}>
              This content is expanded by default. Click the button to collapse it.
            </div>
          </Collapse>
        </>
      );
    },
    code: `function DefaultExpanded() {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </Button>
      <Collapse in={expanded}>
        <div>Content that's expanded by default</div>
      </Collapse>
    </>
  );
}`,
    id: "default-expanded"
  },
  {
    title: "Unmount on Exit",
    description: "Unmounts the content when collapsed for better performance with large content.",
    element: ({ isDark }) => {
      const [expanded, setExpanded] = useState(false);
      return (
        <>
          <Button
            variant="text"
            onClick={() => setExpanded(!expanded)}
            style={{ marginBottom: "1rem" }}
          >
            {expanded ? "Collapse (unmounts content)" : "Expand (mounts content)"}
          </Button>
          <Collapse in={expanded} unmountOnExit>
            <div style={{
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: isDark ? "#333" : "#f5f5f5"
            }}>
              This content will be unmounted when collapsed (check the React DevTools).
            </div>
          </Collapse>
        </>
      );
    },
    code: `function UnmountOnExit() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </Button>
      <Collapse in={expanded} unmountOnExit>
        <div>Content that unmounts when collapsed</div>
      </Collapse>
    </>
  );
}`,
    id: "unmount-on-exit"
  },
  {
    title: "Custom Transition",
    description: "Customize the transition duration and easing function.",
    element: ({ isDark }) => {
      const [expanded, setExpanded] = useState(false);
      return (
        <>
          <Button
            variant="contained"
            onClick={() => setExpanded(!expanded)}
            style={{ marginBottom: "1rem" }}
          >
            {expanded ? "Fast Collapse" : "Slow Expand"}
          </Button>
          <Collapse
            in={expanded}
            timeout={expanded ? 1000 : 300} // Slower when expanding, faster when collapsing
            easing={expanded ? "cubic-bezier(0.4, 0, 0.2, 1)" : "ease-out"}
          >
            <div style={{
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: isDark ? "#333" : "#f5f5f5"
            }}>
              Notice the different animation speeds when expanding vs collapsing.
            </div>
          </Collapse>
        </>
      );
    },
    code: `function CustomTransition() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Fast Collapse' : 'Slow Expand'}
      </Button>
      <Collapse 
        in={expanded} 
        timeout={expanded ? 1000 : 300}
        easing={expanded ? "cubic-bezier(0.4, 0, 0.2, 1)" : "ease-out"}
      >
        <div>Custom transition content</div>
      </Collapse>
    </>
  );
}`,
    id: "custom-transition"
  }
];

const CollapseComponent = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  // Determine active tab from URL
  const activeTab = useMemo(() => {
    const path = location.pathname;
    if (path.endsWith("/code")) return "Code";
    if (path.endsWith("/guidance")) return "Guidance";
    return "Overview";
  }, [location.pathname]);

  // Handle tab change
  const handleTabChange = (tab) => {
    const basePath = "/projects/sistent/components/collapse";
    const newPath = tab === "Overview" ? basePath : `${basePath}/${tab.toLowerCase()}`;
    if (location.pathname !== newPath) {
      navigate(newPath);
    }
  };

  return (
    <SistentLayout title="Collapse">
      <section className="content" style={{ padding: "2rem 0" }}>
        <a id="Layout" style={{ display: "block", marginBottom: "1.5rem" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>Collapse</h2>
        </a>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>
          The Collapse component provides a smooth, animated way to show and hide content.
          Below are various examples demonstrating its capabilities and usage patterns.
        </p>

        <div className="filterBtns" style={{ marginBottom: "2.5rem" }}>
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              title={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => handleTabChange(tab)}
            />
          ))}
        </div>

        <div className="main-content" style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {collapseExamples.map((example) => (
            <div key={example.id} className="example-container" style={{
              marginBottom: "2.5rem",
              padding: "1.5rem",
              backgroundColor: isDark ? "#1e1e1e" : "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: isDark ? "#fff" : "#333"
              }}>
                {example.title}
              </h3>
              <p style={{
                fontSize: "1.05rem",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
                color: isDark ? "#e0e0e0" : "#555"
              }}>
                {example.description}
              </p>
              <div className="example-preview" style={{
                padding: "1.5rem",
                border: `1px solid ${isDark ? "#444" : "#e0e0e0"}`,
                borderRadius: "6px",
                marginBottom: "1.5rem",
                backgroundColor: isDark ? "#2a2a2a" : "#fff",
                boxShadow: isDark ? "0 2px 4px rgba(0,0,0,0.2)" : "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  {example.element({ isDark })}
                </SistentThemeProvider>
              </div>
              <div className="code-block-container" style={{
                marginTop: "1.5rem",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}>
                <CodeBlock name={`collapse-${example.id}`} code={example.code} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </SistentLayout>
  );
};

export default CollapseComponent;