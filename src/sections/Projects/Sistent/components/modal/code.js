import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
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
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
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

const codes = [
  // Basic Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonSecondary 
  } from "@sistent/sistent";

function BasicModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="contained" 
        onClick={() => setOpen(true)}
      >
        Open Modal
      </Button>
      <Modal 
        open={open} 
        closeModal={() => setOpen(false)} 
        title="Basic Modal"
      >
        <ModalBody>
          <Typography>
            This is a basic modal with simple content.
          </Typography>
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary 
            onClick={() => setOpen(false)}
          >
            Close
          </ModalButtonSecondary>
        </ModalFooter>
      </Modal>
    </>
  );
}`,

  // Confirmation Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonSecondary, 
    ModalButtonDanger,
    Box,
    Typography 
  } from "@sistent/sistent";
import WarningIcon from "@mui/icons-material/Warning";

function ConfirmationModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="contained" 
        color="error" 
        onClick={() => setOpen(true)}
      >
        Delete Item
      </Button>
      <Modal 
        open={open} 
        closeModal={() => setOpen(false)} 
        title="Confirm Deletion"
      >
        <ModalBody>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <WarningIcon color="warning" />
            <Typography>
              This action is irreversible! Are you sure?
            </Typography>
          </Box>
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary 
            onClick={() => setOpen(false)}
          >
            Cancel
          </ModalButtonSecondary>
          <ModalButtonDanger 
            onClick={() => setOpen(false)}
          >
            Delete
          </ModalButtonDanger>
        </ModalFooter>
      </Modal>
    </>
  );
}`,

  // Action Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonSecondary, 
    ModalButtonPrimary, 
    TextField,
    Box,
    Typography
  } from "@sistent/sistent";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function ActionModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="contained" 
        onClick={() => setOpen(true)}
      >
        Add New User
      </Button>
      <Modal 
        open={open} 
        closeModal={() => setOpen(false)} 
        title="Add New User"
      >
        <ModalBody>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2, 
            mb: 3 
          }}>
            <PersonAddIcon color="primary" />
            <Typography>Create a new user account:</Typography>
          </Box>
          <TextField 
            label="Full Name" 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Email" 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Role" 
            fullWidth 
            margin="normal" 
          />
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary 
            onClick={() => setOpen(false)}
          >
            Cancel
          </ModalButtonSecondary>
          <ModalButtonPrimary 
            onClick={() => setOpen(false)}
          >
            Create User
          </ModalButtonPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}`,

  // Informational Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonSecondary,
    Box,
    Typography
  } from "@sistent/sistent";
import InfoIcon from "@mui/icons-material/Info";

function InformationalModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="outlined" 
        onClick={() => setOpen(true)}
      >
        View Information
      </Button>
      <Modal 
        open={open} 
        closeModal={() => setOpen(false)} 
        title="System Information"
      >
        <ModalBody>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: 2 
          }}>
            <InfoIcon color="info" />
            <Box>
              <Typography variant="h6" gutterBottom>
                About This Feature
              </Typography>
              <Typography variant="body1" paragraph>
                This feature helps you manage workflow efficiently.
              </Typography>
              <Typography variant="body2">
                Last updated: January 2025 • Version 2.1.0
              </Typography>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary 
            onClick={() => setOpen(false)}
          >
            Got it
          </ModalButtonSecondary>
        </ModalFooter>
      </Modal>
    </>
  );
}`,

  // Warning Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonSecondary, 
    ModalButtonPrimary,
    Box,
    Typography
  } from "@sistent/sistent";
import WarningIcon from "@mui/icons-material/Warning";

function WarningModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: "warning.main", color: "white" }}
        onClick={() => setOpen(true)}
      >
        Proceed with Caution
      </Button>
      <Modal 
        open={open} 
        closeModal={() => setOpen(false)} 
        title="Warning"
      >
        <ModalBody>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2 
          }}>
            <WarningIcon sx={{ 
              color: "warning.main", 
              fontSize: 32 
            }} />
            <Box>
              <Typography variant="body1" paragraph>
                This action may affect system performance.
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Consider performing this during off-peak hours.
              </Typography>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary 
            onClick={() => setOpen(false)}
          >
            Cancel
          </ModalButtonSecondary>
          <ModalButtonPrimary 
            onClick={() => setOpen(false)}
          >
            Continue Anyway
          </ModalButtonPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}`,

  // Success Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonPrimary,
    Box,
    Typography
  } from "@sistent/sistent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SuccessModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="contained" 
        color="success" 
        onClick={() => setOpen(true)}
      >
        Complete Action
      </Button>
      <Modal 
        open={open} 
        closeModal={() => setOpen(false)} 
        title="Success!"
      >
        <ModalBody>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2 
          }}>
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
          <ModalButtonPrimary 
            onClick={() => setOpen(false)}
          >
            Continue
          </ModalButtonPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}`,

  // Error Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonSecondary, 
    ModalButtonPrimary,
    Box,
    Typography
  } from "@sistent/sistent";
import ErrorIcon from "@mui/icons-material/Error";

function ErrorModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="contained" 
        color="error" 
        onClick={() => setOpen(true)}
      >
        Trigger Error
      </Button>
      <Modal 
        open={open} 
        closeModal={() => setOpen(false)} 
        title="Upload Failed"
      >
        <ModalBody>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: 2 
          }}>
            <ErrorIcon color="error" sx={{ fontSize: 32 }} />
            <Box>
              <Typography variant="h6" gutterBottom>
                File Upload Failed
              </Typography>
              <Typography variant="body1" paragraph>
                The file could not be uploaded due to network issue.
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>What you can do:</strong>
                 Check connection and try again.
              </Typography>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary 
            onClick={() => setOpen(false)}
          >
            Cancel
          </ModalButtonSecondary>
          <ModalButtonPrimary 
            onClick={() => setOpen(false)}
          >
            Try Again
          </ModalButtonPrimary>
        </ModalFooter>
      </Modal>
    </>
  );
}`,

  // Nested Modal
  `import { 
    Button, 
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalButtonSecondary,
    Typography
  } from "@sistent/sistent";

