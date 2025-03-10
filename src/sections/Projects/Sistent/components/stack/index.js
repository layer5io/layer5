import React from "react";
import { navigate } from "gatsby";

import { Stack, SistentThemeProvider } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";

const SistentStack = () => {

  return (
    <SistentLayout title="Stack">
      <div className="content">
        <a id="Identity">
          <h2>Stack</h2>
        </a>
        <p>
          The Stack component provides a simple way to arrange elements in a <strong/>row<strong/> or <strong/>column<strong/> with customizable spacing.
        </p>
        <div className="filterBtns">
          <TabButton onClick={() => navigate("/projects/sistent/components/stack")} title="Overview" />
          <TabButton onClick={() => navigate("/projects/sistent/components/stack/guidance")} title="Guidance" />
          <TabButton onClick={() => navigate("/projects/sistent/components/stack/code")} title="Code" />
        </div>
        <div className="main-content">
          <h3>Basic Usage</h3>
          <SistentThemeProvider>
            <Stack direction="row" spacing={2}>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
            </Stack>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentStack;
