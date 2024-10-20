import React from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import ConfirmationBg from "../../../../../assets/images/app/projects/sistent/confirmation.png";
import ConfirmationDarkBg from "../../../../../assets/images/app/projects/sistent/confirmation-dark.png";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const SistentModal = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
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
        </div>
      </div>
    </SistentLayout>
  );
};
export default SistentModal;
