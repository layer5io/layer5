import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Chip, DesignIcon, MesheryFilterIcon } from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentChip = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Chip" >
      <div className="content">
        <a id="Identity">
          <h2>Chip</h2>
        </a>
        <p>
          Chips are compact elements that represent an input, attribute, or action.
          They allow users to enter information, make selections, filter content, or trigger actions.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/chip"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/chip")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/chip/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/chip/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/chip/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/chip/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Chips are helpful elements that can be used to display selected options,
            filter content, or trigger actions. They provide a clear visual representation
            of discrete pieces of information and can be interactive or static depending
            on the use case.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            Different types of chips serve various purposes in the user interface,
            from displaying information to enabling user interaction.
          </p>
          <h3>Basic Chip</h3>
          <p>
            Basic chips display simple information and are typically non-interactive.
            They're useful for showing tags, categories, or labels.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Basic Chip" />
            </SistentThemeProvider>
          </Row>
          <h3>Clickable Chip</h3>
          <p>
            Clickable chips respond to user interaction and can trigger actions
            when clicked. They're useful for navigation or performing specific operations.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Clickable" clickable />
            </SistentThemeProvider>
          </Row>
          <h3>Deletable Chip</h3>
          <p>
            Deletable chips include a delete icon that allows users to remove them.
            They're commonly used for selected filters, tags, or form inputs.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Deletable" color="primary"onDelete={() => {}} />
            </SistentThemeProvider>
          </Row>
          <a id="Variants">
            <h2>Variants</h2>
          </a>
          <p>
            Chips come in different visual styles to match various design needs
            and levels of emphasis.
          </p>
          <h3>Filled</h3>
          <p>
            Filled chips have a solid background color and are the default variant.
            They provide good contrast and visibility.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Filled" variant="filled" />
            </SistentThemeProvider>
          </Row>
          <h3>Outlined</h3>
          <p>
            Outlined chips have a transparent background with a border.
            They're useful when you need a lighter visual treatment.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Outlined" variant="outlined" />
            </SistentThemeProvider>
          </Row>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            Chips are available in different sizes to accommodate various use cases
            and design requirements.
          </p>
          <h3>Small</h3>
          <p>
            Small chips are compact and work well in dense layouts or when space is limited.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Small" size="small" />
            </SistentThemeProvider>
          </Row>
          <h3>Medium</h3>
          <p>
            Medium chips are the default size and work well in most situations.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Medium" size="medium" />
            </SistentThemeProvider>
          </Row>
          <a id="Logo Chips">
            <h2>Logo Chips</h2>
          </a>
          <p>
            Logo chips combine icons with text labels to provide visual context
            and improve user recognition of different categories or actions.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip
                label="Design"
                variant="outlined"
                icon={<DesignIcon style={{ marginLeft: "8px", marginRight: "8px" }} />}
                style={{ paddingLeft: "4px", margin: "0 8px" }}
              />
              <Chip
                label="WASM"
                variant="outlined"
                icon={<MesheryFilterIcon style={{ marginLeft: "8px", marginRight: "8px", width: "16px", height: "16px" }} />}
                style={{ paddingLeft: "4px", margin: "0 8px" }}
              />
            </SistentThemeProvider>
          </Row>
          <a id="Colors">
            <h2>Colors</h2>
          </a>
          <p>
            Chips can use different colors to convey meaning, status, or to match
            your brand's color scheme.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Chip label="Primary" color="primary" style={{ margin: "0 5px" }} />
              <Chip label="Secondary" color="secondary" style={{ margin: "0 5px" }} />
              <Chip label="Success" color="success" style={{ margin: "0 5px" }} />
              <Chip label="Error" color="error" style={{ margin: "0 5px" }} />
              <Chip label="Warning" color="warning" style={{ margin: "0 5px" }} />
              <Chip label="Info" color="info" style={{ margin: "0 5px" }} />
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentChip;
