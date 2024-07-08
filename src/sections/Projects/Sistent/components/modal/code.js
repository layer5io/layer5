import React from "react";
import { SistentLayout } from "../../sistent-layout";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalButtonPrimary,
  ModalButtonSecondary,
  ModalFooter,
  SistentThemeProvider,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const ModalCode = () => {
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
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <div>
              <button onClick={handleOpen}>Open Modal</button>
              <Modal open={open} closeModal={handleClose} title="Modal Title">
                <ModalBody>
                  <div>
                    This action is irreversible! Are you sure you want to delete
                    this team?
                  </div>
                </ModalBody>
                <ModalFooter variant="filled">
                  <ModalButtonSecondary onClick={handleClose}>
                    Cancel
                  </ModalButtonSecondary>
                  <ModalButtonPrimary onClick={handleClose}>
                    Delete
                  </ModalButtonPrimary>
                </ModalFooter>
              </Modal>
            </div>
            <div>
              <button onClick={handleActionOpen}>Open Action Modal</button>
              <Modal
                open={actionOpen}
                onClose={handleActionClose}
                title="Action Modal Title"
              >
                <ModalBody></ModalBody>
                <ModalFooter variant="filled">
                  <ModalButtonSecondary onClick={handleActionClose}>
                    Cancel
                  </ModalButtonSecondary>
                  <ModalButtonPrimary onClick={handleActionClose}>
                    Delete
                  </ModalButtonPrimary>
                </ModalFooter>
              </Modal>
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalCode;
