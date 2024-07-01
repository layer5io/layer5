import React, { useState, memo }  from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Col, Row } from "../../../../../reusecore/Layout";
import { Button, SistentThemeProvider, StyledDialogActions, StyledDialogContent } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const modalStyles = (isDark) => ({
  backgroundColor: isDark ? "#15272F" : "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
});

const headerStyles = (isDark) => ({
  padding: "16px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  background: isDark ? "linear-gradient(to right, #28353A, #3D4F57)" : "linear-gradient(to right, #3B687B, #507D90)",
  display: "flex",
  alignItems: "center",
  color: "#fff",
  fontWeight: "bold",
});

const footerStyles = (isDark) => ({
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  background: isDark ? "linear-gradient(to right, #28353A, #3D4F57)" : "linear-gradient(to right, #3B687B, #507D90)",
  fontWeight: "bold",
});

const GradientModal = memo(({ title, icon, children, buttons, modalWidth }) => {
  const { isDark } = useStyledDarkMode();

  return (
    <Box style={{ backgroundColor: "#E7EFF3", padding: "60px", maxWidth: modalWidth || "600px", margin: "20px auto", borderRadius: "8px" }}>
      <Box style={modalStyles(isDark)}>
        <Box style={headerStyles(isDark)}>
          {icon && <Box style={{ marginRight: "8px" }}>{icon}</Box>}
          <div style={{ fontSize: "1.25rem" }}>{title}</div>
        </Box>
        <StyledDialogContent>
          {children}
        </StyledDialogContent>
        <Box style={footerStyles(isDark)}>
          <StyledDialogActions>
            {buttons}
          </StyledDialogActions>
        </Box>
      </Box>
    </Box>
  );
});

const CustomInput = ({ label, placeholder, style }) => (
  <Box style={{ marginBottom: "16px", ...style }}>
    <Typography variant="subtitle1" gutterBottom>
      {label}
    </Typography>
    <input
      type="text"
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
      }}
    />
  </Box>
);

const CustomDropdown = ({ label, options, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <Select
        value={selectedValue}
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{placeholder}</em>;
          }
          return selected;
        }}
        displayEmpty
        fullWidth
        style={{
          borderRadius: "4px",
          height: "40px",
          color: "#8D9FA7",
          backgroundColor: "#fff"
        }}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export const ModalGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          A modal is a container that appears in front of the main content on a page, providing important information or an actionable piece of content for users to execute.
        </p>
        <div className="filterBtns">
          <TabButton
            className={location.pathname === "/projects/sistent/components/modal" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/modal")}
            title="Overview"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/modal/guidance" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/modal/guidance")}
            title="Guidance"
          />
          <TabButton
            className={location.pathname === "/projects/sistent/components/modal/code" ? "active" : ""}
            onClick={() => navigate("/projects/sistent/components/modal/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            For modals to be effective, they have to be used in the right instances to convey the needed information. Different types of modals have been curated to fill different needs across our solutions.
          </p>
          <a id="Function">
            <h2>Function</h2>
          </a>
          <p>
            Sistent’s modals function in different capacities to help with easy identification and application. These categories make for seamless traction across our solution. The categories include:
          </p>
          <h3>Workflow</h3>
          <p>
            Workflow modals consist of modals that prompt users to carry out binary or relatively simple actions while completing a current task. They can range from confirmation modals to share modals.
          </p>
          <Row Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Create User Account"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Cancel
                      </Button>
                      <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                        Create
                      </Button>
                    </>
                  }
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <CustomInput
                      label="First Name"
                      placeholder="Enter a name"
                      style={{ flex: "1" }}
                    />
                    <CustomInput
                      label="Last Name"
                      placeholder="Enter a name"
                      style={{ flex: "1" }}
                    />
                  </div>
                  <CustomInput
                    label="Email ID"
                    placeholder="Enter a valid email"
                  />
                  <CustomInput
                    label="Assign Organizations"
                    placeholder="Assign organizations"
                  />
                  <CustomDropdown
                    label="Organization Roles"
                    placeholder="Select a role"
                    options={["Role 1", "Role 2", "Role 3"]}
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>
          </Row>
          <h3>Setup</h3>
          <p>
            These modals help users to complete any tasks necessary for them to have the optimum experience while utilizing any of our solutions. These tasks could include creating teams, environment, and workspaces, linking their accounts to external tools, and so on.
          </p>
          <Row Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Invite User"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Cancel
                      </Button>
                      <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                        Create
                      </Button>
                    </>
                  }
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <CustomInput
                      label="First Name"
                      placeholder="Enter a name"
                      style={{ flex: "1" }}
                    />
                    <CustomInput
                      label="Last Name"
                      placeholder="Enter a name"
                      style={{ flex: "1" }}
                    />
                  </div>
                  <CustomDropdown
                    label="Organization"
                    placeholder="Select an organization"
                    options={["Organization 1", "Organization 2", "Organization 3"]}
                  />
                  <CustomDropdown
                    label="Teams"
                    placeholder="Select teams"
                    options={["Team 1", "Team 2", "Team 3"]}
                  />
                  <CustomDropdown
                    label="Organization Roles"
                    placeholder="Select a role"
                    options={["Role 1", "Role 2", "Role 3"]}
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>
          </Row>
          <h3>Tools</h3>
          <p>
            These modals as the name implies serve as tools for people to make use of in when carrying out some core actions across a solution. Some of these actions that exist in Meshmap for instance are importing and exporting designs as well as running performance tests.
          </p>
          <Row Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Performance Profile Wizard"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff" }}>
                        Clear
                      </Button>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Save Profile
                      </Button>
                      <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                        Run Test
                      </Button>
                    </>
                  }
                  modalWidth="800px"
                >
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                    <CustomInput
                      label="Profile Name"
                      placeholder="Enter a name"
                      style={{ width: "100%" }}
                    />
                    <CustomDropdown
                      label="Service Mesh"
                      placeholder="Select a service mesh"
                      options={["Mesh 1", "Mesh 2", "Mesh 3"]}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <CustomInput
                    label="URL to Test"
                    placeholder="Enter a valid URL"
                  />
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <CustomInput
                      label="Concurrent Requests"
                      placeholder="0"
                      style={{ flex: "1" }}
                    />
                    <CustomInput
                      label="Queries per Second"
                      placeholder="0"
                      style={{ flex: "1" }}
                    />
                    <CustomInput
                      label="Duration"
                      placeholder="30s"
                      style={{ flex: "1" }}
                    />
                  </div>
                  <CustomDropdown
                    label="Advanced Options"
                    placeholder="Select More Options"
                    options={["Option 1", "Option 2", "Option 3"]}
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>
          </Row>
          <h3>Content</h3>
          <p>
            The headings of modals are written in title case and should be no longer than three words describing what the purpose of the modal is. If the action is tied to a specific name the function of the modal should be used as the name of the modal and not the specific name. Buttons do not need to have icons included in them to ensure consistency across all buttons in modals.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};