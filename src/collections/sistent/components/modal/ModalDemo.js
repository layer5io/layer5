import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalButtonSecondary,
  ModalButtonPrimary,
  ModalButtonDanger,
  Typography,
  TextField,
} from "@sistent/sistent";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ActionBox } from "../../../../sections/Projects/Sistent/sistent.style";

const CustomInput = ({ label, placeholder }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle1" gutterBottom>
      {label}
    </Typography>
    <TextField label={placeholder} variant="outlined" fullWidth />
  </Box>
);

const ModalDemo = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Basic Modal
  if (type === "basic") {
    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Open Basic Modal
        </Button>
        <Modal open={open} closeModal={handleClose} title="Basic Modal">
          <ModalBody>
            <Typography>
              This is a basic modal with simple content for displaying information.
            </Typography>
          </ModalBody>
          <ModalFooter variant="filled">
            <ActionBox>
              <ModalButtonSecondary onClick={handleClose}>
                Close
              </ModalButtonSecondary>
            </ActionBox>
          </ModalFooter>
        </Modal>
      </>
    );
  }

  // Confirmation Modal
  if (type === "confirmation") {
    return (
      <>
        <Button variant="contained" color="error" onClick={handleOpen}>
          Delete Item
        </Button>
        <Modal open={open} closeModal={handleClose} title="Confirm Deletion">
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
              <ModalButtonSecondary onClick={handleClose}>
                Cancel
              </ModalButtonSecondary>
              <ModalButtonDanger onClick={handleClose}>
                Delete
              </ModalButtonDanger>
            </ActionBox>
          </ModalFooter>
        </Modal>
      </>
    );
  }

  // Action Modal
  if (type === "action") {
    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Add New User
        </Button>
        <Modal open={open} closeModal={handleClose} title="Add New User">
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
              <ModalButtonSecondary onClick={handleClose}>
                Cancel
              </ModalButtonSecondary>
              <ModalButtonPrimary onClick={handleClose}>
                Create User
              </ModalButtonPrimary>
            </ActionBox>
          </ModalFooter>
        </Modal>
      </>
    );
  }

  // Informational Modal
  if (type === "informational") {
    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
            View Information
        </Button>
        <Modal open={open} closeModal={handleClose} title="System Information">
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
              <ModalButtonSecondary onClick={handleClose}>
                Got it
              </ModalButtonSecondary>
            </ActionBox>
          </ModalFooter>
        </Modal>
      </>
    );
  }

  // Warning Modal
  if (type === "warning") {
    return (
      <>
        <Button
          variant="contained"
          sx={{ backgroundColor: "warning.main", color: "white" }}
          onClick={handleOpen}
        >
          Proceed with Caution
        </Button>
        <Modal open={open} closeModal={handleClose} title="Warning">
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
              <ModalButtonSecondary onClick={handleClose}>
                Cancel
              </ModalButtonSecondary>
              <ModalButtonPrimary onClick={handleClose}>
                Continue Anyway
              </ModalButtonPrimary>
            </ActionBox>
          </ModalFooter>
        </Modal>
      </>
    );
  }

  // Success Modal
  if (type === "success") {
    return (
      <>
        <Button variant="contained" color="success" onClick={handleOpen}>
          Complete Action
        </Button>
        <Modal open={open} closeModal={handleClose} title="Success!">
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
              <ModalButtonPrimary onClick={handleClose}>
                Continue
              </ModalButtonPrimary>
            </ActionBox>
          </ModalFooter>
        </Modal>
      </>
    );
  }

  // Error Modal
  if (type === "error") {
      return (
        <>
          <Button variant="contained" color="error" onClick={handleOpen}>
            Trigger Error
          </Button>
          <Modal open={open} closeModal={handleClose} title="Upload Failed">
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
                <ModalButtonSecondary onClick={handleClose}>
                  Cancel
                </ModalButtonSecondary>
                <ModalButtonPrimary onClick={handleClose}>
                   Try Again
                </ModalButtonPrimary>
              </ActionBox>
            </ModalFooter>
          </Modal>
      </>
      );
  }

  // Nested Modal
  if (type === "nested") {
      return (
          <>
            <Button variant="contained" onClick={handleOpen}>
              Open Parent Modal
            </Button>
            
            <Modal open={open} closeModal={handleClose} title="Parent Modal">
                <ModalBody>
                    <Typography paragraph>
                        This is the parent modal. Click to open nested modal.
                    </Typography>
                    <Button variant="outlined" onClick={() => setNestedOpen(true)}>
                        Open Nested Modal
                    </Button>
                </ModalBody>
                <ModalFooter variant="filled">
                    <ActionBox>
                        <ModalButtonSecondary onClick={handleClose}>
                            Close Parent
                        </ModalButtonSecondary>
                    </ActionBox>
                </ModalFooter>
            </Modal>

            <Modal open={nestedOpen} closeModal={() => setNestedOpen(false)} title="Nested Modal">
                <ModalBody>
                    <Typography>
                        This is a nested modal that appears on top of the parent modal.
                    </Typography>
                </ModalBody>
                <ModalFooter variant="filled">
                    <ActionBox>
                        <ModalButtonSecondary onClick={() => setNestedOpen(false)}>
                            Close Nested
                        </ModalButtonSecondary>
                    </ActionBox>
                </ModalFooter>
            </Modal>
          </>
      )
  }

  return null;
};

export default ModalDemo;
