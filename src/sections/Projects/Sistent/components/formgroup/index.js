import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentFormGroup = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="FormGroup">
      <div className="content">
        <h2>FormGroup</h2>

        <p>
          The <code>FormGroup</code> component groups related form controls such
          as checkboxes and switches. It ensures consistent alignment and
          spacing between inputs.
        </p>

        {/* Tabs */}
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/formgroup"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/formgroup")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/formgroup/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/formgroup/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/formgroup/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/formgroup/code")
            }
            title="Code"
          />
        </div>

        <div className="main-content">
          <h3>Basic Example</h3>

          <Row $Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Option 1" />
                <FormControlLabel control={<Checkbox />} label="Option 2" />
              </FormGroup>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentFormGroup;