function NestedModalExample() {
  const [parentOpen, setParentOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  const handleParentClose = () => {
    setParentOpen(false);
    setChildOpen(false);
  };

  return (
    <>
      <Button 
        variant="contained" 
        onClick={() => setParentOpen(true)}
      >
        Open Parent Modal
      </Button>
      
      <Modal 
        open={parentOpen} 
        closeModal={handleParentClose} 
        title="Parent Modal"
      >
        <ModalBody>
          <Typography paragraph>
            This is the parent modal. Click to open nested modal.
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => setChildOpen(true)}
          >
            Open Nested Modal
          </Button>
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary onClick={handleParentClose}>
            Close Parent
          </ModalButtonSecondary>
        </ModalFooter>
      </Modal>
      
      <Modal 
        open={childOpen} 
        closeModal={() => setChildOpen(false)} 
        title="Nested Modal"
      >
        <ModalBody>
          <Typography>
            This nested modal appears on top of the parent.
          </Typography>
        </ModalBody>
        <ModalFooter variant="filled">
          <ModalButtonSecondary 
            onClick={() => setChildOpen(false)}
          >
            Close Nested
          </ModalButtonSecondary>
        </ModalFooter>
      </Modal>
    </>
  );
}`
];

const ModalCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const [openModals, setOpenModals] = useState({
    basic: false,
    confirmation: false,
    action: false,
    informational: false,
    warning: false,
    success: false,
    error: false,
    form: false,
    nested: false
  });

  const [nestedModal, setNestedModal] = useState(false);

  const toggleModal = (type) => {
    setOpenModals(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          Here are code examples for different variations and use cases of the Modal component.
          Each example shows the implementation with a live preview and copyable code.
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
            <p>A simple modal with basic content and standard dismiss functionality.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => toggleModal("basic")}>
                  Open Basic Modal
                </Button>
                <Modal
                  open={openModals.basic}
                  closeModal={() => toggleModal("basic")}
                  title="Basic Modal"
                >
                  <ModalBody>
                    <Typography>
                      This is a basic modal with simple content for displaying information.
                    </Typography>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => toggleModal("basic")}>
                        Close
                      </ModalButtonSecondary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="modal-basic" code={codes[0]} />
            </div>

            <a id="confirmation-modal">
              <h2>Confirmation Modal</h2>
            </a>
            <p>Confirmation modals for destructive or important actions requiring user consent.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" color="error" onClick={() => toggleModal("confirmation")}>
                  Delete Item
                </Button>
                <Modal
                  open={openModals.confirmation}
                  closeModal={() => toggleModal("confirmation")}
                  title="Confirm Deletion"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <WarningIcon color="warning" />
                      <Typography>
                        This action is irreversible! Are you sure you want to delete this item?
                      </Typography>
                    </Box>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => toggleModal("confirmation")}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonDanger onClick={() => toggleModal("confirmation")}>
                        Delete
                      </ModalButtonDanger>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="modal-confirmation" code={codes[1]} />
            </div>

            <a id="action-modal">
              <h2>Action Modal</h2>
            </a>
            <p>Action modals for task completion with forms and interactive elements.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => toggleModal("action")}>
                  Add New User
                </Button>
                <Modal
                  open={openModals.action}
                  closeModal={() => toggleModal("action")}
                  title="Add New User"
                >
                  <ModalBody>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                      <PersonAddIcon color="primary" />
                      <Typography variant="body1">
                        Create a new user account with the following details:
                      </Typography>
                    </Box>
                    <CustomInput label="Full Name" placeholder="Enter user's full name" />
                    <CustomInput label="Email Address" placeholder="Enter email address" />
                    <CustomInput label="Role" placeholder="Select user role" />
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => toggleModal("action")}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={() => toggleModal("action")}>
                        Create User
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="modal-action" code={codes[2]} />
            </div>

            <a id="informational-modal">
              <h2>Informational Modal</h2>
            </a>
            <p>Informational modals for displaying help content and contextual information.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => toggleModal("informational")}>
                  View Information
                </Button>
                <Modal
                  open={openModals.informational}
                  closeModal={() => toggleModal("informational")}
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
                      <ModalButtonSecondary onClick={() => toggleModal("informational")}>
                        Got it
                      </ModalButtonSecondary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="modal-informational" code={codes[3]} />
            </div>

            <a id="warning-modal">
              <h2>Warning Modal</h2>
            </a>
            <p>Warning modals to alert users about potential issues before proceeding.</p>
            <div className="showcase">
              <div className="items">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "warning.main", color: "white" }}
                  onClick={() => toggleModal("warning")}
                >
                  Proceed with Caution
                </Button>
                <Modal
                  open={openModals.warning}
                  closeModal={() => toggleModal("warning")}
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
                      <ModalButtonSecondary onClick={() => toggleModal("warning")}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={() => toggleModal("warning")}>
                        Continue Anyway
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="modal-warning" code={codes[4]} />
            </div>

            <a id="success-modal">
              <h2>Success Modal</h2>
            </a>
            <p>Success modals to provide positive feedback and confirm task completion.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" color="success" onClick={() => toggleModal("success")}>
                  Complete Action
                </Button>
                <Modal
                  open={openModals.success}
                  closeModal={() => toggleModal("success")}
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
                      <ModalButtonPrimary onClick={() => toggleModal("success")}>
                        Continue
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="modal-success" code={codes[5]} />
            </div>

            <a id="error-modal">
              <h2>Error Modal</h2>
            </a>
            <p>Error modals to communicate failures and provide actionable solutions.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" color="error" onClick={() => toggleModal("error")}>
                  Trigger Error
                </Button>
                <Modal
                  open={openModals.error}
                  closeModal={() => toggleModal("error")}
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
                      <ModalButtonSecondary onClick={() => toggleModal("error")}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={() => toggleModal("error")}>
                        Try Again
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="modal-error" code={codes[6]} />
            </div>

            <a id="nested-modal">
              <h2>Nested Modal</h2>
            </a>
            <p>Nested modals for multi-step workflows and complex interactions.</p>
            <div className="showcase">
              <div className="items">
                <Button variant="contained" onClick={() => toggleModal("nested")}>
                  Open Parent Modal
                </Button>
                <Modal
                  open={openModals.nested}
                  closeModal={() => toggleModal("nested")}
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
                      <ModalButtonSecondary onClick={() => toggleModal("nested")}>
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
              <CodeBlock name="modal-nested" code={codes[7]} />
            </div>

          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalCode;