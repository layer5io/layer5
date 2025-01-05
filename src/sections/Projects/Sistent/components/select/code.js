import React from "react";

import { Button, SistentThemeProvider } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { SistentLayout } from "../../sistent-layout";

import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import SectionNav from "./section-nav";
import Header from "./header";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const codes = {
  "variant-outlined": `<SistentThemeProvider>
  <Select>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</SistentThemeProvider>`,

  "variant-filled": `<SistentThemeProvider>
  <Select variant="filled">
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</SistentThemeProvider>`,

  "variant-standard": `<SistentThemeProvider>
  <Select variant="standard">
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</SistentThemeProvider>`,

  "size-auto": `<SistentThemeProvider>
  <Select autoWidth>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</SistentThemeProvider>`,

  "size-small": `<SistentThemeProvider>
  <Select size="small">
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</SistentThemeProvider>`,

  "size-fullwidth": `<SistentThemeProvider>
  <Select fullWidth>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</SistentThemeProvider>`,

  "behavior-error-disabled": `<SistentThemeProvider>
  <Select disabled>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <Select error>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</SistentThemeProvider>`,

  "behavior-required": `<SistentThemeProvider>
  <FormControl required>
    <InputLabel id="demo-select-label-outlined">Age</InputLabel>
    <Select
      labelId="demo-select-label-outlined"
      label="Age"
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
</SistentThemeProvider>`,
};

const ButtonCode = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Button">
      <div className="content">
        <Header />
        <SectionNav />

        <div className="main-content">
          <a id="Select variants">
            <h2>Select variants</h2>
          </a>
          <p>
            The select comes in three types: Outlined, Filled, and Standard. To
            specify the variant, pass a value to the variant prop.
          </p>
          <h3>Outlined</h3>
          <p>
            If not specified, the default variant of the select if outlined.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="outlined-selection"
              code={codes["variant-outlined"]}
            />
          </div>
          <h3>Filled</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} variant="filled">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="filled-selection" code={codes["variant-filled"]} />
          </div>
          <h3>Standard</h3>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} variant="standard">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="standard-selection"
              code={codes["variant-standard"]}
            />
          </div>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            There are 3 size option for the select component: autowidth, small,
            and fullWidth. Depending on the size of the select, different prop
            can be passed to the component.
          </p>
          <h3>Autowidth</h3>
          <p>
            An autoWidth option is passed to the component to enable this
            attribute
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} autoWidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="size-auto" code={codes["size-auto"]} />
          </div>
          <h3>Small</h3>
          <p>
            To generate small select, pass a size prop with a value of small
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} size="small">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="size-small" code={codes["size-small"]} />
          </div>
          <h3>Full width</h3>
          <p>
            The select will expand the full width of its parent when passed
            fullWidth prop
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select defaultValue={10} fullWidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="size-fullwidth" code={codes["size-fullwidth"]} />
          </div>
          <a id="Customize behaviors">
            <h2>Customize behaviors</h2>
          </a>
          <p>
            Additional props such as error, required, and disabled can be passed
            to the select component to customize its behavior.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Select disabled defaultValue={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Select error defaultValue={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </SistentThemeProvider>
            </div>
            <CodeBlock
              name="behavior-error-disabled"
              code={codes["behavior-error-disabled"]}
            />
          </div>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <FormControl sx={{ width: "200px" }} required>
                  <InputLabel id="demo-select-label-outlined">Age</InputLabel>
                  <Select
                    labelId="demo-select-label-outlined"
                    id="demo-select-outlined"
                    label="Age"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="adding-icons" code={codes["behavior-required"]} />
            <p>
              <strong>NOTE:</strong>
            </p>
            <p>
              When the select component is marked as required, an asterisk is
              added to the label to indicate this to the user. It is recommended
              to use this feature in conjunction with the label for better
              clarity.
            </p>
          </div>
          <a id="Customize select area">
            <h2>Customize select area</h2>
          </a>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ButtonCode;
