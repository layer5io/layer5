import { navigate } from "gatsby";
import TabButton from "../../../../../reusecore/Button";
import React from "react";
import { useLocation } from "@reach/router";
export default function SectionNav() {
  const location = useLocation();
  return (
    <div className="filterBtns">
      <TabButton
        className={
          location.pathname === "/projects/sistent/components/select"
            ? "active"
            : ""
        }
        onClick={() => navigate("/projects/sistent/components/select")}
        title="Overview"
      />
      <TabButton
        className={
          location.pathname === "/projects/sistent/components/selet/guidance"
            ? "active"
            : ""
        }
        onClick={() => navigate("/projects/sistent/components/select/guidance")}
        title="Guidance"
      />
      <TabButton
        className={
          location.pathname === "/projects/sistent/components/select/code"
            ? "active"
            : ""
        }
        onClick={() => navigate("/projects/sistent/components/select/code")}
        title="Code"
      />
    </div>
  );
}
