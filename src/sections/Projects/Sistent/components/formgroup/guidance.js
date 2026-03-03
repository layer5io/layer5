import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import {
  SistentThemeProvider,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const FormGroupGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="FormGroup">
      <div className="content">
        <h2>FormGroup</h2>

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
          <h3>Best Practices</h3>
          <ul>
            <li>Use FormGroup to group related checkboxes or switches.</li>

            <li>Wrap controls inside FormControlLabel.</li>

            <li>Use vertical layout for forms.</li>

            <li>
              Use <code>row</code> prop for horizontal layout.
            </li>
          </ul>

          <h3>Horizontal Example</h3>

          <Row $Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Email" />
                <FormControlLabel control={<Checkbox />} label="SMS" />
              </FormGroup>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default FormGroupGuidance;
