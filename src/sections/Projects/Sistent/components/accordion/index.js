import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentThemeProvider, Accordion, AccordionSummary, AccordionDetails, Typography } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SistentAccordion = () => {
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
            Accordions are useful when you want to toggle between hiding and showing large amounts of content. They help reduce vertical space and improve the user experience by organizing content in a hierarchical, easy-to-scan way.
          </p>
          <a id="Basic Accordion">
            <h2>Basic Accordion</h2>
          </a>
          <p>
            A basic accordion with multiple panels that can be expanded and collapsed independently.
          </p>
          <Row className="image-container">
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
          </Row>
          <a id="Controlled Accordion">
            <h2>Controlled Accordion</h2>
          </a>
          <p>
            A controlled accordion where only one panel can be expanded at a time, providing a more focused user experience.
          </p>
          <Row className="image-container">
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
                <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography>
                      Advanced settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Accordions help organize complex information into digestible sections. They reduce cognitive load by hiding content until users actively choose to reveal it, making interfaces feel less overwhelming and more navigable.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentAccordion;
