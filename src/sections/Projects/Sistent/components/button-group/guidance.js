import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";

const ButtonGroupGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Button Group">
      <div className="content">
        <a id="Identity">
          <h2>Button Group</h2>
        </a>
        <p>
          The ButtonGroup component can be used to group related buttons
          together. It is a container for multiple buttons that can be used to
          group buttons together and apply styles to them. This component is
          useful when you have a group of buttons that need to be styled in a
          similar way.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/button-group"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button-group")
            }
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/button-group/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button-group/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/button-group/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/button-group/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The ButtonGroup component can be used to group related buttons
            together. It is a container for multiple buttons that can be used to
            group buttons together and apply styles to them. This component is
            useful when you have a group of buttons that need to be styled in a
            similar way.
          </p>
          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            The ButtonGroup component should be labeled with a heading that
            describes the group of buttons. This heading should be descriptive
            and should clearly indicate the purpose of the group of buttons.
          </p>
          <a id="Placement">
            <h2>Placement</h2>
          </a>
          <p>
            The ButtonGroup component should be placed in a location that is
            easily accessible to users. It should be placed in a prominent
            location on the page where users can easily find it. The buttons
            within the ButtonGroup should be large enough to be easily
            clickable, and there should be enough space between the buttons to
            prevent accidental clicks. Additionally, the ButtonGroup should be
            accessible via keyboard navigation, and screen readers should be
            able to read the labels of the buttons within the group.
          </p>
          <a id="Behavior">
            <h2>Behavior</h2>
          </a>
          <p>
            The ButtonGroup component should behave in a consistent and
            predictable manner. When a user clicks on a button within the group,
            the button should respond visually to indicate that it has been
            clicked. The ButtonGroup should also provide visual feedback when a
            user hovers over a button, to indicate that the button is clickable.
            Additionally, the ButtonGroup should be accessible via keyboard
            navigation, and screen readers should be able to read the labels of
            the buttons within the group.
          </p>
          <a id="Styling">
            <h2>Styling</h2>
          </a>
          <p>
            The ButtonGroup component should be styled in a way that is
            consistent with the rest of the application. The buttons within the
            group should be styled in a way that is visually distinct from other
            buttons on the page, to indicate that they are part of a group. The
            ButtonGroup should also be styled in a way that is accessible to
            users with color blindness or low vision. The buttons within the
            group should have a visible focus state, and the focus should be set
            to the first button in the group by default.
          </p>
          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <p>
            The ButtonGroup component should be accessible to all users,
            including those with disabilities. The component should be keyboard
            navigable, and screen readers should be able to read the labels of
            the buttons within the group. The buttons within the ButtonGroup
            should have a visible focus state, and the focus should be set to
            the first button in the group by default. The ButtonGroup should
            also be styled in a way that is accessible to users with color
            blindness or low vision.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ButtonGroupGuidance;
