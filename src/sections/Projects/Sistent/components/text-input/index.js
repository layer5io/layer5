import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Input } from "@layer5/sistent";

import { Row } from "../../../../../reusecore/Layout";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentTextInput = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Text Input">
      <div className="content">
        <a id="Identity">
          <h2>Text Input</h2>
        </a>
        <p>
          Text inputs are important elements that help users interact with an
          experience by providing text commands that will in turn return
          expected results. These commands can range from providing a free range
          of personal information to entering a limited number of characters for
          a use case.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/text-input"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/text-input")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/text-input/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-input/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/text-input/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/text-input/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Text inputs are important elements that help users interact with an
            experience by providing text commands that will in turn return
            expected results. These commands can range from providing a free
            range of personal information to entering a limited number of
            characters for a use case.
          </p>
          <a id="Design">
            <h2>Design</h2>
          </a>
          <p>
            Instead of various types for use across designs, the text input has
            just one type to ensure simplicity and efficiency. It is preferable
            that inputs are as minimal as possible since the sole function that
            they generally perform is to ensure that users are able to send in
            data and receive corresponding information.
          </p>
          <Row Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input placeholder="Placeholder goes here" type="text" />
            </SistentThemeProvider>
          </Row>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            Since input fields have a responsive width that adjusts depending on
            the need and use case, size considerations are mostly directed at
            the height of the field. This means that the size of text inputs
            adjust only relative to the height of the text field. Because text
            inputs are mostly used in tandem with buttons, to ensure design
            consistency, text inputs and buttons have similar size requirements.
          </p>
          <h3>56px / 3.5rem</h3>
          <p>
            The 56px text input is the first field size. It is the largest text
            input available for use and it is available for both mobile and
            desktop resolutions, but it serves in different capacities across
            these different resolutions.
          </p>
          <Row Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input
                placeholder="Placeholder goes here"
                type="text"
                size="medium"
              />
            </SistentThemeProvider>
          </Row>
          <h3>48px / 3rem</h3>
          <p>
            The 48px text input is the second field size in use and it is
            available from mobile to desktop resolutions, even though it serves
            in different capacities across these screen sizes.
          </p>
          <Row Hcenter>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Input
                placeholder="Placeholder goes here"
                type="text"
                size="small"
              />
            </SistentThemeProvider>
          </Row>
          <p>
            <strong>NOTE:</strong>
          </p>
          <p>
            These sizes are being specified with numerical values because though
            the same size is used across screen resolutions, they have different
            roles. On desktop for instance, the 56px text input is a the default
            size, and 48px the small size, while on mobile, 56px is large and
            48px is the default size. Preferred text input sizes (height) are
            usually arrived at through exploration and proper consideration of
            industry standards and best practices.
          </p>
          <a id="Adding Icons">
            <h2>Adding Icons</h2>
          </a>
          <p>
            Icons can be used often in text inputs to aid in understanding the
            required parameters for a given field or to provide options that can
            help to improve the experience as a user navigates a given set of
            text inputs. Depending on the context, icons can be placed on the
            left and right at different times or even at the same time. The
            icons should be aligned to the left or right side of the input field
            and not to the center, while text remains left aligned.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentTextInput;
