import React, { useState, memo } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Button, StyledDialogActions, StyledDialogContent } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const modalStyles = (isDark) => ({
  backgroundColor: isDark ? '#15272F' : '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

const headerStyles = (isDark) => ({
  padding: '16px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  background: isDark ? 'linear-gradient(to right, #28353A, #3D4F57)' : 'linear-gradient(to right, #3B687B, #507D90)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#fff',
  fontWeight: 'bold',
});

const footerStyles = (isDark) => ({
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  background: isDark ? 'linear-gradient(to right, #28353A, #3D4F57)' : 'linear-gradient(to right, #3B687B, #507D90)',
  fontWeight: 'bold',
});

const GradientModal = memo(({ title, icon, children, buttons }) => {
  const { isDark } = useStyledDarkMode();

  return (
    <Box style={{ backgroundColor: '#E7EFF3', padding: '60px', maxWidth: '600px', margin: '20px auto', borderRadius: '8px'}}>
      <Box style={modalStyles(isDark)}>
        <Box style={headerStyles(isDark)}>
          <div style={{ fontSize: '1.25rem' }}>{title}</div>
          {icon && <Box style={{ marginLeft: 'auto', fontSize: '1.2rem' }}>{icon}</Box>}
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
  <Box style={{ marginBottom: '16px', ...style }}>
    <Typography variant="subtitle1" gutterBottom>
      {label}
    </Typography>
    <input
      type="text"
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
      }}
    />
  </Box>
);

const CustomDropdown = ({ label, options, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState('');

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
          borderRadius: '4px',
          height: '40px',
          color: '#8D9FA7',
          backgroundColor: '#fff'
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

const SistentModal = () => {
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
            A modal is an interface element that assists users by providing added information in the form of a message or prompting an action as users interact with and navigate a solution.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            Modals can be used for various purposes. From conveying information that does not require much action to having a series of other components embedded in them to ensure that users are able to begin tasks and successfully complete them, modals can provide versatility to interfaces while ensuring a simple, intuitive, and efficient design.
          </p>
          <h3>Basic</h3>
          <p>
            The basic modal is one that helps users carry out common actions while navigating our solutions. These modals help to pass across important messages to the user, or assist them in completing common actions that do not require intricate knowledge of the subject matter. Some examples of basic modals can be share links, confirmation messages, feedback prompts and other similarly common actions. These type of modals can be easily identified by the lack of an icon at the top left corner of the modal. They may sometimes include form fields but mostly will just require users to either confirm and cancel actions or make progress while carrying out a particular task.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <GradientModal
                title="Delete Team"
                icon={<FaTimes />} 
                buttons={
                  <>
                    <Button color="primary" style={{ marginRight: '10px', color: '#fff', borderColor: '#fff', border: '1px solid #fff' }}>
                      Cancel
                    </Button>
                    <Button color="primary" style={{ color: '#fff', borderColor: '#fff', backgroundColor: '#B32700' }}>
                      Delete
                    </Button>
                  </>
                }
              >
                <Typography>
                  This action is irreversible! Are you sure you want to delete this team?
                </Typography>
                <Typography align="center" style={{ fontWeight: 'bold' }}>
                  Team Name: My Team
                </Typography>
              </GradientModal>
            </SistentThemeProvider>
          </Row>
          
          <h3>Action</h3>
          <p>
            Action modals help users carry out specific tasks. These would naturally involve more steps than just confirming or rejecting an action. They may include forms, links, and feature specific elements that ensure that users complete crucial tasks along their given flow. They will usually have an icon at the top left corner of the modal to signify what the purpose of this modal is in relation to the given flow as well as help users familiarize with said custom icons for easy identification across our solutions however, this might not be applicable in all cases.
          </p>
          <Row Hcenter className="image-container">
          <Col sm={12}>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <GradientModal
                title="Create Environment"
                icon={<FaTimes />} 
                buttons={
                  <>
                    <Button color="primary" style={{ marginRight: '10px', color: '#fff', borderColor: '#fff', border: '1px solid #fff' }}>
                      Cancel
                    </Button>
                    <Button color="primary" style={{ color: '#647176', borderColor: '#fff', backgroundColor: '#B1B9BC' }}>
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
          </Row>
          <h3>Full width</h3>
          <p>
            Full width buttons are more efficient in mobile designs and rightly so in order to offer users with a wider touch area since the input devices - the fingers, are a lot larger than the cursor on a desktop or larger screen.
          </p>
          <Row Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <GradientModal
                  title="Create User Account"
                  icon={<FaTimes />}
                  buttons={
                    <>
                      <Button color="primary" style={{ marginRight: '10px', color: '#fff', borderColor: '#fff', border: '1px solid #fff' }}>
                        Cancel
                      </Button>
                      <Button color="primary" style={{ color: '#647176', borderColor: '#fff', backgroundColor: '#B1B9BC' }}>
                        Create
                      </Button>
                    </>
                  }
                >
                <div style={{display: 'flex', gap: '10px'}}>
                    <CustomInput
                    label="First Name"
                    placeholder="Enter a name"
                    style={{ flex: '1' }}
                  />
                  <CustomInput
                    label="Last Name"
                    placeholder="Enter a name"
                    style={{ flex: '1' }}
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
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentModal;
