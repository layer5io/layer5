import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";

const exampleCode = `
<SistentThemeProvider>
  <FormGroup>
    <FormControlLabel
      control={<Checkbox />}
      label="Option 1"
    />
    <FormControlLabel
      control={<Checkbox />}
      label="Option 2"
    />
  </FormGroup>
</SistentThemeProvider>
`;

const FormGroupCode = () => {
  const location = useLocation();

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

        <CodeBlock name="formgroup-example" code={exampleCode} />
      </div>
    </SistentLayout>
  );
};

export default FormGroupCode;
