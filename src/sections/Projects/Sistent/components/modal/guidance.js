import React from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const ModalGuidance = () => {
  const location = useLocation();
  return (
    <SistentLayout title="Modal">
      <div>
        <p>
          A button is an interactive element that triggers a specific action,
          takes users where they need to go, and points out what happens next in a
          given flow.
        </p>
      </div>
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
    </SistentLayout>
  );
};
export default ModalGuidance;
