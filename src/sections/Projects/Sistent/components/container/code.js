import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Container, Box } from "@layer5/sistent";
import { CodeBlock } from "../button/code-block";
// import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
      </Container>
  </SistentThemeProvider>`,

  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
      </Container>
  </SistentThemeProvider>`,

  `<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
      </Container>
  </SistentThemeProvider>
`,
  `
<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Container>
                <Container maxWidth="sm">
                  <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
                    <p style={{ color: "black" }}>
                      This is a nested container example.
                    </p>
                  </Box>
                </Container>
              </Container>
</SistentThemeProvider>
`,
];

const ContainerCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Container">
      <div className="content">
        <a id="Identity">
          <h2>Container</h2>
        </a>
        <p></p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/container"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/container")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/container/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/container/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/container/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/container/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Container component is an essential building block for creating
            layouts. Its ability to center content, provide fluid and fixed
            widths, and adapt responsively to different screen sizes makes it an
            invaluable tool for developers. By using the Container effectively,
            you can ensure that your application maintains a clean and organized
            appearance while enhancing the user experience.
          </p>
          <a id="Fluid Container">
            <h2>Fluid Container Example</h2>
          </a>
          <p>
            By default, the Container is fluid, meaning it adjusts its width
            based on the viewport size. You can control its maximum width by
            utilizing the maxWidth prop.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container maxWidth="sm">
                  <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} />
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="container-fluid-sm" code={codes[0]} />
          </div>
          <div>
            <h4>maxWidth Prop Values</h4>
            <p>
              The maxWidth prop accepts several predefined values, each
              corresponding to specific breakpoints. Here are the available
              options:
            </p>
            <ul>
              <li>
                <strong>"xs"</strong>: This sets the maximum width to the
                extra-small breakpoint (0px to 600px). The container will not
                exceed this width, providing a compact layout suitable for
                mobile devices.
              </li>
              <li>
                <strong>"sm"</strong>: The small breakpoint (600px to 960px)
                ensures that the container expands up to a width of 600px,
                making it a good choice for tablets and smaller desktops.
              </li>
              <li>
                <strong>"md"</strong>: This option sets the maximum width to the
                medium breakpoint (960px to 1280px). It is useful for standard
                desktop views while still accommodating smaller devices.
              </li>
              <li>
                <strong>"lg"</strong>: The large breakpoint (1280px to 1920px)
                allows the container to grow larger, up to 1280px, ideal for
                wide-screen displays and detailed layouts.
              </li>
              <li>
                <strong>"xl"</strong>: This sets the maximum width to the
                extra-large breakpoint (1920px and above). It's particularly
                beneficial for high-resolution screens where more content can be
                displayed without feeling cramped.
              </li>
              <li>
                <strong>false</strong>: If set to false, the container will have
                no maximum width constraint, allowing it to stretch the full
                width of its parent element.
              </li>
            </ul>
          </div>

          <div>
            <h4>
              Another Example with <strong>maxWith = "md"</strong>
            </h4>
            <div className="showcase">
              <div className="items">
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Container maxWidth="md">
                    <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} />
                  </Container>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="Container-fluid-md" code={codes[1]} />
            </div>
          </div>
          <a id="Fixed Container">
            <h2>Fixed Container Example</h2>
          </a>
          <p>
            If you prefer a fixed width, you can use the fixed prop. This aligns
            the container's max-width with the minimum width of the current
            breakpoint, ensuring that your layout remains consistent across
            different screen sizes
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container fixed>
                  <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} />
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Container-fixed" code={codes[2]} />
          </div>
          <a id="Nested Container">
            <h2>Nested Container Example</h2>
            <p>
              A small section on nesting containers, emphasizing best practices.
            </p>
          </a>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Container>
                  <Container maxWidth="sm">
                    <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} />
                  </Container>
                </Container>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Nested-container-fluid" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ContainerCode;
