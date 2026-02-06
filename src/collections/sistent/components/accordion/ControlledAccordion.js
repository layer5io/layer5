import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@sistent/sistent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ControlledAccordion = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
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
  );
};

export default ControlledAccordion;
