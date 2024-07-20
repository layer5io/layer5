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
  const colorColumns = ["Token", "Value"];
  const colorData = [
    { token: "keppel-70", value: { name: "Keppel", hex: "#daf3eb", swatchClass: "keppel-70" } },
    { token: "keppel-60", value: { name: "Keppel", hex: "#93E6D1", swatchClass: "keppel-60" } },
    { token: "keppel-50", value: { name: "Keppel", hex: "#41CCB3", swatchClass: "keppel-50" } },
    { token: "keppel-40", value: { name: "Keppel", hex: "#00B39F", swatchClass: "keppel-40" } },
    { token: "keppel-30", value: { name: "Keppel", hex: "#007763", swatchClass: "keppel-30" } },
    { token: "keppel-20", value: { name: "Keppel", hex: "#006661", swatchClass: "keppel-20" } },
    { token: "keppel-10", value: { name: "Keppel", hex: "#00403F", swatchClass: "keppel-10" } },
    { token: "caribbean-70", value: { name: "Caribbean", hex: "#E6FFF6", swatchClass: "caribbean-70" } },
    { token: "caribbean-60", value: { name: "Caribbean", hex: "#A3FFE0", swatchClass: "caribbean-60" } },
    { token: "caribbean-50", value: { name: "Caribbean", hex: "#78FAD3", swatchClass: "caribbean-50" } },
    { token: "caribbean-40", value: { name: "Caribbean", hex: "#00D3A9", swatchClass: "caribbean-40" } },
    { token: "caribbean-30", value: { name: "Caribbean", hex: "#00AD90", swatchClass: "caribbean-30" } },
    { token: "caribbean-20", value: { name: "Caribbean", hex: "#006157", swatchClass: "caribbean-20" } },
    { token: "caribbean-10", value: { name: "Caribbean", hex: "#003B37", swatchClass: "caribbean-10" } },
    { token: "Saffron-70", value: { name: "Saffron", hex: "#FFFEE6", swatchClass: "Saffron-70" } },
    { token: "Saffron-60", value: { name: "Saffron", hex: "#FFFBBD", swatchClass: "Saffron-60" } },
    { token: "Saffron-50", value: { name: "Saffron", hex: "#FFEB6B", swatchClass: "Saffron-50" } },
    { token: "Saffron-40", value: { name: "Saffron", hex: "#EBC017", swatchClass: "Saffron-40" } },
    { token: "Saffron-30", value: { name: "Saffron", hex: "#C4990A", swatchClass: "Saffron-30" } },
    { token: "Saffron-20", value: { name: "Saffron", hex: "#785400", swatchClass: "Saffron-20" } },
    { token: "Saffron-10", value: { name: "Saffron", hex: "#523600", swatchClass: "Saffron-10" } }
  ];
  const GreyscaleColorData = [
    { token: "charcoal-100", value: { name: "Charcoal", hex: "#fdfdfd", swatchClass: "charcoal-100" } },
    { token: "charcoal-90", value: { name: "Charcoal", hex: "#EAEDEE", swatchClass: "charcoal-90" } },
    { token: "charcoal-80", value: { name: "Charcoal", hex: "#D2D8DA", swatchClass: "charcoal-80" } },
    { token: "charcoal-70", value: { name: "Charcoal", hex: "#B1B9BC", swatchClass: "charcoal-70" } },
    { token: "charcoal-60", value: { name: "Charcoal", hex: "#8C999E", swatchClass: "charcoal-60" } },
    { token: "charcoal-50", value: { name: "Charcoal", hex: "#647176", swatchClass: "charcoal-50" } },
    { token: "charcoal-40", value: { name: "Charcoal", hex: "#3C494E", swatchClass: "charcoal-40" } },
    { token: "charcoal-30", value: { name: "Charcoal", hex: "#28353A", swatchClass: "charcoal-30" } },
    { token: "charcoal-20", value: { name: "Charcoal", hex: "#142126", swatchClass: "charcoal-20" } },
    { token: "charcoal-10", value: { name: "Charcoal", hex: "#000D12", swatchClass: "charcoal-10" } },
    { token: "accent_grey-90", value: { name: "Accent Grey", hex: "#E7EFF3", swatchClass: "accent_grey-90" } },
    { token: "accent_grey-80", value: { name: "Accent Grey", hex: "#ABBDC5", swatchClass: "accent_grey-80" } },
    { token: "accent_grey-70", value: { name: "Accent Grey", hex: "#ABBDC5", swatchClass: "accent_grey-70" } },
    { token: "accent_grey-60", value: { name: "Accent Grey", hex: "#8D9FA7", swatchClass: "accent_grey-60" } },
    { token: "accent_grey-50", value: { name: "Accent Grey", hex: "#6F8189", swatchClass: "accent_grey-50" } },
    { token: "accent_grey-40", value: { name: "Accent Grey", hex: "#51636B", swatchClass: "accent_grey-40" } },
    { token: "accent_grey-30", value: { name: "Accent Grey", hex: "#3D4F57", swatchClass: "accent_grey-30" } },
    { token: "accent_grey-20", value: { name: "Accent Grey", hex: "#293B43", swatchClass: "accent_grey-20" } },
    { token: "accent_grey-10", value: { name: "Accent Grey", hex: "#15272F", swatchClass: "accent_grey-10" } },
    
  ];
  const FunctionColorData = [
    { token: "blue-70", value: { name: "Blue", hex: "#F0FBFF", swatchClass: "blue-70" } },
    { token: "blue-60", value: { name: "Blue", hex: "#9EDDFF", swatchClass: "blue-60" } },
    { token: "blue-50", value: { name: "Blue", hex: "#75CAFF", swatchClass: "blue-50" } },
    { token: "blue-40", value: { name: "Blue", hex: "#2196F3", swatchClass: "blue-40" } },
    { token: "blue-30", value: { name: "Blue", hex: "#1272CC", swatchClass: "blue-30" } },
    { token: "blue-20", value: { name: "Blue", hex: "#0754A6", swatchClass: "blue-20" } },
    { token: "blue-10", value: { name: "Blue", hex: "#003980", swatchClass: "blue-10" } },
    { token: "green-70", value: { name: "Green", hex: "#EFFCED", swatchClass: "green-70" } },
    { token: "green-60", value: { name: "Green", hex: "#B2E3AF", swatchClass: "green-60" } },
    { token: "green-50", value: { name: "Green", hex: "#5BC95B", swatchClass: "green-50" } },
    { token: "green-40", value: { name: "Green", hex: "#36BC3B", swatchClass: "green-40" } },
    { token: "green-30", value: { name: "Green", hex: "#15701E", swatchClass: "green-30" } },
    { token: "green-20", value: { name: "Green", hex: "#0A4A13", swatchClass: "green-20" } },
    { token: "green-10", value: { name: "Green", hex: "#05240A", swatchClass: "green-10" } },
    { token: "yellow-70", value: { name: "Yellow", hex: "#FFFBE6", swatchClass: "yellow-70" } },
    { token: "yellow-60", value: { name: "Yellow", hex: "#FFEFA6", swatchClass: "yellow-60" } },
    { token: "yellow-50", value: { name: "Yellow", hex: "#FFE37D", swatchClass: "yellow-50" } },
    { token: "yellow-40", value: { name: "Yellow", hex: "#F0D053", swatchClass: "yellow-40" } },
    { token: "yellow-30", value: { name: "Yellow", hex: "#F0A303", swatchClass: "yellow-30" } },
    { token: "yellow-20", value: { name: "Yellow", hex: "#C98300", swatchClass: "yellow-20" } },
    { token: "yellow-10", value: { name: "Yellow", hex: "#A36500", swatchClass: "yellow-10" } },
    { token: "red-70", value: { name: "Red", hex: "#F2E3DA", swatchClass: "red-70" } },
    { token: "red-60", value: { name: "Red", hex: "#E6B093", swatchClass: "red-60" } },
    { token: "red-50", value: { name: "Red", hex: "#BF471F", swatchClass: "red-50" } },
    { token: "red-40", value: { name: "Red", hex: "#F91313", swatchClass: "red-40" } },
    { token: "red-30", value: { name: "Red", hex: "#B32700", swatchClass: "red-30" } },
    { token: "red-20", value: { name: "Red", hex: "#8C1A00", swatchClass: "red-20" } },
    { token: "red-10", value: { name: "Red", hex: "#660F00", swatchClass: "red-10" } },
  ];

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
      <div className="color-table">
          <table >
      <thead>
        <tr>
          {colorColumns.map((column, index) => (
            <th className="color-th" key={index}><div className="color-col">{column}</div></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {colorData.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
            <td>
              <div className="key">
                <div className="token-col">{row.token}</div>
                <div className="token-col2">{row.token}</div>
              </div>
            </td>
            <td>
              <div className="value">
                <div className="hex-color">
                  <div className="color1">Name - {row.value.name}</div>
                  <div className="color2">Hex Code - {row.value.hex}</div>
                </div>
                <div className={`swatch ${row.value.swatchClass}`}></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
          <h3>Greyscale Colors</h3>
          <div className="color-table">
          <table >
      <thead className="color-head">
        <tr className="color-row">
          {colorColumns.map((column, index) => (
            <th className="color-th" key={index}><div className="color-col">{column}</div></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {GreyscaleColorData.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
            <td>
              <div className="key">
                <div className="token-col">{row.token}</div>
                <div className="token-col2">{row.token}</div>
              </div>
            </td>
            <td>
              <div className="value">
                <div className="hex-color">
                  <div className="color1">Name - {row.value.name}</div>
                  <div className="color2">Hex Code - {row.value.hex}</div>
                </div>
                <div className={`swatch ${row.value.swatchClass}`}></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
          <h3>Function Colors</h3>
          <div className="color-table">
          <table >
      <thead className="color-head">
        <tr className="color-row">
          {colorColumns.map((column, index) => (
            <th className="color-th" key={index}><div className="color-col">{column}</div></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {FunctionColorData.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
            <td>
              <div className="key">
                <div className="token-col">{row.token}</div>
                <div className="token-col2">{row.token}</div>
              </div>
            </td>
            <td>
              <div className="value">
                <div className="hex-color">
                  <div className="color1">Name - {row.value.name}</div>
                  <div className="color2">Hex Code - {row.value.hex}</div>
                </div>
                <div className={`swatch ${row.value.swatchClass}`}></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
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
