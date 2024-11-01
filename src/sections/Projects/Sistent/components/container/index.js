import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Container, Box } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentContainer = () => {
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
            appearance while enhancing the user experience.
          </p>
          <a id="Types of Containers">
            <h2>Types of Container</h2>
          </a>
          <p>
            Sistent has two main types of containers that cater to different
            layout requirements: Fluid Containers and Fixed Containers. Each
            type serves specific use cases in building responsive web
            applications.
          </p>
          <h3>1. Fluid Container</h3>
          <p>
            A Fluid Container automatically adjusts its width to fill the
            available space based on the viewport size. It allows for a
            responsive layout that adapts to different screen sizes.
          </p>
          <h4>Usage</h4>
          <p>
            Ideal for layouts where you want the content to take full advantage
            of the available width. The fluid nature of the container ensures
            that it scales seamlessly across devices, from mobile to desktop.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Container maxWidth="sm">
                <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} />
              </Container>
            </SistentThemeProvider>
          </Row>

          <h3>2. Fixed Container</h3>
          <p>
            A Fixed Container has a predefined width that matches the minimum
            width of the current breakpoint. This allows for a consistent and
            controlled layout across different screen sizes.
          </p>
          <h4>Usage</h4>
          <p>
            Suitable for designs that require specific width constraints,
            ensuring that your content does not stretch too wide on larger
            screens. This is particularly useful for fixed-width layouts where
            the visual structure is maintained.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Container fixed>
                <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} />
              </Container>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentContainer;
