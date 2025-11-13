import React, { useState } from "react";
import { Collapse, Button, SistentThemeProvider } from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const codes = [
  "  <SistentThemeProvider>\n       <Button onClick={() => setExpanded(!expanded)}>\n         {expanded ? 'Collapse' : 'Expand'}\n       </Button>\n       <Collapse in={expanded}>\n         <div>Content to be collapsed/expanded</div>\n       </Collapse>\n  </SistentThemeProvider>",
  "  <SistentThemeProvider>\n       <Button onClick={() => setExpanded(!expanded)}>\n         {expanded ? 'Collapse' : 'Expand'}\n       </Button>\n       <Collapse in={expanded}>\n         <div>Content that's expanded by default</div>\n       </Collapse>\n  </SistentThemeProvider>",
  "  <SistentThemeProvider>\n       <Button onClick={() => setExpanded(!expanded)}>\n         {expanded ? 'Collapse' : 'Expand'}\n       </Button>\n       <Collapse in={expanded} unmountOnExit>\n         <div>Content that unmounts when collapsed</div>\n       </Collapse>\n  </SistentThemeProvider>",
  "  <SistentThemeProvider>\n       <Button onClick={() => setExpanded(!expanded)}>\n         {expanded ? 'Fast Collapse' : 'Slow Expand'}\n       </Button>\n       <Collapse in={expanded} timeout={expanded ? 1000 : 300} easing={expanded ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'ease-out'}>\n         <div>Custom transition content</div>\n       </Collapse>\n  </SistentThemeProvider>",
];

const CollapseComponent = () => {
  const { isDark } = useStyledDarkMode();
  const location = useLocation();

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  return (
    <SistentLayout title="Collapse">
      <section className="content">
        <a id="Identity">
          <h2>Collapse</h2>
        </a>
        <p>
          The Collapse component provides a smooth, animated way to show and hide content.
          Below are various examples demonstrating its capabilities and usage patterns.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/collapse"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/collapse")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/collapse/guidance"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/collapse/guidance")}
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/collapse/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/collapse/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <p>
            The Collapse component provides a smooth, animated way to show and hide content.
            Below are various examples demonstrating its capabilities and usage patterns.
          </p>
          <a id="Basic Collapse">
            <h2>Basic Collapse</h2>
          </a>
          <p>A simple collapsible section that can be toggled with a button click.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" onClick={() => setExpanded1(!expanded1)}>
                  {expanded1 ? "Collapse" : "Expand"}
                </Button>
                <Collapse in={expanded1}>
                  <div>Content to be collapsed/expanded</div>
                </Collapse>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="collapse-basic" code={codes[0]} />
          </div>

          <a id="Default Expanded">
            <h2>Default Expanded</h2>
          </a>
          <p>A collapsible section that starts expanded by default.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="outlined" onClick={() => setExpanded2(!expanded2)}>
                  {expanded2 ? "Collapse" : "Expand"}
                </Button>
                <Collapse in={expanded2}>
                  <div>Content that's expanded by default</div>
                </Collapse>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="collapse-default-expanded" code={codes[1]} />
          </div>

          <a id="Unmount on Exit">
            <h2>Unmount on Exit</h2>
          </a>
          <p>Unmounts the content when collapsed for better performance with large content.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="text" onClick={() => setExpanded3(!expanded3)}>
                  {expanded3 ? "Collapse" : "Expand"}
                </Button>
                <Collapse in={expanded3} unmountOnExit>
                  <div>Content that unmounts when collapsed</div>
                </Collapse>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="collapse-unmount-on-exit" code={codes[2]} />
          </div>

          <a id="Custom Transition">
            <h2>Custom Transition</h2>
          </a>
          <p>Customize the transition duration and easing function.</p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" onClick={() => setExpanded4(!expanded4)}>
                  {expanded4 ? "Fast Collapse" : "Slow Expand"}
                </Button>
                <Collapse in={expanded4} timeout={expanded4 ? 1000 : 300} easing={expanded4 ? "cubic-bezier(0.4, 0, 0.2, 1)" : "ease-out"}>
                  <div>Custom transition content</div>
                </Collapse>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="collapse-custom-transition" code={codes[3]} />
          </div>
        </div>
      </section>
    </SistentLayout>
  );
};

export default CollapseComponent;