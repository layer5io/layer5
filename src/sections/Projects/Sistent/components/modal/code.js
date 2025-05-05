import React from "react";
import { SistentLayout } from "../../sistent-layout";
import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalButtonDanger,
  ModalButtonPrimary,
  ModalButtonSecondary,
  ModalFooter,
  SistentThemeProvider,
  TextField,
  Typography,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
import { ActionBox } from "../../sistent.style";

const CustomInput = ({ label, text, style }) => (
  <Box style={{ marginBottom: "16px", ...style }}>
    <Typography variant="subtitle1" gutterBottom>
      {label}
    </Typography>
    <TextField
      label={text}
      variant="outlined"
      style={{
        width: "100%"
      }}
    />
  </Box>
);

const importExample = `// Import the necessary components
import { 
  Button, 
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalButtonSecondary, 
  ModalButtonPrimary,
  ModalButtonDanger 
} from "@layer5/sistent";

// State to control modal visibility
const [isOpen, setIsOpen] = useState(false);

// Handlers for opening/closing modal
const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);`;

const codes = [
  `<Button 
  variant="contained" 
  onClick={handleOpen}
  style={{
    fontFamily: "Qanelas Soft, sans-serif",
    textTransform: "none"
  }}
>
  Open Modal
</Button>

<Modal open={open} closeModal={handleClose} title="Modal Title">
  <ModalBody>
    <div>
      This action is irreversible! Are you sure you want to delete this team?
    </div>
  </ModalBody>
  <ModalFooter variant="filled">
    <ActionBox>
      <ModalButtonSecondary onClick={handleClose}>
        Cancel
      </ModalButtonSecondary>
      <ModalButtonDanger onClick={handleClose}>
        Delete
      </ModalButtonDanger>
    </ActionBox>
  </ModalFooter>
</Modal>`,
  `<Button 
  variant="contained" 
  onClick={handleActionOpen}
  style={{
    fontFamily: "Qanelas Soft, sans-serif",
    textTransform: "none"
  }}
>
  Open Action Modal
</Button>

<Modal
  open={actionOpen}
  closeModal={handleActionClose}
  title="Action Modal Title"
>
  <ModalBody>
    <CustomInput text="Name" />
    <CustomInput text="Email" />
    <CustomInput text="Assign Organizations" />
  </ModalBody>
  <ModalFooter variant="filled">
    <ActionBox>
      <ModalButtonSecondary onClick={handleActionClose}>
        Cancel
      </ModalButtonSecondary>
      <ModalButtonPrimary onClick={handleActionClose}>
        Save
      </ModalButtonPrimary>
    </ActionBox>
  </ModalFooter>
</Modal>`,
];

const ModalCode = () => {
  const [open, setOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionOpen = () => {
    setActionOpen(true);
  };

  const handleActionClose = () => {
    setActionOpen(false);
  };

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          A modal is a dialog box or popup, displayed over the current page.
          Modals are used to grab the user's attention and provide important
          information.
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
            onClick={() => navigate("/projects/sistent/components/modal/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <p>
              Modals provide a focused way to capture user attention for important
              actions or information. They temporarily disable the main interface
              until the user responds to the modal dialog.
            </p>

            <a id="Getting Started">
              <h2>Getting Started</h2>
            </a>
            <p>
              To use the Modal component in your application, start by importing the necessary components
              and setting up the state to control the modal's visibility.
            </p>
            <div className="showcase">
              <CodeBlock name="import-example" code={importExample} />
            </div>

            <a id="Confirmation Modal">
              <h2>Confirmation Modal</h2>
            </a>
            <p>
              A confirmation modal is used to verify a user's action before proceeding,
              especially for destructive or irreversible operations.
            </p>
            <div className="showcase">
              <div className="items">
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  style={{
                    fontFamily: "\"Qanelas Soft\", sans-serif",
                    textTransform: "none" // This prevents all-caps that can sometimes make text appear cut off
                  }}
                >
                  Open Modal
                </Button>
                <Modal open={open} closeModal={handleClose} title="Modal Title">
                  <ModalBody>
                    <div>
                      This action is irreversible! Are you sure you want to
                      delete this team?
                    </div>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={handleClose}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonDanger onClick={handleClose}>
                        Delete
                      </ModalButtonDanger>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="confirmation-modal" code={codes[0]} />
            </div>
            <h2>Action Modal</h2>
            <p>
              Action modals help users carry out specific tasks that require form input or
              more complex interactions. These modals typically include form fields, dropdown menus,
              or other interactive elements.
            </p>
            <div className="showcase">
              <div className="items">
                <Button
                  variant="contained"
                  onClick={handleActionOpen}
                  style={{
                    fontFamily: "\"Qanelas Soft\", sans-serif",
                    textTransform: "none"
                  }}
                >
                  Open Action Modal
                </Button>
                <Modal
                  open={actionOpen}
                  closeModal={handleActionClose}
                  title="Action Modal Title"
                >
                  <ModalBody>
                    <CustomInput text="Name" />
                    <CustomInput text="Email" />
                    <CustomInput
                      text="Assign Organizations"
                    />
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={handleActionClose}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={handleActionClose}>
                        Save
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="action-modal" code={codes[1]} />
            </div>

            <a id="Custom Styling">
              <h2>Custom Styling</h2>
            </a>
            <p>
              You can customize the appearance of your modals by using the sx prop or style prop on various components.
              Here's an example of a custom styled modal:
            </p>
            <div className="showcase">
              <CodeBlock name="custom-styling" code={`<Modal 
  open={open} 
  closeModal={handleClose} 
  title="Custom Styled Modal"
  style={{ maxWidth: "600px" }}  // Custom width
>
  <ModalBody sx={{ padding: "32px", backgroundColor: "rgba(0, 179, 159, 0.05)" }}>
    <Typography variant="body1">
      This modal has custom styling applied to it.
    </Typography>
  </ModalBody>
  <ModalFooter 
    variant="filled" 
    sx={{ 
      borderTop: "1px solid #eaeaea",
      padding: "16px 24px" 
    }}
  >
    <ActionBox>
      <ModalButtonSecondary onClick={handleClose}>
        Cancel
      </ModalButtonSecondary>
      <ModalButtonPrimary onClick={handleClose}>
        Confirm
      </ModalButtonPrimary>
    </ActionBox>
  </ModalFooter>
</Modal>`} />
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalCode;