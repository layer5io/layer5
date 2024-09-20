import React from "react";
import { navigate } from "gatsby";
import { Row, Col } from "../../../../../reusecore/Layout";
import { useLocation } from "@reach/router";
import Button from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import TonalPallete from "../../../../../assets/images/app/projects/sistent/tonal-palettes.png";
import TonalPalleteDark from "../../../../../assets/images/app/projects/sistent/tonal-palettes-dark.png";
import ContextVisuals1 from "../../../../../assets/images/app/projects/sistent/context-visuals-1.png";
import ContextVisuals2 from "../../../../../assets/images/app/projects/sistent/context-visuals-2.png";
import ContextVisuals3 from "../../../../../assets/images/app/projects/sistent/context-visuals-3.png";
import ContextVisuals4 from "../../../../../assets/images/app/projects/sistent/context-visuals-4.png";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentIdentityColor = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Color">
      <div className="content">
        <a id="Identity">
          <h2>Color</h2>
        </a>
        <p>
          Colors when accurately applied can be a potent tool that enables
          designers and developers to implement solutions with speed and
          efficiency. Here are a couple of things to keep in mind.
        </p>
        <div className="filterBtns">
          <Button
            className={
              location.pathname === "/projects/sistent/identity/color"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color")}
            title="Overview"
          />
          <Button
            className={
              location.pathname === "/projects/sistent/identity/color/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/identity/color/guidance")
            }
            title="Guidance"
          />
          <Button
            className={
              location.pathname === "/projects/sistent/identity/color/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            In order to achieve the aim of maintaining a consistent and engaging
            digital interface across Layer5, whether it is in the form of
            websites, applications, or experiences, a detailed explanation of
            color application along with practical use cases is needed. To this
            end, the following concepts help to shape a suitable identity as we
            aim for balance throughout our User Interface.
          </p>
          <a id="Introduction">
            <h2>Introduction</h2>
          </a>
          <p>
            When the color palette is accurately put to use, it ensures a
            recognizable consistency in Layer5's array of digital interfaces and
            products. This is made possible due to adherence to well defined
            rules which though specific, are also flexible and give ample room
            for professionals to curate appealing solutions across themes.
          </p>
          <a id="The Basics">
            <h2>The Basics</h2>
          </a>
          <p>
            Let's start with a few of the common terms that we will come across
            frequently, as understanding what they mean will inform us of
            applicable use cases and proper procedures that should not be
            overlooked.
          </p>
          <h3>Theme</h3>
          <p>
            By definition, a theme is a cohesive and consistent look and feel
            for a product. This consistent look can be achieved with the use of
            harmonious color palettes, legible fonts and layout patterns.
            Currently, sistent outlines specifications for light and dark
            themes.
          </p>
          <h3>Value</h3>
          <p>
            A value is the unique visual attribute assigned to a token through
            the use of themes. This could range from hex codes to rgba values
            which are used to highlight specific colors in any given instance.
            We highly recommend that no exact values be referenced anywhere in
            the design in order to avoid errors and ensure consistency. Instead,
            tokens should be used to curate and implement the reusable values.
            More on tokens next.
          </p>
          <h3>Tokens</h3>
          <p>
            Tokens can be regarded as a shared language between design and
            development for communicating detailed information about how to
            build user interfaces. Generally, a rule of thumb is to represent
            the context (background, text, component), role (success, warning,
            brand, inverse), and modifier(s) (secondary, tertiary, hover) in a
            string of text that will represent set values gotten from the colors
            in the color palette.
          </p>
          <h3>Role</h3>
          <p>
            Roles are parameters that specify the context that colors are being
            applied to and while different roles can share the same value, the
            token structure means that they will have different use cases. These
            values can be different though depending on the current theme.
          </p>
          <a id="Color Anatomy">
            <h2>Color Anatomy</h2>
          </a>
          <p>
            Sistent's default themes are derived from Layer5's color palette of
            which the Keppel Green color serves as the dominant primary action
            color with subtle shifts in value to enable the required visual
            accessibility as recommended in the WCAG (Web Content Accessibility
            Guidelines) 2.1 compliance standards. It is also sometimes combined
            with Saffron Yellow and Caribbean Green colors accentuate some other
            parts of the user interface like CTA buttons as well as
            illustrations and icons.
          </p>
          <p>
            The Charcoal color as well as another accent grey serve as neutrals
            to complement these greens and create harmonious implementations.
            These five colors combine to form a foundation for the color system.
          </p>
          <Row Hcenter className="image-container">
            <Col md={8} lg={8} sm={12}>
              <img
                src={isDark ? TonalPalleteDark : TonalPallete}
                alt="Tonal Palette"
              />
            </Col>
          </Row>
          <a id="Layer Hirarchy">
            <h2>Layer Hirarchy</h2>
          </a>
          <p>
            For backgrounds and surfaces, colors in the neutral palettes are
            used cohesively to create depth and spatial associations. This
            hierarchical pattern defines the logic of how colors stack on top of
            each other in a UI when implementing Sistent themes. This logical
            pattern goes beyond just themes but is also built across components
            and accounted for in suggested color tokens as well.
          </p>
          <p>
            There is an alternate relationship between the layer hierarchy in
            both light and dark themes:
            <ul>
              <li>
                In the light theme, as layers are stacked towards the topmost
                surface, they become progressively darker.
              </li>
              <li>
                In the dark theme, as layers are stacked towards the topmost
                surface, they become progressively lighter.
              </li>
            </ul>
            This means, in effect, that while there is a fine blend of surfaces
            on any given UI theme, there is also strict adherence to
            accessibility guidelines and recommendations.
          </p>
          <Row Hcenter className="image-container">
            <Col md={8} lg={8} sm={12}>
              <img src={ContextVisuals1} alt="Context Visuals" />
            </Col>
          </Row>
          <p>
            A similar hierarchy pattern as above is adopted for brilliantly
            colored backgrounds like brand and alert colors when it comes to
            interactive states. So as interactions progress from default to
            hover to pressed, this same principle may apply. However, when
            trying to establish prominence for other user interface needs, an
            inverse relationship may be more suitable. Hence, for these
            brilliant colors:
          </p>
          <ul>
            <li>
              In the light theme, as prominence reduces, layers become
              progressively lighter.
            </li>
            <li>
              In the dark theme, as prominence reduces, layers become
              progressively darker.
            </li>
          </ul>
          <Row Hcenter className="image-container">
            <Col md={8} lg={8} sm={12}>
              <img src={ContextVisuals2} alt="Context Visuals" />
            </Col>
          </Row>
          <a id="Green Color Accessbility">
            <h2>Green Color Accessbility</h2>
          </a>
          <p>
            In the use of green, Sistent design system ensures compliance with
            WCAG 2.1 standards for distinguishable text and color.{" "}
            <strong>
              <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.w3.org%2FTR%2FWCAG21%2F%23use-of-color">
                (See criteria 1.4.1 and 1.4.3)
              </a>
            </strong>{" "}
            Accessibility is a major consideration for Sistent, and as such,
            accessibility research and guidelines are kept at the core of the
            color selection process.There is further specification on how to
            maintain compliance with these standards in both light and dark
            themes:
          </p>
          <h3>Light Theme</h3>
          <p>
            In order to ensure the minimum contrast of the Keppel Green in the
            the light theme, a variation of it is used in the light theme to
            ensure proper contrast.
          </p>
          <Row Hcenter className="image-container">
            <Col md={8} lg={8} sm={12}>
              <img src={ContextVisuals3} alt="Context Visuals" />
            </Col>
          </Row>
          <h3>Dark Theme</h3>
          <p>
            For the dark theme, the Keppel Green meets the contrast requirement
            easily and as such can be used as the primary accent color for all
            necessary use cases.
          </p>
          <Row Hcenter className="image-container">
            <Col md={8} lg={8} sm={12}>
              <img src={ContextVisuals4} alt="Context Visuals" />
            </Col>
          </Row>
          <p>
            <strong>NOTE:</strong>
          </p>
          <p>
            Take note that if the primary accent color in use meets
            accessibility standards for both intended backgrounds in the light
            and dark themes, there might be no need to have a variation of its
            hue represent it, as is evident in the example above.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentIdentityColor;
