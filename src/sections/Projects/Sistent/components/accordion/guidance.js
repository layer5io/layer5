import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Accordion, AccordionSummary, AccordionDetails, Typography } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <SistentLayout title="Accordion">
      <div className="content">
        <a id="Identity">
          <h2>Accordion</h2>
        </a>
        <p>
          An accordion is a vertically stacked list of headers that can be clicked to reveal or hide associated content. It allows users to toggle between hiding and showing large amounts of content in a compact space.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/accordion"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/accordion")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/accordion/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/accordion/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/accordion/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/accordion/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <p>
            Accordions are useful when you want to toggle between hiding and showing large amounts of content. They help reduce vertical space and improve the user experience by organizing content in a hierarchical, easy-to-scan way.
          </p>
          <ul>
            <li>Use accordions to organize related information into sections</li>
            <li>Allow users to focus on one section at a time</li>
            <li>Reduce scrolling by collapsing content that's not immediately needed</li>
            <li>Provide clear, descriptive headers for each accordion panel</li>
          </ul>

          <a id="Basic Example">
            <h3>Basic Example</h3>
          </a>
          <p>
            A simple accordion with expand/collapse functionality. Each panel can be opened and closed independently.
          </p>
          <Row className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ width: "100%" }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="usage-panel1-content"
                    id="usage-panel1-header"
                  >
                    <Typography>What is Meshery?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Meshery is the cloud native management plane offering lifecycle management of more Kubernetes-based infrastructure and applications.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="usage-panel2-content"
                    id="usage-panel2-header"
                  >
                    <Typography>What is Kanvas?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Kanvas is a visual topology and infrastructure management tool for cloud native applications and infrastructure.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </SistentThemeProvider>
          </Row>

          <a id="When to Use">
            <h2>When to Use</h2>
          </a>
          <p>
            Accordions are best used when you need to present multiple sections of content in a limited space. Here are some common use cases:
          </p>

          <h3>Frequently Asked Questions (FAQs)</h3>
          <p>
            Accordions are ideal for FAQ sections where users can expand only the questions they're interested in, making it easier to scan and find relevant information.
          </p>
          <Row className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ width: "100%" }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>How do I get started with Layer5?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Visit the Layer5 community page, join our Slack, and explore the getting started guides for each project.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Is Layer5 open source?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, all Layer5 projects are open source and welcome contributions from the community.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </SistentThemeProvider>
          </Row>

          <h3>Settings and Configuration Panels</h3>
          <p>
            Use accordions to organize different categories of settings, allowing users to focus on one category at a time.
          </p>
          <Row className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <div style={{ width: "100%" }}>
                <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      General Settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Configure general application settings such as language, timezone, and default preferences.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      Security
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Manage security settings including password policies, two-factor authentication, and API keys.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      Notifications
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Control how and when you receive notifications from the platform.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </SistentThemeProvider>
          </Row>

          <h3>Documentation and Help Sections</h3>
          <p>
            Organize documentation into collapsible sections to help users navigate through large amounts of information efficiently.
          </p>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>
          <p>
            Follow these guidelines to ensure accordions are effective and user-friendly:
          </p>
          <ul>
            <li>
              <strong>Clear Headers:</strong> Use descriptive, concise headers that clearly indicate the content within each panel. Users should be able to understand what information they'll find before expanding.
            </li>
            <li>
              <strong>Logical Grouping:</strong> Group related content together and order panels in a logical sequence (alphabetical, chronological, or by importance).
            </li>
            <li>
              <strong>Visual Indicators:</strong> Always use clear expand/collapse icons (like arrows) to indicate the current state and interactivity of each panel.
            </li>
            <li>
              <strong>Controlled vs Uncontrolled:</strong> Decide whether multiple panels can be open simultaneously (uncontrolled) or only one at a time (controlled) based on your use case.
            </li>
            <li>
              <strong>Accessible:</strong> Ensure accordions are keyboard accessible and work with screen readers. Use proper ARIA attributes for accessibility.
            </li>
            <li>
              <strong>Performance:</strong> Avoid nesting too many accordions or placing heavy content inside panels that could slow down the page.
            </li>
            <li>
              <strong>Mobile-Friendly:</strong> Accordions work particularly well on mobile devices where screen space is limited. Ensure touch targets are large enough.
            </li>
            <li>
              <strong>Default State:</strong> Consider which panels (if any) should be expanded by default based on the most commonly accessed information.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default AccordionGuidance;
