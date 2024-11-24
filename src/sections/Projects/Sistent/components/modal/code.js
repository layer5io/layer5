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

const codes = [
  `  <Button variant="contained" onClick={handleOpen}>
        Open Modal
    </Button>
    <Modal open={open} closeModal={handleClose} title="Modal Title">
        <ModalBody>
            <div>
                This action is irreversible! Are you sure you want to delete this team?
            </div>
        </ModalBody>
        <ModalFooter variant="filled">
            <ModalButtonSecondary onClick={handleClose}>
                Cancel
            </ModalButtonSecondary>
            <ModalButtonDanger onClick={handleClose}>
                Delete
            </ModalButtonDanger>
        </ModalFooter>
    </Modal>`,
  `  <Button onClick={handleActionOpen}>Open Action Modal</Button>
    <Modal
        open={actionOpen}
        onClose={handleActionClose}
        title="Action Modal Title"
    >
        <ModalBody>
            <CustomInput label="Name" placeholder="Enter your name" />
            <CustomInput label="Email" placeholder="Enter your email" />
            <CustomInput
                label="Assign Organizations"
                placeholder="Assign organizations"
            />
        </ModalBody>
        <ModalFooter variant="filled">
            <ModalButtonSecondary onClick={handleActionClose}>
                Cancel
            </ModalButtonSecondary>
            <ModalButtonPrimary onClick={handleActionClose}>
                Save
            </ModalButtonPrimary>
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
          {/* <TabButton
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
          /> */}
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
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <p>
              Buttons communicate actions to users and they can be placed at
              several places throughout the user interface.
            </p>
            <a id="Basic Button">
              <h2>Confirmation Modal</h2>
            </a>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={handleOpen}>
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
            <h3>Action Modal</h3>
            <p>
              Action modals help users carry out specific tasks. These would
              naturally involve more steps than just confirming or rejecting an
              action. They may include forms, links, and feature specific
              elements that ensure that users complete crucial tasks along their
              given flow. They will usually have an icon at the top left corner
              of the modal to signify what the purpose of this modal is in
              relation to the given flow as well as help users familiarize with
              said custom icons for easy identification across our solutions
              however, this might not be applicable in all cases.
            </p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={handleActionOpen}>Open Action Modal</Button>
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
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalCode;
