import React from "react";

import TypeTable1 from "../../../../../assets/images/app/projects/sistent/type-table-1-light.png";
import TypeTable1Dark from "../../../../../assets/images/app/projects/sistent/type-table-1-dark.png";

import TypeTable2 from "../../../../../assets/images/app/projects/sistent/type-table-2-light.png";
import TypeTable2Dark from "../../../../../assets/images/app/projects/sistent/type-table-2-dark.png";
import { Col, Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const TypographyCode = () => {
  const { isDark } = useStyledDarkMode();
  return (
    <div className="main-content">
      <p>
        The different fonts are referenced using unique token names to achieve
        uniform application of the texts in different use cases across multiple
        platforms. These tokens, just like the color, are split into primitive
        and semantic categories.
      </p>
      <a id="Primitive Category">
        <h2>Primitive Category</h2>
      </a>
      <p>
        This category refers to the seven sizes that were chosen as typesets
        from the major third ratio. They form the foundation for all the other
        fonts generated and used across the typography system. Since these
        tokens lack complete styling however, they are should not be used
        directly in designs and as such do not have any roles ascribed to them.
        However, if a new role emerges and the need for a new token arises,
        these typesets, serve as the reference size for any new font to be
        created.
      </p>
      <Row Hcenter className="image-container">
        <Col md={10} lg={10} sm={12}>
          <img src={isDark ? TypeTable1Dark : TypeTable1} alt="Type Table" />
        </Col>
      </Row>
      <a id="Semantic Category">
        <h2>Semantic Category</h2>
      </a>
      <p>
        The fonts in this category have specifications that make them suitable
        for certain use cases either across all platforms or in any given
        platform.
      </p>
      <Row Hcenter className="image-container">
        <Col md={10} lg={10} sm={12}>
          <img src={isDark ? TypeTable2Dark : TypeTable2} alt="Type Table" />
        </Col>
      </Row>
    </div>
  );
};

export default TypographyCode;
