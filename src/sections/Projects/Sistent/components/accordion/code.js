import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Accordion, AccordionSummary, AccordionDetails, Typography } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const codes = [
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography>Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        This is the content for the first accordion panel.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>Accordion 2</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        This is the content for the second accordion panel.
      </Typography>
    </AccordionDetails>
  </Accordion>
</SistentThemeProvider>`,
  `const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};

<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Accordion 
    expanded={expanded === 'panel1'} 
    onChange={handleChange('panel1')}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography>General settings</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        This accordion is controlled. Only one panel can be open at a time.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion 
    expanded={expanded === 'panel2'} 
    onChange={handleChange('panel2')}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2bh-content"
      id="panel2bh-header"
    >
      <Typography>Users</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Content for the second panel.
      </Typography>
    </AccordionDetails>
  </Accordion>
</SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Accordion defaultExpanded>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography>Expanded by Default</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        This accordion panel is expanded by default using the 
        defaultExpanded prop.
      </Typography>
    </AccordionDetails>
  </Accordion>
</SistentThemeProvider>`,
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
  <Accordion disabled>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography>Disabled Accordion</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        This content cannot be accessed as the accordion is disabled.
      </Typography>
    </AccordionDetails>
  </Accordion>
</SistentThemeProvider>`,
];

const AccordionCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [expanded, setExpanded] = useState(false);

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
          <p>
            The Accordion component provides a consistent way to create expandable and collapsible content sections throughout your application.
          </p>
          <a id="Basic Accordion">
            <h2>Basic Accordion</h2>
          </a>
          <p>
            A simple accordion with multiple independent panels. Each panel can be expanded and collapsed without affecting others.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ width: "100%" }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        This is the content for the first accordion panel. You can add any content here, including text, images, or other components.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        This is the content for the second accordion panel. Accordions can contain rich content and media.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="basic-accordion" code={codes[0]} />
          </div>

          <a id="Controlled Accordion">
            <h2>Controlled Accordion</h2>
          </a>
          <p>
            A controlled accordion where the expanded state is managed by React state. This allows only one panel to be expanded at a time, providing a more focused user experience.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ width: "100%" }}>
                  <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography>
                        General settings
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      Controlled accordions manage their expanded state through React, allowing only one panel to be open at a time. This creates a cleaner, more focused user experience by preventing multiple sections from being visible simultaneously.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography>Users</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      When expanding this panel, the previously opened panel automatically collapses. This behavior is ideal for settings pages, configuration panels, and any interface where you want users to focus on one section at a time.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="controlled-accordion" code={codes[1]} />
          </div>

          <a id="Default Expanded">
            <h2>Default Expanded</h2>
          </a>
          <p>
            Use the <code>defaultExpanded</code> prop to have an accordion panel expanded by default when the component mounts.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ width: "100%" }}>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>Expanded by Default</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        This accordion panel is expanded by default using the defaultExpanded prop. Users can still collapse it.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="default-expanded" code={codes[2]} />
          </div>

          <a id="Disabled Accordion">
            <h2>Disabled Accordion</h2>
          </a>
          <p>
            Use the <code>disabled</code> prop to prevent users from interacting with an accordion panel.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <div style={{ width: "100%" }}>
                  <Accordion disabled>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>Disabled Accordion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        This content cannot be accessed as the accordion is disabled.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="disabled-accordion" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default AccordionCode;
