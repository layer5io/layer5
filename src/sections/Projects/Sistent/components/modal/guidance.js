import React, { useState } from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
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
} from "@sistent/sistent";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { ActionBox } from "../../sistent.style";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const CustomInput = ({ label, placeholder }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle1" gutterBottom>
      {label}
    </Typography>
    <TextField label={placeholder} variant="outlined" fullWidth />
  </Box>
);

const ModalGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [activeModal, setActiveModal] = useState(null);
  const [nestedModal, setNestedModal] = useState(false);

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          This guide provides comprehensive information on when and how to use different types of modals effectively in your applications.
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
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>

            <a id="basic-modal">
              <h2>Basic Modal</h2>
            </a>
            <p>Use for simple information display or read-only content. Keep content concise and provide clear dismiss options.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => setActiveModal("basic")}>
                  Open Basic Modal
                </Button>
                <Modal
                  open={activeModal === "basic"}
                  closeModal={() => setActiveModal(null)}
                  title="Basic Modal"
                >
                  <ModalBody>
                    <Typography>
                      This is a basic modal with simple content for displaying information.
                    </Typography>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setActiveModal(null)}>
                        Close
                      </ModalButtonSecondary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

            <a id="confirmation-modal">
              <h2>Confirmation Modal</h2>
            </a>
            <p>Essential for destructive actions. Always use warning icons, specific button labels, and clearly explain consequences.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" color="error" onClick={() => setActiveModal("confirmation")}>
                  Delete Account
                </Button>
                <Modal
                  open={activeModal === "confirmation"}
                  closeModal={() => setActiveModal(null)}
                  title="Confirm Account Deletion"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <WarningIcon sx={{ color: "warning.main", fontSize: 32 }} />
                      <Box>
                        <Typography variant="body1" paragraph>
                          <strong>This action cannot be undone.</strong> Deleting your account will permanently remove all your data.
                        </Typography>
                      </Box>
                    </Box>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setActiveModal(null)}>
                        Keep Account
                      </ModalButtonSecondary>
                      <ModalButtonDanger onClick={() => setActiveModal(null)}>
                        Delete Account
                      </ModalButtonDanger>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

            <a id="action-modal">
              <h2>Action Modal</h2>
            </a>
            <p>Perfect for task completion with forms. Use contextual icons and provide clear primary/secondary actions.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => setActiveModal("action")}>
                  Add New User
                </Button>
                <Modal
                  open={activeModal === "action"}
                  closeModal={() => setActiveModal(null)}
                  title="Add New User"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                      <PersonAddIcon color="primary" />
                      <Typography variant="body1">
                        Create a new user account:
                      </Typography>
                    </Box>
                    <CustomInput label="Full Name" placeholder="Enter user's full name" />
                    <CustomInput label="Email Address" placeholder="Enter email address" />
                    <CustomInput label="Role" placeholder="Select user role" />
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setActiveModal(null)}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={() => setActiveModal(null)}>
                        Create User
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

            <a id="informational-modal">
              <h2>Informational Modal</h2>
            </a>
            <p>Use for help content and contextual information. Structure content clearly and keep it scannable.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => setActiveModal("informational")}>
                  View Information
                </Button>
                <Modal
                  open={activeModal === "informational"}
                  closeModal={() => setActiveModal(null)}
                  title="System Information"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <InfoIcon color="info" />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          About This Feature
                        </Typography>
                        <Typography variant="body1" paragraph>
                          This feature helps you manage your workflow efficiently with automated tools.
                        </Typography>
                        <Typography variant="body2">
                          Last updated: January 2025 • Version 2.1.0
                        </Typography>
                      </Box>
                    </Box>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setActiveModal(null)}>
                        Got it
                      </ModalButtonSecondary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

            <a id="warning-modal">
              <h2>Warning Modal</h2>
            </a>
            <p>Alert users to potential issues before proceeding. Use warning colors and provide helpful context.</p>
            <div className="showcase">
              <div className="items">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "warning.main", color: "white" }}
                  onClick={() => setActiveModal("warning")}
                >
                  Proceed with Caution
                </Button>
                <Modal
                  open={activeModal === "warning"}
                  closeModal={() => setActiveModal(null)}
                  title="Warning"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <WarningIcon sx={{ color: "warning.main", fontSize: 32 }} />
                      <Box>
                        <Typography variant="body1" paragraph>
                          This action may affect system performance and could take several minutes.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Consider performing this during off-peak hours.
                        </Typography>
                      </Box>
                    </Box>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setActiveModal(null)}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={() => setActiveModal(null)}>
                        Continue Anyway
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

            <a id="success-modal">
              <h2>Success Modal</h2>
            </a>
            <p>Celebrate user achievements and provide positive feedback. Include relevant metrics when helpful.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" color="success" onClick={() => setActiveModal("success")}>
                  Complete Action
                </Button>
                <Modal
                  open={activeModal === "success"}
                  closeModal={() => setActiveModal(null)}
                  title="Success!"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, textAlign: "center" }}>
                      <CheckCircleIcon color="success" sx={{ fontSize: 48 }} />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Operation Completed Successfully
                        </Typography>
                        <Typography variant="body1">
                          Your changes have been saved and are now active.
                        </Typography>
                      </Box>
                    </Box>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonPrimary onClick={() => setActiveModal(null)}>
                        Continue
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

            <a id="error-modal">
              <h2>Error Modal</h2>
            </a>
            <p>Communicate failures clearly with friendly language. Provide specific solutions and avoid technical jargon.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" color="error" onClick={() => setActiveModal("error")}>
                  Trigger Error
                </Button>
                <Modal
                  open={activeModal === "error"}
                  closeModal={() => setActiveModal(null)}
                  title="Upload Failed"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <ErrorIcon color="error" sx={{ fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          File Upload Failed
                        </Typography>
                        <Typography variant="body1" paragraph>
                          The file could not be uploaded due to a network connectivity issue.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          <strong>What you can do:</strong> Check your internet connection and try again.
                        </Typography>
                      </Box>
                    </Box>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setActiveModal(null)}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={() => setActiveModal(null)}>
                        Try Again
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>


            <a id="nested-modal">
              <h2>Nested Modal</h2>
            </a>
            <p>Use sparingly for multi-step workflows. Maintain clear navigation and ensure users understand the hierarchy.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => setActiveModal("nested")}>
                  Open Parent Modal
                </Button>
                <Modal
                  open={activeModal === "nested"}
                  closeModal={() => setActiveModal(null)}
                  title="Parent Modal"
                >
                  <ModalBody>
                    <Typography paragraph>
                      This is the parent modal. You can open a nested modal from here.
                    </Typography>
                    <Button variant="outlined" onClick={() => setNestedModal(true)}>
                      Open Nested Modal
                    </Button>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setActiveModal(null)}>
                        Close
                      </ModalButtonSecondary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>

                <Modal
                  open={nestedModal}
                  closeModal={() => setNestedModal(false)}
                  title="Nested Modal"
                >
                  <ModalBody>
                    <Typography>
                      This is a nested modal that appears on top of the parent modal.
                    </Typography>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setNestedModal(false)}>
                        Close Nested
                      </ModalButtonSecondary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

          </SistentThemeProvider>

          <a id="Usage Guidelines">
            <h2>When to Use Modals</h2>
          </a>
          <ul>
            <li><p>Requiring immediate user attention for critical information or decisions</p></li>
            <li><p>Collecting user input without navigating away from the current context</p></li>
            <li><p>Confirming destructive or irreversible actions before execution</p></li>
            <li><p>Displaying detailed information that doesn't warrant a separate page</p></li>
            <li><p>Presenting workflows that need to maintain the underlying page state</p></li>
          </ul>

        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalGuidance;