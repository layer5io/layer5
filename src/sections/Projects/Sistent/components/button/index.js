import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Button } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentButton = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Button">
      <div className="content">
        <a id="Identity">
          <h2>Button</h2>
        </a>
        <p>
          A button is an interactive element that triggers a specific action,
          takes users where they need to go, and points out what happens next in
          a given flow.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/button"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/button")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/button/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/button/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/button/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Buttons are crucial and integral elements in an interface. They are
            mostly used to trigger actions and in so doing, take users to where
            they need to be in any step of a flow. Buttons can be used in tandem
            with other elements to piece designs together and convey digital
            experiences.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            In order to establish hierarchy, prominence and flexibility,
            multiple types of buttons exist that can assist users to achieve
            different aims. With the different styling on these buttons, it
            makes it easier for users to navigate and arrive at their solutions
            faster.
          </p>
          <h3>Filled</h3>
          <p>
            Filled buttons are buttons that consist a background color fill and
            a text in it. Depending on the theme or intended action, the color
            fill can range from a primary brand color to any other applicable
            color in a brand’s color palette.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" label="Filled" size="medium" />
            </SistentThemeProvider>
          </Row>
          <h3>Outlined</h3>
          <p>
            Outlined buttons are buttons that do not have a fill, but have a
            border or stroke to define its bounding box as well as a text label
            to convey a thought for users to take action upon. Colors can also
            be used to style these buttons in order to fit into the theme align
            with brand guidelines.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="outlined" label="Outlined" size="medium" />
            </SistentThemeProvider>
          </Row>
          <h3>Text</h3>
          <p>
            Also known as ghost buttons, text buttons are mostly just what the
            name implies; they are buttons without fills or borders which might
            just have a specific text styling and color to denote different
            states for easier identification.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="text" label="Text" size="medium" />
            </SistentThemeProvider>
          </Row>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            For buttons to be fully effective, they can be adjusted in size to
            accommodate multiple use cases where they may apply. These size
            changes are usually done to the height of the buttons and not the
            width since buttons usually grow to contain their content. The
            height that makes up the different sizes of our buttons are gotten
            from our spacing system to retain space consistency. We have chosen
            two different sizes of buttons to provide options and more sizes can
            be added to fill the growing needs.
          </p>
          <h3>56px / 3.5rem</h3>
          <p>
            The 56px button is the first button size. It is currently the
            largest button available for use and it is available for both mobile
            and desktop resolutions, but it serves in different capacities
            across these different resolutions.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" label="56px / 3.5rem" size="large" />
            </SistentThemeProvider>
          </Row>
          <h3>48px / 3rem</h3>
          <p>
            The 48px button is the second button size currently in use and it is
            available from mobile to desktop resolutions, even though it serves
            in different capacities across these screen sizes.
          </p>
          <Row Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Button variant="contained" label="48px / 3rem" size="medium" />
            </SistentThemeProvider>
          </Row>
          <h3>Full width</h3>
          <p>
            Full width buttons are more efficient in mobile designs and rightly
            so in order to offer users with a wider touch area since the input
            devices - the fingers, are a lot larger than the cursor on a desktop
            or larger screen.
          </p>
          <Row Hcenter className="image-container">
            <Col sm={12}>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" label="Full width" fullWidth />
              </SistentThemeProvider>
            </Col>
          </Row>
          <p>
            <strong>NOTE:</strong>
          </p>
          <p>
            These sizes are being specified with numerical values because though
            the same size is used across screen resolutions, they have different
            roles. On desktop for instance, the 56px button is a the default
            size, and 48px the small size, while on mobile, 56px is large and
            48px is the default size. Preferred button sizes (height) are
            usually arrived at through exploration and proper consideration of
            industry standards and best practices.
          </p>
          <a id="Adding Icons">
            <h2>Adding Icons</h2>
          </a>
          <p>
            Sometimes, icons are used alongside labels in buttons to pass across
            specific information or relay added information for a higher level
            of understanding and better comprehension. Depending on the
            information being conveyed, the icons can be placed on the left side
            of the label text or on the right side of the label text. No
            specific rules apply apart from spacing tips which may be considered
            here. For full width buttons, if icons must be added, they should be
            centered in the button alongside the label text.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentButton;
