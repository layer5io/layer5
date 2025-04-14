import React, { useState } from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import ConfirmationBg from "../../../../../assets/images/app/projects/sistent/confirmation.png";
import ConfirmationDarkBg from "../../../../../assets/images/app/projects/sistent/confirmation-dark.png";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import {
  Button,
  Box,
  SistentThemeProvider,
  Modal,
  ModalBody,
  ModalFooter,
  ModalButtonPrimary,
  ModalButtonSecondary,
  ModalButtonDanger,
  Typography
} from "@layer5/sistent";
import { ActionBox } from "../../sistent.style";

const SistentModal = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [basicOpen, setBasicOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);

  const handleBasicOpen = () => setBasicOpen(true);
  const handleBasicClose = () => setBasicOpen(false);

  const handleActionOpen = () => setActionOpen(true);
  const handleActionClose = () => setActionOpen(false);

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          A modal is a container that appears in front of the main content on a
          page, providing important information or an actionable piece of
          content for users to execute.
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
          <p>
            A modal is an interface element that assists users by providing
            added information in the form of a message or prompting an action as
            users interact with and navigate a solution.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            Modals can be used for various purposes. From conveying information
            that does not require much action to having a series of other
            components embedded in them to ensure that users are able to begin
            tasks and successfully complete them, modals can provide versatility
            to interfaces while ensuring a simple, intuitive, and efficient
            design.
          </p>
          <h3>Basic</h3>
          <p>
            The basic modal is one that helps users carry out common actions
            while navigating our solutions. These modals help to pass across
            important messages to the user, or assist them in completing common
            actions that do not require intricate knowledge of the subject
            matter. Some examples of basic modals can be share links,
            confirmation messages, feedback prompts and other similarly common
            actions. These type of modals can be easily identified by the lack
            of an icon at the top left corner of the modal. They may sometimes
            include form fields but mostly will just require users to either
            confirm and cancel actions or make progress while carrying out a
            particular task.
          </p>
          <Row className="image-container" $Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? ConfirmationDarkBg : ConfirmationBg}
                alt="confirmation"
              />
            </Col>
          </Row>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row $Hcenter className="image-container">
              <Button onClick={handleBasicOpen} variant="contained">
                Open Basic Modal
              </Button>
              <Modal open={basicOpen} closeModal={handleBasicClose} title="Confirmation Required">
                <ModalBody>
                  <Typography variant="body1">
                    Are you sure you want to proceed with this action?
                  </Typography>
                </ModalBody>
                <ModalFooter variant="filled">
                  <ActionBox>
                    <ModalButtonSecondary onClick={handleBasicClose}>
                      Cancel
                    </ModalButtonSecondary>
                    <ModalButtonPrimary onClick={handleBasicClose}>
                      Confirm
                    </ModalButtonPrimary>
                  </ActionBox>
                </ModalFooter>
              </Modal>
            </Row>
          </SistentThemeProvider>

          <h3>Action</h3>
          <p>
            Action modals help users carry out specific tasks. These would
            naturally involve more steps than just confirming or rejecting an
            action. They may include forms, links, and feature specific elements
            that ensure that users complete crucial tasks along their given
            flow. They will usually have an icon at the top left corner of the
            modal to signify what the purpose of this modal is in relation to
            the given flow as well as help users familiarize with said custom
            icons for easy identification across our solutions however, this
            might not be applicable in all cases.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row $Hcenter className="image-container">
              <Button onClick={handleActionOpen} variant="contained" color="secondary">
                Open Action Modal
              </Button>
              <Modal
                open={actionOpen}
                closeModal={handleActionClose}
                title="Delete Confirmation"
                maxWidth="sm"
              >
                <ModalBody>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    This action will permanently delete the selected item and cannot be undone.
                  </Typography>
                  <Typography variant="body2" color="error">
                    Please type "DELETE" to confirm this irreversible action.
                  </Typography>
                </ModalBody>
                <ModalFooter variant="filled">
                  <ActionBox>
                    <ModalButtonSecondary onClick={handleActionClose}>
                      Cancel
                    </ModalButtonSecondary>
                    <ModalButtonDanger onClick={handleActionClose}>
                      Delete Permanently
                    </ModalButtonDanger>
                  </ActionBox>
                </ModalFooter>
              </Modal>
            </Row>
          </SistentThemeProvider>

          <a id="Usage">
            <h2>Usage Guidelines</h2>
          </a>
          <p>
            When implementing modals, consider the following best practices:
          </p>
          <ul>
            <li>Use modals sparingly to avoid disrupting the user flow</li>
            <li>Keep content concise and focused on a single task or decision</li>
            <li>Provide clear action buttons with descriptive labels</li>
            <li>Ensure modals are accessible via keyboard navigation</li>
            <li>Allow users to dismiss modals via multiple methods (close button, escape key, clicking outside)</li>
            <li>Use appropriate variants based on the importance and nature of the action</li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentModal;