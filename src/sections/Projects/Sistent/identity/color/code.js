import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import BrandColors from "../../../../../assets/images/app/projects/sistent/brand-colors-table.png";
import GreyscaleColors from "../../../../../assets/images/app/projects/sistent/greyscale-colors-table.png";
import BgColors from "../../../../../assets/images/app/projects/sistent/bg-colors-table.png";
import FunctionColors from "../../../../../assets/images/app/projects/sistent/function-colors-table.png";
import TextColors from "../../../../../assets/images/app/projects/sistent/text-colors-table.png";
import BorderColors from "../../../../../assets/images/app/projects/sistent/border-colors-table.png";
import ComponentColors from "../../../../../assets/images/app/projects/sistent/components-table.png";

import BrandColorsDark from "../../../../../assets/images/app/projects/sistent/brand-colors-table-dark.png";
import GreyscaleColorsDark from "../../../../../assets/images/app/projects/sistent/greyscale-colors-table-dark.png";
import BgColorsDark from "../../../../../assets/images/app/projects/sistent/bg-colors-table-dark.png";
import FunctionColorsDark from "../../../../../assets/images/app/projects/sistent/function-colors-table-dark.png";
import TextColorsDark from "../../../../../assets/images/app/projects/sistent/text-colors-table-dark.png";
import BorderColorsDark from "../../../../../assets/images/app/projects/sistent/border-colors-table-dark.png";
import ComponentColorsDark from "../../../../../assets/images/app/projects/sistent/components-table-dark.png";

import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import Button from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ColorCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
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
            These colors have been structured into tokens that represent
            specific values. These tokens will be arranged in a package to
            enable referencing and importing it into editor files for use. The
            tokens are grouped into categories to represent the ones that are
            directly usable in designs and those that are to be aliased by
            tokens used in designs. This makes for proper structure and
            consistent usage of color across all proposed and implemented
            designs. The only exception for usage of primitive tokens might be
            when applying color to illustrations.
          </p>
          <a id="Primitive Category">
            <h2>Primitive Category</h2>
          </a>
          <p>
            Since this category will not be used directly in designs, it does
            not have any role descriptions.
          </p>
          <h3>Brand Colors</h3>
          <Row className="image-container" Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? BrandColorsDark : BrandColors}
                alt="Brand colors"
              />
            </Col>
          </Row>
          <h3>Greyscale Colors</h3>
          <Row className="image-container" Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? GreyscaleColorsDark : GreyscaleColors}
                alt="Greyscale colors"
              />
            </Col>
          </Row>
          <h3>Function Colors</h3>
          <Row className="image-container" Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? FunctionColorsDark : FunctionColors}
                alt="Function colors"
              />
            </Col>
          </Row>
          <a id="Semantic Category">
            <h2>Semantic Category</h2>
          </a>
          <p>
            The semantic category has been sub-categorized into background,
            text, brand, border, and functions. Possibility for a few more
            categories exists as the need arises.
          </p>
          <h3>Background Colors</h3>
          <Row className="image-container" Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? BgColorsDark : BgColors}
                alt="Background colors"
              />
            </Col>
          </Row>
          <h3>Text Colors</h3>
          <Row className="image-container" Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? TextColorsDark : TextColors}
                alt="Text colors"
              />
            </Col>
          </Row>
          <h3>Border Colors</h3>
          <Row className="image-container" Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? BorderColorsDark : BorderColors}
                alt="Border colors"
              />
            </Col>
          </Row>
          <h3>Component Colors</h3>
          <p>
            Tokens here are component specific and must be used only for the
            component that they are referencing.
          </p>
          <Row className="image-container" Hcenter>
            <Col md={8} lg={8} sm={12}>
              <img
                width="100%"
                src={isDark ? ComponentColorsDark : ComponentColors}
                alt="Border colors"
              />
            </Col>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ColorCode;
