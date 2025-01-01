import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  ToggleButtonGroup,
  ToggleButton,
  Box,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const formatButtons = [
  <ToggleButton key="bold" value="bold">ToggleButton 1</ToggleButton>,
  <ToggleButton key="italic" value="italic">ToggleButton 2</ToggleButton>,
  <ToggleButton key="underline" value="underline">ToggleButton 3</ToggleButton>,
];

const SistentToggleButton = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [formats, setFormats] = React.useState(() => ["bold"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <SistentLayout title="ToggleButton">
      <div className="content">
        <a id="Identity">
          <h2>ToggleButton</h2>
        </a>
        <p>
        The `ToggleButton` and `ToggleButtonGroup` are versatile components
            that can be used for a wide range of applications. Their intuitive
            design ensures users can make selections easily and confidently.
            Whether it's enabling a setting, selecting a mode, or choosing
            multiple options, these components are built to enhance user
            experience across different scenarios.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toggle-button"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/toggle-button")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toggle-button/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/toggle-button/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/toggle-button/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/toggle-button/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Basic Usage">
            <h2>Basic Usage</h2>
          </a>
          <p>
            Basic toggle buttons allow users to make multiple selections easily,
            with each button’s state reflecting whether it is selected. For
            example, in text formatting, users can choose "Bold," "Italic," or
            "Underline" simultaneously to customize their text. The selected
            states are stored in an array, making it simple to manage and apply
            changes dynamically. This ensures seamless functionality and a
            polished user experience.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                {formatButtons}
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>
          <a id="Exclusive Selection">
            <h2>Exclusive Selection</h2>
          </a>
          <p>
            With exclusive selection, only one option can be selected at a time.
            This is useful in scenarios where mutually exclusive choices are
            required, such as selecting a single alignment for text (e.g.,
            "Left," "Center," or "Right"). The `exclusive` prop ensures that
            toggling one button automatically deselects the others, maintaining
            clarity and consistency in user inputs.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup
                value={formats[0]}
                exclusive
                onChange={(event, newFormat) => {
                  setFormats([newFormat]);
                }}
                aria-label="text formatting"
              >
                {formatButtons}
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>
          <a id="Vertical Toggle">
            <h2>Vertical Toggle</h2>
          </a>
          <p>
            Toggle buttons can be stacked vertically by setting the orientation
            prop to "vertical." This layout is ideal for menus, settings panels,
            or options where vertical alignment improves readability and ease of
            access. Vertical toggle groups are particularly helpful on smaller
            screens or mobile devices, ensuring options remain accessible without
            compromising on space.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup
                orientation="vertical"
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                {formatButtons}
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            The ToggleButtonGroup component supports different sizes to match
            the design requirements of your application. Available sizes include
            "small," "medium" (default), and "large." By adjusting the size,
            you can ensure that buttons are appropriately scaled for their
            context, whether it's a compact toolbar or a full-screen settings
            menu.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ToggleButtonGroup
                  size="small"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  {formatButtons}
                </ToggleButtonGroup>
                <ToggleButtonGroup
                  size="medium"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  {formatButtons}
                </ToggleButtonGroup>
                <ToggleButtonGroup
                  size="large"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  {formatButtons}
                </ToggleButtonGroup>
              </Box>
            </SistentThemeProvider>
          </Row>
          <a id="Disabled">
            <h2>Disabled</h2>
          </a>
          <p>
            All toggle buttons within a group can be disabled by setting the
            `disabled` prop on the `ToggleButtonGroup` component. This is
            useful in scenarios where selections should be temporarily or
            permanently unavailable to users, such as when certain features are
            restricted or conditions are not met for using them.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <ToggleButtonGroup
                disabled
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
              >
                {formatButtons}
              </ToggleButtonGroup>
            </SistentThemeProvider>
          </Row>
          <a id="Color">
            <h2>Color</h2>
          </a>
          <p>
            Toggle buttons can be styled with different colors using the `color`
            prop. Available options include "primary" and "secondary," among
            others, depending on your theme configuration. This customization
            helps to visually differentiate buttons, emphasizing their purpose
            and improving user interaction.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ToggleButtonGroup
                  color="primary"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  {formatButtons}
                </ToggleButtonGroup>
                <ToggleButtonGroup
                  color="secondary"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  {formatButtons}
                </ToggleButtonGroup>
              </Box>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentToggleButton;
