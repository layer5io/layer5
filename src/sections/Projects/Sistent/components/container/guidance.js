import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Container, Box } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const ContainerGuidancePage = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Container">
      <div className="content">
        <a id="Identity">
          <h2>Container</h2>
        </a>
        <p>
          Containers are fundamental layout elements, used to center and
          structure content horizontally. They can be fluid or fixed, helping
          maintain alignment across different screen sizes and improving
          readability.
        </p>
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
            appearance while enhancing the user experience
          </p>

          <a id="Function">
            <h2>Function</h2>
          </a>

          <p>The Container serves various functions:</p>

          <h3>Fluid Container</h3>
          <p>
            A fluid container adapts to the width of its parent element and can
            have a maximum width set by the <code>maxWidth</code> prop. This is
            useful for creating responsive layouts that adjust based on screen
            size.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Container maxWidth="md">
                <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
                  <p style={{ color: "black" }}>
                    This is a fluid container that adjusts its width based on
                    the screen size.
                  </p>
                </Box>
              </Container>
            </SistentThemeProvider>
          </Row>

          <h3>Fixed Container</h3>
          <p>
            A fixed container uses predefined maximum widths based on
            breakpoints, providing a consistent layout across different screen
            sizes. This helps maintain a structured design that is visually
            appealing.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Container fixed>
                <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
                  <p style={{ color: "black" }}>
                    This is a fixed container with a max width defined by the
                    current breakpoint
                  </p>
                </Box>
              </Container>
            </SistentThemeProvider>
          </Row>

          <h3>Nested Containers</h3>
          <p>
            While nesting containers is possible, it is generally recommended to
            avoid it unless necessary. Proper use of containers can enhance
            layout structure without complicating the design.
          </p>
          <Row $Hcenter className="image-container">
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
          </Row>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            Container labeling is essential for understanding the layout
            structure. Use clear and descriptive headings to indicate the
            purpose of each container.
          </p>

          <h3>Use Cases</h3>
          <p>
            Different use cases for containers include wrapping content
            sections, creating responsive grids, and maintaining consistent
            padding and margins across various components.
          </p>

          <h3>Responsive Design</h3>
          <p>
            Leveraging the container's fluid and fixed properties contributes to
            a responsive design that provides a seamless user experience across
            devices of all sizes.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ContainerGuidancePage;
