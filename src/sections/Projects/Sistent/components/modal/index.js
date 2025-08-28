import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalButtonSecondary,
  SistentThemeProvider,
  Typography,
} from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { ActionBox } from "../../sistent.style";

const SistentModal = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          A modal is a container that appears in front of the main content on a page, providing important information or an actionable piece of content for users to execute. Modals focus user attention and prevent interaction with the underlying page until dismissed.
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
            The Modal component is essential for communicating important information and collecting user input without losing context. It provides immediate focus and ensures users complete required actions before proceeding.
          </p>

          <a id="Basic Example">
            <h2>Basic Modal</h2>
          </a>
          <p>
            A simple modal with basic content and standard dismiss functionality. This is the default behavior for displaying information to users.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" onClick={() => setOpen(true)}>
                  Open Basic Modal
                </Button>
                <Modal open={open} closeModal={() => setOpen(false)} title="Basic Modal">
                  <ModalBody>
                    <Typography>
                      This is a basic modal with simple content. It can contain text, images, or other basic elements to convey information to users.
                    </Typography>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={() => setOpen(false)}>
                        Close
                      </ModalButtonSecondary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </SistentThemeProvider>
            </div>
          </div>

          <a id="Modal Types">
            <h2>Modal Variations</h2>
          </a>
          <p>
            The Modal component supports various types and configurations to handle different use cases and user interactions.
          </p>
          <ul>
            <li><p><b>Basic Modal:</b> Simple content display with minimal interaction</p></li>
            <li><p><b>Confirmation Modal:</b> Require user confirmation for important or destructive actions</p></li>
            <li><p><b>Action Modal:</b> Facilitate task completion with forms and interactive controls</p></li>
            <li><p><b>Informational Modal:</b> Provide detailed information, help content, or contextual guidance</p></li>
            <li><p><b>Warning Modal:</b> Alert users to potential issues or important considerations</p></li>
            <li><p><b>Success Modal:</b> Confirm successful completion of actions with positive feedback</p></li>
            <li><p><b>Error Modal:</b> Communicate failures or issues requiring user attention</p></li>
            <li><p><b>Nested Modal:</b> Secondary modals that open from within existing modals</p></li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentModal;