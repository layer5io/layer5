import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentLayout } from "../../sistent-layout";
import Button from "../../../../../reusecore/Button";

export const SpacingCode = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Spacing">
      <div className="content">
        <a id="Identity">
          <h2>Spacing</h2>
        </a>
        <p>
          Space is the unseen component in designed solutions that enables
          clear, concise, and consistent arrangement of interface elements
          across a screen.
        </p>
        <div className="filterBtns">
          <Button
            className={
              location.pathname === "/projects/sistent/identity/spacing"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/spacing")}
            title="Overview"
          />
          <Button
            className={
              location.pathname ===
              "/projects/sistent/identity/spacing/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/identity/spacing/guidance")
            }
            title="Guidance"
          />
          <Button
            className={
              location.pathname === "/projects/sistent/identity/spacing/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/spacing/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>Sorry, this page is still under work</p>
        </div>
      </div>
    </SistentLayout>
  );
};
