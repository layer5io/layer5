import React, { useState, memo } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { Button, Input, SistentThemeProvider, StyledDialogActions, StyledDialogContent } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `  <SistentThemeProvider>
       <Button variant="contained">Filled</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="outlined">Outlined</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="text">Text</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="contained">48px Height</Button>
       <Button variant="contained">56px Height</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
      <Button
        variant="contained"
        size="medium"
        endIcon={<FaArrowRight size={12} />}
      >
        Next
      </Button>
  </SistentThemeProvider>`,
];

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
          <div style={{ fontSize: "1.25rem" }}>{title}</div>
          {icon && <Box style={{ marginLeft: "auto", fontSize: "1.2rem" }}>{icon}</Box>}
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

export const ModalCode = () => {
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
            className={
              location.pathname === "/projects/sistent/components/modal"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/modal")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/modal/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/modal/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/modal/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Modals communicate actions to users and they can be placed at
            several places throughout the user interface.
          </p>
          <h2>Workflow</h2>
          <p>Workflow modals can take various forms depending on their functions.</p>
          <h3>Confirmation</h3>
          <p>These modals are used to provide users with a second chance before proceeding with a dangerous or irreversible action along their path.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Delete Team"
                  icon={<FaTimes />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                      Cancel
                      </Button>
                      <Button color="primary" style={{ color: "#fff", borderColor: "#fff", backgroundColor: "#B32700" }}>
                      Delete
                      </Button>
                    </>
                  }
                >
                  <Typography>
                  This action is irreversible! Are you sure you want to delete this team?
                  </Typography>
                  <Typography align="center" style={{ fontWeight: "bold" }}>
                  Team Name: My Team
                  </Typography>
                </GradientModal>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="filled-button" code={codes[0]} />
          </div>
          <h3>Share</h3>
          <p>
            This modal is intended to allow users complete sharing actions that they might want to carry out across our solutions.
          </p>
          {/* <div className="showcase"> */}
          <div className="items">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Share Design"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                      Cancel
                      </Button>
                      <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                      Share
                      </Button>
                    </>
                  }
                >
                  {/* <Input placeholder="Add People to share with" type="text" /> */}
                  <CustomInput
                    placeholder="Add People to share with"
                  />
                  <Typography>General Access</Typography>
                  <CustomDropdown
                    placeholder="Access"
                    options={["Private", "Public"]}
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>

          </div>
          <CodeBlock name="outlined-button" code={codes[1]} />
          {/* </div> */}
          {/* <h3>Text Button</h3>
          <p>
            Mostly used for less pronounced and very low emphasis actions. Can
            also be used for text links as well.
          </p>

          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="text">Text</Button>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="text-button" code={codes[2]} />
          </div> */}
          <h2>Setup</h2>
          <p>
            Setup modals allow users to setup their account to depending on their needs and preferences
          </p>
          <h3>Create Account</h3>
          <p>The modal allows users to create an account.</p>
          {/* <div className="showcase"> */}
          <div className="items">
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
            {/* </div> */}
            <CodeBlock name="button-sizes" code={codes[3]} />
          </div>
          <h3>Create Workspace</h3>
          <p>The modal allows users to create a workspace in Meshery Cloud.</p>
          {/* <div className="showcase"> */}
          <div className="items">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Create Workspace"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Cancel
                      </Button>
                      <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                        Save
                      </Button>
                    </>
                  }
                >
                  <CustomInput
                    label="Organization"
                    placeholder="Enter organization name"
                  />
                  <CustomInput
                    label="Name"
                    placeholder="Enter a name"
                  />
                  <CustomInput
                    label="Description"
                    placeholder="Enter a description"
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>
            {/* </div> */}
            <CodeBlock name="button-sizes" code={codes[3]} />
          </div>
          <h3>Create Environment</h3>
          <p>This modal allows users to create an environment in Meshery Cloud.</p>
          {/* <div className="showcase"> */}
          <div className="items">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Create Environment"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Cancel
                      </Button>
                      <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                        Save
                      </Button>
                    </>
                  }
                >
                  <CustomInput
                    label="Organization"
                    placeholder="Enter organization name"
                  />
                  <CustomInput
                    label="Name"
                    placeholder="Enter a name"
                  />
                  <CustomInput
                    label="Description"
                    placeholder="Enter a description"
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>
            {/* </div> */}
            <CodeBlock name="button-sizes" code={codes[3]} />
          </div>
          <h3>Create New Team</h3>
          <p>This modal allows users to create a new team in Meshery Cloud.</p>
          {/* <div className="showcase"> */}
          <div className="items">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Create New Team"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Cancel
                      </Button>
                      <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                        Save
                      </Button>
                    </>
                  }
                >
                  <CustomInput
                    label="Team Name"
                    placeholder="Enter a name"
                  />
                  <CustomInput
                    label="Team Description"
                    placeholder="Enter a description"
                  />
                  <CustomInput
                    label="Add Team Member"
                    placeholder="Select a user"
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>
            {/* </div> */}
            <CodeBlock name="button-sizes" code={codes[3]} />
          </div>
          <h3>Update Membership</h3>
          <p>This modal allows users to create a new team in Meshery Cloud.</p>
          {/* <div className="showcase"> */}
          <div className="items">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Update User Membership"
                  icon={<i className="icon-class" />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Cancel
                      </Button>
                      <Button variant="contained" style={{ color: "#fff", borderColor: "#fff" }}>
                        Update
                      </Button>
                    </>
                  }
                >
                  <CustomInput
                    label="Organization Name"
                    placeholder="Enter a name"
                  />
                  <CustomInput
                    label="Add Organization Users"
                    placeholder="Select a user"
                  />
                </GradientModal>
              </SistentThemeProvider>
            </Col>
            {/* </div> */}
            <CodeBlock name="button-sizes" code={codes[3]} />
          </div>

          <h2>Tools</h2>
          <p>
            Tool modals assist users to complete tasks by carrying out specific functionalities.
          </p>
          {/* <h3>Import Designs</h3>
          <p>This modal allows users to import a design to Meshery Cloud.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button
                  variant="contained"
                  size="medium"
                  endIcon={<FaArrowRight size={12} />}
                >
                  Next
                </Button>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="adding-icons" code={codes[4]} />
          </div> */}
        </div>
        <h3>Performance Profile Wizard</h3>
        <p>This modal allows people to run performance profile tests.</p>
        <div className="items">
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
        </div>

        <h3>Design Details</h3>
        <p>This modal allows people to provide details of their designs created on MeshMap.</p>
        <div className="items">
          <Col sm={12}>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <GradientModal
                title="Performance Profile Wizard"
                icon={<i className="icon-class" />}
                buttons={
                  <>
                    <Button color="primary" style={{ marginRight: "10px", color: "#fff", borderColor: "#fff", border: "1px solid #fff" }}>
                        Copy Link
                    </Button>
                    <Button color="primary" style={{ color: "#647176", borderColor: "#fff", backgroundColor: "#B1B9BC" }}>
                        Save
                    </Button>
                  </>
                }
                modalWidth="800px"
              >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                  <CustomDropdown
                    label="Device Type"
                    placeholder="Deployment"
                    options={["Type 1", "Type 2", "Type 3"]}
                    style={{ width: "100%" }}
                  />
                  <CustomDropdown
                    label="Technology"
                    placeholder="Select a technology"
                    options={["Type 1", "Type 2", "Type 3"]}
                    style={{ width: "100%" }}
                  />
                </div>
                <CustomInput
                  label="Design Name"
                  placeholder="Enter design name"
                />
                <CustomInput
                  label="Description"
                  placeholder="What does your design do?"
                />
                <CustomInput
                  label="Caveats and Considerations"
                  placeholder="Enter caveats and considerations"
                />
              </GradientModal>
            </SistentThemeProvider>
          </Col>
        </div>
      </div>
    </SistentLayout>
  );
};
