import React from "react";
import BrandColors from "../../../../../assets/images/app/projects/sistent/brand-colors-table.svg";
import GreyscaleColors from "../../../../../assets/images/app/projects/sistent/greyscale-colors-table.svg";
import BgColors from "../../../../../assets/images/app/projects/sistent/bg-colors-table.svg";
import FunctionColors from "../../../../../assets/images/app/projects/sistent/function-colors-table.svg";
import TextColors from "../../../../../assets/images/app/projects/sistent/text-colors-table.svg";
import BorderColors from "../../../../../assets/images/app/projects/sistent/border-colors-table.svg";
import BrandColorsDark from "../../../../../assets/images/app/projects/sistent/brand-colors-table-dark.svg";
import GreyscaleColorsDark from "../../../../../assets/images/app/projects/sistent/greyscale-colors-table-dark.svg";
import BgColorsDark from "../../../../../assets/images/app/projects/sistent/bg-colors-table-dark.svg";
import FunctionColorsDark from "../../../../../assets/images/app/projects/sistent/function-colors-table-dark.svg";
import TextColorsDark from "../../../../../assets/images/app/projects/sistent/text-colors-table-dark.svg";
import BorderColorsDark from "../../../../../assets/images/app/projects/sistent/border-colors-table-dark.svg";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ColorCode = () => {
  const { isDark } = useStyledDarkMode();
  return (
    <div className="main-content">
      <p>
        These colors have been structured into tokens that represent specific
        values. These tokens will be arranged in a package to enable referencing
        and importing it into editor files for use. The tokens are grouped into
        categories to represent the ones that are directly usable in designs and
        those that are to be aliased by tokens used in designs. This makes for
        proper structure and consistent usage of color across all proposed and
        implemented designs. The only exception for usage of primitive tokens
        might be when applying color to illustrations.
      </p>
      <a id="Primitive Category">
        <h2>Primitive Category</h2>
      </a>
      <p>
        Since this category will not be used directly in designs, it does not
        have any role descriptions.
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
        The semantic category has been sub-categorized into background, text,
        brand, border, and functions. Possibility for a few more categories
        exists as the need arises.
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
    </div>
  );
};

export default ColorCode;
