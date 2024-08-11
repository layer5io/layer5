import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import TextColors from "../../../../../assets/images/app/projects/sistent/text-colors-table.png";
import BorderColors from "../../../../../assets/images/app/projects/sistent/border-colors-table.png";
import ComponentColors from "../../../../../assets/images/app/projects/sistent/components-table.png";

import { SistentLayout } from "../../sistent-layout";
import { Col, Row } from "../../../../../reusecore/Layout";
import Button from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

// all color-data
import AdditionalColorData from "./data/additionalColorData.json";
import BackgroundColorData from "./data/backgroundColorData.json";
import BorderColorData from "./data/borderColorData.json";
import ColorData from "./data/colorData.json";
import ComponentColorData from "./data/componentColorData.json";
import FunctionColorData from "./data/functionColorData.json";
import GreyScaleColorData from "./data/greyScaleColorData.json";
import TextColorData from "./data/textColorData.json";

const ColorCode = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();
  const getColorColumns = (isPlusRole) => {
    if (isPlusRole) {
      return ["Token", "Value", "Description"];
    }
    return ["Token", "Value"];
  };

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
          <br></br>
          <div className="color-table">
            <table>
              <thead>
                <tr>
                  {getColorColumns(false).map((column, index) => (
                    <th className="color-th" key={index}>
                      <div className="color-col">{column}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ColorData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "shades" : "light"}
                  >
                    <td>
                      <div className="key">
                        <div className="token-col2">{row.token}</div>
                      </div>
                    </td>
                    <td>
                      <div className="value">
                        <div className="hex-color">
                          <div className="color1">Name - {row.value.name}</div>
                          <div className="color2">
                            Hex Code - {row.value.hex}
                          </div>
                        </div>
                        <div
                          className="swatch"
                          style={{ backgroundColor: `${row.value.hex}` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h3>Greyscale Colors</h3>
      <br></br>
      <div className="color-table">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(false).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GreyScaleColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <h3>Function Colors</h3>
      <br></br>
      <div className="color-table">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(false).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FunctionColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr></hr>
      <h2>Semantic Category</h2>
      <p>
        The semantic category has been sub-categorized into background, text,
        brand, border, and functions. Possibility for a few more categories
        exists as the need arises.
      </p>
      <h3>Background Colors</h3>
      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BackgroundColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Text Colors</h3>
      <p>Use this only for text input and content.</p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TextColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch text-colors"
                      style={{ color: `${row.value.hex}` }}
                    >
                      Aa
                    </div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <h3>Border Colors</h3>
      <p>Use this only for lines and borders of interface elements.</p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            { BorderColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div className="container">
                      <div
                        className="inner-box"
                        style={{ color: `${row.value.hex}` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <h3>Component Colors</h3>
      <p>
        Tokens here are component specific and must be used only for the
        component that they are referencing.
      </p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ComponentColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Additional Colors</h3>
      <p>
        These colors have been added to improve brand theming and enhance color
        accessibility across websites and solutions, ensuring that accessibility
        standards and requirements are met. This is a neutral palette designed
        to serve as a brand palette for the light theme.
      </p>

      <br></br>
      <div className="color-table plus-role">
        <table>
          <thead className="color-head">
            <tr className="color-row">
              {getColorColumns(true).map((column, index) => (
                <th className="color-th" key={index}>
                  <div className="color-col">{column}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AdditionalColorData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "shades" : "light"}>
                <td>
                  <div className="key">
                    <div className="token-col2">{row.token}</div>
                  </div>
                </td>
                <td>
                  <div className="value">
                    <div className="hex-color">
                      <div className="color1">Name - {row.value.name}</div>
                      <div className="color2">Hex Code - {row.value.hex}</div>
                    </div>
                    <div
                      className="swatch"
                      style={{ backgroundColor: `${row.value.hex}` }}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className="role">
                    <div className="role-description"> {row.role}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr></hr>
    </SistentLayout>
  );
};

export default ColorCode;
