import React from "react";
import BrandColors from "../../../../../assets/images/app/projects/sistent/brand-colors-table.svg";
import GreyscaleColors from "../../../../../assets/images/app/projects/sistent/greyscale-colors-table.svg";
import BgColors from "../../../../../assets/images/app/projects/sistent/bg-colors-table.svg";
import FunctionColors from "../../../../../assets/images/app/projects/sistent/function-colors-table.svg";
import TextColors from "../../../../../assets/images/app/projects/sistent/text-colors-table.svg";
import BorderColors from "../../../../../assets/images/app/projects/sistent/border-colors-table.svg";
import { Col, Row } from "../../../../../reusecore/Layout";

const ColorCode = () => {
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
          <img width="100%" src={BrandColors} alt="Brand colors" />
        </Col>
      </Row>
      <h3>Greyscale Colors</h3>
      <Row className="image-container" Hcenter>
        <Col md={8} lg={8} sm={12}>
          <img width="100%" src={GreyscaleColors} alt="Greyscale colors" />
        </Col>
      </Row>
      <h3>Function Colors</h3>
      <Row className="image-container" Hcenter>
        <Col md={8} lg={8} sm={12}>
          <img width="100%" src={FunctionColors} alt="Function colors" />
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
          <img width="100%" src={BgColors} alt="Background colors" />
        </Col>
      </Row>
      <h3>Text Colors</h3>
      <Row className="image-container" Hcenter>
        <Col md={8} lg={8} sm={12}>
          <img width="100%" src={TextColors} alt="Text colors" />
        </Col>
      </Row>
      <h3>Border Colors</h3>
      <Row className="image-container" Hcenter>
        <Col md={8} lg={8} sm={12}>
          <img width="100%" src={BorderColors} alt="Border colors" />
        </Col>
      </Row>
    </div>
  );
};

export default ColorCode;
