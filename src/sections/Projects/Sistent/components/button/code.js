import React from "react";
import { Button, SistentThemeProvider } from "@layer5/sistent";
import { CodeBlock } from "./code-block";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

const codes = [
  `  <SistentThemeProvider>
       <Button variant="contained">Filled</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="outlined">Outlined</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="text">Text</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="contained">48px Height</Button>
       <Button variant="contained">56px Height</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
      <Button
        variant="contained"
        size="medium"
        endIcon={<FaArrowRight size={12} />}
      >
        Next
      </Button>
  </SistentThemeProvider>`,
];

export const ButtonCode = () => {
  return (
    <div className="main-content">
      <p>
        Buttons communicate actions to users and they can be placed at several
        places throughout the user interface.
      </p>
      <a id="Basic Button">
        <h2>Basic Button</h2>
      </a>
      <p>The button comes in three types: Filled, Outlined, and Text.</p>
      <h3>Filled Button</h3>
      <p>
        Mostly used for high-emphasis actions and are primarily distinguished by
        their fill. They are used to represent actions that are primary to the
        solution.
      </p>
      <div className="showcase">
        <div className="items">
          <SistentThemeProvider>
            <Button variant="contained">Filled</Button>
          </SistentThemeProvider>
        </div>
        <CodeBlock name="filled-button" code={codes[0]} />
      </div>
      <h3>Outlined Button</h3>
      <p>Can be used for both medium and sometimes high-emphasis actions.</p>
      <div className="showcase">
        <div className="items">
          <SistentThemeProvider>
            <Button variant="outlined">Outlined</Button>
          </SistentThemeProvider>
        </div>
        <CodeBlock name="outlined-button" code={codes[1]} />
      </div>
      <h3>Text Button</h3>
      <p>
        Mostly used for less pronounced and very low emphasis actions. Can also
        be used for text links as well.
      </p>
      <div className="showcase">
        <div className="items">
          <SistentThemeProvider>
            <Button variant="text">Text</Button>
          </SistentThemeProvider>
        </div>
        <CodeBlock name="text-button" code={codes[2]} />
      </div>
      <a id="Sizes">
        <h2>Sizes</h2>
      </a>
      <p>
        For now, two different sizes of buttons exist: 56px height and 48px
        height.
      </p>
      <div className="showcase">
        <div className="items">
          <SistentThemeProvider>
            <Button variant="contained" size="medium" className="size-button">
              48px Height
            </Button>
            <Button variant="contained" size="large">
              56px Height
            </Button>
          </SistentThemeProvider>
        </div>
        <CodeBlock name="button-sizes" code={codes[3]} />
      </div>
      <a id="Adding Icons">
        <h2>Adding Icons</h2>
      </a>
      <p>
        Icons are mostly added to filled and outlined buttons and they are used
        to better describe the information being passed across by the button’s
        label.
      </p>
      <div className="showcase">
        <div className="items">
          <SistentThemeProvider>
            <Button
              variant="contained"
              size="medium"
              endIcon={<FaArrowRight size={12} />}
            >
              Next
            </Button>
          </SistentThemeProvider>
        </div>
        <CodeBlock name="adding-icons" code={codes[4]} />
      </div>
    </div>
  );
};
